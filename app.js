// =============================================================================
// GAME STATE MANAGEMENT
// =============================================================================

const INTERVIEW_QUESTION_COUNT = 10;
const INTERVIEW_SECONDS_PER_QUESTION = 90;

const GameState = {
    // Screens
    START: 'start',
    MODE_SELECT: 'mode_select',
    QUESTION: 'question',
    FEEDBACK: 'feedback',
    RESULTS: 'results',
    REVIEW: 'review',

    // Game modes
    PRACTICE: 'practice',
    INTERVIEW: 'interview',

    // Current session
    currentScreen: 'start',
    currentMode: null,
    currentQuestionIndex: 0,
    currentQuestion: null,
    selectedAnswer: null,
    sessionAnswers: [],
    sessionStartTime: null,
    sessionEndTime: null,
    answerLocked: false,

    // Question bank
    practiceQuestions: [],
    interviewQuestions: [],
    allQuestions: [],

    // Scoring
    scores: {
        overall: 0,
        byCompetency: {}
    },

    // Session data
    sessionData: null,

    // Review filters
    reviewFilter: 'all'
};

// =============================================================================
// SCORING AND COMPETENCY SYSTEM
// =============================================================================

const Scoring = {
    // Competency categories
    COMPETENCIES: [
        'Product Strategy',
        'Customer Discovery',
        'AI and ML Fundamentals',
        'Data Strategy',
        'AI Evaluation',
        'Metrics and Experimentation',
        'Technical Trade-offs',
        'Responsible AI and Governance',
        'Privacy and Security',
        'Human-in-the-Loop Design',
        'Product Execution',
        'Prioritization and MVP Scoping',
        'Stakeholder Management',
        'Enterprise AI Products',
        'Communication and Leadership',
        'Post-Launch Monitoring',
        'Agentic AI Systems',
        'Business and Monetization'
    ],

    initializeCompetencies() {
        const scores = {};
        this.COMPETENCIES.forEach(comp => {
            scores[comp] = {
                points: 0,
                available: 0,
                questions: 0
            };
        });
        return scores;
    },

    calculateAnswerScore(question, selectedOptionId) {
        const option = question.options.find(o => o.id === selectedOptionId);
        return option ? option.score : 0;
    },

    updateCompetencyScore(scores, question, optionScore) {
        const primary = question.primaryCompetency;
        if (scores[primary]) {
            scores[primary].points += optionScore;
            scores[primary].available += 3;
            scores[primary].questions += 1;
        }

        // Secondary competencies get partial credit
        question.secondaryCompetencies?.forEach(secondary => {
            if (scores[secondary]) {
                scores[secondary].points += Math.floor(optionScore * 0.5);
                scores[secondary].available += 2;
            }
        });
    },

    getCompetencyPercentage(comp) {
        if (comp.available === 0) return 0;
        return Math.round((comp.points / comp.available) * 100);
    },

    getCompetencyLabel(percentage) {
        if (percentage >= 85) return 'Strong';
        if (percentage >= 70) return 'Interview Ready';
        if (percentage >= 55) return 'Developing';
        if (percentage >= 40) return 'Significant Gap';
        return 'Critical Gap';
    },

    calculateSessionScore(sessionAnswers) {
        let totalPoints = 0;
        let totalAvailable = 0;

        sessionAnswers.forEach(answer => {
            if (answer.selectedScore !== null) {
                totalPoints += answer.selectedScore;
                totalAvailable += 3;
            }
        });

        return totalAvailable > 0 ? Math.round((totalPoints / totalAvailable) * 100) : 0;
    },

    calculateAggregateConsequences(sessionAnswers) {
        const aggregated = {};
        sessionAnswers.forEach(answer => {
            if (answer.consequences) {
                Object.entries(answer.consequences).forEach(([key, value]) => {
                    aggregated[key] = (aggregated[key] || 0) + value;
                });
            }
        });
        return aggregated;
    }
};

// =============================================================================
// PERSISTENCE
// =============================================================================

