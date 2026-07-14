// AI PM Interview Practice - Question Bank (100 questions)
// This file contains all questions for the game

const QUESTIONS = [
  {
    id: 1,
    title: "Enterprise Support Copilot Launch",
    type: "scenario",
    difficulty: "hard",
    primaryCompetency: "AI Evaluation",
    secondaryCompetencies: ["Enterprise AI Products", "Stakeholder Management"],
    scenario: "You're building a copilot to assist enterprise support agents. After 3 months of development, your team reports 87% accuracy on test questions, but field pilots reveal agents routinely ignore the copilot's suggestions and handle queries manually. Customer satisfaction scores haven't improved.",
    question: "What's your immediate next move?",
    options: [
      {
        id: "A",
        text: "Launch to all support teams immediately to collect more data",
        score: 1,
        feedback: "Launching prematurely would worsen trust further. The problem isn't data—it's confidence.",
        tradeoffs: ["Low adoption in production", "Wasted engineering effort", "Damage to AI credibility"],
        consequenceMetrics: {
          customerTrust: -5,
          businessValue: -8,
          adoption: -10,
          teamMorale: -3
        }
      },
      {
        id: "B",
        text: "Pause the launch and rebuild the model with more training data",
        score: 0,
        feedback: "Misdiagnosis. The issue isn't accuracy—it's that agents don't trust the copilot despite high accuracy.",
        tradeoffs: ["Delays product feedback", "Increases technical debt", "Doesn't solve trust issue"],
        consequenceMetrics: {
          deliverySpeed: -10,
          customerTrust: 0,
          businessValue: -2,
          technicalDebt: 2
        }
      },
      {
        id: "C",
        text: "Investigate why agents don't trust the suggestions despite 87% accuracy",
        score: 3,
        feedback: "Correct root cause analysis. This may reveal UI issues, poor explanations, or edge cases the accuracy metric misses.",
        tradeoffs: ["Delays shipping by 2-3 weeks", "Requires talking to agents", "May not be fixable"],
        consequenceMetrics: {
          customerTrust: 3,
          businessValue: 4,
          deliverySpeed: -3,
          reliability: 2
        }
      },
      {
        id: "D",
        text: "Show agents the accuracy metrics and train them on how to use the copilot",
        score: 2,
        feedback: "Reasonable partial solution. Training can help, but if suggestions are genuinely wrong in critical scenarios, training alone won't solve it.",
        tradeoffs: ["Assumes accuracy metric is meaningful to agents", "May not address underlying suggestion quality"],
        consequenceMetrics: {
          adoption: 4,
          teamMorale: 3,
          customerTrust: 2,
          businessValue: 3
        }
      }
    ],
    bestOptionId: "C",
    bestAnswerExplanation: "Option C targets the real problem. If 87% accuracy doesn't drive behavior change, the issue is explainability, confidence scoring, or edge cases that break user trust. You need qualitative feedback from agents before proceeding. This is a classic example where a strong metric hides a product failure.",
    interviewInsight: "Interviewers want to see that you diagnose problems before proposing solutions, especially when metrics and user behavior diverge. A PM who would launch despite low adoption is dangerous.",
    learningPoint: "High metric scores don't guarantee product adoption. Trust, confidence, and perceived value matter more than accuracy alone."
  },
  {
    id: 2,
    title: "Foundation Model Selection",
    type: "scenario",
    difficulty: "hard",
    primaryCompetency: "AI and ML Fundamentals",
    secondaryCompetencies: ["Technical Trade-offs", "Product Strategy"],
    scenario: "Your company needs to choose between GPT-4 API (expensive, state-of-art), Llama-70B open-source model (cheaper, self-hosted), or a fine-tuned smaller model (fast, limited capability). You have $500K/year for inference. Your main use case is customer support automation with some creative content generation.",
    question: "What approach would you recommend?",
    options: [
      {
        id: "A",
        text: "Use GPT-4 API for everything because it's the most capable",
        score: 0,
        feedback: "Ignores cost and efficiency. GPT-4 would quickly consume your entire budget on high-volume support queries.",
        tradeoffs: ["Unsustainable costs", "Lock-in to OpenAI", "Wasted capability on simple tasks"],
        consequenceMetrics: {
          operatingCost: 10,
          businessValue: 2,
          revenue: -8
        }
      },
      {
        id: "B",
        text: "Use Llama-70B self-hosted for all tasks",
        score: 1,
        feedback: "Ignores the trade-off between capability and cost. Llama struggles with creative content and nuanced support scenarios.",
        tradeoffs: ["Quality degradation on complex tasks", "Hosting and ops overhead", "Maintenance burden"],
        consequenceMetrics: {
          operatingCost: -8,
          businessValue: -3,
          reliability: -4,
          teamMorale: -2
        }
      },
      {
        id: "C",
        text: "Use a fine-tuned smaller model for both, optimizing for latency and cost",
        score: 1,
        feedback: "Oversimplifies. A single model can't handle both support and creative content well. You'd sacrifice quality on creative tasks.",
        tradeoffs: ["Quality loss on complex tasks", "Limited scalability", "Brittle system"],
        consequenceMetrics: {
          deliverySpeed: 8,
          operatingCost: -6,
          businessValue: 0,
          reliability: -3
        }
      },
      {
        id: "D",
        text: "Use Llama-70B for support (90% of queries) and GPT-4 for creative content (10%), measuring quality carefully",
        score: 3,
        feedback: "Best approach. Allocates expensive capability where it matters most and uses cost-efficient models for high-volume routine tasks.",
        tradeoffs: ["Operational complexity", "Multiple vendor integrations", "Monitoring needed"],
        consequenceMetrics: {
          operatingCost: -2,
          businessValue: 7,
          reliability: 5,
          deliverySpeed: 3
        }
      }
    ],
    bestOptionId: "D",
    bestAnswerExplanation: "This is a pragmatic tiered approach. Use your budget efficiently by routing requests by complexity and capability need. 80/20 principle: expensive models for 10% of queries that justify the cost. This requires understanding your task distribution and model capabilities.",
    interviewInsight: "This question tests whether you understand model economics, can make trade-off decisions, and avoid one-size-fits-all thinking. Senior PMs know that the best model isn't the fanciest one—it's the right one for the job at the right cost.",
    learningPoint: "Product economics matter more than technical sophistication. A well-chosen mix of tools beats using the best tool for everything."
  },
  {
    id: 3,
    title: "AI Hallucination in Production",
    type: "scenario",
    difficulty: "hard",
    primaryCompetency: "Responsible AI and Governance",
    secondaryCompetencies: ["Post-Launch Monitoring", "AI Evaluation"],
    scenario: "Two weeks after launching your AI-powered legal document review tool, a customer discovers the model confidently stated false case law citations in 12 documents, which they almost filed. The model's confidence scores were high. No customers have filed the incorrect documents yet, but the customer is very upset and threatening to leave.",
    question: "What do you do in the next 24 hours?",
    options: [
      {
        id: "A",
        text: "Immediately shut down the product and apologize to all customers",
        score: 2,
        feedback: "Correct instinct (move fast) but too extreme. You'd destroy trust in your entire platform and the problem may only affect edge cases.",
        tradeoffs: ["Overreaction damages brand", "Loses all revenue immediately", "May panic other customers"],
        consequenceMetrics: {
          customerTrust: -8,
          revenue: -10,
          stakeholderConfidence: -9
        }
      },
      {
        id: "B",
        text: "Disable confidence scores pending an investigation",
        score: 1,
        feedback: "Partial measure. Removing confidence doesn't fix the hallucination—it just hides it. Users still get false information.",
        tradeoffs: ["Doesn't solve root problem", "Delays real fix", "Users still at risk"],
        consequenceMetrics: {
          customerTrust: -2,
          reliability: -3,
          complianceRisk: -5
        }
      },
      {
        id: "C",
        text: "Audit all output from the past two weeks, contact affected customers, disable flagged documents, add a human review step, and prepare a post-mortem",
        score: 3,
        feedback: "Comprehensive damage control. You acknowledge the risk, protect customers, add guardrails, and show transparency.",
        tradeoffs: ["Resource intensive", "Revenue hit while in human-review mode", "Legal consultation needed"],
        consequenceMetrics: {
          customerTrust: 5,
          complianceRisk: -8,
          reliability: 6,
          businessValue: -4,
          teamMorale: 2
        }
      },
      {
        id: "D",
        text: "Investigate whether the hallucinations happen with other models or data sources to determine if this is a product defect",
        score: 1,
        feedback: "Investigation is important but insufficient. You're studying the problem instead of protecting customers from ongoing harm.",
        tradeoffs: ["Ignores immediate customer risk", "Delays protective action", "Looks irresponsible"],
        consequenceMetrics: {
          customerTrust: -7,
          complianceRisk: -8,
          businessValue: 0
        }
      }
    ],
    bestOptionId: "C",
    bestAnswerExplanation: "This is the right mix of accountability and pragmatism. You protect users (audit, contact, disable flagged output), add a guardrail (human review), and communicate transparently (post-mortem). You don't overreact by shutting down, but you don't ignore the risk either.",
    interviewInsight: "This tests judgment in a crisis: speed, accountability, customer protection, and communication. A great PM balances moving fast with ethical responsibility.",
    learningPoint: "In AI products, hallucinations and confident false statements are often worse than no output. Always have a fallback—especially for high-stakes domains like legal, medical, or finance."
  },
  {
    id: 4,
    title: "Build vs. Buy RAG System",
    type: "scenario",
    difficulty: "medium",
    primaryCompetency: "Technical Trade-offs",
    secondaryCompetencies: ["Product Strategy", "AI and ML Fundamentals"],
    scenario: "Your company wants to launch a customer knowledge base assistant using RAG (retrieval-augmented generation). You can build custom retrieval and indexing (6 months, needs data scientist), or use an off-the-shelf RAG platform like Pinecone (3 months, $50K/year, limited customization).",
    question: "How do you approach this decision?",
    options: [
      {
        id: "A",
        text: "Build in-house to own the technology and avoid vendor lock-in",
        score: 1,
        feedback: "Premature optimization. RAG is becoming commoditized. You'd delay product value and tie up engineers.",
        tradeoffs: ["3 month delay", "High maintenance burden", "Reinventing solved problems"],
        consequenceMetrics: {
          deliverySpeed: -9,
          businessValue: -5,
          technicalDebt: -3
        }
      },
      {
        id: "B",
        text: "Use Pinecone immediately to ship fast",
        score: 2,
        feedback: "Good for speed but ignores future constraints. You may hit scaling limits, and customization needs may emerge.",
        tradeoffs: ["Vendor lock-in", "Limited control over retrieval quality", "Higher long-term cost"],
        consequenceMetrics: {
          deliverySpeed: 10,
          businessValue: 7,
          operatingCost: 3
        }
      },
      {
        id: "C",
        text: "Use Pinecone to ship MVP, measure user feedback, then decide whether to build if needed",
        score: 3,
        feedback: "Best approach. You ship fast, learn from users, and only invest in customization if it matters.",
        tradeoffs: ["Possible future migration cost", "Temporary dependency on vendor"],
        consequenceMetrics: {
          deliverySpeed: 10,
          businessValue: 8,
          operatingCost: 2,
          technicalDebt: 1
        }
      },
      {
        id: "D",
        text: "Build a proof-of-concept with Pinecone and assess technical complexity before deciding",
        score: 2,
        feedback: "Reasonable but slower. POCs often don't capture production complexity, and you still defer the decision.",
        tradeoffs: ["Extra 2-3 weeks delay", "POC may be misleading", "Decision uncertainty continues"],
        consequenceMetrics: {
          deliverySpeed: 5,
          businessValue: 6,
          operatingCost: 0
        }
      }
    ],
    bestOptionId: "C",
    bestAnswerExplanation: "This is strategic thinking. You use Pinecone to ship the MVP and validate product-market fit, then make the build/buy decision based on real usage patterns. If users don't need heavy customization, Pinecone remains the right choice. If they do, you have customer justification for building.",
    interviewInsight: "The best decision is often the one that preserves future optionality. Avoid irreversible commits until you have customer signal.",
    learningPoint: "Build vs. buy decisions should be revisited as the product evolves. What's right at MVP launch may not be right at scale."
  },
  {
    id: 5,
    title: "Model Accuracy vs. Latency Trade-off",
    type: "scenario",
    difficulty: "medium",
    primaryCompetency: "Technical Trade-offs",
    secondaryCompetencies: ["AI Evaluation", "Metrics and Experimentation"],
    scenario: "Your ML team reports they can achieve 95% accuracy with a 5-second response time, or 88% accuracy with 500ms response time. The product will be used in a real-time customer-facing chat interface.",
    question: "Which should you choose?",
    options: [
      {
        id: "A",
        text: "Choose 95% accuracy because higher accuracy is always better",
        score: 0,
        feedback: "False premise. In a chat interface, 5-second delays break user experience and reduce usage more than 7% accuracy loss.",
        tradeoffs: ["Poor user experience", "High abandonment rate", "Adoption failure"],
        consequenceMetrics: {
          adoption: -10,
          userTrust: -8,
          businessValue: -6
        }
      },
      {
        id: "B",
        text: "Choose 500ms latency because speed always matters more",
        score: 1,
        feedback: "Oversimplifies. For some use cases (legal, medical), accuracy is critical even if latency is longer.",
        tradeoffs: ["Potential harm from inaccuracy", "Regulatory risk", "Loss of high-value customers"],
        consequenceMetrics: {
          reliability: -6,
          complianceRisk: 5,
          customerTrust: -4
        }
      },
      {
        id: "C",
        text: "Test both options with real users and measure which drives better adoption and satisfaction",
        score: 3,
        feedback: "Correct approach. Run an A/B test to let users reveal which trade-off matters more in your specific context.",
        tradeoffs: ["Requires A/B testing infrastructure", "Takes 1-2 weeks to gather data"],
        consequenceMetrics: {
          businessValue: 8,
          customerTrust: 7,
          adoption: 6
        }
      },
      {
        id: "D",
        text: "Choose 500ms and gradually improve accuracy over time as you collect more data",
        score: 2,
        feedback: "Reasonable pragmatic approach, but assumes you'll actually prioritize accuracy improvement and that gradual improvement is possible.",
        tradeoffs: ["May never improve accuracy", "Customers adapt to low accuracy", "Fixing later is harder"],
        consequenceMetrics: {
          deliverySpeed: 8,
          reliability: 2,
          businessValue: 5
        }
      }
    ],
    bestOptionId: "C",
    bestAnswerExplanation: "This is evidence-based decision-making. The right trade-off depends on your users and use case. In a chat interface, users might accept slightly lower accuracy for fast responses. In a compliance context, they won't. A/B testing reveals the truth.",
    interviewInsight: "Good PMs avoid dogmatic choices between trade-offs. They gather data and let customer behavior guide the decision.",
    learningPoint: "Always validate assumptions about what users care about. Intuition about trade-offs is often wrong."
  },
  {
    id: 6,
    title: "Confidence Threshold and Escalation",
    type: "scenario",
    difficulty: "medium",
    primaryCompetency: "Human-in-the-Loop Design",
    secondaryCompetencies: ["Metrics and Experimentation", "Responsible AI and Governance"],
    scenario: "Your AI model can classify customer intents with varying confidence levels. You can set a confidence threshold and escalate to humans any prediction below that threshold. A 70% threshold sends 40% of queries to humans. A 90% threshold sends 5% to humans. Your support team is already overburdened.",
    question: "How do you set the threshold?",
    options: [
      {
        id: "A",
        text: "Set it to 90% to minimize human workload",
        score: 0,
        feedback: "Ignores the real cost of AI mistakes. Low-confidence predictions are exactly where the AI is least trustworthy.",
        tradeoffs: ["AI handles uncertain cases", "High error rate on edge cases", "Customer frustration"],
        consequenceMetrics: {
          operatingCost: 8,
          customerTrust: -9,
          reliability: -7
        }
      },
      {
        id: "B",
        text: "Set it to 70% to maximize accuracy on escalated queries",
        score: 1,
        feedback: "Opposite problem. You overwhelm humans with queries that the AI is reasonably confident about, reducing efficiency.",
        tradeoffs: ["Team burnout", "High costs", "Slow response times"],
        consequenceMetrics: {
          operatingCost: 10,
          teamMorale: -8,
          customerTrust: 6
        }
      },
      {
        id: "C",
        text: "Analyze error cost by intent type, then set different thresholds for high-risk intents (billing, security) vs. low-risk ones (FAQ)",
        score: 3,
        feedback: "Sophisticated approach. Not all wrong predictions are equally costly. A mishandled billing request is worse than a wrong FAQ answer.",
        tradeoffs: ["Operational complexity", "Requires post-deployment analysis"],
        consequenceMetrics: {
          customerTrust: 8,
          reliability: 7,
          operatingCost: 2
        }
      },
      {
        id: "D",
        text: "Set threshold at 80% and measure customer satisfaction to find the optimal point",
        score: 2,
        feedback: "Reasonable approach. Starting with a middle ground and measuring is pragmatic.",
        tradeoffs: ["Requires ongoing monitoring", "Takes time to optimize"],
        consequenceMetrics: {
          customerTrust: 5,
          operatingCost: 3,
          reliability: 4
        }
      }
    ],
    bestOptionId: "C",
    bestAnswerExplanation: "Different mistakes have different costs. A wrong billing inquiry escalation is critical; a wrong FAQ answer is low-risk. Set your threshold where cost of error equals cost of human escalation, and do this per intent type.",
    interviewInsight: "This demonstrates understanding that AI systems need human-in-the-loop design. You're not asking 'should we automate' but 'how should we automate responsibly.'",
    learningPoint: "In human-in-the-loop systems, the threshold isn't one number—it's a strategy. Know your error costs by type."
  },
  {
    id: 7,
    title: "Behavioral: Missed Deadline",
    type: "scenario",
    difficulty: "medium",
    primaryCompetency: "Communication and Leadership",
    secondaryCompetencies: ["Stakeholder Management", "Product Execution"],
    scenario: "Your ML team missed a critical deadline by 2 weeks to ship the new ranking model. The feature was promised to your biggest customer, and they're now upset. Your VP of Sales is demanding to know why they weren't informed earlier. The engineering team says they discovered a data quality issue mid-sprint that forced them to restart.",
    question: "How do you handle this?",
    options: [
      {
        id: "A",
        text: "Blame the engineers for missing the deadline and apologize to the customer for lack of visibility",
        score: 0,
        feedback: "Destroys team trust and is inaccurate. As PM, you own the communication—you should have flagged risks earlier.",
        tradeoffs: ["Team demoralization", "Loss of credibility", "Broken collaboration"],
        consequenceMetrics: {
          teamMorale: -10,
          stakeholderConfidence: -8,
          customerTrust: -5
        }
      },
      {
        id: "B",
        text: "Immediately tell the customer the deadline will be met next week, regardless of actual status",
        score: 0,
        feedback: "Dishonest and will backfire. Broken promises damage trust more than honest delays.",
        tradeoffs: ["Additional broken promises", "Loss of credibility", "Legal risk if contractual"],
        consequenceMetrics: {
          customerTrust: -10,
          stakeholderConfidence: -9
        }
      },
      {
        id: "C",
        text: "Own the communication failure, explain the root cause (data quality issue) to the customer, offer interim solutions, and commit to a firm new date",
        score: 3,
        feedback: "Professional and honest. You take accountability, explain why (not just 'we're late'), provide immediate value, and set realistic expectations.",
        tradeoffs: ["Admitting fault", "Customer remains unhappy short-term", "Requires interim solution"],
        consequenceMetrics: {
          customerTrust: 4,
          stakeholderConfidence: 5,
          teamMorale: 3
        }
      },
      {
        id: "D",
        text: "Set up a war room with engineering and customer to diagnose the data quality issue and find a workaround",
        score: 2,
        feedback: "Good instinct (action-oriented), but doesn't address accountability or set expectations. War rooms work after you've communicated clearly.",
        tradeoffs: ["Doesn't fix communication", "May raise false hopes", "Reactive rather than proactive"],
        consequenceMetrics: {
          businessValue: 3,
          customerTrust: 2,
          teamMorale: 1
        }
      }
    ],
    bestOptionId: "C",
    bestAnswerExplanation: "The best PMs own their communication failures and explain them clearly. You can't change the past, but you can be transparent about why it happened and what you're doing next. Honesty with empathy restores trust.",
    interviewInsight: "Interviewers want to see how you handle failure and accountability. Do you blame others or do you take responsibility?",
    learningPoint: "As a PM, you own communication with customers, even when engineering misses targets. The earlier you communicate risk, the smaller the surprise."
  },
  {
    id: 8,
    title: "Data Quality Discovery",
    type: "scenario",
    difficulty: "medium",
    primaryCompetency: "Data Strategy",
    secondaryCompetencies: ["AI Evaluation", "Product Execution"],
    scenario: "You're building a demand forecasting model. Your data team ingests historical sales data, but discovers 20% of records have missing or inconsistent timestamps. Another 15% have transactions marked with duplicate IDs. The team says they can 'clean it' but you're not sure how much this biases the model.",
    question: "What's your priority?",
    options: [
      {
        id: "A",
        text: "Move forward with the data as-is and tune the model to be robust to noise",
        score: 0,
        feedback: "Ignores the root problem. You can't tune away systematic data quality issues.",
        tradeoffs: ["Biased forecasts", "Hidden errors discovered later", "Loss of trust"],
        consequenceMetrics: {
          reliability: -8,
          businessValue: -6,
          complianceRisk: 3
        }
      },
      {
        id: "B",
        text: "Pause the project until all data is 100% clean",
        score: 1,
        feedback: "Perfection is impossible. Perfect data rarely exists. You need a threshold for 'good enough.'",
        tradeoffs: ["Indefinite delay", "Perfectionism kills projects", "Perfect data may not exist"],
        consequenceMetrics: {
          deliverySpeed: -10,
          businessValue: -5,
          technicalDebt: 2
        }
      },
      {
        id: "C",
        text: "Understand what the 35% data quality issues actually impact: analyze how many records are affected, what forecasting errors result, and whether the business can tolerate that error",
        score: 3,
        feedback: "Right approach. Quantify the impact. If missing timestamps affect 3% of high-volume SKUs, that's manageable. If they affect critical demand drivers, it's not.",
        tradeoffs: ["Takes 1 week to analyze", "Requires business input on acceptable error"],
        consequenceMetrics: {
          reliability: 6,
          businessValue: 7,
          deliverySpeed: 2
        }
      },
      {
        id: "D",
        text: "Build two models: one with clean data and one with noisy data, then compare their forecasts",
        score: 2,
        feedback: "Good experiment design, but it doesn't tell you what to build. You still need to decide on acceptable trade-offs.",
        tradeoffs: ["Takes longer", "Still requires decision after experiment"],
        consequenceMetrics: {
          businessValue: 5,
          reliability: 4,
          deliverySpeed: -2
        }
      }
    ],
    bestOptionId: "C",
    bestAnswerExplanation: "The right question isn't 'is the data perfect' but 'is the data good enough for its intended use.' Quantify the impact of the data quality issues on business outcomes, then make an informed decision.",
    interviewInsight: "This reveals how you balance pragmatism with rigor. You're not afraid of imperfect data, but you're also not reckless about it.",
    learningPoint: "Data is never perfect. The PM's job is to understand trade-offs between data quality costs and the impact of lower quality."
  },
  {
    id: 9,
    title: "Prioritization Under Pressure",
    type: "scenario",
    difficulty: "hard",
    primaryCompetency: "Prioritization and MVP Scoping",
    secondaryCompetencies: ["Stakeholder Management", "Product Execution"],
    scenario: "Your CEO calls an urgent meeting. A large enterprise customer is considering switching to a competitor because your AI product doesn't integrate with their existing CRM. Your roadmap has three items: improving model accuracy (affects all customers), adding CRM integration (affects one customer), and fixing technical debt in the inference pipeline. Your team can only do one in the next sprint.",
    question: "What do you prioritize?",
    options: [
      {
        id: "A",
        text: "CRM integration because the CEO said it's urgent",
        score: 1,
        feedback: "Capitulates to pressure without analysis. What looks urgent may not be strategic.",
        tradeoffs: ["Debt compounds", "Accuracy stagnates", "Other customers dissatisfied"],
        consequenceMetrics: {
          stakeholderConfidence: 5,
          customerTrust: 3,
          technicalDebt: 5,
          businessValue: 2
        }
      },
      {
        id: "B",
        text: "Model accuracy because it benefits all customers, not just one",
        score: 1,
        feedback: "Ignores the risk of losing a large customer. Scale is important, but retention of key accounts is critical.",
        tradeoffs: ["Customer leaves", "Revenue loss", "Credibility damage"],
        consequenceMetrics: {
          businessValue: 4,
          revenue: -10,
          stakeholderConfidence: -6
        }
      },
      {
        id: "C",
        text: "Technical debt because the inference pipeline is a future blocker for all scaling",
        score: 0,
        feedback: "Ignores immediate business risks. Technical debt matters, but losing a customer is worse.",
        tradeoffs: ["Immediate customer loss", "Revenue impact", "Team frustration"],
        consequenceMetrics: {
          revenue: -10,
          stakeholderConfidence: -8,
          businessValue: -5
        }
      },
      {
        id: "D",
        text: "Ask: Is the customer decision already made? Can we do a quick CRM integration MVP? What's the revenue at stake vs. the accuracy improvement's ROI?",
        score: 3,
        feedback: "Right approach. Prioritization requires facts. If the customer will leave without it, CRM integration is worth it. If there's time to negotiate, maybe not.",
        tradeoffs: ["Takes 1 day to gather facts", "May not resolve the conflict"],
        consequenceMetrics: {
          businessValue: 8,
          stakeholderConfidence: 7,
          customerTrust: 6
        }
      }
    ],
    bestOptionId: "D",
    bestAnswerExplanation: "The best PMs don't react to pressure—they gather facts and make deliberate trade-off decisions. If the revenue at risk justifies CRM integration, do it. If not, defend the roadmap. But decide based on business logic, not urgency.",
    interviewInsight: "This tests whether you can handle conflict and executive pressure while maintaining product strategy. Weak PMs fold; strong PMs ask the right questions.",
    learningPoint: "Urgency is not a strategy. Always ask: what's at stake, what are the alternatives, and what's the best use of limited resources?"
  },
  {
    id: 10,
    title: "Bias in Training Data",
    type: "scenario",
    difficulty: "hard",
    primaryCompetency: "Responsible AI and Governance",
    secondaryCompetencies: ["Data Strategy", "Metrics and Experimentation"],
    scenario: "Your hiring recommendation model is trained on historical data and achieves 92% accuracy. An audit by your compliance team reveals the training data is biased: 70% of hired candidates in the data are men, and the model learns to favor male candidates for technical roles. The bias is statistically significant.",
    question: "What's your response?",
    options: [
      {
        id: "A",
        text: "Shut down the model immediately and apologize",
        score: 1,
        feedback: "Correct urgency but maybe overreacts. If the model is still better than unguided hiring, you need to weigh the options.",
        tradeoffs: ["Large disruption to hiring process", "Revenue/time cost", "May overcorrect"],
        consequenceMetrics: {
          complianceRisk: -10,
          customerTrust: 8,
          businessValue: -9
        }
      },
      {
        id: "B",
        text: "Keep the model but retrain it on balanced data where 50% of hires are women",
        score: 1,
        feedback: "Well-intentioned but naive. Rebalancing training data to 50% doesn't fix bias—it just inverts it if real hiring patterns differ.",
        tradeoffs: ["False balance", "May introduce new bias", "Assumes 50/50 is correct"],
        consequenceMetrics: {
          complianceRisk: -3,
          customerTrust: 3,
          businessValue: 2
        }
      },
      {
        id: "C",
        text: "Audit the source of bias: Is it because fewer women apply, or is the model systematically downranking qualified women? Then decide whether to retrain, reweight, or retire the model",
        score: 3,
        feedback: "Rigorous approach. Bias can come from data imbalance (fewer women in hiring pool) or model artifacts. The fix depends on the root cause.",
        tradeoffs: ["Takes 1-2 weeks", "Requires expertise", "May not have a perfect fix"],
        consequenceMetrics: {
          complianceRisk: -4,
          businessValue: 4,
          customerTrust: 6,
          reliability: 5
        }
      },
      {
        id: "D",
        text: "Keep the model but reduce its influence: use it only as one signal among many for hiring decisions, and require human review of all recommendations",
        score: 2,
        feedback: "Pragmatic interim fix. If you must keep the model, reducing its power and adding human oversight is reasonable while you investigate.",
        tradeoffs: ["Doesn't solve the root problem", "Model still has influence", "Audit may find it's still unfair"],
        consequenceMetrics: {
          complianceRisk: -3,
          customerTrust: 4,
          businessValue: 2
        }
      }
    ],
    bestOptionId: "C",
    bestAnswerExplanation: "Responsible AI starts with understanding the problem. Is the bias in the data (fewer women hired historically) or in the model (unfairly downranking women)? The answer changes your solution. Audit first, act second.",
    interviewInsight: "This tests your commitment to responsible AI and whether you can hold both ethics and pragmatism together.",
    learningPoint: "Bias in AI systems is often a symptom of deeper data problems. Understand the root cause before choosing a fix."
  },
  {
    id: 11,
    title: "Prompt Injection Vulnerability",
    type: "scenario",
    difficulty: "medium",
    primaryCompetency: "Privacy and Security",
    secondaryCompetencies: ["Responsible AI and Governance", "Post-Launch Monitoring"],
    scenario: "A security researcher discovers your LLM-powered customer support chatbot is vulnerable to prompt injection. By crafting specific messages, they can trick the model into ignoring its instructions and revealing system prompts or sensitive customer data. The exploit is public on Twitter.",
    question: "What's your immediate response?",
    options: [
      {
        id: "A",
        text: "Disable the chatbot to prevent data leakage",
        score: 2,
        feedback: "Correct protective instinct but maybe premature. If the exploit is hard to execute and requires specific phrasing, you may be able to add guardrails faster.",
        tradeoffs: ["Revenue loss", "Customer frustration", "May be overkill"],
        consequenceMetrics: {
          securityRisk: -10,
          businessValue: -8,
          customerTrust: 6
        }
      },
      {
        id: "B",
        text: "Add input validation to strip suspicious phrases",
        score: 1,
        feedback: "Incomplete fix. Prompt injection is hard to defend against with simple filtering. You'd likely miss variants.",
        tradeoffs: ["False sense of security", "Vulnerability remains", "Bad user experience if filter is aggressive"],
        consequenceMetrics: {
          securityRisk: -4,
          customerTrust: 1,
          businessValue: 2
        }
      },
      {
        id: "C",
        text: "Deploy a sandbox environment, test the exploit, add output filtering, rate-limit suspicious patterns, and monitor for real attempts",
        score: 3,
        feedback: "Comprehensive. You verify the threat, add multiple layers of defense, and set up monitoring.",
        tradeoffs: ["Takes 4-8 hours", "Requires ops involvement"],
        consequenceMetrics: {
          securityRisk: -7,
          customerTrust: 4,
          businessValue: 3
        }
      },
      {
        id: "D",
        text: "Publish a statement that the vulnerability is not exploitable in real usage and monitor for actual attacks",
        score: 0,
        feedback: "Dangerous. Don't downplay security issues without evidence, and don't wait for real attacks if you can defend preemptively.",
        tradeoffs: ["Reputational risk if exploited", "Loss of customer trust", "Potential breach"],
        consequenceMetrics: {
          securityRisk: 8,
          customerTrust: -8,
          complianceRisk: 8
        }
      }
    ],
    bestOptionId: "C",
    bestAnswerExplanation: "Move fast but thoughtfully. Verify the threat, add layers of defense (output filtering, rate-limiting, monitoring), and maintain service. This is a realistic security response.",
    interviewInsight: "Security vulnerabilities in AI systems require technical understanding and judgment about which risks require immediate shutdown vs. defensive measures.",
    learningPoint: "Security in AI is a layers problem. There's no single defense against prompt injection. Use multiple strategies: input validation, output filtering, monitoring."
  },
  {
    id: 12,
    title: "Stakeholder Disagreement on AI Approach",
    type: "scenario",
    difficulty: "hard",
    primaryCompetency: "Stakeholder Management",
    secondaryCompetencies: ["Communication and Leadership", "Product Strategy"],
    scenario: "Sales wants to position your AI as 'fully autonomous' to close deals faster. Engineering wants to be clear that it requires human oversight. Legal is worried about liability if you overstate capabilities. You need to resolve this before the product launches.",
    question: "How do you navigate this conflict?",
    options: [
      {
        id: "A",
        text: "Side with Sales to drive revenue",
        score: 0,
        feedback: "Catastrophic. Overstating AI capabilities creates liability, customer disappointment, and regulatory risk.",
        tradeoffs: ["Customer lawsuits", "Regulatory scrutiny", "Loss of trust"],
        consequenceMetrics: {
          revenue: 5,
          complianceRisk: 10,
          customerTrust: -10
        }
      },
      {
        id: "B",
        text: "Side with Legal and position it as 'highly assisted' with heavy caveats",
        score: 1,
        feedback: "Safe but ineffective. You'd lose deals by being overly cautious and frustrate Sales.",
        tradeoffs: ["Lost revenue", "Sales team conflict", "Competitive disadvantage"],
        consequenceMetrics: {
          complianceRisk: -8,
          revenue: -6,
          stakeholderConfidence: -5
        }
      },
      {
        id: "C",
        text: "Bring all stakeholders together: define what 'autonomous' means in your use case (e.g., '95% of queries auto-resolved without escalation'), get Sales to commit to accurate messaging, Legal to review, and Engineering to ensure it's achievable",
        score: 3,
        feedback: "Best approach. You align on facts, define success criteria that work for everyone, and create a shared commitment.",
        tradeoffs: ["Takes 2 days of meetings", "May not fully satisfy everyone"],
        consequenceMetrics: {
          revenue: 7,
          complianceRisk: -6,
          stakeholderConfidence: 8,
          customerTrust: 7
        }
      },
      {
        id: "D",
        text: "Set a launch date, tell all teams to figure it out, and move on to other priorities",
        score: 0,
        feedback: "Abdicates responsibility. Unresolved conflicts explode at launch or in the field.",
        tradeoffs: ["Conflict resurfaces", "Product messaging is inconsistent", "Customers are confused"],
        consequenceMetrics: {
          stakeholderConfidence: -10,
          customerTrust: -5
        }
      }
    ],
    bestOptionId: "C",
    bestAnswerExplanation: "Great PMs are alignment architects. Instead of winning one conflict, you create a shared model of the truth (what 'autonomous' means with metrics), then everyone wins. This is a classic PM skill.",
    interviewInsight: "This tests whether you can handle multi-stakeholder disagreement by finding common ground through clarity.",
    learningPoint: "Most conflicts come from undefined terms. Define 'autonomous,' 'safe,' 'ready' with metrics, and the conflict often dissolves."
  },
  {
    id: 13,
    title: "Evaluation Metric Selection",
    type: "scenario",
    difficulty: "medium",
    primaryCompetency: "Metrics and Experimentation",
    secondaryCompetencies: ["AI Evaluation", "Product Execution"],
    scenario: "Your classification model for support ticket routing is live. You're measuring success with Accuracy (92%), but your support team reports they're frustrated because misclassified tickets are creating more work. Precision and recall vary widely by ticket type.",
    question: "How do you address this?",
    options: [
      {
        id: "A",
        text: "Report the accuracy metric as-is and assume the team will adapt",
        score: 0,
        feedback: "Ignores the disconnect between metric and user experience. 92% accuracy doesn't mean the system is useful.",
        tradeoffs: ["Team frustration continues", "Poor adoption", "Metric-reality gap"],
        consequenceMetrics: {
          teamMorale: -8,
          adoption: -5,
          businessValue: -3
        }
      },
      {
        id: "B",
        text: "Switch to F1 score because it balances precision and recall",
        score: 1,
        feedback: "Technically correct but doesn't address the real issue: different ticket types have different cost-of-error profiles.",
        tradeoffs: ["F1 may still hide critical errors", "Doesn't match team's actual frustration"],
        consequenceMetrics: {
          reliability: 2,
          teamMorale: 1,
          businessValue: 1
        }
      },
      {
        id: "C",
        text: "Analyze what types of misclassifications frustrate the team most, measure precision and recall per ticket type, and weight the metric by impact",
        score: 3,
        feedback: "Right approach. A misclassified billing ticket is worse than a misclassified FAQ. Weight your metric accordingly.",
        tradeoffs: ["Requires deeper analysis", "Custom metric is harder to explain"],
        consequenceMetrics: {
          teamMorale: 7,
          reliability: 6,
          adoption: 6
        }
      },
      {
        id: "D",
        text: "Ask the team what metric they'd use and optimize for that",
        score: 2,
        feedback: "Collaborative but risky. Teams may optimize for the wrong thing. Metrics should be data-informed.",
        tradeoffs: ["May lead to misaligned optimization", "Abdicates your analytical role"],
        consequenceMetrics: {
          teamMorale: 5,
          businessValue: 2,
          reliability: 2
        }
      }
    ],
    bestOptionId: "C",
    bestAnswerExplanation: "PMs bridge the gap between metrics and reality. If 92% accuracy doesn't match user experience, dig into what's actually wrong. Often it's that the wrong type of error is being penalized.",
    interviewInsight: "This tests whether you understand that metrics must align with user incentives. A high-sounding metric that doesn't reflect reality is useless.",
    learningPoint: "The best metrics are those that surface the truth about system performance for your specific use case."
  },
  {
    id: 14,
    title: "Managing Model Drift",
    type: "scenario",
    difficulty: "hard",
    primaryCompetency: "Post-Launch Monitoring",
    secondaryCompetencies: ["Metrics and Experimentation", "Data Strategy"],
    scenario: "Three months after launch, your customer churn prediction model's accuracy has dropped from 88% to 79%. Your data science team suspects the underlying customer behavior has shifted due to market conditions, but they're not certain. You can retrain on recent data or investigate further.",
    question: "What's your approach?",
    options: [
      {
        id: "A",
        text: "Immediately retrain on recent data to restore accuracy",
        score: 1,
        feedback: "Reactive but doesn't address the root cause. If behavior has shifted, retraining may help short-term but won't prevent future drift.",
        tradeoffs: ["Doesn't solve the problem long-term", "Technical debt in monitoring", "Surprises later"],
        consequenceMetrics: {
          reliability: 4,
          businessValue: 3,
          deliverySpeed: 8
        }
      },
      {
        id: "B",
        text: "Retire the model and use heuristic rules instead",
        score: 0,
        feedback: "Overreaction. A 9-point drop is concerning but not catastrophic. Rules are less sophisticated and likely less accurate.",
        tradeoffs: ["Loss of ML capability", "Likely worse performance", "Wasted engineering effort"],
        consequenceMetrics: {
          reliability: -4,
          businessValue: -5
        }
      },
      {
        id: "C",
        text: "Analyze the root cause of drift: Are new feature patterns emerging? Has market segmentation changed? Then decide on retraining, feature engineering, or model redesign",
        score: 3,
        feedback: "Rigorous approach. Understanding drift prevents it from happening again. Maybe you need a new feature, not just retraining.",
        tradeoffs: ["Takes 1-2 weeks", "May reveal larger structural issues"],
        consequenceMetrics: {
          reliability: 7,
          businessValue: 6,
          deliverySpeed: -2
        }
      },
      {
        id: "D",
        text: "Set up automated monitoring for model drift and retrain weekly to keep accuracy fresh",
        score: 2,
        feedback: "Reasonable operational approach but expensive. Weekly retraining may be overkill if drift is slow.",
        tradeoffs: ["High operational cost", "May introduce new errors", "Complexity"],
        consequenceMetrics: {
          reliability: 5,
          businessValue: 4,
          operatingCost: 4
        }
      }
    ],
    bestOptionId: "C",
    bestAnswerExplanation: "Model drift is a symptom. Treat the root cause, not the symptom. If behavior has changed, retraining is a temporary fix. You need to understand what changed to build a resilient system.",
    interviewInsight: "This tests whether you think systematically about monitoring and long-term product health.",
    learningPoint: "In production AI systems, monitoring is as important as accuracy. Build systems that detect and diagnose drift, not just react to it."
  },
  {
    id: 15,
    title: "MVP Definition Conflict",
    type: "scenario",
    difficulty: "medium",
    primaryCompetency: "Prioritization and MVP Scoping",
    secondaryCompetencies: ["Product Execution", "Stakeholder Management"],
    scenario: "Your team is building an AI content moderation tool. Engineering wants to launch with 3 content types and 92% accuracy. Sales wants 8 content types and 85% accuracy so they can sell to larger customers. You can deliver either in 12 weeks, not both.",
    question: "Which MVP do you choose?",
    options: [
      {
        id: "A",
        text: "Engineer's version: 3 types, 92% accuracy, deeper quality",
        score: 2,
        feedback: "Defensible choice. A narrow scope with high quality is easier to iterate from. But you're leaving customers on the table.",
        tradeoffs: ["Limited initial market", "Slower revenue growth", "Sales frustration"],
        consequenceMetrics: {
          reliability: 8,
          businessValue: 3,
          revenue: 3
        }
      },
      {
        id: "B",
        text: "Sales' version: 8 types, 85% accuracy, broader coverage",
        score: 1,
        feedback: "Risky MVP. With 8 types and 85% accuracy, you'll have many edge cases and struggling customers.",
        tradeoffs: ["Quality issues damage credibility", "Lots of support work", "Difficulty iterating"],
        consequenceMetrics: {
          businessValue: 5,
          revenue: 7,
          reliability: 2,
          teamMorale: -3
        }
      },
      {
        id: "C",
        text: "Hybrid: Launch with 4 types and 90% accuracy, prioritizing content types by revenue impact, with a roadmap to expand",
        score: 2,
        feedback: "Balanced compromise. You get reasonable breadth and quality, set expectations for expansion, and have a clear roadmap.",
        tradeoffs: ["Doesn't fully satisfy either side", "Still requires prioritization"],
        consequenceMetrics: {
          businessValue: 6,
          reliability: 6,
          revenue: 5
        }
      },
      {
        id: "D",
        text: "Ask customers what they actually need most, prioritize those content types first, and launch with accuracy target of 88%",
        score: 3,
        feedback: "Best approach. Let customer demand drive prioritization. You'll build something people actually want instead of guessing.",
        tradeoffs: ["Takes 1 week for customer research", "May reveal unexpected priorities"],
        consequenceMetrics: {
          businessValue: 8,
          revenue: 7,
          reliability: 6,
          customerTrust: 7
        }
      }
    ],
    bestOptionId: "D",
    bestAnswerExplanation: "MVP decisions should be customer-informed, not based on team preferences. The highest-ROI MVP is the one customers most need. Talk to them, prioritize by impact, and ship the most important content types first.",
    interviewInsight: "This tests whether you make decisions based on strategy and customer feedback or whether you let internal teams drive priorities.",
    learningPoint: "The best MVP isn't the one with the best features—it's the one that answers the most important customer question with minimum effort."
  },
  {
    id: 16,
    title: "Fine-tuning vs. Prompting Trade-off",
    type: "scenario",
    difficulty: "medium",
    primaryCompetency: "AI and ML Fundamentals",
    secondaryCompetencies: ["Technical Trade-offs", "Product Execution"],
    scenario: "Your team is building a customer support copilot. You've discovered that a fine-tuned smaller model (Llama-7B) requires less inference cost but needs 2 weeks to collect, label, and fine-tune training data. A prompt-engineered GPT-4 approach works reasonably today but requires writing and updating 50+ prompt templates and costs 5x more.",
    question: "What's your recommendation?",
    options: [
      {
        id: "A",
        text: "Start with prompt-engineered GPT-4 to ship fast, migrate to fine-tuning later if cost becomes an issue",
        score: 3,
        feedback: "Pragmatic. You validate the product with GPT-4, then optimize for cost once you have user feedback and volume.",
        tradeoffs: ["High initial cost", "Eventual migration needed"],
        consequenceMetrics: {
          deliverySpeed: 10,
          businessValue: 8,
          operatingCost: 4
        }
      },
      {
        id: "B",
        text: "Invest the 2 weeks in fine-tuning because the long-term cost savings justify it",
        score: 1,
        feedback: "Premature optimization. You don't know if the product will work. Investing 2 weeks before validation is risky.",
        tradeoffs: ["Delayed launch", "Risk building wrong thing", "May not achieve expected cost savings"],
        consequenceMetrics: {
          operatingCost: -6,
          deliverySpeed: -4,
          businessValue: 2
        }
      },
      {
        id: "C",
        text: "Run both in parallel: start prompt engineering today and begin fine-tuning data collection, then choose at week 1 based on early results",
        score: 2,
        feedback: "Clever but uses extra resources. Reasonable if you have the team capacity, but usually not the best choice.",
        tradeoffs: ["Resource overhead", "Distraction", "Wasted effort on one path"],
        consequenceMetrics: {
          deliverySpeed: 3,
          businessValue: 6,
          operatingCost: 2
        }
      },
      {
        id: "D",
        text: "Use prompt engineering for MVP but build a framework that makes it easy to add fine-tuning later",
        score: 2,
        feedback: "Good second choice. You ship fast but plan for the next iteration.",
        tradeoffs: ["Framework work adds complexity", "Still delayed optimization"],
        consequenceMetrics: {
          deliverySpeed: 9,
          businessValue: 7,
          operatingCost: 3,
          technicalDebt: 1
        }
      }
    ],
    bestOptionId: "A",
    bestAnswerExplanation: "The cost of being wrong about your MVP is higher than the cost of overspending initially. Use GPT-4, ship fast, prove the concept, then optimize. You can always fine-tune later when you have real demand.",
    interviewInsight: "This tests prioritization discipline: validate before optimizing. Many teams over-engineer their MVP.",
    learningPoint: "Ship with the simplest approach that validates your hypothesis, then optimize based on real usage patterns."
  },
  {
    id: 17,
    title: "Hallucination vs. Silence Trade-off",
    type: "scenario",
    difficulty: "medium",
    primaryCompetency: "AI Evaluation",
    secondaryCompetencies: ["Responsible AI and Governance", "Metrics and Experimentation"],
    scenario: "Your research assistant AI has two options: (1) Always generate an answer even if uncertain (hallucination risk but more helpful), or (2) Say 'I don't know' when uncertain (more honest but frustrates users). In user testing, approach 1 gets 85% satisfaction but is wrong 12% of the time. Approach 2 gets 62% satisfaction and is only wrong 2% of the time.",
    question: "Which do you ship?",
    options: [
      {
        id: "A",
        text: "Approach 1: Users prefer it even with hallucinations",
        score: 0,
        feedback: "Dangerous choice. Users prefer confident wrong answers over correct uncertainty, but you shouldn't ship harmful behavior just because users like it.",
        tradeoffs: ["Misinformation spread", "Liability risk", "Reputational damage"],
        consequenceMetrics: {
          customerTrust: -9,
          complianceRisk: 8,
          adoption: 7
        }
      },
      {
        id: "B",
        text: "Approach 2: More honest and safer",
        score: 2,
        feedback: "Defensible but suboptimal. Users will get frustrated with frequent 'I don't know' responses and may abandon the product.",
        tradeoffs: ["Low satisfaction", "Adoption challenges", "User frustration"],
        consequenceMetrics: {
          customerTrust: 7,
          adoption: 3,
          businessValue: 2
        }
      },
      {
        id: "C",
        text: "Offer a toggle: let users choose 'helpful' vs. 'cautious' mode based on their tolerance for risk",
        score: 2,
        feedback: "Clever compromise. Different use cases have different tolerance for hallucination.",
        tradeoffs: ["Adds complexity", "May confuse users", "Monitoring complexity"],
        consequenceMetrics: {
          customerTrust: 5,
          businessValue: 5,
          adoption: 6
        }
      },
      {
        id: "D",
        text: "Ship Approach 2 with confidence scoring: always answer but clearly label confidence levels (e.g., 'I'm 65% sure this is accurate')",
        score: 3,
        feedback: "Best approach. You give users information while being transparent about uncertainty. Users can make informed decisions.",
        tradeoffs: ["Requires good calibration", "Users may misinterpret scores"],
        consequenceMetrics: {
          customerTrust: 7,
          adoption: 6,
          businessValue: 6,
          complianceRisk: -5
        }
      }
    ],
    bestOptionId: "D",
    bestAnswerExplanation: "Don't choose between helping and being honest—combine them. With confidence scoring, users get helpful answers and clear uncertainty signals. This is more responsible than either pure approach.",
    interviewInsight: "This tests your thinking on the ethics of AI design. Can you design systems that are both useful and honest?",
    learningPoint: "The best AI products are transparent about their limitations while still being useful. Confidence scoring bridges the gap."
  },
  {
    id: 18,
    title: "Agentic AI Permissions and Guardrails",
    type: "scenario",
    difficulty: "hard",
    primaryCompetency: "Agentic AI Systems",
    secondaryCompetencies: ["Responsible AI and Governance", "Technical Trade-offs"],
    scenario: "You're building an autonomous booking agent that can reserve rooms, update calendars, and send confirmations. If you give it full permissions, users get a seamless experience. If you require approval for each action, you need 50% more infrastructure. If you limit its permissions, it can only handle simple bookings.",
    question: "How do you scope agent permissions?",
    options: [
      {
        id: "A",
        text: "Give full permissions for fast, delightful experience",
        score: 0,
        feedback: "Reckless. An autonomous agent making errors in booking systems creates real customer harm. Don't optimize for speed at the cost of safety.",
        tradeoffs: ["Impossible to debug problems", "Customer harm", "Liability"],
        consequenceMetrics: {
          customerTrust: -10,
          reliability: -9,
          complianceRisk: 9
        }
      },
      {
        id: "B",
        text: "Require approval for every action",
        score: 1,
        feedback: "Safe but defeats the purpose. If users must approve every action, it's not really autonomous.",
        tradeoffs: ["No autonomy benefit", "High friction", "Users do it manually instead"],
        consequenceMetrics: {
          adoption: 2,
          customerTrust: 8,
          businessValue: 0
        }
      },
      {
        id: "C",
        text: "Require approval only for high-risk actions (refunds, cancellations) and auto-execute routine bookings",
        score: 3,
        feedback: "Best approach. You get autonomy for low-risk actions, keep humans in the loop for high-risk ones.",
        tradeoffs: ["Operational complexity", "Requires risk taxonomy"],
        consequenceMetrics: {
          adoption: 7,
          customerTrust: 8,
          reliability: 7,
          businessValue: 7
        }
      },
      {
        id: "D",
        text: "Start with limited permissions, measure errors, and gradually expand permissions as you prove reliability",
        score: 2,
        feedback: "Good progressive approach. You validate safety before expanding scope.",
        tradeoffs: ["Slower ramp-up", "Delayed full autonomy"],
        consequenceMetrics: {
          adoption: 5,
          customerTrust: 7,
          reliability: 6,
          businessValue: 5
        }
      }
    ],
    bestOptionId: "C",
    bestAnswerExplanation: "Agentic AI needs a tiered permission model. Not all actions are equally risky. Give agents autonomy where errors are forgivable, keep humans in the loop where errors are costly.",
    interviewInsight: "This tests your thinking on responsible AI governance. Can you design systems that are powerful and safe?",
    learningPoint: "Autonomy without guardrails causes harm. Effective agentic systems use risk-based permission models."
  },
  {
    id: 19,
    title: "Generative AI Quality Reliability",
    type: "scenario",
    difficulty: "hard",
    primaryCompetency: "AI Evaluation",
    secondaryCompetencies: ["AI Evaluation", "Metrics and Experimentation"],
    scenario: "Your text generation model produces high-quality output 85% of the time, but the other 15% are problematic (off-topic, incoherent, or biased). The problematic outputs are unpredictable. You can flag suspicious outputs for review, but that slows throughput by 40%.",
    question: "How do you ship this?",
    options: [
      {
        id: "A",
        text: "Ship without flagging—85% is good enough",
        score: 0,
        feedback: "Irresponsible. 15% bad outputs is unacceptable for a generative AI product. Users will stop trusting it after a few bad experiences.",
        tradeoffs: ["User frustration", "Reputational damage", "Low adoption"],
        consequenceMetrics: {
          adoption: -5,
          customerTrust: -8,
          businessValue: -6
        }
      },
      {
        id: "B",
        text: "Ship with human review of all outputs",
        score: 1,
        feedback: "Safe but defeats the purpose of automation. You've essentially created a manual process with AI as a draft tool.",
        tradeoffs: ["High cost", "Slow throughput", "Not really automated"],
        consequenceMetrics: {
          customerTrust: 10,
          operatingCost: 10,
          businessValue: -5
        }
      },
      {
        id: "C",
        text: "Ship with automatic quality scoring: flag outputs below confidence threshold, let high-confidence ones through, monitor false-positive rate",
        score: 3,
        feedback: "Smart approach. You get most of the automation benefit while protecting users from clearly bad output.",
        tradeoffs: ["Requires calibration", "Ongoing monitoring", "Some false positives"],
        consequenceMetrics: {
          businessValue: 7,
          customerTrust: 8,
          adoption: 7,
          operatingCost: 2
        }
      },
      {
        id: "D",
        text: "Start with a narrow use case where 85% quality is acceptable, prove it works, then expand scope",
        score: 2,
        feedback: "Reasonable but misses the opportunity to ship with quality filters. You could ship the broader use case with guardrails.",
        tradeoffs: ["Delays full product launch", "Narrow initial market"],
        consequenceMetrics: {
          businessValue: 4,
          adoption: 5,
          customerTrust: 6
        }
      }
    ],
    bestOptionId: "C",
    bestAnswerExplanation: "Generative AI quality is inherently variable. Build quality scoring and gating into the product design. Let high-confidence generations through, flag low-confidence ones for review.",
    interviewInsight: "This tests your understanding of generative AI's unique challenges: variable output quality that can't be completely eliminated.",
    learningPoint: "In generative AI, quality gating and user transparency about confidence are essential. Don't ship variable quality blindly."
  },
  {
    id: 20,
    title: "Customer Discovery: Which Problem?",
    type: "scenario",
    difficulty: "medium",
    primaryCompetency: "Customer Discovery",
    secondaryCompetencies: ["Product Strategy", "Communication and Leadership"],
    scenario: "You're interviewing potential customers for a new AI product. Customer A says, 'I wish I had better AI for forecasting.' Customer B says, 'My team spends 30 hours/week on manual data entry.' Customer C says, 'We lose 5% of deals because of poor follow-up.' All three are real problems.",
    question: "Which should you prioritize for initial discovery?",
    options: [
      {
        id: "A",
        text: "Customer A: They explicitly asked for AI",
        score: 0,
        feedback: "Mistake. Customers ask for solutions, but the real problem is often unstated. Customer B's 30 hours/week is a concrete, measurable problem.",
        tradeoffs: ["Build wrong thing", "Solve misdiagnosed problem", "Wasted effort"],
        consequenceMetrics: {
          businessValue: -5,
          customerTrust: -2
        }
      },
      {
        id: "B",
        text: "Customer B: 30 hours/week is quantifiable and urgent",
        score: 3,
        feedback: "Best choice. Quantifiable pain (30 hours/week) reveals priority better than vague feature requests.",
        tradeoffs: ["Must validate it's a product opportunity", "May not be AI's job"],
        consequenceMetrics: {
          businessValue: 8,
          customerTrust: 7
        }
      },
      {
        id: "C",
        text: "Customer C: 5% deal loss has revenue impact",
        score: 2,
        feedback: "Valid but less concrete. Revenue impact is important, but you need to validate the root cause.",
        tradeoffs: ["May not be solvable with AI", "Revenue impact is estimated not proven"],
        consequenceMetrics: {
          businessValue: 6,
          customerTrust: 5
        }
      },
      {
        id: "D",
        text: "Interview more customers to see if any pattern emerges stronger than these three",
        score: 1,
        feedback: "More data is good, but you already have useful signal. Don't delay decisions waiting for perfect data.",
        tradeoffs: ["Delays product development", "Analysis paralysis"],
        consequenceMetrics: {
          businessValue: 2,
          deliverySpeed: -8
        }
      }
    ],
    bestOptionId: "B",
    bestAnswerExplanation: "Look for specific, quantifiable problems: '30 hours/week on data entry' is more valuable signal than 'I want better AI.' Focus on concrete waste or pain, not wishful feature requests.",
    interviewInsight: "This tests how you find product opportunities. Do you listen to what customers ask for, or do you dig for the real underlying problem?",
    learningPoint: "The most valuable customer feedback is specific and quantifiable. '30 hours/week' beats 'I want AI.'"
  }
];

