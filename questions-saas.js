// SaaS PM Interview Practice - Question Bank (100 questions)
// Same structure as questions.js, tailored to the SaaS Product Manager role

const SAAS_QUESTIONS = [
  {
    "id": 1,
    "title": "Freemium Conversion Stall",
    "type": "scenario",
    "difficulty": "hard",
    "primaryCompetency": "Pricing and Packaging",
    "secondaryCompetencies": [
      "Growth and Acquisition",
      "Business and Monetization"
    ],
    "scenario": "Your freemium collaboration tool has 400k free users but only 1.9% convert to paid. Free users get unlimited projects; paid adds admin controls and integrations. Investors push for monetization.",
    "question": "What do you do first?",
    "options": [
      {
        "id": "A",
        "text": "Cut free plan to 3 projects immediately for everyone",
        "score": 1,
        "feedback": "May force conversions but risks mass churn and community backlash without data on usage distribution.",
        "tradeoffs": [
          "User backlash",
          "Brand damage"
        ],
        "consequenceMetrics": {
          "revenue": 4,
          "adoption": -8,
          "customerTrust": -6
        }
      },
      {
        "id": "B",
        "text": "Analyze which paid features correlate with willingness to pay, identify the natural value metric, then redesign packaging around it with grandfathering",
        "score": 3,
        "feedback": "Packaging should follow the value metric users already demonstrate. Grandfathering protects trust.",
        "tradeoffs": [
          "Takes 3-4 weeks",
          "Complex migration"
        ],
        "consequenceMetrics": {
          "revenue": 7,
          "customerTrust": 5,
          "businessValue": 8,
          "adoption": -1
        }
      },
      {
        "id": "C",
        "text": "Add more features to the paid tier to make it more attractive",
        "score": 1,
        "feedback": "More features rarely fix a packaging problem; the free tier may simply be too generous.",
        "tradeoffs": [
          "Feature bloat",
          "Delayed monetization"
        ],
        "consequenceMetrics": {
          "businessValue": 2,
          "deliverySpeed": -4,
          "revenue": 1
        }
      },
      {
        "id": "D",
        "text": "Launch aggressive discount campaigns for annual plans",
        "score": 0,
        "feedback": "Discounts without fixing packaging train users to wait for sales and depress willingness to pay.",
        "tradeoffs": [
          "Price erosion",
          "Wrong incentive"
        ],
        "consequenceMetrics": {
          "revenue": 2,
          "businessValue": -4,
          "customerTrust": -2
        }
      }
    ],
    "bestOptionId": "B",
    "bestAnswerExplanation": "Find the value metric that separates casual from serious users (seats, projects, storage, API calls), then rebuild the free/paid boundary around it. Grandfather existing users to protect trust.",
    "interviewInsight": "Tests whether you understand freemium economics: the free tier is a marketing cost that must map to a conversion path.",
    "learningPoint": "Fix the packaging boundary before pulling pricing or discount levers."
  },
  {
    "id": 2,
    "title": "Churn Spike After Redesign",
    "type": "scenario",
    "difficulty": "hard",
    "primaryCompetency": "Churn and Retention",
    "secondaryCompetencies": [
      "UX and Design Collaboration",
      "Post-Launch Monitoring"
    ],
    "scenario": "Two weeks after a major UI redesign, weekly active usage dropped 12% and cancellations rose 30%. Support tickets mention 'can't find anything anymore.' Design argues users always complain and adapt within a month.",
    "question": "How do you respond?",
    "options": [
      {
        "id": "A",
        "text": "Wait a month for users to adapt, as design suggests",
        "score": 1,
        "feedback": "Adaptation is real, but a 30% cancellation increase is a business emergency you cannot wait out blindly.",
        "tradeoffs": [
          "Compounding churn",
          "Revenue loss"
        ],
        "consequenceMetrics": {
          "revenue": -7,
          "customerTrust": -5,
          "teamMorale": 2
        }
      },
      {
        "id": "B",
        "text": "Roll back the redesign completely today",
        "score": 1,
        "feedback": "Stops the bleeding but wastes months of work and may not be necessary if specific flows are the problem.",
        "tradeoffs": [
          "Wasted investment",
          "Team morale hit"
        ],
        "consequenceMetrics": {
          "customerTrust": 4,
          "teamMorale": -7,
          "deliverySpeed": -5
        }
      },
      {
        "id": "C",
        "text": "Segment churn data by workflow, watch session recordings of cancelling users, fix the top broken flows fast, and offer a temporary classic-mode toggle for at-risk accounts",
        "score": 3,
        "feedback": "Diagnoses precisely, protects revenue with a bridge option, and preserves the redesign investment.",
        "tradeoffs": [
          "Two UIs temporarily",
          "Engineering load"
        ],
        "consequenceMetrics": {
          "customerTrust": 7,
          "revenue": 5,
          "reliability": 5,
          "teamMorale": 3
        }
      },
      {
        "id": "D",
        "text": "Email all users a tutorial video about the new UI",
        "score": 0,
        "feedback": "Education helps discoverability but doesn't address broken workflows driving actual cancellations.",
        "tradeoffs": [
          "Ignores root cause",
          "Low open rates"
        ],
        "consequenceMetrics": {
          "customerTrust": -2,
          "adoption": 1,
          "revenue": -4
        }
      }
    ],
    "bestOptionId": "C",
    "bestAnswerExplanation": "Diagnose which workflows broke, fix them fast, and give at-risk users a bridge. Blanket rollback or blind waiting both destroy value.",
    "interviewInsight": "Tests crisis response and whether you balance design conviction with retention data.",
    "learningPoint": "Redesigns are measured in retained workflows, not visual polish."
  },
  {
    "id": 3,
    "title": "Enterprise SSO Blocker",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "Enterprise SaaS",
    "secondaryCompetencies": [
      "Security and Compliance",
      "Prioritization and MVP Scoping"
    ],
    "scenario": "Three mid-market deals ($240k ARR combined) are blocked because you lack SAML SSO. Building it takes one squad 6 weeks. Your roadmap has a consumer growth feature projected at similar revenue but unvalidated.",
    "question": "What do you prioritize?",
    "options": [
      {
        "id": "A",
        "text": "The growth feature; enterprise can wait a quarter",
        "score": 1,
        "feedback": "Trades committed revenue for a projection. Enterprise deals may not survive a quarter of waiting.",
        "tradeoffs": [
          "Deal slippage",
          "Sales trust"
        ],
        "consequenceMetrics": {
          "revenue": -6,
          "stakeholderConfidence": -5,
          "businessValue": 2
        }
      },
      {
        "id": "B",
        "text": "Build SAML SSO now: it unblocks committed revenue and is table stakes for every future enterprise deal",
        "score": 3,
        "feedback": "SSO is a one-time gate that compounds across all future enterprise pipeline, versus an unvalidated bet.",
        "tradeoffs": [
          "Growth feature delayed"
        ],
        "consequenceMetrics": {
          "revenue": 7,
          "stakeholderConfidence": 7,
          "businessValue": 7,
          "deliverySpeed": -2
        }
      },
      {
        "id": "C",
        "text": "Buy an SSO middleware vendor solution to ship in 2 weeks",
        "score": 2,
        "feedback": "Reasonable accelerant, but evaluate vendor cost, security review, and lock-in first; still likely the right family of solution.",
        "tradeoffs": [
          "Vendor dependency",
          "Integration cost"
        ],
        "consequenceMetrics": {
          "revenue": 6,
          "deliverySpeed": 6,
          "operatingCost": 3
        }
      },
      {
        "id": "D",
        "text": "Ask sales to close the deals with a written SSO commitment for next quarter",
        "score": 1,
        "feedback": "Sometimes works, but contractual roadmap commitments create delivery risk and procurement often requires SSO at signature.",
        "tradeoffs": [
          "Contract risk",
          "Trust risk"
        ],
        "consequenceMetrics": {
          "revenue": 3,
          "complianceRisk": 4,
          "stakeholderConfidence": -2
        }
      }
    ],
    "bestOptionId": "B",
    "bestAnswerExplanation": "Table-stakes enterprise infrastructure that blocks committed revenue beats unvalidated growth bets. SSO also unlocks all future enterprise pipeline.",
    "interviewInsight": "Tests revenue-weighted prioritization and understanding of enterprise table stakes.",
    "learningPoint": "Some features aren't differentiators—they're gates. Gates that block revenue come first."
  },
  {
    "id": 4,
    "title": "Usage-Based vs Seat Pricing",
    "type": "scenario",
    "difficulty": "hard",
    "primaryCompetency": "Pricing and Packaging",
    "secondaryCompetencies": [
      "Business and Monetization",
      "Enterprise SaaS"
    ],
    "scenario": "Your API-first data tool charges per seat, but 20% of customers generate 80% of infrastructure cost through heavy API usage. Finance wants usage-based pricing. Sales fears deal friction from unpredictable bills.",
    "question": "How do you evolve pricing?",
    "options": [
      {
        "id": "A",
        "text": "Switch entirely to usage-based pricing next quarter",
        "score": 1,
        "feedback": "Aligns cost but creates bill shock and procurement friction; big-bang pricing migrations are risky.",
        "tradeoffs": [
          "Bill shock",
          "Renewal risk"
        ],
        "consequenceMetrics": {
          "revenue": 3,
          "customerTrust": -6,
          "operatingCost": -5
        }
      },
      {
        "id": "B",
        "text": "Keep seat pricing and absorb infrastructure costs as COGS",
        "score": 0,
        "feedback": "Lets heavy users be subsidized indefinitely; margins keep degrading as usage grows.",
        "tradeoffs": [
          "Margin erosion",
          "Unfair pricing"
        ],
        "consequenceMetrics": {
          "operatingCost": 8,
          "revenue": -4,
          "businessValue": -5
        }
      },
      {
        "id": "C",
        "text": "Hybrid: seats include a generous usage allowance; overages billed with caps, alerts, and predictable committed-use discounts for enterprise",
        "score": 3,
        "feedback": "Keeps procurement predictability while aligning heavy usage to cost. Industry-standard evolution.",
        "tradeoffs": [
          "Billing complexity",
          "Migration comms"
        ],
        "consequenceMetrics": {
          "revenue": 7,
          "operatingCost": -5,
          "customerTrust": 4,
          "businessValue": 8
        }
      },
      {
        "id": "D",
        "text": "Throttle heavy users until they upgrade to a custom plan",
        "score": 1,
        "feedback": "Punishing your most engaged customers damages the relationships with the accounts most likely to expand.",
        "tradeoffs": [
          "Antagonizes power users",
          "Churn risk"
        ],
        "consequenceMetrics": {
          "operatingCost": -4,
          "customerTrust": -7,
          "revenue": -2
        }
      }
    ],
    "bestOptionId": "C",
    "bestAnswerExplanation": "Hybrid pricing with included allowances, transparent overages, and committed-use discounts aligns cost-to-serve without breaking procurement predictability.",
    "interviewInsight": "Tests pricing architecture skills: aligning value metric, cost-to-serve, and buyer psychology.",
    "learningPoint": "Pricing migrations should preserve predictability for buyers while fixing unit economics."
  },
  {
    "id": 5,
    "title": "Activation Metric Definition",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "Onboarding and Activation",
    "secondaryCompetencies": [
      "Metrics and Experimentation",
      "Customer Discovery"
    ],
    "scenario": "Signups grew 40% but 90-day retention is flat. The team debates the activation metric: 'completed profile', 'invited a teammate', or 'created 3 documents in week 1'. Each team prefers the metric their feature influences.",
    "question": "How do you choose?",
    "options": [
      {
        "id": "A",
        "text": "Pick 'completed profile' since it has the highest completion rate",
        "score": 0,
        "feedback": "Easy-to-hit vanity milestones don't predict retention; that's why teams like them.",
        "tradeoffs": [
          "Vanity metric",
          "False progress"
        ],
        "consequenceMetrics": {
          "businessValue": -4,
          "adoption": 1
        }
      },
      {
        "id": "B",
        "text": "Run correlation and cohort analysis: find which early behaviors most strongly predict 90-day retention, validate causally with an onboarding experiment, then standardize",
        "score": 3,
        "feedback": "Activation must be empirically derived from retention prediction, then causally validated—not chosen by team politics.",
        "tradeoffs": [
          "Analysis takes weeks"
        ],
        "consequenceMetrics": {
          "businessValue": 8,
          "adoption": 6,
          "stakeholderConfidence": 6
        }
      },
      {
        "id": "C",
        "text": "Track all three metrics equally and let each team optimize their own",
        "score": 1,
        "feedback": "Avoids the decision; teams optimize local metrics that may not move retention.",
        "tradeoffs": [
          "Diffused effort",
          "No shared goal"
        ],
        "consequenceMetrics": {
          "businessValue": -2,
          "teamMorale": 2
        }
      },
      {
        "id": "D",
        "text": "Copy the activation metric a famous PLG company uses",
        "score": 1,
        "feedback": "Benchmarks inspire hypotheses but your product's aha-moment is product-specific.",
        "tradeoffs": [
          "Wrong fit risk"
        ],
        "consequenceMetrics": {
          "businessValue": 1,
          "deliverySpeed": 4
        }
      }
    ],
    "bestOptionId": "B",
    "bestAnswerExplanation": "Derive activation from data: which week-1 behaviors predict long-term retention, validated with experiments. Then align all teams on it.",
    "interviewInsight": "Tests analytical rigor in defining PLG metrics.",
    "learningPoint": "Activation is discovered from retention data, not declared in a meeting."
  },
  {
    "id": 6,
    "title": "Integration Marketplace Strategy",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "Platform and Integrations",
    "secondaryCompetencies": [
      "Product Strategy",
      "Business and Monetization"
    ],
    "scenario": "Customers request 40+ integrations. Your team can build 4 per quarter with high quality. A public API + marketplace would let partners build, but requires 2 quarters of platform investment and developer relations.",
    "question": "What's your strategy?",
    "options": [
      {
        "id": "A",
        "text": "Build the top 4 requested integrations every quarter in-house",
        "score": 1,
        "feedback": "Sustainable quality but you'll never catch the long tail; competitors with marketplaces will outpace you.",
        "tradeoffs": [
          "Perpetual backlog",
          "Slow coverage"
        ],
        "consequenceMetrics": {
          "customerTrust": 4,
          "deliverySpeed": -3,
          "businessValue": 2
        }
      },
      {
        "id": "B",
        "text": "Build the API platform and marketplace now; freeze in-house integrations",
        "score": 1,
        "feedback": "Platform-first sounds right but freezing critical integrations for 6 months risks deals and retention today.",
        "tradeoffs": [
          "Near-term gaps",
          "Deal risk"
        ],
        "consequenceMetrics": {
          "businessValue": 4,
          "revenue": -4,
          "deliverySpeed": -5
        }
      },
      {
        "id": "C",
        "text": "Sequence both: keep building the 3-4 revenue-critical integrations in-house while investing in the public API, then launch the marketplace with committed launch partners",
        "score": 3,
        "feedback": "Protects near-term revenue while building the scalable path. Launch partners validate platform viability.",
        "tradeoffs": [
          "Split team focus",
          "Slower platform"
        ],
        "consequenceMetrics": {
          "businessValue": 8,
          "revenue": 6,
          "customerTrust": 5,
          "technicalDebt": -2
        }
      },
      {
        "id": "D",
        "text": "Acquire or white-label an iPaaS embedded integration vendor",
        "score": 2,
        "feedback": "Fast coverage, but per-integration quality and unit costs need scrutiny; can be a good bridge.",
        "tradeoffs": [
          "Vendor margin",
          "Less control"
        ],
        "consequenceMetrics": {
          "deliverySpeed": 7,
          "operatingCost": 4,
          "businessValue": 5
        }
      }
    ],
    "bestOptionId": "C",
    "bestAnswerExplanation": "Sequence: protect revenue-critical integrations in-house while building the platform, then scale through partners.",
    "interviewInsight": "Tests platform strategy thinking and sequencing under resource constraints.",
    "learningPoint": "Platforms are built while the product keeps winning, not instead of it."
  },
  {
    "id": 7,
    "title": "NRR Below Benchmark",
    "type": "scenario",
    "difficulty": "hard",
    "primaryCompetency": "Business and Monetization",
    "secondaryCompetencies": [
      "Churn and Retention",
      "Enterprise SaaS"
    ],
    "scenario": "Your B2B SaaS has 97% NRR; benchmark for your category is 110%. Gross retention is 88%, and expansion is minimal. The board wants a plan to reach 110% in 18 months.",
    "question": "Where do you focus first?",
    "options": [
      {
        "id": "A",
        "text": "Launch three new add-on products to drive expansion",
        "score": 1,
        "feedback": "Expansion products on a leaky base amplify churn exposure; fix gross retention first.",
        "tradeoffs": [
          "Leaky bucket",
          "Distraction"
        ],
        "consequenceMetrics": {
          "revenue": 3,
          "businessValue": -2,
          "deliverySpeed": -4
        }
      },
      {
        "id": "B",
        "text": "Diagnose gross churn drivers by cohort and segment, fix the top retention gaps, then layer expansion vectors (seats, usage tiers, add-ons) on the healthy base",
        "score": 3,
        "feedback": "NRR = retention foundation + expansion. Sequencing matters: retention first, then expansion.",
        "tradeoffs": [
          "18-month horizon",
          "Cross-team effort"
        ],
        "consequenceMetrics": {
          "revenue": 7,
          "businessValue": 8,
          "customerTrust": 5
        }
      },
      {
        "id": "C",
        "text": "Raise prices 15% at renewal for all accounts",
        "score": 0,
        "feedback": "Price increases on an already-churning base accelerate departures.",
        "tradeoffs": [
          "Churn acceleration",
          "Trust damage"
        ],
        "consequenceMetrics": {
          "revenue": 2,
          "customerTrust": -7,
          "businessValue": -4
        }
      },
      {
        "id": "D",
        "text": "Hire more CSMs to manually drive expansion conversations",
        "score": 1,
        "feedback": "Human-led expansion helps but doesn't scale and doesn't fix why customers leave.",
        "tradeoffs": [
          "High cost",
          "Doesn't scale"
        ],
        "consequenceMetrics": {
          "revenue": 3,
          "operatingCost": 6,
          "businessValue": 1
        }
      }
    ],
    "bestOptionId": "B",
    "bestAnswerExplanation": "Fix gross retention before investing in expansion. Diagnose churn by cohort, close the gaps, then build systematic expansion paths.",
    "interviewInsight": "Tests SaaS financial literacy: NRR decomposition and sequencing.",
    "learningPoint": "You can't expand your way out of a retention problem."
  },
  {
    "id": 8,
    "title": "A/B Test on Paywall",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "Metrics and Experimentation",
    "secondaryCompetencies": [
      "Pricing and Packaging",
      "Growth and Acquisition"
    ],
    "scenario": "A paywall experiment shows variant B increases trial-to-paid conversion 18% but trial signups drop 9%. The test ran 3 weeks with adequate power. Growth lead wants to ship; finance is unsure about net effect.",
    "question": "What do you do?",
    "options": [
      {
        "id": "A",
        "text": "Ship it: 18% conversion beats 9% signup loss",
        "score": 1,
        "feedback": "Probably right, but you haven't computed net paid customers or downstream retention differences yet.",
        "tradeoffs": [
          "Unverified net effect"
        ],
        "consequenceMetrics": {
          "revenue": 4,
          "businessValue": 3,
          "adoption": -2
        }
      },
      {
        "id": "B",
        "text": "Compute the full funnel: net new paid customers, LTV of converts by variant, and long-term cohort retention before deciding—then ship if net positive",
        "score": 3,
        "feedback": "The decision needs net revenue math, not two isolated percentages. Converts under pressure may retain differently.",
        "tradeoffs": [
          "Slower decision",
          "Requires LTV data"
        ],
        "consequenceMetrics": {
          "revenue": 6,
          "businessValue": 8,
          "stakeholderConfidence": 6
        }
      },
      {
        "id": "C",
        "text": "Rerun the test for another month to be sure",
        "score": 1,
        "feedback": "The test had adequate power; rerunning delays a likely-good decision without new information.",
        "tradeoffs": [
          "Opportunity cost"
        ],
        "consequenceMetrics": {
          "deliverySpeed": -5,
          "businessValue": 0
        }
      },
      {
        "id": "D",
        "text": "Ship to 50% of traffic permanently as a compromise",
        "score": 0,
        "feedback": "Permanent split traffic is not a decision; it complicates analytics and pricing consistency.",
        "tradeoffs": [
          "Analytics mess",
          "Inconsistent UX"
        ],
        "consequenceMetrics": {
          "businessValue": -4,
          "reliability": -3
        }
      }
    ],
    "bestOptionId": "B",
    "bestAnswerExplanation": "Translate funnel metrics into net paid customers and LTV before shipping. An 18% conversion lift can still be net negative if signups feed other channels.",
    "interviewInsight": "Tests whether you can integrate funnel metrics into a business decision.",
    "learningPoint": "Never decide on two percentages when the business runs on their product."
  },
  {
    "id": 9,
    "title": "Legacy Plan Migration",
    "type": "scenario",
    "difficulty": "hard",
    "primaryCompetency": "Pricing and Packaging",
    "secondaryCompetencies": [
      "Stakeholder Management",
      "Communication and Leadership"
    ],
    "scenario": "You have 8,000 customers on legacy plans priced 40% below current tiers, with features you want to retire. Finance wants them migrated within 6 months. Some legacy customers are vocal community members.",
    "question": "How do you run the migration?",
    "options": [
      {
        "id": "A",
        "text": "Force-migrate everyone at renewal with 30-day notice",
        "score": 0,
        "feedback": "Legally possible, reputationally disastrous. Vocal users will amplify the backlash.",
        "tradeoffs": [
          "Public backlash",
          "Churn spike"
        ],
        "consequenceMetrics": {
          "revenue": 3,
          "customerTrust": -9,
          "adoption": -6
        }
      },
      {
        "id": "B",
        "text": "Grandfather everyone forever to avoid conflict",
        "score": 1,
        "feedback": "Avoids pain but locks in margin drag and product complexity permanently.",
        "tradeoffs": [
          "Permanent drag",
          "Plan sprawl"
        ],
        "consequenceMetrics": {
          "customerTrust": 6,
          "revenue": -5,
          "technicalDebt": 6
        }
      },
      {
        "id": "C",
        "text": "Design a 12-month migration: map value gained per segment, offer loyalty pricing that lands between legacy and list, provide white-glove help for high-value accounts, and communicate the why early",
        "score": 3,
        "feedback": "Respects the social contract with early customers while converging plans. Longer runway plus visible value reduces backlash.",
        "tradeoffs": [
          "Slower than finance wants",
          "Discount cost"
        ],
        "consequenceMetrics": {
          "revenue": 5,
          "customerTrust": 6,
          "stakeholderConfidence": 6,
          "businessValue": 7
        }
      },
      {
        "id": "D",
        "text": "Migrate silently by degrading legacy plan support quality",
        "score": 0,
        "feedback": "Passive-aggressive degradation destroys trust and leaks to public forums.",
        "tradeoffs": [
          "Trust destruction",
          "Brand damage"
        ],
        "consequenceMetrics": {
          "customerTrust": -10,
          "revenue": -4
        }
      }
    ],
    "bestOptionId": "C",
    "bestAnswerExplanation": "Migrations succeed with runway, segment-aware value mapping, loyalty pricing, and early honest communication.",
    "interviewInsight": "Tests change management on monetization—one of the most delicate SaaS PM jobs.",
    "learningPoint": "Legacy customers judge you by how you treat them during transitions."
  },
  {
    "id": 10,
    "title": "Single-Tenant Demand",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "Technical Trade-offs",
    "secondaryCompetencies": [
      "Enterprise SaaS",
      "Security and Compliance"
    ],
    "scenario": "A $500k/year prospect demands single-tenant deployment for data isolation. Your architecture is multi-tenant. Engineering estimates single-tenant support at 2 quarters plus permanent ops overhead per instance.",
    "question": "What do you do?",
    "options": [
      {
        "id": "A",
        "text": "Commit to single-tenant to close the deal",
        "score": 1,
        "feedback": "One deal rarely justifies a permanent architecture fork; ops overhead compounds with each instance.",
        "tradeoffs": [
          "Ops fork",
          "Margin drag"
        ],
        "consequenceMetrics": {
          "revenue": 6,
          "technicalDebt": 8,
          "operatingCost": 7
        }
      },
      {
        "id": "B",
        "text": "Probe the underlying requirement: often 'single-tenant' means data isolation guarantees, which may be satisfiable with logical isolation, dedicated DB schemas, CMEK, and compliance attestations",
        "score": 3,
        "feedback": "Enterprise asks are often proxies. Solving the real requirement (isolation, auditability) preserves your architecture.",
        "tradeoffs": [
          "May still lose deal",
          "Security work"
        ],
        "consequenceMetrics": {
          "revenue": 5,
          "businessValue": 7,
          "complianceRisk": -4,
          "technicalDebt": -2
        }
      },
      {
        "id": "C",
        "text": "Decline the deal and stay multi-tenant only",
        "score": 1,
        "feedback": "Defensible, but premature before probing what the prospect actually needs.",
        "tradeoffs": [
          "Lost revenue",
          "No learning"
        ],
        "consequenceMetrics": {
          "revenue": -5,
          "businessValue": 0
        }
      },
      {
        "id": "D",
        "text": "Offer to host in the customer's cloud account as a one-off favor",
        "score": 0,
        "feedback": "Ad-hoc BYOC without productization creates an unsupported snowflake deployment.",
        "tradeoffs": [
          "Unsupportable",
          "Incident risk"
        ],
        "consequenceMetrics": {
          "technicalDebt": 9,
          "reliability": -6,
          "revenue": 4
        }
      }
    ],
    "bestOptionId": "B",
    "bestAnswerExplanation": "Decompose the ask: most single-tenant demands are isolation/compliance requirements solvable within multi-tenant architecture.",
    "interviewInsight": "Tests whether you translate enterprise asks into real requirements before pricing architecture changes.",
    "learningPoint": "Ask what the requirement protects against before buying it with architecture."
  },
  {
    "id": 11,
    "title": "Onboarding Drop-Off Cliff",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "Onboarding and Activation",
    "secondaryCompetencies": [
      "UX and Design Collaboration",
      "Metrics and Experimentation"
    ],
    "scenario": "Funnel data shows 55% of new signups abandon during workspace setup, which requires 7 steps including inviting teammates and connecting a data source. Completion of setup correlates strongly with retention.",
    "question": "What's your approach?",
    "options": [
      {
        "id": "A",
        "text": "Make all setup steps optional and let users skip to the product",
        "score": 1,
        "feedback": "Reduces friction but users who skip may never reach the aha moment that drives retention.",
        "tradeoffs": [
          "Empty-state product",
          "Lower activation"
        ],
        "consequenceMetrics": {
          "adoption": 3,
          "businessValue": -2,
          "customerTrust": 1
        }
      },
      {
        "id": "B",
        "text": "Add a progress bar and motivational copy to the existing 7 steps",
        "score": 1,
        "feedback": "Cosmetic. The steps themselves are the friction, not their presentation.",
        "tradeoffs": [
          "Marginal improvement"
        ],
        "consequenceMetrics": {
          "adoption": 1,
          "businessValue": 0
        }
      },
      {
        "id": "C",
        "text": "Rebuild onboarding around time-to-first-value: defer non-essential steps, pre-populate with sample data, make teammate invites contextual, and A/B test the new flow",
        "score": 3,
        "feedback": "Attacks the friction itself: get users to value fast, collect the rest progressively when it's contextually motivated.",
        "tradeoffs": [
          "Rebuild effort",
          "Sample-data design"
        ],
        "consequenceMetrics": {
          "adoption": 8,
          "businessValue": 7,
          "customerTrust": 5
        }
      },
      {
        "id": "D",
        "text": "Have sales-assist reps call every signup to walk them through setup",
        "score": 0,
        "feedback": "Human onboarding for a self-serve funnel doesn't scale and misdiagnoses a product problem as a staffing one.",
        "tradeoffs": [
          "Unscalable",
          "High CAC"
        ],
        "consequenceMetrics": {
          "operatingCost": 8,
          "adoption": 2,
          "businessValue": -3
        }
      }
    ],
    "bestOptionId": "C",
    "bestAnswerExplanation": "Restructure onboarding around time-to-first-value with progressive profiling, then validate with experiments.",
    "interviewInsight": "Tests PLG onboarding craft: friction versus activation trade-offs.",
    "learningPoint": "Every onboarding step must earn its place before first value."
  },
  {
    "id": 12,
    "title": "Feature Sunset Backlash",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "Communication and Leadership",
    "secondaryCompetencies": [
      "Stakeholder Management",
      "Product Execution"
    ],
    "scenario": "You announced deprecation of a niche feature used by 4% of accounts to reduce maintenance burden. A vocal group including two large customers started a petition. Twitter is noticing.",
    "question": "How do you handle it?",
    "options": [
      {
        "id": "A",
        "text": "Reverse the deprecation to stop the noise",
        "score": 1,
        "feedback": "Teaches the market that outrage reverses decisions; maintenance burden remains.",
        "tradeoffs": [
          "Precedent set",
          "Debt remains"
        ],
        "consequenceMetrics": {
          "customerTrust": 3,
          "technicalDebt": 6,
          "stakeholderConfidence": -4
        }
      },
      {
        "id": "B",
        "text": "Proceed on schedule; 4% is acceptable loss",
        "score": 0,
        "feedback": "Raw percentage hides who the users are—two large accounts and community amplifiers.",
        "tradeoffs": [
          "Key account churn",
          "Public backlash"
        ],
        "consequenceMetrics": {
          "customerTrust": -8,
          "revenue": -6
        }
      },
      {
        "id": "C",
        "text": "Engage directly: understand the jobs the feature serves, provide migration paths or API alternatives, extend the timeline for affected accounts, and publish transparent reasoning",
        "score": 3,
        "feedback": "Deprecations succeed with migration paths, honest rationale, and flexibility for the most affected.",
        "tradeoffs": [
          "Longer timeline",
          "Migration eng work"
        ],
        "consequenceMetrics": {
          "customerTrust": 6,
          "stakeholderConfidence": 6,
          "technicalDebt": -3,
          "deliverySpeed": -2
        }
      },
      {
        "id": "D",
        "text": "Offer the feature as a paid enterprise add-on to make it self-funding",
        "score": 2,
        "feedback": "Creative and sometimes right, but check whether maintenance cost actually gets covered and whether it fragments the product.",
        "tradeoffs": [
          "Plan complexity"
        ],
        "consequenceMetrics": {
          "revenue": 3,
          "technicalDebt": 2,
          "customerTrust": 2
        }
      }
    ],
    "bestOptionId": "C",
    "bestAnswerExplanation": "Sunset with migration paths, transparent reasoning, and extended runway for the most affected accounts.",
    "interviewInsight": "Tests deprecation management—retiring features is as important as shipping them.",
    "learningPoint": "You're judged by how you retire features, not just how you launch them."
  },
  {
    "id": 13,
    "title": "Competitor Undercuts Pricing 50%",
    "type": "scenario",
    "difficulty": "hard",
    "primaryCompetency": "Product Strategy",
    "secondaryCompetencies": [
      "Pricing and Packaging",
      "Business and Monetization"
    ],
    "scenario": "A well-funded competitor launches at half your price with 80% of your features. Two customers cited it in renewal negotiations. Sales demands price matching authority.",
    "question": "What's your response?",
    "options": [
      {
        "id": "A",
        "text": "Match their pricing across the board",
        "score": 0,
        "feedback": "A race to the bottom against a better-funded player destroys margin without addressing value perception.",
        "tradeoffs": [
          "Margin destruction",
          "Price war"
        ],
        "consequenceMetrics": {
          "revenue": -6,
          "businessValue": -6,
          "operatingCost": 2
        }
      },
      {
        "id": "B",
        "text": "Ignore them; competitors on price always fade",
        "score": 1,
        "feedback": "Complacency. Some price disruptors reset market expectations permanently.",
        "tradeoffs": [
          "Share erosion",
          "Blind spot"
        ],
        "consequenceMetrics": {
          "revenue": -3,
          "businessValue": -2
        }
      },
      {
        "id": "C",
        "text": "Sharpen value differentiation: quantify ROI of your unique 20%, arm sales with switching-cost and TCO narratives, add retention offers for at-risk renewals only, and monitor win/loss data",
        "score": 3,
        "feedback": "Compete on quantified value, apply discounts surgically to at-risk accounts, and instrument the actual competitive impact.",
        "tradeoffs": [
          "Requires ROI evidence",
          "Selective discount cost"
        ],
        "consequenceMetrics": {
          "revenue": 5,
          "businessValue": 8,
          "stakeholderConfidence": 7,
          "customerTrust": 4
        }
      },
      {
        "id": "D",
        "text": "Accelerate roadmap to add more features than them",
        "score": 1,
        "feedback": "Feature-count races miss the point; they're winning on price positioning, not capability.",
        "tradeoffs": [
          "Feature bloat",
          "Team burnout"
        ],
        "consequenceMetrics": {
          "deliverySpeed": -4,
          "businessValue": 1,
          "teamMorale": -4
        }
      }
    ],
    "bestOptionId": "C",
    "bestAnswerExplanation": "Respond with quantified value differentiation and surgical retention offers, not blanket price cuts.",
    "interviewInsight": "Tests competitive strategy composure under pricing pressure.",
    "learningPoint": "Price wars are won by the better-funded side; value wars are won by evidence."
  },
  {
    "id": 14,
    "title": "API Breaking Change",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "Platform and Integrations",
    "secondaryCompetencies": [
      "Technical Trade-offs",
      "Communication and Leadership"
    ],
    "scenario": "To fix a security flaw and improve performance, engineering must change API response formats, breaking ~300 customer integrations. Some customers have no engineering staff to update quickly.",
    "question": "How do you roll this out?",
    "options": [
      {
        "id": "A",
        "text": "Ship the breaking change with 2 weeks notice; security justifies speed",
        "score": 1,
        "feedback": "Security matters, but breaking 300 integrations with 2 weeks notice creates its own crisis. Check if the vulnerability requires that speed.",
        "tradeoffs": [
          "Integration outages",
          "Support flood"
        ],
        "consequenceMetrics": {
          "securityRisk": -6,
          "customerTrust": -7,
          "reliability": -4
        }
      },
      {
        "id": "B",
        "text": "Version the API: patch the security flaw in v1 where possible, launch v2 with the new format, run both with a 12-month deprecation window, migration guides, and usage-based nudges",
        "score": 3,
        "feedback": "Standard platform practice: decouple the urgent security fix from the format migration and give integrators a real runway.",
        "tradeoffs": [
          "Dual-version maintenance"
        ],
        "consequenceMetrics": {
          "securityRisk": -7,
          "customerTrust": 7,
          "reliability": 6,
          "technicalDebt": 2
        }
      },
      {
        "id": "C",
        "text": "Delay everything until all customers confirm readiness",
        "score": 0,
        "feedback": "You'll wait forever, and the security flaw stays open.",
        "tradeoffs": [
          "Security exposure",
          "Indefinite delay"
        ],
        "consequenceMetrics": {
          "securityRisk": 8,
          "deliverySpeed": -8
        }
      },
      {
        "id": "D",
        "text": "Auto-migrate customer integrations by rewriting their calls server-side",
        "score": 1,
        "feedback": "Magical translation layers become permanent unowned complexity and can silently corrupt data.",
        "tradeoffs": [
          "Hidden complexity",
          "Silent failures"
        ],
        "consequenceMetrics": {
          "technicalDebt": 8,
          "reliability": -5
        }
      }
    ],
    "bestOptionId": "B",
    "bestAnswerExplanation": "Separate the security patch from the breaking migration; version the API with a real deprecation runway.",
    "interviewInsight": "Tests platform stewardship: your API contract is a product promise.",
    "learningPoint": "Breaking changes are managed with versions and runways, not announcements."
  },
  {
    "id": 15,
    "title": "Sales-Led vs PLG Tension",
    "type": "scenario",
    "difficulty": "hard",
    "primaryCompetency": "Growth and Acquisition",
    "secondaryCompetencies": [
      "Product Strategy",
      "Stakeholder Management"
    ],
    "scenario": "Your PLG motion drives 60% of new revenue at low CAC. The new CRO wants to gate the free trial behind sales demos to increase deal sizes. Early data shows demo-gated leads close 2x larger but at 5x CAC and 4x cycle time.",
    "question": "What do you recommend?",
    "options": [
      {
        "id": "A",
        "text": "Gate everything behind demos; larger deals win",
        "score": 0,
        "feedback": "Destroys your efficient acquisition engine for a metric (deal size) that ignores CAC and velocity.",
        "tradeoffs": [
          "CAC explosion",
          "Volume collapse"
        ],
        "consequenceMetrics": {
          "revenue": -4,
          "operatingCost": 7,
          "businessValue": -6
        }
      },
      {
        "id": "B",
        "text": "Keep pure PLG and reject the CRO's direction",
        "score": 1,
        "feedback": "The data on larger deals is real; outright rejection wastes a legitimate signal and burns the relationship.",
        "tradeoffs": [
          "Political conflict",
          "Missed enterprise"
        ],
        "consequenceMetrics": {
          "stakeholderConfidence": -6,
          "revenue": -2,
          "businessValue": 1
        }
      },
      {
        "id": "C",
        "text": "Segment the funnel: self-serve PLG for SMB stays open; route high-intent enterprise signals (size, domain, usage velocity) to sales-assist with product-qualified-lead scoring",
        "score": 3,
        "feedback": "Hybrid PLG+sales-assist captures both economics: low CAC volume and high-touch large deals, routed by fit.",
        "tradeoffs": [
          "Routing complexity",
          "Attribution fights"
        ],
        "consequenceMetrics": {
          "revenue": 8,
          "businessValue": 8,
          "stakeholderConfidence": 6,
          "operatingCost": 2
        }
      },
      {
        "id": "D",
        "text": "Run a 6-month 50/50 experiment gating half of all trials",
        "score": 1,
        "feedback": "Experimenting is good instinct, but gating half of ALL trials including obvious SMB self-serve is an expensive blunt design.",
        "tradeoffs": [
          "Revenue risk in test"
        ],
        "consequenceMetrics": {
          "businessValue": 3,
          "revenue": -2
        }
      }
    ],
    "bestOptionId": "C",
    "bestAnswerExplanation": "Layer sales-assist on top of PLG using product-qualified leads, rather than replacing one motion with the other.",
    "interviewInsight": "Tests go-to-market architecture and CRO stakeholder navigation.",
    "learningPoint": "PLG and sales-led are layers to route between, not religions to choose."
  },
  {
    "id": 16,
    "title": "Downtime Incident Communication",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "Post-Launch Monitoring",
    "secondaryCompetencies": [
      "Communication and Leadership",
      "Enterprise SaaS"
    ],
    "scenario": "A database failure causes 4 hours of downtime during business hours. Enterprise customers with 99.9% SLAs are affected. Engineering is still writing the RCA. Support is improvising responses.",
    "question": "What do you own as PM in the first day?",
    "options": [
      {
        "id": "A",
        "text": "Wait for the complete RCA before any customer communication",
        "score": 0,
        "feedback": "Silence during an outage is the worst communication strategy; customers assume the worst.",
        "tradeoffs": [
          "Trust erosion",
          "Escalations"
        ],
        "consequenceMetrics": {
          "customerTrust": -8,
          "stakeholderConfidence": -6
        }
      },
      {
        "id": "B",
        "text": "Coordinate immediate honest holding comms via status page, align support on one message, notify SLA-affected accounts proactively with credits process, and commit to a dated post-mortem",
        "score": 3,
        "feedback": "Structured incident comms: fast honest updates, consistent messaging, proactive SLA handling, and a dated commitment for the full story.",
        "tradeoffs": [
          "Admitting fault early"
        ],
        "consequenceMetrics": {
          "customerTrust": 6,
          "stakeholderConfidence": 6,
          "complianceRisk": -4
        }
      },
      {
        "id": "C",
        "text": "Send a marketing-toned email minimizing the impact",
        "score": 0,
        "feedback": "Spin during incidents is fuel for churn and screenshots.",
        "tradeoffs": [
          "Backlash",
          "Credibility loss"
        ],
        "consequenceMetrics": {
          "customerTrust": -9
        }
      },
      {
        "id": "D",
        "text": "Let support handle it case by case; PM shouldn't be involved in ops",
        "score": 1,
        "feedback": "Incident communication is a product trust surface; uncoordinated responses fragment the story.",
        "tradeoffs": [
          "Inconsistent messaging"
        ],
        "consequenceMetrics": {
          "customerTrust": -4,
          "stakeholderConfidence": -3
        }
      }
    ],
    "bestOptionId": "B",
    "bestAnswerExplanation": "Own the communication cadence: status page, aligned support messaging, proactive SLA outreach, dated post-mortem.",
    "interviewInsight": "Tests incident leadership—PMs own trust, not just features.",
    "learningPoint": "In outages, communication quality is remembered longer than the downtime."
  },
  {
    "id": 17,
    "title": "NPS Drop Investigation",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "Metrics and Experimentation",
    "secondaryCompetencies": [
      "Customer Discovery",
      "Post-Launch Monitoring"
    ],
    "scenario": "Quarterly NPS dropped from 42 to 28. The survey response rate also doubled after you moved the survey from email to in-app. Leadership is alarmed and wants an action plan.",
    "question": "What do you do first?",
    "options": [
      {
        "id": "A",
        "text": "Present an action plan to improve NPS by 15 points",
        "score": 0,
        "feedback": "You'd be fixing a number you don't understand; the methodology change likely explains much of the shift.",
        "tradeoffs": [
          "Wrong actions",
          "Wasted effort"
        ],
        "consequenceMetrics": {
          "businessValue": -4,
          "stakeholderConfidence": 2
        }
      },
      {
        "id": "B",
        "text": "Check comparability first: the channel change altered the respondent mix; segment scores by channel, tenure, and plan before interpreting the drop, then investigate real detractor themes",
        "score": 3,
        "feedback": "Methodology changes invalidate naive comparisons. Establish the true signal, then act on verbatim themes.",
        "tradeoffs": [
          "Less dramatic narrative"
        ],
        "consequenceMetrics": {
          "businessValue": 7,
          "stakeholderConfidence": 6,
          "customerTrust": 3
        }
      },
      {
        "id": "C",
        "text": "Revert the survey to email to restore the old baseline",
        "score": 1,
        "feedback": "Restores comparability but in-app sampling is likely more representative; you'd be optimizing the thermometer.",
        "tradeoffs": [
          "Worse data",
          "Metric gaming"
        ],
        "consequenceMetrics": {
          "businessValue": -2,
          "stakeholderConfidence": 1
        }
      },
      {
        "id": "D",
        "text": "Ignore NPS; it's a vanity metric anyway",
        "score": 1,
        "feedback": "NPS has flaws but detractor verbatims contain real signal; dismissing it wastes information and alienates leadership.",
        "tradeoffs": [
          "Lost signal",
          "Political cost"
        ],
        "consequenceMetrics": {
          "stakeholderConfidence": -5,
          "businessValue": -1
        }
      }
    ],
    "bestOptionId": "B",
    "bestAnswerExplanation": "Verify metric comparability before reacting: channel changes shift respondent mix. Then mine detractor themes for real actions.",
    "interviewInsight": "Tests measurement literacy: distinguishing metric artifacts from real signal.",
    "learningPoint": "When a metric moves, first ask if the measurement moved."
  },
  {
    "id": 18,
    "title": "Enterprise Custom Feature Request",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "Enterprise SaaS",
    "secondaryCompetencies": [
      "Prioritization and MVP Scoping",
      "Stakeholder Management"
    ],
    "scenario": "Your largest customer (12% of ARR) requests a custom approval workflow that no other customer has asked for. Their renewal is in 4 months. Building it takes a squad 8 weeks.",
    "question": "How do you respond?",
    "options": [
      {
        "id": "A",
        "text": "Build exactly what they asked for; 12% of ARR justifies it",
        "score": 1,
        "feedback": "Concentration risk is real, but bespoke builds create precedent and permanent maintenance for one account.",
        "tradeoffs": [
          "Custom debt",
          "Precedent"
        ],
        "consequenceMetrics": {
          "revenue": 6,
          "technicalDebt": 6,
          "businessValue": 0
        }
      },
      {
        "id": "B",
        "text": "Decline; you build for markets, not accounts",
        "score": 1,
        "feedback": "Principled but reckless with 12% of ARR at renewal. Explore generalization first.",
        "tradeoffs": [
          "Renewal risk"
        ],
        "consequenceMetrics": {
          "revenue": -6,
          "businessValue": 1
        }
      },
      {
        "id": "C",
        "text": "Dig into the underlying workflow problem, design a configurable approval framework that serves their case AND has evidence of broader demand, and phase delivery around their renewal",
        "score": 3,
        "feedback": "Converts a bespoke ask into a platform capability, protecting the renewal and creating market value.",
        "tradeoffs": [
          "Slower than bespoke",
          "Design effort"
        ],
        "consequenceMetrics": {
          "revenue": 6,
          "businessValue": 8,
          "customerTrust": 6,
          "technicalDebt": -2
        }
      },
      {
        "id": "D",
        "text": "Offer professional services to build it as a paid customization",
        "score": 2,
        "feedback": "Viable if you have a services arm and clean extension points; watch for fork maintenance.",
        "tradeoffs": [
          "Services overhead"
        ],
        "consequenceMetrics": {
          "revenue": 4,
          "technicalDebt": 3,
          "businessValue": 2
        }
      }
    ],
    "bestOptionId": "C",
    "bestAnswerExplanation": "Generalize the request into configurable platform capability with broader demand evidence, sequenced around the renewal.",
    "interviewInsight": "Tests handling of whale-account pressure without forking the product.",
    "learningPoint": "The answer to bespoke asks is usually a configurable primitive, not a custom build."
  },
  {
    "id": 19,
    "title": "Trial Length Experiment",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "Growth and Acquisition",
    "secondaryCompetencies": [
      "Metrics and Experimentation",
      "Onboarding and Activation"
    ],
    "scenario": "Your 30-day free trial converts at 11%. A PM proposes cutting to 7 days, citing a blog that shorter trials convert better. Median time-to-first-value in your product is currently 9 days.",
    "question": "What do you do?",
    "options": [
      {
        "id": "A",
        "text": "Cut to 7 days; urgency drives conversion",
        "score": 0,
        "feedback": "Your median time-to-value is 9 days—a 7-day trial ends before most users experience value.",
        "tradeoffs": [
          "Trial ends pre-value",
          "Conversion drop"
        ],
        "consequenceMetrics": {
          "revenue": -5,
          "adoption": -6,
          "customerTrust": -3
        }
      },
      {
        "id": "B",
        "text": "First shorten time-to-first-value through onboarding improvements, then test trial length once users reach value within the window",
        "score": 3,
        "feedback": "Trial length must exceed time-to-value. Fix the value delivery speed first, then optimize the window.",
        "tradeoffs": [
          "Two-step sequence",
          "Slower"
        ],
        "consequenceMetrics": {
          "adoption": 7,
          "revenue": 6,
          "businessValue": 7
        }
      },
      {
        "id": "C",
        "text": "Test 7 vs 30 days in an A/B test right now",
        "score": 2,
        "feedback": "Experimentation instinct is right, but you can predict the outcome from time-to-value data; the test wastes a cycle unless paired with onboarding fixes.",
        "tradeoffs": [
          "Predictable failure arm"
        ],
        "consequenceMetrics": {
          "businessValue": 3,
          "adoption": -1
        }
      },
      {
        "id": "D",
        "text": "Extend the trial to 60 days to give more time for value",
        "score": 1,
        "feedback": "More runway without urgency often just delays decisions and inflates pipeline age.",
        "tradeoffs": [
          "Longer cycles",
          "Delayed revenue"
        ],
        "consequenceMetrics": {
          "revenue": -2,
          "adoption": 2
        }
      }
    ],
    "bestOptionId": "B",
    "bestAnswerExplanation": "Trial length is bounded below by time-to-value. Shorten time-to-value first, then tune the trial window.",
    "interviewInsight": "Tests systems thinking connecting onboarding speed to monetization mechanics.",
    "learningPoint": "Optimize time-to-value before optimizing the trial clock."
  },
  {
    "id": 20,
    "title": "Roadmap Transparency Dilemma",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "Stakeholder Management",
    "secondaryCompetencies": [
      "Communication and Leadership",
      "Enterprise SaaS"
    ],
    "scenario": "Sales wants a public 12-month roadmap with dates to close enterprise deals. Engineering strongly opposes committed dates given discovery uncertainty. Two deals reference roadmap visibility as a requirement.",
    "question": "What do you establish?",
    "options": [
      {
        "id": "A",
        "text": "Publish a detailed 12-month roadmap with quarterly dates",
        "score": 0,
        "feedback": "Committed public dates on uncertain discovery guarantee broken promises at enterprise scale.",
        "tradeoffs": [
          "Broken promises",
          "Legal exposure"
        ],
        "consequenceMetrics": {
          "stakeholderConfidence": -5,
          "customerTrust": -6,
          "complianceRisk": 4
        }
      },
      {
        "id": "B",
        "text": "Refuse any roadmap visibility; ship when ready",
        "score": 1,
        "feedback": "Enterprise buyers legitimately need directional confidence for multi-year commitments.",
        "tradeoffs": [
          "Deal friction"
        ],
        "consequenceMetrics": {
          "revenue": -4,
          "stakeholderConfidence": -3
        }
      },
      {
        "id": "C",
        "text": "Publish a thematic now/next/later roadmap publicly, share dated commitments only under NDA for capabilities already in delivery, with clear disclaimer language vetted by legal",
        "score": 3,
        "feedback": "Industry-standard tiered transparency: direction publicly, dates only where certainty exists.",
        "tradeoffs": [
          "Sales wants more",
          "Maintenance"
        ],
        "consequenceMetrics": {
          "stakeholderConfidence": 6,
          "customerTrust": 6,
          "revenue": 5,
          "complianceRisk": -3
        }
      },
      {
        "id": "D",
        "text": "Let each AE share whatever roadmap version helps their deal",
        "score": 0,
        "feedback": "Uncontrolled roadmap promises are a churn and legal timebomb.",
        "tradeoffs": [
          "Inconsistent promises",
          "Trust debt"
        ],
        "consequenceMetrics": {
          "customerTrust": -8,
          "complianceRisk": 6
        }
      }
    ],
    "bestOptionId": "C",
    "bestAnswerExplanation": "Tiered transparency: public themes, NDA'd dates only for in-delivery items, legal-vetted language.",
    "interviewInsight": "Tests roadmap governance balancing sales enablement with delivery reality.",
    "learningPoint": "Roadmaps build trust when confidence levels are explicit."
  },
  {
    "id": 21,
    "title": "Mobile App Parity Pressure",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "Prioritization and MVP Scoping",
    "secondaryCompetencies": [
      "Product Strategy",
      "UX and Design Collaboration"
    ],
    "scenario": "Customers rate your mobile app 3.1 stars, mostly complaining it lacks desktop features. Usage data shows mobile sessions are short, task-specific (approvals, notifications, quick edits). Building full parity would take 3 quarters.",
    "question": "What's your mobile strategy?",
    "options": [
      {
        "id": "A",
        "text": "Commit to full desktop-mobile parity over 3 quarters",
        "score": 0,
        "feedback": "Parity ignores how users actually use mobile: short task-specific sessions, not desktop replacement.",
        "tradeoffs": [
          "Wrong investment",
          "Opportunity cost"
        ],
        "consequenceMetrics": {
          "businessValue": -5,
          "deliverySpeed": -7
        }
      },
      {
        "id": "B",
        "text": "Double down on the observed mobile jobs: make approvals, notifications, and quick edits excellent; set expectations clearly about mobile's role",
        "score": 3,
        "feedback": "Usage data shows mobile is a companion, not a replacement. Excel at the actual jobs instead of chasing parity ratings.",
        "tradeoffs": [
          "Some users still complain"
        ],
        "consequenceMetrics": {
          "adoption": 7,
          "businessValue": 7,
          "customerTrust": 5
        }
      },
      {
        "id": "C",
        "text": "Deprecate the mobile app and invest in responsive web",
        "score": 1,
        "feedback": "Mobile-web can work, but push notifications and offline approval flows usually justify native for these jobs.",
        "tradeoffs": [
          "Notification limits",
          "Perception hit"
        ],
        "consequenceMetrics": {
          "operatingCost": -4,
          "adoption": -4,
          "businessValue": 1
        }
      },
      {
        "id": "D",
        "text": "Survey users asking which desktop features they want on mobile",
        "score": 1,
        "feedback": "Stated preference will say 'everything'; you already have behavioral data showing what mobile is for.",
        "tradeoffs": [
          "Misleading data"
        ],
        "consequenceMetrics": {
          "businessValue": 0,
          "deliverySpeed": -2
        }
      }
    ],
    "bestOptionId": "B",
    "bestAnswerExplanation": "Optimize mobile for its observed jobs-to-be-done rather than pursuing parity with desktop.",
    "interviewInsight": "Tests behavioral-data-driven scoping versus rating-driven reaction.",
    "learningPoint": "Build for how users actually use each platform, not for feature checklists."
  },
  {
    "id": 22,
    "title": "Support Ticket Deflection Target",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "Product Execution",
    "secondaryCompetencies": [
      "Post-Launch Monitoring",
      "UX and Design Collaboration"
    ],
    "scenario": "Support costs grew 60% YoY. The COO sets a target: deflect 40% of tickets via in-product help. Analysis shows top ticket drivers are a confusing permissions model (31%) and billing surprises (22%).",
    "question": "How do you hit the target?",
    "options": [
      {
        "id": "A",
        "text": "Build a help center widget and AI chatbot over existing docs",
        "score": 1,
        "feedback": "Deflection tooling on top of confusing product treats symptoms; the top drivers are product defects.",
        "tradeoffs": [
          "Symptom treatment",
          "Partial impact"
        ],
        "consequenceMetrics": {
          "operatingCost": -3,
          "customerTrust": 1,
          "businessValue": 2
        }
      },
      {
        "id": "B",
        "text": "Fix the root causes: redesign the permissions UX and make billing transparent (previews, alerts, prorations shown), then add self-serve help for the remainder",
        "score": 3,
        "feedback": "53% of tickets trace to two fixable product problems. Eliminating causes beats deflecting symptoms.",
        "tradeoffs": [
          "Bigger upfront effort"
        ],
        "consequenceMetrics": {
          "operatingCost": -6,
          "customerTrust": 7,
          "businessValue": 8,
          "adoption": 4
        }
      },
      {
        "id": "C",
        "text": "Add friction to ticket submission (mandatory forms, search-first)",
        "score": 0,
        "feedback": "Suppressing tickets doesn't reduce the problems; it hides them while frustrating users.",
        "tradeoffs": [
          "Hidden problems",
          "Frustration"
        ],
        "consequenceMetrics": {
          "operatingCost": -4,
          "customerTrust": -7
        }
      },
      {
        "id": "D",
        "text": "Outsource tier-1 support to a cheaper provider",
        "score": 1,
        "feedback": "Cost relief without addressing why tickets exist; quality often drops too.",
        "tradeoffs": [
          "Quality risk",
          "Root cause remains"
        ],
        "consequenceMetrics": {
          "operatingCost": -5,
          "customerTrust": -3
        }
      }
    ],
    "bestOptionId": "B",
    "bestAnswerExplanation": "Attack the product root causes generating the majority of tickets; deflection tooling handles the residue.",
    "interviewInsight": "Tests whether you treat support volume as product feedback.",
    "learningPoint": "Every support ticket cluster is a product backlog item wearing a disguise."
  },
  {
    "id": 23,
    "title": "GDPR Deletion Request Gap",
    "type": "scenario",
    "difficulty": "hard",
    "primaryCompetency": "Security and Compliance",
    "secondaryCompetencies": [
      "Enterprise SaaS",
      "Technical Trade-offs"
    ],
    "scenario": "Legal discovers your data deletion process misses backups and analytics pipelines: 'deleted' user data persists up to 14 months. GDPR requires deletion without undue delay. An EU enterprise customer just asked for a deletion audit.",
    "question": "What do you do?",
    "options": [
      {
        "id": "A",
        "text": "Answer the audit describing only the primary-database deletion",
        "score": 0,
        "feedback": "Materially misleading response to a compliance audit; catastrophic if discovered.",
        "tradeoffs": [
          "Regulatory exposure",
          "Contract breach"
        ],
        "consequenceMetrics": {
          "complianceRisk": 10,
          "customerTrust": -9
        }
      },
      {
        "id": "B",
        "text": "Treat it as a compliance program: map all data stores, define deletion SLAs per store with legal, implement backup expiry and pipeline purging, and respond to the audit honestly with the remediation plan and dates",
        "score": 3,
        "feedback": "Honest disclosure plus a credible dated remediation plan is the defensible path regulators and enterprise customers respect.",
        "tradeoffs": [
          "Uncomfortable disclosure",
          "Eng investment"
        ],
        "consequenceMetrics": {
          "complianceRisk": -8,
          "customerTrust": 6,
          "stakeholderConfidence": 5,
          "deliverySpeed": -3
        }
      },
      {
        "id": "C",
        "text": "Quietly fix the pipelines first, respond to the audit after everything is clean",
        "score": 1,
        "feedback": "Delaying an audit response while gaps exist increases legal risk; regulators punish concealment more than gaps.",
        "tradeoffs": [
          "Delay risk",
          "Discovery risk"
        ],
        "consequenceMetrics": {
          "complianceRisk": 4,
          "customerTrust": -3
        }
      },
      {
        "id": "D",
        "text": "Add a disclaimer to the privacy policy about retention windows",
        "score": 1,
        "feedback": "Disclosure helps but doesn't satisfy GDPR deletion obligations by itself.",
        "tradeoffs": [
          "Non-compliance remains"
        ],
        "consequenceMetrics": {
          "complianceRisk": 5,
          "customerTrust": -2
        }
      }
    ],
    "bestOptionId": "B",
    "bestAnswerExplanation": "Map data stores, define deletion SLAs, remediate, and respond to the audit honestly with dated plans.",
    "interviewInsight": "Tests compliance ownership: privacy is an end-to-end data lifecycle problem.",
    "learningPoint": "Deletion means every copy, including backups and pipelines."
  },
  {
    "id": 24,
    "title": "Design Debt vs Feature Velocity",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "UX and Design Collaboration",
    "secondaryCompetencies": [
      "Product Execution",
      "Prioritization and MVP Scoping"
    ],
    "scenario": "Your product has 4 different date pickers, 3 modal patterns, and inconsistent navigation built over 3 years. Design wants a quarter for a design system. Sales-driven feature requests fill the roadmap.",
    "question": "How do you handle design debt?",
    "options": [
      {
        "id": "A",
        "text": "Dedicate a full quarter exclusively to the design system",
        "score": 1,
        "feedback": "All-or-nothing pauses learning and revenue features; design systems built in isolation often miss real needs.",
        "tradeoffs": [
          "Roadmap freeze",
          "Isolation risk"
        ],
        "consequenceMetrics": {
          "deliverySpeed": -7,
          "businessValue": 0,
          "teamMorale": 3
        }
      },
      {
        "id": "B",
        "text": "Reject the design system; consistency doesn't close deals",
        "score": 0,
        "feedback": "Design debt compounds: slower delivery, buggier UI, worse onboarding. It eventually does affect deals.",
        "tradeoffs": [
          "Compounding debt",
          "Velocity decay"
        ],
        "consequenceMetrics": {
          "technicalDebt": 7,
          "customerTrust": -3,
          "teamMorale": -5
        }
      },
      {
        "id": "C",
        "text": "Adopt an incremental strategy: establish core tokens and the 5 highest-traffic components first, require new features to use the system, and migrate old surfaces opportunistically when touched",
        "score": 3,
        "feedback": "Incremental design systems deliver value continuously without freezing the roadmap—the industry-proven approach.",
        "tradeoffs": [
          "Slower full migration",
          "Two patterns coexist"
        ],
        "consequenceMetrics": {
          "businessValue": 6,
          "deliverySpeed": 3,
          "technicalDebt": -5,
          "teamMorale": 4
        }
      },
      {
        "id": "D",
        "text": "Buy a third-party component library and mandate it",
        "score": 1,
        "feedback": "Off-the-shelf libraries help greenfield but retrofitting 3 years of product is where the cost lives; brand fit suffers too.",
        "tradeoffs": [
          "Retrofit cost remains"
        ],
        "consequenceMetrics": {
          "deliverySpeed": 2,
          "technicalDebt": 1
        }
      }
    ],
    "bestOptionId": "C",
    "bestAnswerExplanation": "Incremental design system: core components first, new work adopts it, old surfaces migrate when touched.",
    "interviewInsight": "Tests pragmatic partnership with design on debt versus velocity.",
    "learningPoint": "Design systems succeed as policies applied to new work, not as big-bang rewrites."
  },
  {
    "id": 25,
    "title": "Involuntary Churn From Payment Failures",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "Churn and Retention",
    "secondaryCompetencies": [
      "Business and Monetization",
      "Post-Launch Monitoring"
    ],
    "scenario": "Analysis reveals 28% of your monthly churn is involuntary: failed card payments that never recover. You currently retry once and cancel after 3 days.",
    "question": "What do you implement?",
    "options": [
      {
        "id": "A",
        "text": "Extend the retry window to 30 days of unlimited retries",
        "score": 1,
        "feedback": "More retries help, but naive retry spam triggers card-network penalties and misses the smart-recovery toolkit.",
        "tradeoffs": [
          "Network penalties",
          "Partial fix"
        ],
        "consequenceMetrics": {
          "revenue": 3,
          "operatingCost": 2
        }
      },
      {
        "id": "B",
        "text": "Build full dunning: smart retry schedules aligned to card behavior, pre-expiry card update emails, grace periods with app banners, backup payment methods, and account-updater services",
        "score": 3,
        "feedback": "Involuntary churn is the highest-ROI retention fix in SaaS; a complete dunning system recovers most of it.",
        "tradeoffs": [
          "Billing eng effort"
        ],
        "consequenceMetrics": {
          "revenue": 8,
          "customerTrust": 4,
          "businessValue": 8,
          "operatingCost": 1
        }
      },
      {
        "id": "C",
        "text": "Require annual prepayment to reduce payment events",
        "score": 1,
        "feedback": "Reduces failure frequency but forces a pricing change on everyone to fix a billing mechanics problem.",
        "tradeoffs": [
          "Purchase friction"
        ],
        "consequenceMetrics": {
          "revenue": 1,
          "adoption": -4
        }
      },
      {
        "id": "D",
        "text": "Suspend access immediately on first failure to prompt action",
        "score": 0,
        "feedback": "Punishing users for bank-side failures creates rage-churn from your paying customers.",
        "tradeoffs": [
          "Rage churn",
          "Support spikes"
        ],
        "consequenceMetrics": {
          "customerTrust": -8,
          "revenue": -3
        }
      }
    ],
    "bestOptionId": "B",
    "bestAnswerExplanation": "Deploy a complete dunning stack: smart retries, card updaters, grace periods, and proactive expiry comms.",
    "interviewInsight": "Tests operational SaaS knowledge—involuntary churn is a solved problem many PMs ignore.",
    "learningPoint": "The cheapest revenue you'll ever recover is a failed payment handled well."
  },
  {
    "id": 26,
    "title": "Expansion Revenue Playbook",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "Business and Monetization",
    "secondaryCompetencies": [
      "Churn and Retention",
      "Enterprise SaaS"
    ],
    "scenario": "Gross retention is healthy at 93%, but expansion contributes only 4 points of NRR. Usage data shows 30% of accounts consistently hit plan limits without upgrading.",
    "question": "How do you unlock expansion?",
    "options": [
      {
        "id": "A",
        "text": "Have CSMs call every account hitting limits to pitch upgrades",
        "score": 1,
        "feedback": "Human outreach works but doesn't scale and feels sales-y for a product-led opportunity.",
        "tradeoffs": [
          "CSM capacity",
          "Slow"
        ],
        "consequenceMetrics": {
          "revenue": 3,
          "operatingCost": 5
        }
      },
      {
        "id": "B",
        "text": "Build in-product expansion paths: contextual limit notifications with clear value framing, self-serve upgrade flows, usage forecasting, and admin approval workflows for seat requests",
        "score": 3,
        "feedback": "Accounts already demonstrating need convert best through low-friction in-product paths at the moment of limit.",
        "tradeoffs": [
          "Billing eng work",
          "Tuning needed"
        ],
        "consequenceMetrics": {
          "revenue": 8,
          "businessValue": 8,
          "adoption": 5,
          "customerTrust": 3
        }
      },
      {
        "id": "C",
        "text": "Auto-upgrade accounts when they hit limits and notify after",
        "score": 0,
        "feedback": "Charging without consent is a trust catastrophe and often illegal.",
        "tradeoffs": [
          "Billing disputes",
          "Churn"
        ],
        "consequenceMetrics": {
          "revenue": 2,
          "customerTrust": -10,
          "complianceRisk": 7
        }
      },
      {
        "id": "D",
        "text": "Raise limits on all plans to reduce friction complaints",
        "score": 0,
        "feedback": "Gives away the expansion lever entirely; monetization opportunity evaporates.",
        "tradeoffs": [
          "Lost revenue lever"
        ],
        "consequenceMetrics": {
          "customerTrust": 3,
          "revenue": -6
        }
      }
    ],
    "bestOptionId": "B",
    "bestAnswerExplanation": "Meet demonstrated demand with self-serve expansion at the moment of need: contextual prompts, forecasts, and admin flows.",
    "interviewInsight": "Tests product-led growth mechanics for expansion revenue.",
    "learningPoint": "The best expansion pitch is the moment a user hits a limit they already need to cross."
  },
  {
    "id": 27,
    "title": "Discovery for a New Module",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "Customer Discovery",
    "secondaryCompetencies": [
      "Product Strategy",
      "Prioritization and MVP Scoping"
    ],
    "scenario": "Leadership wants to enter the adjacent budgeting-tool market. You have 3 weeks for discovery before a go/no-go. Your user base overlaps with the target buyers.",
    "question": "How do you structure discovery?",
    "options": [
      {
        "id": "A",
        "text": "Survey your user base asking if they'd use a budgeting module",
        "score": 1,
        "feedback": "Stated intent surveys overestimate demand dramatically, especially from friendly users.",
        "tradeoffs": [
          "Inflated signal"
        ],
        "consequenceMetrics": {
          "businessValue": 1
        }
      },
      {
        "id": "B",
        "text": "Study competitors' budgeting features and match their scope",
        "score": 1,
        "feedback": "Competitive scans inform but don't validate whether YOUR customers have the problem or would switch tools.",
        "tradeoffs": [
          "No demand evidence"
        ],
        "consequenceMetrics": {
          "businessValue": 0,
          "deliverySpeed": 3
        }
      },
      {
        "id": "C",
        "text": "Interview 15 target buyers about current budgeting workflows, tools, spend, and switching triggers; run a landing-page smoke test with pricing; analyze support/sales logs for organic demand mentions",
        "score": 3,
        "feedback": "Triangulates real workflows, willingness to pay, and organic demand within the timebox—evidence a go/no-go deserves.",
        "tradeoffs": [
          "Intense 3 weeks"
        ],
        "consequenceMetrics": {
          "businessValue": 8,
          "customerTrust": 3,
          "stakeholderConfidence": 6
        }
      },
      {
        "id": "D",
        "text": "Build a quick MVP and see if anyone uses it",
        "score": 1,
        "feedback": "Three weeks of building without problem validation risks shipping a guess; MVPs test solutions, not market existence.",
        "tradeoffs": [
          "Wasted build",
          "False negative risk"
        ],
        "consequenceMetrics": {
          "deliverySpeed": -3,
          "businessValue": 2
        }
      }
    ],
    "bestOptionId": "C",
    "bestAnswerExplanation": "Combine workflow interviews, smoke tests with pricing, and organic demand mining for a defensible go/no-go.",
    "interviewInsight": "Tests discovery craft under a deadline.",
    "learningPoint": "Validate the problem and willingness to pay before validating your solution."
  },
  {
    "id": 28,
    "title": "Notification Fatigue",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "UX and Design Collaboration",
    "secondaryCompetencies": [
      "Churn and Retention",
      "Product Execution"
    ],
    "scenario": "Users receive an average of 14 notifications daily across email, in-app, and push. Notification opt-outs rose 300% this year, and some users cite 'noise' in churn interviews. Every team wants their feature to notify.",
    "question": "How do you fix this?",
    "options": [
      {
        "id": "A",
        "text": "Cap total notifications at 5 per day per user with a priority queue",
        "score": 2,
        "feedback": "A cap forces prioritization but arbitrary limits may suppress genuinely important alerts; needs a relevance layer.",
        "tradeoffs": [
          "Blunt instrument"
        ],
        "consequenceMetrics": {
          "customerTrust": 3,
          "adoption": 2
        }
      },
      {
        "id": "B",
        "text": "Build a notification platform: per-category preferences, smart digests, relevance scoring, frequency governance, and require teams to register notifications through a review process",
        "score": 3,
        "feedback": "Treats notifications as a governed shared resource with user control—fixes the tragedy of the commons.",
        "tradeoffs": [
          "Platform investment",
          "Team pushback"
        ],
        "consequenceMetrics": {
          "customerTrust": 7,
          "adoption": 5,
          "businessValue": 6,
          "teamMorale": 2
        }
      },
      {
        "id": "C",
        "text": "Let users configure everything in a settings page with 40 toggles",
        "score": 1,
        "feedback": "Offloads the problem to users; most never visit settings and drown until they opt out entirely.",
        "tradeoffs": [
          "Settings graveyard"
        ],
        "consequenceMetrics": {
          "customerTrust": 0,
          "adoption": -1
        }
      },
      {
        "id": "D",
        "text": "Remove all non-critical notifications immediately",
        "score": 1,
        "feedback": "Overcorrects: notifications drive legitimate engagement; you'd trade noise for silence.",
        "tradeoffs": [
          "Engagement drop"
        ],
        "consequenceMetrics": {
          "adoption": -4,
          "customerTrust": 2
        }
      }
    ],
    "bestOptionId": "B",
    "bestAnswerExplanation": "Governance plus user control: notification platform with relevance scoring, digests, and a registration process for teams.",
    "interviewInsight": "Tests systems thinking on cross-team resource contention affecting UX.",
    "learningPoint": "User attention is a shared resource; without governance every team overgrazes it."
  },
  {
    "id": 29,
    "title": "SOC 2 Timing Decision",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "Security and Compliance",
    "secondaryCompetencies": [
      "Enterprise SaaS",
      "Prioritization and MVP Scoping"
    ],
    "scenario": "You're a 30-person startup moving upmarket. Prospects increasingly send security questionnaires; two deals stalled without SOC 2. The audit process takes 6-9 months and meaningful engineering time.",
    "question": "When and how do you pursue SOC 2?",
    "options": [
      {
        "id": "A",
        "text": "Defer SOC 2 until you have 10 enterprise customers demanding it",
        "score": 1,
        "feedback": "You already have deal-stall evidence; waiting means losing the deals that would justify it.",
        "tradeoffs": [
          "Chicken-and-egg",
          "Lost deals"
        ],
        "consequenceMetrics": {
          "revenue": -4,
          "complianceRisk": 3
        }
      },
      {
        "id": "B",
        "text": "Start SOC 2 Type I now with a compliance-automation platform, publish a security page and questionnaire responses meanwhile, and progress to Type II on a dated plan shared with prospects",
        "score": 3,
        "feedback": "Type I plus transparent interim artifacts unblocks deals fastest; automation platforms cut the overhead dramatically.",
        "tradeoffs": [
          "Eng time now",
          "Audit costs"
        ],
        "consequenceMetrics": {
          "revenue": 6,
          "complianceRisk": -6,
          "stakeholderConfidence": 6,
          "deliverySpeed": -2
        }
      },
      {
        "id": "C",
        "text": "Answer questionnaires claiming SOC 2 is 'in progress' without starting",
        "score": 0,
        "feedback": "Misrepresentation in security reviews is discovered and remembered.",
        "tradeoffs": [
          "Trust destruction",
          "Deal loss"
        ],
        "consequenceMetrics": {
          "complianceRisk": 8,
          "customerTrust": -8
        }
      },
      {
        "id": "D",
        "text": "Pursue ISO 27001, FedRAMP, and SOC 2 simultaneously to cover everything",
        "score": 0,
        "feedback": "Compliance overreach for a 30-person startup; FedRAMP alone can consume the company.",
        "tradeoffs": [
          "Massive overhead"
        ],
        "consequenceMetrics": {
          "operatingCost": 9,
          "deliverySpeed": -8
        }
      }
    ],
    "bestOptionId": "B",
    "bestAnswerExplanation": "Start Type I with automation tooling and interim transparency artifacts; sequence Type II with dated commitments.",
    "interviewInsight": "Tests compliance sequencing for upmarket motion.",
    "learningPoint": "Buy compliance credibility incrementally—each artifact unblocks the next deal tier."
  },
  {
    "id": 30,
    "title": "Feature Adoption Flatline",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "Post-Launch Monitoring",
    "secondaryCompetencies": [
      "Metrics and Experimentation",
      "UX and Design Collaboration"
    ],
    "scenario": "A collaboration feature you shipped 2 months ago has 6% adoption despite positive beta feedback. It's buried in a submenu. Leadership asks whether to invest more or kill it.",
    "question": "How do you decide?",
    "options": [
      {
        "id": "A",
        "text": "Kill it; 6% after 2 months means no demand",
        "score": 1,
        "feedback": "Premature: distribution problems masquerade as demand problems. Beta users loved it—diagnose discoverability first.",
        "tradeoffs": [
          "False negative"
        ],
        "consequenceMetrics": {
          "businessValue": -3,
          "deliverySpeed": 2
        }
      },
      {
        "id": "B",
        "text": "Diagnose the adoption funnel: exposure (who saw it), trial (who tried), repeat (who stayed); fix discoverability with contextual entry points; re-evaluate with clean data in 6 weeks",
        "score": 3,
        "feedback": "Separates awareness, trial, and value problems—each has a different fix. Beta signal suggests value exists.",
        "tradeoffs": [
          "Six more weeks"
        ],
        "consequenceMetrics": {
          "businessValue": 7,
          "adoption": 6,
          "stakeholderConfidence": 5
        }
      },
      {
        "id": "C",
        "text": "Promote it with a launch email blast and homepage banner",
        "score": 1,
        "feedback": "Promotion without funnel diagnosis may drive one-time traffic to a flow that doesn't retain; you still won't know why.",
        "tradeoffs": [
          "Spike then decay"
        ],
        "consequenceMetrics": {
          "adoption": 3,
          "businessValue": 1
        }
      },
      {
        "id": "D",
        "text": "Rebuild it based on new user interviews",
        "score": 0,
        "feedback": "Rebuilding before diagnosing whether the problem is discovery, onboarding, or value wastes a cycle.",
        "tradeoffs": [
          "Wasted rebuild"
        ],
        "consequenceMetrics": {
          "deliverySpeed": -6,
          "businessValue": -2
        }
      }
    ],
    "bestOptionId": "B",
    "bestAnswerExplanation": "Decompose adoption into exposure → trial → repeat, fix the failing stage, then judge demand with clean data.",
    "interviewInsight": "Tests post-launch analytical discipline before invest/kill decisions.",
    "learningPoint": "Low adoption is a symptom with at least three different diseases; diagnose before treating."
  },
  {
    "id": 31,
    "title": "Seat Sprawl Negotiation",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "Enterprise SaaS",
    "secondaryCompetencies": [
      "Business and Monetization",
      "Stakeholder Management"
    ],
    "scenario": "At renewal, your champion at a 2,000-seat account reveals only 1,100 seats show activity. They want to cut to 1,200 seats (a 40% revenue reduction). Procurement is driving the conversation.",
    "question": "How do you approach the renewal?",
    "options": [
      {
        "id": "A",
        "text": "Hold firm on 2,000 seats citing the signed contract",
        "score": 0,
        "feedback": "Contractual rigidity with usage evidence against you drives full churn evaluation at next cycle.",
        "tradeoffs": [
          "Relationship damage",
          "RFP risk"
        ],
        "consequenceMetrics": {
          "revenue": 2,
          "customerTrust": -7
        }
      },
      {
        "id": "B",
        "text": "Accept 1,200 seats immediately to preserve goodwill",
        "score": 1,
        "feedback": "Concedes 40% without exploring why 900 seats went inactive or what value paths exist.",
        "tradeoffs": [
          "Unexplored value",
          "Revenue loss"
        ],
        "consequenceMetrics": {
          "revenue": -6,
          "customerTrust": 3
        }
      },
      {
        "id": "C",
        "text": "Investigate the inactive seats with the champion: which departments disengaged and why; propose a right-sized renewal with an adoption plan, success milestones, and expansion triggers if usage recovers",
        "score": 3,
        "feedback": "Turns a procurement squeeze into a joint value plan: honest right-sizing plus a path to win seats back with evidence.",
        "tradeoffs": [
          "Some revenue reduction now"
        ],
        "consequenceMetrics": {
          "revenue": 3,
          "customerTrust": 7,
          "businessValue": 6,
          "stakeholderConfidence": 5
        }
      },
      {
        "id": "D",
        "text": "Offer a steep discount to keep the full 2,000 seats on paper",
        "score": 1,
        "feedback": "Discounting phantom seats devalues your pricing integrity and just defers the real conversation.",
        "tradeoffs": [
          "Price erosion",
          "Deferred problem"
        ],
        "consequenceMetrics": {
          "revenue": -2,
          "businessValue": -3
        }
      }
    ],
    "bestOptionId": "C",
    "bestAnswerExplanation": "Address the adoption root cause and structure a right-sized renewal with recovery triggers.",
    "interviewInsight": "Tests renewal strategy when usage data undermines your position.",
    "learningPoint": "Defend renewals with adoption plans, not contract clauses."
  },
  {
    "id": 32,
    "title": "Multi-Product Navigation Debate",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "UX and Design Collaboration",
    "secondaryCompetencies": [
      "Product Strategy",
      "Stakeholder Management"
    ],
    "scenario": "Your company now has 3 products after an acquisition. Each has its own navigation, login, and design language. Leadership wants 'one platform experience' but teams disagree on whose patterns win.",
    "question": "How do you drive convergence?",
    "options": [
      {
        "id": "A",
        "text": "Mandate the largest product's patterns across all three",
        "score": 1,
        "feedback": "Speed via decree, but acquired-product workflows may break under foreign patterns; teams resent imposed standards.",
        "tradeoffs": [
          "Workflow breakage",
          "Resentment"
        ],
        "consequenceMetrics": {
          "deliverySpeed": 4,
          "teamMorale": -5,
          "customerTrust": -2
        }
      },
      {
        "id": "B",
        "text": "Start with the highest-value integration points: unified auth/SSO and cross-product navigation shell first, then converge design language via a shared system with contributions from all teams",
        "score": 3,
        "feedback": "Sequence by user value: login and navigation friction hurt most. Shared-ownership design systems get adopted; imposed ones get resisted.",
        "tradeoffs": [
          "Multi-quarter effort"
        ],
        "consequenceMetrics": {
          "customerTrust": 6,
          "businessValue": 7,
          "teamMorale": 4,
          "technicalDebt": -3
        }
      },
      {
        "id": "C",
        "text": "Keep products separate; platform unification is a vanity project",
        "score": 1,
        "feedback": "Cross-sell friction and multiple logins measurably hurt multi-product adoption and NRR.",
        "tradeoffs": [
          "Cross-sell friction"
        ],
        "consequenceMetrics": {
          "businessValue": -3,
          "adoption": -3
        }
      },
      {
        "id": "D",
        "text": "Rebuild all three products on a new unified codebase",
        "score": 0,
        "feedback": "Multi-year rewrite risk while the market moves; the classic rewrite trap at platform scale.",
        "tradeoffs": [
          "Rewrite trap",
          "Market stall"
        ],
        "consequenceMetrics": {
          "deliverySpeed": -10,
          "technicalDebt": -2,
          "businessValue": -4
        }
      }
    ],
    "bestOptionId": "B",
    "bestAnswerExplanation": "Unify auth and navigation first (highest user value), then converge design language collaboratively.",
    "interviewInsight": "Tests post-acquisition platform integration sequencing.",
    "learningPoint": "Unify where users bleed first: identity and navigation before pixels."
  },
  {
    "id": 33,
    "title": "Annual Pricing Push",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "Pricing and Packaging",
    "secondaryCompetencies": [
      "Business and Monetization",
      "Metrics and Experimentation"
    ],
    "scenario": "Finance wants to push annual billing (currently 25% of customers) to improve cash flow and retention. Proposal: hide monthly plans behind a smaller link and default to annual with a 15% discount.",
    "question": "What do you evaluate before shipping?",
    "options": [
      {
        "id": "A",
        "text": "Ship it; annual improves every SaaS metric",
        "score": 1,
        "feedback": "Mostly true directionally, but forced-annual friction can suppress signups in SMB segments where monthly is the entry drug.",
        "tradeoffs": [
          "Signup friction unknown"
        ],
        "consequenceMetrics": {
          "revenue": 4,
          "adoption": -3
        }
      },
      {
        "id": "B",
        "text": "Test the emphasis change with a holdout, measure signup conversion, plan mix, 12-month LTV, and refund/chargeback rates; segment results by company size before full rollout",
        "score": 3,
        "feedback": "Billing-term changes ripple through acquisition, cash flow, and refunds differently by segment—measure before committing.",
        "tradeoffs": [
          "Slower rollout"
        ],
        "consequenceMetrics": {
          "revenue": 6,
          "businessValue": 7,
          "adoption": 1
        }
      },
      {
        "id": "C",
        "text": "Remove monthly billing entirely for new signups",
        "score": 0,
        "feedback": "Eliminates your lowest-friction entry point; SMB acquisition likely craters.",
        "tradeoffs": [
          "Acquisition collapse"
        ],
        "consequenceMetrics": {
          "revenue": -4,
          "adoption": -7
        }
      },
      {
        "id": "D",
        "text": "Keep pricing as-is; billing terms aren't a product concern",
        "score": 0,
        "feedback": "Billing UX and plan mix are core PM territory affecting activation and LTV.",
        "tradeoffs": [
          "Abdication"
        ],
        "consequenceMetrics": {
          "businessValue": -3
        }
      }
    ],
    "bestOptionId": "B",
    "bestAnswerExplanation": "Experiment with emphasis and measure the full economic picture by segment before rolling out.",
    "interviewInsight": "Tests monetization experimentation discipline.",
    "learningPoint": "Billing-term design is conversion design; test it like any funnel change."
  },
  {
    "id": 34,
    "title": "Webhook Reliability Complaints",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "Platform and Integrations",
    "secondaryCompetencies": [
      "Technical Trade-offs",
      "Post-Launch Monitoring"
    ],
    "scenario": "Partners report your webhooks silently drop events during traffic spikes—roughly 2% loss. Their workflows break downstream. Engineering says exactly-once delivery is disproportionately expensive.",
    "question": "What do you commit to?",
    "options": [
      {
        "id": "A",
        "text": "Promise exactly-once delivery to partners",
        "score": 0,
        "feedback": "Exactly-once over networks is famously near-impossible; you'd promise what engineering told you is impractical.",
        "tradeoffs": [
          "Broken promise"
        ],
        "consequenceMetrics": {
          "customerTrust": -6,
          "reliability": -2
        }
      },
      {
        "id": "B",
        "text": "Document that webhooks are best-effort and partners should poll",
        "score": 1,
        "feedback": "Honest but pushes the reliability burden onto every partner; polling defeats the purpose of webhooks.",
        "tradeoffs": [
          "Partner burden",
          "Weak platform"
        ],
        "consequenceMetrics": {
          "customerTrust": -3,
          "businessValue": -2
        }
      },
      {
        "id": "C",
        "text": "Ship at-least-once delivery with retries and exponential backoff, event IDs for idempotent consumption, a replay API for gap recovery, and delivery observability dashboards for partners",
        "score": 3,
        "feedback": "The industry-standard reliability contract: at-least-once plus idempotency keys plus replay covers real-world failure modes.",
        "tradeoffs": [
          "Partner-side dedup needed"
        ],
        "consequenceMetrics": {
          "reliability": 8,
          "customerTrust": 7,
          "businessValue": 6,
          "operatingCost": 2
        }
      },
      {
        "id": "D",
        "text": "Queue all events with unlimited retention until confirmed",
        "score": 1,
        "feedback": "Unbounded queues create their own operational and cost pathologies.",
        "tradeoffs": [
          "Queue bloat",
          "Cost growth"
        ],
        "consequenceMetrics": {
          "reliability": 4,
          "operatingCost": 6
        }
      }
    ],
    "bestOptionId": "C",
    "bestAnswerExplanation": "At-least-once delivery with idempotency keys, replay APIs, and partner-facing observability.",
    "interviewInsight": "Tests platform reliability contract design.",
    "learningPoint": "Promise the reliability model you can engineer, then give partners tools for the gap."
  },
  {
    "id": 35,
    "title": "Churn Interview Program",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "Churn and Retention",
    "secondaryCompetencies": [
      "Customer Discovery",
      "Metrics and Experimentation"
    ],
    "scenario": "Your churn dashboard shows 'not enough value' as the top cancellation-survey reason (48%), but the category is vague. Leadership keeps debating what it means.",
    "question": "How do you get real churn insight?",
    "options": [
      {
        "id": "A",
        "text": "Add more granular options to the cancellation survey",
        "score": 1,
        "feedback": "Better taxonomy helps slightly, but self-serve surveys at the moment of cancellation stay shallow and rationalized.",
        "tradeoffs": [
          "Still shallow"
        ],
        "consequenceMetrics": {
          "businessValue": 2
        }
      },
      {
        "id": "B",
        "text": "Run structured exit interviews with a sample of churned accounts within 2 weeks of leaving, paired with usage-decline forensics for each; synthesize into churn archetypes with triggers",
        "score": 3,
        "feedback": "Interviews plus behavioral forensics reveal the actual decision journey—usage decay usually starts months before the cancel click.",
        "tradeoffs": [
          "Interview effort",
          "Incentives cost"
        ],
        "consequenceMetrics": {
          "businessValue": 8,
          "customerTrust": 3,
          "revenue": 4
        }
      },
      {
        "id": "C",
        "text": "Analyze usage data alone; behavior doesn't lie",
        "score": 2,
        "feedback": "Behavioral data shows what happened but not why, or what would have retained them; pair it with qualitative.",
        "tradeoffs": [
          "Missing the why"
        ],
        "consequenceMetrics": {
          "businessValue": 4
        }
      },
      {
        "id": "D",
        "text": "Offer a 50% discount at the cancellation screen to reduce churn directly",
        "score": 1,
        "feedback": "Save offers mask the signal, attract discount-hunting, and don't fix the value gap.",
        "tradeoffs": [
          "Signal masking",
          "Margin cost"
        ],
        "consequenceMetrics": {
          "revenue": 2,
          "businessValue": -2
        }
      }
    ],
    "bestOptionId": "B",
    "bestAnswerExplanation": "Pair exit interviews with usage-decline forensics to build actionable churn archetypes.",
    "interviewInsight": "Tests qualitative + quantitative synthesis for retention.",
    "learningPoint": "Churn decisions are made months before the cancel button; study the decay, not the click."
  },
  {
    "id": 36,
    "title": "Internal Tools vs Customer Features",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "Prioritization and MVP Scoping",
    "secondaryCompetencies": [
      "Product Execution",
      "Stakeholder Management"
    ],
    "scenario": "Support spends 90 minutes per escalation using database queries because there's no admin tooling. Building an internal admin panel takes 4 weeks but the roadmap is packed with customer commitments.",
    "question": "How do you weigh this?",
    "options": [
      {
        "id": "A",
        "text": "Internal tools always lose to customer features; defer indefinitely",
        "score": 0,
        "feedback": "Support cost, resolution time, and error risk from raw DB access compound; some 'internal' work is customer experience work.",
        "tradeoffs": [
          "Slow resolutions",
          "DB accidents"
        ],
        "consequenceMetrics": {
          "operatingCost": 6,
          "customerTrust": -4,
          "teamMorale": -5
        }
      },
      {
        "id": "B",
        "text": "Quantify the case: escalation volume × handling time × growth rate, plus incident risk from direct DB access; if ROI beats marginal roadmap items, schedule it like any feature",
        "score": 3,
        "feedback": "Internal tooling competes on ROI like everything else—here it likely wins: faster resolutions ARE customer experience.",
        "tradeoffs": [
          "Displaces a roadmap item"
        ],
        "consequenceMetrics": {
          "operatingCost": -5,
          "customerTrust": 4,
          "teamMorale": 6,
          "businessValue": 6
        }
      },
      {
        "id": "C",
        "text": "Have engineers build it as a hackathon side project",
        "score": 1,
        "feedback": "Signals it doesn't deserve real capacity; half-built admin tools create their own risks.",
        "tradeoffs": [
          "Half-finished tool"
        ],
        "consequenceMetrics": {
          "teamMorale": 1,
          "reliability": -2
        }
      },
      {
        "id": "D",
        "text": "Buy an off-the-shelf internal-tools builder and let support build their own panels",
        "score": 2,
        "feedback": "Tools like these can work well, but support building against production data still needs engineering guardrails.",
        "tradeoffs": [
          "Governance needed"
        ],
        "consequenceMetrics": {
          "operatingCost": -2,
          "deliverySpeed": 5
        }
      }
    ],
    "bestOptionId": "B",
    "bestAnswerExplanation": "Run the ROI math including risk; internal efficiency that touches customer resolution time is customer value.",
    "interviewInsight": "Tests whether you can defend unglamorous but high-ROI work.",
    "learningPoint": "Support tooling is customer experience infrastructure wearing overalls."
  },
  {
    "id": 37,
    "title": "Localization Investment Call",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "Growth and Acquisition",
    "secondaryCompetencies": [
      "Product Strategy",
      "Business and Monetization"
    ],
    "scenario": "Organic signups from Brazil and Germany grew 80% YoY with zero localization. Sales wants localized product, docs, and support for both. Full localization costs roughly a squad-quarter per language plus ongoing maintenance.",
    "question": "How do you sequence?",
    "options": [
      {
        "id": "A",
        "text": "Fully localize both markets simultaneously",
        "score": 1,
        "feedback": "Doubles cost before evidence shows which market converts; maintenance burden also doubles.",
        "tradeoffs": [
          "Double burn"
        ],
        "consequenceMetrics": {
          "operatingCost": 6,
          "adoption": 4,
          "deliverySpeed": -4
        }
      },
      {
        "id": "B",
        "text": "Stay English-only; the growth is happening anyway",
        "score": 1,
        "feedback": "Organic growth despite friction hints at bigger latent demand; competitors will localize into your momentum.",
        "tradeoffs": [
          "Ceiling risk",
          "Competitor opening"
        ],
        "consequenceMetrics": {
          "businessValue": -2,
          "adoption": -2
        }
      },
      {
        "id": "C",
        "text": "Tier the investment: localize checkout, onboarding, and top docs first for both (weeks, not quarters), measure conversion lift, then fund full localization for the market that responds",
        "score": 3,
        "feedback": "Localize the conversion-critical surface first; let measured lift decide the bigger bet.",
        "tradeoffs": [
          "Partial experience interim"
        ],
        "consequenceMetrics": {
          "adoption": 6,
          "revenue": 5,
          "businessValue": 7,
          "operatingCost": 2
        }
      },
      {
        "id": "D",
        "text": "Hire local resellers to handle those markets instead",
        "score": 1,
        "feedback": "Channel partners add reach but don't fix in-product language friction and take margin.",
        "tradeoffs": [
          "Margin share",
          "Less control"
        ],
        "consequenceMetrics": {
          "revenue": 2,
          "operatingCost": 3
        }
      }
    ],
    "bestOptionId": "C",
    "bestAnswerExplanation": "Localize conversion-critical surfaces first, measure lift, then fund the winner.",
    "interviewInsight": "Tests international expansion sequencing with evidence gates.",
    "learningPoint": "Localize the funnel before localizing the product."
  },
  {
    "id": 38,
    "title": "Beta Program Design",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "Product Execution",
    "secondaryCompetencies": [
      "Customer Discovery",
      "Communication and Leadership"
    ],
    "scenario": "Your last two launches had quality issues that beta testing should have caught. The previous 'beta' was 5 friendly customers who barely used the features. You're launching a major reporting module next quarter.",
    "question": "How do you fix the beta program?",
    "options": [
      {
        "id": "A",
        "text": "Double beta length from 2 to 4 weeks with the same participants",
        "score": 1,
        "feedback": "More time with unengaged friendly testers produces more silence, not more signal.",
        "tradeoffs": [
          "Same blind spots"
        ],
        "consequenceMetrics": {
          "reliability": 1
        }
      },
      {
        "id": "B",
        "text": "Recruit 30-50 participants representing real segments and edge-case configurations, define activation criteria for testers, instrument usage, set feedback SLAs with incentives, and gate GA on usage-based exit criteria",
        "score": 3,
        "feedback": "Betas work when participants mirror production diversity, actually use the feature, and GA has measurable exit criteria.",
        "tradeoffs": [
          "Recruiting effort",
          "GA may slip"
        ],
        "consequenceMetrics": {
          "reliability": 8,
          "customerTrust": 6,
          "businessValue": 6,
          "deliverySpeed": -2
        }
      },
      {
        "id": "C",
        "text": "Skip beta; ship behind a feature flag to 5% of production",
        "score": 2,
        "feedback": "Progressive rollout is a good complement but random 5% exposure lacks the deliberate edge-case coverage and feedback depth of a real beta.",
        "tradeoffs": [
          "Feedback depth lost"
        ],
        "consequenceMetrics": {
          "reliability": 4,
          "deliverySpeed": 4
        }
      },
      {
        "id": "D",
        "text": "Make the beta open to everyone who opts in",
        "score": 1,
        "feedback": "Open betas skew toward enthusiasts and create support load without structured signal.",
        "tradeoffs": [
          "Skewed sample",
          "Support noise"
        ],
        "consequenceMetrics": {
          "reliability": 2,
          "operatingCost": 3
        }
      }
    ],
    "bestOptionId": "B",
    "bestAnswerExplanation": "Structured beta: representative recruiting, activation requirements, instrumentation, and usage-based GA gates.",
    "interviewInsight": "Tests quality process design after launch failures.",
    "learningPoint": "A beta without engaged, representative users is a rehearsal without an audience."
  },
  {
    "id": 39,
    "title": "Data Residency Demand",
    "type": "scenario",
    "difficulty": "hard",
    "primaryCompetency": "Security and Compliance",
    "secondaryCompetencies": [
      "Enterprise SaaS",
      "Technical Trade-offs"
    ],
    "scenario": "German enterprise prospects require EU data residency. Your stack runs entirely in US regions. Engineering estimates a proper EU region at 2 quarters. Sales found a prospect willing to sign a $400k deal contingent on EU residency within 6 months.",
    "question": "What do you do?",
    "options": [
      {
        "id": "A",
        "text": "Sign the contract; engineering will figure it out",
        "score": 0,
        "feedback": "Contractual commitment on an unscoped 2-quarter infrastructure project with a 6-month deadline is delivery roulette.",
        "tradeoffs": [
          "Breach risk",
          "Team burnout"
        ],
        "consequenceMetrics": {
          "revenue": 6,
          "complianceRisk": 6,
          "teamMorale": -6
        }
      },
      {
        "id": "B",
        "text": "Scope a realistic EU region plan with engineering first, validate broader EU pipeline to justify the investment, then structure the deal with milestones aligned to the real timeline—or walk away honestly",
        "score": 3,
        "feedback": "Infrastructure commitments need engineering-validated timelines and portfolio justification, not single-deal adrenaline.",
        "tradeoffs": [
          "Deal may slip or die"
        ],
        "consequenceMetrics": {
          "revenue": 4,
          "complianceRisk": -5,
          "stakeholderConfidence": 6,
          "businessValue": 6
        }
      },
      {
        "id": "C",
        "text": "Offer contractual data-processing terms and encryption instead of residency",
        "score": 1,
        "feedback": "Sometimes satisfies legal teams, but German enterprise 'residency' requirements are often non-negotiable policy.",
        "tradeoffs": [
          "Likely rejected"
        ],
        "consequenceMetrics": {
          "revenue": 1,
          "complianceRisk": -1
        }
      },
      {
        "id": "D",
        "text": "Spin up a quick EU database replica while keeping processing in the US",
        "score": 0,
        "feedback": "Storage-only residency with US processing typically fails the actual requirement and misrepresents your architecture.",
        "tradeoffs": [
          "Misrepresentation",
          "Audit failure"
        ],
        "consequenceMetrics": {
          "complianceRisk": 8,
          "customerTrust": -6
        }
      }
    ],
    "bestOptionId": "B",
    "bestAnswerExplanation": "Validate the engineering timeline and EU pipeline first; structure milestones honestly or decline.",
    "interviewInsight": "Tests infrastructure commitment discipline under deal pressure.",
    "learningPoint": "Never let a single contract set an infrastructure deadline engineering hasn't validated."
  },
  {
    "id": 40,
    "title": "Activation Experiment Backfires",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "Metrics and Experimentation",
    "secondaryCompetencies": [
      "Onboarding and Activation",
      "Communication and Leadership"
    ],
    "scenario": "Your onboarding checklist experiment increased week-1 activation 22% but week-8 retention is identical between variants. You already presented the week-1 win to leadership as a success.",
    "question": "What do you do now?",
    "options": [
      {
        "id": "A",
        "text": "Keep reporting the activation win; retention is a different metric",
        "score": 0,
        "feedback": "You'd knowingly let leadership act on a misleading narrative; the intervention moved an intermediate metric only.",
        "tradeoffs": [
          "Credibility timebomb"
        ],
        "consequenceMetrics": {
          "stakeholderConfidence": -6,
          "businessValue": -3
        }
      },
      {
        "id": "B",
        "text": "Update leadership transparently: the checklist accelerates early actions without changing durable retention; revise the activation metric to one that predicts retention, and share what you learned",
        "score": 3,
        "feedback": "Correcting your own narrative builds long-term credibility and fixes the team's metric compass.",
        "tradeoffs": [
          "Awkward correction"
        ],
        "consequenceMetrics": {
          "stakeholderConfidence": 6,
          "businessValue": 6,
          "teamMorale": 4
        }
      },
      {
        "id": "C",
        "text": "Run the experiment again hoping retention moves this time",
        "score": 1,
        "feedback": "Same design, same result; without a new hypothesis this is wishful re-rolling.",
        "tradeoffs": [
          "Wasted cycle"
        ],
        "consequenceMetrics": {
          "deliverySpeed": -4,
          "businessValue": -1
        }
      },
      {
        "id": "D",
        "text": "Quietly stop mentioning the experiment",
        "score": 1,
        "feedback": "Avoids embarrassment but leaves leadership believing a false result and the team optimizing a hollow metric.",
        "tradeoffs": [
          "Lingering misbelief"
        ],
        "consequenceMetrics": {
          "stakeholderConfidence": -3,
          "businessValue": -2
        }
      }
    ],
    "bestOptionId": "B",
    "bestAnswerExplanation": "Correct the narrative publicly, upgrade the activation metric to one that predicts retention.",
    "interviewInsight": "Tests intellectual honesty when your own win evaporates.",
    "learningPoint": "An activation metric that doesn't predict retention is just choreography."
  },
  {
    "id": 41,
    "title": "Platform Rate Limiting Policy",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "Platform and Integrations",
    "secondaryCompetencies": [
      "Technical Trade-offs",
      "Business and Monetization"
    ],
    "scenario": "A single integration partner's polling accounts for 35% of your API load, degrading performance for everyone. They're also a strategic co-marketing partner. You have no rate limits today.",
    "question": "How do you introduce limits?",
    "options": [
      {
        "id": "A",
        "text": "Block the partner's traffic until they fix their polling",
        "score": 0,
        "feedback": "Strategic relationship destroyed over a policy you never published.",
        "tradeoffs": [
          "Partner conflict"
        ],
        "consequenceMetrics": {
          "reliability": 5,
          "stakeholderConfidence": -7,
          "customerTrust": -4
        }
      },
      {
        "id": "B",
        "text": "Design tiered rate limits with headroom for current legitimate usage, publish them with generous migration timelines, offer the partner webhooks to replace polling, and add paid higher tiers for heavy consumers",
        "score": 3,
        "feedback": "Fair published limits plus a better technical path (webhooks) plus monetized headroom—turns an ops problem into platform maturity.",
        "tradeoffs": [
          "Migration support effort"
        ],
        "consequenceMetrics": {
          "reliability": 7,
          "businessValue": 6,
          "revenue": 4,
          "stakeholderConfidence": 4
        }
      },
      {
        "id": "C",
        "text": "Silently deprioritize their requests during peak hours",
        "score": 0,
        "feedback": "Covert throttling gets discovered and reads as sabotage.",
        "tradeoffs": [
          "Trust destruction"
        ],
        "consequenceMetrics": {
          "reliability": 3,
          "customerTrust": -8
        }
      },
      {
        "id": "D",
        "text": "Buy more infrastructure to absorb the load",
        "score": 1,
        "feedback": "Subsidizing inefficient polling forever; the incentive problem remains and grows.",
        "tradeoffs": [
          "Cost growth",
          "No incentive fix"
        ],
        "consequenceMetrics": {
          "operatingCost": 7,
          "reliability": 3
        }
      }
    ],
    "bestOptionId": "B",
    "bestAnswerExplanation": "Published tiered limits, webhook migration paths, and monetized heavy-use tiers.",
    "interviewInsight": "Tests platform governance and partner diplomacy.",
    "learningPoint": "Rate limits are a product with pricing, docs, and migration paths—not a punishment."
  },
  {
    "id": 42,
    "title": "Two-Sided Feedback Conflict",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "Product Strategy",
    "secondaryCompetencies": [
      "Customer Discovery",
      "Stakeholder Management"
    ],
    "scenario": "Your recruiting platform serves employers (who pay) and candidates (who don't). Employers want more candidate screening filters; candidate advocates warn aggressive filtering worsens candidate experience and pipeline quality.",
    "question": "How do you balance the sides?",
    "options": [
      {
        "id": "A",
        "text": "Build what employers want; they pay the bills",
        "score": 1,
        "feedback": "Short-term revenue logic that degrades the candidate side until employers' pipelines empty—marketplace death spiral.",
        "tradeoffs": [
          "Supply-side decay"
        ],
        "consequenceMetrics": {
          "revenue": 4,
          "businessValue": -4,
          "customerTrust": -3
        }
      },
      {
        "id": "B",
        "text": "Refuse new filters to protect candidates",
        "score": 1,
        "feedback": "Ignores paying customers' legitimate efficiency needs; they'll churn to competitors with better tooling.",
        "tradeoffs": [
          "Employer churn"
        ],
        "consequenceMetrics": {
          "revenue": -4,
          "customerTrust": 2
        }
      },
      {
        "id": "C",
        "text": "Design filters that serve both sides: structured criteria with candidate-facing transparency, feedback loops, and marketplace health metrics (candidate completion rates, pipeline quality) as guardrails on every employer feature",
        "score": 3,
        "feedback": "Two-sided products need explicit health metrics for the non-paying side as launch guardrails—that's what keeps the paying side supplied.",
        "tradeoffs": [
          "Slower feature delivery"
        ],
        "consequenceMetrics": {
          "businessValue": 8,
          "customerTrust": 6,
          "revenue": 5
        }
      },
      {
        "id": "D",
        "text": "Charge candidates for premium visibility to make both sides paying customers",
        "score": 0,
        "feedback": "Pay-to-play candidate schemes wreck trust and often cross ethical/legal lines in hiring.",
        "tradeoffs": [
          "Ethics risk",
          "Trust loss"
        ],
        "consequenceMetrics": {
          "revenue": 2,
          "complianceRisk": 6,
          "customerTrust": -7
        }
      }
    ],
    "bestOptionId": "C",
    "bestAnswerExplanation": "Instrument marketplace health for the non-paying side and use it as a guardrail on paying-side features.",
    "interviewInsight": "Tests two-sided marketplace judgment inside a SaaS context.",
    "learningPoint": "In two-sided products, the free side is your paying side's supply chain."
  },
  {
    "id": 43,
    "title": "Executive Dashboard Request",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "Stakeholder Management",
    "secondaryCompetencies": [
      "Metrics and Experimentation",
      "Communication and Leadership"
    ],
    "scenario": "Your CEO asks for a real-time executive dashboard with 30 product metrics. Building it properly takes 3 sprints. You suspect most metrics won't drive decisions.",
    "question": "How do you respond?",
    "options": [
      {
        "id": "A",
        "text": "Build all 30 metrics as requested",
        "score": 1,
        "feedback": "Obedience over usefulness: unused dashboards decay into mistrusted numbers and maintenance burden.",
        "tradeoffs": [
          "Dashboard graveyard"
        ],
        "consequenceMetrics": {
          "stakeholderConfidence": 3,
          "deliverySpeed": -5,
          "businessValue": -2
        }
      },
      {
        "id": "B",
        "text": "Ask what decisions each metric will inform; propose a focused dashboard of 6-8 decision-driving metrics with drill-downs, deliver in one sprint, and iterate based on actual usage",
        "score": 3,
        "feedback": "Anchoring metrics to decisions serves the CEO's real need faster and creates a dashboard that stays alive.",
        "tradeoffs": [
          "Pushback risk"
        ],
        "consequenceMetrics": {
          "stakeholderConfidence": 6,
          "businessValue": 7,
          "deliverySpeed": 4
        }
      },
      {
        "id": "C",
        "text": "Decline; executives should use the existing analytics tool",
        "score": 0,
        "feedback": "The existing tool evidently isn't serving them; dismissiveness damages the relationship.",
        "tradeoffs": [
          "Political damage"
        ],
        "consequenceMetrics": {
          "stakeholderConfidence": -6
        }
      },
      {
        "id": "D",
        "text": "Buy a BI tool and give the CEO self-serve access to raw data",
        "score": 1,
        "feedback": "Self-serve BI for execs without curation typically produces misinterpretation and metric disputes.",
        "tradeoffs": [
          "Misreading risk"
        ],
        "consequenceMetrics": {
          "stakeholderConfidence": 0,
          "operatingCost": 3
        }
      }
    ],
    "bestOptionId": "B",
    "bestAnswerExplanation": "Negotiate from metrics to decisions: fewer, decision-anchored metrics shipped faster.",
    "interviewInsight": "Tests managing upward with product thinking.",
    "learningPoint": "Every dashboard metric should have a decision it exists to inform."
  },
  {
    "id": 44,
    "title": "Performance Degradation Creep",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "Technical Trade-offs",
    "secondaryCompetencies": [
      "Post-Launch Monitoring",
      "Product Execution"
    ],
    "scenario": "Page load p75 degraded from 1.2s to 3.4s over 18 months of feature shipping. No single release caused it. Enterprise users with large workspaces complain most. There's no performance budget.",
    "question": "What do you institute?",
    "options": [
      {
        "id": "A",
        "text": "A one-time performance sprint to claw back speed",
        "score": 1,
        "feedback": "Recovers some speed but without structural change the creep resumes immediately.",
        "tradeoffs": [
          "Regression guaranteed"
        ],
        "consequenceMetrics": {
          "reliability": 3,
          "deliverySpeed": -3
        }
      },
      {
        "id": "B",
        "text": "Performance budgets per page with CI enforcement, real-user monitoring segmented by workspace size, a fix-the-worst-offenders workstream, and perf review as a launch gate",
        "score": 3,
        "feedback": "Creep is a process failure: budgets, monitoring, and gates make performance a maintained property rather than a periodic rescue.",
        "tradeoffs": [
          "Velocity friction",
          "Cultural change"
        ],
        "consequenceMetrics": {
          "reliability": 8,
          "customerTrust": 6,
          "deliverySpeed": -1,
          "technicalDebt": -5
        }
      },
      {
        "id": "C",
        "text": "Move heavy enterprise workspaces to dedicated infrastructure",
        "score": 1,
        "feedback": "Treats the symptom for one segment at permanent ops cost; the product remains slow by construction.",
        "tradeoffs": [
          "Cost fork",
          "Core still slow"
        ],
        "consequenceMetrics": {
          "reliability": 3,
          "operatingCost": 6
        }
      },
      {
        "id": "D",
        "text": "Rewrite the frontend in a faster framework",
        "score": 0,
        "feedback": "Framework rewrites for perf usually re-import the same unbudgeted habits at massive cost.",
        "tradeoffs": [
          "Rewrite trap"
        ],
        "consequenceMetrics": {
          "deliverySpeed": -9,
          "technicalDebt": 2
        }
      }
    ],
    "bestOptionId": "B",
    "bestAnswerExplanation": "Institute performance budgets, RUM segmentation, and launch gates—make speed a maintained property.",
    "interviewInsight": "Tests whether you fix systems, not just symptoms.",
    "learningPoint": "Performance is never lost in one release; it's lost in a hundred unguarded ones."
  },
  {
    "id": 45,
    "title": "Cancellation Flow Ethics",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "Churn and Retention",
    "secondaryCompetencies": [
      "UX and Design Collaboration",
      "Communication and Leadership"
    ],
    "scenario": "A growth consultant recommends adding friction to cancellation: hiding the button, mandatory retention calls, and a 4-step flow. Projected churn reduction is 15%. Regulators have recently fined companies for similar patterns.",
    "question": "What do you do?",
    "options": [
      {
        "id": "A",
        "text": "Implement the full friction playbook; 15% churn reduction is huge",
        "score": 0,
        "feedback": "Dark patterns invite regulatory fines (FTC click-to-cancel), viral outrage, and resentful zombie customers who never expand.",
        "tradeoffs": [
          "Regulatory fines",
          "Brand damage"
        ],
        "consequenceMetrics": {
          "revenue": 4,
          "complianceRisk": 9,
          "customerTrust": -9
        }
      },
      {
        "id": "B",
        "text": "Build an honest save flow: one-click access to cancel, but present a relevant offer first (pause plan, downgrade tier, usage recap showing unrealized value) based on the account's context",
        "score": 3,
        "feedback": "Legitimate saves come from relevant alternatives, not mazes. Pause and downgrade options recover meaningful revenue without trust damage.",
        "tradeoffs": [
          "Smaller churn dent than friction"
        ],
        "consequenceMetrics": {
          "revenue": 4,
          "customerTrust": 6,
          "complianceRisk": -4,
          "businessValue": 6
        }
      },
      {
        "id": "C",
        "text": "Require a phone call to cancel, positioned as 'account security'",
        "score": 0,
        "feedback": "Forced-call cancellation is the most-cited dark pattern in regulatory actions and cancellation-rage folklore.",
        "tradeoffs": [
          "Fines",
          "Outrage"
        ],
        "consequenceMetrics": {
          "complianceRisk": 10,
          "customerTrust": -10
        }
      },
      {
        "id": "D",
        "text": "Do nothing; cancellation flows don't matter",
        "score": 1,
        "feedback": "Leaving legitimate save opportunities (pause, downgrade) on the table is real money lost.",
        "tradeoffs": [
          "Missed saves"
        ],
        "consequenceMetrics": {
          "revenue": -3
        }
      }
    ],
    "bestOptionId": "B",
    "bestAnswerExplanation": "Honest save flows with pause/downgrade alternatives recover revenue without dark patterns.",
    "interviewInsight": "Tests ethics under growth pressure with regulatory context.",
    "learningPoint": "Retention earned through mazes converts into resentment and fines."
  },
  {
    "id": 46,
    "title": "Partner Ecosystem Conflict",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "Platform and Integrations",
    "secondaryCompetencies": [
      "Product Strategy",
      "Stakeholder Management"
    ],
    "scenario": "Your top marketplace partner (driving 8% of new signups) built a scheduling add-on. Your roadmap includes native scheduling next quarter. The partner heard rumors and is threatening to depriotize your platform.",
    "question": "How do you manage the collision?",
    "options": [
      {
        "id": "A",
        "text": "Cancel your native scheduling plans to protect the partnership",
        "score": 1,
        "feedback": "Vetoing core roadmap for one partner caps your product; scheduling may be strategic table stakes.",
        "tradeoffs": [
          "Roadmap capture"
        ],
        "consequenceMetrics": {
          "businessValue": -4,
          "stakeholderConfidence": 2
        }
      },
      {
        "id": "B",
        "text": "Ship native scheduling without warning; partners assume platform risk",
        "score": 1,
        "feedback": "Legal but corrosive: the ecosystem watches how you treat partners and invests accordingly.",
        "tradeoffs": [
          "Ecosystem chill"
        ],
        "consequenceMetrics": {
          "businessValue": 3,
          "stakeholderConfidence": -6
        }
      },
      {
        "id": "C",
        "text": "Engage the partner early: share the direction, define the platform vs. partner boundary (native basics, partner advanced verticals), offer migration/co-marketing support, and publish platform roadmap principles for all partners",
        "score": 3,
        "feedback": "Mature platforms manage 'Sherlocking' with early communication, clear boundaries, and ecosystem principles that preserve partner investment confidence.",
        "tradeoffs": [
          "Rumor management",
          "Boundary drawing"
        ],
        "consequenceMetrics": {
          "businessValue": 6,
          "stakeholderConfidence": 6,
          "customerTrust": 4,
          "adoption": 3
        }
      },
      {
        "id": "D",
        "text": "Acquire the partner's add-on",
        "score": 2,
        "feedback": "Sometimes the right move, but check price, integration cost, and whether their tech fits before defaulting to M&A.",
        "tradeoffs": [
          "Acquisition cost/risk"
        ],
        "consequenceMetrics": {
          "businessValue": 3,
          "operatingCost": 5
        }
      }
    ],
    "bestOptionId": "C",
    "bestAnswerExplanation": "Communicate early, define platform/partner boundaries, and publish principles the whole ecosystem can build against.",
    "interviewInsight": "Tests platform ecosystem stewardship during roadmap collisions.",
    "learningPoint": "Ecosystems invest where platform boundaries are predictable."
  },
  {
    "id": 47,
    "title": "Usage Analytics Gap",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "Post-Launch Monitoring",
    "secondaryCompetencies": [
      "Metrics and Experimentation",
      "Product Execution"
    ],
    "scenario": "You joined a 6-year-old SaaS product and discovered event tracking is inconsistent: key workflows are uninstrumented, event names are chaotic, and no one trusts the funnel numbers.",
    "question": "What's your instrumentation strategy?",
    "options": [
      {
        "id": "A",
        "text": "Freeze feature work for a quarter to re-instrument everything",
        "score": 1,
        "feedback": "Full-freeze approaches lose organizational support fast; instrumentation should ride along with delivery.",
        "tradeoffs": [
          "Roadmap freeze"
        ],
        "consequenceMetrics": {
          "deliverySpeed": -7,
          "businessValue": 2
        }
      },
      {
        "id": "B",
        "text": "Define a tracking plan for the 5 critical workflows first, instrument them with a governed schema, add instrumentation review to definition-of-done, and backfill the rest opportunistically",
        "score": 3,
        "feedback": "Prioritized instrumentation with governance gets trustworthy answers where decisions happen, without freezing delivery.",
        "tradeoffs": [
          "Partial coverage interim"
        ],
        "consequenceMetrics": {
          "businessValue": 7,
          "reliability": 5,
          "deliverySpeed": -1
        }
      },
      {
        "id": "C",
        "text": "Buy a session-replay/auto-capture tool instead of manual events",
        "score": 2,
        "feedback": "Auto-capture helps exploration but produces noisy, schema-less data; works as a complement, not a foundation.",
        "tradeoffs": [
          "Noisy data"
        ],
        "consequenceMetrics": {
          "deliverySpeed": 4,
          "businessValue": 3
        }
      },
      {
        "id": "D",
        "text": "Keep shipping; use gut feel and support anecdotes like the team always has",
        "score": 0,
        "feedback": "Six years of gut feel is why nobody trusts the numbers; decisions stay anecdote-driven.",
        "tradeoffs": [
          "Blind decisions"
        ],
        "consequenceMetrics": {
          "businessValue": -5
        }
      }
    ],
    "bestOptionId": "B",
    "bestAnswerExplanation": "Governed tracking plan for critical workflows first; instrumentation becomes part of definition-of-done.",
    "interviewInsight": "Tests analytics foundation-building in brownfield products.",
    "learningPoint": "Instrument where decisions live first; coverage follows."
  },
  {
    "id": 48,
    "title": "Free Tool as Acquisition Loop",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "Growth and Acquisition",
    "secondaryCompetencies": [
      "Product Strategy",
      "Business and Monetization"
    ],
    "scenario": "Marketing proposes a free standalone tool (an invoice generator) to attract your SMB target audience, hoping to convert users to your paid accounting suite. It needs 6 weeks of engineering.",
    "question": "How do you evaluate this?",
    "options": [
      {
        "id": "A",
        "text": "Build it; free tools always drive great funnels",
        "score": 1,
        "feedback": "Survivorship bias: for every famous free-tool success there are hundreds of orphaned microsites with zero conversion paths.",
        "tradeoffs": [
          "Orphan tool risk"
        ],
        "consequenceMetrics": {
          "adoption": 3,
          "businessValue": 0,
          "deliverySpeed": -3
        }
      },
      {
        "id": "B",
        "text": "Model the loop first: search volume for the tool's job, realistic tool-to-suite conversion assumptions, CAC comparison versus paid channels; if viable, ship with tight product bridges (save requires account, data flows into the suite)",
        "score": 3,
        "feedback": "Free tools work when the math works AND the bridge to the core product is structural, not a banner ad.",
        "tradeoffs": [
          "6-week bet still"
        ],
        "consequenceMetrics": {
          "adoption": 6,
          "businessValue": 7,
          "revenue": 4
        }
      },
      {
        "id": "C",
        "text": "Build five small free tools at once to maximize surface area",
        "score": 0,
        "feedback": "Multiplies the orphan problem before proving the loop once.",
        "tradeoffs": [
          "Maintenance sprawl"
        ],
        "consequenceMetrics": {
          "deliverySpeed": -6,
          "technicalDebt": 5
        }
      },
      {
        "id": "D",
        "text": "Spend the 6 weeks of capacity on paid ads instead",
        "score": 1,
        "feedback": "Comparable spend logic is right-ish, but paid channels saturate while owned acquisition assets compound—evaluate, don't default.",
        "tradeoffs": [
          "No compounding asset"
        ],
        "consequenceMetrics": {
          "adoption": 2,
          "operatingCost": 4
        }
      }
    ],
    "bestOptionId": "B",
    "bestAnswerExplanation": "Validate the acquisition-loop math and design structural bridges into the paid product before building.",
    "interviewInsight": "Tests growth-loop rigor versus tactic imitation.",
    "learningPoint": "A free tool without a structural bridge to the product is a donation to the internet."
  },
  {
    "id": 49,
    "title": "Compliance Feature vs Innovation",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "Prioritization and MVP Scoping",
    "secondaryCompetencies": [
      "Security and Compliance",
      "Enterprise SaaS"
    ],
    "scenario": "An upcoming EU regulation requires audit-log capabilities in your category within 9 months. Building compliance features takes one squad-quarter. Your innovation bets are also mid-flight and momentum matters.",
    "question": "How do you plan?",
    "options": [
      {
        "id": "A",
        "text": "Defer compliance until month 7; regulations always slip",
        "score": 0,
        "feedback": "Betting the company's EU revenue on regulatory delay rumors is not a strategy.",
        "tradeoffs": [
          "Fines",
          "Sales freeze"
        ],
        "consequenceMetrics": {
          "complianceRisk": 9,
          "revenue": -5
        }
      },
      {
        "id": "B",
        "text": "Schedule compliance work now with buffer before the deadline, scope it to actual regulatory requirements (with legal counsel), and productize it: audit logs are also an enterprise feature you can sell",
        "score": 3,
        "feedback": "Compliance deadlines are immovable; early scheduling de-risks, and audit logs double as enterprise product value.",
        "tradeoffs": [
          "One squad-quarter used"
        ],
        "consequenceMetrics": {
          "complianceRisk": -8,
          "revenue": 4,
          "businessValue": 6,
          "stakeholderConfidence": 5
        }
      },
      {
        "id": "C",
        "text": "Pause all innovation and put three squads on compliance immediately",
        "score": 1,
        "feedback": "Overkill: one squad-quarter of work doesn't need the whole org; you'd sacrifice momentum needlessly.",
        "tradeoffs": [
          "Momentum loss"
        ],
        "consequenceMetrics": {
          "complianceRisk": -7,
          "deliverySpeed": -6,
          "teamMorale": -4
        }
      },
      {
        "id": "D",
        "text": "Ask legal whether a disclaimer can defer the obligation",
        "score": 0,
        "feedback": "Regulatory obligations in your category don't disclaim away; wishful compliance.",
        "tradeoffs": [
          "Non-compliance"
        ],
        "consequenceMetrics": {
          "complianceRisk": 8
        }
      }
    ],
    "bestOptionId": "B",
    "bestAnswerExplanation": "Schedule compliance early with legal-scoped requirements, and productize it as enterprise capability.",
    "interviewInsight": "Tests regulatory planning integrated with product strategy.",
    "learningPoint": "Compliance features built early become enterprise selling points; built late they become fire drills."
  },
  {
    "id": 50,
    "title": "Champion Departure Risk",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "Enterprise SaaS",
    "secondaryCompetencies": [
      "Churn and Retention",
      "Stakeholder Management"
    ],
    "scenario": "Your product champion at a $300k account just left the company. Her replacement comes from a shop that used your main competitor. Renewal is in 5 months. Usage remains healthy across 40 teams.",
    "question": "What's your play?",
    "options": [
      {
        "id": "A",
        "text": "Wait; healthy usage across 40 teams protects the renewal",
        "score": 1,
        "feedback": "Usage helps but new decision-makers often bring their preferred stack regardless; passivity cedes the narrative.",
        "tradeoffs": [
          "Narrative vacuum"
        ],
        "consequenceMetrics": {
          "revenue": -3,
          "customerTrust": 0
        }
      },
      {
        "id": "B",
        "text": "Run a re-onboarding motion for the new leader: exec briefing with quantified value delivered (time saved, adoption breadth), intros to internal power users, her goals mapped to your roadmap, and multi-threaded relationships beyond her",
        "score": 3,
        "feedback": "New stakeholders need the value case rebuilt in their language, plus multi-threading so one person is never the single point of renewal failure.",
        "tradeoffs": [
          "CS/PM time investment"
        ],
        "consequenceMetrics": {
          "revenue": 6,
          "customerTrust": 6,
          "stakeholderConfidence": 6
        }
      },
      {
        "id": "C",
        "text": "Go over her head to the CFO who signed the original deal",
        "score": 0,
        "feedback": "Undermining the new stakeholder in week one creates an enemy with renewal authority.",
        "tradeoffs": [
          "Adversary created"
        ],
        "consequenceMetrics": {
          "revenue": -5,
          "stakeholderConfidence": -7
        }
      },
      {
        "id": "D",
        "text": "Preemptively offer a 20% renewal discount",
        "score": 1,
        "feedback": "Discounts don't counter competitor preference and anchor future negotiations lower.",
        "tradeoffs": [
          "Margin loss",
          "No preference fix"
        ],
        "consequenceMetrics": {
          "revenue": -2,
          "businessValue": -2
        }
      }
    ],
    "bestOptionId": "B",
    "bestAnswerExplanation": "Rebuild the value narrative with the new stakeholder and multi-thread the relationship.",
    "interviewInsight": "Tests enterprise relationship risk management.",
    "learningPoint": "Renewals die when the value story lives in one person's head—and that person leaves."
  },
  {
    "id": 51,
    "title": "Onboarding for Enterprise vs Self-Serve",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "Onboarding and Activation",
    "secondaryCompetencies": [
      "Enterprise SaaS",
      "UX and Design Collaboration"
    ],
    "scenario": "Your single onboarding flow serves both self-serve SMBs and enterprise accounts. Enterprise admins complain it forces irrelevant steps; SMBs abandon when they hit enterprise-oriented configuration screens.",
    "question": "How do you fix onboarding?",
    "options": [
      {
        "id": "A",
        "text": "Add a 'skip' button to every step",
        "score": 1,
        "feedback": "Universal skips let users bypass steps that matter for their segment; you'd trade friction for empty states.",
        "tradeoffs": [
          "Empty states",
          "Lower activation"
        ],
        "consequenceMetrics": {
          "adoption": 1,
          "customerTrust": 1
        }
      },
      {
        "id": "B",
        "text": "Branch onboarding by segment at entry: self-serve gets time-to-value-optimized flow with defaults; enterprise gets admin setup, security config, and team provisioning tracks, with shared components underneath",
        "score": 3,
        "feedback": "Different buyers have different first-run jobs. Branching by segment serves both without forking the codebase.",
        "tradeoffs": [
          "Two flows to maintain"
        ],
        "consequenceMetrics": {
          "adoption": 7,
          "customerTrust": 6,
          "businessValue": 7
        }
      },
      {
        "id": "C",
        "text": "Optimize the single flow for self-serve; enterprise gets human onboarding from CS",
        "score": 2,
        "feedback": "Common pattern, but pure human onboarding for enterprise scales poorly and delays time-to-value between meetings.",
        "tradeoffs": [
          "CS bottleneck"
        ],
        "consequenceMetrics": {
          "adoption": 4,
          "operatingCost": 4
        }
      },
      {
        "id": "D",
        "text": "Optimize the single flow for enterprise since they pay more",
        "score": 1,
        "feedback": "SMB self-serve is your volume engine; enterprise-first onboarding will crater signup conversion.",
        "tradeoffs": [
          "SMB abandonment"
        ],
        "consequenceMetrics": {
          "adoption": -5,
          "revenue": -2
        }
      }
    ],
    "bestOptionId": "B",
    "bestAnswerExplanation": "Branch onboarding by segment with shared components: value-speed for self-serve, configuration tracks for enterprise.",
    "interviewInsight": "Tests segmented experience design.",
    "learningPoint": "One onboarding cannot serve two buyers with different first-run jobs."
  },
  {
    "id": 52,
    "title": "Metrics Regression After Infra Migration",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "Post-Launch Monitoring",
    "secondaryCompetencies": [
      "Technical Trade-offs",
      "Metrics and Experimentation"
    ],
    "scenario": "After a database migration, several product metrics shifted: session counts up 8%, conversion down 3%. Engineering insists nothing user-facing changed. Leadership wants to know if the business is really degrading.",
    "question": "How do you investigate?",
    "options": [
      {
        "id": "A",
        "text": "Assume the migration broke tracking and ignore the changes",
        "score": 1,
        "feedback": "Plausible hypothesis but assuming without verification leaves you blind if real degradation is hiding underneath.",
        "tradeoffs": [
          "Blind spot"
        ],
        "consequenceMetrics": {
          "businessValue": -2,
          "reliability": -2
        }
      },
      {
        "id": "B",
        "text": "Audit the measurement pipeline first: compare event definitions, session stitching, timezone handling, and bot filtering pre/post migration; validate against an independent source (billing, server logs) before interpreting business change",
        "score": 3,
        "feedback": "Infra migrations routinely shift measurement semantics. Verify the instrument before reading it, using an independent data source as ground truth.",
        "tradeoffs": [
          "Days of analysis"
        ],
        "consequenceMetrics": {
          "reliability": 6,
          "businessValue": 6,
          "stakeholderConfidence": 6
        }
      },
      {
        "id": "C",
        "text": "Report the conversion drop to leadership as a business problem",
        "score": 0,
        "feedback": "Sounding a business alarm on unverified post-migration data creates panic and wrong reactions.",
        "tradeoffs": [
          "False alarm"
        ],
        "consequenceMetrics": {
          "stakeholderConfidence": -5,
          "businessValue": -3
        }
      },
      {
        "id": "D",
        "text": "Wait a month for metrics to stabilize",
        "score": 1,
        "feedback": "Metrics don't 'stabilize' from semantic changes; the discontinuity persists and you lose a month.",
        "tradeoffs": [
          "Lost month"
        ],
        "consequenceMetrics": {
          "businessValue": -2
        }
      }
    ],
    "bestOptionId": "B",
    "bestAnswerExplanation": "Audit measurement semantics against an independent source before interpreting post-migration metric shifts.",
    "interviewInsight": "Tests data forensics discipline.",
    "learningPoint": "After infrastructure changes, suspect the ruler before the patient."
  },
  {
    "id": 53,
    "title": "Pricing Page Redesign Fight",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "Pricing and Packaging",
    "secondaryCompetencies": [
      "UX and Design Collaboration",
      "Metrics and Experimentation"
    ],
    "scenario": "Your pricing page shows 4 tiers with 32 comparison rows. Conversion from pricing page to trial is 8%. Design wants radical simplification to 3 tiers and 8 rows; sales worries buyers won't see enterprise capabilities.",
    "question": "How do you settle this?",
    "options": [
      {
        "id": "A",
        "text": "Ship the simplified design; less is always more",
        "score": 1,
        "feedback": "Simplification usually helps but 'always' is dogma—complex B2B buyers do scan for specific capabilities before engaging.",
        "tradeoffs": [
          "Capability invisibility risk"
        ],
        "consequenceMetrics": {
          "adoption": 3,
          "revenue": 0
        }
      },
      {
        "id": "B",
        "text": "Keep the current page; changing pricing pages is too risky",
        "score": 0,
        "feedback": "An 8% conversion page IS the risk; refusing to iterate freezes a known underperformer.",
        "tradeoffs": [
          "Frozen underperformance"
        ],
        "consequenceMetrics": {
          "adoption": -2,
          "businessValue": -3
        }
      },
      {
        "id": "C",
        "text": "A/B test the simplified page with progressive disclosure (expandable full comparison, persona-based views), measuring trial starts AND enterprise demo requests as guarded metrics",
        "score": 3,
        "feedback": "Test resolves the opinion war; progressive disclosure serves scanners and detail-seekers; guarding demo requests protects the sales concern.",
        "tradeoffs": [
          "Test duration"
        ],
        "consequenceMetrics": {
          "adoption": 6,
          "revenue": 5,
          "stakeholderConfidence": 5
        }
      },
      {
        "id": "D",
        "text": "Let visitors choose: 'simple view' or 'detailed view' toggle as the permanent design",
        "score": 1,
        "feedback": "Choice screens before content add friction; most users never toggle. Progressive disclosure inside one design is stronger.",
        "tradeoffs": [
          "Extra decision point"
        ],
        "consequenceMetrics": {
          "adoption": 1
        }
      }
    ],
    "bestOptionId": "C",
    "bestAnswerExplanation": "A/B test simplification with progressive disclosure, guarding both trial starts and enterprise demo requests.",
    "interviewInsight": "Tests experiment design that dissolves stakeholder deadlock.",
    "learningPoint": "When design and sales disagree, instrument both of their fears and test."
  },
  {
    "id": 54,
    "title": "Acquired Product Integration",
    "type": "scenario",
    "difficulty": "hard",
    "primaryCompetency": "Product Strategy",
    "secondaryCompetencies": [
      "Technical Trade-offs",
      "Stakeholder Management"
    ],
    "scenario": "Your company acquired a smaller competitor for their superior reporting engine. Their customers fear shutdown; your customers want the reporting features now. The acquired codebase uses a different stack.",
    "question": "What integration strategy do you set?",
    "options": [
      {
        "id": "A",
        "text": "Migrate acquired customers to your product immediately and shut theirs down",
        "score": 0,
        "feedback": "Forced fast migrations bleed acquired customers—the asset you just paid for—before value integration exists.",
        "tradeoffs": [
          "Acquired churn",
          "Value destruction"
        ],
        "consequenceMetrics": {
          "revenue": -6,
          "customerTrust": -7
        }
      },
      {
        "id": "B",
        "text": "Run both products indefinitely with separate teams",
        "score": 1,
        "feedback": "Avoids pain but doubles maintenance forever and never delivers the synergy that justified the acquisition.",
        "tradeoffs": [
          "Permanent duplication"
        ],
        "consequenceMetrics": {
          "operatingCost": 7,
          "businessValue": -3
        }
      },
      {
        "id": "C",
        "text": "Publish a commitment to acquired customers (support horizon, migration incentives), integrate the reporting engine into your platform as the first synergy milestone, and sunset the standalone product only when migration paths prove parity",
        "score": 3,
        "feedback": "Sequence: stabilize acquired trust, deliver the acquisition's core value into the main product, sunset with proven paths—the standard successful playbook.",
        "tradeoffs": [
          "Multi-quarter effort",
          "Dual-run cost interim"
        ],
        "consequenceMetrics": {
          "businessValue": 8,
          "customerTrust": 6,
          "revenue": 5,
          "technicalDebt": -2
        }
      },
      {
        "id": "D",
        "text": "Rewrite the reporting engine from scratch in your stack before anything else",
        "score": 1,
        "feedback": "Rewrite-first delays all customer value and often loses the magic in translation.",
        "tradeoffs": [
          "Value delay",
          "Rewrite risk"
        ],
        "consequenceMetrics": {
          "deliverySpeed": -7,
          "businessValue": -2
        }
      }
    ],
    "bestOptionId": "C",
    "bestAnswerExplanation": "Stabilize acquired-customer trust, integrate the core asset first, sunset only with proven parity.",
    "interviewInsight": "Tests M&A product integration sequencing.",
    "learningPoint": "Acquisitions succeed when the acquired customers stay long enough to see the synergy."
  },
  {
    "id": 55,
    "title": "Behavioral: Team Disagreement on Direction",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "Communication and Leadership",
    "secondaryCompetencies": [
      "Product Execution",
      "Stakeholder Management"
    ],
    "scenario": "Half your squad believes the next quarter should focus on workflow automation; the other half insists analytics is more valuable. Debate has stalled sprint planning for two weeks and factions are forming.",
    "question": "How do you resolve it?",
    "options": [
      {
        "id": "A",
        "text": "Pick one direction by PM authority and end the debate",
        "score": 1,
        "feedback": "Decisiveness matters but authority without shared evidence leaves the losing faction disengaged.",
        "tradeoffs": [
          "Faction resentment"
        ],
        "consequenceMetrics": {
          "deliverySpeed": 4,
          "teamMorale": -4
        }
      },
      {
        "id": "B",
        "text": "Split the quarter 50/50 between both bets",
        "score": 1,
        "feedback": "Splitting guarantees neither bet gets enough force to prove anything; a compromise that satisfies no one.",
        "tradeoffs": [
          "Diluted bets"
        ],
        "consequenceMetrics": {
          "businessValue": -3,
          "teamMorale": 1
        }
      },
      {
        "id": "C",
        "text": "Timebox a week of structured evidence gathering: each faction presents customer data, revenue linkage, and effort estimates against agreed decision criteria; decide together, document the rationale, and commit",
        "score": 3,
        "feedback": "Converts opinion warfare into criteria-based decision-making; the documented rationale lets the losing side commit without losing face.",
        "tradeoffs": [
          "One more week"
        ],
        "consequenceMetrics": {
          "teamMorale": 6,
          "businessValue": 6,
          "stakeholderConfidence": 5,
          "deliverySpeed": 2
        }
      },
      {
        "id": "D",
        "text": "Escalate to your director to decide",
        "score": 0,
        "feedback": "Outsourcing your team's decision erodes your leadership and teaches the team to escalate around you.",
        "tradeoffs": [
          "Leadership erosion"
        ],
        "consequenceMetrics": {
          "teamMorale": -5,
          "stakeholderConfidence": -4
        }
      }
    ],
    "bestOptionId": "C",
    "bestAnswerExplanation": "Structure the disagreement: shared criteria, evidence per side, joint decision, documented rationale, full commitment.",
    "interviewInsight": "Tests conflict facilitation—a core PM leadership behavior.",
    "learningPoint": "Disagreements resolve on shared criteria or they don't resolve at all."
  },
  {
    "id": 56,
    "title": "SLA Tier Design",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "Enterprise SaaS",
    "secondaryCompetencies": [
      "Business and Monetization",
      "Post-Launch Monitoring"
    ],
    "scenario": "Enterprise prospects demand 99.95% uptime SLAs with financial penalties. Your actual trailing uptime is 99.9%. Sales wants to sign the higher SLA anyway since penalties are 'just service credits.'",
    "question": "What do you do?",
    "options": [
      {
        "id": "A",
        "text": "Sign 99.95% SLAs; credits are cheap and deals are valuable",
        "score": 0,
        "feedback": "Committing above demonstrated capability institutionalizes broken promises; repeated credits trigger churn clauses and reputation damage.",
        "tradeoffs": [
          "Recurring breaches",
          "Churn clauses"
        ],
        "consequenceMetrics": {
          "revenue": 5,
          "customerTrust": -6,
          "complianceRisk": 5
        }
      },
      {
        "id": "B",
        "text": "Offer the 99.9% SLA you can meet, present your reliability roadmap toward 99.95%, and tier SLA pricing: higher commitments cost more and fund the reliability investment they require",
        "score": 3,
        "feedback": "SLAs are engineering commitments with price tags. Sell what you can deliver, monetize the path to more.",
        "tradeoffs": [
          "Some deals push back"
        ],
        "consequenceMetrics": {
          "customerTrust": 7,
          "revenue": 4,
          "reliability": 5,
          "stakeholderConfidence": 5
        }
      },
      {
        "id": "C",
        "text": "Sign 99.95% but define uptime measurement loosely enough to never breach",
        "score": 0,
        "feedback": "Gaming SLA definitions gets discovered in the first serious outage dispute and reads as bad faith.",
        "tradeoffs": [
          "Bad-faith discovery"
        ],
        "consequenceMetrics": {
          "customerTrust": -8,
          "complianceRisk": 6
        }
      },
      {
        "id": "D",
        "text": "Refuse SLAs entirely; you're not an infrastructure company",
        "score": 1,
        "feedback": "Enterprise buyers in your segment require SLAs; blanket refusal exits you from the market tier.",
        "tradeoffs": [
          "Market exit"
        ],
        "consequenceMetrics": {
          "revenue": -6
        }
      }
    ],
    "bestOptionId": "B",
    "bestAnswerExplanation": "Commit to demonstrated capability, price higher tiers to fund the reliability they demand.",
    "interviewInsight": "Tests SLA economics and engineering honesty.",
    "learningPoint": "An SLA is a promise your architecture makes; don't let sales sign for it."
  },
  {
    "id": 57,
    "title": "Growth Loop vs Funnel Thinking",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "Growth and Acquisition",
    "secondaryCompetencies": [
      "Product Strategy",
      "Metrics and Experimentation"
    ],
    "scenario": "Your document tool's growth relies entirely on paid ads (rising CAC). You notice users share documents externally with non-users, but recipients hit a static read-only page with no signup hook.",
    "question": "What do you build?",
    "options": [
      {
        "id": "A",
        "text": "Increase ad spend to maintain growth targets",
        "score": 0,
        "feedback": "Feeding rising CAC without building owned loops is a treadmill that accelerates.",
        "tradeoffs": [
          "CAC treadmill"
        ],
        "consequenceMetrics": {
          "operatingCost": 7,
          "adoption": 2,
          "businessValue": -3
        }
      },
      {
        "id": "B",
        "text": "Turn sharing into a loop: recipients get interactive viewing with visible value, contextual signup prompts (comment, edit requires account), and new users are nudged toward creating and sharing their own documents",
        "score": 3,
        "feedback": "Every share is a warm-intro impression; instrumenting the viral loop compounds while paid channels saturate.",
        "tradeoffs": [
          "Loop tuning takes cycles"
        ],
        "consequenceMetrics": {
          "adoption": 8,
          "businessValue": 8,
          "operatingCost": -2,
          "revenue": 4
        }
      },
      {
        "id": "C",
        "text": "Add a 'refer a friend for credits' program",
        "score": 1,
        "feedback": "Incentivized referrals bolt on where natural loops already exist; usually weaker than instrumenting the organic share behavior itself.",
        "tradeoffs": [
          "Incentive cost",
          "Weaker signal"
        ],
        "consequenceMetrics": {
          "adoption": 3,
          "operatingCost": 2
        }
      },
      {
        "id": "D",
        "text": "Gate document sharing behind paid plans to monetize the behavior",
        "score": 0,
        "feedback": "Taxing your only viral behavior kills the loop you should be amplifying.",
        "tradeoffs": [
          "Loop destruction"
        ],
        "consequenceMetrics": {
          "revenue": 2,
          "adoption": -6
        }
      }
    ],
    "bestOptionId": "B",
    "bestAnswerExplanation": "Instrument the natural sharing behavior into a viral loop with value-first recipient experiences.",
    "interviewInsight": "Tests growth-loop identification from existing user behavior.",
    "learningPoint": "Your growth loop is usually a behavior users already do, waiting to be instrumented."
  },
  {
    "id": 58,
    "title": "Tech Debt Negotiation With Engineering",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "Technical Trade-offs",
    "secondaryCompetencies": [
      "Product Execution",
      "Stakeholder Management"
    ],
    "scenario": "Engineering requests 30% of every sprint for tech debt indefinitely. Last quarter, debt work consumed 25% but velocity still declined and two incidents occurred. You suspect debt work isn't targeting the right things.",
    "question": "How do you respond?",
    "options": [
      {
        "id": "A",
        "text": "Grant the 30% allocation; engineering knows their codebase",
        "score": 1,
        "feedback": "Trust matters, but the evidence shows current debt work isn't moving outcomes—more of it may not either.",
        "tradeoffs": [
          "Unaccountable allocation"
        ],
        "consequenceMetrics": {
          "teamMorale": 4,
          "deliverySpeed": -3,
          "businessValue": -2
        }
      },
      {
        "id": "B",
        "text": "Cut debt allocation to 10% since it isn't working",
        "score": 0,
        "feedback": "Punishing the symptom guarantees the decline accelerates; incidents will multiply.",
        "tradeoffs": [
          "Debt spiral"
        ],
        "consequenceMetrics": {
          "deliverySpeed": -4,
          "reliability": -6,
          "teamMorale": -6
        }
      },
      {
        "id": "C",
        "text": "Partner with engineering to make debt work outcome-driven: tie allocations to measurable targets (deploy frequency, incident rate, cycle time on hot paths), prioritize debt by friction data, and review impact quarterly",
        "score": 3,
        "feedback": "Debt investment should be managed like product investment: prioritized by impact, measured by outcomes, adjusted by evidence.",
        "tradeoffs": [
          "Measurement overhead",
          "Cultural shift"
        ],
        "consequenceMetrics": {
          "reliability": 6,
          "deliverySpeed": 4,
          "teamMorale": 4,
          "technicalDebt": -6
        }
      },
      {
        "id": "D",
        "text": "Demand a full technical audit by an external consultancy",
        "score": 1,
        "feedback": "External audits are slow, expensive, and often tell you what your engineers already know without building internal ownership.",
        "tradeoffs": [
          "Cost",
          "Trust signal"
        ],
        "consequenceMetrics": {
          "operatingCost": 5,
          "teamMorale": -3
        }
      }
    ],
    "bestOptionId": "C",
    "bestAnswerExplanation": "Make debt work outcome-driven: friction-data prioritization, measurable targets, quarterly impact review.",
    "interviewInsight": "Tests engineering partnership with accountability.",
    "learningPoint": "Tech debt allocation without outcome metrics is a budget, not a strategy."
  },
  {
    "id": 59,
    "title": "Self-Serve Enterprise Trial",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "Enterprise SaaS",
    "secondaryCompetencies": [
      "Growth and Acquisition",
      "Security and Compliance"
    ],
    "scenario": "Enterprise prospects want to trial your product but your only enterprise path is a sales-led POC taking 6 weeks to provision. Competitors offer self-serve enterprise trials with SSO and sandbox data.",
    "question": "What do you build?",
    "options": [
      {
        "id": "A",
        "text": "Keep sales-led POCs; enterprise buyers expect white-glove treatment",
        "score": 1,
        "feedback": "Modern enterprise buyers increasingly self-educate; 6-week provisioning loses evaluations you never knew existed.",
        "tradeoffs": [
          "Invisible losses"
        ],
        "consequenceMetrics": {
          "revenue": -4,
          "businessValue": -2
        }
      },
      {
        "id": "B",
        "text": "Build a self-serve enterprise trial: instant SSO-enabled workspace, sandbox data, admin/security features unlocked, usage-triggered sales-assist, and a 30-day window with clear POC success templates",
        "score": 3,
        "feedback": "Meets buyers where they evaluate, shortens cycles, and turns the trial into a qualification engine for sales-assist.",
        "tradeoffs": [
          "Provisioning automation work"
        ],
        "consequenceMetrics": {
          "revenue": 7,
          "adoption": 6,
          "businessValue": 7,
          "deliverySpeed": -2
        }
      },
      {
        "id": "C",
        "text": "Offer a generic demo video library instead of trials",
        "score": 1,
        "feedback": "Passive content doesn't substitute for hands-on evaluation in technical enterprise purchases.",
        "tradeoffs": [
          "Weak evaluation"
        ],
        "consequenceMetrics": {
          "adoption": 1,
          "revenue": -1
        }
      },
      {
        "id": "D",
        "text": "Give enterprise prospects access to the standard SMB trial",
        "score": 1,
        "feedback": "SMB trials lack SSO, admin controls, and security features—exactly what enterprise evaluators need to see.",
        "tradeoffs": [
          "Wrong evaluation surface"
        ],
        "consequenceMetrics": {
          "adoption": 2,
          "revenue": -2
        }
      }
    ],
    "bestOptionId": "B",
    "bestAnswerExplanation": "Self-serve enterprise trials with SSO, sandbox data, and usage-triggered sales-assist.",
    "interviewInsight": "Tests modern enterprise go-to-market product thinking.",
    "learningPoint": "Enterprise buyers now trial before they talk; make your product evaluable."
  },
  {
    "id": 60,
    "title": "Roadmap Kill Decision",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "Prioritization and MVP Scoping",
    "secondaryCompetencies": [
      "Communication and Leadership",
      "Metrics and Experimentation"
    ],
    "scenario": "A feature bet you sponsored is 70% built after 2 months, but new market data shows the target segment is shrinking and two early-access customers stopped using the prototype. Sunk cost is significant.",
    "question": "What do you do?",
    "options": [
      {
        "id": "A",
        "text": "Finish it; 70% built means you're almost there",
        "score": 0,
        "feedback": "Sunk-cost reasoning: the remaining 30% plus launch, maintenance, and opportunity costs buy a product for a shrinking segment.",
        "tradeoffs": [
          "Compounding waste"
        ],
        "consequenceMetrics": {
          "businessValue": -5,
          "deliverySpeed": -4
        }
      },
      {
        "id": "B",
        "text": "Kill it now, document why the thesis failed, harvest reusable components, communicate the decision and learning openly, and redeploy the squad to the next validated bet",
        "score": 3,
        "feedback": "Killing invalidated bets fast is elite product discipline; open communication converts waste into organizational learning.",
        "tradeoffs": [
          "Sunk-cost pain",
          "Morale management"
        ],
        "consequenceMetrics": {
          "businessValue": 6,
          "teamMorale": 2,
          "stakeholderConfidence": 5,
          "deliverySpeed": 4
        }
      },
      {
        "id": "C",
        "text": "Ship a minimal version quietly to say you delivered",
        "score": 1,
        "feedback": "Zombie-shipping to save face creates maintenance burden for a product nobody wanted.",
        "tradeoffs": [
          "Zombie feature"
        ],
        "consequenceMetrics": {
          "technicalDebt": 5,
          "businessValue": -3
        }
      },
      {
        "id": "D",
        "text": "Pause it for a quarter and revisit",
        "score": 1,
        "feedback": "Parking rarely changes market facts; it just defers the uncomfortable decision while the code rots.",
        "tradeoffs": [
          "Deferred decision"
        ],
        "consequenceMetrics": {
          "businessValue": -2,
          "technicalDebt": 3
        }
      }
    ],
    "bestOptionId": "B",
    "bestAnswerExplanation": "Kill fast, harvest learnings and components, communicate openly, redeploy.",
    "interviewInsight": "Tests sunk-cost resistance and kill discipline.",
    "learningPoint": "The most expensive features are the ones you finished after learning they'd fail."
  },
  {
    "id": 61,
    "title": "Accessibility Compliance Push",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "UX and Design Collaboration",
    "secondaryCompetencies": [
      "Security and Compliance",
      "Enterprise SaaS"
    ],
    "scenario": "A government prospect requires WCAG 2.1 AA conformance. An audit found 200+ violations across your app. Sales wants a conformance statement signed this quarter; a real remediation takes 2-3 quarters.",
    "question": "How do you proceed?",
    "options": [
      {
        "id": "A",
        "text": "Sign the conformance statement now; nobody checks accessibility claims",
        "score": 0,
        "feedback": "False conformance claims (VPATs) are legally actionable and increasingly audited in government procurement.",
        "tradeoffs": [
          "Legal exposure",
          "Contract loss"
        ],
        "consequenceMetrics": {
          "complianceRisk": 9,
          "customerTrust": -7
        }
      },
      {
        "id": "B",
        "text": "Produce an honest ACR/VPAT documenting current state, fix critical blockers first (keyboard nav, contrast, screen-reader landmarks), commit dated remediation phases, and bake accessibility into the design system to prevent regression",
        "score": 3,
        "feedback": "Honest conformance documentation with credible phased remediation wins government deals more often than perfection claims—and the design-system integration stops re-accumulation.",
        "tradeoffs": [
          "Deal risk this quarter",
          "Sustained effort"
        ],
        "consequenceMetrics": {
          "complianceRisk": -6,
          "customerTrust": 6,
          "businessValue": 6,
          "adoption": 3
        }
      },
      {
        "id": "C",
        "text": "Decline government deals until fully conformant",
        "score": 1,
        "feedback": "Unnecessarily exits a market segment when honest phased conformance is an accepted path.",
        "tradeoffs": [
          "Market exit"
        ],
        "consequenceMetrics": {
          "revenue": -4
        }
      },
      {
        "id": "D",
        "text": "Fix only the pages in the sales demo path",
        "score": 0,
        "feedback": "Demo-deep accessibility is discovered at deployment and reads as deception.",
        "tradeoffs": [
          "Deployment discovery"
        ],
        "consequenceMetrics": {
          "complianceRisk": 6,
          "customerTrust": -6
        }
      }
    ],
    "bestOptionId": "B",
    "bestAnswerExplanation": "Honest conformance documentation, critical fixes first, dated phases, design-system prevention.",
    "interviewInsight": "Tests accessibility as both compliance and product quality.",
    "learningPoint": "Accessibility debt is design debt with legal interest."
  },
  {
    "id": 62,
    "title": "Retention Cohort Mystery",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "Churn and Retention",
    "secondaryCompetencies": [
      "Metrics and Experimentation",
      "Onboarding and Activation"
    ],
    "scenario": "Cohorts acquired in Q2 retain 15% worse than Q1 cohorts at every lifecycle stage. Product hasn't changed materially. Marketing switched spend toward a new ad channel in Q2.",
    "question": "What do you investigate first?",
    "options": [
      {
        "id": "A",
        "text": "The product: something must have broken in Q2",
        "score": 1,
        "feedback": "Possible, but 'worse at every stage from day one' with stable product points upstream to acquisition mix.",
        "tradeoffs": [
          "Wrong first target"
        ],
        "consequenceMetrics": {
          "businessValue": 0
        }
      },
      {
        "id": "B",
        "text": "Acquisition mix: segment Q2 cohorts by channel, compare intent signals, activation rates, and ICP fit; the new channel is likely delivering lower-fit users",
        "score": 3,
        "feedback": "Uniform lifecycle degradation in new cohorts with stable product almost always traces to acquisition quality; channel segmentation confirms it fast.",
        "tradeoffs": [
          "Marketing friction"
        ],
        "consequenceMetrics": {
          "businessValue": 7,
          "adoption": 4,
          "operatingCost": -2
        }
      },
      {
        "id": "C",
        "text": "Launch a re-engagement email campaign for Q2 cohorts",
        "score": 1,
        "feedback": "Treatment before diagnosis; if the users are wrong-fit, re-engagement spam accelerates their exit.",
        "tradeoffs": [
          "Symptom treatment"
        ],
        "consequenceMetrics": {
          "adoption": 0,
          "customerTrust": -2
        }
      },
      {
        "id": "D",
        "text": "Wait for Q3 cohorts to confirm the trend",
        "score": 0,
        "feedback": "Another quarter of potentially wasted ad spend on low-fit acquisition while you observe.",
        "tradeoffs": [
          "Wasted spend"
        ],
        "consequenceMetrics": {
          "operatingCost": 5,
          "businessValue": -3
        }
      }
    ],
    "bestOptionId": "B",
    "bestAnswerExplanation": "Segment cohort retention by acquisition channel: new channels often deliver lower-fit users who churn uniformly faster.",
    "interviewInsight": "Tests funnel-wide thinking connecting marketing decisions to retention outcomes.",
    "learningPoint": "Retention problems are often acquisition problems observed later."
  },
  {
    "id": 63,
    "title": "Pricing Localization",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "Pricing and Packaging",
    "secondaryCompetencies": [
      "Growth and Acquisition",
      "Business and Monetization"
    ],
    "scenario": "Your $49/month plan converts poorly in Latin America and Southeast Asia despite strong trial signups. Purchasing-power differences make your price 3-4x more expensive relative to local income.",
    "question": "What pricing approach do you take?",
    "options": [
      {
        "id": "A",
        "text": "Keep global uniform pricing for fairness and simplicity",
        "score": 1,
        "feedback": "Uniform pricing quietly abandons high-growth markets to local competitors who price for the economy.",
        "tradeoffs": [
          "Market abandonment"
        ],
        "consequenceMetrics": {
          "revenue": -3,
          "adoption": -4
        }
      },
      {
        "id": "B",
        "text": "Launch purchasing-power-adjusted regional pricing with regionally-scoped features or seats to limit arbitrage, card-country verification, and monitoring for VPN abuse",
        "score": 3,
        "feedback": "PPP pricing with arbitrage controls is the standard playbook for global SaaS—captures markets uniform pricing forfeits.",
        "tradeoffs": [
          "Arbitrage policing",
          "Plan complexity"
        ],
        "consequenceMetrics": {
          "revenue": 6,
          "adoption": 7,
          "businessValue": 6,
          "operatingCost": 2
        }
      },
      {
        "id": "C",
        "text": "Offer permanent 60% discount codes distributed by regional resellers",
        "score": 1,
        "feedback": "Backdoor discounting through channels erodes price integrity and leaks globally through code-sharing forums.",
        "tradeoffs": [
          "Code leakage",
          "Price erosion"
        ],
        "consequenceMetrics": {
          "revenue": 1,
          "businessValue": -3
        }
      },
      {
        "id": "D",
        "text": "Exit low-converting regions and focus on North America and Europe",
        "score": 1,
        "feedback": "Concedes the fastest-growing SaaS markets; defensible short-term focus but strategically costly.",
        "tradeoffs": [
          "Growth ceiling"
        ],
        "consequenceMetrics": {
          "revenue": 0,
          "adoption": -3
        }
      }
    ],
    "bestOptionId": "B",
    "bestAnswerExplanation": "Purchasing-power-adjusted pricing with arbitrage safeguards.",
    "interviewInsight": "Tests global monetization strategy.",
    "learningPoint": "Price against local value perception, defend against arbitrage."
  },
  {
    "id": 64,
    "title": "Behavioral: Inherited Failing Project",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "Communication and Leadership",
    "secondaryCompetencies": [
      "Product Execution",
      "Stakeholder Management"
    ],
    "scenario": "You inherit a project 6 months in and 4 months late. The team is demoralized, stakeholders are frustrated, and the previous PM left. Your first stakeholder review is in 2 weeks.",
    "question": "What do you do in the first two weeks?",
    "options": [
      {
        "id": "A",
        "text": "Promise stakeholders a fresh start with a new aggressive timeline",
        "score": 0,
        "feedback": "Promising timelines before understanding the failure repeats the previous PM's arc.",
        "tradeoffs": [
          "Repeat failure"
        ],
        "consequenceMetrics": {
          "stakeholderConfidence": 2,
          "teamMorale": -3
        }
      },
      {
        "id": "B",
        "text": "Audit honestly: interview the team about real blockers, review scope against remaining capacity, then present stakeholders a truthful status, a descoped credible plan, and the specific changes that make this plan different",
        "score": 3,
        "feedback": "Reset credibility with truth: diagnosis, realistic descoping, and explicit process changes. Teams re-engage when the new plan is honest.",
        "tradeoffs": [
          "Uncomfortable first review"
        ],
        "consequenceMetrics": {
          "stakeholderConfidence": 6,
          "teamMorale": 6,
          "deliverySpeed": 3,
          "businessValue": 5
        }
      },
      {
        "id": "C",
        "text": "Blame the previous PM's planning in the stakeholder review",
        "score": 0,
        "feedback": "Blaming predecessors reads as excuse-making and tells the team you'll blame them next.",
        "tradeoffs": [
          "Trust damage"
        ],
        "consequenceMetrics": {
          "teamMorale": -5,
          "stakeholderConfidence": -4
        }
      },
      {
        "id": "D",
        "text": "Delay the stakeholder review until you have good news",
        "score": 1,
        "feedback": "Postponing bad news compounds it; stakeholders' imaginations are worse than your facts.",
        "tradeoffs": [
          "Compounding distrust"
        ],
        "consequenceMetrics": {
          "stakeholderConfidence": -4
        }
      }
    ],
    "bestOptionId": "B",
    "bestAnswerExplanation": "Honest audit, realistic descoped plan, explicit process changes—credibility through truth.",
    "interviewInsight": "Classic behavioral test of turnaround leadership.",
    "learningPoint": "You inherit the project's reality; you choose whether to inherit its dishonesty."
  },
  {
    "id": 65,
    "title": "Search Feature Investment",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "UX and Design Collaboration",
    "secondaryCompetencies": [
      "Technical Trade-offs",
      "Metrics and Experimentation"
    ],
    "scenario": "In-app search has a 40% null-result rate and users who search unsuccessfully churn 2x more. Fixing search properly (typo tolerance, synonyms, ranking) takes a quarter. A cheap fix (better empty states with suggestions) takes 2 weeks.",
    "question": "How do you sequence?",
    "options": [
      {
        "id": "A",
        "text": "Only ship the cheap empty-state fix; search rewrites are money pits",
        "score": 1,
        "feedback": "Empty states soften failure but 40% null results is a core experience defect correlated with churn.",
        "tradeoffs": [
          "Core defect remains"
        ],
        "consequenceMetrics": {
          "customerTrust": 1,
          "adoption": 0
        }
      },
      {
        "id": "B",
        "text": "Ship the empty-state fix now to stop the bleeding, and fund the proper search overhaul with staged delivery (typo tolerance first, then synonyms, then ranking), measuring null-rate and churn impact per stage",
        "score": 3,
        "feedback": "Two-speed response: immediate mitigation plus staged structural fix with per-stage measurement—the null-rate/churn link justifies the investment.",
        "tradeoffs": [
          "Quarter-long investment"
        ],
        "consequenceMetrics": {
          "customerTrust": 6,
          "adoption": 6,
          "businessValue": 7,
          "reliability": 4
        }
      },
      {
        "id": "C",
        "text": "Jump straight to the full quarter-long rebuild",
        "score": 1,
        "feedback": "Skipping the 2-week mitigation leaves users bleeding for a quarter unnecessarily.",
        "tradeoffs": [
          "Unmitigated interim"
        ],
        "consequenceMetrics": {
          "customerTrust": 2,
          "businessValue": 3
        }
      },
      {
        "id": "D",
        "text": "Replace search with AI chat over your data",
        "score": 1,
        "feedback": "Trend-chasing a harder problem before fixing fundamentals; chat without good retrieval inherits the same null-result disease.",
        "tradeoffs": [
          "Same disease, new UI"
        ],
        "consequenceMetrics": {
          "deliverySpeed": -4,
          "businessValue": 0
        }
      }
    ],
    "bestOptionId": "B",
    "bestAnswerExplanation": "Mitigate immediately, then fix structurally in measured stages.",
    "interviewInsight": "Tests sequencing quick relief against root-cause investment.",
    "learningPoint": "When a defect correlates with churn, mitigation and cure are both mandatory."
  },
  {
    "id": 66,
    "title": "Referral Program Economics",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "Growth and Acquisition",
    "secondaryCompetencies": [
      "Business and Monetization",
      "Metrics and Experimentation"
    ],
    "scenario": "Marketing launched double-sided referral rewards ($30 each side). Referrals grew 400%, but analysis shows 60% of referred accounts churn within 60 days and some referrers create fake accounts.",
    "question": "What do you do?",
    "options": [
      {
        "id": "A",
        "text": "Celebrate the 400% growth and scale the program",
        "score": 0,
        "feedback": "You'd be scaling incentive fraud and low-intent acquisition; the LTV math is likely deeply negative.",
        "tradeoffs": [
          "Fraud scaling",
          "Negative LTV"
        ],
        "consequenceMetrics": {
          "adoption": 4,
          "revenue": -6,
          "operatingCost": 6
        }
      },
      {
        "id": "B",
        "text": "Kill the referral program entirely",
        "score": 1,
        "feedback": "Overcorrection: some referred cohorts may be healthy; the mechanism needs redesign, not deletion.",
        "tradeoffs": [
          "Baby with bathwater"
        ],
        "consequenceMetrics": {
          "adoption": -3,
          "revenue": 0
        }
      },
      {
        "id": "C",
        "text": "Restructure incentives around retained value: rewards vest after the referred account stays active 60 days, add fraud detection (device/payment fingerprinting), and segment referral quality by referrer cohort",
        "score": 3,
        "feedback": "Vesting rewards on retention aligns the incentive with LTV and starves fraud; quality segmentation preserves the healthy core.",
        "tradeoffs": [
          "Slower reward gratification"
        ],
        "consequenceMetrics": {
          "adoption": 4,
          "revenue": 4,
          "businessValue": 7,
          "operatingCost": -3
        }
      },
      {
        "id": "D",
        "text": "Reduce the reward to $10 each side to cut costs",
        "score": 1,
        "feedback": "Cheaper fraud is still fraud; incentive structure, not size, is the problem.",
        "tradeoffs": [
          "Same disease cheaper"
        ],
        "consequenceMetrics": {
          "operatingCost": -2,
          "adoption": -1
        }
      }
    ],
    "bestOptionId": "C",
    "bestAnswerExplanation": "Vest referral rewards on retained activity and add fraud controls.",
    "interviewInsight": "Tests incentive design and growth-quality analysis.",
    "learningPoint": "Reward the outcome you want (retained users), not the action that proxies it."
  },
  {
    "id": 67,
    "title": "Status Page Honesty",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "Post-Launch Monitoring",
    "secondaryCompetencies": [
      "Communication and Leadership",
      "Enterprise SaaS"
    ],
    "scenario": "Your status page shows 'all operational' during partial degradations because updating it requires VP approval, which takes hours. Customers notice the mismatch and mock it publicly.",
    "question": "What do you change?",
    "options": [
      {
        "id": "A",
        "text": "Keep VP approval; status updates are reputationally sensitive",
        "score": 0,
        "feedback": "A status page that lies is worse than none—customers already see through it and trust the product less.",
        "tradeoffs": [
          "Credibility inversion"
        ],
        "consequenceMetrics": {
          "customerTrust": -7,
          "stakeholderConfidence": -3
        }
      },
      {
        "id": "B",
        "text": "Automate component-level status from monitoring with human-in-the-loop for incident narrative, empower on-call to post within minutes under pre-approved templates, and add SLA-relevant history",
        "score": 3,
        "feedback": "Fast honest status pages are trust infrastructure: automation for facts, templates for speed, humans for narrative.",
        "tradeoffs": [
          "Occasional false positives",
          "VP control loss"
        ],
        "consequenceMetrics": {
          "customerTrust": 7,
          "stakeholderConfidence": 4,
          "reliability": 4
        }
      },
      {
        "id": "C",
        "text": "Remove the public status page to avoid the mockery",
        "score": 0,
        "feedback": "Removing transparency confirms the criticism and violates many enterprise contracts.",
        "tradeoffs": [
          "Contract breach",
          "Confirmation"
        ],
        "consequenceMetrics": {
          "customerTrust": -8,
          "complianceRisk": 5
        }
      },
      {
        "id": "D",
        "text": "Update the status page only for full outages, not degradations",
        "score": 1,
        "feedback": "Partial degradations are exactly what enterprise customers need visibility into for their own incident triage.",
        "tradeoffs": [
          "Blind spots for customers"
        ],
        "consequenceMetrics": {
          "customerTrust": -3
        }
      }
    ],
    "bestOptionId": "B",
    "bestAnswerExplanation": "Automated component status plus empowered on-call comms under pre-approved templates.",
    "interviewInsight": "Tests operational transparency design.",
    "learningPoint": "A status page is a trust product; latency and honesty are its core features."
  },
  {
    "id": 68,
    "title": "Feature Flags Governance",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "Product Execution",
    "secondaryCompetencies": [
      "Technical Trade-offs",
      "Post-Launch Monitoring"
    ],
    "scenario": "Your codebase has 340 feature flags; nobody knows which are safe to remove. A stale flag flipped accidentally last month and broke checkout for 2 hours.",
    "question": "What do you institute?",
    "options": [
      {
        "id": "A",
        "text": "Ban feature flags going forward",
        "score": 0,
        "feedback": "Flags enable safe progressive delivery; banning them trades one failure mode for riskier big-bang releases.",
        "tradeoffs": [
          "Riskier releases"
        ],
        "consequenceMetrics": {
          "reliability": -4,
          "deliverySpeed": -5
        }
      },
      {
        "id": "B",
        "text": "Flag lifecycle governance: every flag gets an owner and expiry date, cleanup is part of definition-of-done, stale-flag alerts fire automatically, and a quarterly purge burns down the backlog",
        "score": 3,
        "feedback": "Flags are temporary scaffolding; lifecycle governance (ownership, expiry, automated staleness detection) prevents the graveyard from regrowing.",
        "tradeoffs": [
          "Cleanup discipline"
        ],
        "consequenceMetrics": {
          "reliability": 7,
          "technicalDebt": -6,
          "deliverySpeed": 2
        }
      },
      {
        "id": "C",
        "text": "Schedule a one-time cleanup sprint to delete old flags",
        "score": 1,
        "feedback": "One-time purges regrow without lifecycle rules; you'll be back in a year with 400 flags.",
        "tradeoffs": [
          "Regrowth guaranteed"
        ],
        "consequenceMetrics": {
          "technicalDebt": -3,
          "reliability": 2
        }
      },
      {
        "id": "D",
        "text": "Buy an enterprise feature-flag platform",
        "score": 1,
        "feedback": "Tooling helps visibility but doesn't create the ownership and expiry discipline that prevents accumulation.",
        "tradeoffs": [
          "Tool without process"
        ],
        "consequenceMetrics": {
          "operatingCost": 3,
          "technicalDebt": -1
        }
      }
    ],
    "bestOptionId": "B",
    "bestAnswerExplanation": "Flag lifecycle governance: owners, expiry dates, automated staleness alerts, definition-of-done cleanup.",
    "interviewInsight": "Tests operational hygiene thinking.",
    "learningPoint": "Feature flags are scaffolding; scaffolding left up becomes the building's weakness."
  },
  {
    "id": 69,
    "title": "Upmarket Motion Risk",
    "type": "scenario",
    "difficulty": "hard",
    "primaryCompetency": "Product Strategy",
    "secondaryCompetencies": [
      "Enterprise SaaS",
      "Prioritization and MVP Scoping"
    ],
    "scenario": "Your SMB SaaS ($99/mo average) is being pulled upmarket by inbound enterprise interest. Serving enterprise means SSO, audit logs, RBAC, SLAs, and a sales team. Your SMB engine still grows 40% YoY.",
    "question": "How do you decide?",
    "options": [
      {
        "id": "A",
        "text": "Pivot fully upmarket; enterprise contracts are 100x larger",
        "score": 0,
        "feedback": "Abandoning a 40%-growth engine for an unproven motion with a completely different cost structure is bet-the-company recklessness.",
        "tradeoffs": [
          "Engine abandonment"
        ],
        "consequenceMetrics": {
          "revenue": -5,
          "businessValue": -4,
          "adoption": -6
        }
      },
      {
        "id": "B",
        "text": "Ignore enterprise interest; stay pure SMB",
        "score": 1,
        "feedback": "Defensible focus, but unexamined inbound enterprise demand may represent your natural expansion path cheaply validated.",
        "tradeoffs": [
          "Unexplored expansion"
        ],
        "consequenceMetrics": {
          "businessValue": -1,
          "revenue": -2
        }
      },
      {
        "id": "C",
        "text": "Validate deliberately: quantify the inbound enterprise pipeline, scope the minimum enterprise-readiness package (SSO, audit logs, RBAC), land 3-5 design-partner deals at real prices before committing a sales motion, while protecting the SMB roadmap's core capacity",
        "score": 3,
        "feedback": "Staged upmarket entry: prove willingness-to-pay with design partners on a minimum enterprise package before restructuring the company around the motion.",
        "tradeoffs": [
          "Split attention risk"
        ],
        "consequenceMetrics": {
          "revenue": 6,
          "businessValue": 8,
          "stakeholderConfidence": 6,
          "deliverySpeed": -2
        }
      },
      {
        "id": "D",
        "text": "Build every enterprise feature first, then hire sales",
        "score": 1,
        "feedback": "Building the full enterprise stack before validated demand inverts the learning order and burns quarters.",
        "tradeoffs": [
          "Build-first waste"
        ],
        "consequenceMetrics": {
          "deliverySpeed": -6,
          "businessValue": 1
        }
      }
    ],
    "bestOptionId": "C",
    "bestAnswerExplanation": "Validate upmarket demand with design partners on a minimum enterprise package before restructuring.",
    "interviewInsight": "Tests strategic expansion discipline.",
    "learningPoint": "Go upmarket on evidence and design partners, not on inbound flattery."
  },
  {
    "id": 70,
    "title": "Data Export Friction Complaint",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "Platform and Integrations",
    "secondaryCompetencies": [
      "Customer Discovery",
      "Churn and Retention"
    ],
    "scenario": "Customers complain your data export is limited to CSV with 10k-row caps. Internally, some argue easy export makes leaving easier. A prospect's procurement team just flagged data portability as a contract requirement.",
    "question": "What's your position?",
    "options": [
      {
        "id": "A",
        "text": "Keep export limited; switching friction protects retention",
        "score": 0,
        "feedback": "Hostage-taking retention poisons trust, fails procurement requirements, and increasingly violates data-portability regulations.",
        "tradeoffs": [
          "Procurement failures",
          "Regulatory risk"
        ],
        "consequenceMetrics": {
          "customerTrust": -7,
          "complianceRisk": 6,
          "revenue": -3
        }
      },
      {
        "id": "B",
        "text": "Build robust export (full-fidelity formats, API access, scheduled exports) and treat portability as a sales asset: confidence in leaving reduces fear of committing",
        "score": 3,
        "feedback": "Data portability is now table stakes for enterprise procurement and a trust signal; retention should come from value, not exit friction.",
        "tradeoffs": [
          "Marginally easier churn"
        ],
        "consequenceMetrics": {
          "customerTrust": 7,
          "revenue": 5,
          "complianceRisk": -4,
          "businessValue": 6
        }
      },
      {
        "id": "C",
        "text": "Offer full export only on the enterprise tier",
        "score": 1,
        "feedback": "Monetizing basic portability irritates mid-tier customers and still fails the trust framing; advanced export features can be tiered, basics shouldn't.",
        "tradeoffs": [
          "Mid-tier resentment"
        ],
        "consequenceMetrics": {
          "revenue": 2,
          "customerTrust": -2
        }
      },
      {
        "id": "D",
        "text": "Provide full export via support tickets on request",
        "score": 1,
        "feedback": "Manual fulfillment doesn't scale, delays procurement checklists, and signals reluctance.",
        "tradeoffs": [
          "Scale failure"
        ],
        "consequenceMetrics": {
          "operatingCost": 4,
          "customerTrust": 0
        }
      }
    ],
    "bestOptionId": "B",
    "bestAnswerExplanation": "Treat data portability as trust infrastructure and a procurement asset.",
    "interviewInsight": "Tests customer-trust philosophy versus lock-in thinking.",
    "learningPoint": "Customers commit more freely to products they know they can leave."
  },
  {
    "id": 71,
    "title": "Behavioral: Managing Up After Mistake",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "Communication and Leadership",
    "secondaryCompetencies": [
      "Stakeholder Management",
      "Product Execution"
    ],
    "scenario": "You approved a pricing display change that accidentally showed wrong prices to 3,000 users for 6 hours. Some purchased at the incorrect lower price. Your VP is about to hear about it from finance.",
    "question": "What do you do?",
    "options": [
      {
        "id": "A",
        "text": "Wait to see if the VP notices; the exposure was small",
        "score": 0,
        "feedback": "Discovered concealment converts an honest mistake into a trust violation.",
        "tradeoffs": [
          "Trust conversion"
        ],
        "consequenceMetrics": {
          "stakeholderConfidence": -8,
          "teamMorale": -3
        }
      },
      {
        "id": "B",
        "text": "Tell your VP immediately with the facts, impact quantification, your recommendation (honor the purchases, fix the display bug, add pricing-change review gates), and what you've already set in motion",
        "score": 3,
        "feedback": "Bad news travels fast and best from you: facts, quantified impact, remediation in motion, and prevention—the accountability package.",
        "tradeoffs": [
          "Uncomfortable conversation"
        ],
        "consequenceMetrics": {
          "stakeholderConfidence": 6,
          "customerTrust": 4,
          "teamMorale": 4
        }
      },
      {
        "id": "C",
        "text": "Have the pricing bug fixed quietly and cancel the incorrect purchases",
        "score": 0,
        "feedback": "Cancelling customer purchases to hide your error compounds harm and creates a public relations timebomb.",
        "tradeoffs": [
          "Customer harm",
          "PR timebomb"
        ],
        "consequenceMetrics": {
          "customerTrust": -8,
          "complianceRisk": 5
        }
      },
      {
        "id": "D",
        "text": "Send a detailed email to the VP tonight explaining context and defending the approval process",
        "score": 1,
        "feedback": "Written self-defense before a live conversation reads as covering yourself rather than solving the problem.",
        "tradeoffs": [
          "Defensive optics"
        ],
        "consequenceMetrics": {
          "stakeholderConfidence": -2
        }
      }
    ],
    "bestOptionId": "B",
    "bestAnswerExplanation": "Deliver the bad news yourself: facts, impact, remediation in motion, prevention plan.",
    "interviewInsight": "Tests accountability instincts under pressure.",
    "learningPoint": "Own the mistake before it owns your credibility."
  },
  {
    "id": 72,
    "title": "Docs as Product Surface",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "Onboarding and Activation",
    "secondaryCompetencies": [
      "Product Execution",
      "Growth and Acquisition"
    ],
    "scenario": "Support data shows 30% of tickets could be answered by documentation, but your docs are outdated, unsearchable, and maintained by whoever has spare time. Docs pages also rank poorly in search engines.",
    "question": "What do you do about documentation?",
    "options": [
      {
        "id": "A",
        "text": "Docs are a technical-writing problem; hire a contractor to refresh them once",
        "score": 1,
        "feedback": "One-time refreshes decay immediately without ownership and workflow integration.",
        "tradeoffs": [
          "Immediate decay"
        ],
        "consequenceMetrics": {
          "operatingCost": 3,
          "customerTrust": 1
        }
      },
      {
        "id": "B",
        "text": "Treat docs as product: assign ownership, integrate doc updates into the feature definition-of-done, instrument search queries and dead-ends, restructure for SEO, and surface docs contextually in-product",
        "score": 3,
        "feedback": "Docs are an onboarding, deflection, and acquisition surface. Ownership, DoD integration, instrumentation, and contextual delivery make them compound.",
        "tradeoffs": [
          "Ongoing investment"
        ],
        "consequenceMetrics": {
          "customerTrust": 6,
          "adoption": 5,
          "operatingCost": -4,
          "businessValue": 6
        }
      },
      {
        "id": "C",
        "text": "Replace docs with an AI chatbot trained on the existing content",
        "score": 1,
        "feedback": "A chatbot over outdated, wrong docs automates the distribution of wrong answers.",
        "tradeoffs": [
          "Garbage amplification"
        ],
        "consequenceMetrics": {
          "customerTrust": -3,
          "operatingCost": 2
        }
      },
      {
        "id": "D",
        "text": "Deprioritize docs; users prefer watching video tutorials anyway",
        "score": 0,
        "feedback": "Assertion without evidence; search-driven users and enterprise evaluators depend on written docs.",
        "tradeoffs": [
          "Deflection loss",
          "SEO loss"
        ],
        "consequenceMetrics": {
          "operatingCost": 4,
          "adoption": -3
        }
      }
    ],
    "bestOptionId": "B",
    "bestAnswerExplanation": "Productize documentation: ownership, definition-of-done integration, instrumentation, contextual surfacing.",
    "interviewInsight": "Tests whether you see docs as a product surface.",
    "learningPoint": "Documentation is your highest-leverage support engineer and quietest salesperson."
  },
  {
    "id": 73,
    "title": "Concurrent Editing Conflict",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "Technical Trade-offs",
    "secondaryCompetencies": [
      "UX and Design Collaboration",
      "Product Execution"
    ],
    "scenario": "Users lose work when two people edit the same record: last-write-wins silently overwrites. True real-time collaboration (CRDT/OT) is a 2-quarter investment. Complaints are growing as teams adopt the product.",
    "question": "What do you ship?",
    "options": [
      {
        "id": "A",
        "text": "Full real-time collaborative editing; it's the modern standard",
        "score": 1,
        "feedback": "The gold standard, but 2 quarters of complexity may exceed what your use case needs—many workflows just need conflict safety.",
        "tradeoffs": [
          "Heavy investment"
        ],
        "consequenceMetrics": {
          "businessValue": 3,
          "deliverySpeed": -7
        }
      },
      {
        "id": "B",
        "text": "Ship conflict safety first: optimistic locking with presence indicators ('Maria is editing'), merge prompts on collision, and version history for recovery; evaluate full real-time later if concurrent editing is actually frequent",
        "score": 3,
        "feedback": "Presence + locking + history eliminates silent data loss in weeks, then usage data tells you whether CRDT-grade collaboration is warranted.",
        "tradeoffs": [
          "Not fully real-time"
        ],
        "consequenceMetrics": {
          "customerTrust": 7,
          "reliability": 7,
          "deliverySpeed": 4,
          "businessValue": 6
        }
      },
      {
        "id": "C",
        "text": "Show a warning banner that concurrent edits may be lost",
        "score": 0,
        "feedback": "Warning users about your data loss instead of preventing it is an abdication.",
        "tradeoffs": [
          "Data loss continues"
        ],
        "consequenceMetrics": {
          "customerTrust": -6,
          "reliability": -4
        }
      },
      {
        "id": "D",
        "text": "Make records single-editor: lock everyone else out completely",
        "score": 1,
        "feedback": "Hard locks block legitimate workflows (abandoned sessions, handoffs) and generate their own complaints.",
        "tradeoffs": [
          "Lockout frustration"
        ],
        "consequenceMetrics": {
          "reliability": 3,
          "customerTrust": -2
        }
      }
    ],
    "bestOptionId": "B",
    "bestAnswerExplanation": "Eliminate silent data loss with locking, presence, and history; let usage data justify full real-time later.",
    "interviewInsight": "Tests right-sizing technical investment to the actual user problem.",
    "learningPoint": "Users demand not losing work; real-time cursors are a bonus, not the fix."
  },
  {
    "id": 74,
    "title": "Renewal Data Story",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "Enterprise SaaS",
    "secondaryCompetencies": [
      "Communication and Leadership",
      "Business and Monetization"
    ],
    "scenario": "A $250k account's renewal is in 6 weeks. The economic buyer asks for a 'business value review.' Usage is strong but you've never quantified outcomes for them.",
    "question": "How do you prepare?",
    "options": [
      {
        "id": "A",
        "text": "Present usage statistics: logins, active users, features adopted",
        "score": 1,
        "feedback": "Activity proves adoption, not value; economic buyers renew on business outcomes, not login counts.",
        "tradeoffs": [
          "Activity ≠ value"
        ],
        "consequenceMetrics": {
          "revenue": 1,
          "stakeholderConfidence": 1
        }
      },
      {
        "id": "B",
        "text": "Build an outcome narrative with the champion: baseline the workflows you replaced, quantify time/cost savings with their own numbers, tie to their stated business goals, and co-present with internal advocates",
        "score": 3,
        "feedback": "Value reviews land when the customer's own data tells the story and their own people co-present it.",
        "tradeoffs": [
          "Prep effort with champion"
        ],
        "consequenceMetrics": {
          "revenue": 7,
          "stakeholderConfidence": 7,
          "customerTrust": 5
        }
      },
      {
        "id": "C",
        "text": "Send an ROI whitepaper from your marketing team",
        "score": 0,
        "feedback": "Generic vendor ROI claims at a renewal review signal you don't know their business.",
        "tradeoffs": [
          "Generic = disinterest"
        ],
        "consequenceMetrics": {
          "revenue": -3,
          "stakeholderConfidence": -3
        }
      },
      {
        "id": "D",
        "text": "Preemptively offer a discount to smooth the renewal",
        "score": 1,
        "feedback": "Discounting before demonstrating value teaches procurement that stalling extracts concessions.",
        "tradeoffs": [
          "Anchor lowered"
        ],
        "consequenceMetrics": {
          "revenue": -2,
          "businessValue": -2
        }
      }
    ],
    "bestOptionId": "B",
    "bestAnswerExplanation": "Quantify outcomes with the customer's own data and co-present with their advocates.",
    "interviewInsight": "Tests value realization storytelling for renewals.",
    "learningPoint": "Renewals are won with the customer's numbers, not your dashboards."
  },
  {
    "id": 75,
    "title": "Bug Bar vs Ship Date",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "Product Execution",
    "secondaryCompetencies": [
      "Stakeholder Management",
      "Post-Launch Monitoring"
    ],
    "scenario": "Release day is Friday. QA found 3 medium-severity bugs in edge-case workflows plus 1 rare data-display bug affecting numbers in exports. Marketing has a launch campaign scheduled Monday.",
    "question": "What do you decide?",
    "options": [
      {
        "id": "A",
        "text": "Ship everything Friday; the bugs are edge cases",
        "score": 1,
        "feedback": "Edge-case UX bugs are shippable, but a bug showing wrong numbers in exports is a correctness defect—those destroy trust disproportionately.",
        "tradeoffs": [
          "Data trust risk"
        ],
        "consequenceMetrics": {
          "deliverySpeed": 8,
          "customerTrust": -5,
          "reliability": -4
        }
      },
      {
        "id": "B",
        "text": "Delay the whole launch and campaign until all 4 bugs are fixed",
        "score": 1,
        "feedback": "The 3 UX edge cases don't justify moving a coordinated campaign; over-caution has real coordination costs.",
        "tradeoffs": [
          "Campaign disruption"
        ],
        "consequenceMetrics": {
          "deliverySpeed": -5,
          "stakeholderConfidence": -2,
          "reliability": 3
        }
      },
      {
        "id": "C",
        "text": "Fix the data-correctness bug before shipping (delay to Sunday if needed), ship with the 3 documented edge-case bugs and fast-follow fixes scheduled",
        "score": 3,
        "feedback": "Triage by trust impact: data correctness is a launch blocker, cosmetic edge cases are known-issues. This holds the campaign with integrity.",
        "tradeoffs": [
          "Weekend push"
        ],
        "consequenceMetrics": {
          "deliverySpeed": 6,
          "customerTrust": 5,
          "reliability": 5,
          "teamMorale": -1
        }
      },
      {
        "id": "D",
        "text": "Ship Friday but disable the export feature until it's fixed",
        "score": 2,
        "feedback": "Workable fallback if the fix can't land in time; a temporarily missing feature beats wrong numbers, though it needs comms care.",
        "tradeoffs": [
          "Feature gap at launch"
        ],
        "consequenceMetrics": {
          "deliverySpeed": 6,
          "customerTrust": 2,
          "reliability": 3
        }
      }
    ],
    "bestOptionId": "C",
    "bestAnswerExplanation": "Block on data correctness, ship with documented cosmetic edge cases and fast-follows.",
    "interviewInsight": "Tests launch triage judgment.",
    "learningPoint": "Users forgive missing polish; they don't forgive wrong numbers."
  },
  {
    "id": 76,
    "title": "Segment Prioritization Conflict",
    "type": "scenario",
    "difficulty": "hard",
    "primaryCompetency": "Product Strategy",
    "secondaryCompetencies": [
      "Customer Discovery",
      "Business and Monetization"
    ],
    "scenario": "Your horizontal project tool serves agencies, construction firms, and healthcare clinics. Each wants deeper vertical features. Capacity allows investing meaningfully in one vertical this year. Revenue is split roughly evenly.",
    "question": "How do you choose?",
    "options": [
      {
        "id": "A",
        "text": "Stay horizontal; verticals fragment the product",
        "score": 1,
        "feedback": "Horizontal purity is defensible until vertical competitors out-serve each segment; ignoring the pull has a cost too.",
        "tradeoffs": [
          "Vertical competitors"
        ],
        "consequenceMetrics": {
          "businessValue": -1,
          "revenue": -2
        }
      },
      {
        "id": "B",
        "text": "Score the verticals on evidence: market size and growth, willingness to pay for vertical depth, competitive whitespace, expansion potential, and your existing traction signals; commit to the winner with a design-partner program",
        "score": 3,
        "feedback": "Vertical bets deserve portfolio-grade analysis, then concentrated commitment with design partners—not equal sprinkling.",
        "tradeoffs": [
          "Two segments underserved"
        ],
        "consequenceMetrics": {
          "businessValue": 8,
          "revenue": 6,
          "stakeholderConfidence": 6
        }
      },
      {
        "id": "C",
        "text": "Split capacity three ways to keep every vertical happy",
        "score": 0,
        "feedback": "A third of a vertical investment per segment produces three inadequate offerings.",
        "tradeoffs": [
          "Triple mediocrity"
        ],
        "consequenceMetrics": {
          "businessValue": -4,
          "deliverySpeed": -3
        }
      },
      {
        "id": "D",
        "text": "Pick healthcare; regulated industries pay most",
        "score": 1,
        "feedback": "Sometimes true, but compliance costs and sales-cycle length can erase the premium; decide on the full evidence, not one heuristic.",
        "tradeoffs": [
          "Heuristic gamble"
        ],
        "consequenceMetrics": {
          "businessValue": 2,
          "complianceRisk": 3
        }
      }
    ],
    "bestOptionId": "B",
    "bestAnswerExplanation": "Portfolio-grade vertical scoring, then concentrated commitment with design partners.",
    "interviewInsight": "Tests strategic focus under multi-segment pull.",
    "learningPoint": "Verticalization rewards concentration; it punishes sprinkling."
  },
  {
    "id": 77,
    "title": "In-App Upsell Placement Ethics",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "Business and Monetization",
    "secondaryCompetencies": [
      "UX and Design Collaboration",
      "Pricing and Packaging"
    ],
    "scenario": "Growth wants upgrade prompts inside core workflows: a modal when users open reports and a banner in the editor. Projections show +12% upgrade clicks. Designers warn about workflow interruption and 'nagware' perception.",
    "question": "How do you decide?",
    "options": [
      {
        "id": "A",
        "text": "Ship both placements; revenue projections win",
        "score": 1,
        "feedback": "Interruptive prompts convert short-term while training users to resent and ignore all product messaging.",
        "tradeoffs": [
          "Nagware decay"
        ],
        "consequenceMetrics": {
          "revenue": 4,
          "customerTrust": -5,
          "adoption": -2
        }
      },
      {
        "id": "B",
        "text": "Place upgrade prompts at moments of demonstrated need (hitting a limit, using a premium-adjacent action), never interrupting mid-task flows, with frequency caps and easy dismissal—and measure long-term prompt blindness alongside conversions",
        "score": 3,
        "feedback": "Contextual, need-triggered monetization converts better long-term and preserves trust; frequency caps prevent the decay spiral.",
        "tradeoffs": [
          "Lower immediate clicks"
        ],
        "consequenceMetrics": {
          "revenue": 5,
          "customerTrust": 6,
          "adoption": 3,
          "businessValue": 6
        }
      },
      {
        "id": "C",
        "text": "Reject all in-app upsells; monetization belongs on the pricing page",
        "score": 1,
        "feedback": "Leaves the highest-intent moments (in-product need) unmonetized; overcorrection.",
        "tradeoffs": [
          "Missed intent moments"
        ],
        "consequenceMetrics": {
          "revenue": -3
        }
      },
      {
        "id": "D",
        "text": "Ship the modal but only show it every 10th session",
        "score": 1,
        "feedback": "Diluting a bad placement makes it rarer, not better; the interruption pattern is the problem.",
        "tradeoffs": [
          "Still interruptive"
        ],
        "consequenceMetrics": {
          "revenue": 1,
          "customerTrust": -2
        }
      }
    ],
    "bestOptionId": "B",
    "bestAnswerExplanation": "Need-triggered contextual prompts with frequency caps, measured for long-term blindness.",
    "interviewInsight": "Tests monetization UX judgment.",
    "learningPoint": "Monetize moments of need, not moments of focus."
  },
  {
    "id": 78,
    "title": "API-First Rebuild Pressure",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "Platform and Integrations",
    "secondaryCompetencies": [
      "Technical Trade-offs",
      "Product Strategy"
    ],
    "scenario": "A new CTO declares the product must become 'API-first' and proposes exposing every internal endpoint publicly within two quarters. Your public API currently covers 20% of functionality and enterprise customers keep requesting more coverage.",
    "question": "How do you shape this?",
    "options": [
      {
        "id": "A",
        "text": "Expose all internal endpoints as requested; maximum coverage fast",
        "score": 0,
        "feedback": "Internal endpoints weren't designed as contracts: no versioning, unstable semantics, security assumptions—instant breaking-change debt at scale.",
        "tradeoffs": [
          "Contract chaos",
          "Security holes"
        ],
        "consequenceMetrics": {
          "securityRisk": 7,
          "technicalDebt": 8,
          "reliability": -5
        }
      },
      {
        "id": "B",
        "text": "Prioritize API coverage by customer demand evidence: design deliberate public contracts for the top-requested capabilities, with versioning, auth scopes, rate limits, and docs; expand coverage quarterly against a published API roadmap",
        "score": 3,
        "feedback": "Public APIs are products with contracts; demand-driven deliberate expansion delivers coverage without inheriting internal chaos.",
        "tradeoffs": [
          "Slower than decree"
        ],
        "consequenceMetrics": {
          "businessValue": 7,
          "reliability": 6,
          "customerTrust": 5,
          "securityRisk": -3
        }
      },
      {
        "id": "C",
        "text": "Push back that API work isn't a priority this year",
        "score": 1,
        "feedback": "Enterprise customers are actively requesting coverage; dismissing both the CTO and customer demand is politically and strategically wrong.",
        "tradeoffs": [
          "Demand ignored"
        ],
        "consequenceMetrics": {
          "stakeholderConfidence": -4,
          "revenue": -3
        }
      },
      {
        "id": "D",
        "text": "Auto-generate API endpoints from the database schema",
        "score": 0,
        "feedback": "Schema-generated APIs leak internal structure as public contract—the worst version of option A.",
        "tradeoffs": [
          "Schema leakage"
        ],
        "consequenceMetrics": {
          "securityRisk": 8,
          "technicalDebt": 7
        }
      }
    ],
    "bestOptionId": "B",
    "bestAnswerExplanation": "Demand-prioritized deliberate API contracts with versioning and a published roadmap.",
    "interviewInsight": "Tests API productization versus decree engineering.",
    "learningPoint": "An API is a promise; don't promise your internals."
  },
  {
    "id": 79,
    "title": "Session Timeout Security Clash",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "Security and Compliance",
    "secondaryCompetencies": [
      "UX and Design Collaboration",
      "Enterprise SaaS"
    ],
    "scenario": "Security mandates 15-minute idle session timeouts after a pentest finding. Users revolt: your product involves long reading/analysis sessions and constant re-login destroys the workflow. Enterprise admins side with security.",
    "question": "How do you resolve it?",
    "options": [
      {
        "id": "A",
        "text": "Enforce 15-minute timeouts globally; security findings are non-negotiable",
        "score": 1,
        "feedback": "The finding is real but the blanket remedy ignores usage reality; users respond with password managers on public machines and shadow workarounds.",
        "tradeoffs": [
          "Workaround culture"
        ],
        "consequenceMetrics": {
          "securityRisk": -4,
          "customerTrust": -6,
          "adoption": -4
        }
      },
      {
        "id": "B",
        "text": "Keep long sessions; UX beats theoretical security risk",
        "score": 0,
        "feedback": "Dismissing pentest findings unilaterally fails audits and breaches enterprise security commitments.",
        "tradeoffs": [
          "Audit failure"
        ],
        "consequenceMetrics": {
          "securityRisk": 7,
          "complianceRisk": 6
        }
      },
      {
        "id": "C",
        "text": "Design risk-based session management: sliding activity-based renewal, re-auth only for sensitive actions (billing, exports, admin), configurable timeout policies per enterprise tenant, and modern silent-refresh auth—validated with the security team against the finding",
        "score": 3,
        "feedback": "Risk-based auth satisfies the security objective without carpet-bombing the UX; tenant-configurable policies let strict enterprises be strict.",
        "tradeoffs": [
          "Auth engineering work"
        ],
        "consequenceMetrics": {
          "securityRisk": -5,
          "customerTrust": 6,
          "adoption": 4,
          "complianceRisk": -4
        }
      },
      {
        "id": "D",
        "text": "Apply short timeouts only to enterprise accounts since their admins want it",
        "score": 1,
        "feedback": "Partial and backwards: it punishes your strictest customers with the worst UX while leaving the finding open elsewhere.",
        "tradeoffs": [
          "Inverted remedy"
        ],
        "consequenceMetrics": {
          "securityRisk": 2,
          "customerTrust": -2
        }
      }
    ],
    "bestOptionId": "C",
    "bestAnswerExplanation": "Risk-based session management: activity-based renewal, step-up auth for sensitive actions, tenant-configurable policies.",
    "interviewInsight": "Tests security-UX negotiation with real mechanisms.",
    "learningPoint": "Security and UX stop conflicting when risk is priced per action, not per minute."
  },
  {
    "id": 80,
    "title": "Roadmap Commitment in Contract",
    "type": "scenario",
    "difficulty": "hard",
    "primaryCompetency": "Enterprise SaaS",
    "secondaryCompetencies": [
      "Stakeholder Management",
      "Communication and Leadership"
    ],
    "scenario": "Legal forwards a contract redline: a $600k prospect wants four named roadmap features with delivery dates and termination rights if you miss them. Two features are in delivery; two are early discovery.",
    "question": "How do you respond?",
    "options": [
      {
        "id": "A",
        "text": "Accept the redline; $600k justifies the commitment",
        "score": 0,
        "feedback": "Termination-rights on undiscovered features converts product uncertainty into contract breach risk on the whole deal.",
        "tradeoffs": [
          "Breach exposure"
        ],
        "consequenceMetrics": {
          "revenue": 6,
          "complianceRisk": 7,
          "deliverySpeed": -3
        }
      },
      {
        "id": "B",
        "text": "Reject all roadmap language from contracts on principle",
        "score": 1,
        "feedback": "Blanket refusal loses winnable enterprise deals; contracts can safely reference what's genuinely in delivery.",
        "tradeoffs": [
          "Deal loss"
        ],
        "consequenceMetrics": {
          "revenue": -5
        }
      },
      {
        "id": "C",
        "text": "Negotiate tiered language: contractual dates only for the two in-delivery features (with buffer), best-efforts language plus quarterly roadmap reviews for the discovery items, and success-criteria definitions vetted by product and legal jointly",
        "score": 3,
        "feedback": "Match contractual strength to delivery certainty; formal reviews give the buyer confidence without betting the contract on discovery outcomes.",
        "tradeoffs": [
          "Harder negotiation"
        ],
        "consequenceMetrics": {
          "revenue": 5,
          "complianceRisk": -5,
          "stakeholderConfidence": 6,
          "customerTrust": 4
        }
      },
      {
        "id": "D",
        "text": "Accept the dates but pad them by 6 months each",
        "score": 1,
        "feedback": "Padding discovery-stage estimates still commits to unvalidated scope; buffered guesses are still guesses.",
        "tradeoffs": [
          "Buffered guessing"
        ],
        "consequenceMetrics": {
          "complianceRisk": 4,
          "revenue": 4
        }
      }
    ],
    "bestOptionId": "C",
    "bestAnswerExplanation": "Contract-grade commitments only for in-delivery work; structured best-efforts for discovery items.",
    "interviewInsight": "Tests contract negotiation as a product competency.",
    "learningPoint": "Contractual certainty must match delivery certainty, line by line."
  },
  {
    "id": 81,
    "title": "Onboarding Email Sequence Ownership",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "Onboarding and Activation",
    "secondaryCompetencies": [
      "Growth and Acquisition",
      "Metrics and Experimentation"
    ],
    "scenario": "Marketing owns the onboarding email sequence and optimizes for open rates with catchy content. Product data shows emails drive traffic to blog posts, not into activation actions. Activation is your quarter's goal.",
    "question": "What do you do?",
    "options": [
      {
        "id": "A",
        "text": "Take over the email sequence from marketing",
        "score": 1,
        "feedback": "A turf grab creates conflict; the problem is misaligned goals, not ownership location.",
        "tradeoffs": [
          "Turf war"
        ],
        "consequenceMetrics": {
          "teamMorale": -3,
          "stakeholderConfidence": -3
        }
      },
      {
        "id": "B",
        "text": "Align on a shared activation goal: co-design the sequence around user milestones (behavioral triggers, next-best-action content), measure activation lift per email rather than opens, and keep marketing's execution ownership",
        "score": 3,
        "feedback": "Fix the metric, not the org chart: behaviorally-triggered lifecycle emails measured on activation serve both teams' goals.",
        "tradeoffs": [
          "Cross-team negotiation"
        ],
        "consequenceMetrics": {
          "adoption": 7,
          "businessValue": 6,
          "teamMorale": 4,
          "stakeholderConfidence": 5
        }
      },
      {
        "id": "C",
        "text": "Ignore the emails; in-product onboarding matters more anyway",
        "score": 1,
        "feedback": "Email is a top re-engagement channel for users who bounce before activating; abandoning it leaves activation lift unclaimed.",
        "tradeoffs": [
          "Channel unclaimed"
        ],
        "consequenceMetrics": {
          "adoption": -2
        }
      },
      {
        "id": "D",
        "text": "Ask leadership to move email ownership to product",
        "score": 1,
        "feedback": "Escalating an alignment problem as an ownership dispute burns capital and delays the fix.",
        "tradeoffs": [
          "Political cost"
        ],
        "consequenceMetrics": {
          "stakeholderConfidence": -2,
          "teamMorale": -2
        }
      }
    ],
    "bestOptionId": "B",
    "bestAnswerExplanation": "Align email metrics to activation milestones with behavioral triggers; keep collaborative ownership.",
    "interviewInsight": "Tests cross-functional alignment through shared metrics.",
    "learningPoint": "Change what a channel measures and you change what it optimizes."
  },
  {
    "id": 82,
    "title": "Handling a Public Pricing Backlash",
    "type": "scenario",
    "difficulty": "hard",
    "primaryCompetency": "Communication and Leadership",
    "secondaryCompetencies": [
      "Pricing and Packaging",
      "Stakeholder Management"
    ],
    "scenario": "Your pricing increase announcement (first in 4 years, averaging +20%) hit the front page of a community forum with 800 angry comments. Some claims are inaccurate; churn threats are loud. Leadership wants damage control.",
    "question": "What do you do?",
    "options": [
      {
        "id": "A",
        "text": "Stay silent and let it blow over",
        "score": 1,
        "feedback": "Silence cedes the narrative to the angriest voices; inaccuracies calcify into accepted facts.",
        "tradeoffs": [
          "Narrative loss"
        ],
        "consequenceMetrics": {
          "customerTrust": -4,
          "revenue": -3
        }
      },
      {
        "id": "B",
        "text": "Post a direct, non-defensive response in the thread: acknowledge the frustration, correct factual errors with specifics, explain the why (cost evolution, investment areas), spotlight the grandfathering/transition options, and stay in the conversation",
        "score": 3,
        "feedback": "Showing up personally, honestly, and specifically in the community converts a rage thread into a credibility moment—the documented pattern of well-handled pricing backlashes.",
        "tradeoffs": [
          "Exposure to pile-on"
        ],
        "consequenceMetrics": {
          "customerTrust": 5,
          "stakeholderConfidence": 5,
          "revenue": 2
        }
      },
      {
        "id": "C",
        "text": "Have legal send takedown requests for the inaccurate claims",
        "score": 0,
        "feedback": "Legal threats against community posts is gasoline; screenshots of the letters become the new front page.",
        "tradeoffs": [
          "Streisand effect"
        ],
        "consequenceMetrics": {
          "customerTrust": -9,
          "stakeholderConfidence": -5
        }
      },
      {
        "id": "D",
        "text": "Roll back the pricing increase entirely",
        "score": 1,
        "feedback": "Capitulation to forum anger overrides business needs and teaches the community that outrage sets your prices.",
        "tradeoffs": [
          "Outrage pricing"
        ],
        "consequenceMetrics": {
          "revenue": -5,
          "stakeholderConfidence": -4
        }
      }
    ],
    "bestOptionId": "B",
    "bestAnswerExplanation": "Engage directly and non-defensively: acknowledge, correct, explain, spotlight transitions.",
    "interviewInsight": "Tests public communication courage under fire.",
    "learningPoint": "In a backlash, presence and specifics beat silence and press releases."
  },
  {
    "id": 83,
    "title": "Trial Abuse Pattern",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "Growth and Acquisition",
    "secondaryCompetencies": [
      "Business and Monetization",
      "Metrics and Experimentation"
    ],
    "scenario": "Data reveals 7% of 'new' trials are repeat users cycling email aliases to avoid paying. They're heavy users who clearly get value. Engineering can fingerprint and block them.",
    "question": "What's your approach?",
    "options": [
      {
        "id": "A",
        "text": "Block all detected repeat-trial users immediately",
        "score": 1,
        "feedback": "They're proven-value users; hard blocks convert them to competitors, not to customers.",
        "tradeoffs": [
          "Value users lost"
        ],
        "consequenceMetrics": {
          "revenue": 0,
          "adoption": -3
        }
      },
      {
        "id": "B",
        "text": "Ignore it; 7% is acceptable shrinkage",
        "score": 1,
        "feedback": "Tolerating systematic abuse quietly grows it and is unfair to paying customers.",
        "tradeoffs": [
          "Growing shrinkage"
        ],
        "consequenceMetrics": {
          "revenue": -3,
          "businessValue": -2
        }
      },
      {
        "id": "C",
        "text": "Treat them as your hottest unconverted segment: fingerprint to detect cycling, then intervene with tailored offers (starter tier, usage-limited free plan, discount ladder) before resorting to blocks; study what price point they'd accept",
        "score": 3,
        "feedback": "Serial trialers are demand evidence at the wrong price point; conversion design (maybe a missing tier) beats enforcement for provably-engaged users.",
        "tradeoffs": [
          "Some continued leakage"
        ],
        "consequenceMetrics": {
          "revenue": 5,
          "adoption": 4,
          "businessValue": 6
        }
      },
      {
        "id": "D",
        "text": "Require credit cards upfront for all trials to stop cycling",
        "score": 1,
        "feedback": "Punishes 93% of legitimate trialers with friction to police 7%; trial conversion will drop more than abuse.",
        "tradeoffs": [
          "Collateral friction"
        ],
        "consequenceMetrics": {
          "adoption": -6,
          "revenue": -1
        }
      }
    ],
    "bestOptionId": "C",
    "bestAnswerExplanation": "Convert serial trialers with tailored offers; their behavior is pricing-gap evidence.",
    "interviewInsight": "Tests economic thinking about abuse versus demand signals.",
    "learningPoint": "Repeat trial abuse is a price-point discovery wearing a disguise."
  },
  {
    "id": 84,
    "title": "Design Partner Program Setup",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "Customer Discovery",
    "secondaryCompetencies": [
      "Enterprise SaaS",
      "Product Execution"
    ],
    "scenario": "You're building a new analytics module and want design partners. Sales nominated 8 accounts—all large, all promised early access, none vetted for engagement capacity or problem fit.",
    "question": "How do you structure the program?",
    "options": [
      {
        "id": "A",
        "text": "Accept all 8; more input is better",
        "score": 1,
        "feedback": "Unvetted partners ghost, distort scope with pet requests, and expect delivery of whatever they mention.",
        "tradeoffs": [
          "Ghosting",
          "Scope capture"
        ],
        "consequenceMetrics": {
          "businessValue": -2,
          "deliverySpeed": -3
        }
      },
      {
        "id": "B",
        "text": "Select 4-5 partners against explicit criteria (problem acuity, engagement commitment, segment representation, willingness to be referenced), formalize mutual expectations (feedback cadence for early access), and timebox the program with exit criteria",
        "score": 3,
        "feedback": "Design partnerships are structured exchanges: representative selection, mutual obligations, and defined endpoints produce signal instead of noise.",
        "tradeoffs": [
          "Saying no to sales picks"
        ],
        "consequenceMetrics": {
          "businessValue": 7,
          "customerTrust": 5,
          "stakeholderConfidence": 4
        }
      },
      {
        "id": "C",
        "text": "Skip design partners; run surveys with the whole customer base instead",
        "score": 1,
        "feedback": "Surveys can't provide the iterative depth that shaping a new module requires.",
        "tradeoffs": [
          "Shallow signal"
        ],
        "consequenceMetrics": {
          "businessValue": -1
        }
      },
      {
        "id": "D",
        "text": "Charge partners for early access to filter for seriousness",
        "score": 2,
        "feedback": "Paid pilots signal commitment and work in some markets, but can shrink the pool below representativeness for a discovery-stage module.",
        "tradeoffs": [
          "Pool shrinkage"
        ],
        "consequenceMetrics": {
          "businessValue": 3,
          "revenue": 2
        }
      }
    ],
    "bestOptionId": "B",
    "bestAnswerExplanation": "Criteria-based partner selection with formalized mutual obligations and timeboxed exit criteria.",
    "interviewInsight": "Tests discovery program design.",
    "learningPoint": "Design partners are a two-way contract, not a VIP list."
  },
  {
    "id": 85,
    "title": "Recurring Revenue Recognition Trap",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "Business and Monetization",
    "secondaryCompetencies": [
      "Metrics and Experimentation",
      "Communication and Leadership"
    ],
    "scenario": "Your dashboard celebrates $2M 'ARR' but finance flags that the number includes one-time services, monthly customers annualized at list price despite discounts, and signed-but-unstarted contracts. The board deck is due Friday.",
    "question": "What do you do?",
    "options": [
      {
        "id": "A",
        "text": "Keep the $2M figure; everyone inflates ARR a little",
        "score": 0,
        "feedback": "Misrepresenting ARR to a board creates governance exposure and eventually a credibility collapse when diligence unpacks it.",
        "tradeoffs": [
          "Diligence bomb"
        ],
        "consequenceMetrics": {
          "complianceRisk": 7,
          "stakeholderConfidence": -8
        }
      },
      {
        "id": "B",
        "text": "Work with finance to restate honestly: separate recurring vs. services, use actual contracted rates, exclude unstarted contracts (show them as signed backlog), and present the bridge from the old to the new definition with the growth story intact",
        "score": 3,
        "feedback": "Clean metric definitions with a transparent bridge protect credibility; boards forgive smaller honest numbers, never inflated ones discovered later.",
        "tradeoffs": [
          "Smaller headline number"
        ],
        "consequenceMetrics": {
          "stakeholderConfidence": 6,
          "complianceRisk": -6,
          "businessValue": 5
        }
      },
      {
        "id": "C",
        "text": "Present both numbers: 'reported ARR' and 'conservative ARR'",
        "score": 1,
        "feedback": "Dual numbers invite the question of why the difference exists and signal you knew the headline was soft.",
        "tradeoffs": [
          "Half-honesty"
        ],
        "consequenceMetrics": {
          "stakeholderConfidence": -2
        }
      },
      {
        "id": "D",
        "text": "Delay the board deck until the numbers look better",
        "score": 0,
        "feedback": "Delaying governance reporting to avoid uncomfortable truth compounds every problem.",
        "tradeoffs": [
          "Governance failure"
        ],
        "consequenceMetrics": {
          "stakeholderConfidence": -6,
          "complianceRisk": 4
        }
      }
    ],
    "bestOptionId": "B",
    "bestAnswerExplanation": "Restate with clean definitions and a transparent bridge; protect long-term credibility.",
    "interviewInsight": "Tests metric integrity under reporting pressure.",
    "learningPoint": "ARR discipline is cheap now and ruinous to retrofit during diligence."
  },
  {
    "id": 86,
    "title": "Power User Feature Requests",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "Customer Discovery",
    "secondaryCompetencies": [
      "Prioritization and MVP Scoping",
      "UX and Design Collaboration"
    ],
    "scenario": "Your community forum's most active users demand advanced features: bulk operations, custom scripting, keyboard macros. They're 3% of users but generate most feedback. Mainstream usage data shows different friction points entirely.",
    "question": "How do you weigh their input?",
    "options": [
      {
        "id": "A",
        "text": "Prioritize the power-user requests; they're your most engaged customers",
        "score": 1,
        "feedback": "Vocal ≠ representative: optimizing for the 3% while mainstream friction persists caps growth.",
        "tradeoffs": [
          "Vocal minority capture"
        ],
        "consequenceMetrics": {
          "adoption": -2,
          "businessValue": 0
        }
      },
      {
        "id": "B",
        "text": "Ignore power users; the silent majority matters more",
        "score": 1,
        "feedback": "Power users are often champions, admins, and expansion drivers; alienating them has outsized community and churn effects.",
        "tradeoffs": [
          "Champion alienation"
        ],
        "consequenceMetrics": {
          "customerTrust": -3,
          "adoption": -1
        }
      },
      {
        "id": "C",
        "text": "Segment the roadmap explicitly: fix mainstream friction as the growth priority, serve power users through an extensibility layer (API, integrations, shortcuts) that scales without bespoke features, and communicate the split transparently",
        "score": 3,
        "feedback": "Extensibility serves the 3% structurally while the core roadmap serves the majority—both constituencies see themselves in the plan.",
        "tradeoffs": [
          "Extensibility investment"
        ],
        "consequenceMetrics": {
          "adoption": 6,
          "customerTrust": 5,
          "businessValue": 7
        }
      },
      {
        "id": "D",
        "text": "Run a feature-voting board and build the top-voted items",
        "score": 1,
        "feedback": "Voting boards amplify the same vocal minority with extra steps and create commitment expectations you can't honor.",
        "tradeoffs": [
          "Amplified bias"
        ],
        "consequenceMetrics": {
          "businessValue": -1,
          "customerTrust": 1
        }
      }
    ],
    "bestOptionId": "C",
    "bestAnswerExplanation": "Mainstream friction drives the core roadmap; power users get an extensibility layer.",
    "interviewInsight": "Tests representative prioritization versus vocal-minority capture.",
    "learningPoint": "Serve your loudest users with platforms, your quietest with the roadmap."
  },
  {
    "id": 87,
    "title": "Migration Tool for Competitor Switchers",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "Growth and Acquisition",
    "secondaryCompetencies": [
      "Product Execution",
      "Onboarding and Activation"
    ],
    "scenario": "Win/loss analysis shows 30% of lost deals cite migration effort from their current tool as the blocker—not price or features. Manual migration takes prospects 2-3 weeks of data cleanup.",
    "question": "What do you build?",
    "options": [
      {
        "id": "A",
        "text": "Publish a migration-guide PDF and a CSV template",
        "score": 1,
        "feedback": "Documentation helps the determined few; the effort barrier itself remains for everyone else.",
        "tradeoffs": [
          "Barrier intact"
        ],
        "consequenceMetrics": {
          "adoption": 1,
          "revenue": 0
        }
      },
      {
        "id": "B",
        "text": "Build first-class migration tooling for the top 2 competitor formats: automated import with field mapping, validation previews, rollback safety, and white-glove migration assistance for enterprise deals—then market it prominently",
        "score": 3,
        "feedback": "Switching cost is your top losable objection; automated migration converts blocked pipeline directly and is a durable competitive weapon.",
        "tradeoffs": [
          "Per-competitor maintenance"
        ],
        "consequenceMetrics": {
          "revenue": 7,
          "adoption": 7,
          "businessValue": 7,
          "operatingCost": 2
        }
      },
      {
        "id": "C",
        "text": "Offer a services team that does migrations manually for a fee",
        "score": 2,
        "feedback": "Works for enterprise but doesn't scale to self-serve, and charging to remove your own adoption barrier dampens conversion.",
        "tradeoffs": [
          "Scale ceiling"
        ],
        "consequenceMetrics": {
          "revenue": 3,
          "operatingCost": 4
        }
      },
      {
        "id": "D",
        "text": "Discount the first year to compensate for migration pain",
        "score": 1,
        "feedback": "Money doesn't reduce the effort; the 2-3 weeks of cleanup still blocks the decision.",
        "tradeoffs": [
          "Pain unaddressed"
        ],
        "consequenceMetrics": {
          "revenue": -1,
          "adoption": 1
        }
      }
    ],
    "bestOptionId": "B",
    "bestAnswerExplanation": "Automated migration tooling for top competitor formats, marketed as a first-class capability.",
    "interviewInsight": "Tests conversion-barrier engineering.",
    "learningPoint": "The cheapest growth is removing the moat your competitor's data built around their customers."
  },
  {
    "id": 88,
    "title": "Uptime vs Feature Velocity Investment",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "Post-Launch Monitoring",
    "secondaryCompetencies": [
      "Technical Trade-offs",
      "Enterprise SaaS"
    ],
    "scenario": "You've had 3 significant outages in 6 months, each traced to different causes. Enterprise deals now ask pointed reliability questions. Engineering proposes a dedicated reliability quarter; sales wants the roadmap protected.",
    "question": "What do you decide?",
    "options": [
      {
        "id": "A",
        "text": "Full reliability quarter: freeze features until stability is proven",
        "score": 1,
        "feedback": "Blunt freezes lose market momentum and often over-invest beyond the reliability bar customers actually need.",
        "tradeoffs": [
          "Momentum loss"
        ],
        "consequenceMetrics": {
          "reliability": 7,
          "revenue": -4,
          "deliverySpeed": -7
        }
      },
      {
        "id": "B",
        "text": "Protect the roadmap; outages happen to everyone",
        "score": 0,
        "feedback": "Three outages in six months with enterprise scrutiny is a pattern; dismissing it invites the churn-triggering fourth.",
        "tradeoffs": [
          "Pattern ignored"
        ],
        "consequenceMetrics": {
          "reliability": -6,
          "revenue": -4,
          "customerTrust": -5
        }
      },
      {
        "id": "C",
        "text": "Run a reliability program alongside the roadmap: blameless post-mortem synthesis across all 3 incidents, SLO definitions with error budgets that auto-throttle feature work when burned, and targeted fixes for the systemic gaps (deploy safety, observability, failover)",
        "score": 3,
        "feedback": "Error-budget governance connects reliability to velocity dynamically: you invest exactly when reliability data demands it, without arbitrary freezes.",
        "tradeoffs": [
          "Cultural adoption curve"
        ],
        "consequenceMetrics": {
          "reliability": 8,
          "deliverySpeed": 2,
          "customerTrust": 6,
          "stakeholderConfidence": 5
        }
      },
      {
        "id": "D",
        "text": "Hire an SRE team and delegate reliability to them",
        "score": 1,
        "feedback": "SREs help but 'reliability as someone else's job' recreates the silo that produced the incidents.",
        "tradeoffs": [
          "Silo recreation"
        ],
        "consequenceMetrics": {
          "reliability": 3,
          "operatingCost": 5
        }
      }
    ],
    "bestOptionId": "C",
    "bestAnswerExplanation": "SLOs with error budgets that dynamically govern the reliability/velocity balance.",
    "interviewInsight": "Tests modern reliability governance versus freeze/ignore extremes.",
    "learningPoint": "Error budgets turn reliability from a debate into a dashboard."
  },
  {
    "id": 89,
    "title": "White-Label Demand",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "Product Strategy",
    "secondaryCompetencies": [
      "Business and Monetization",
      "Enterprise SaaS"
    ],
    "scenario": "Three agencies want a white-label version of your product to resell under their brands, offering to commit $150k combined annually. Engineering estimates theming/multi-brand support at 6 weeks, but ongoing support and roadmap constraints worry you.",
    "question": "How do you evaluate?",
    "options": [
      {
        "id": "A",
        "text": "Build it; $150k for 6 weeks of work is obvious ROI",
        "score": 1,
        "feedback": "The 6 weeks buys the theming; the ongoing cost is roadmap constraint (every UI change reviewed against N brands) and support triangulation through resellers.",
        "tradeoffs": [
          "Hidden ongoing cost"
        ],
        "consequenceMetrics": {
          "revenue": 5,
          "technicalDebt": 5,
          "deliverySpeed": -2
        }
      },
      {
        "id": "B",
        "text": "Model the full cost first: multi-brand testing burden, support-through-reseller complexity, roadmap constraint tax; validate demand beyond three agencies; if viable, productize as a partner tier with certification, margins, and self-serve theming—not bespoke builds",
        "score": 3,
        "feedback": "White-label is a channel-business decision, not a feature: it works when productized with partner infrastructure, and drags forever when done as bespoke favors.",
        "tradeoffs": [
          "Slower yes"
        ],
        "consequenceMetrics": {
          "revenue": 5,
          "businessValue": 7,
          "technicalDebt": -2,
          "operatingCost": 1
        }
      },
      {
        "id": "C",
        "text": "Decline; white-labeling dilutes your brand",
        "score": 1,
        "feedback": "Brand dilution is manageable; dismissing a channel-revenue signal without analysis wastes a real option.",
        "tradeoffs": [
          "Option wasted"
        ],
        "consequenceMetrics": {
          "revenue": -3
        }
      },
      {
        "id": "D",
        "text": "Offer a co-branded version instead ('Powered by X')",
        "score": 2,
        "feedback": "Reasonable middle path preserving brand equity, but verify it satisfies the agencies' actual resale motivation first.",
        "tradeoffs": [
          "May not satisfy need"
        ],
        "consequenceMetrics": {
          "revenue": 2,
          "businessValue": 3
        }
      }
    ],
    "bestOptionId": "B",
    "bestAnswerExplanation": "Model total channel cost and productize as a partner tier—or decline deliberately.",
    "interviewInsight": "Tests channel-strategy evaluation beyond headline revenue.",
    "learningPoint": "White-label revenue is a channel business; price the roadmap tax before signing."
  },
  {
    "id": 90,
    "title": "Behavioral: Advocating Unpopular Priority",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "Communication and Leadership",
    "secondaryCompetencies": [
      "Prioritization and MVP Scoping",
      "Stakeholder Management"
    ],
    "scenario": "You're convinced billing-system modernization is the top priority: it blocks pricing experiments, causes invoice errors, and slows enterprise deals. But it's invisible work—leadership wants visible innovation and the team finds it boring.",
    "question": "How do you make the case?",
    "options": [
      {
        "id": "A",
        "text": "Slip billing work quietly into sprints without announcing it",
        "score": 1,
        "feedback": "Stealth infrastructure work erodes trust when discovered and never gets the sustained capacity it needs.",
        "tradeoffs": [
          "Trust erosion",
          "Under-resourced"
        ],
        "consequenceMetrics": {
          "stakeholderConfidence": -3,
          "deliverySpeed": 1
        }
      },
      {
        "id": "B",
        "text": "Translate the invisible into business language: quantify invoice-error cost, deals delayed by billing constraints, and pricing experiments blocked; frame modernization as the enabler of the visible roadmap ('every pricing initiative next year depends on this'), with a milestone plan showing incremental wins",
        "score": 3,
        "feedback": "Infrastructure cases win when translated into blocked revenue and enabled strategy, with visible milestones that maintain sponsor confidence.",
        "tradeoffs": [
          "Effortful evangelism"
        ],
        "consequenceMetrics": {
          "stakeholderConfidence": 6,
          "businessValue": 7,
          "teamMorale": 3
        }
      },
      {
        "id": "C",
        "text": "Wait for a billing catastrophe to make the case for you",
        "score": 0,
        "feedback": "Betting on customer-facing failure as your persuasion strategy costs trust you'll never fully recover.",
        "tradeoffs": [
          "Manufactured crisis"
        ],
        "consequenceMetrics": {
          "customerTrust": -6,
          "reliability": -5
        }
      },
      {
        "id": "D",
        "text": "Defer to leadership's innovation preference; they set strategy",
        "score": 1,
        "feedback": "Abdicating your conviction on a compounding problem is how billing systems stay broken for a decade.",
        "tradeoffs": [
          "Compounding neglect"
        ],
        "consequenceMetrics": {
          "businessValue": -4,
          "technicalDebt": 6
        }
      }
    ],
    "bestOptionId": "B",
    "bestAnswerExplanation": "Quantify the invisible work as blocked revenue and frame it as the enabler of visible strategy.",
    "interviewInsight": "Tests persuasion for unglamorous priorities.",
    "learningPoint": "Infrastructure gets funded when it's framed as the roadmap's landlord."
  },
  {
    "id": 91,
    "title": "Pricing Grandfathering Sunset",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "Pricing and Packaging",
    "secondaryCompetencies": [
      "Churn and Retention",
      "Communication and Leadership"
    ],
    "scenario": "Three years ago you grandfathered 2,000 accounts during a price change 'indefinitely.' Those accounts now consume disproportionate support and infrastructure while paying 45% below list. Finance wants the subsidy ended.",
    "question": "How do you handle the 'indefinite' promise?",
    "options": [
      {
        "id": "A",
        "text": "End grandfathering with 30 days notice; business needs changed",
        "score": 0,
        "feedback": "Breaking an explicit 'indefinite' promise on short notice becomes a public trust story with your name on it.",
        "tradeoffs": [
          "Promise breach story"
        ],
        "consequenceMetrics": {
          "customerTrust": -8,
          "revenue": 2
        }
      },
      {
        "id": "B",
        "text": "Honor 'indefinite' literally forever",
        "score": 1,
        "feedback": "Respects the letter of the promise but locks in a permanent subsidy the business explicitly needs to unwind—there are honest middle paths.",
        "tradeoffs": [
          "Permanent subsidy"
        ],
        "consequenceMetrics": {
          "customerTrust": 4,
          "revenue": -4
        }
      },
      {
        "id": "C",
        "text": "Acknowledge the promise explicitly, then offer a generous transition: 18-month runway, staged increases landing below current list price, added value at each stage, and personal outreach to the highest-usage accounts—accepting some churn as the honest cost",
        "score": 3,
        "feedback": "You can retire an over-promise honorably: name it, give real runway, price the transition below list, and add value—trust survives transitions handled this way.",
        "tradeoffs": [
          "Slow revenue recovery",
          "Some churn"
        ],
        "consequenceMetrics": {
          "customerTrust": 4,
          "revenue": 4,
          "stakeholderConfidence": 5
        }
      },
      {
        "id": "D",
        "text": "Keep prices but progressively limit grandfathered plans' features",
        "score": 0,
        "feedback": "Silent value erosion on a promised plan is the passive-aggressive version of option A—and reads worse when noticed.",
        "tradeoffs": [
          "Silent erosion discovery"
        ],
        "consequenceMetrics": {
          "customerTrust": -7,
          "revenue": 1
        }
      }
    ],
    "bestOptionId": "C",
    "bestAnswerExplanation": "Retire the over-promise honorably: acknowledge it, long runway, below-list landing, added value.",
    "interviewInsight": "Tests promise management across time.",
    "learningPoint": "The word 'indefinite' is a debt; repay it with generosity, not fine print."
  },
  {
    "id": 92,
    "title": "Integration Depth vs Breadth",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "Platform and Integrations",
    "secondaryCompetencies": [
      "Customer Discovery",
      "Prioritization and MVP Scoping"
    ],
    "scenario": "You can build 10 shallow integrations (sync basics, logo on the page) or 3 deep ones (bidirectional sync, embedded workflows) this year. Sales wants the logo wall for RFP checkboxes; usage data shows shallow integrations get connected once and abandoned.",
    "question": "What do you choose?",
    "options": [
      {
        "id": "A",
        "text": "Ten shallow integrations; RFP checkboxes win deals",
        "score": 1,
        "feedback": "Checkbox integrations win the RFP line-item and then disappoint in production, feeding churn and 'integration doesn't really work' reputation.",
        "tradeoffs": [
          "Checkbox disappointment"
        ],
        "consequenceMetrics": {
          "revenue": 3,
          "customerTrust": -3,
          "adoption": -2
        }
      },
      {
        "id": "B",
        "text": "Three deep integrations chosen by customer-workflow evidence, plus a low-cost credibility layer for breadth: Zapier/Make connectivity and a public API covering the logo-wall need without bespoke shallow builds",
        "score": 3,
        "feedback": "Deep integrations drive retention and expansion; the automation-platform layer answers RFP breadth at a fraction of the cost of ten bespoke shallow syncs.",
        "tradeoffs": [
          "Fewer native logos"
        ],
        "consequenceMetrics": {
          "customerTrust": 6,
          "adoption": 6,
          "businessValue": 7,
          "revenue": 4
        }
      },
      {
        "id": "C",
        "text": "Five medium-depth integrations as a compromise",
        "score": 1,
        "feedback": "Splitting the difference produces integrations too shallow to retain and too few for the logo wall—the worst of both.",
        "tradeoffs": [
          "Compromise trap"
        ],
        "consequenceMetrics": {
          "businessValue": 0,
          "adoption": 1
        }
      },
      {
        "id": "D",
        "text": "Let customer votes on the integration marketplace decide",
        "score": 1,
        "feedback": "Votes measure vocal demand, not workflow depth needs; you'd crowd-source the checkbox problem.",
        "tradeoffs": [
          "Vote bias"
        ],
        "consequenceMetrics": {
          "businessValue": 1
        }
      }
    ],
    "bestOptionId": "B",
    "bestAnswerExplanation": "Deep integrations by workflow evidence plus an automation-platform layer for breadth credibility.",
    "interviewInsight": "Tests integration portfolio strategy.",
    "learningPoint": "Integrations retain customers at the depth they abandon them at the surface."
  },
  {
    "id": 93,
    "title": "Error Message Overhaul",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "UX and Design Collaboration",
    "secondaryCompetencies": [
      "Product Execution",
      "Onboarding and Activation"
    ],
    "scenario": "Support analysis shows your error messages ('Error 4022: Operation failed') generate thousands of tickets. Users can't self-recover. Engineering considers error copy a low-priority cosmetic issue.",
    "question": "How do you drive this?",
    "options": [
      {
        "id": "A",
        "text": "File a backlog ticket to rewrite error strings when there's slack time",
        "score": 1,
        "feedback": "Slack time never comes; unowned cosmetic-labeled work dies in backlogs while tickets keep flowing.",
        "tradeoffs": [
          "Backlog death"
        ],
        "consequenceMetrics": {
          "customerTrust": 0,
          "operatingCost": 2
        }
      },
      {
        "id": "B",
        "text": "Quantify the cost (tickets per error code × handling cost), then run a systematic program: error-message standards (what happened, why, how to recover), rewrite the top 20 ticket-generating errors first with recovery actions inline, and add error-quality review to the definition of done",
        "score": 3,
        "feedback": "Error messages are recovery UX with measurable support ROI; prioritizing by ticket volume and institutionalizing standards fixes the system, not just the strings.",
        "tradeoffs": [
          "Cross-team standards work"
        ],
        "consequenceMetrics": {
          "customerTrust": 6,
          "operatingCost": -5,
          "adoption": 4,
          "businessValue": 6
        }
      },
      {
        "id": "C",
        "text": "Add a 'contact support' button to every error dialog",
        "score": 0,
        "feedback": "Institutionalizes ticket generation as the recovery path—the opposite of self-service.",
        "tradeoffs": [
          "Ticket machine"
        ],
        "consequenceMetrics": {
          "operatingCost": 6,
          "customerTrust": -2
        }
      },
      {
        "id": "D",
        "text": "Use an LLM to auto-rewrite all error messages at once",
        "score": 1,
        "feedback": "Bulk rewrites without recovery-action design and context produce friendlier-sounding but equally unhelpful messages.",
        "tradeoffs": [
          "Friendly uselessness"
        ],
        "consequenceMetrics": {
          "customerTrust": 1,
          "operatingCost": 1
        }
      }
    ],
    "bestOptionId": "B",
    "bestAnswerExplanation": "Treat errors as recovery UX: quantify ticket cost, rewrite top offenders with recovery actions, institutionalize standards.",
    "interviewInsight": "Tests attention to unglamorous experience surfaces.",
    "learningPoint": "Every error message is a fork between self-recovery and a support ticket."
  },
  {
    "id": 94,
    "title": "Freemium Cannibalization Fear",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "Pricing and Packaging",
    "secondaryCompetencies": [
      "Growth and Acquisition",
      "Metrics and Experimentation"
    ],
    "scenario": "You're launching a free tier to accelerate acquisition. Finance projects 20% of current paid SMB customers would qualify for and might downgrade to it. Growth projects 3x signup volume.",
    "question": "How do you de-risk the launch?",
    "options": [
      {
        "id": "A",
        "text": "Launch the free tier as designed; growth outweighs cannibalization",
        "score": 1,
        "feedback": "3x signups is a projection; the 20% downgrade exposure is calculated from real accounts—asymmetric confidence deserves design work first.",
        "tradeoffs": [
          "Real vs projected"
        ],
        "consequenceMetrics": {
          "adoption": 6,
          "revenue": -4
        }
      },
      {
        "id": "B",
        "text": "Design the free tier boundary against downgrade personas: cap the specific value dimensions your paid SMBs depend on (team features, history depth, volume), grandfather-lock existing paid accounts from self-serve downgrades for a period, and soft-launch to new signups only while measuring",
        "score": 3,
        "feedback": "Free-tier boundaries should be engineered against your actual paid usage data; new-signup-only soft launch isolates the acquisition effect from the cannibalization risk.",
        "tradeoffs": [
          "Slower full launch"
        ],
        "consequenceMetrics": {
          "adoption": 5,
          "revenue": 4,
          "businessValue": 7
        }
      },
      {
        "id": "C",
        "text": "Cancel the free tier; protecting paid revenue comes first",
        "score": 1,
        "feedback": "Forfeits the acquisition strategy over a manageable design problem.",
        "tradeoffs": [
          "Strategy forfeited"
        ],
        "consequenceMetrics": {
          "adoption": -4,
          "revenue": 1
        }
      },
      {
        "id": "D",
        "text": "Launch free tier but make it intentionally frustrating to use",
        "score": 0,
        "feedback": "Crippleware free tiers poison first impressions—your acquisition tool becomes a churn preview.",
        "tradeoffs": [
          "Poisoned funnel"
        ],
        "consequenceMetrics": {
          "adoption": -3,
          "customerTrust": -5
        }
      }
    ],
    "bestOptionId": "B",
    "bestAnswerExplanation": "Engineer the free boundary against real paid-usage data and soft-launch to new signups only.",
    "interviewInsight": "Tests freemium boundary design and launch de-risking.",
    "learningPoint": "A free tier is a knife: aim it at non-customers, not at your revenue."
  },
  {
    "id": 95,
    "title": "Quarterly Planning Overcommitment",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "Product Execution",
    "secondaryCompetencies": [
      "Prioritization and MVP Scoping",
      "Communication and Leadership"
    ],
    "scenario": "Your team's last 3 quarters each delivered ~60% of planned scope. Leadership plans capacity assuming 100% and treats the misses as execution failures. Next quarter's asks are already 130% of realistic capacity.",
    "question": "How do you fix the planning system?",
    "options": [
      {
        "id": "A",
        "text": "Push the team to work harder and hit 100% this time",
        "score": 0,
        "feedback": "Three consecutive quarters at 60% is a systems signal, not a motivation deficit; pushing produces burnout and attrition.",
        "tradeoffs": [
          "Burnout spiral"
        ],
        "consequenceMetrics": {
          "teamMorale": -7,
          "deliverySpeed": -2
        }
      },
      {
        "id": "B",
        "text": "Plan with evidence: use the trailing delivery rate as the capacity baseline, commit to 70-80% of it with an explicit stretch band, protect a percentage for reactive work (support escalations, incidents), and show leadership the historical data behind the model",
        "score": 3,
        "feedback": "Yesterday's-weather planning with reactive buffers converts chronic overcommitment into reliable delivery; leadership trusts teams that hit what they commit.",
        "tradeoffs": [
          "Smaller committed list"
        ],
        "consequenceMetrics": {
          "stakeholderConfidence": 6,
          "teamMorale": 6,
          "deliverySpeed": 4,
          "businessValue": 5
        }
      },
      {
        "id": "C",
        "text": "Commit to the 130% ask but privately expect 60%",
        "score": 0,
        "feedback": "Institutionalized dishonesty: stakeholders build plans on your fiction and the trust gap compounds.",
        "tradeoffs": [
          "Fiction planning"
        ],
        "consequenceMetrics": {
          "stakeholderConfidence": -6,
          "teamMorale": -4
        }
      },
      {
        "id": "D",
        "text": "Pad every estimate by 40% to absorb the gap",
        "score": 1,
        "feedback": "Blanket padding gets discovered and triggers estimate-negotiation games; transparent capacity modeling is stronger than hidden buffers.",
        "tradeoffs": [
          "Padding games"
        ],
        "consequenceMetrics": {
          "stakeholderConfidence": -2,
          "deliverySpeed": 1
        }
      }
    ],
    "bestOptionId": "B",
    "bestAnswerExplanation": "Evidence-based capacity planning with explicit buffers and the historical data shared openly.",
    "interviewInsight": "Tests planning-system repair over heroics.",
    "learningPoint": "Reliable delivery of honest commitments beats heroic delivery of fictions."
  },
  {
    "id": 96,
    "title": "Enterprise Admin Console Gap",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "Enterprise SaaS",
    "secondaryCompetencies": [
      "Security and Compliance",
      "Product Execution"
    ],
    "scenario": "Enterprise admins manage 5,000-seat deployments through the same UI as 5-person teams: no bulk user operations, no usage reporting by department, no policy controls. IT admins name this in every QBR.",
    "question": "How do you approach the admin experience?",
    "options": [
      {
        "id": "A",
        "text": "Admins are 1% of users; keep investing in end-user features",
        "score": 0,
        "feedback": "Admins are 1% of users and 100% of renewal signatures at enterprise scale; their pain is procurement's pain.",
        "tradeoffs": [
          "Renewal risk"
        ],
        "consequenceMetrics": {
          "revenue": -5,
          "customerTrust": -4
        }
      },
      {
        "id": "B",
        "text": "Build the enterprise admin console as a product: bulk operations (CSV/SCIM), departmental usage analytics, policy management (SSO enforcement, data controls), and audit trails—prioritized by QBR feedback and admin workflow interviews",
        "score": 3,
        "feedback": "Admin experience is the enterprise product: it drives deployment success, security posture, and renewal confidence—and competitors weaponize the gap.",
        "tradeoffs": [
          "End-user roadmap slows"
        ],
        "consequenceMetrics": {
          "revenue": 6,
          "customerTrust": 6,
          "businessValue": 7,
          "complianceRisk": -3
        }
      },
      {
        "id": "C",
        "text": "Give enterprise admins direct database report access as a stopgap",
        "score": 0,
        "feedback": "Raw DB access for customers is a security incident with a signature line.",
        "tradeoffs": [
          "Security incident"
        ],
        "consequenceMetrics": {
          "securityRisk": 9,
          "complianceRisk": 7
        }
      },
      {
        "id": "D",
        "text": "Offer managed-service admin support: your team does admin tasks for them",
        "score": 1,
        "feedback": "Human-powered administration masks the product gap at growing cost and doesn't satisfy IT's control requirements.",
        "tradeoffs": [
          "Cost mask"
        ],
        "consequenceMetrics": {
          "operatingCost": 6,
          "customerTrust": 1
        }
      }
    ],
    "bestOptionId": "B",
    "bestAnswerExplanation": "Build the admin console as a first-class product driven by admin workflow research.",
    "interviewInsight": "Tests recognition of the admin as the enterprise buyer's proxy.",
    "learningPoint": "End users adopt your product; admins renew it."
  },
  {
    "id": 97,
    "title": "Copycat Feature Pressure",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "Product Strategy",
    "secondaryCompetencies": [
      "Metrics and Experimentation",
      "Stakeholder Management"
    ],
    "scenario": "A competitor launched an AI assistant and their announcement went viral. Your CEO wants 'our version' in 8 weeks. Your customer interviews show no organic demand for it; your differentiation is depth of workflow automation.",
    "question": "What do you do?",
    "options": [
      {
        "id": "A",
        "text": "Build the AI assistant in 8 weeks as asked",
        "score": 1,
        "feedback": "Reactive parity shipping produces a shallow me-too that dilutes your actual differentiation story.",
        "tradeoffs": [
          "Me-too dilution"
        ],
        "consequenceMetrics": {
          "deliverySpeed": 3,
          "businessValue": -2,
          "stakeholderConfidence": 3
        }
      },
      {
        "id": "B",
        "text": "Refuse: customer interviews show no demand",
        "score": 1,
        "feedback": "Interview absence-of-demand for a new paradigm is weak evidence (customers don't request what they haven't seen); flat refusal also reads as complacency to the CEO.",
        "tradeoffs": [
          "Weak evidence basis"
        ],
        "consequenceMetrics": {
          "stakeholderConfidence": -4,
          "businessValue": 0
        }
      },
      {
        "id": "C",
        "text": "Reframe with the CEO: assess where AI genuinely amplifies your differentiation (e.g., AI-assisted automation building), ship a focused capability there as a fast probe, and instrument competitive win/loss for actual AI-driven losses to calibrate urgency",
        "score": 3,
        "feedback": "Channel the competitive energy into your moat instead of their announcement: AI applied to your differentiation, with real market signal replacing viral panic.",
        "tradeoffs": [
          "CEO negotiation"
        ],
        "consequenceMetrics": {
          "businessValue": 7,
          "stakeholderConfidence": 5,
          "deliverySpeed": 2
        }
      },
      {
        "id": "D",
        "text": "Wait two quarters to see if their feature gets adoption",
        "score": 1,
        "feedback": "Pure waiting cedes narrative and learning time; a probe teaches more than observation.",
        "tradeoffs": [
          "Passive learning"
        ],
        "consequenceMetrics": {
          "businessValue": -1
        }
      }
    ],
    "bestOptionId": "C",
    "bestAnswerExplanation": "Redirect competitive pressure into AI that amplifies your differentiation, calibrated by win/loss data.",
    "interviewInsight": "Tests strategic composure under viral competitor pressure.",
    "learningPoint": "Answer competitors from your moat, not from their press release."
  },
  {
    "id": 98,
    "title": "Multi-Year Deal Discount Demand",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "Business and Monetization",
    "secondaryCompetencies": [
      "Enterprise SaaS",
      "Stakeholder Management"
    ],
    "scenario": "Procurement at a $400k/year prospect demands 35% off for a 3-year commitment. Sales wants approval; your standard multi-year discount is 15%. The margin at 35% is barely positive after CS and infrastructure costs.",
    "question": "How do you respond?",
    "options": [
      {
        "id": "A",
        "text": "Approve 35%; multi-year lock-in is worth thin margins",
        "score": 1,
        "feedback": "Barely-positive margins for 3 years locks in the pain; deep discounts also leak through procurement networks as your 'real' price.",
        "tradeoffs": [
          "Price integrity leak"
        ],
        "consequenceMetrics": {
          "revenue": 3,
          "businessValue": -4
        }
      },
      {
        "id": "B",
        "text": "Hold at 15%; walk away otherwise",
        "score": 1,
        "feedback": "Rigid list-discipline without exploring value trades loses winnable deals over structure, not price.",
        "tradeoffs": [
          "Structure-blind loss"
        ],
        "consequenceMetrics": {
          "revenue": -4
        }
      },
      {
        "id": "C",
        "text": "Trade value for value: approve deeper discount only against concessions that reduce your cost or risk—full prepayment, case-study rights, reference calls, product feedback commitments, auto-renewal terms—and model the all-in margin before signing",
        "score": 3,
        "feedback": "Discounts should purchase something: cash-flow, marketing assets, or reduced churn risk. Value-traded concessions protect price integrity and margin logic.",
        "tradeoffs": [
          "Complex negotiation"
        ],
        "consequenceMetrics": {
          "revenue": 5,
          "businessValue": 6,
          "stakeholderConfidence": 5
        }
      },
      {
        "id": "D",
        "text": "Meet in the middle at 25% to close quickly",
        "score": 1,
        "feedback": "Split-the-difference signals your discounts are negotiable feelings rather than structured policy—procurement notes this for renewal.",
        "tradeoffs": [
          "Negotiability signal"
        ],
        "consequenceMetrics": {
          "revenue": 2,
          "businessValue": -1
        }
      }
    ],
    "bestOptionId": "C",
    "bestAnswerExplanation": "Trade discount depth for concessions that reduce cost or risk; model all-in margin first.",
    "interviewInsight": "Tests deal-desk thinking as a product leader.",
    "learningPoint": "Every discount should buy something you can name."
  },
  {
    "id": 99,
    "title": "Legacy Browser Support Cost",
    "type": "scenario",
    "difficulty": "medium",
    "primaryCompetency": "Technical Trade-offs",
    "secondaryCompetencies": [
      "Business and Monetization",
      "Product Execution"
    ],
    "scenario": "Supporting a legacy browser costs roughly 15% of frontend velocity (polyfills, testing, workarounds). Analytics show 2.1% of sessions use it—but that includes two hospital systems worth $700k ARR whose IT departments can't upgrade until next year.",
    "question": "What do you decide?",
    "options": [
      {
        "id": "A",
        "text": "Drop legacy support now; 2.1% doesn't justify 15% velocity",
        "score": 0,
        "feedback": "Raw percentages hide that the 2.1% contains $700k of contractually-relevant usage; those hospitals churn or escalate.",
        "tradeoffs": [
          "Key account breakage"
        ],
        "consequenceMetrics": {
          "deliverySpeed": 6,
          "revenue": -6,
          "customerTrust": -6
        }
      },
      {
        "id": "B",
        "text": "Keep full legacy support until usage reaches zero",
        "score": 1,
        "feedback": "An open-ended 15% velocity tax with no sunset plan subsidizes inertia indefinitely.",
        "tradeoffs": [
          "Open-ended tax"
        ],
        "consequenceMetrics": {
          "deliverySpeed": -5,
          "revenue": 1
        }
      },
      {
        "id": "C",
        "text": "Announce a dated sunset aligned to the hospitals' upgrade timeline (next year), freeze new-feature legacy parity now (maintenance-only mode), coordinate directly with the affected accounts' IT teams, and offer a limited-support mode after the date",
        "score": 3,
        "feedback": "Segment-aware sunsetting: protect the revenue-critical accounts through their constraint window while capping the velocity tax immediately via maintenance-only mode.",
        "tradeoffs": [
          "A year of reduced tax"
        ],
        "consequenceMetrics": {
          "deliverySpeed": 4,
          "revenue": 4,
          "customerTrust": 5,
          "businessValue": 6
        }
      },
      {
        "id": "D",
        "text": "Charge the hospitals a legacy-support fee to cover the cost",
        "score": 1,
        "feedback": "Surcharging customers for their IT constraints mid-contract sours relationships procurement remembers at renewal.",
        "tradeoffs": [
          "Relationship sour"
        ],
        "consequenceMetrics": {
          "revenue": 2,
          "customerTrust": -4
        }
      }
    ],
    "bestOptionId": "C",
    "bestAnswerExplanation": "Dated sunset aligned to key accounts' constraints, with immediate maintenance-only mode to cap the cost.",
    "interviewInsight": "Tests deprecation economics with account-level nuance.",
    "learningPoint": "Behind every usage percentage is a list of names; read the list before cutting."
  },
  {
    "id": 100,
    "title": "Board Narrative: Path to Efficient Growth",
    "type": "scenario",
    "difficulty": "hard",
    "primaryCompetency": "Communication and Leadership",
    "secondaryCompetencies": [
      "Business and Monetization",
      "Product Strategy"
    ],
    "scenario": "Growth slowed from 80% to 45% YoY while burn stayed flat. The board asks product to present its contribution to 'efficient growth' next week. Your teams run dozens of initiatives across acquisition, retention, and monetization.",
    "question": "What do you present?",
    "options": [
      {
        "id": "A",
        "text": "A comprehensive review of all product initiatives and their statuses",
        "score": 0,
        "feedback": "Initiative inventories signal activity, not strategy; boards read them as absence of prioritization.",
        "tradeoffs": [
          "Activity ≠ strategy"
        ],
        "consequenceMetrics": {
          "stakeholderConfidence": -5
        }
      },
      {
        "id": "B",
        "text": "A focused efficiency narrative: the 3 product levers with the highest revenue-per-engineer impact (e.g., activation lift, expansion paths, churn reduction), each with current metrics, targets, capacity allocated, and the initiatives you deliberately stopped to fund them",
        "score": 3,
        "feedback": "Boards fund focus: few levers, quantified impact per resource, and visible stop-decisions demonstrate the efficiency mindset they're asking about.",
        "tradeoffs": [
          "Exposes stopped work"
        ],
        "consequenceMetrics": {
          "stakeholderConfidence": 8,
          "businessValue": 7,
          "revenue": 4
        }
      },
      {
        "id": "C",
        "text": "Commit to ambitious growth-reacceleration targets to restore confidence",
        "score": 0,
        "feedback": "Unbacked hockey-stick promises to a board that just watched growth halve is credibility spending you can't afford.",
        "tradeoffs": [
          "Credibility spend"
        ],
        "consequenceMetrics": {
          "stakeholderConfidence": -6
        }
      },
      {
        "id": "D",
        "text": "Attribute the slowdown to market conditions and macro headwinds",
        "score": 1,
        "feedback": "Partially true perhaps, but pure external attribution reads as abdication—boards want your controllable levers.",
        "tradeoffs": [
          "Abdication read"
        ],
        "consequenceMetrics": {
          "stakeholderConfidence": -3
        }
      }
    ],
    "bestOptionId": "B",
    "bestAnswerExplanation": "Present few high-leverage levers with quantified impact, capacity math, and explicit stop-decisions.",
    "interviewInsight": "Tests executive narrative discipline for efficiency eras.",
    "learningPoint": "In efficiency mode, what you stopped is as persuasive as what you're building."
  }
];