const Persistence = {
    STORAGE_KEYS: {
        BEST_SCORE: 'ai_pm_best_score',
        SESSIONS: 'ai_pm_sessions',
        BEST_BY_COMPETENCY: 'ai_pm_best_competency',
        CURRENT_PRACTICE: 'ai_pm_current_practice'
    },

    saveBestScore(score) {
        const current = parseInt(localStorage.getItem(this.STORAGE_KEYS.BEST_SCORE) || '0', 10);
        if (score > current) {
            localStorage.setItem(this.STORAGE_KEYS.BEST_SCORE, score.toString());
        }
    },

    saveSession(sessionData) {
        const sessions = JSON.parse(localStorage.getItem(this.STORAGE_KEYS.SESSIONS) || '[]');
        sessions.unshift(sessionData);
        // Keep only last 5 sessions
        sessions.splice(5);
        localStorage.setItem(this.STORAGE_KEYS.SESSIONS, JSON.stringify(sessions));
    },

    getSessions() {
        return JSON.parse(localStorage.getItem(this.STORAGE_KEYS.SESSIONS) || '[]');
    },

    getBestScore() {
        return parseInt(localStorage.getItem(this.STORAGE_KEYS.BEST_SCORE) || '0', 10);
    },

    saveBestCompetencyScores(scores) {
        localStorage.setItem(this.STORAGE_KEYS.BEST_BY_COMPETENCY, JSON.stringify(scores));
    },

    getBestCompetencyScores() {
        return JSON.parse(localStorage.getItem(this.STORAGE_KEYS.BEST_BY_COMPETENCY) || '{}');
    },

    savePracticeSession(sessionData) {
        localStorage.setItem(this.STORAGE_KEYS.CURRENT_PRACTICE, JSON.stringify(sessionData));
    },

    getPracticeSession() {
        const data = localStorage.getItem(this.STORAGE_KEYS.CURRENT_PRACTICE);
        return data ? JSON.parse(data) : null;
    },

    clearPracticeSession() {
        localStorage.removeItem(this.STORAGE_KEYS.CURRENT_PRACTICE);
    }
};

// =============================================================================
// QUESTION UTILITIES
// =============================================================================

const QuestionUtils = {
    validateQuestionBank(questions) {
        const errors = [];

        // Check for 100 questions
        if (questions.length !== 100) {
            errors.push(`Expected 100 questions, found ${questions.length}`);
        }

        // Check unique IDs
        const ids = new Set();
        questions.forEach((q, idx) => {
            if (ids.has(q.id)) {
                errors.push(`Duplicate question ID: ${q.id}`);
            }
            ids.add(q.id);

            // Check 4 options
            if (!q.options || q.options.length !== 4) {
                errors.push(`Question ${q.id}: Expected 4 options, found ${q.options?.length || 0}`);
            }

            // Check exactly one score-3 option
            const score3Options = q.options.filter(o => o.score === 3);
            if (score3Options.length !== 1) {
                errors.push(`Question ${q.id}: Expected 1 score-3 option, found ${score3Options.length}`);
            }

            // Check bestOptionId matches
            const bestOption = q.options.find(o => o.id === q.bestOptionId);
            if (!bestOption || bestOption.score !== 3) {
                errors.push(`Question ${q.id}: bestOptionId doesn't match score-3 option`);
            }

            // Check competencies
            if (!Scoring.COMPETENCIES.includes(q.primaryCompetency)) {
                errors.push(`Question ${q.id}: Invalid primary competency "${q.primaryCompetency}"`);
            }

            q.secondaryCompetencies?.forEach(comp => {
                if (!Scoring.COMPETENCIES.includes(comp)) {
                    errors.push(`Question ${q.id}: Invalid secondary competency "${comp}"`);
                }
            });

            // Check scores are 0-3
            q.options.forEach(opt => {
                if (opt.score < 0 || opt.score > 3) {
                    errors.push(`Question ${q.id}, Option ${opt.id}: Score must be 0-3, got ${opt.score}`);
                }
            });
        });

        if (errors.length > 0) {
            console.error('Question bank validation errors:');
            errors.forEach(e => console.error(`  - ${e}`));
            return false;
        }

        console.log('✓ Question bank validation passed (100 questions, all valid)');
        return true;
    },

    getScenarioBasedCount(questions) {
        return questions.filter(q => q.type === 'scenario').length;
    },

    selectRandomQuestions(questions, count) {
        if (!questions || questions.length === 0) {
            return [];
        }

        const target = Math.min(count, questions.length);
        const byCompetency = {};
        questions.forEach(q => {
            if (!byCompetency[q.primaryCompetency]) {
                byCompetency[q.primaryCompetency] = [];
            }
            byCompetency[q.primaryCompetency].push(q);
        });

        const selected = [];
        const usedIds = new Set();
        const competencies = Object.keys(byCompetency).sort(() => Math.random() - 0.5);

        // Round-robin across competencies for balance
        let safety = 0;
        while (selected.length < target && safety < questions.length * 3) {
            safety++;
            let addedThisPass = false;
            for (const comp of competencies) {
                if (selected.length >= target) break;
                const candidates = byCompetency[comp].filter(q => !usedIds.has(q.id));
                if (candidates.length === 0) continue;
                const pick = candidates[Math.floor(Math.random() * candidates.length)];
                selected.push(pick);
                usedIds.add(pick.id);
                addedThisPass = true;
            }
            if (!addedThisPass) break;
        }

        // Fill remaining from any unused questions
        if (selected.length < target) {
            const remaining = questions.filter(q => !usedIds.has(q.id));
            for (let i = remaining.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [remaining[i], remaining[j]] = [remaining[j], remaining[i]];
            }
            while (selected.length < target && remaining.length > 0) {
                selected.push(remaining.pop());
            }
        }

        return selected;
    }
};