// Continue with questions 21-100...
// (The questions will follow the same structure with varied scenarios, difficulty levels, and competencies)

// For space efficiency in this file, I'll add the remaining 80 questions:
const ADDITIONAL_QUESTIONS = [
  {id: 21, title: "RAG System Performance", type: "scenario", difficulty: "medium", primaryCompetency: "AI and ML Fundamentals", secondaryCompetencies: ["Technical Trade-offs", "Metrics and Experimentation"], scenario: "Your RAG system retrieves relevant documents but sometimes includes low-quality ones that confuse the model. You can: (1) Increase retrieval strictness (fewer but higher-quality docs, slower retrieval), or (2) Add a reranking step (more compute, slower).", question: "What's your approach?", options: [{id: "A", text: "Increase retrieval strictness for speed", score: 1, feedback: "Incomplete. Low-quality docs still matter even if rare.", tradeoffs: ["Missed opportunities", "Poor coverage"], consequenceMetrics: {deliverySpeed: 8, businessValue: 2}}, {id: "B", text: "Add reranking to keep all docs but filter at generation", score: 3, feedback: "Best approach. Keep retrieval broad, filter quality at inference.", tradeoffs: ["Extra compute"], consequenceMetrics: {businessValue: 7, reliability: 7, operatingCost: 2}}, {id: "C", text: "Measure which approach users prefer", score: 2, feedback: "Good but slower to decide.", tradeoffs: ["Analysis delay"], consequenceMetrics: {businessValue: 6, deliverySpeed: -3}}, {id: "D", text: "Use both: increase strictness and add reranking", score: 0, feedback: "Overkill and slow.", tradeoffs: ["Too slow"], consequenceMetrics: {deliverySpeed: -10}}], bestOptionId: "B", bestAnswerExplanation: "Reranking is a common RAG optimization.", interviewInsight: "Tests understanding of retrieval vs. generation tradeoffs.", learningPoint: "RAG quality comes from both retrieval and filtering stages."},
  {id: 22, title: "Feature Parity Demand", type: "scenario", difficulty: "hard", primaryCompetency: "Product Strategy", secondaryCompetencies: ["Stakeholder Management", "Prioritization and MVP Scoping"], scenario: "Your AI product has a core feature that competes with 3 legacy tools. Sales says customers will leave if you don't match all their features. Engineering says you can't match everything and still innovate in AI.", question: "How do you frame this decision?", options: [{id: "A", text: "Match all features to keep customers", score: 0, feedback: "You'll never outpace legacy tools in their game.", tradeoffs: ["Copycat product", "No differentiation"], consequenceMetrics: {businessValue: 2, revenue: 3}}, {id: "B", text: "Only add AI-specific features, accept customer loss", score: 1, feedback: "Overconfidence. You may lose customers before they see AI value.", tradeoffs: ["Lost revenue", "Slow adoption"], consequenceMetrics: {businessValue: 4, revenue: -8}}, {id: "C", text: "Identify must-have features from legacy tools, match those, differentiate on AI", score: 3, feedback: "Strategic approach. Match table stakes, win on innovation.", tradeoffs: ["Requires prioritization"], consequenceMetrics: {businessValue: 8, revenue: 7}}, {id: "D", text: "Let customers choose: full legacy features vs. AI-only version", score: 2, feedback: "Reasonable but operationally complex.", tradeoffs: ["Doubles product management"], consequenceMetrics: {businessValue: 5, revenue: 5}}], bestOptionId: "C", bestAnswerExplanation: "Compete where you're strong, match where you need to.", interviewInsight: "Tests strategic positioning thinking.", learningPoint: "Don't win by copying—win by being different in meaningful ways."},
  {id: 23, title: "Annotation and Labeling Strategy", type: "scenario", difficulty: "medium", primaryCompetency: "Data Strategy", secondaryCompetencies: ["AI and ML Fundamentals", "Product Execution"], scenario: "You need 10,000 labeled examples for your model. Internal team labeling takes 40 days at $50K cost. Crowdsourcing takes 3 days at $15K but inter-annotator agreement is only 78%.", question: "Which approach?", options: [{id: "A", text: "Internal labeling for quality", score: 1, feedback: "Quality matters but 40 days is risky.", tradeoffs: ["Slow launch", "High cost"], consequenceMetrics: {reliability: 8, deliverySpeed: -10, operatingCost: 7}}, {id: "B", text: "Crowdsourcing for speed", score: 1, feedback: "78% agreement is borderline. You'll have noisy labels.", tradeoffs: ["Model quality issues", "Technical debt"], consequenceMetrics: {deliverySpeed: 10, operatingCost: -8, reliability: -4}}, {id: "C", text: "Hybrid: Crowdsource initial labels, have team review disagreements", score: 3, feedback: "Best approach. You get speed and quality where it matters.", tradeoffs: ["Coordination overhead"], consequenceMetrics: {businessValue: 8, deliverySpeed: 7, operatingCost: 1}}, {id: "D", text: "Build a tool to make internal labeling faster", score: 2, feedback: "Good but slower than hybrid.", tradeoffs: ["Tool development delay"], consequenceMetrics: {businessValue: 5, deliverySpeed: 3}}], bestOptionId: "C", bestAnswerExplanation: "Hybrid approaches often win: crowdsource initial pass, expert validation on disagreements.", interviewInsight: "Tests pragmatism on data quality vs. speed.", learningPoint: "Perfect data is expensive. Get 'good enough' data and iterate."},
  {id: 24, title: "Cold Start Problem for New Users", type: "scenario", difficulty: "medium", primaryCompetency: "Product Strategy", secondaryCompetencies: ["AI Evaluation", "Metrics and Experimentation"], scenario: "Your recommendation AI works great for users with history but struggles with new users (cold start). You can: (1) Use popular items for new users, (2) Ask users explicit questions to warm up, (3) Use content-based filtering.", question: "What's best?", options: [{id: "A", text: "Always use popular items for everyone", score: 0, feedback: "New users hate generic recommendations.", tradeoffs: ["Poor experience", "Low retention"], consequenceMetrics: {adoption: -8, customerTrust: -5}}, {id: "B", text: "Always ask questions before recommending", score: 1, feedback: "Friction kills adoption.", tradeoffs: ["Friction", "Drop-off"], consequenceMetrics: {adoption: -6, businessValue: -3}}, {id: "C", text: "Use hybrid: show popular items initially with quick preference survey, transition to personalized", score: 3, feedback: "Best approach. Low friction, gradual personalization.", tradeoffs: ["Complex logic"], consequenceMetrics: {adoption: 8, customerTrust: 7}}, {id: "D", text: "Content-based filtering only", score: 1, feedback: "Works for some domains but misses collaborative signal.", tradeoffs: ["Limited effectiveness"], consequenceMetrics: {adoption: 4, businessValue: 3}}], bestOptionId: "C", bestAnswerExplanation: "Cold start is a onboarding problem. Use multiple strategies depending on data availability.", interviewInsight: "Tests thinking about user onboarding in AI products.", learningPoint: "Product experience for cold-start users drives retention more than later optimization."},
  {id: 25, title: "Explainability vs. Performance", type: "scenario", difficulty: "hard", primaryCompetency: "Responsible AI and Governance", secondaryCompetencies: ["Technical Trade-offs", "AI Evaluation"], scenario: "Your model achieves 94% accuracy but uses 200 features and is hard to explain. A simpler interpretable model achieves 88% accuracy with 10 features. Your use case is medical diagnosis where doctors need to understand the AI's reasoning.", question: "Which should you ship?", options: [{id: "A", text: "The 94% model because higher accuracy saves lives", score: 0, feedback: "Wrong context. In medicine, doctors won't trust a black box. 88% accuracy they understand beats 94% they don't.", tradeoffs: ["Adoption failure", "Liability"], consequenceMetrics: {customerTrust: -10, complianceRisk: 8}}, {id: "B", text: "The 88% interpretable model for trust", score: 3, feedback: "Correct for medical context. Explainability is a requirement, not optional.", tradeoffs: ["Lower accuracy"], consequenceMetrics: {customerTrust: 9, reliability: 7, complianceRisk: -8}}, {id: "C", text: "Ensemble both: use the 94% model but explain with the 88% model", score: 2, feedback: "Creative but confusing. Doctors won't trust misaligned explanations.", tradeoffs: ["Confusion", "Liability risk"], consequenceMetrics: {customerTrust: 3, complianceRisk: 6}}, {id: "D", text: "Use advanced interpretation techniques to explain the 94% model", score: 2, feedback: "Good but interpretability of complex models is still limited.", tradeoffs: ["Imperfect explanations"], consequenceMetrics: {customerTrust: 5, reliability: 6}}], bestOptionId: "B", bestAnswerExplanation: "Context matters. In regulated domains like healthcare, explainability is non-negotiable. Trade some accuracy for trust.", interviewInsight: "Tests whether you can weight different dimensions correctly.", learningPoint: "Not all use cases optimize for the same metrics. Domain matters."},
];

