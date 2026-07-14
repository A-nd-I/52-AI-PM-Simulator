# PM Interview Practice Game

A single-player browser game for practicing difficult Product Manager interview questions with immediate feedback and competency tracking. Two roles are available, each with its own bank of 100 questions and its own competency framework:

- **AI Product Manager** – models, evals, agents, responsible AI, and AI product strategy
- **SaaS Product Manager** – pricing, retention, onboarding, PLG, integrations, and enterprise SaaS

## Purpose

This game helps Product Manager candidates:

1. **Practice** realistic scenario-based interview questions
2. **Make decisions** with measurable consequences
3. **Understand trade-offs** between competing priorities
4. **Identify strengths** and skill gaps across 18 competency areas
5. **Improve** through repeated attempts and detailed feedback
6. **Track progress** across sessions

## Getting Started

### Requirements

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No internet connection required
- No backend or database needed

### Running the Game

1. Download or clone this repository
2. Open `index.html` in your web browser
3. The game starts immediately

That's it. No build process, no dependencies, no installation.

## How to Play

### Start Screen

The start screen asks you to choose the role you want to practice for:
- **AI Product Manager** – 100 questions on AI/ML product management
- **SaaS Product Manager** – 100 questions on SaaS product management

After choosing a role, you select a game mode. Scores and sessions are tracked separately per role.

### Game Modes

#### Practice Mode

**How it works:**
- Work through all 100 questions at your own pace
- Answer one question at a time
- Receive immediate feedback after each answer
- See detailed explanations and trade-offs
- Review competency updates in real-time
- Continue at any time

**Best for:**
- Learning and skill development
- Understanding why answers are strong or weak
- Building confidence before interviews

#### Interview Simulation Mode

**How it works:**
- 10 randomly selected questions, balanced across competencies
- 90 seconds per question (timer displayed)
- No feedback during the session
- Final interview-readiness report at the end
- Emulates real interview time pressure

**Best for:**
- Practicing under pressure
- Testing readiness for actual interviews
- Measuring improvement over time

#### Trade-off Lab

**How it works:**
- Study mode: no scoring, no timer
- Pick any of the 100 questions and compare its four options side by side in an impact matrix (consequence metrics per option, colored by favorability)
- Each option shows its feedback and trade-offs; the recommended answer is highlighted with the full explanation, interview insight, and learning point
- Tension lens: choose two consequence dimensions (e.g., Delivery Speed vs Customer Trust) to list the questions where they conflict, ranked by conflict strength
- Search filters the question list by title or competency

**Best for:**
- Studying why the strongest answer wins
- Understanding classic PM tensions (speed vs trust, revenue vs compliance, etc.)
- Reviewing consequence profiles without playing a session

### Question Screen

Each question shows:
- **Progress bar** – How far through the session
- **Difficulty** – easy, medium, or hard
- **Primary competency** – What skill this question evaluates
- **Scenario** – Realistic situation with context
- **Question** – What you must decide
- **Four options** – Plausible answers with different quality levels
- **Timer** (Interview mode only) – Countdown to deadline

**To answer:**
1. Click an option to select it
2. Click "Confirm Answer" button
3. You cannot change your answer after confirming

### Feedback Screen (Practice Mode Only)

After each answer in Practice Mode, you see:

- **Score** – Points earned (0–3)
- **Decision consequences** – Metrics showing impact (e.g., Customer Trust +8, Compliance Risk -6)
- **Why this decision** – Detailed feedback on your chosen answer
- **Trade-offs created** – List of consequences from this choice
- **Stronger answer** – If you didn't choose the best option, why the best is better
- **Interview insight** – What an interviewer evaluates with this question
- **Learning point** – Key lesson to remember

### Results Dashboard

After completing a session, you see:

- **Final score** – Overall percentage (0–100%)
- **Interview readiness** – Classification (Strong, Interview Ready, Developing, Significant Gap, Critical Gap)
- **Answer breakdown** – Strong, partial, weak, and unanswered responses
- **Competency performance** – A bar chart showing your score in each of the 18 competency areas
- **Key insights** – Top 3 strengths, top 3 development areas, personalized recommendation
- **Options** – Return to start or review all answers