// =============================================================================
// TIMER
// =============================================================================

const Timer = {
    timeRemaining: 0,
    totalTime: 0,
    isRunning: false,
    intervalId: null,

    start(seconds) {
        this.stop();
        this.timeRemaining = seconds;
        this.totalTime = seconds;
        this.isRunning = true;
        UI.updateTimer();

        this.intervalId = setInterval(() => {
            this.timeRemaining--;
            UI.updateTimer();

            if (this.timeRemaining <= 0) {
                this.stop();
                handleTimeExpired();
            }
        }, 1000);
    },

    stop() {
        this.isRunning = false;
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    },

    getFormattedTime() {
        const mins = Math.floor(Math.max(0, this.timeRemaining) / 60);
        const secs = Math.max(0, this.timeRemaining) % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    },

    getProgressPercentage() {
        if (!this.totalTime) return 0;
        return Math.round((this.timeRemaining / this.totalTime) * 100);
    }
};

// =============================================================================
// UI RENDERING
// =============================================================================

const UI = {
    appContainer: null,

    init() {
        this.appContainer = document.getElementById('app');
    },

    render(screen) {
        this.appContainer.innerHTML = '';
        switch (screen) {
            case GameState.START:
                this.renderStartScreen();
                break;
            case GameState.MODE_SELECT:
                this.renderModeSelectScreen();
                break;
            case GameState.QUESTION:
                this.renderQuestionScreen();
                break;
            case GameState.FEEDBACK:
                this.renderFeedbackScreen();
                break;
            case GameState.RESULTS:
                this.renderResultsScreen();
                break;
            case GameState.REVIEW:
                this.renderReviewScreen();
                break;
        }
    },

    renderStartScreen() {
        const el = document.createElement('div');
        el.className = 'screen start-screen';
        el.innerHTML = `
            <div class="screen-content">
                <h1>AI PM Interview Practice</h1>
                <p class="subtitle">Master difficult product decisions</p>
                <p class="description">
                    Practice realistic AI product management scenarios. Make decisions, see consequences, 
                    and understand the trade-offs. Identify strengths and development areas to excel in interviews.
                </p>
                <div class="mode-selection">
                    <div class="mode-card" onclick="handleModeSelect()">
                        <h3>Start Game</h3>
                        <p>Choose your game mode and begin</p>
                    </div>
                    <div class="mode-card" onclick="handleReviewPreviousSessions()">
                        <h3>Previous Sessions</h3>
                        <p>Review past attempts and results</p>
                    </div>
                </div>
            </div>
        `;
        this.appContainer.appendChild(el);
    },

    renderModeSelectScreen() {
        const el = document.createElement('div');
        el.className = 'screen';
        el.innerHTML = `
            <div class="screen-content">
                <div class="card">
                    <div class="card-header">
                        <h2 class="card-title">Select Game Mode</h2>
                    </div>
                    <div class="mode-selection">
                        <div class="mode-card" onclick="startPracticeMode()">
                            <h3>Practice Mode</h3>
                            <p>
                                Work through all 100 questions at your own pace. 
                                Get immediate feedback and explanations.
                            </p>
                        </div>
                        <div class="mode-card" onclick="startInterviewMode()">
                            <h3>Interview Simulation</h3>
                            <p>
                                ${INTERVIEW_QUESTION_COUNT} random balanced questions with ${INTERVIEW_SECONDS_PER_QUESTION} seconds each.
                                Get final results only. Real interview conditions.
                            </p>
                        </div>
                    </div>
                    <div style="margin-top: 30px;">
                        <button class="btn-secondary" onclick="navigateTo('${GameState.START}')">Back</button>
                    </div>
                </div>
            </div>
        `;
        this.appContainer.appendChild(el);
    },

    renderQuestionScreen() {
        const question = GameState.currentQuestion;
        const questionNumber = GameState.currentQuestionIndex + 1;
        const totalQuestions = GameState.currentMode === GameState.PRACTICE 
            ? GameState.practiceQuestions.length 
            : GameState.interviewQuestions.length;
        const progress = (questionNumber / totalQuestions) * 100;
        const isInterview = GameState.currentMode === GameState.INTERVIEW;

        const el = document.createElement('div');
        el.className = 'screen';
        el.innerHTML = `
            <div class="screen-content question-screen">
                <div class="question-header">
                    <div>
                        <div class="question-counter" id="question-counter">
                            <span class="counter-current">${questionNumber}</span>
                            <span class="counter-divider">/</span>
                            <span class="counter-total">${totalQuestions}</span>
                        </div>
                        <div class="question-number">Question ${questionNumber} of ${totalQuestions}</div>
                        <div class="progress-bar-container">
                            <div class="progress-bar-fill" style="width: ${progress}%"></div>
                        </div>
                        <div class="progress-text">${Math.round(progress)}% Complete</div>
                    </div>
                    <div class="question-meta">
                        <span class="badge badge-difficulty ${question.difficulty}">${question.difficulty}</span>
                        <span class="badge badge-competency">${question.primaryCompetency}</span>
                        ${isInterview ? 
                            `<div class="timer" id="timer-display">${Timer.getFormattedTime()}</div>` 
                            : ''}
                    </div>
                </div>

                <div class="scenario">${question.scenario}</div>

                <div class="question-text">${question.question}</div>

                <div class="options" id="options-list">
                    ${question.options.map((option) => `
                        <div class="option ${GameState.selectedAnswer === option.id ? 'selected' : ''}" 
                             data-option-id="${option.id}"
                             onclick="selectOption('${option.id}')" 
                             tabindex="0"
                             role="button"
                             aria-label="Option ${option.id}: ${option.text}">
                            <div class="option-label">${option.id}</div>
                            <div class="option-content">
                                <div class="option-text">${option.text}</div>
                            </div>
                        </div>
                    `).join('')}
                </div>

                <div class="question-footer">
                    <button class="btn-primary btn-confirm" id="confirm-btn" onclick="confirmAnswer()" 
                            ${!GameState.selectedAnswer || GameState.answerLocked ? 'disabled' : ''}>
                        Confirm Answer
                    </button>
                    <button class="btn-abandon" onclick="handleAbandonSession()">Exit to Menu</button>
                </div>
            </div>
        `;
        this.appContainer.appendChild(el);

        if (isInterview && !Timer.isRunning) {
            Timer.start(INTERVIEW_SECONDS_PER_QUESTION);
        }
    },

    renderFeedbackScreen() {
        const question = GameState.currentQuestion;
        const selectedOption = question.options.find(o => o.id === GameState.selectedAnswer);
        const bestOption = question.options.find(o => o.id === question.bestOptionId);
        const score = selectedOption.score;
        const scoreLabel = score === 3 ? 'strong' : score === 2 ? 'partial' : 'weak';

        const el = document.createElement('div');
        el.className = 'screen';
        el.innerHTML = `
            <div class="screen-content feedback-screen">
                <div class="feedback-header">
                    <span class="score-display ${scoreLabel}">
                        ${score}/3 Points Earned
                    </span>
                    <p style="margin-top: 10px; color: #7f8c8d;">
                        You selected: <strong>${selectedOption.text}</strong>
                    </p>
                </div>

                ${selectedOption.consequenceMetrics ? `
                    <div class="feedback-section">
                        <label class="feedback-label">Decision Consequences</label>
                        <div class="consequence-grid">
                            ${Object.entries(selectedOption.consequenceMetrics).map(([key, value]) => `
                                <div class="consequence-item">
                                    <div class="consequence-label">${this.formatMetricLabel(key)}</div>
                                    <div class="consequence-value ${value > 0 ? 'positive' : value < 0 ? 'negative' : ''}">
                                        ${value > 0 ? '+' : ''}${value}
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}

                <div class="feedback-section">
                    <label class="feedback-label">Why This Decision</label>
                    <div class="feedback-text">${selectedOption.feedback}</div>
                </div>

                ${selectedOption.tradeoffs && selectedOption.tradeoffs.length > 0 ? `
                    <div class="feedback-section">
                        <label class="feedback-label">Trade-offs Created</label>
                        <ul class="tradeoffs-list">
                            ${selectedOption.tradeoffs.map(t => `<li>${t}</li>`).join('')}
                        </ul>
                    </div>
                ` : ''}

                ${selectedOption.id !== question.bestOptionId ? `
                    <div class="best-answer-section">
                        <label class="feedback-label">Stronger Answer</label>
                        <p style="margin-bottom: 10px;">
                            <strong>${bestOption.text}</strong>
                        </p>
                        <div class="feedback-text">${question.bestAnswerExplanation}</div>
                    </div>
                ` : `
                    <div class="best-answer-section">
                        <label class="feedback-label">Why This Is The Best Answer</label>
                        <div class="feedback-text">${question.bestAnswerExplanation}</div>
                    </div>
                `}

                ${question.interviewInsight ? `
                    <div class="feedback-section">
                        <label class="feedback-label">Interview Insight</label>
                        <div class="feedback-text">${question.interviewInsight}</div>
                    </div>
                ` : ''}

                ${question.learningPoint ? `
                    <div class="feedback-section">
                        <label class="feedback-label">Learning Point</label>
                        <div class="feedback-text">${question.learningPoint}</div>
                    </div>
                ` : ''}

                <div style="margin-top: 30px; display: flex; gap: 15px;">
                    <button class="btn-primary" onclick="nextQuestion()">Next Question</button>
                    <button class="btn-secondary" onclick="handleAbandonSession()">Exit to Menu</button>
                </div>
            </div>
        `;
        this.appContainer.appendChild(el);
    },

    renderResultsScreen() {
        const session = GameState.sessionData;
        const score = Scoring.calculateSessionScore(session.answers);
        const aggregateConsequences = Scoring.calculateAggregateConsequences(session.answers);

        // Count answer types
        let strong = 0, partial = 0, weak = 0, unanswered = 0;
        session.answers.forEach(answer => {
            if (answer.selectedScore === null) unanswered++;
            else if (answer.selectedScore === 3) strong++;
            else if (answer.selectedScore === 2) partial++;
            else weak++;
        });

        // Find top strengths and gaps
        const competencyScores = Object.entries(session.competencyScores)
            .map(([name, comp]) => ({
                name,
                percentage: Scoring.getCompetencyPercentage(comp),
                label: Scoring.getCompetencyLabel(Scoring.getCompetencyPercentage(comp))
            }))
            .sort((a, b) => b.percentage - a.percentage);

        const strengths = competencyScores.slice(0, 3);
        const gaps = competencyScores.slice(-3).reverse();

        let readinessClass = 'readiness-critical';
        let readinessLabel = 'Critical Gap';
        if (score >= 85) { readinessClass = 'readiness-strong'; readinessLabel = 'Strong'; }
        else if (score >= 70) { readinessClass = 'readiness-ready'; readinessLabel = 'Interview Ready'; }
        else if (score >= 55) { readinessClass = 'readiness-developing'; readinessLabel = 'Developing'; }
        else if (score >= 40) { readinessClass = 'readiness-gap'; readinessLabel = 'Significant Gap'; }

        const el = document.createElement('div');
        el.className = 'screen';
        el.innerHTML = `
            <div class="screen-content results-screen">
                <div class="results-header">
                    <div class="final-score">${score}%</div>
                    <div class="readiness-badge ${readinessClass}">${readinessLabel}</div>
                    <p style="margin-top: 20px; color: #7f8c8d; font-size: 0.95em;">
                        ${session.mode === 'interview' ? `${INTERVIEW_QUESTION_COUNT} questions in Interview Simulation` : 'Practice session complete'}
                    </p>
                </div>

                <div class="results-grid">
                    <div class="results-stat">
                        <div class="results-stat-value" style="color: #27ae60;">${strong}</div>
                        <div class="results-stat-label">Strong Answers</div>
                    </div>
                    <div class="results-stat">
                        <div class="results-stat-value" style="color: #f39c12;">${partial}</div>
                        <div class="results-stat-label">Partial Answers</div>
                    </div>
                    <div class="results-stat">
                        <div class="results-stat-value" style="color: #e74c3c;">${weak}</div>
                        <div class="results-stat-label">Weak Answers</div>
                    </div>
                    <div class="results-stat">
                        <div class="results-stat-value" style="color: #95a5a6;">${unanswered}</div>
                        <div class="results-stat-label">Unanswered</div>
                    </div>
                </div>

                <div class="competency-breakdown">
                    <h3>Competency Performance</h3>
                    ${competencyScores.map(comp => `
                        <div class="competency-bar">
                            <div class="competency-row">
                                <div class="competency-name">${comp.name}</div>
                                <div class="competency-bar-container">
                                    <div class="competency-bar-fill" style="width: ${comp.percentage}%">
                                        ${comp.percentage > 30 ? comp.percentage + '%' : ''}
                                    </div>
                                </div>
                                <div class="competency-score">${comp.percentage}%</div>
                            </div>
                        </div>
                    `).join('')}
                </div>

                <div class="insights-section">
                    <h3>Key Insights</h3>
                    <div class="insight-item">
                        <span class="insight-label">Top Strengths</span>
                        <div class="insight-text">
                            ${strengths.map(c => `<div>• ${c.name}: ${c.percentage}%</div>`).join('')}
                        </div>
                    </div>
                    <div class="insight-item">
                        <span class="insight-label">Development Areas</span>
                        <div class="insight-text">
                            ${gaps.map(c => `<div>• ${c.name}: ${c.percentage}%</div>`).join('')}
                        </div>
                    </div>
                    <div class="insight-item">
                        <span class="insight-label">Recommendation</span>
                        <div class="insight-text">
                            ${this.getRecommendation(score, session)}
                        </div>
                    </div>
                </div>

                <div class="results-actions">
                    <button class="btn-primary" onclick="navigateTo('${GameState.START}')">Return to Start</button>
                    <button class="btn-secondary" onclick="reviewSession()">Review Answers</button>
                </div>
            </div>
        `;
        this.appContainer.appendChild(el);

        Persistence.saveBestScore(score);
        Persistence.saveSession(session);
    },

    renderReviewScreen() {
        const session = GameState.sessionData;
        const el = document.createElement('div');
        el.className = 'screen';

        const getFilteredAnswers = () => {
            if (GameState.reviewFilter === 'all') return session.answers;
            if (GameState.reviewFilter === 'strong') return session.answers.filter(a => a.selectedScore === 3);
            if (GameState.reviewFilter === 'partial') return session.answers.filter(a => a.selectedScore === 2);
            if (GameState.reviewFilter === 'weak') return session.answers.filter(a => a.selectedScore === 1);
            if (GameState.reviewFilter === 'unanswered') return session.answers.filter(a => a.selectedScore === null);
            return session.answers;
        };

        const filtered = getFilteredAnswers();

        el.innerHTML = `
            <div class="screen-content review-screen">
                <div class="review-header">
                    <h2 class="card-title">Review Session Answers</h2>
                </div>

                <div class="review-filters">
                    <button class="filter-btn ${GameState.reviewFilter === 'all' ? 'active' : ''}" 
                            onclick="setReviewFilter('all')">All (${session.answers.length})</button>
                    <button class="filter-btn ${GameState.reviewFilter === 'strong' ? 'active' : ''}" 
                            onclick="setReviewFilter('strong')">Strong (${session.answers.filter(a => a.selectedScore === 3).length})</button>
                    <button class="filter-btn ${GameState.reviewFilter === 'partial' ? 'active' : ''}" 
                            onclick="setReviewFilter('partial')">Partial (${session.answers.filter(a => a.selectedScore === 2).length})</button>
                    <button class="filter-btn ${GameState.reviewFilter === 'weak' ? 'active' : ''}" 
                            onclick="setReviewFilter('weak')">Weak (${session.answers.filter(a => a.selectedScore === 1).length})</button>
                    <button class="filter-btn ${GameState.reviewFilter === 'unanswered' ? 'active' : ''}" 
                            onclick="setReviewFilter('unanswered')">Unanswered (${session.answers.filter(a => a.selectedScore === null).length})</button>
                </div>

                <div class="review-list">
                    ${filtered.map((answer, idx) => {
                        const scoreClass = answer.selectedScore === 3 ? 'strong' : 
                                          answer.selectedScore === 2 ? 'partial' : 
                                          answer.selectedScore === 1 ? 'weak' : 'unanswered';
                        const badgeClass = answer.selectedScore === 3 ? 'score-3' : 
                                          answer.selectedScore === 2 ? 'score-2' : 
                                          answer.selectedScore === 1 ? 'score-1' : 'score-0';
                        
                        return `
                            <div class="review-item ${scoreClass}">
                                <div class="review-question-header">
                                    <div class="review-question-number">Q${answer.questionNumber}</div>
                                    ${answer.selectedScore !== null ? 
                                        `<span class="review-score-badge ${badgeClass}">${answer.selectedScore}/3</span>` 
                                        : `<span class="review-score-badge ${badgeClass}">Unanswered</span>`}
                                </div>
                                <div class="review-answer">
                                    <div class="review-answer-label">Question:</div>
                                    <div class="review-answer-text">${answer.question}</div>
                                </div>
                                ${answer.selectedAnswer ? `
                                    <div class="review-answer">
                                        <div class="review-answer-label">Your Answer:</div>
                                        <div class="review-answer-text">${answer.selectedAnswer}</div>
                                    </div>
                                ` : ''}
                                <div class="review-answer">
                                    <div class="review-answer-label">Best Answer:</div>
                                    <div class="review-answer-text">${answer.bestAnswer}</div>
                                </div>
                                <div class="review-answer" style="margin-bottom: 0;">
                                    <div class="review-answer-label">Competency:</div>
                                    <div class="review-answer-text">${answer.competency}</div>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>

                <div style="margin-top: 30px; display: flex; gap: 15px;">
                    <button class="btn-primary" onclick="navigateTo('${GameState.START}')">Return to Start</button>
                </div>
            </div>
        `;
        this.appContainer.appendChild(el);
    },

    updateTimer() {
        const timerDisplay = document.getElementById('timer-display');
        if (timerDisplay) {
            timerDisplay.textContent = Timer.getFormattedTime();
            if (Timer.timeRemaining <= 30 && Timer.timeRemaining > 10) {
                timerDisplay.className = 'timer warning';
            } else if (Timer.timeRemaining <= 10) {
                timerDisplay.className = 'timer critical';
            }
        }
    },

    formatMetricLabel(key) {
        const labels = {
            customerTrust: 'Customer Trust',
            businessValue: 'Business Value',
            deliverySpeed: 'Delivery Speed',
            reliability: 'Reliability',
            complianceRisk: 'Compliance Risk',
            technicalDebt: 'Technical Debt',
            securityRisk: 'Security Risk',
            teamMorale: 'Team Morale',
            adoption: 'Adoption',
            revenue: 'Revenue',
            stakeholderConfidence: 'Stakeholder Confidence',
            operatingCost: 'Operating Cost'
        };
        return labels[key] || key;
    },

    getRecommendation(score, session) {
        if (score >= 85) {
            return 'Excellent preparation. You demonstrate strong product thinking and decision-making. Focus on depth in areas with lower scores.';
        } else if (score >= 70) {
            return 'Interview-ready. You have solid fundamentals. Practice scenarios in your development areas to strengthen weaker competencies.';
        } else if (score >= 55) {
            return 'Developing skills. Continue practicing, especially in areas scoring below 50%. Review feedback carefully to understand decision patterns.';
        } else if (score >= 40) {
            return 'Significant gaps identified. Consider focused study on weak competencies before interviewing. Review each question\'s learning points.';
        } else {
            return 'Critical gaps. Take time to study AI product management fundamentals. Review all answers and explanations before next attempt.';
        }
    }
};

// =============================================================================
// GAME FLOW HANDLERS
// =============================================================================

function navigateTo(screen) {
    GameState.currentScreen = screen;
    UI.render(screen);
}

function handleModeSelect() {
    navigateTo(GameState.MODE_SELECT);
}

function startPracticeMode() {
    Timer.stop();
    GameState.currentMode = GameState.PRACTICE;
    GameState.practiceQuestions = [...GameState.allQuestions];
    GameState.currentQuestionIndex = 0;
    GameState.sessionAnswers = [];
    GameState.selectedAnswer = null;
    GameState.answerLocked = false;
    GameState.sessionStartTime = Date.now();
    GameState.scores = {
        overall: 0,
        byCompetency: Scoring.initializeCompetencies()
    };

    showNextQuestion();
}

function startInterviewMode() {
    Timer.stop();
    GameState.currentMode = GameState.INTERVIEW;
    GameState.interviewQuestions = QuestionUtils.selectRandomQuestions(
        GameState.allQuestions,
        INTERVIEW_QUESTION_COUNT
    );
    GameState.currentQuestionIndex = 0;
    GameState.sessionAnswers = [];
    GameState.selectedAnswer = null;
    GameState.answerLocked = false;
    GameState.sessionStartTime = Date.now();
    GameState.scores = {
        overall: 0,
        byCompetency: Scoring.initializeCompetencies()
    };

    if (!GameState.interviewQuestions.length) {
        alert('Unable to start Interview Simulation: no questions available.');
        navigateTo(GameState.MODE_SELECT);
        return;
    }

    showNextQuestion();
}

function showNextQuestion() {
    const questions = GameState.currentMode === GameState.PRACTICE 
        ? GameState.practiceQuestions 
        : GameState.interviewQuestions;

    if (GameState.currentQuestionIndex >= questions.length) {
        endSession();
        return;
    }

    GameState.currentQuestion = questions[GameState.currentQuestionIndex];
    GameState.selectedAnswer = null;
    GameState.answerLocked = false;
    GameState.currentScreen = GameState.QUESTION;
    UI.render(GameState.QUESTION);
}

function selectOption(optionId) {
    if (GameState.answerLocked || GameState.currentScreen !== GameState.QUESTION) return;

    GameState.selectedAnswer = optionId;

    document.querySelectorAll('.option').forEach(el => {
        el.classList.toggle('selected', el.getAttribute('data-option-id') === optionId);
    });

    const confirmBtn = document.getElementById('confirm-btn');
    if (confirmBtn) {
        confirmBtn.disabled = false;
    }
}

function confirmAnswer() {
    if (!GameState.selectedAnswer || GameState.answerLocked) return;

    GameState.answerLocked = true;
    Timer.stop();

    const question = GameState.currentQuestion;
    const selectedOption = question.options.find(o => o.id === GameState.selectedAnswer);
    if (!selectedOption) {
        GameState.answerLocked = false;
        return;
    }
    const score = selectedOption.score;

    const answer = {
        questionNumber: GameState.currentQuestionIndex + 1,
        question: question.question,
        selectedAnswer: selectedOption.text,
        selectedScore: score,
        bestAnswer: question.options.find(o => o.id === question.bestOptionId).text,
        competency: question.primaryCompetency,
        consequences: selectedOption.consequenceMetrics || {}
    };
    GameState.sessionAnswers.push(answer);
    Scoring.updateCompetencyScore(GameState.scores.byCompetency, question, score);

    // Interview: no feedback until the end
    if (GameState.currentMode === GameState.INTERVIEW) {
        nextQuestion();
        return;
    }

    GameState.currentScreen = GameState.FEEDBACK;
    UI.render(GameState.FEEDBACK);
}

function handleTimeExpired() {
    if (GameState.answerLocked || GameState.currentScreen !== GameState.QUESTION) return;

    GameState.answerLocked = true;
    const question = GameState.currentQuestion;
    if (!question) {
        nextQuestion();
        return;
    }

    const answer = {
        questionNumber: GameState.currentQuestionIndex + 1,
        question: question.question,
        selectedAnswer: null,
        selectedScore: null,
        bestAnswer: question.options.find(o => o.id === question.bestOptionId).text,
        competency: question.primaryCompetency,
        consequences: {}
    };
    GameState.sessionAnswers.push(answer);

    nextQuestion();
}

function nextQuestion() {
    GameState.currentQuestionIndex++;
    showNextQuestion();
}

function endSession() {
    Timer.stop();
    GameState.sessionEndTime = Date.now();

    GameState.sessionData = {
        mode: GameState.currentMode,
        timestamp: new Date().toISOString(),
        answers: GameState.sessionAnswers,
        competencyScores: GameState.scores.byCompetency,
        duration: GameState.sessionEndTime - GameState.sessionStartTime
    };

    navigateTo(GameState.RESULTS);
}

function reviewSession() {
    GameState.reviewFilter = 'all';
    navigateTo(GameState.REVIEW);
}

function setReviewFilter(filter) {
    GameState.reviewFilter = filter;
    navigateTo(GameState.REVIEW);
}

function handleAbandonSession() {
    if (confirm('Are you sure you want to exit? Your progress will not be saved.')) {
        Timer.stop();
        GameState.selectedAnswer = null;
        GameState.answerLocked = false;
        GameState.currentQuestionIndex = 0;
        GameState.sessionAnswers = [];
        navigateTo(GameState.START);
    }
}

function handleReviewPreviousSessions() {
    // Placeholder for previous sessions feature
    alert('Previous sessions feature will show your last 5 attempts. Not yet implemented in this MVP.');
}

// =============================================================================
// INITIALIZATION
// =============================================================================

function initializeGame() {
    UI.init();

    // Validate questions
    if (!QuestionUtils.validateQuestionBank(QUESTIONS)) {
        console.error('Failed to validate question bank. Cannot start game.');
        alert('Error: Invalid question bank. Check console for details.');
        return;
    }

    GameState.allQuestions = QUESTIONS;

    // Check for scenario-based questions
    const scenarioCount = QuestionUtils.getScenarioBasedCount(QUESTIONS);
    console.log(`✓ ${scenarioCount} of ${QUESTIONS.length} questions are scenario-based (requirement: ≥70)`);

    console.log('✓ Game initialized successfully');
    navigateTo(GameState.START);
}

// Start the game when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeGame);
} else {
    initializeGame();
}