// Merge additional questions
QUESTIONS.push(...ADDITIONAL_QUESTIONS);

// Continue building out to 100 questions with varied scenarios...
// (Additional questions 26-100 would continue here with the same structure)

// For now, I'll generate the remaining questions programmatically to ensure we reach 100
const REMAINING_QUESTIONS = [
  {id: 26, title: "Real-Time Inference Scaling", type: "scenario", difficulty: "hard", primaryCompetency: "Technical Trade-offs", secondaryCompetencies: ["Product Execution", "Post-Launch Monitoring"], scenario: "Your inference service gets 10x traffic spike during peak hours. You can auto-scale but it costs 3x more. You can queue requests but adds 5s latency. You can degrade model quality but loses accuracy.", question: "How do you handle this?", options: [{id: "A", text: "Always scale, cost doesn't matter during crisis", score: 0, feedback: "Unsustainable. You'll destroy unit economics.", tradeoffs: ["Bankruptcy", "Inefficiency"], consequenceMetrics: {operatingCost: 10, businessValue: 5}}, {id: "B", text: "Always queue, users accept 5s latency", score: 1, feedback: "Untested assumption. Users won't wait.", tradeoffs: ["User frustration", "Loss"], consequenceMetrics: {customerTrust: -8, businessValue: -5}}, {id: "C", text: "Route high-value customers to instant inference, others to queue", score: 3, feedback: "Strategic approach. Prioritize where it matters.", tradeoffs: ["Operational complexity"], consequenceMetrics: {businessValue: 8, customerTrust: 7, operatingCost: 2}}, {id: "D", text: "Scale to 2x capacity and measure demand elasticity", score: 2, feedback: "Good but doesn't solve immediate crisis.", tradeoffs: ["Temporary gap"], consequenceMetrics: {businessValue: 5, customerTrust: 4}}], bestOptionId: "C", bestAnswerExplanation: "Not all requests are equally valuable. Prioritize based on customer tier or request importance.", interviewInsight: "Tests thinking about infrastructure and product economics together.", learningPoint: "In AI products, infrastructure decisions have direct product impact."},
  {id: 27, title: "Behavioral: Difficult Feedback", type: "scenario", difficulty: "medium", primaryCompetency: "Communication and Leadership", secondaryCompetencies: ["Stakeholder Management", "Product Execution"], scenario: "Your head of sales tells you your product strategy is 'naive and won't win deals.' You spent 2 months on research validating the strategy. Your team hears this and morale drops.", question: "How do you respond?", options: [{id: "A", text: "Defend your strategy defensively", score: 0, feedback: "Escalates conflict.", tradeoffs: ["More tension", "Team divided"], consequenceMetrics: {teamMorale: -8, stakeholderConfidence: -9}}, {id: "B", text: "Ignore the feedback and move forward", score: 0, feedback: "You lose the partnership with sales.", tradeoffs: ["Misalignment", "Poor go-to-market"], consequenceMetrics: {stakeholderConfidence: -7, businessValue: -6}}, {id: "C", text: "Acknowledge the concern, ask what deals are lost without the feature, gather specifics, then decide", score: 3, feedback: "Professional response. You take feedback seriously while defending your position.", tradeoffs: ["Difficult conversation"], consequenceMetrics: {stakeholderConfidence: 7, teamMorale: 5, businessValue: 6}}, {id: "D", text: "Schedule a separate meeting with sales leadership to resolve offline", score: 2, feedback: "Good but public acknowledgment matters.", tradeoffs: ["Team still uncertain"], consequenceMetrics: {stakeholderConfidence: 4, teamMorale: 2}}], bestOptionId: "C", bestAnswerExplanation: "Handle feedback professionally: listen, understand the concern, provide reasoning, decide. Show your team you're responsive without abandoning strategy.", interviewInsight: "Tests maturity in handling criticism.", learningPoint: "The best leaders take feedback seriously and respond with data, not defensiveness."},
  {id: 28, title: "Privacy-Preserving Federated Learning", type: "scenario", difficulty: "hard", primaryCompetency: "Privacy and Security", secondaryCompetencies: ["Data Strategy", "Technical Trade-offs"], scenario: "You want to train a model on customer data to improve recommendations, but customers are privacy-conscious. Federated learning keeps data on-device but is slower to train and harder to deploy. Centralized training is faster but requires data transfer.", question: "Which path?", options: [{id: "A", text: "Centralized training, customers won't notice", score: 0, feedback: "Privacy violations damage trust forever.", tradeoffs: ["Legal risk", "Trust loss"], consequenceMetrics: {customerTrust: -10, complianceRisk: 9}}, {id: "B", text: "Federated learning regardless of speed impact", score: 2, feedback: "Ideal but costly. Only worth it if customers truly care.", tradeoffs: ["Slower training", "Complexity"], consequenceMetrics: {customerTrust: 9, businessValue: 3}}, {id: "C", text: "Start with opt-in centralized training, migrate to federated if privacy concerns grow", score: 3, feedback: "Pragmatic. Validate demand for privacy before investing in expensive infrastructure.", tradeoffs: ["Privacy feature not ready day 1"], consequenceMetrics: {customerTrust: 7, businessValue: 7}}, {id: "D", text: "Use differential privacy on centralized data as compromise", score: 2, feedback: "Reasonable but not true privacy.", tradeoffs: ["Technical complexity"], consequenceMetrics: {customerTrust: 5, businessValue: 5}}], bestOptionId: "C", bestAnswerExplanation: "Privacy is important but not equally important in all contexts. Start simple, add privacy controls based on demand.", interviewInsight: "Tests whether you balance privacy and pragmatism.", learningPoint: "Ship privacy features your customers actually want, not theoretical maximum privacy."},
  {id: 29, title: "Multi-Language Model Strategy", type: "scenario", difficulty: "medium", primaryCompetency: "Product Strategy", secondaryCompetencies: ["Technical Trade-offs", "Business and Monetization"], scenario: "Your AI product works in English but customers want French, Spanish, and Mandarin. You can fine-tune for each language (3 months, expensive) or use multilingual models (2 weeks, less control).", question: "What's your approach?", options: [{id: "A", text: "English-only MVP, add languages later", score: 1, feedback: "Conservative but misses market. English speakers are minority globally.", tradeoffs: ["Limited market", "Competitors move faster"], consequenceMetrics: {businessValue: 2, revenue: 3}}, {id: "B", text: "Fine-tune all languages for best quality", score: 1, feedback: "Quality is great but slow. You'll miss launch window.", tradeoffs: ["3 month delay", "High cost"], consequenceMetrics: {reliability: 8, deliverySpeed: -10, operatingCost: 8}}, {id: "C", text: "Launch with multilingual model as MVP, fine-tune top markets later", score: 3, feedback: "Smart. You get to all markets fast, then optimize.", tradeoffs: ["Initial quality varies by language"], consequenceMetrics: {businessValue: 8, revenue: 8, deliverySpeed: 10}}, {id: "D", text: "Partner with local providers for each language", score: 2, feedback: "Works but less control and slower.", tradeoffs: ["Dependency", "Revenue share"], consequenceMetrics: {revenue: 5, businessValue: 4}}], bestOptionId: "C", bestAnswerExplanation: "Get to market globally first with reasonable quality, then optimize by language based on revenue.", interviewInsight: "Tests global product thinking.", learningPoint: "Localization can be a phase-two optimization if you start with capable global models."},
  {id: 30, title: "Model Serving Architecture", type: "scenario", difficulty: "medium", primaryCompetency: "Technical Trade-offs", secondaryCompetencies: ["Product Execution", "Product Strategy"], scenario: "You can serve your model from a cloud API (simple, expensive at scale) or self-hosted (cheaper, requires ops). You have 10,000 monthly active users with spiky demand.", question: "Which architecture?", options: [{id: "A", text: "Cloud API for simplicity", score: 1, feedback: "At 10K MAU with spikes, costs will be unsustainable.", tradeoffs: ["Cost explosion", "Unit economics break"], consequenceMetrics: {operatingCost: 9, businessValue: 3}}, {id: "B", text: "Self-hosted to save costs", score: 1, feedback: "Ops burden is underestimated. You need DevOps expertise.", tradeoffs: ["Ops overhead", "Reliability risk"], consequenceMetrics: {operatingCost: -7, teamMorale: -4}}, {id: "C", text: "Hybrid: use cloud API for first 6 months while evaluating self-hosting", score: 3, feedback: "Best approach. Validate unit economics before investing in infrastructure.", tradeoffs: ["Higher costs initially"], consequenceMetrics: {businessValue: 7, deliverySpeed: 10}}, {id: "D", text: "Self-host from day 1 to optimize", score: 1, feedback: "Premature optimization distracts from product.", tradeoffs: ["Team distracted", "Slow feature development"], consequenceMetrics: {deliverySpeed: -8, businessValue: -4}}], bestOptionId: "C", bestAnswerExplanation: "Start simple, migrate infrastructure when data justifies it.", interviewInsight: "Tests understanding of growth-stage infrastructure decisions.", learningPoint: "Choose infrastructure maturity based on product stage, not engineering perfectionism."}
];

QUESTIONS.push(...REMAINING_QUESTIONS);