### Answer Review Screen

After a session, you can review all questions:

- **Filters** – View by answer quality (All, Strong, Partial, Weak, Unanswered)
- **Details** – For each question, see your answer, the best answer, and your score
- **Competency** – What competency each question evaluated

Use this screen to:
- Study weak answers in detail
- Identify patterns in your mistakes
- Focus your future practice

## Question Structure

### The 100 Questions

The game contains exactly 100 hardcoded questions covering:

- **Question types**: Scenario-based (70+), conceptual, behavioral
- **Difficulty levels**: Easy, medium, hard
- **Competency coverage**: Balanced across 18 AI PM competencies
- **Topics**: Foundation models, RAG, data quality, metrics, responsible AI, enterprise deployment, agentic systems, generative AI reliability, and more

### Question Format

Each question includes:

```javascript
{
  id: 1,
  title: "Enterprise Support Copilot Launch",
  type: "scenario",
  difficulty: "hard",
  primaryCompetency: "AI Evaluation",
  secondaryCompetencies: ["Enterprise AI Products", "Stakeholder Management"],
  scenario: "Detailed realistic situation...",
  question: "What should you do next?",
  options: [
    {
      id: "A",
      text: "Option text",
      score: 0-3,  // 3=best, 2=good, 1=weak, 0=harmful
      feedback: "Why this answer is effective or risky",
      tradeoffs: ["Trade-off one", "Trade-off two"],
      consequenceMetrics: {
        customerTrust: 5,
        businessValue: -2,
        // ... other metrics
      }
    }
    // 3 more options
  ],
  bestOptionId: "C",
  bestAnswerExplanation: "Why C is strongest",
  interviewInsight: "What an interviewer evaluates",
  learningPoint: "Key lesson"
}
```

### Scoring

Each option is scored 0–3:
- **3** – Strong or recommended answer
- **2** – Reasonable but incomplete
- **1** – Weak or high-risk
- **0** – Clearly harmful or wrong

Your overall score is calculated as: (total points earned / total points available) × 100

### Competency Categories

Each role has its own set of 18 competency areas.

**AI Product Manager:**

1. Product Strategy
2. Customer Discovery
3. AI and ML Fundamentals
4. Data Strategy
5. AI Evaluation
6. Metrics and Experimentation
7. Technical Trade-offs
8. Responsible AI and Governance
9. Privacy and Security
10. Human-in-the-Loop Design
11. Product Execution
12. Prioritization and MVP Scoping
13. Stakeholder Management
14. Enterprise AI Products
15. Communication and Leadership
16. Post-Launch Monitoring
17. Agentic AI Systems
18. Business and Monetization

**SaaS Product Manager:**

1. Product Strategy
2. Customer Discovery
3. Pricing and Packaging
4. Churn and Retention
5. Onboarding and Activation
6. Growth and Acquisition
7. Metrics and Experimentation
8. Technical Trade-offs
9. Platform and Integrations
10. Security and Compliance
11. Product Execution
12. Prioritization and MVP Scoping
13. Stakeholder Management
14. Enterprise SaaS
15. Communication and Leadership
16. Post-Launch Monitoring
17. UX and Design Collaboration
18. Business and Monetization

Your performance is tracked separately in each area, per role.

### Interview Readiness Classifications

Your final score determines your readiness:

- **85–100%: Strong** – Excellent preparation. You demonstrate clear product thinking.
- **70–84%: Interview Ready** – Solid fundamentals. You're prepared for an interview.
- **55–69%: Developing** – Continue practicing. Focus on weaker areas.
- **40–54%: Significant Gap** – Study fundamentals before interviewing.
- **Below 40%: Critical Gap** – Significant gaps. Study and practice more before interviews.

## Consequence Metrics

Every answer choice creates measurable consequences across these dimensions:

- **Customer Trust** – How much users trust the product (positive is good)
- **Business Value** – Impact on revenue or strategic value
- **Delivery Speed** – How quickly you ship (positive is fast)
- **Reliability** – System stability and correctness
- **Compliance Risk** – Legal/regulatory exposure (positive means more risk, is bad)
- **Technical Debt** – Accumulated shortcuts (positive means more debt, is bad)
- **Security Risk** – Security vulnerability exposure
- **Team Morale** – Impact on team satisfaction
- **Adoption** – How many users will use the feature
- **Operating Cost** – Infrastructure and operational expenses
- **Stakeholder Confidence** – Trust from leadership and partners
- **Revenue** – Direct revenue impact

Each consequence is scored from -10 to +10, where:
- Positive is good for dimensions like Customer Trust, Business Value, Delivery Speed, Reliability, Adoption, Revenue
- Positive is bad for dimensions like Compliance Risk, Technical Debt, Security Risk, Operating Cost

## Data Persistence

The game uses browser `localStorage` to save, separately for each role (keys prefixed `ai_pm_` and `saas_pm_`):

- **Highest overall score** – Your best session score
- **Previous five sessions** – Summary of your last 5 attempts
- **Best score by competency** – Your highest score in each competency area
- **Current practice session** (if unfinished) – Resume where you left off in Practice Mode

### Resuming a Session

If you have an unfinished Practice Mode session:
- The game offers to resume it when you open the page
- Your progress, answers, and scores are preserved
- Interview Simulation Mode sessions are NOT saved (by design—no "peeking" at questions)

### Clearing Data

To clear your saved data:
1. Open your browser's developer tools (F12 or Cmd+Opt+I)
2. Go to the Application/Storage tab
3. Select "Local Storage"
4. Find the origin for this page and delete the entries

## File Structure

```
52-AI-PM-Simulator/
├── index.html          # Application shell (semantic HTML)
├── styles.css          # All styling and responsive design
├── app.js              # Game logic, state, scoring, role config, UI rendering
├── questions.js        # 100 hardcoded AI PM questions
├── questions-saas.js   # 100 hardcoded SaaS PM questions
└── README.md           # This file
```

### Key Responsibilities

**index.html** – Minimal semantic structure:
- Defines the app container
- Loads CSS and JavaScript
- No inline styles or scripts

**styles.css** – Complete presentation:
- Mobile-first responsive design
- Accessibility features (focus states, contrast, keyboard support)
- Professional dashboard aesthetics
- No external fonts, icons, or images

**app.js** – Game engine:
- Game state management
- Scoring and competency tracking
- UI rendering for all screens
- Timer and session management
- localStorage persistence
- Validation of question bank at startup

**questions.js / questions-saas.js** – Question data:
- 100 complete questions per role with all metadata
- Both banks are validated on startup (logs to console)
- No business logic—purely data

## Code Quality

### Validation

The game validates the question bank on startup:

- Exactly 100 questions
- All IDs unique
- Each question has exactly 4 options
- Exactly one option with score 3 (best answer)
- `bestOptionId` matches score-3 option
- All competency names valid
- All scores between 0–3

Validation errors are logged to the browser console. If validation fails, the game won't start.

### Architecture Principles

- **Modular** – Clear separation of concerns (state, scoring, UI, persistence)
- **No dependencies** – Pure vanilla JavaScript
- **Readable** – Self-documenting code with clear function names
- **No duplication** – Scoring logic, rendering, and state management are centralized
- **Semantic HTML** – Proper structure for accessibility
- **CSS organization** – Logical grouping of styles by concern

## Known MVP Limitations

The following features are intentionally excluded from this MVP:

1. **Previous sessions list** – Placeholder in UI but not fully implemented. You can see summaries in localStorage but no detailed UI.
2. **Social features** – No leaderboards, sharing, or multiplayer
3. **Advanced analytics** – No detailed performance tracking or trend analysis
4. **Question editing** – Questions are hardcoded; no admin interface to modify them
5. **Certificates** – No completion certificates or achievements
6. **Mobile app** – Browser only (though responsive)
7. **Cloud sync** – Data persists locally only, not synced across devices
8. **Question explanations** – No video content or extended learning materials

## Future Improvements

Suggested enhancements for future versions:

1. **Question authoring tool** – Allow admins to add/edit questions without code changes
2. **Spaced repetition** – Intelligently surface weaker questions in future sessions
3. **Peer comparison** – Compare your scores to anonymized population stats
4. **Detailed analytics** – Track improvement trends, identify learning patterns
5. **Integrated study mode** – Curated lessons for specific competency gaps
6. **Video explanations** – Expert commentary on complex questions
7. **Interview coach** – AI feedback on written responses (open-ended questions)
8. **Customized paths** – Tailor practice to specific interview types (startup PM, enterprise PM, etc.)
9. **Flashcard mode** – Quick definition review for competency fundamentals
10. **Mobile app** – Native iOS/Android version with offline play

## How to Add or Edit Questions

### Adding a New Question

Edit `questions.js` and add to the `QUESTIONS` array:

```javascript
{
  id: 101,  // Next available ID
  title: "Your question title",
  type: "scenario",  // or "concept" or "behavioral"
  difficulty: "medium",  // "easy", "medium", or "hard"
  primaryCompetency: "Product Strategy",  // Must be from approved list
  secondaryCompetencies: ["Stakeholder Management", "Product Execution"],  // Optional, up to 2
  scenario: "Detailed context and situation...",
  question: "What should you do?",
  options: [
    {
      id: "A",
      text: "Option text",
      score: 0,  // 0-3
      feedback: "Explanation of why this answer...",
      tradeoffs: ["Consequence 1", "Consequence 2"],  // Why this matters
      consequenceMetrics: {
        customerTrust: -5,
        businessValue: 2,
        // Include relevant metrics
      }
    },
    // ... 3 more options
  ],
  bestOptionId: "C",  // Must match an option with score: 3
  bestAnswerExplanation: "Why option C is strongest...",
  interviewInsight: "What this evaluates about the candidate...",
  learningPoint: "Key takeaway for the player..."
}
```

### Editing Existing Questions

Find the question by ID in `questions.js` and modify any field. The game validates on startup—if you break the structure, you'll see validation errors in the console.

### Validation Rules for Questions

- `id`: Unique positive integer
- `type`: Must be "scenario", "concept", or "behavioral"
- `difficulty`: Must be "easy", "medium", or "hard"
- `primaryCompetency`: Must be in approved competency list (see above)
- `secondaryCompetencies`: Array of 0-2 competencies from approved list
- `options`: Exactly 4 options
- `options[].score`: Integer 0-3
- `options[].consequenceMetrics`: Object with metric keys and -10 to +10 values
- `bestOptionId`: Must match an option ID with score 3
- All text fields should be clear and specific

## Browser Compatibility

Tested and working on:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

The game uses:
- CSS Grid and Flexbox (widely supported)
- Modern JavaScript (ES6+)
- localStorage API
- No polyfills required

## Accessibility

The game includes:
- Semantic HTML for screen readers
- Keyboard navigation (Tab, Enter to select, confirm)
- Visible focus states on buttons and options
- Good color contrast (WCAG AA compliant)
- Clear button states (enabled/disabled)
- Readable typography and spacing
- Responsive layout for mobile devices

## Support and Troubleshooting

### Game won't start

**Check the browser console (F12)** for validation errors. The game logs detailed validation errors if the question bank has issues.

### Timer not working

Ensure JavaScript is enabled in your browser. The timer uses `setInterval` and should work on all modern browsers.

### Progress not saving

Check that localStorage is enabled:
1. Open developer tools (F12)
2. Go to Application > Storage > Local Storage
3. Verify entries exist for this origin

If localStorage is disabled, your progress won't persist between sessions.

### Questions seem wrong or incomplete

The MVP uses hardcoded questions. If you find an issue, you can edit directly in `questions.js`. Run the validation by opening the browser console—it will report any structural problems.

## License

This is an MVP educational tool for AI Product Manager interview preparation.

## Version

MVP v1.0 – July 2026

---

**Ready to practice?** Open `index.html`, choose your role, and pick a game mode. Good luck with your interviews!