const FINAL_QUESTIONS = [
  {
    id: 31,
    title: "Offline vs Online Evaluation Gap",
    type: "scenario",
    difficulty: "hard",
    primaryCompetency: "AI Evaluation",
    secondaryCompetencies: ["Metrics and Experimentation", "Post-Launch Monitoring"],
    scenario: "Your summarization model scores 0.91 ROUGE on a curated offline set, but a shadow deployment shows users edit 38% of summaries before sending. Product wants to ship next week because offline metrics look strong.",
    question: "What do you do before launch?",
    options: [
      {
        id: "A",
        text: "Ship based on offline metrics and monitor after launch",
        score: 0,
        feedback: "Offline metrics alone can hide user-value failures. 38% edits is a clear product signal.",
        tradeoffs: ["User frustration", "Credibility loss"],
        consequenceMetrics: {customerTrust: -7, reliability: -6, deliverySpeed: 8}
      },
      {
        id: "B",
        text: "Delay indefinitely until ROUGE reaches 0.95",
        score: 1,
        feedback: "Chasing a single offline metric ignores the real problem: users don't accept outputs as-is.",
        tradeoffs: ["False target", "Delayed learning"],
        consequenceMetrics: {deliverySpeed: -9, businessValue: -3}
      },
      {
        id: "C",
        text: "Treat edit rate as a gate: run online eval, interview heavy editors, and redefine launch criteria around acceptance and edit distance",
        score: 3,
        feedback: "You connect metric to behavior, investigate root causes, and set launch gates that reflect value.",
        tradeoffs: ["1-2 week delay", "Requires instrumentation"],
        consequenceMetrics: {customerTrust: 7, reliability: 8, businessValue: 6, deliverySpeed: -2}
      },
      {
        id: "D",
        text: "Add a 'regenerate' button and ship with current quality",
        score: 2,
        feedback: "Helpful UX, but does not diagnose why summaries fail or prove readiness.",
        tradeoffs: ["Masks quality issues", "Support load"],
        consequenceMetrics: {adoption: 4, customerTrust: 2, businessValue: 3}
      }
    ],
    bestOptionId: "C",
    bestAnswerExplanation: "When offline and online signals diverge, investigate user behavior and redefine success metrics before shipping.",
    interviewInsight: "Interviewers look for metric literacy: knowing when a benchmark is insufficient.",
    learningPoint: "Offline scores are hypotheses; online acceptance is the product truth."
  },
  {
    id: 32,
    title: "Ground Truth Creation Bottleneck",
    type: "scenario",
    difficulty: "medium",
    primaryCompetency: "Data Strategy",
    secondaryCompetencies: ["AI Evaluation", "Product Execution"],
    scenario: "You need labeled ground truth for a document classification model used in compliance review. Legal SMEs can label 40 docs/day. You need 5,000 labels. Crowdsourced labels agree with SMEs only 71% of the time on a pilot.",
    question: "How do you build ground truth?",
    options: [
      {
        id: "A",
        text: "Use only SME labels even if it takes months",
        score: 1,
        feedback: "Highest quality but may kill the timeline and opportunity.",
        tradeoffs: ["Very slow", "High cost"],
        consequenceMetrics: {reliability: 8, deliverySpeed: -10, operatingCost: 7}
      },
      {
        id: "B",
        text: "Use crowdsourced labels at scale despite 71% agreement",
        score: 0,
        feedback: "Too noisy for compliance. Errors create regulatory risk.",
        tradeoffs: ["Compliance failures", "Retraining cost"],
        consequenceMetrics: {complianceRisk: 9, reliability: -8, customerTrust: -6}
      },
      {
        id: "C",
        text: "Have SMEs define guidelines and edge cases, crowdsource bulk labels, then SME-adjudicate disagreements and hard classes",
        score: 3,
        feedback: "Scales volume while protecting quality where it matters most.",
        tradeoffs: ["Process overhead"],
        consequenceMetrics: {reliability: 7, deliverySpeed: 6, complianceRisk: -5, operatingCost: 2}
      },
      {
        id: "D",
        text: "Skip labeled ground truth and evaluate only with online A/B tests",
        score: 1,
        feedback: "Online tests help later but you still need a reliable training and offline eval baseline for compliance.",
        tradeoffs: ["Weak offline signal", "Harder debugging"],
        consequenceMetrics: {deliverySpeed: 5, reliability: -4, complianceRisk: 6}
      }
    ],
    bestOptionId: "C",
    bestAnswerExplanation: "Hybrid labeling with expert adjudication is the standard for high-stakes domains.",
    interviewInsight: "Tests whether you balance data quality, cost, and domain risk.",
    learningPoint: "Ground truth quality must match the cost of being wrong."
  },
  {
    id: 33,
    title: "Hallucination Measurement Design",
    type: "scenario",
    difficulty: "hard",
    primaryCompetency: "AI Evaluation",
    secondaryCompetencies: ["Responsible AI and Governance", "Metrics and Experimentation"],
    scenario: "Your enterprise RAG assistant invents citations about 8% of the time in a weekly sample. Leadership asks for a single 'hallucination rate' KPI for the exec dashboard.",
    question: "How do you define the metric?",
    options: [
      {
        id: "A",
        text: "Report a single weekly hallucination percentage from a random sample",
        score: 1,
        feedback: "Useful signal but too coarse: misses severity, topic, and groundedness differences.",
        tradeoffs: ["Hides risk hotspots"],
        consequenceMetrics: {stakeholderConfidence: 3, reliability: 2}
      },
      {
        id: "B",
        text: "Only track user-reported hallucinations",
        score: 0,
        feedback: "Under-reports badly; most users never file tickets.",
        tradeoffs: ["False confidence"],
        consequenceMetrics: {reliability: -7, complianceRisk: 7}
      },
      {
        id: "C",
        text: "Define faithfulness/groundedness scoring with severity tiers, stratified sampling by intent, and separate rates for high-stakes intents",
        score: 3,
        feedback: "A decision-useful KPI that reflects risk, not just a vanity average.",
        tradeoffs: ["More eval cost"],
        consequenceMetrics: {reliability: 8, complianceRisk: -6, stakeholderConfidence: 7}
      },
      {
        id: "D",
        text: "Replace hallucination tracking with overall CSAT",
        score: 1,
        feedback: "CSAT is downstream and lags; it won't catch silent factual errors.",
        tradeoffs: ["Delayed detection"],
        consequenceMetrics: {businessValue: 1, reliability: -3}
      }
    ],
    bestOptionId: "C",
    bestAnswerExplanation: "Hallucination metrics need severity, stratification, and groundedness—not one blended average.",
    interviewInsight: "Tests evaluation design maturity for generative systems.",
    learningPoint: "Measure hallucinations where harm is highest, not only where volume is highest."
  },
  {
    id: 34,
    title: "Precision Recall Product Trade-off",
    type: "scenario",
    difficulty: "medium",
    primaryCompetency: "Metrics and Experimentation",
    secondaryCompetencies: ["AI Evaluation", "Product Strategy"],
    scenario: "Your fraud detection model can run at high recall (catch more fraud, more false positives) or high precision (fewer false alarms, more missed fraud). Ops is overwhelmed by alerts; finance wants fewer missed losses.",
    question: "How do you choose the operating point?",
    options: [
      {
        id: "A",
        text: "Maximize recall because missing fraud is worse",
        score: 1,
        feedback: "May be true, but ignoring ops capacity makes the system unusable.",
        tradeoffs: ["Alert fatigue", "Missed real alerts"],
        consequenceMetrics: {reliability: 2, operatingCost: 8, teamMorale: -7}
      },
      {
        id: "B",
        text: "Maximize precision so ops can keep up",
        score: 1,
        feedback: "Reduces noise but may leave unacceptable fraud loss.",
        tradeoffs: ["Higher loss"],
        consequenceMetrics: {operatingCost: -5, businessValue: -4, revenue: -6}
      },
      {
        id: "C",
        text: "Estimate cost of false positives vs false negatives, set threshold by expected loss, and create a priority queue for borderline cases",
        score: 3,
        feedback: "Connects ML threshold to business economics and workflow design.",
        tradeoffs: ["Needs cost data"],
        consequenceMetrics: {businessValue: 8, reliability: 6, operatingCost: 1}
      },
      {
        id: "D",
        text: "Let each ops agent pick their own threshold",
        score: 0,
        feedback: "Inconsistent risk posture and hard to audit.",
        tradeoffs: ["No governance"],
        consequenceMetrics: {complianceRisk: 8, reliability: -5}
      }
    ],
    bestOptionId: "C",
    bestAnswerExplanation: "Thresholds are product decisions. Anchor them in asymmetric costs and support with workflow design.",
    interviewInsight: "Looks for business-aware metric thinking.",
    learningPoint: "Precision/recall is a product economics problem, not only an ML tuning problem."
  },
  {
    id: 35,
    title: "Latency Budget Negotiation",
    type: "scenario",
    difficulty: "medium",
    primaryCompetency: "Technical Trade-offs",
    secondaryCompetencies: ["Product Strategy", "Enterprise AI Products"],
    scenario: "Enterprise buyers require p95 latency under 800ms for a search-assist feature. Your best quality model is at 1.6s. A distilled model meets latency but drops answer completeness by 12% in eval.",
    question: "What do you propose?",
    options: [
      {
        id: "A",
        text: "Ship the slow model and ask customers to accept 1.6s",
        score: 0,
        feedback: "Ignores a contractual requirement and will block deals.",
        tradeoffs: ["Lost deals"],
        consequenceMetrics: {revenue: -8, stakeholderConfidence: -6}
      },
      {
        id: "B",
        text: "Ship the fast model and hide the quality drop",
        score: 0,
        feedback: "Dishonest and will surface in POC evaluations.",
        tradeoffs: ["Churn", "Trust loss"],
        consequenceMetrics: {customerTrust: -9, revenue: -5}
      },
      {
        id: "C",
        text: "Offer a tiered experience: fast default answers plus async deep-research mode, and negotiate SLA by mode",
        score: 3,
        feedback: "Meets interactive latency while preserving quality path for complex queries.",
        tradeoffs: ["UX complexity"],
        consequenceMetrics: {businessValue: 7, customerTrust: 6, revenue: 6, reliability: 5}
      },
      {
        id: "D",
        text: "Only ship after matching both latency and quality with more research",
        score: 2,
        feedback: "Principled but may miss the sales window if no interim design.",
        tradeoffs: ["Delayed revenue"],
        consequenceMetrics: {deliverySpeed: -6, reliability: 7}
      }
    ],
    bestOptionId: "C",
    bestAnswerExplanation: "Productize the trade-off: different modes for different latency/quality needs.",
    interviewInsight: "Tests enterprise constraint handling without binary thinking.",
    learningPoint: "When you cannot win on one axis, redesign the interaction model."
  },
  {
    id: 36,
    title: "Inference Cost Crisis",
    type: "scenario",
    difficulty: "hard",
    primaryCompetency: "Business and Monetization",
    secondaryCompetencies: ["Technical Trade-offs", "Product Strategy"],
    scenario: "Your generative writing assistant has strong usage, but gross margin is -18% because GPT-4 calls dominate COGS. Growth wants to keep free unlimited usage through next quarter.",
    question: "What is your recommendation?",
    options: [
      {
        id: "A",
        text: "Keep unlimited free usage to maximize growth",
        score: 0,
        feedback: "Unsustainable unit economics destroy the business.",
        tradeoffs: ["Cash burn"],
        consequenceMetrics: {adoption: 8, revenue: -10, operatingCost: 10}
      },
      {
        id: "B",
        text: "Immediately switch all traffic to a cheap small model",
        score: 1,
        feedback: "May collapse quality and retention overnight.",
        tradeoffs: ["Churn"],
        consequenceMetrics: {operatingCost: -8, customerTrust: -7, adoption: -6}
      },
      {
        id: "C",
        text: "Introduce usage tiers, route simple tasks to cheaper models, reserve frontier models for paid plans, and set margin targets",
        score: 3,
        feedback: "Aligns pricing, routing, and quality with sustainable economics.",
        tradeoffs: ["Some growth friction"],
        consequenceMetrics: {revenue: 7, operatingCost: -5, businessValue: 8, adoption: 2}
      },
      {
        id: "D",
        text: "Raise prices 3x for everyone immediately",
        score: 1,
        feedback: "May fix margin but ignores packaging and likely causes churn spikes.",
        tradeoffs: ["Churn risk"],
        consequenceMetrics: {revenue: 3, adoption: -8, customerTrust: -5}
      }
    ],
    bestOptionId: "C",
    bestAnswerExplanation: "Fix unit economics with packaging + model routing, not only blunt price or quality cuts.",
    interviewInsight: "Tests monetization judgment for AI products.",
    learningPoint: "AI product strategy includes COGS design, not just features."
  },
  {
    id: 37,
    title: "Prompt Injection Incident",
    type: "scenario",
    difficulty: "hard",
    primaryCompetency: "Privacy and Security",
    secondaryCompetencies: ["Responsible AI and Governance", "Post-Launch Monitoring"],
    scenario: "A customer demonstrates that pasted text can override your support bot instructions and exfiltrate another customer's ticket summary from the same session context. The exploit is reproducible.",
    question: "What is your immediate product response?",
    options: [
      {
        id: "A",
        text: "Publish a blog post that prompt injection is an industry-wide issue and continue operating",
        score: 0,
        feedback: "Minimizes a real data exposure risk.",
        tradeoffs: ["Breach potential", "Legal exposure"],
        consequenceMetrics: {securityRisk: 10, customerTrust: -9, complianceRisk: 9}
      },
      {
        id: "B",
        text: "Disable cross-ticket context, add output filters for sensitive fields, rotate keys, notify affected customers, and open an incident review",
        score: 3,
        feedback: "Contains blast radius, protects data, communicates, and creates accountability.",
        tradeoffs: ["Short-term capability reduction"],
        consequenceMetrics: {securityRisk: -8, customerTrust: 5, complianceRisk: -7, businessValue: -2}
      },
      {
        id: "C",
        text: "Ask users not to paste untrusted text",
        score: 1,
        feedback: "User education is not a control for a security defect.",
        tradeoffs: ["Residual risk"],
        consequenceMetrics: {securityRisk: 5, customerTrust: -3}
      },
      {
        id: "D",
        text: "Fine-tune the model overnight against this single exploit string",
        score: 1,
        feedback: "Brittle defense; variants will bypass.",
        tradeoffs: ["False security"],
        consequenceMetrics: {securityRisk: 4, deliverySpeed: 3}
      }
    ],
    bestOptionId: "B",
    bestAnswerExplanation: "Treat prompt injection with data exposure as a security incident: contain, remediate, notify, review.",
    interviewInsight: "Assesses incident judgment for LLM applications.",
    learningPoint: "Instruction hierarchy and data isolation are product requirements, not nice-to-haves."
  },
  {
    id: 38,
    title: "Data Leakage in Fine-Tuning",
    type: "scenario",
    difficulty: "hard",
    primaryCompetency: "Privacy and Security",
    secondaryCompetencies: ["Data Strategy", "Enterprise AI Products"],
    scenario: "Security finds that a fine-tuned support model can regurgitate snippets of internal runbooks and a few customer emails that were in the training set.",
    question: "What should you do?",
    options: [
      {
        id: "A",
        text: "Keep the model and add a disclaimer",
        score: 0,
        feedback: "Insufficient for customer data exposure.",
        tradeoffs: ["Legal risk"],
        consequenceMetrics: {complianceRisk: 9, customerTrust: -10}
      },
      {
        id: "B",
        text: "Pull the model, audit training corpora, remove sensitive sources, retrain with data governance controls, and add output DLP checks",
        score: 3,
        feedback: "Correct sequencing: stop harm, fix data pipeline, add detection.",
        tradeoffs: ["Downtime", "Retrain cost"],
        consequenceMetrics: {complianceRisk: -8, customerTrust: 6, securityRisk: -7, deliverySpeed: -4}
      },
      {
        id: "C",
        text: "Only add output filters without changing training data",
        score: 1,
        feedback: "Filters help but leave memorization risk in place.",
        tradeoffs: ["Residual leakage"],
        consequenceMetrics: {securityRisk: -3, complianceRisk: -2}
      },
      {
        id: "D",
        text: "Switch to RAG over runbooks so the model never needs fine-tuning",
        score: 2,
        feedback: "May be a good architecture long-term, but does not remediate the current leaking model.",
        tradeoffs: ["Still need incident response"],
        consequenceMetrics: {technicalDebt: -2, securityRisk: -1, businessValue: 4}
      }
    ],
    bestOptionId: "B",
    bestAnswerExplanation: "Memorization of sensitive training data requires model withdrawal and data governance fixes, not disclaimers.",
    interviewInsight: "Tests privacy ownership as a PM.",
    learningPoint: "Training data policy is part of the product threat model."
  },
  {
    id: 39,
    title: "Bias Audit Before Launch",
    type: "scenario",
    difficulty: "hard",
    primaryCompetency: "Responsible AI and Governance",
    secondaryCompetencies: ["Metrics and Experimentation", "Stakeholder Management"],
    scenario: "A fairness audit shows your resume-screening assistant has a 14-point lower callback recommendation rate for candidates from certain universities correlated with underrepresented groups. Legal wants a pause. Sales has 6 POCs waiting.",
    question: "How do you decide?",
    options: [
      {
        id: "A",
        text: "Ship anyway; correlation is not causation",
        score: 0,
        feedback: "Ignores disparate impact risk and governance.",
        tradeoffs: ["Legal exposure", "Brand damage"],
        consequenceMetrics: {complianceRisk: 10, customerTrust: -8}
      },
      {
        id: "B",
        text: "Pause launches, quantify impact by segment, document mitigation options with Legal/DS, and only resume with approved controls",
        score: 3,
        feedback: "Responsible sequencing under uncertainty with cross-functional ownership.",
        tradeoffs: ["Short-term revenue delay"],
        consequenceMetrics: {complianceRisk: -8, stakeholderConfidence: 6, customerTrust: 7, revenue: -3}
      },
      {
        id: "C",
        text: "Remove university as a feature and relaunch immediately",
        score: 2,
        feedback: "May help but can be incomplete if proxies remain; still needs validation.",
        tradeoffs: ["Proxy bias may remain"],
        consequenceMetrics: {complianceRisk: -4, deliverySpeed: 4}
      },
      {
        id: "D",
        text: "Let each customer decide whether to enable the model",
        score: 1,
        feedback: "Shifts liability without solving harm; weak enterprise posture.",
        tradeoffs: ["Inconsistent risk"],
        consequenceMetrics: {complianceRisk: 5, stakeholderConfidence: -2}
      }
    ],
    bestOptionId: "B",
    bestAnswerExplanation: "Material fairness findings require pause, measurement, mitigation, and approval—not a sales override.",
    interviewInsight: "Tests courage under commercial pressure.",
    learningPoint: "Governance is a launch gate, not a postscript."
  },
  {
    id: 40,
    title: "Human Oversight Design",
    type: "scenario",
    difficulty: "medium",
    primaryCompetency: "Human-in-the-Loop Design",
    secondaryCompetencies: ["Responsible AI and Governance", "Product Execution"],
    scenario: "You are launching an AI that drafts clinical prior-authorization letters. Clinicians say they will only adopt it if they can stay accountable without redoing all the work.",
    question: "Which oversight design is strongest?",
    options: [
      {
        id: "A",
        text: "Fully autonomous send with weekly audit samples",
        score: 0,
        feedback: "Too risky for clinical documentation.",
        tradeoffs: ["Patient harm", "Liability"],
        consequenceMetrics: {complianceRisk: 9, customerTrust: -8}
      },
      {
        id: "B",
        text: "Require clinicians to rewrite every draft from scratch",
        score: 1,
        feedback: "Safe but destroys value; adoption will fail.",
        tradeoffs: ["No time savings"],
        consequenceMetrics: {adoption: -9, businessValue: -6}
      },
      {
        id: "C",
        text: "Require explicit clinician attestation, highlight uncertain spans, block send below confidence, and log edits for audit",
        score: 3,
        feedback: "Preserves accountability while focusing human effort on risk.",
        tradeoffs: ["Some friction"],
        consequenceMetrics: {customerTrust: 8, complianceRisk: -7, adoption: 6, reliability: 7}
      },
      {
        id: "D",
        text: "Auto-send high-confidence letters and only review low-confidence ones asynchronously after send",
        score: 1,
        feedback: "Post-send review is too late for clinical risk.",
        tradeoffs: ["Irreversible errors"],
        consequenceMetrics: {complianceRisk: 6, reliability: -4}
      }
    ],
    bestOptionId: "C",
    bestAnswerExplanation: "Effective HITL designs concentrate human attention on uncertainty and keep a clear accountability trail.",
    interviewInsight: "Looks for practical human oversight, not slogans.",
    learningPoint: "Oversight must be designed into the workflow, not bolted on as a checkbox."
  },
  {
    id: 41,
    title: "Confidence Threshold Tuning",
    type: "scenario",
    difficulty: "medium",
    primaryCompetency: "Human-in-the-Loop Design",
    secondaryCompetencies: ["AI Evaluation", "Metrics and Experimentation"],
    scenario: "Your invoice-matching agent auto-approves matches above a confidence threshold. At 0.95, only 20% auto-approve. At 0.80, 70% auto-approve but finance found 3 incorrect approvals in a sample of 200.",
    question: "How do you set the threshold?",
    options: [
      {
        id: "A",
        text: "Use 0.80 to maximize automation",
        score: 0,
        feedback: "Known incorrect approvals on finance flows are unacceptable without stronger controls.",
        tradeoffs: ["Financial loss"],
        consequenceMetrics: {operatingCost: -6, complianceRisk: 7, customerTrust: -5}
      },
      {
        id: "B",
        text: "Use 0.95 forever",
        score: 1,
        feedback: "Safe but leaves most value on the table.",
        tradeoffs: ["Low ROI"],
        consequenceMetrics: {reliability: 7, businessValue: 2, adoption: 2}
      },
      {
        id: "C",
        text: "Segment by invoice amount/vendor risk: high-value requires higher threshold or dual control; low-value can automate more aggressively with monitoring",
        score: 3,
        feedback: "Risk-based thresholds beat one global number.",
        tradeoffs: ["Config complexity"],
        consequenceMetrics: {businessValue: 8, reliability: 7, complianceRisk: -5, operatingCost: -3}
      },
      {
        id: "D",
        text: "Remove confidence scores and always require humans",
        score: 1,
        feedback: "Abandons the product thesis.",
        tradeoffs: ["No automation"],
        consequenceMetrics: {businessValue: -5, adoption: 1}
      }
    ],
    bestOptionId: "C",
    bestAnswerExplanation: "Thresholds should vary with residual risk and business impact.",
    interviewInsight: "Tests nuanced HITL product design.",
    learningPoint: "One threshold for all risk classes is usually wrong."
  },
  {
    id: 42,
    title: "Agent Tool Permissions",
    type: "scenario",
    difficulty: "hard",
    primaryCompetency: "Agentic AI Systems",
    secondaryCompetencies: ["Privacy and Security", "Responsible AI and Governance"],
    scenario: "You are designing an agent that can read email, create calendar events, and send messages. Engineering proposes full mailbox + send permissions for reliability.",
    question: "What permission model do you choose for v1?",
    options: [
      {
        id: "A",
        text: "Full read/write/send across the mailbox",
        score: 0,
        feedback: "Excessive blast radius for an early agent.",
        tradeoffs: ["Data exfiltration", "Irreversible sends"],
        consequenceMetrics: {securityRisk: 10, customerTrust: -8}
      },
      {
        id: "B",
        text: "Read-only forever",
        score: 1,
        feedback: "Too limited to deliver the core job.",
        tradeoffs: ["Low value"],
        consequenceMetrics: {businessValue: 1, adoption: 2}
      },
      {
        id: "C",
        text: "Least privilege by action: scoped read, draft-only sends requiring confirm, allowlist of tools, and audit logs",
        score: 3,
        feedback: "Enables value while constraining irreversible actions.",
        tradeoffs: ["Extra UX steps"],
        consequenceMetrics: {securityRisk: -7, customerTrust: 8, adoption: 6, reliability: 6}
      },
      {
        id: "D",
        text: "Full permissions for power users only",
        score: 2,
        feedback: "Better than everyone, but power users still need guardrails and audits.",
        tradeoffs: ["Insider/mistake risk"],
        consequenceMetrics: {securityRisk: 2, businessValue: 5}
      }
    ],
    bestOptionId: "C",
    bestAnswerExplanation: "Agentic products need least-privilege tools and confirmation for irreversible side effects.",
    interviewInsight: "Core agent governance question.",
    learningPoint: "Autonomy without permissions design is a vulnerability."
  },
  {
    id: 43,
    title: "Approval Workflow for Agent Actions",
    type: "scenario",
    difficulty: "medium",
    primaryCompetency: "Agentic AI Systems",
    secondaryCompetencies: ["Enterprise AI Products", "Human-in-the-Loop Design"],
    scenario: "An IT ops agent can restart services and open firewall rules. Security wants human approval for every action. SRE wants full autonomy for known playbooks during incidents.",
    question: "How do you resolve this?",
    options: [
      {
        id: "A",
        text: "Require approval for every action always",
        score: 1,
        feedback: "Safe but will fail during incidents when seconds matter.",
        tradeoffs: ["Slow MTTR"],
        consequenceMetrics: {securityRisk: -6, reliability: -4, teamMorale: -3}
      },
      {
        id: "B",
        text: "Full autonomy during incidents",
        score: 0,
        feedback: "Too broad; incident stress increases mistake risk.",
        tradeoffs: ["Outage amplification"],
        consequenceMetrics: {securityRisk: 8, reliability: -6}
      },
      {
        id: "C",
        text: "Pre-approve versioned playbooks with constraints; require human approval for novel actions or high-impact changes; record every execution",
        score: 3,
        feedback: "Balances speed and control using policy, not vibes.",
        tradeoffs: ["Playbook maintenance"],
        consequenceMetrics: {securityRisk: -5, reliability: 7, stakeholderConfidence: 7}
      },
      {
        id: "D",
        text: "Let each team configure approvals independently with no platform standards",
        score: 1,
        feedback: "Creates inconsistent risk across the company.",
        tradeoffs: ["Audit gaps"],
        consequenceMetrics: {complianceRisk: 6, securityRisk: 4}
      }
    ],
    bestOptionId: "C",
    bestAnswerExplanation: "Pre-approved playbooks plus exception approvals are the enterprise pattern for agents.",
    interviewInsight: "Tests policy design for autonomous systems.",
    learningPoint: "Speed and safety can coexist when trusted actions are predefined."
  },
  {
    id: 44,
    title: "Auditability for Enterprise AI",
    type: "scenario",
    difficulty: "medium",
    primaryCompetency: "Enterprise AI Products",
    secondaryCompetencies: ["Responsible AI and Governance", "Privacy and Security"],
    scenario: "A bank prospect will not buy your LLM assistant unless they can reconstruct why a recommendation was made, who approved overrides, and which documents were retrieved.",
    question: "What do you prioritize for the POC?",
    options: [
      {
        id: "A",
        text: "Better answer quality demos only",
        score: 0,
        feedback: "Misses the buying criterion: auditability.",
        tradeoffs: ["Lost deal"],
        consequenceMetrics: {revenue: -7, stakeholderConfidence: -5}
      },
      {
        id: "B",
        text: "Ship a PDF export of chat transcripts",
        score: 1,
        feedback: "Helpful but insufficient for retrieval provenance and approvals.",
        tradeoffs: ["Incomplete audit"],
        consequenceMetrics: {businessValue: 2, complianceRisk: 3}
      },
      {
        id: "C",
        text: "Build an audit trail: prompt/version, retrieved chunk IDs, model/router decisions, user overrides, and immutable timestamps",
        score: 3,
        feedback: "Matches enterprise procurement and risk needs.",
        tradeoffs: ["Engineering effort"],
        consequenceMetrics: {revenue: 8, complianceRisk: -7, customerTrust: 7, stakeholderConfidence: 8}
      },
      {
        id: "D",
        text: "Promise audit features on the roadmap after contract signature",
        score: 1,
        feedback: "May win short-term but fails POC diligence.",
        tradeoffs: ["Deal risk", "Trust debt"],
        consequenceMetrics: {revenue: 3, customerTrust: -4}
      }
    ],
    bestOptionId: "C",
    bestAnswerExplanation: "For regulated buyers, provenance and override logs are product requirements.",
    interviewInsight: "Enterprise AI PM must speak procurement and risk language.",
    learningPoint: "If you cannot explain a decision later, enterprises will not buy."
  },
  {
    id: 45,
    title: "Vendor and Foundation Model Selection",
    type: "scenario",
    difficulty: "hard",
    primaryCompetency: "Technical Trade-offs",
    secondaryCompetencies: ["Enterprise AI Products", "Business and Monetization"],
    scenario: "You must choose between Vendor A (best quality, weak DPA, data used for training by default) and Vendor B (slightly worse quality, strong enterprise DPA, no training on customer data, higher price).",
    question: "For a healthcare documentation product, what do you recommend?",
    options: [
      {
        id: "A",
        text: "Vendor A for quality; legal can add a footnote",
        score: 0,
        feedback: "Unacceptable data-use posture for healthcare.",
        tradeoffs: ["Regulatory risk"],
        consequenceMetrics: {complianceRisk: 10, customerTrust: -9}
      },
      {
        id: "B",
        text: "Vendor B despite higher cost and slightly lower quality",
        score: 3,
        feedback: "In healthcare, contractual data controls dominate marginal quality gains.",
        tradeoffs: ["Higher COGS", "Slightly lower quality"],
        consequenceMetrics: {complianceRisk: -8, customerTrust: 8, operatingCost: 4, businessValue: 6}
      },
      {
        id: "C",
        text: "Build your own foundation model immediately",
        score: 1,
        feedback: "Unrealistic timeline/cost for most teams.",
        tradeoffs: ["Huge delay"],
        consequenceMetrics: {deliverySpeed: -10, operatingCost: 10}
      },
      {
        id: "D",
        text: "Use Vendor A in a private VPC so training defaults do not matter",
        score: 1,
        feedback: "Infrastructure isolation does not rewrite contractual training rights by itself.",
        tradeoffs: ["False comfort"],
        consequenceMetrics: {complianceRisk: 6, securityRisk: 2}
      }
    ],
    bestOptionId: "B",
    bestAnswerExplanation: "Vendor risk and data rights can outweigh raw model quality in regulated domains.",
    interviewInsight: "Tests build/buy and procurement judgment.",
    learningPoint: "Model quality is useless if you cannot pass security and legal review."
  },
  {
    id: 46,
    title: "Build vs Buy Vector Database",
    type: "scenario",
    difficulty: "medium",
    primaryCompetency: "Technical Trade-offs",
    secondaryCompetencies: ["Product Execution", "Prioritization and MVP Scoping"],
    scenario: "Your team can adopt a managed vector DB in 3 weeks or build on Postgres+pgvector in 10 weeks with more control. You have not validated retrieval quality with customers yet.",
    question: "What should you do?",
    options: [
      {
        id: "A",
        text: "Build custom now to avoid lock-in",
        score: 1,
        feedback: "Premature optimization before product validation.",
        tradeoffs: ["Slow learning"],
        consequenceMetrics: {deliverySpeed: -7, technicalDebt: 3}
      },
      {
        id: "B",
        text: "Buy managed now, measure retrieval quality and cost, revisit architecture after product-market signal",
        score: 3,
        feedback: "Buys learning speed; defers irreversible infra bets.",
        tradeoffs: ["Some switching cost later"],
        consequenceMetrics: {deliverySpeed: 8, businessValue: 7, operatingCost: 2}
      },
      {
        id: "C",
        text: "Freeze the AI feature until infra is perfect",
        score: 0,
        feedback: "No learning, no value.",
        tradeoffs: ["Opportunity cost"],
        consequenceMetrics: {deliverySpeed: -10, businessValue: -8}
      },
      {
        id: "D",
        text: "Use keyword search only to avoid vectors",
        score: 1,
        feedback: "May underperform semantic use cases you are selling.",
        tradeoffs: ["Weak differentiation"],
        consequenceMetrics: {businessValue: -3, deliverySpeed: 5}
      }
    ],
    bestOptionId: "B",
    bestAnswerExplanation: "Buy to learn; rebuild when constraints are proven.",
    interviewInsight: "Classic sequencing under uncertainty.",
    learningPoint: "Architecture purity is not a substitute for customer evidence."
  },
  {
    id: 47,
    title: "MVP for Copilot Feature",
    type: "scenario",
    difficulty: "medium",
    primaryCompetency: "Prioritization and MVP Scoping",
    secondaryCompetencies: ["Product Strategy", "Product Execution"],
    scenario: "Stakeholders want an 'AI copilot for everything' in the IDE. Research shows the top pain is explaining unfamiliar code during onboarding. You have 6 weeks.",
    question: "What MVP do you ship?",
    options: [
      {
        id: "A",
        text: "Full multi-file refactoring agent",
        score: 0,
        feedback: "Too broad for 6 weeks; high failure risk.",
        tradeoffs: ["Missed date", "Quality issues"],
        consequenceMetrics: {deliverySpeed: -8, reliability: -6}
      },
      {
        id: "B",
        text: "Chat that answers any engineering question with web browse",
        score: 1,
        feedback: "Unfocused and hard to evaluate; weak product boundary.",
        tradeoffs: ["Hallucination risk"],
        consequenceMetrics: {businessValue: 2, reliability: -3}
      },
      {
        id: "C",
        text: "Inline 'explain this code' with repo-grounded RAG, citation links, and thumbs feedback—limited to one language first",
        score: 3,
        feedback: "Narrow, valuable, measurable, and shippable.",
        tradeoffs: ["Limited scope"],
        consequenceMetrics: {businessValue: 8, adoption: 7, reliability: 6, deliverySpeed: 6}
      },
      {
        id: "D",
        text: "Only ship an onboarding checklist with no AI",
        score: 1,
        feedback: "Avoids risk but abandons the strategic bet without learning.",
        tradeoffs: ["No AI learning"],
        consequenceMetrics: {businessValue: -2, deliverySpeed: 8}
      }
    ],
    bestOptionId: "C",
    bestAnswerExplanation: "A good AI MVP is narrow, grounded, and instrumented.",
    interviewInsight: "Tests MVP discipline under hype.",
    learningPoint: "Copilot for everything is a vision, not an MVP."
  },
  {
    id: 48,
    title: "Roadmap Conflict: Accuracy vs Integrations",
    type: "scenario",
    difficulty: "hard",
    primaryCompetency: "Prioritization and MVP Scoping",
    secondaryCompetencies: ["Stakeholder Management", "Enterprise AI Products"],
    scenario: "Q3 capacity fits one bet: raise answer faithfulness from 82% to 90%, or ship Salesforce + ServiceNow connectors demanded by three late-stage deals.",
    question: "How do you decide?",
    options: [
      {
        id: "A",
        text: "Always prioritize quality first",
        score: 1,
        feedback: "Quality matters, but ignoring near-term revenue without analysis is incomplete.",
        tradeoffs: ["Lost deals"],
        consequenceMetrics: {reliability: 6, revenue: -7}
      },
      {
        id: "B",
        text: "Always prioritize the integrations because sales asked",
        score: 1,
        feedback: "May win deals then churn if quality fails in production.",
        tradeoffs: ["Support burden", "Churn"],
        consequenceMetrics: {revenue: 5, customerTrust: -4, reliability: -3}
      },
      {
        id: "C",
        text: "Estimate deal revenue and churn risk from current faithfulness, check whether connectors unblock expansion for existing customers, and sequence a thin connector MVP if quality is above a safety floor",
        score: 3,
        feedback: "Uses evidence and risk floors instead of slogan prioritization.",
        tradeoffs: ["Needs analysis time"],
        consequenceMetrics: {businessValue: 8, revenue: 7, stakeholderConfidence: 7, reliability: 4}
      },
      {
        id: "D",
        text: "Split the team in half and do both poorly",
        score: 0,
        feedback: "Creates two weak outcomes.",
        tradeoffs: ["Thrash"],
        consequenceMetrics: {deliverySpeed: -5, teamMorale: -6}
      }
    ],
    bestOptionId: "C",
    bestAnswerExplanation: "Priority is a function of risk floors and expected value, not department volume.",
    interviewInsight: "Executive conflict navigation.",
    learningPoint: "Define the quality floor before trading it for distribution."
  },
  {
    id: 49,
    title: "Sales Commitment Overreach",
    type: "scenario",
    difficulty: "hard",
    primaryCompetency: "Stakeholder Management",
    secondaryCompetencies: ["Communication and Leadership", "Enterprise AI Products"],
    scenario: "Sales promised a prospect 'fully autonomous invoice approval with no human review' by month-end. Your current product still requires human confirmation above $5k. The contract is unsigned.",
    question: "What do you do?",
    options: [
      {
        id: "A",
        text: "Tell engineering to remove all human checks to match the promise",
        score: 0,
        feedback: "Creates financial control risk to close a deal.",
        tradeoffs: ["Fraud/error risk"],
        consequenceMetrics: {complianceRisk: 9, customerTrust: -6, reliability: -7}
      },
      {
        id: "B",
        text: "Quietly hope the customer never notices",
        score: 0,
        feedback: "Unethical and unsustainable.",
        tradeoffs: ["Churn", "Legal risk"],
        consequenceMetrics: {customerTrust: -10, complianceRisk: 8}
      },
      {
        id: "C",
        text: "Reset expectations with sales and the prospect: offer a phased autonomy plan with measurable controls, and refuse unsafe commitments",
        score: 3,
        feedback: "Protects customers and company while preserving a credible path to value.",
        tradeoffs: ["Deal may slip"],
        consequenceMetrics: {customerTrust: 7, stakeholderConfidence: 5, complianceRisk: -7, revenue: -2}
      },
      {
        id: "D",
        text: "Discount heavily if they accept human review forever",
        score: 1,
        feedback: "May close, but ignores the autonomy roadmap conversation.",
        tradeoffs: ["Margin hit"],
        consequenceMetrics: {revenue: 2, businessValue: 1}
      }
    ],
    bestOptionId: "C",
    bestAnswerExplanation: "PMs must unwind unsafe sales promises with a truthful phased plan.",
    interviewInsight: "Integrity under revenue pressure.",
    learningPoint: "Never remove controls to match a pitch."
  },
  {
    id: 50,
    title: "Executive Pressure to Launch",
    type: "scenario",
    difficulty: "hard",
    primaryCompetency: "Communication and Leadership",
    secondaryCompetencies: ["Product Execution", "Responsible AI and Governance"],
    scenario: "Your CEO wants to announce the AI feature at a conference in 10 days. Red-team testing still finds high-severity jailbreaks. Comms already drafted the announcement.",
    question: "How do you respond?",
    options: [
      {
        id: "A",
        text: "Agree to launch and fix security after the keynote",
        score: 0,
        feedback: "Prioritizes optics over safety.",
        tradeoffs: ["Incident risk"],
        consequenceMetrics: {securityRisk: 9, customerTrust: -8, stakeholderConfidence: -4}
      },
      {
        id: "B",
        text: "Cancel the entire AI program",
        score: 1,
        feedback: "Overreaction; the issue is launch readiness, not strategy.",
        tradeoffs: ["Morale hit"],
        consequenceMetrics: {teamMorale: -6, businessValue: -5}
      },
      {
        id: "C",
        text: "Propose a limited private beta announcement with clear limitations, harden critical jailbreaks, and defer GA until exit criteria are met",
        score: 3,
        feedback: "Protects brand while enabling honest momentum.",
        tradeoffs: ["Narrower story"],
        consequenceMetrics: {securityRisk: -6, stakeholderConfidence: 6, customerTrust: 5, businessValue: 4}
      },
      {
        id: "D",
        text: "Let Comms announce GA capabilities while product stays in beta quietly",
        score: 0,
        feedback: "Creates a trust gap between marketing and product.",
        tradeoffs: ["Expectation debt"],
        consequenceMetrics: {customerTrust: -9, stakeholderConfidence: -5}
      }
    ],
    bestOptionId: "C",
    bestAnswerExplanation: "Under launch pressure, narrow scope and tell the truth rather than ship unsafe GA.",
    interviewInsight: "Leadership communication under time pressure.",
    learningPoint: "Announcements should match the real trust boundary of the system."
  },
  {
    id: 51,
    title: "Post-Launch Model Drift Alert",
    type: "scenario",
    difficulty: "hard",
    primaryCompetency: "Post-Launch Monitoring",
    secondaryCompetencies: ["Data Strategy", "Metrics and Experimentation"],
    scenario: "Four weeks after launch, prediction calibration worsens: the model says 90% confidence but is correct 72% of the time. Input feature distributions have shifted after a pricing change.",
    question: "What is your first move?",
    options: [
      {
        id: "A",
        text: "Ignore it until accuracy falls below 60%",
        score: 0,
        feedback: "Calibration failure already harms decision quality.",
        tradeoffs: ["Bad decisions"],
        consequenceMetrics: {reliability: -8, customerTrust: -5}
      },
      {
        id: "B",
        text: "Immediately retrain on all historical data without diagnosis",
        score: 1,
        feedback: "May not address the new regime and can reintroduce old patterns.",
        tradeoffs: ["Wasted cycle"],
        consequenceMetrics: {deliverySpeed: 3, reliability: 1}
      },
      {
        id: "C",
        text: "Declare an incident: quantify business impact, freeze risky automations, analyze data drift drivers, then retrain/recalibrate with monitoring gates",
        score: 3,
        feedback: "Treats drift as an operational incident with containment and root cause.",
        tradeoffs: ["Temporary automation loss"],
        consequenceMetrics: {reliability: 8, customerTrust: 6, businessValue: 5, complianceRisk: -3}
      },
      {
        id: "D",
        text: "Ask users to manually adjust confidence themselves",
        score: 1,
        feedback: "Shifts burden without fixing the system.",
        tradeoffs: ["Poor UX"],
        consequenceMetrics: {adoption: -4, customerTrust: -2}
      }
    ],
    bestOptionId: "C",
    bestAnswerExplanation: "Drift with miscalibration needs containment, diagnosis, then model updates with gates.",
    interviewInsight: "Post-launch ownership of ML health.",
    learningPoint: "Monitoring without response playbooks is theater."
  },
  {
    id: 52,
    title: "Incident Response for Bad AI Output",
    type: "scenario",
    difficulty: "hard",
    primaryCompetency: "Post-Launch Monitoring",
    secondaryCompetencies: ["Communication and Leadership", "Responsible AI and Governance"],
    scenario: "Your public AI writing tool generated a defamatory paragraph about a real person that went viral. Legal is involved. The model is still serving traffic.",
    question: "What do you do in the first hour?",
    options: [
      {
        id: "A",
        text: "Wait for a full root-cause report before acting",
        score: 0,
        feedback: "Ongoing harm while you analyze.",
        tradeoffs: ["Reputation damage"],
        consequenceMetrics: {customerTrust: -9, complianceRisk: 8}
      },
      {
        id: "B",
        text: "Disable generation for entity-related prompts, remove cached outputs where possible, prepare customer/public statement with Legal, and start forensic review",
        score: 3,
        feedback: "Contain, communicate, investigate—standard incident order.",
        tradeoffs: ["Feature degradation"],
        consequenceMetrics: {customerTrust: 4, complianceRisk: -6, securityRisk: -2, businessValue: -3}
      },
      {
        id: "C",
        text: "Apologize on social media personally as PM without Legal",
        score: 1,
        feedback: "Speed without counsel can worsen liability.",
        tradeoffs: ["Legal missteps"],
        consequenceMetrics: {complianceRisk: 5, stakeholderConfidence: -4}
      },
      {
        id: "D",
        text: "Blame the foundation model vendor publicly",
        score: 0,
        feedback: "Premature and damages partnerships; you still own the product.",
        tradeoffs: ["Partner fallout"],
        consequenceMetrics: {stakeholderConfidence: -7, customerTrust: -3}
      }
    ],
    bestOptionId: "B",
    bestAnswerExplanation: "Contain harmful generation paths before narrative battles.",
    interviewInsight: "Crisis judgment for AI products.",
    learningPoint: "You own outputs your product serves—even if a vendor model generated them."
  },
  {
    id: 53,
    title: "A/B Test Design for Copilot",
    type: "scenario",
    difficulty: "medium",
    primaryCompetency: "Metrics and Experimentation",
    secondaryCompetencies: ["Product Strategy", "AI Evaluation"],
    scenario: "You want to test whether an AI email reply suggestion increases send volume. Design proposes a 50/50 user A/B for 2 days on 500 users.",
    question: "What is wrong and how do you fix it?",
    options: [
      {
        id: "A",
        text: "Nothing; ship the test as designed",
        score: 0,
        feedback: "Underpowered and too short for email behavior.",
        tradeoffs: ["Invalid conclusions"],
        consequenceMetrics: {businessValue: -5, reliability: -4}
      },
      {
        id: "B",
        text: "Extend to all users for one hour to get more data",
        score: 0,
        feedback: "Still noisy and risky blast radius.",
        tradeoffs: ["Support load"],
        consequenceMetrics: {customerTrust: -3, reliability: -2}
      },
      {
        id: "C",
        text: "Define primary metric (e.g., replies sent / active user) with guardrails (unsubscribe, edit rate, CSAT), size for statistical power, run long enough for weekly cycles, and exclude contaminated users",
        score: 3,
        feedback: "Proper experiment hygiene for product decisions.",
        tradeoffs: ["Slower answer"],
        consequenceMetrics: {businessValue: 8, reliability: 6, stakeholderConfidence: 6}
      },
      {
        id: "D",
        text: "Skip A/B and use launch qualitative interviews only",
        score: 1,
        feedback: "Useful input but weak for causal claims on send volume.",
        tradeoffs: ["Weak causal evidence"],
        consequenceMetrics: {deliverySpeed: 4, businessValue: 2}
      }
    ],
    bestOptionId: "C",
    bestAnswerExplanation: "Good AI experiments need power, duration, and guardrail metrics—not just a novelty lift.",
    interviewInsight: "Experimentation maturity.",
    learningPoint: "If the test cannot detect a meaningful effect, it cannot guide the roadmap."
  },
  {
    id: 54,
    title: "Task Completion Rate as North Star",
    type: "scenario",
    difficulty: "medium",
    primaryCompetency: "Metrics and Experimentation",
    secondaryCompetencies: ["AI Evaluation", "Product Strategy"],
    scenario: "For a research assistant, stakeholders argue between thumbs-up rate, tokens generated, and task completion rate as the north-star metric.",
    question: "Which do you choose and why?",
    options: [
      {
        id: "A",
        text: "Tokens generated—more usage means more value",
        score: 0,
        feedback: "Optimizes verbosity and cost, not outcomes.",
        tradeoffs: ["Cost explosion"],
        consequenceMetrics: {operatingCost: 8, businessValue: -4}
      },
      {
        id: "B",
        text: "Thumbs-up rate alone",
        score: 1,
        feedback: "Biased and sparse; misses silent failures.",
        tradeoffs: ["Skewed signal"],
        consequenceMetrics: {reliability: 1, businessValue: 2}
      },
      {
        id: "C",
        text: "Task completion rate with quality checks (faithfulness sample + user effort), using thumbs as a secondary",
        score: 3,
        feedback: "Aligns to user jobs-to-be-done while monitoring quality.",
        tradeoffs: ["Harder instrumentation"],
        consequenceMetrics: {businessValue: 8, customerTrust: 6, adoption: 6}
      },
      {
        id: "D",
        text: "No north star; track 25 metrics equally",
        score: 1,
        feedback: "Diffuses decisions.",
        tradeoffs: ["Analysis paralysis"],
        consequenceMetrics: {stakeholderConfidence: -3, deliverySpeed: -4}
      }
    ],
    bestOptionId: "C",
    bestAnswerExplanation: "Optimize for completed user tasks, then guard with quality metrics.",
    interviewInsight: "Metric strategy for generative products.",
    learningPoint: "Activity is not value; completion with quality is."
  },
  {
    id: 55,
    title: "Customer Discovery for AI Feature",
    type: "scenario",
    difficulty: "medium",
    primaryCompetency: "Customer Discovery",
    secondaryCompetencies: ["Product Strategy", "Communication and Leadership"],
    scenario: "Engineers are excited to add an autonomous meeting agent. Five customer calls produced polite interest but no clear workflow ownership or willingness to pay.",
    question: "What next?",
    options: [
      {
        id: "A",
        text: "Build the agent anyway because AI is strategic",
        score: 0,
        feedback: "Strategy without problem evidence wastes runway.",
        tradeoffs: ["Build wrong thing"],
        consequenceMetrics: {businessValue: -7, deliverySpeed: 5}
      },
      {
        id: "B",
        text: "Send a large survey asking if they want AI meetings",
        score: 1,
        feedback: "Stated preference without context is weak.",
        tradeoffs: ["False positives"],
        consequenceMetrics: {businessValue: 1}
      },
      {
        id: "C",
        text: "Run problem interviews focused on meeting prep/follow-up pain, observe current tools, and test a concierge MVP before heavy autonomy",
        score: 3,
        feedback: "Discovers urgency and validates willingness with a thin experience.",
        tradeoffs: ["Slower than coding"],
        consequenceMetrics: {businessValue: 8, customerTrust: 6, adoption: 5}
      },
      {
        id: "D",
        text: "Ask sales which logo wants it most and build for them",
        score: 1,
        feedback: "One logo can distort the roadmap.",
        tradeoffs: ["Narrow fit"],
        consequenceMetrics: {revenue: 3, businessValue: -2}
      }
    ],
    bestOptionId: "C",
    bestAnswerExplanation: "Interest ≠ demand. Validate pain and a thin solution before autonomy.",
    interviewInsight: "Discovery discipline under AI hype.",
    learningPoint: "Build the smallest experience that proves the job is real."
  },
  {
    id: 56,
    title: "Is AI Appropriate?",
    type: "scenario",
    difficulty: "medium",
    primaryCompetency: "Product Strategy",
    secondaryCompetencies: ["AI and ML Fundamentals", "Customer Discovery"],
    scenario: "Ops asks for an LLM to decide warehouse bin locations. Historical rules already achieve 99.2% acceptable placements. Errors are costly and rare. Data is tabular and stable.",
    question: "What do you recommend?",
    options: [
      {
        id: "A",
        text: "Replace rules with an LLM for modernity",
        score: 0,
        feedback: "Wrong tool; adds latency, cost, and unpredictability.",
        tradeoffs: ["Regressions"],
        consequenceMetrics: {reliability: -8, operatingCost: 6, businessValue: -5}
      },
      {
        id: "B",
        text: "Use an LLM to generate bin poetry for workers",
        score: 0,
        feedback: "Irrelevant to the problem.",
        tradeoffs: ["Distraction"],
        consequenceMetrics: {businessValue: -6}
      },
      {
        id: "C",
        text: "Keep deterministic optimization/rules for placement; consider ML only if a measured residual problem exists that rules cannot handle",
        score: 3,
        feedback: "Chooses fitness-to-purpose over AI theater.",
        tradeoffs: ["Less flashy"],
        consequenceMetrics: {reliability: 8, operatingCost: -4, businessValue: 7}
      },
      {
        id: "D",
        text: "Ensemble LLM + rules for every placement",
        score: 1,
        feedback: "Complexity without clear gain on a solved problem.",
        tradeoffs: ["Ops burden"],
        consequenceMetrics: {technicalDebt: 5, operatingCost: 4}
      }
    ],
    bestOptionId: "C",
    bestAnswerExplanation: "AI is a means. If deterministic systems already win, do not force generative AI.",
    interviewInsight: "Judgment on AI suitability.",
    learningPoint: "The best AI decision is sometimes not using AI."
  },
  {
    id: 57,
    title: "Fine-Tune vs RAG Decision",
    type: "scenario",
    difficulty: "hard",
    primaryCompetency: "AI and ML Fundamentals",
    secondaryCompetencies: ["Technical Trade-offs", "Data Strategy"],
    scenario: "You need an assistant over a frequently updated 20,000-page policy corpus. Legal changes weekly. Team proposes fine-tuning a model on all policies.",
    question: "What approach do you choose?",
    options: [
      {
        id: "A",
        text: "Fine-tune weekly on full corpus",
        score: 1,
        feedback: "Expensive and still risks stale/memorized answers without citations.",
        tradeoffs: ["Cost", "Stale knowledge"],
        consequenceMetrics: {operatingCost: 8, reliability: -3}
      },
      {
        id: "B",
        text: "Pure prompting without retrieval",
        score: 0,
        feedback: "Will hallucinate policy details.",
        tradeoffs: ["Compliance risk"],
        consequenceMetrics: {complianceRisk: 9, customerTrust: -8}
      },
      {
        id: "C",
        text: "RAG with document versioning, citations, and evals for faithfulness; consider light fine-tuning only for style/format",
        score: 3,
        feedback: "Fits changing knowledge with provenance.",
        tradeoffs: ["Retrieval engineering"],
        consequenceMetrics: {reliability: 8, complianceRisk: -6, operatingCost: 2, businessValue: 7}
      },
      {
        id: "D",
        text: "Ask users to upload the right PDF each time",
        score: 1,
        feedback: "Poor UX and inconsistent answers.",
        tradeoffs: ["Friction"],
        consequenceMetrics: {adoption: -5, customerTrust: -2}
      }
    ],
    bestOptionId: "C",
    bestAnswerExplanation: "Volatile enterprise knowledge usually wants RAG + citations, not repeated fine-tunes.",
    interviewInsight: "Technical product judgment.",
    learningPoint: "Prefer retrieval for facts that change; fine-tune for behavior."
  },
  {
    id: 58,
    title: "Data Quality Worse Than Expected",
    type: "scenario",
    difficulty: "hard",
    primaryCompetency: "Data Strategy",
    secondaryCompetencies: ["AI Evaluation", "Product Execution"],
    scenario: "Mid-sprint you discover 22% of training events have corrupted timestamps and 9% are duplicate conversions. The model launch is on the executive calendar in three weeks.",
    question: "What should you do?",
    options: [
      {
        id: "A",
        text: "Ignore data issues and tune hyperparameters harder",
        score: 0,
        feedback: "Cannot tune away systematic label/feature corruption.",
        tradeoffs: ["Silent failure"],
        consequenceMetrics: {reliability: -8, businessValue: -5}
      },
      {
        id: "B",
        text: "Cancel the initiative permanently",
        score: 1,
        feedback: "Overreaction without quantifying impact.",
        tradeoffs: ["Lost opportunity"],
        consequenceMetrics: {businessValue: -6, teamMorale: -4}
      },
      {
        id: "C",
        text: "Quantify how corruption affects target segments, fix pipelines for critical fields, retrain on cleaned data, and reforecast launch based on remaining risk",
        score: 3,
        feedback: "Evidence-based remediation with honest timeline reset.",
        tradeoffs: ["Possible delay"],
        consequenceMetrics: {reliability: 7, stakeholderConfidence: 6, deliverySpeed: -2, businessValue: 5}
      },
      {
        id: "D",
        text: "Ship on dirty data but add a UI disclaimer",
        score: 0,
        feedback: "Disclaimer does not make forecasts trustworthy.",
        tradeoffs: ["Trust damage"],
        consequenceMetrics: {customerTrust: -7, reliability: -6}
      }
    ],
    bestOptionId: "C",
    bestAnswerExplanation: "Diagnose impact, fix the data foundation, then reset commitments.",
    interviewInsight: "Pragmatic data ownership.",
    learningPoint: "Bad data is a launch risk, not a footnote."
  },
  {
    id: 59,
    title: "Competitor Ships Similar AI Feature",
    type: "scenario",
    difficulty: "medium",
    primaryCompetency: "Product Strategy",
    secondaryCompetencies: ["Business and Monetization", "Stakeholder Management"],
    scenario: "A competitor launches a flashy demo of an AI feature overlapping your roadmap. Board members ask why you are not shipping this week.",
    question: "How do you respond?",
    options: [
      {
        id: "A",
        text: "Drop current work and clone their demo immediately",
        score: 0,
        feedback: "Reactive strategy; demos are not products.",
        tradeoffs: ["Thrash", "Quality risk"],
        consequenceMetrics: {deliverySpeed: 4, reliability: -6, teamMorale: -5}
      },
      {
        id: "B",
        text: "Publicly claim you already have it even if incomplete",
        score: 0,
        feedback: "Trust debt.",
        tradeoffs: ["Credibility loss"],
        consequenceMetrics: {customerTrust: -9}
      },
      {
        id: "C",
        text: "Compare on differentiation, switching costs, and your customer evidence; accelerate only the slice that matches validated demand; communicate a clear counterpositioning story",
        score: 3,
        feedback: "Competitive response with strategy, not panic.",
        tradeoffs: ["Requires exec alignment"],
        consequenceMetrics: {businessValue: 7, stakeholderConfidence: 7, customerTrust: 5}
      },
      {
        id: "D",
        text: "Ignore competitors entirely forever",
        score: 1,
        feedback: "Complacent; you still need awareness.",
        tradeoffs: ["Blind spots"],
        consequenceMetrics: {businessValue: -2}
      }
    ],
    bestOptionId: "C",
    bestAnswerExplanation: "Compete on evidence-backed differentiation, not demo theater.",
    interviewInsight: "Strategy under board pressure.",
    learningPoint: "A competitor launch is information, not an automatic priority rewrite."
  },
  {
    id: 60,
    title: "Monetization of AI Add-On",
    type: "scenario",
    difficulty: "medium",
    primaryCompetency: "Business and Monetization",
    secondaryCompetencies: ["Product Strategy", "Enterprise AI Products"],
    scenario: "Customers love your AI add-on in beta (free). Finance wants it bundled into the base plan. Sales wants a high-priced SKU. Usage costs scale with seats and tokens.",
    question: "How do you package it?",
    options: [
      {
        id: "A",
        text: "Keep it free forever in base",
        score: 0,
        feedback: "Destroys margin as usage scales.",
        tradeoffs: ["Negative margins"],
        consequenceMetrics: {adoption: 8, revenue: -8, operatingCost: 9}
      },
      {
        id: "B",
        text: "Charge a flat enterprise SKU with generous included usage + overage, and keep a limited free trial teaser in base",
        score: 3,
        feedback: "Aligns willingness to pay with variable COGS.",
        tradeoffs: ["Some packaging complexity"],
        consequenceMetrics: {revenue: 8, operatingCost: -3, adoption: 5, businessValue: 7}
      },
      {
        id: "C",
        text: "Per-token pass-through pricing only",
        score: 1,
        feedback: "Transparent but often poorly received by buyers who want predictability.",
        tradeoffs: ["Procurement friction"],
        consequenceMetrics: {revenue: 4, adoption: -3}
      },
      {
        id: "D",
        text: "Hide AI costs inside services professional fees",
        score: 1,
        feedback: "Unscalable and opaque.",
        tradeoffs: ["Unscalable motion"],
        consequenceMetrics: {revenue: 2, businessValue: -2}
      }
    ],
    bestOptionId: "B",
    bestAnswerExplanation: "Package AI against COGS with included usage and clear overage.",
    interviewInsight: "AI monetization design.",
    learningPoint: "Free beta love does not equal free-forever unit economics."
  },
  {
    id: 61,
    title: "Security Review Before Enterprise GA",
    type: "scenario",
    difficulty: "medium",
    primaryCompetency: "Enterprise AI Products",
    secondaryCompetencies: ["Privacy and Security", "Stakeholder Management"],
    scenario: "Your AI feature passed internal QA. The enterprise security questionnaire asks about prompt injection defenses, data retention, subprocessors, and red-team results. You have partial answers.",
    question: "What do you do?",
    options: [
      {
        id: "A",
        text: "Answer optimistically to unblock procurement",
        score: 0,
        feedback: "Creates contractual and trust risk.",
        tradeoffs: ["Deal and legal risk"],
        consequenceMetrics: {complianceRisk: 8, customerTrust: -7}
      },
      {
        id: "B",
        text: "Delay all sales until every control is world-class",
        score: 1,
        feedback: "May be unnecessary if you can scope GA.",
        tradeoffs: ["Lost pipeline"],
        consequenceMetrics: {revenue: -6}
      },
      {
        id: "C",
        text: "Publish accurate current controls, mark gaps, offer GA with compensating controls / limited data modes, and commit dated remediation",
        score: 3,
        feedback: "Honest enterprise posture that can still progress deals.",
        tradeoffs: ["Some deal friction"],
        consequenceMetrics: {customerTrust: 8, complianceRisk: -5, revenue: 5, stakeholderConfidence: 6}
      },
      {
        id: "D",
        text: "Tell prospects security is the model vendor's problem",
        score: 0,
        feedback: "You own the product risk.",
        tradeoffs: ["Lost credibility"],
        consequenceMetrics: {stakeholderConfidence: -8}
      }
    ],
    bestOptionId: "C",
    bestAnswerExplanation: "Enterprise readiness is truthful scoping plus a remediation plan.",
    interviewInsight: "Procurement fluency.",
    learningPoint: "Accuracy in security reviews beats optimism."
  },
  {
    id: 62,
    title: "Behavioral: Ambiguous Mandate",
    type: "scenario",
    difficulty: "medium",
    primaryCompetency: "Communication and Leadership",
    secondaryCompetencies: ["Product Strategy", "Stakeholder Management"],
    scenario: "Your VP says 'make our product AI-first' without defining success. Teams are proposing disconnected LLM features.",
    question: "How do you lead?",
    options: [
      {
        id: "A",
        text: "Approve every AI idea to show momentum",
        score: 0,
        feedback: "Creates a fragmented portfolio.",
        tradeoffs: ["Waste"],
        consequenceMetrics: {businessValue: -6, technicalDebt: 7}
      },
      {
        id: "B",
        text: "Block all AI work until a 50-page strategy is perfect",
        score: 1,
        feedback: "Too slow; loses learning.",
        tradeoffs: ["Paralysis"],
        consequenceMetrics: {deliverySpeed: -8}
      },
      {
        id: "C",
        text: "Facilitate a working definition: target user jobs, success metrics, risk boundaries, and a thin portfolio of bets with kill criteria",
        score: 3,
        feedback: "Creates clarity without killing pace.",
        tradeoffs: ["Facilitation time"],
        consequenceMetrics: {stakeholderConfidence: 8, businessValue: 7, teamMorale: 6}
      },
      {
        id: "D",
        text: "Ask each squad to invent its own AI-first meaning",
        score: 1,
        feedback: "Guarantees incoherence.",
        tradeoffs: ["Fragmentation"],
        consequenceMetrics: {businessValue: -4}
      }
    ],
    bestOptionId: "C",
    bestAnswerExplanation: "Translate vague executive intent into bounded bets and metrics.",
    interviewInsight: "Leadership under ambiguity.",
    learningPoint: "AI-first is meaningless until jobs, metrics, and risk boundaries exist."
  },
  {
    id: 63,
    title: "Behavioral: Learning from Failure",
    type: "scenario",
    difficulty: "medium",
    primaryCompetency: "Communication and Leadership",
    secondaryCompetencies: ["Product Execution", "Metrics and Experimentation"],
    scenario: "An AI ranking launch reduced conversion by 6%. You championed it. In the postmortem, engineering focus is on a logging bug; product discovery gaps also existed.",
    question: "How do you handle the postmortem?",
    options: [
      {
        id: "A",
        text: "Emphasize the logging bug to protect product reputation",
        score: 0,
        feedback: "Hides learning and erodes trust.",
        tradeoffs: ["Repeat failure"],
        consequenceMetrics: {teamMorale: -5, stakeholderConfidence: -6}
      },
      {
        id: "B",
        text: "Take sole personal blame and resign from leadership of AI",
        score: 1,
        feedback: "Dramatic; skips systemic learning.",
        tradeoffs: ["Instability"],
        consequenceMetrics: {teamMorale: -3}
      },
      {
        id: "C",
        text: "Own the product hypothesis failure, separate impact from blame, document discovery/eval gaps, and commit preventive checks",
        score: 3,
        feedback: "Models blameless + accountable leadership.",
        tradeoffs: ["Requires humility"],
        consequenceMetrics: {teamMorale: 6, stakeholderConfidence: 7, reliability: 5}
      },
      {
        id: "D",
        text: "Skip postmortem because the feature already rolled back",
        score: 0,
        feedback: "Wastes a costly lesson.",
        tradeoffs: ["Repeat risk"],
        consequenceMetrics: {reliability: -4}
      }
    ],
    bestOptionId: "C",
    bestAnswerExplanation: "Own outcomes, learn in public, install prevention.",
    interviewInsight: "Behavioral interview classic.",
    learningPoint: "Rollback without learning is just pause."
  },
  {
    id: 64,
    title: "Explainability for Loan Decisions",
    type: "scenario",
    difficulty: "hard",
    primaryCompetency: "Responsible AI and Governance",
    secondaryCompetencies: ["Enterprise AI Products", "Communication and Leadership"],
    scenario: "Regulators require adverse-action reasons for credit decisions. Your best model is a gradient-boosted ensemble with limited direct interpretability. A logistic model is clearer but weaker AUC.",
    question: "What do you ship?",
    options: [
      {
        id: "A",
        text: "Ship the black-box model without reasons",
        score: 0,
        feedback: "Regulatory non-compliance.",
        tradeoffs: ["Legal risk"],
        consequenceMetrics: {complianceRisk: 10, customerTrust: -8}
      },
      {
        id: "B",
        text: "Ship only the weaker interpretable model",
        score: 2,
        feedback: "May be acceptable if it meets risk policy; check performance floors.",
        tradeoffs: ["Possible revenue loss"],
        consequenceMetrics: {complianceRisk: -7, businessValue: 2}
      },
      {
        id: "C",
        text: "Use a compliant reason-code strategy validated with Legal/Risk (e.g., constrained model or approved explanation method), and only deploy if reason quality passes audit tests",
        score: 3,
        feedback: "Compliance is a hard constraint; choose techniques that satisfy it.",
        tradeoffs: ["Extra validation"],
        consequenceMetrics: {complianceRisk: -8, customerTrust: 7, businessValue: 5, reliability: 6}
      },
      {
        id: "D",
        text: "Provide generic reasons unrelated to the model",
        score: 0,
        feedback: "Misleading and non-compliant.",
        tradeoffs: ["Regulatory breach"],
        consequenceMetrics: {complianceRisk: 9, customerTrust: -9}
      }
    ],
    bestOptionId: "C",
    bestAnswerExplanation: "In credit, explainability/reason codes are launch gates.",
    interviewInsight: "Regulated AI product judgment.",
    learningPoint: "If you cannot explain adverse actions, you cannot ship."
  },
  {
    id: 65,
    title: "Online Evaluation of RAG Faithfulness",
    type: "scenario",
    difficulty: "hard",
    primaryCompetency: "AI Evaluation",
    secondaryCompetencies: ["Post-Launch Monitoring", "Metrics and Experimentation"],
    scenario: "Users love your RAG assistant's tone, but spot checks show 11% of answers include claims not supported by retrieved docs.",
    question: "What measurement system do you put in place?",
    options: [
      {
        id: "A",
        text: "Track CSAT only",
        score: 0,
        feedback: "CSAT can stay high while factual errors persist.",
        tradeoffs: ["Silent harm"],
        consequenceMetrics: {reliability: -6}
      },
      {
        id: "B",
        text: "Weekly manual review of 5 random answers",
        score: 1,
        feedback: "Too small and irregular for operational control.",
        tradeoffs: ["Weak coverage"],
        consequenceMetrics: {reliability: 1}
      },
      {
        id: "C",
        text: "Continuous sampled faithfulness scoring (model+human audit), dashboards by collection/intent, and alerts with rollback thresholds",
        score: 3,
        feedback: "Operationalizes groundedness as a product SLO.",
        tradeoffs: ["Eval cost"],
        consequenceMetrics: {reliability: 8, complianceRisk: -5, customerTrust: 7, operatingCost: 2}
      },
      {
        id: "D",
        text: "Remove retrieval and let the model answer from memory",
        score: 0,
        feedback: "Increases hallucination risk.",
        tradeoffs: ["Worse groundedness"],
        consequenceMetrics: {reliability: -9, complianceRisk: 7}
      }
    ],
    bestOptionId: "C",
    bestAnswerExplanation: "Faithfulness needs sampled measurement, segmentation, and alert thresholds.",
    interviewInsight: "LLM eval operations.",
    learningPoint: "Tone metrics can hide grounding failures."
  },
  {
    id: 66,
    title: "Human Annotation Quality Program",
    type: "scenario",
    difficulty: "medium",
    primaryCompetency: "Data Strategy",
    secondaryCompetencies: ["AI Evaluation", "Product Execution"],
    scenario: "Your annotation vendor delivers labels quickly, but gold-set accuracy is 81% and guidelines are outdated after a product taxonomy change.",
    question: "What do you do?",
    options: [
      {
        id: "A",
        text: "Accept 81% to keep velocity",
        score: 0,
        feedback: "Taxonomy drift plus weak agreement poisons training.",
        tradeoffs: ["Model decay"],
        consequenceMetrics: {reliability: -6, businessValue: -3}
      },
      {
        id: "B",
        text: "Fire the vendor immediately without a transition plan",
        score: 1,
        feedback: "Disruptive; may pause all labeling.",
        tradeoffs: ["Throughput shock"],
        consequenceMetrics: {deliverySpeed: -7}
      },
      {
        id: "C",
        text: "Update guidelines with examples, retrain annotators, raise gold thresholds, adjudicate failures, and only then resume volume",
        score: 3,
        feedback: "Quality system before scale.",
        tradeoffs: ["Short slowdown"],
        consequenceMetrics: {reliability: 8, deliverySpeed: -2, businessValue: 5}
      },
      {
        id: "D",
        text: "Replace humans with LLM auto-labeling entirely",
        score: 1,
        feedback: "Possible later, but risky without a quality frame on a changed taxonomy.",
        tradeoffs: ["New bias/errors"],
        consequenceMetrics: {deliverySpeed: 6, reliability: -3}
      }
    ],
    bestOptionId: "C",
    bestAnswerExplanation: "Annotation is a product process: guidelines, gold sets, thresholds.",
    interviewInsight: "Data ops maturity.",
    learningPoint: "Never scale labeling on stale definitions."
  },
  {
    id: 67,
    title: "Escalation Mechanism Design",
    type: "scenario",
    difficulty: "medium",
    primaryCompetency: "Human-in-the-Loop Design",
    secondaryCompetencies: ["Product Execution", "Customer Discovery"],
    scenario: "Customers complain that when the AI is wrong, there is no clear way to reach a human without restarting the case.",
    question: "How do you redesign escalation?",
    options: [
      {
        id: "A",
        text: "Add a buried 'contact us' link in settings",
        score: 1,
        feedback: "Too hidden; fails the moment of need.",
        tradeoffs: ["Continued frustration"],
        consequenceMetrics: {customerTrust: -2, adoption: -2}
      },
      {
        id: "B",
        text: "Force every session to start with a human",
        score: 0,
        feedback: "Destroys automation value.",
        tradeoffs: ["Cost spike"],
        consequenceMetrics: {operatingCost: 9, businessValue: -5}
      },
      {
        id: "C",
        text: "Offer in-flow escalation with full AI context transfer, SLA expectations, and reasons capture for model improvement",
        score: 3,
        feedback: "Fixes UX and creates a learning loop.",
        tradeoffs: ["Support cost"],
        consequenceMetrics: {customerTrust: 8, adoption: 6, operatingCost: 2, businessValue: 6}
      },
      {
        id: "D",
        text: "Tell users to rephrase until the AI works",
        score: 0,
        feedback: "Blames the user.",
        tradeoffs: ["Churn"],
        consequenceMetrics: {customerTrust: -8, adoption: -6}
      }
    ],
    bestOptionId: "C",
    bestAnswerExplanation: "Escalation should be in-flow, contextual, and measurable.",
    interviewInsight: "HITL UX design.",
    learningPoint: "Dead ends teach users not to trust automation."
  },
  {
    id: 68,
    title: "Launch Readiness Checklist",
    type: "scenario",
    difficulty: "medium",
    primaryCompetency: "Product Execution",
    secondaryCompetencies: ["Responsible AI and Governance", "Post-Launch Monitoring"],
    scenario: "Your team wants to GA an AI feature tomorrow. You have model cards incomplete, no rollback plan, and on-call runbooks missing.",
    question: "What is your call?",
    options: [
      {
        id: "A",
        text: "GA anyway; iterate in production",
        score: 0,
        feedback: "Irresponsible for AI with unclear failure modes.",
        tradeoffs: ["Incident risk"],
        consequenceMetrics: {reliability: -8, customerTrust: -5}
      },
      {
        id: "B",
        text: "Hard-stop until every document is perfect including future research ideas",
        score: 1,
        feedback: "Perfectionism beyond readiness.",
        tradeoffs: ["Unnecessary delay"],
        consequenceMetrics: {deliverySpeed: -8}
      },
      {
        id: "C",
        text: "Delay GA; require minimum bar: eval report, rollback switch, monitoring/alerts, on-call ownership, and known limitation docs",
        score: 3,
        feedback: "A practical launch bar for AI systems.",
        tradeoffs: ["Short delay"],
        consequenceMetrics: {reliability: 8, stakeholderConfidence: 7, customerTrust: 6, deliverySpeed: -3}
      },
      {
        id: "D",
        text: "Launch to 100% with a war room watching dashboards",
        score: 1,
        feedback: "War rooms are not a substitute for rollback and runbooks.",
        tradeoffs: ["Heroics"],
        consequenceMetrics: {reliability: -2, teamMorale: -4}
      }
    ],
    bestOptionId: "C",
    bestAnswerExplanation: "AI GA needs explicit safety/ops bars, not vibes.",
    interviewInsight: "Execution discipline.",
    learningPoint: "No rollback, no GA."
  },
  {
    id: 69,
    title: "Procurement Vendor Risk",
    type: "scenario",
    difficulty: "hard",
    primaryCompetency: "Enterprise AI Products",
    secondaryCompetencies: ["Privacy and Security", "Business and Monetization"],
    scenario: "A fast-growing LLM vendor offers breakthrough quality but is a startup with unclear SOC2 timeline and single-region hosting. A slower incumbent meets security standards with weaker quality.",
    question: "For a Fortune 100 RFP due in 6 weeks, what do you do?",
    options: [
      {
        id: "A",
        text: "Bet the RFP solely on the startup",
        score: 1,
        feedback: "May win demo and fail security review.",
        tradeoffs: ["Deal failure late"],
        consequenceMetrics: {revenue: -5, complianceRisk: 7}
      },
      {
        id: "B",
        text: "Use only the incumbent regardless of quality gap",
        score: 2,
        feedback: "Safe but may lose on capability scoring.",
        tradeoffs: ["Competitive loss"],
        consequenceMetrics: {complianceRisk: -6, businessValue: 2}
      },
      {
        id: "C",
        text: "Bid with incumbent as system of record path, optionally include startup in a constrained sandbox tier if allowed, and document risk controls",
        score: 3,
        feedback: "Balances compliance reality with capability narrative.",
        tradeoffs: ["Complex offer"],
        consequenceMetrics: {complianceRisk: -5, revenue: 6, stakeholderConfidence: 7, businessValue: 6}
      },
      {
        id: "D",
        text: "Hide the startup subprocessor from the questionnaire",
        score: 0,
        feedback: "Fatal trust/legal error.",
        tradeoffs: ["Disqualification"],
        consequenceMetrics: {complianceRisk: 10, customerTrust: -10}
      }
    ],
    bestOptionId: "C",
    bestAnswerExplanation: "Enterprise bids must survive security review, not only demos.",
    interviewInsight: "Vendor risk management.",
    learningPoint: "The best model that cannot clear security does not ship."
  },
  {
    id: 70,
    title: "Unit Economics of Agent Actions",
    type: "scenario",
    difficulty: "hard",
    primaryCompetency: "Business and Monetization",
    secondaryCompetencies: ["Agentic AI Systems", "Technical Trade-offs"],
    scenario: "Your agent averages 17 tool calls per task at $0.04 each plus LLM tokens. Customers pay $30/seat/month. Power users run 80 tasks/month.",
    question: "What is your product response?",
    options: [
      {
        id: "A",
        text: "Celebrate engagement and ignore cost",
        score: 0,
        feedback: "Power users may be deeply unprofitable.",
        tradeoffs: ["Margin collapse"],
        consequenceMetrics: {operatingCost: 10, revenue: -6}
      },
      {
        id: "B",
        text: "Hard-cap all users at 5 tasks/month",
        score: 1,
        feedback: "Too blunt; may kill value prop.",
        tradeoffs: ["Churn"],
        consequenceMetrics: {adoption: -7, customerTrust: -4}
      },
      {
        id: "C",
        text: "Instrument cost per successful task, optimize tool policies, cache/reuse, introduce fair-use + paid usage tiers aligned to cost",
        score: 3,
        feedback: "Manage COGS with product + technical levers.",
        tradeoffs: ["Packaging work"],
        consequenceMetrics: {operatingCost: -6, revenue: 6, businessValue: 7, adoption: 2}
      },
      {
        id: "D",
        text: "Ban power users",
        score: 0,
        feedback: "Hostile and naive.",
        tradeoffs: ["Reputation hit"],
        consequenceMetrics: {customerTrust: -8, revenue: -5}
      }
    ],
    bestOptionId: "C",
    bestAnswerExplanation: "Agent products need cost-per-outcome discipline and packaging.",
    interviewInsight: "Monetization meets agents.",
    learningPoint: "Seats can hide ruinous variable costs."
  },
  {
    id: 71,
    title: "Tool-Use Reliability vs Autonomy",
    type: "scenario",
    difficulty: "hard",
    primaryCompetency: "Agentic AI Systems",
    secondaryCompetencies: ["AI Evaluation", "Technical Trade-offs"],
    scenario: "Your agent can call refund APIs. In staging it occasionally double-refunds when tool retries are miscounted. Growth wants autonomy enabled for all refunds under $50.",
    question: "What do you do?",
    options: [
      {
        id: "A",
        text: "Enable autonomy for <$50 to learn in production",
        score: 0,
        feedback: "Known double-refund bug is a financial defect.",
        tradeoffs: ["Direct loss"],
        consequenceMetrics: {revenue: -8, customerTrust: -6, reliability: -7}
      },
      {
        id: "B",
        text: "Disable all tool use and make the agent chat-only",
        score: 1,
        feedback: "Avoids risk but abandons the agent value.",
        tradeoffs: ["No automation"],
        consequenceMetrics: {businessValue: -5, adoption: -4}
      },
      {
        id: "C",
        text: "Keep refunds behind idempotency keys + confirmation, add integration tests for retry paths, and only then expand autonomy with caps and alerts",
        score: 3,
        feedback: "Fixes the control plane before expanding autonomy.",
        tradeoffs: ["Slower expansion"],
        consequenceMetrics: {reliability: 8, securityRisk: -4, customerTrust: 6, businessValue: 5}
      },
      {
        id: "D",
        text: "Lower the amount to <$5 and ship",
        score: 1,
        feedback: "Still ships a known double-refund mechanism.",
        tradeoffs: ["Residual loss"],
        consequenceMetrics: {reliability: -4, revenue: -2}
      }
    ],
    bestOptionId: "C",
    bestAnswerExplanation: "Idempotency and tests before autonomy expansion.",
    interviewInsight: "Agent tool safety.",
    learningPoint: "Retries without idempotency are product incidents waiting to happen."
  },
  {
    id: 72,
    title: "Confusion Matrix Stakeholder Communication",
    type: "scenario",
    difficulty: "medium",
    primaryCompetency: "Communication and Leadership",
    secondaryCompetencies: ["AI Evaluation", "Stakeholder Management"],
    scenario: "Executives ask why a 94% accurate medical triage model is 'not ready.' False negatives on urgent cases are 3%, which clinicians consider unacceptable.",
    question: "How do you explain it?",
    options: [
      {
        id: "A",
        text: "Say 94% is excellent and clinicians are too risk-averse",
        score: 0,
        feedback: "Dismisses domain risk.",
        tradeoffs: ["Trust loss"],
        consequenceMetrics: {stakeholderConfidence: -8, customerTrust: -6}
      },
      {
        id: "B",
        text: "Only show the accuracy slide",
        score: 0,
        feedback: "Hides the failure mode that matters.",
        tradeoffs: ["Bad decision"],
        consequenceMetrics: {reliability: -5, stakeholderConfidence: -4}
      },
      {
        id: "C",
        text: "Present class-specific errors, cost of false negatives, and a proposed operating point/HITL design that meets clinical safety goals",
        score: 3,
        feedback: "Translates metrics into risk and a concrete path.",
        tradeoffs: ["Needs prep"],
        consequenceMetrics: {stakeholderConfidence: 8, customerTrust: 7, complianceRisk: -5}
      },
      {
        id: "D",
        text: "Promise 100% accuracy next quarter",
        score: 0,
        feedback: "Impossible and credibility-destroying.",
        tradeoffs: ["Future blow-up"],
        consequenceMetrics: {stakeholderConfidence: -9}
      }
    ],
    bestOptionId: "C",
    bestAnswerExplanation: "Communicate with error types and harm, not headline accuracy.",
    interviewInsight: "Exec communication skill.",
    learningPoint: "Accuracy without error-cost context misleads leaders."
  },
  {
    id: 73,
    title: "Privacy: Training on Customer Content",
    type: "scenario",
    difficulty: "hard",
    primaryCompetency: "Privacy and Security",
    secondaryCompetencies: ["Responsible AI and Governance", "Enterprise AI Products"],
    scenario: "ML proposes training on aggregated customer documents to improve quality. Contracts for 40% of customers prohibit training on their content. Sales says 'everyone does it.'",
    question: "What is your decision?",
    options: [
      {
        id: "A",
        text: "Train on all data; update contracts later",
        score: 0,
        feedback: "Breach of contract and trust.",
        tradeoffs: ["Legal exposure"],
        consequenceMetrics: {complianceRisk: 10, customerTrust: -10}
      },
      {
        id: "B",
        text: "Never use any customer data for improvement",
        score: 2,
        feedback: "Safest but may slow quality if no opt-in path.",
        tradeoffs: ["Slower improvement"],
        consequenceMetrics: {complianceRisk: -8, businessValue: -2}
      },
      {
        id: "C",
        text: "Segment data by contractual rights, use only permitted/opt-in corpora, and offer an explicit improvement opt-in with controls",
        score: 3,
        feedback: "Respects contracts while creating a lawful improvement path.",
        tradeoffs: ["Smaller dataset"],
        consequenceMetrics: {complianceRisk: -8, customerTrust: 8, businessValue: 5, reliability: 4}
      },
      {
        id: "D",
        text: "Anonymize everything quickly and assume that voids restrictions",
        score: 1,
        feedback: "Anonymization quality is hard; contracts may still restrict.",
        tradeoffs: ["Residual legal risk"],
        consequenceMetrics: {complianceRisk: 5}
      }
    ],
    bestOptionId: "C",
    bestAnswerExplanation: "Contractual data rights bound learning strategy.",
    interviewInsight: "Privacy + enterprise reality.",
    learningPoint: "No model improvement is worth a contract breach."
  },
  {
    id: 74,
    title: "Scalability of Inference Path",
    type: "scenario",
    difficulty: "medium",
    primaryCompetency: "Technical Trade-offs",
    secondaryCompetencies: ["Product Execution", "Post-Launch Monitoring"],
    scenario: "A feature that worked for 2k users starts timing out at 50k concurrent sessions. GPU pool autoscaling lags by 8 minutes during spikes.",
    question: "What product/tech approach do you take?",
    options: [
      {
        id: "A",
        text: "Ask users to try again later",
        score: 0,
        feedback: "Not a strategy.",
        tradeoffs: ["Churn"],
        consequenceMetrics: {customerTrust: -7, adoption: -5}
      },
      {
        id: "B",
        text: "Buy 10x GPUs immediately without demand shaping",
        score: 1,
        feedback: "Expensive and may still miss spikes.",
        tradeoffs: ["Cost shock"],
        consequenceMetrics: {operatingCost: 9, reliability: 3}
      },
      {
        id: "C",
        text: "Add graceful degradation (smaller model/cached answers), queue non-urgent jobs, improve autoscaling/warm pools, and set SLOs with load tests",
        score: 3,
        feedback: "Combines product degradation modes with capacity engineering.",
        tradeoffs: ["Complexity"],
        consequenceMetrics: {reliability: 8, customerTrust: 6, operatingCost: 3, businessValue: 6}
      },
      {
        id: "D",
        text: "Rate-limit randomly without messaging",
        score: 1,
        feedback: "Stops melt but feels broken.",
        tradeoffs: ["Anger"],
        consequenceMetrics: {customerTrust: -5, reliability: 2}
      }
    ],
    bestOptionId: "C",
    bestAnswerExplanation: "Scale with SLOs, degradation modes, and capacity planning together.",
    interviewInsight: "Growth-stage AI ops.",
    learningPoint: "Timeouts are product failures, not only infra tickets."
  },
  {
    id: 75,
    title: "Stakeholder Conflict: Legal vs Growth",
    type: "scenario",
    difficulty: "hard",
    primaryCompetency: "Stakeholder Management",
    secondaryCompetencies: ["Responsible AI and Governance", "Business and Monetization"],
    scenario: "Growth wants one-click AI content publishing. Legal wants mandatory human review for public content because of IP/defamation risk.",
    question: "How do you align them?",
    options: [
      {
        id: "A",
        text: "Side with Growth; speed wins",
        score: 0,
        feedback: "Ignores material legal risk.",
        tradeoffs: ["Lawsuits"],
        consequenceMetrics: {complianceRisk: 9, customerTrust: -5}
      },
      {
        id: "B",
        text: "Side with Legal; require review for every draft including private notes",
        score: 1,
        feedback: "Over-controls low-risk surfaces and hurts UX.",
        tradeoffs: ["Adoption hit"],
        consequenceMetrics: {adoption: -6, complianceRisk: -7}
      },
      {
        id: "C",
        text: "Risk-tier publishing surfaces: private drafts unconstrained; public/external publish requires review or enhanced filters based on risk policy agreed by both",
        score: 3,
        feedback: "Shared policy beats binary fighting.",
        tradeoffs: ["Needs policy work"],
        consequenceMetrics: {complianceRisk: -6, adoption: 5, stakeholderConfidence: 8, businessValue: 6}
      },
      {
        id: "D",
        text: "Flip a coin each release",
        score: 0,
        feedback: "Not leadership.",
        tradeoffs: ["Chaos"],
        consequenceMetrics: {stakeholderConfidence: -10}
      }
    ],
    bestOptionId: "C",
    bestAnswerExplanation: "Resolve via risk tiers and shared policy.",
    interviewInsight: "Cross-functional conflict design.",
    learningPoint: "Alignment is a policy artifact, not a meeting vibe."
  },
  {
    id: 76,
    title: "Model Capability vs User Value",
    type: "scenario",
    difficulty: "medium",
    primaryCompetency: "Product Strategy",
    secondaryCompetencies: ["AI and ML Fundamentals", "Customer Discovery"],
    scenario: "A new model is dramatically better at poetry and jokes. Your product is a B2B compliance assistant. Eng wants to upgrade immediately for 'quality.'",
    question: "What do you do?",
    options: [
      {
        id: "A",
        text: "Upgrade everywhere because newer is better",
        score: 1,
        feedback: "May raise cost without improving compliance jobs; can change behavior unexpectedly.",
        tradeoffs: ["Regressions/cost"],
        consequenceMetrics: {operatingCost: 5, reliability: -2}
      },
      {
        id: "B",
        text: "Refuse all model upgrades forever",
        score: 0,
        feedback: "Stagnation.",
        tradeoffs: ["Fall behind"],
        consequenceMetrics: {businessValue: -5}
      },
      {
        id: "C",
        text: "Evaluate the new model on compliance task suites, cost, latency, and safety; upgrade only if it improves user jobs or efficiency on those metrics",
        score: 3,
        feedback: "Capability must map to product value.",
        tradeoffs: ["Eval time"],
        consequenceMetrics: {businessValue: 8, reliability: 6, operatingCost: -1, customerTrust: 5}
      },
      {
        id: "D",
        text: "Upgrade only the marketing site demo",
        score: 1,
        feedback: "Creates a demo-product gap.",
        tradeoffs: ["Expectation debt"],
        consequenceMetrics: {customerTrust: -4, stakeholderConfidence: -2}
      }
    ],
    bestOptionId: "C",
    bestAnswerExplanation: "Upgrade models when evals show value on your jobs.",
    interviewInsight: "Anti-hype product sense.",
    learningPoint: "Frontier capability is not automatically product value."
  },
  {
    id: 77,
    title: "Prompting vs Fine-Tuning Timeline",
    type: "scenario",
    difficulty: "medium",
    primaryCompetency: "AI and ML Fundamentals",
    secondaryCompetencies: ["Prioritization and MVP Scoping", "Technical Trade-offs"],
    scenario: "You can ship a prompt-based workflow in 1 week or a fine-tuned specialist in 6 weeks. Enterprise pilot starts in 10 days.",
    question: "What do you commit?",
    options: [
      {
        id: "A",
        text: "Miss the pilot to wait for fine-tuning",
        score: 1,
        feedback: "Loses learning and relationship momentum.",
        tradeoffs: ["Lost pilot"],
        consequenceMetrics: {revenue: -5, deliverySpeed: -6}
      },
      {
        id: "B",
        text: "Prompt-based pilot with measured failure modes, parallel data collection for optional later fine-tune",
        score: 3,
        feedback: "Hits the date and builds a path to specialization.",
        tradeoffs: ["Interim quality gaps"],
        consequenceMetrics: {deliverySpeed: 8, businessValue: 7, customerTrust: 5, operatingCost: 2}
      },
      {
        id: "C",
        text: "Cancel the pilot",
        score: 0,
        feedback: "Avoidant.",
        tradeoffs: ["Trust loss"],
        consequenceMetrics: {stakeholderConfidence: -7}
      },
      {
        id: "D",
        text: "Promise fine-tuned quality in 10 days",
        score: 0,
        feedback: "Sets false expectations.",
        tradeoffs: ["Credibility hit"],
        consequenceMetrics: {customerTrust: -8}
      }
    ],
    bestOptionId: "B",
    bestAnswerExplanation: "Hit learning milestones with the simplest viable approach.",
    interviewInsight: "Sequencing under deadlines.",
    learningPoint: "Don't burn a pilot date for an unvalidated fine-tune."
  },
  {
    id: 78,
    title: "Retrieval Quality Debugging",
    type: "scenario",
    difficulty: "medium",
    primaryCompetency: "AI and ML Fundamentals",
    secondaryCompetencies: ["AI Evaluation", "Data Strategy"],
    scenario: "Users say answers are 'sort of related but missing the policy clause.' Logs show retrieval often returns neighboring sections, not the governing clause.",
    question: "Where do you intervene first?",
    options: [
      {
        id: "A",
        text: "Increase temperature so answers sound more confident",
        score: 0,
        feedback: "Worsens hallucination risk.",
        tradeoffs: ["More errors"],
        consequenceMetrics: {reliability: -8, customerTrust: -5}
      },
      {
        id: "B",
        text: "Improve chunking, metadata filters, and ranking; add citation UI; evaluate retrieval hit rate before blaming the generator",
        score: 3,
        feedback: "Fixes the retrieval problem users described.",
        tradeoffs: ["Search eng work"],
        consequenceMetrics: {reliability: 8, customerTrust: 6, businessValue: 6}
      },
      {
        id: "C",
        text: "Fine-tune the generator on support tickets only",
        score: 1,
        feedback: "May memorize style without fixing retrieval grounding.",
        tradeoffs: ["Misdiagnosis"],
        consequenceMetrics: {reliability: -2, operatingCost: 4}
      },
      {
        id: "D",
        text: "Remove citations to reduce user nitpicking",
        score: 0,
        feedback: "Hides the issue.",
        tradeoffs: ["Trust loss"],
        consequenceMetrics: {customerTrust: -7}
      }
    ],
    bestOptionId: "B",
    bestAnswerExplanation: "When evidence is wrong, fix retrieval/ranking before the generator.",
    interviewInsight: "RAG debugging judgment.",
    learningPoint: "Generator polish cannot fix missing evidence."
  },
  {
    id: 79,
    title: "Fairness Metric Selection",
    type: "scenario",
    difficulty: "hard",
    primaryCompetency: "Responsible AI and Governance",
    secondaryCompetencies: ["Metrics and Experimentation", "Data Strategy"],
    scenario: "For a hiring funnel AI, different stakeholders want demographic parity, equalized odds, or calibration by group. Business needs are high-precision shortlists.",
    question: "How do you proceed?",
    options: [
      {
        id: "A",
        text: "Pick demographic parity because it is easiest to explain",
        score: 1,
        feedback: "May conflict with job-relevant performance; needs context.",
        tradeoffs: ["Wrong metric fit"],
        consequenceMetrics: {complianceRisk: 3, businessValue: -2}
      },
      {
        id: "B",
        text: "Ignore fairness metrics to maximize AUC",
        score: 0,
        feedback: "Unacceptable for hiring.",
        tradeoffs: ["Discrimination risk"],
        consequenceMetrics: {complianceRisk: 9, customerTrust: -8}
      },
      {
        id: "C",
        text: "With Legal/HR, choose metrics tied to decision stage and harm, document tradeoffs, monitor multiple fairness views, and set launch constraints",
        score: 3,
        feedback: "Governance chooses metrics intentionally, not by fashion.",
        tradeoffs: ["Slower"],
        consequenceMetrics: {complianceRisk: -6, stakeholderConfidence: 7, customerTrust: 6, businessValue: 4}
      },
      {
        id: "D",
        text: "Let each customer pick any fairness definition ad hoc in UI",
        score: 1,
        feedback: "Operationally chaotic and hard to validate.",
        tradeoffs: ["Inconsistency"],
        consequenceMetrics: {complianceRisk: 4}
      }
    ],
    bestOptionId: "C",
    bestAnswerExplanation: "Fairness metrics are contextual governance choices.",
    interviewInsight: "Responsible metrics literacy.",
    learningPoint: "There is no universal fairness number."
  },
  {
    id: 80,
    title: "On-Call for AI Systems",
    type: "scenario",
    difficulty: "medium",
    primaryCompetency: "Post-Launch Monitoring",
    secondaryCompetencies: ["Product Execution", "Technical Trade-offs"],
    scenario: "After GA, nobody owns AI regressions. When faithfulness drops, it takes 2 days to notice via Twitter.",
    question: "What operating model do you install?",
    options: [
      {
        id: "A",
        text: "Rely on Twitter as the alert system",
        score: 0,
        feedback: "Too late and random.",
        tradeoffs: ["Brand damage"],
        consequenceMetrics: {customerTrust: -7, reliability: -6}
      },
      {
        id: "B",
        text: "Make the PM personally watch dashboards 24/7",
        score: 1,
        feedback: "Not scalable.",
        tradeoffs: ["Burnout"],
        consequenceMetrics: {teamMorale: -8}
      },
      {
        id: "C",
        text: "Define AI SLOs/alerts, on-call rotation with runbooks, severity levels, and product authority to disable features",
        score: 3,
        feedback: "Brings AI into normal production operations.",
        tradeoffs: ["Ops cost"],
        consequenceMetrics: {reliability: 8, customerTrust: 6, teamMorale: 3, stakeholderConfidence: 6}
      },
      {
        id: "D",
        text: "Disable monitoring to reduce noise",
        score: 0,
        feedback: "Reckless.",
        tradeoffs: ["Blind ops"],
        consequenceMetrics: {reliability: -9}
      }
    ],
    bestOptionId: "C",
    bestAnswerExplanation: "AI features need SLOs, on-call, and kill switches.",
    interviewInsight: "Operational excellence.",
    learningPoint: "If no one is paged, it is not production-ready."
  },
  {
    id: 81,
    title: "Enterprise Customization Demand",
    type: "scenario",
    difficulty: "hard",
    primaryCompetency: "Enterprise AI Products",
    secondaryCompetencies: ["Prioritization and MVP Scoping", "Stakeholder Management"],
    scenario: "A $2M strategic account wants a fully custom model trained only on their data and hosted in their VPC before signing. Your platform is multi-tenant SaaS.",
    question: "How do you handle the request?",
    options: [
      {
        id: "A",
        text: "Pause the platform to build a one-off",
        score: 0,
        feedback: "Endangers the company strategy for one deal.",
        tradeoffs: ["Strategy drift"],
        consequenceMetrics: {businessValue: -7, teamMorale: -5, revenue: 4}
      },
      {
        id: "B",
        text: "Reject the deal immediately",
        score: 1,
        feedback: "May be right eventually, but try packaged alternatives first.",
        tradeoffs: ["Lost revenue"],
        consequenceMetrics: {revenue: -6}
      },
      {
        id: "C",
        text: "Offer the closest packaged controls (private spaces, CMEK, retention, VPC-peering roadmap) and a clear no for fully bespoke model ops unless priced as a services program with executive approval",
        score: 3,
        feedback: "Protects platform strategy while exploring compliant packaging.",
        tradeoffs: ["Deal risk"],
        consequenceMetrics: {businessValue: 7, revenue: 5, stakeholderConfidence: 6, technicalDebt: -4}
      },
      {
        id: "D",
        text: "Promise custom VPC training to close, figure it out later",
        score: 0,
        feedback: "Creates delivery and trust crisis.",
        tradeoffs: ["Breach of promise"],
        consequenceMetrics: {customerTrust: -9, technicalDebt: 8}
      }
    ],
    bestOptionId: "C",
    bestAnswerExplanation: "Strategic accounts get packaged enterprise controls, not unlimited bespoke scope.",
    interviewInsight: "Enterprise PM spine.",
    learningPoint: "A deal that destroys the platform is too expensive."
  },
  {
    id: 82,
    title: "Behavioral: Saying No to Exec",
    type: "scenario",
    difficulty: "medium",
    primaryCompetency: "Communication and Leadership",
    secondaryCompetencies: ["Prioritization and MVP Scoping", "Stakeholder Management"],
    scenario: "Your CRO wants an AI feature demoed at a customer advisory board next week that needs 4 weeks of safety work.",
    question: "How do you say no productively?",
    options: [
      {
        id: "A",
        text: "Ignore the request and hope it goes away",
        score: 0,
        feedback: "Passive aggression.",
        tradeoffs: ["Trust break"],
        consequenceMetrics: {stakeholderConfidence: -8}
      },
      {
        id: "B",
        text: "Hard no with no alternative",
        score: 1,
        feedback: "Clear but weak partnership.",
        tradeoffs: ["Political cost"],
        consequenceMetrics: {stakeholderConfidence: -3}
      },
      {
        id: "C",
        text: "Explain safety gaps with risk scenarios, offer a safer demo path (scripted/video/limited private env), and a dated plan for the real capability",
        score: 3,
        feedback: "No with options and transparency.",
        tradeoffs: ["Prep time"],
        consequenceMetrics: {stakeholderConfidence: 7, customerTrust: 6, securityRisk: -5}
      },
      {
        id: "D",
        text: "Agree and ask eng to 'do their best'",
        score: 0,
        feedback: "Sets them up to fail unsafely.",
        tradeoffs: ["Incident risk"],
        consequenceMetrics: {teamMorale: -6, securityRisk: 7}
      }
    ],
    bestOptionId: "C",
    bestAnswerExplanation: "Executive nos work when paired with risk clarity and alternatives.",
    interviewInsight: "Influence without authority.",
    learningPoint: "A good no includes a safer yes."
  },
  {
    id: 83,
    title: "Measuring User Trust",
    type: "scenario",
    difficulty: "medium",
    primaryCompetency: "Customer Discovery",
    secondaryCompetencies: ["Metrics and Experimentation", "AI Evaluation"],
    scenario: "Adoption of your AI suggestions is flat. Qualitative notes say 'I don't trust it.' Leadership wants a trust KPI.",
    question: "What do you instrument?",
    options: [
      {
        id: "A",
        text: "NPS only",
        score: 1,
        feedback: "Too blunt for suggestion trust.",
        tradeoffs: ["Weak diagnosis"],
        consequenceMetrics: {businessValue: 1}
      },
      {
        id: "B",
        text: "Suggestion acceptance rate, edit distance, override reasons, and repeat usage after seeing errors—plus targeted interviews",
        score: 3,
        feedback: "Triangulates trust behaviors with motives.",
        tradeoffs: ["Instrumentation work"],
        consequenceMetrics: {businessValue: 7, customerTrust: 6, adoption: 5}
      },
      {
        id: "C",
        text: "A single survey question after every suggestion",
        score: 1,
        feedback: "Survey fatigue and bias.",
        tradeoffs: ["Noise"],
        consequenceMetrics: {adoption: -2}
      },
      {
        id: "D",
        text: "Assume trust equals model accuracy",
        score: 0,
        feedback: "Your earlier pilots already disproved that.",
        tradeoffs: ["Misdiagnosis"],
        consequenceMetrics: {businessValue: -4}
      }
    ],
    bestOptionId: "B",
    bestAnswerExplanation: "Trust is observed in behavior plus reasons, not one score.",
    interviewInsight: "Trust measurement design.",
    learningPoint: "People show distrust by editing, ignoring, and not returning."
  },
  {
    id: 84,
    title: "Synthetic Data Proposal",
    type: "scenario",
    difficulty: "medium",
    primaryCompetency: "Data Strategy",
    secondaryCompetencies: ["AI and ML Fundamentals", "Privacy and Security"],
    scenario: "You lack rare edge-case examples for safety training. Research proposes synthetic data generation. Compliance worries about leaking real customer patterns into synthetics.",
    question: "How do you proceed?",
    options: [
      {
        id: "A",
        text: "Generate synthetics from production logs without review",
        score: 0,
        feedback: "Privacy and quality risk.",
        tradeoffs: ["Leakage"],
        consequenceMetrics: {complianceRisk: 8, securityRisk: 6}
      },
      {
        id: "B",
        text: "Ban synthetic data entirely",
        score: 1,
        feedback: "May block needed coverage.",
        tradeoffs: ["Coverage gaps"],
        consequenceMetrics: {reliability: -3}
      },
      {
        id: "C",
        text: "Use constrained synthetic generation with privacy review, human validation on a gold set, and clear labeling of synthetic vs real in datasets",
        score: 3,
        feedback: "Gains coverage with controls.",
        tradeoffs: ["Process overhead"],
        consequenceMetrics: {reliability: 6, complianceRisk: -5, businessValue: 5}
      },
      {
        id: "D",
        text: "Copy competitor examples from public screenshots",
        score: 0,
        feedback: "IP/ethics issues and poor coverage.",
        tradeoffs: ["Legal risk"],
        consequenceMetrics: {complianceRisk: 7}
      }
    ],
    bestOptionId: "C",
    bestAnswerExplanation: "Synthetic data can help if validated and privacy-reviewed.",
    interviewInsight: "Modern data strategy.",
    learningPoint: "Synthetic is not automatically safe or useful."
  },
  {
    id: 85,
    title: "Multi-Agent System Scope",
    type: "scenario",
    difficulty: "hard",
    primaryCompetency: "Agentic AI Systems",
    secondaryCompetencies: ["Product Strategy", "Technical Trade-offs"],
    scenario: "A architect proposes 12 specialized agents for onboarding. You have not proven a single-agent workflow yet.",
    question: "What do you approve for the next quarter?",
    options: [
      {
        id: "A",
        text: "Fund the 12-agent vision",
        score: 0,
        feedback: "Architecture astronautics before value.",
        tradeoffs: ["Complexity explosion"],
        consequenceMetrics: {technicalDebt: 9, deliverySpeed: -8, businessValue: -4}
      },
      {
        id: "B",
        text: "Ship nothing until multi-agent theory is settled",
        score: 1,
        feedback: "Too slow.",
        tradeoffs: ["Missed learning"],
        consequenceMetrics: {deliverySpeed: -7}
      },
      {
        id: "C",
        text: "Prove one high-value workflow with minimal tools/agents, measure task success/cost, then consider decomposition if bottlenecks demand it",
        score: 3,
        feedback: "Incremental autonomy with evidence.",
        tradeoffs: ["Less glamorous"],
        consequenceMetrics: {businessValue: 8, deliverySpeed: 6, technicalDebt: -3, reliability: 5}
      },
      {
        id: "D",
        text: "Buy a multi-agent framework first, find use cases later",
        score: 0,
        feedback: "Tool-first strategy.",
        tradeoffs: ["Waste"],
        consequenceMetrics: {operatingCost: 6, businessValue: -5}
      }
    ],
    bestOptionId: "C",
    bestAnswerExplanation: "Earn complexity; don't start with an agent society.",
    interviewInsight: "Agent roadmap discipline.",
    learningPoint: "Multi-agent is an optimization after a working workflow."
  },
  {
    id: 86,
    title: "Red Teaming Before Launch",
    type: "scenario",
    difficulty: "medium",
    primaryCompetency: "Responsible AI and Governance",
    secondaryCompetencies: ["Privacy and Security", "Product Execution"],
    scenario: "Your consumer chatbot launch is in 5 days. Red teaming found easy jailbreaks that produce disallowed content. Fix ETA is 8 days for high-confidence coverage.",
    question: "What do you do?",
    options: [
      {
        id: "A",
        text: "Launch on schedule and patch quietly",
        score: 0,
        feedback: "Knowingly ships severe safety gaps.",
        tradeoffs: ["Brand/safety risk"],
        consequenceMetrics: {customerTrust: -8, complianceRisk: 8}
      },
      {
        id: "B",
        text: "Cancel the product",
        score: 1,
        feedback: "Unnecessary if delay works.",
        tradeoffs: ["Overreaction"],
        consequenceMetrics: {businessValue: -6}
      },
      {
        id: "C",
        text: "Slip launch, fix critical jailbreaks, re-test, and launch with monitoring and rapid kill switch",
        score: 3,
        feedback: "Safety bar over calendar worship.",
        tradeoffs: ["Date slip"],
        consequenceMetrics: {customerTrust: 7, complianceRisk: -6, stakeholderConfidence: 4, deliverySpeed: -4}
      },
      {
        id: "D",
        text: "Launch with a stronger disclaimer in the footer",
        score: 0,
        feedback: "Disclaimers don't block jailbreaks.",
        tradeoffs: ["Residual harm"],
        consequenceMetrics: {complianceRisk: 7, customerTrust: -5}
      }
    ],
    bestOptionId: "C",
    bestAnswerExplanation: "Critical safety findings slip the date.",
    interviewInsight: "Launch governance.",
    learningPoint: "A launch date is not a safety control."
  },
  {
    id: 87,
    title: "Feature Flag Rollout Strategy",
    type: "scenario",
    difficulty: "medium",
    primaryCompetency: "Product Execution",
    secondaryCompetencies: ["Metrics and Experimentation", "Post-Launch Monitoring"],
    scenario: "You are ready to roll out an AI reply feature. Past launches caused support spikes.",
    question: "How do you roll out?",
    options: [
      {
        id: "A",
        text: "100% on Tuesday before a holiday weekend",
        score: 0,
        feedback: "Maximal blast radius at worst time.",
        tradeoffs: ["Support collapse"],
        consequenceMetrics: {teamMorale: -7, customerTrust: -5}
      },
      {
        id: "B",
        text: "Internal dogfood → 5% → 25% → 50% → 100% with metric gates and rollback criteria",
        score: 3,
        feedback: "Standard controlled rollout.",
        tradeoffs: ["Takes longer"],
        consequenceMetrics: {reliability: 8, customerTrust: 6, teamMorale: 4, businessValue: 5}
      },
      {
        id: "C",
        text: "Roll out only to unhappy customers first",
        score: 1,
        feedback: "Biased sample and may worsen churn if immature.",
        tradeoffs: ["Skewed signal"],
        consequenceMetrics: {customerTrust: -2}
      },
      {
        id: "D",
        text: "No flags; ship directly to production main",
        score: 0,
        feedback: "Unnecessary risk.",
        tradeoffs: ["Hard rollback"],
        consequenceMetrics: {reliability: -7}
      }
    ],
    bestOptionId: "B",
    bestAnswerExplanation: "Progressive delivery with gates is required for AI UX risk.",
    interviewInsight: "Execution craft.",
    learningPoint: "Rollouts are part of the product design."
  },
  {
    id: 88,
    title: "Cost Alerting and Budgets",
    type: "scenario",
    difficulty: "medium",
    primaryCompetency: "Business and Monetization",
    secondaryCompetencies: ["Post-Launch Monitoring", "Technical Trade-offs"],
    scenario: "A viral prompt pattern increases token spend 6x overnight. Finance notices at month-end.",
    question: "What should have been in place?",
    options: [
      {
        id: "A",
        text: "Nothing; virality is good",
        score: 0,
        feedback: "Uncontrolled COGS can kill the company.",
        tradeoffs: ["Cash risk"],
        consequenceMetrics: {operatingCost: 10, revenue: -4}
      },
      {
        id: "B",
        text: "Monthly manual finance review only",
        score: 1,
        feedback: "Too slow for AI spend.",
        tradeoffs: ["Late detection"],
        consequenceMetrics: {operatingCost: 6}
      },
      {
        id: "C",
        text: "Real-time spend anomaly alerts, per-feature budgets, automatic degradation/throttles, and product owner pages",
        score: 3,
        feedback: "Makes COGS an operable product surface.",
        tradeoffs: ["Engineering investment"],
        consequenceMetrics: {operatingCost: -7, reliability: 5, stakeholderConfidence: 6, businessValue: 5}
      },
      {
        id: "D",
        text: "Hard global outage when spend rises",
        score: 1,
        feedback: "Protects cash but harms customers bluntly.",
        tradeoffs: ["Availability hit"],
        consequenceMetrics: {customerTrust: -6, operatingCost: -5}
      }
    ],
    bestOptionId: "C",
    bestAnswerExplanation: "Token spend needs first-class monitoring and automatic brakes.",
    interviewInsight: "FinOps for AI.",
    learningPoint: "If finance sees it first, product observability failed."
  },
  {
    id: 89,
    title: "Groundedness UI Design",
    type: "scenario",
    difficulty: "medium",
    primaryCompetency: "Human-in-the-Loop Design",
    secondaryCompetencies: ["AI Evaluation", "Communication and Leadership"],
    scenario: "Users over-trust fluent answers. You can show citations, confidence, or both. Design worries about clutter.",
    question: "What do you ship?",
    options: [
      {
        id: "A",
        text: "No UI cues; trust the model",
        score: 0,
        feedback: "Encourages overreliance.",
        tradeoffs: ["Costly mistakes"],
        consequenceMetrics: {customerTrust: -6, reliability: -4}
      },
      {
        id: "B",
        text: "Show citations for retrieved claims and a plain-language confidence/uncertainty cue, with details progressive-disclosed",
        score: 3,
        feedback: "Supports calibration without dumping noise.",
        tradeoffs: ["Design effort"],
        consequenceMetrics: {customerTrust: 8, adoption: 5, reliability: 6}
      },
      {
        id: "C",
        text: "Show a green check always to increase confidence",
        score: 0,
        feedback: "Deceptive.",
        tradeoffs: ["Miscalibration"],
        consequenceMetrics: {customerTrust: -9, complianceRisk: 6}
      },
      {
        id: "D",
        text: "Show raw token probabilities",
        score: 1,
        feedback: "Not user-meaningful.",
        tradeoffs: ["Confusion"],
        consequenceMetrics: {adoption: -3}
      }
    ],
    bestOptionId: "B",
    bestAnswerExplanation: "Help users calibrate with citations + understandable uncertainty.",
    interviewInsight: "Responsible UX.",
    learningPoint: "Fluency requires counterbalancing UI."
  },
  {
    id: 90,
    title: "Experimentation on Safety Filters",
    type: "scenario",
    difficulty: "hard",
    primaryCompetency: "Metrics and Experimentation",
    secondaryCompetencies: ["Responsible AI and Governance", "Privacy and Security"],
    scenario: "Growth proposes A/B testing weaker safety filters to lift retention by 2%.",
    question: "What is your stance?",
    options: [
      {
        id: "A",
        text: "Run the A/B; data decides all",
        score: 0,
        feedback: "Safety is not a pure growth KPI playground.",
        tradeoffs: ["Harm exposure"],
        consequenceMetrics: {complianceRisk: 8, customerTrust: -7}
      },
      {
        id: "B",
        text: "Never change filters",
        score: 1,
        feedback: "Too rigid; improvements need careful eval.",
        tradeoffs: ["Stagnation"],
        consequenceMetrics: {deliverySpeed: -3}
      },
      {
        id: "C",
        text: "Disallow experiments that intentionally increase severe-harm exposure; use offline red-team + staged canaries with harm caps and ethics review",
        score: 3,
        feedback: "Allows learning without treating severe harm as a treatment.",
        tradeoffs: ["Slower iteration"],
        consequenceMetrics: {complianceRisk: -7, customerTrust: 7, stakeholderConfidence: 6, businessValue: 3}
      },
      {
        id: "D",
        text: "Test only on minors' accounts because they complain less",
        score: 0,
        feedback: "Unethical and likely illegal.",
        tradeoffs: ["Severe harm"],
        consequenceMetrics: {complianceRisk: 10, customerTrust: -10}
      }
    ],
    bestOptionId: "C",
    bestAnswerExplanation: "Some experiments are unethical by design; use safer evaluation paths.",
    interviewInsight: "Ethics in experimentation.",
    learningPoint: "Not every metric lift is allowed to be tested in production."
  },
  {
    id: 91,
    title: "Customer Validation Interview Script",
    type: "scenario",
    difficulty: "medium",
    primaryCompetency: "Customer Discovery",
    secondaryCompetencies: ["Product Strategy", "Communication and Leadership"],
    scenario: "A PM interviews customers by pitching the AI solution for 20 minutes then asking 'Would you buy this?' Most say yes politely.",
    question: "What should change?",
    options: [
      {
        id: "A",
        text: "Nothing; yes means demand",
        score: 0,
        feedback: "Politeness ≠ purchase.",
        tradeoffs: ["False validation"],
        consequenceMetrics: {businessValue: -6}
      },
      {
        id: "B",
        text: "Switch to problem-first interviews, ask about current workflow/frequency/spend, and test commitment with a waitlist deposit or pilot SOW",
        score: 3,
        feedback: "Replaces compliments with evidence.",
        tradeoffs: ["Harder conversations"],
        consequenceMetrics: {businessValue: 8, customerTrust: 5, adoption: 4}
      },
      {
        id: "C",
        text: "Only interview internal employees",
        score: 1,
        feedback: "Biased and limited.",
        tradeoffs: ["Invalid signal"],
        consequenceMetrics: {businessValue: -3}
      },
      {
        id: "D",
        text: "Ask for a 1-5 star rating on the idea",
        score: 1,
        feedback: "Still weak stated preference.",
        tradeoffs: ["Noise"],
        consequenceMetrics: {businessValue: 1}
      }
    ],
    bestOptionId: "B",
    bestAnswerExplanation: "Validate problems and commitment, not compliment magnet pitches.",
    interviewInsight: "Discovery craft.",
    learningPoint: "A polite yes is the most expensive lie in product."
  },
  {
    id: 92,
    title: "LLM Eval Harness Ownership",
    type: "scenario",
    difficulty: "medium",
    primaryCompetency: "AI Evaluation",
    secondaryCompetencies: ["Product Execution", "Technical Trade-offs"],
    scenario: "Each squad invents ad-hoc eval prompts. Results are incomparable and regressions ship unnoticed.",
    question: "What do you establish?",
    options: [
      {
        id: "A",
        text: "Ban all evals to save time",
        score: 0,
        feedback: "Guarantees regressions.",
        tradeoffs: ["Quality decay"],
        consequenceMetrics: {reliability: -8}
      },
      {
        id: "B",
        text: "A shared eval harness with golden sets per critical intent, versioned prompts/models, CI gates on regressions, and owners",
        score: 3,
        feedback: "Makes quality comparable and enforceable.",
        tradeoffs: ["Upfront investment"],
        consequenceMetrics: {reliability: 8, deliverySpeed: 2, stakeholderConfidence: 6, technicalDebt: -4}
      },
      {
        id: "C",
        text: "One giant generic benchmark only (e.g., MMLU)",
        score: 1,
        feedback: "Poorly matched to product jobs.",
        tradeoffs: ["False confidence"],
        consequenceMetrics: {reliability: -2, businessValue: -2}
      },
      {
        id: "D",
        text: "Eval only after customer complaints",
        score: 0,
        feedback: "Too late.",
        tradeoffs: ["Churn"],
        consequenceMetrics: {customerTrust: -6}
      }
    ],
    bestOptionId: "B",
    bestAnswerExplanation: "Product-quality evals belong in CI with owners.",
    interviewInsight: "Eval platform thinking.",
    learningPoint: "If evals aren't comparable, they aren't governance."
  },
  {
    id: 93,
    title: "Shadow Mode Deployment",
    type: "scenario",
    difficulty: "medium",
    primaryCompetency: "Product Execution",
    secondaryCompetencies: ["AI Evaluation", "Metrics and Experimentation"],
    scenario: "You want to validate a new ranking model safely in production.",
    question: "Which approach is strongest?",
    options: [
      {
        id: "A",
        text: "Replace production immediately",
        score: 0,
        feedback: "High risk.",
        tradeoffs: ["Outage/regression"],
        consequenceMetrics: {reliability: -7}
      },
      {
        id: "B",
        text: "Run shadow mode: new model scores live traffic without user impact, compare decisions/metrics, then canary",
        score: 3,
        feedback: "Learns on real distribution with limited harm.",
        tradeoffs: ["Infra cost"],
        consequenceMetrics: {reliability: 7, businessValue: 6, customerTrust: 5, deliverySpeed: 3}
      },
      {
        id: "C",
        text: "Only test on synthetic traffic forever",
        score: 1,
        feedback: "Misses real drift and messy inputs.",
        tradeoffs: ["Blind spots"],
        consequenceMetrics: {reliability: -3}
      },
      {
        id: "D",
        text: "Ask 2 friends to click around",
        score: 0,
        feedback: "Not evidence.",
        tradeoffs: ["False readiness"],
        consequenceMetrics: {reliability: -5}
      }
    ],
    bestOptionId: "B",
    bestAnswerExplanation: "Shadow + canary is the responsible path for ranking changes.",
    interviewInsight: "Safe ML launch patterns.",
    learningPoint: "Real traffic distributions beat lab comfort."
  },
  {
    id: 94,
    title: "Agent Memory Privacy",
    type: "scenario",
    difficulty: "hard",
    primaryCompetency: "Privacy and Security",
    secondaryCompetencies: ["Agentic AI Systems", "Responsible AI and Governance"],
    scenario: "Your agent remembers personal details across sessions to be 'helpful.' A user reports it recalled a medical detail in front of a colleague on a shared screen.",
    question: "What do you change?",
    options: [
      {
        id: "A",
        text: "Keep long-term memory; add a fun animation",
        score: 0,
        feedback: "Ignores sensitive disclosure risk.",
        tradeoffs: ["Privacy harm"],
        consequenceMetrics: {complianceRisk: 8, customerTrust: -9}
      },
      {
        id: "B",
        text: "Delete all memory features permanently",
        score: 2,
        feedback: "Safer, but may remove legitimate value if redesignable.",
        tradeoffs: ["Feature loss"],
        consequenceMetrics: {complianceRisk: -6, businessValue: -3}
      },
      {
        id: "C",
        text: "Default to short/scoped memory, sensitive-category exclusions, visible memory inspector, easy wipe, and consent for long-term memory",
        score: 3,
        feedback: "User control and data minimization for agent memory.",
        tradeoffs: ["Build cost"],
        consequenceMetrics: {customerTrust: 8, complianceRisk: -7, adoption: 5, securityRisk: -4}
      },
      {
        id: "D",
        text: "Only warn users in ToS",
        score: 0,
        feedback: "Not a product control.",
        tradeoffs: ["Residual harm"],
        consequenceMetrics: {complianceRisk: 6, customerTrust: -5}
      }
    ],
    bestOptionId: "C",
    bestAnswerExplanation: "Agent memory needs minimization, visibility, and consent.",
    interviewInsight: "Privacy UX for agents.",
    learningPoint: "Helpful memory without controls becomes a privacy incident."
  },
  {
    id: 95,
    title: "Sales Demo vs Production Parity",
    type: "scenario",
    difficulty: "hard",
    primaryCompetency: "Stakeholder Management",
    secondaryCompetencies: ["Enterprise AI Products", "Communication and Leadership"],
    scenario: "Solutions consulting uses a privately tuned demo environment that outperforms production. Prospects expect that quality on day 1 after purchase.",
    question: "What do you do?",
    options: [
      {
        id: "A",
        text: "Allow the demo gap to continue; it's sales",
        score: 0,
        feedback: "Creates onboarding disappointment and churn.",
        tradeoffs: ["Expectation debt"],
        consequenceMetrics: {customerTrust: -8, revenue: -4}
      },
      {
        id: "B",
        text: "Shut down all demos",
        score: 1,
        feedback: "Hurts pipeline without fixing messaging.",
        tradeoffs: ["Revenue hit"],
        consequenceMetrics: {revenue: -6}
      },
      {
        id: "C",
        text: "Enforce demo-prod parity rules, label enhanced demos clearly, and align handover with production capabilities/limitations",
        score: 3,
        feedback: "Protects trust while enabling sales.",
        tradeoffs: ["Short-term win-rate dip"],
        consequenceMetrics: {customerTrust: 8, stakeholderConfidence: 6, revenue: 3, adoption: 5}
      },
      {
        id: "D",
        text: "Silently make production riskier to match demo magic",
        score: 0,
        feedback: "Transfers risk to customers.",
        tradeoffs: ["Incidents"],
        consequenceMetrics: {reliability: -8, complianceRisk: 6}
      }
    ],
    bestOptionId: "C",
    bestAnswerExplanation: "Demo ethics and parity are part of enterprise product quality.",
    interviewInsight: "GTM alignment.",
    learningPoint: "If demos lie, churn tells the truth later."
  },
  {
    id: 96,
    title: "Prioritizing Tech Debt in AI Stack",
    type: "scenario",
    difficulty: "medium",
    primaryCompetency: "Prioritization and MVP Scoping",
    secondaryCompetencies: ["Technical Trade-offs", "Product Execution"],
    scenario: "Inference pipelines are fragile; a key engineer is the only person who can deploy. Meanwhile customers ask for two new AI templates.",
    question: "What do you prioritize this sprint?",
    options: [
      {
        id: "A",
        text: "Only new templates for revenue",
        score: 1,
        feedback: "Increases bus factor risk.",
        tradeoffs: ["Outage risk"],
        consequenceMetrics: {revenue: 4, reliability: -6, teamMorale: -3}
      },
      {
        id: "B",
        text: "Only rewrite everything in a new framework",
        score: 1,
        feedback: "Possible yak shave.",
        tradeoffs: ["Delayed value"],
        consequenceMetrics: {deliverySpeed: -7, technicalDebt: -2}
      },
      {
        id: "C",
        text: "Split: land a thin template if low risk, but dedicate explicit capacity to deployment automation/runbooks to reduce bus factor—make reliability a named outcome",
        score: 3,
        feedback: "Balances value with operational risk reduction.",
        tradeoffs: ["Less feature throughput"],
        consequenceMetrics: {reliability: 8, teamMorale: 6, businessValue: 5, technicalDebt: -5}
      },
      {
        id: "D",
        text: "Hire consultants to add templates without touching infra",
        score: 1,
        feedback: "Still leaves fragile core.",
        tradeoffs: ["Hidden risk"],
        consequenceMetrics: {revenue: 3, reliability: -4}
      }
    ],
    bestOptionId: "C",
    bestAnswerExplanation: "Bus-factor risk is product risk; schedule it explicitly.",
    interviewInsight: "Priority judgment.",
    learningPoint: "Features on a fragile AI path are liabilities."
  },
  {
    id: 97,
    title: "Defining Done for AI Features",
    type: "scenario",
    difficulty: "medium",
    primaryCompetency: "Product Execution",
    secondaryCompetencies: ["AI Evaluation", "Responsible AI and Governance"],
    scenario: "Engineering marks an AI ticket 'done' when the PR merges. Product keeps finding missing evals and docs.",
    question: "How do you redefine done?",
    options: [
      {
        id: "A",
        text: "Done = PR merged",
        score: 0,
        feedback: "Insufficient for AI.",
        tradeoffs: ["Regressions"],
        consequenceMetrics: {reliability: -6}
      },
      {
        id: "B",
        text: "Done = perfect quality forever",
        score: 1,
        feedback: "Unachievable bar.",
        tradeoffs: ["Never ships"],
        consequenceMetrics: {deliverySpeed: -9}
      },
      {
        id: "C",
        text: "Done = code + offline eval thresholds + monitoring/dashboard + flags/rollback + limitation notes reviewed by PM/legal as needed",
        score: 3,
        feedback: "A realistic AI definition of done.",
        tradeoffs: ["Slightly heavier process"],
        consequenceMetrics: {reliability: 8, stakeholderConfidence: 6, complianceRisk: -3, deliverySpeed: -1}
      },
      {
        id: "D",
        text: "Done = CEO likes the demo",
        score: 0,
        feedback: "Not a quality system.",
        tradeoffs: ["Randomness"],
        consequenceMetrics: {reliability: -5, teamMorale: -4}
      }
    ],
    bestOptionId: "C",
    bestAnswerExplanation: "AI done-ness includes evals, ops, and disclosed limits.",
    interviewInsight: "Execution standards.",
    learningPoint: "Merged is not done for probabilistic systems."
  },
  {
    id: 98,
    title: "Handling Conflicting Customer Feedback",
    type: "scenario",
    difficulty: "medium",
    primaryCompetency: "Customer Discovery",
    secondaryCompetencies: ["Product Strategy", "Prioritization and MVP Scoping"],
    scenario: "Enterprise A wants deeper autonomy. Enterprise B wants more confirmations after a costly AI mistake. Both are top ARR.",
    question: "How do you navigate?",
    options: [
      {
        id: "A",
        text: "Build both full modes immediately as separate products",
        score: 1,
        feedback: "May over-split capacity.",
        tradeoffs: ["Focus loss"],
        consequenceMetrics: {deliverySpeed: -5, operatingCost: 5}
      },
      {
        id: "B",
        text: "Average their requests into a mediocre middle",
        score: 0,
        feedback: "Satisfies neither.",
        tradeoffs: ["Churn risk"],
        consequenceMetrics: {customerTrust: -4, businessValue: -3}
      },
      {
        id: "C",
        text: "Create a configurable autonomy policy with safe defaults, let admins choose tiers, and share learning across both accounts",
        score: 3,
        feedback: "Segment needs via configuration, not roadmap schizophrenia.",
        tradeoffs: ["Config complexity"],
        consequenceMetrics: {customerTrust: 7, businessValue: 7, revenue: 6, adoption: 5}
      },
      {
        id: "D",
        text: "Choose the larger contract and ignore the other",
        score: 1,
        feedback: "Risks concentration and trust.",
        tradeoffs: ["Concentration risk"],
        consequenceMetrics: {revenue: 3, customerTrust: -5}
      }
    ],
    bestOptionId: "C",
    bestAnswerExplanation: "Configurable risk posture serves divergent enterprise needs.",
    interviewInsight: "Portfolio customers.",
    learningPoint: "When needs conflict, productize the policy surface."
  },
  {
    id: 99,
    title: "Post-Launch Adoption Lag",
    type: "scenario",
    difficulty: "medium",
    primaryCompetency: "Product Strategy",
    secondaryCompetencies: ["Customer Discovery", "Metrics and Experimentation"],
    scenario: "You launched an AI feature with strong offline metrics. 8% of eligible users tried it; 2% retained weekly. Support says it's hard to find and outputs need editing.",
    question: "What is your plan?",
    options: [
      {
        id: "A",
        text: "Rebuild the model from scratch immediately",
        score: 1,
        feedback: "May be premature if discovery/UX are the bottleneck.",
        tradeoffs: ["Waste"],
        consequenceMetrics: {deliverySpeed: -6, operatingCost: 5}
      },
      {
        id: "B",
        text: "Declare failure and remove the feature",
        score: 1,
        feedback: "Possible later, but first diagnose.",
        tradeoffs: ["Lost learning"],
        consequenceMetrics: {businessValue: -4}
      },
      {
        id: "C",
        text: "Diagnose funnel: awareness → trial → success → retention; fix entry points and first-value UX; improve edit burden; then reassess model gaps with evidence",
        score: 3,
        feedback: "Adoption problems are often product funnel problems first.",
        tradeoffs: ["Takes a cycle"],
        consequenceMetrics: {adoption: 7, customerTrust: 5, businessValue: 6, reliability: 3}
      },
      {
        id: "D",
        text: "Force-enable it for all users on every screen",
        score: 0,
        feedback: "Creates backlash.",
        tradeoffs: ["Anger"],
        consequenceMetrics: {customerTrust: -7, adoption: -3}
      }
    ],
    bestOptionId: "C",
    bestAnswerExplanation: "Treat adoption as a funnel before assuming a model rewrite.",
    interviewInsight: "Growth + AI product sense.",
    learningPoint: "If users cannot find success quickly, model AUC will not save you."
  },
  {
    id: 100,
    title: "Board Ask: AI Strategy Narrative",
    type: "scenario",
    difficulty: "hard",
    primaryCompetency: "Communication and Leadership",
    secondaryCompetencies: ["Product Strategy", "Business and Monetization"],
    scenario: "The board wants a one-slide AI strategy. Teams have 14 experiments. Margins are under pressure.",
    question: "What narrative do you present?",
    options: [
      {
        id: "A",
        text: "List all 14 experiments as equal priorities",
        score: 0,
        feedback: "Signals no strategy.",
        tradeoffs: ["Confusion"],
        consequenceMetrics: {stakeholderConfidence: -7}
      },
      {
        id: "B",
        text: "Promise AGI-level transformation next year",
        score: 0,
        feedback: "Hype without plan.",
        tradeoffs: ["Credibility risk"],
        consequenceMetrics: {stakeholderConfidence: -8}
      },
      {
        id: "C",
        text: "State target customer jobs, where AI creates defensibility, economics/COGS approach, risk boundaries, and a focused portfolio of bets with kill metrics",
        score: 3,
        feedback: "A credible strategy slide for AI businesses.",
        tradeoffs: ["Requires focus"],
        consequenceMetrics: {stakeholderConfidence: 9, businessValue: 7, revenue: 5, operatingCost: -2}
      },
      {
        id: "D",
        text: "Say AI is an engineering detail not for the board",
        score: 1,
        feedback: "Under-communicates a material business bet.",
        tradeoffs: ["Misalignment"],
        consequenceMetrics: {stakeholderConfidence: -4}
      }
    ],
    bestOptionId: "C",
    bestAnswerExplanation: "Strategy is focus, economics, and risk—not an experiment dump.",
    interviewInsight: "Executive storytelling.",
    learningPoint: "If everything is an AI bet, nothing is."
  }
];

QUESTIONS.push(...FINAL_QUESTIONS);

console.log(`Question bank loaded: ${QUESTIONS.length} questions`);
