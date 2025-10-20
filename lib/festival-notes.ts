export interface FestivalNote {
  id: string
  title: string
  content: string
  category: "topic" | "speaker" | "insight" | "takeaway"
  tags: string[]
  date?: string // Added for new entries with dates
  speaker?: string // Added for new entries with speaker attribution
}

export const festivalNotes: FestivalNote[] = [
  // EVENT OVERVIEW
  {
    id: "event-overview",
    title: "Elevate Festival 2025 Overview",
    content: `
      Canada's premier homegrown tech and innovation festival
      Dates: October 7-9, 2025
      Location: Meridian Hall and St. Lawrence Centre, Toronto
      
      Key Stats:
      - 10,000+ global tech leaders attended
      - 250+ top-tier speakers
      - 8 specialized content tracks
      - 51% women and non-binary representation (far surpassing industry norms)
      - Sparked hundreds of thousands of dollars in startup investments
      
      Organized by Elevate (nonprofit that acquired CIX Summit in 2024)
    `,
    category: "insight",
    tags: ["overview", "statistics", "diversity", "Toronto", "Canada"],
  },

  // TOPICS & TRACKS
  {
    id: "ai-ethical-tech",
    title: "AI & Ethical Tech Transformation",
    content: `
      Main stage track focused on responsible AI development and deployment.
      
      Key themes:
      - Balancing innovation with ethical considerations
      - Regulatory frameworks for AI governance
      - Building trust in AI systems
      - Embedding ethics into AI strategy from day one
      
      This was one of the most popular tracks, scaled to Main Stage with 2,000+ seat capacity.
    `,
    category: "topic",
    tags: ["AI", "ethics", "governance", "responsible tech", "main stage"],
  },
  {
    id: "scale-up-track",
    title: "Scale Up Track",
    content: `
      Dedicated track for growing companies looking to scale operations.
      
      Topics covered:
      - Capital raising strategies
      - Talent acquisition and retention
      - International expansion
      - Building resilient business models
      - Organizational innovation
      
      Scaled to Main Stage due to high demand (2,000+ capacity).
    `,
    category: "topic",
    tags: ["scale up", "growth", "funding", "expansion", "main stage"],
  },
  {
    id: "fintech-track",
    title: "FinTech Track",
    content: `
      Emerging trends in financial technology:
      - Embedded finance and banking-as-a-service
      - Cryptocurrency and blockchain applications
      - AI in fraud detection and risk management
      - Open banking and API ecosystems
      
      Notable insight: Traditional banks increasingly partnering with fintechs rather than competing.
    `,
    category: "topic",
    tags: ["fintech", "banking", "blockchain", "innovation", "payments"],
  },
  {
    id: "moonshots-track",
    title: "Moonshots Track",
    content: `
      Bold ideas and breakthrough technologies pushing the boundaries of innovation.
      
      Focus areas:
      - Disruptive technologies
      - Long-term vision projects
      - High-risk, high-reward innovations
      - Future-focused thinking
    `,
    category: "topic",
    tags: ["moonshots", "innovation", "disruption", "future tech"],
  },
  {
    id: "shop-talk-track",
    title: "Shop Talk Track",
    content: `
      E-commerce and retail innovation discussions.
      
      Topics:
      - Future of commerce
      - Customer experience enhancement
      - Digital transformation in retail
      - Content-commerce revolution
    `,
    category: "topic",
    tags: ["ecommerce", "retail", "commerce", "customer experience"],
  },
  {
    id: "future-focus-track",
    title: "Future Focus Track",
    content: `
      Forward-looking discussions on emerging trends and technologies.
      
      Areas explored:
      - Future of work
      - Emerging technologies
      - Long-term industry trends
      - Preparing for technological shifts
    `,
    category: "topic",
    tags: ["future", "trends", "emerging tech", "innovation"],
  },
  {
    id: "investors-track",
    title: "Investors Track",
    content: `
      Specialized programming for investors and VCs.
      
      Features:
      - Strategic investor dealflow
      - 300+ curated startup-investor meetings
      - Purpose-built investor lounges
      - Funding conversations and collaborations
    `,
    category: "topic",
    tags: ["investors", "VC", "funding", "dealflow", "startups"],
  },
  {
    id: "women-in-tech-track",
    title: "Women+ in Tech Track",
    content: `
      Inclusive, action-oriented programming focused on equity and representation.
      
      Key themes:
      - Leadership development
      - Representation in tech
      - Building a more balanced tech ecosystem
      - Equity and inclusion strategies
      
      Featured dedicated Women+ in Tech Lounge (presented by Interac).
    `,
    category: "topic",
    tags: ["women in tech", "diversity", "inclusion", "equity", "leadership"],
  },

  // SPEAKERS
  {
    id: "speaker-simu-liu",
    title: "Simu Liu - Opening Night Keynote",
    content: `
      Star of Marvel's Shang-Chi and the Legend of the Ten Rings
      TIME 100 honoree
      Founder of Markham Valley Ventures
      
      Key themes:
      - Cultural leadership and entrepreneurial ambition
      - Representation in tech and media
      - Building authentic brands
      - Leveraging platform for social impact
      
      Kicked off the festival with a powerful keynote embodying the intersection of culture and entrepreneurship.
    `,
    category: "speaker",
    tags: ["keynote", "Simu Liu", "representation", "entrepreneurship", "venture capital"],
  },
  {
    id: "speaker-clay-bavor",
    title: "Clay Bavor - Co-Founder of Sierra",
    content: `
      Co-Founder of Sierra - redefining customer engagement through AI
      Company raised $285M in funding
      Notable clients: SiriusXM, WeightWatchers
      
      Focus areas:
      - AI-powered customer engagement
      - Scaling AI products
      - Enterprise AI adoption
      - Building trust in AI systems
    `,
    category: "speaker",
    tags: ["Clay Bavor", "Sierra", "AI", "customer engagement", "enterprise"],
  },
  {
    id: "speaker-chris-urmson",
    title: "Chris Urmson - CEO of Aurora",
    content: `
      CEO of Aurora - autonomous vehicle pioneer
      Former leader of Google's self-driving car project
      
      Topics discussed:
      - Future of autonomous vehicles
      - AI in transportation
      - Safety and regulatory challenges
      - Scaling autonomous technology
    `,
    category: "speaker",
    tags: ["Chris Urmson", "Aurora", "autonomous vehicles", "AI", "transportation"],
  },
  {
    id: "speaker-dorothy-kilroy",
    title: "Dorothy Kilroy - CCO of OURA Health",
    content: `
      Chief Commercial Officer at OURA Health
      Former Airbnb executive
      
      Achievements at OURA:
      - Scaling partnerships with Best Buy, Gucci, and Strava
      - Building strategic brand partnerships
      - Expanding health tech market presence
      
      Insights on partnership strategy and brand building in health tech.
    `,
    category: "speaker",
    tags: ["Dorothy Kilroy", "OURA", "health tech", "partnerships", "brand strategy"],
  },
  {
    id: "speaker-erika-ayers-badan",
    title: "Erika Ayers Badan - CEO of Food52",
    content: `
      CEO of Food52
      Previously grew Barstool Sports from $15M to $450M valuation
      
      Expertise:
      - Content-commerce revolution
      - Scaling media companies
      - Building engaged communities
      - Digital transformation in media
      
      Leading Food52's evolution in the content-commerce space.
    `,
    category: "speaker",
    tags: ["Erika Ayers Badan", "Food52", "content commerce", "media", "scaling"],
  },
  {
    id: "speaker-ida-tin",
    title: "Ida Tin - Co-Founder of Clue",
    content: `
      Co-Founder of Clue - coined the term "femtech"
      Platform used by 12M+ people globally
      
      Key contributions:
      - Pioneering femtech industry
      - Building inclusive health technology
      - Scaling global health platforms
      - Advocating for women's health innovation
      
      Recognized as a leader in creating technology for underserved markets.
    `,
    category: "speaker",
    tags: ["Ida Tin", "Clue", "femtech", "health tech", "women's health", "innovation"],
  },
  {
    id: "speaker-althea-wishloff",
    title: "Althea Wishloff - GP at Raven Capital",
    content: `
      General Partner at Raven Capital
      Leading the first venture fund dedicated to Indigenous and Native American entrepreneurs
      
      Focus areas:
      - Indigenous entrepreneurship
      - Inclusive venture capital
      - Underrepresented founder support
      - Building equitable investment ecosystems
      
      Breaking barriers in venture capital and creating opportunities for Indigenous founders.
    `,
    category: "speaker",
    tags: ["Althea Wishloff", "Raven Capital", "Indigenous", "venture capital", "diversity", "inclusion"],
  },
  {
    id: "speaker-harley-finkelstein",
    title: "Harley Finkelstein - President of Shopify",
    content: `
      President of Shopify
      Celebrated Canadian business leader and innovation advocate
      
      Featured session: "The Modern Company"
      
      Key topics:
      - AI adoption in commerce
      - Canada's brain drain challenges
      - Organizational innovation
      - Empowering entrepreneurs through technology
      - Building resilient business models
      - Future of commerce
      
      Actionable advice: Focus on solving real problems, not just building technology.
    `,
    category: "speaker",
    tags: ["Harley Finkelstein", "Shopify", "commerce", "entrepreneurship", "AI", "Canada"],
  },
  {
    id: "speaker-hussein-fazal",
    title: "Hussein Fazal - CEO of Super.com",
    content: `
      CEO of Super.com
      Serial entrepreneur
      EY's Entrepreneur of the Year
      Generated $1B+ in sales across ventures
      
      Expertise:
      - Building and scaling startups
      - E-commerce innovation
      - Growth strategies
      - Entrepreneurial leadership
    `,
    category: "speaker",
    tags: ["Hussein Fazal", "Super.com", "entrepreneurship", "ecommerce", "scaling"],
  },
  {
    id: "speaker-diana-mclachlan",
    title: "Diana McLachlan - Wealthsimple",
    content: `
      Featured in session: "The Future of Work"
      
      Topics covered:
      - AI adoption in financial services
      - Future of work trends
      - Organizational transformation
      - Building modern workplaces
      
      One of the can't-miss sessions at the festival.
    `,
    category: "speaker",
    tags: ["Diana McLachlan", "Wealthsimple", "future of work", "AI", "fintech"],
  },
  {
    id: "speaker-chris-urmson-detailed",
    title: "Chris Urmson - Autonomous Trucking & Job Displacement",
    content: `
      Canadian co-founder and CEO of Aurora (American autonomous trucking company)
      
      Key discussion: AI's potential to replace human workers
      
      Main arguments:
      - Jobs will shift around rather than being eliminated
      - AI will create more jobs than it renders obsolete
      - Nature of many roles will evolve
      
      Trucking industry insights:
      - Number of truck drivers needed far exceeds people interested in the work
      - Average driver is nearing retirement age
      - Predicts within 25 years, humans will no longer drive heavy trucks
      - Compares danger level to coal mining
      
      Quote: "If you look around any room you're in, everything in that room at one point moved on a truck. Our whole economy, our whole way of life, is dependent on that. [If] we can bring in technology to make it safer, make it more sustainable, and more efficient, it's an incredible opportunity."
    `,
    category: "speaker",
    tags: ["Chris Urmson", "Aurora", "autonomous vehicles", "job displacement", "AI impact", "trucking", "safety"],
  },
  {
    id: "speaker-simu-liu-detailed",
    title: "Simu Liu - AI as Transformative as Industrial Revolution",
    content: `
      Canadian actor (Marvel's Shang-Chi)
      Dragons' Den dragon
      General Partner at Markham Valley Ventures
      
      Personal story: Fired from Deloitte after just nine months (generated laughs)
      
      AI perspective:
      - Believes AI will be "as transformative as the industrial revolution"
      - Personal worry about being replaced by (or paired with) AI actors
      - Concerned about AI's impact on creative industries
      
      Represents the intersection of entertainment, entrepreneurship, and AI anxiety.
    `,
    category: "speaker",
    tags: ["Simu Liu", "AI transformation", "job displacement", "entertainment", "venture capital", "Dragons Den"],
  },
  {
    id: "speaker-chris-lehane-openai",
    title: "Chris Lehane - OpenAI on Democratization & Copyright",
    content: `
      Chief Global Affairs Officer at OpenAI
      
      Key discussion with TechCrunch editor-in-chief Connie Loizos:
      - Whether ChatGPT democratizes information or competes with publishers
      - Addressed recent Sora video-generation app release
      - Discussed copyright complaints and lawsuits
      
      Canadian publishers suing OpenAI:
      - Torstar
      - Postmedia
      - The Globe and Mail
      - CBC/Radio-Canada
      - The Canadian Press
      
      Quote: "Are we going to truly be able to democratize this? There's going to be enormous amounts of money generated by this, and are everyday people able to participate if the pie really expanded?"
      
      Lehane stated this question worries him "every night."
    `,
    category: "speaker",
    tags: ["Chris Lehane", "OpenAI", "ChatGPT", "copyright", "democratization", "Sora", "publishers"],
  },
  {
    id: "speaker-justin-scaini-kids-help-phone",
    title: "Justin Scaini - AI's Dual Role in Youth Mental Health",
    content: `
      Leads strategy, innovation, and transformation at Kids Help Phone
      
      Illustrated AI's social dichotomies:
      - Tech has become both problem AND solution for Canada's youth mental health crisis
      
      Problem: Existing chatbots trained on adults fail to notice cries for help from young people
      
      Solution: Kids Help Phone developing new product that:
      - Blends human connection with AI
      - Trained on Kids Help Phone's own data
      - Provides "new standard of care"
      - Expands capabilities without creating additional harms
      
      Demonstrates importance of context-specific AI training and human oversight.
    `,
    category: "speaker",
    tags: ["Justin Scaini", "Kids Help Phone", "mental health", "youth", "AI ethics", "chatbots", "healthcare"],
  },
  {
    id: "speaker-ndidi-oteh-accenture",
    title: "Ndidi Oteh - Human Connection in Customer Experience",
    content: `
      Global CEO of Accenture Song
      
      Key data point: 70% of customers make purchasing decisions based on customer experience
      
      Main message: "When you think about how you are differentiating yourself... you have to make sure that the AI and the technology that you use is helping you create more human connections, not less."
      
      Emphasis on:
      - Customer experience as competitive differentiator
      - AI should enhance, not replace, human connection
      - Technology must serve human needs
    `,
    category: "speaker",
    tags: ["Ndidi Oteh", "Accenture Song", "customer experience", "human connection", "AI", "CX"],
  },
  {
    id: "speaker-nick-frosst-cohere",
    title: "Nick Frosst - LLM Plateau & AI as a Tool",
    content: `
      Co-founder of Cohere
      
      Key insights on AI limitations:
      - Large language model performance is beginning to plateau
      - Still room to improve, especially in adoption
      - Limitations have become clearer
      
      Quote: "A few years ago, there was this idea that these models will just become gods. I think it's very clear that now they won't."
      
      Advice to entrepreneurs:
      "I would encourage you to remember that AI is a tool for the thing you're trying to build. What you're trying to do is independent of AI."
      
      Emphasized:
      - Focus on solving real problems, not just implementing AI
      - AI is a means to an end, not the end itself
      - Cutting through the "enormous amount of rhetoric" around AI
    `,
    category: "speaker",
    tags: ["Nick Frosst", "Cohere", "LLM", "AI limitations", "entrepreneurship", "AI plateau", "pragmatism"],
  },
  {
    id: "speaker-amber-mac",
    title: "Amber Mac - Opening Night Host",
    content: `
      President of AmberMac Media
      
      Role: Hosted Opening Night main stage event
      
      Expertise:
      - Technology journalism and commentary
      - Event hosting and moderation
      - Canadian tech ecosystem
    `,
    category: "speaker",
    tags: ["Amber Mac", "host", "opening night", "media"],
  },
  {
    id: "speaker-4korners",
    title: "4KORNERS - Opening Night Entertainment",
    content: `
      DJ from 4KORNERS Entertainment
      Toronto Raptors' official DJ
      
      Role: Provided entertainment for Opening Night
      
      Added energy and excitement to the main stage event, representing Toronto's vibrant culture.
    `,
    category: "speaker",
    tags: ["4KORNERS", "entertainment", "DJ", "Toronto", "Raptors"],
  },
  {
    id: "speaker-connie-loizos",
    title: "Connie Loizos - TechCrunch Editor-in-Chief",
    content: `
      Editor-in-Chief at TechCrunch
      
      Role: Interviewed Chris Lehane (OpenAI) during Opening Night
      
      Discussion topics:
      - AI democratization
      - ChatGPT's impact on publishers
      - Copyright and legal challenges
      - Sora video generation app
      
      Brought critical journalism perspective to AI discussions.
    `,
    category: "speaker",
    tags: ["Connie Loizos", "TechCrunch", "journalism", "OpenAI interview"],
  },
  {
    id: "speaker-susan-li",
    title: "Susan Li - Fox Business Anchor",
    content: `
      Anchor/Correspondent at Fox Business Network
      
      Role: Interviewed Chris Urmson (Aurora CEO) during Opening Night
      
      Discussion topics:
      - Future of autonomous vehicles
      - Job displacement in trucking industry
      - Safety and technology innovation
      
      Brought business journalism perspective to autonomous vehicle discussion.
    `,
    category: "speaker",
    tags: ["Susan Li", "Fox Business", "journalism", "Aurora interview"],
  },
  {
    id: "speaker-imran-khan-td",
    title: "Imran Khan - TD Head of Innovation & Design",
    content: `
      Head of Innovation & Design at TD
      
      Role: Moderated panel on human-centered innovation in the age of AI
      
      Panel participants:
      - Nick Frosst (Cohere)
      - Ndidi Oteh (Accenture Song)
      
      Topics:
      - Balancing AI with human connection
      - Customer experience in AI era
      - Innovation in financial services
      
      Represented TD's commitment to responsible innovation.
    `,
    category: "speaker",
    tags: ["Imran Khan", "TD", "innovation", "design", "panel moderator"],
  },
  {
    id: "speaker-vignesh-ram",
    title: "Vignesh Ram - Serve Robotics VP",
    content: `
      Vice President, Public Policy at Serve Robotics
      
      Participated in Opening Night discussions
      
      Expertise:
      - Robotics policy and regulation
      - Autonomous delivery systems
      - Public policy in emerging tech
    `,
    category: "speaker",
    tags: ["Vignesh Ram", "Serve Robotics", "robotics", "public policy"],
  },

  // KEY INSIGHTS
  {
    id: "insight-diversity-achievement",
    title: "Diversity Milestone Achievement",
    content: `
      Elevate 2025 achieved 51% representation of women and non-binary attendees.
      
      Significance:
      - Far surpasses industry norms (typically 20-30%)
      - Sets new benchmark for inclusivity in tech events
      - Commitment to equity reflected in programming and partnerships
      - Demonstrates that diverse representation is achievable at scale
      
      This achievement shows through every aspect of the festival, from programming to partnerships.
    `,
    category: "insight",
    tags: ["diversity", "inclusion", "women in tech", "representation", "milestone"],
  },
  {
    id: "insight-economic-impact",
    title: "Economic Impact on Canadian Startups",
    content: `
      Festival continues to fuel the Canadian startup ecosystem.
      
      Impact metrics:
      - Last year sparked hundreds of thousands of dollars in startup investments
      - 2025 promises even greater economic impact
      - 300+ curated startup-investor meetings
      - Strategic investor dealflow facilitated
      - Real-time funding conversations and collaborations
      
      Elevate serves as a critical catalyst for Canadian innovation and entrepreneurship.
    `,
    category: "insight",
    tags: ["startups", "investment", "economic impact", "Canada", "funding"],
  },
  {
    id: "insight-ai-transformation",
    title: "AI Transformation Era",
    content: `
      Quote from Lisa Zarzeczny, Co-Founder & CEO of Elevate:
      "We're living through one of the most transformative periods in tech history. It's an honour to welcome leaders who aren't just navigating the future—they're actively shaping it."
      
      Key observations:
      - AI and ethical tech transformation took center stage
      - Leaders are actively shaping the future, not just observing
      - Transformation requires both innovation and responsibility
      - Canadian tech leaders are at the forefront of this change
    `,
    category: "insight",
    tags: ["AI", "transformation", "leadership", "innovation", "future"],
  },
  {
    id: "insight-scale-up-demand",
    title: "Scale-Up Content Demand",
    content: `
      AI and Scale Up tracks were scaled to Main Stage due to overwhelming demand.
      
      Implications:
      - 2,000+ seat capacity per session
      - Reflects Canadian ecosystem's maturation
      - Growing number of companies ready to scale
      - Need for practical scaling guidance
      
      Shows the Canadian tech ecosystem is maturing beyond early-stage startups.
    `,
    category: "insight",
    tags: ["scale up", "growth", "demand", "ecosystem", "maturation"],
  },
  {
    id: "opening-night-overview",
    title: "Opening Night: Human Impact of AI",
    content: `
      Opening night featured discussions on the human impact of artificial intelligence.
      
      Featured Speakers & Sessions:
      
      1. Chris Lehane (OpenAI) - Future of AI democratization
      2. Chris Urmson (Aurora CEO) with Susan Li - Future of automated vehicles
      3. TD's Imran Khan with Nick Frosst (Cohere) and Ndidi Oteh (Accenture Song) - Human-centered innovation in the age of AI
      4. Justin Scaini (Kids Help Phone) - Breakthrough innovations in mental health
      5. Simu Liu - Journey from screen to startup, purpose-driven investing, industries shaping the future
      
      Additional participants:
      - 4KORNERS (DJ/Entertainment)
      - Lisa Zarzeczny (Elevate CEO) - Opening remarks
      - Connie Loizos (TechCrunch Editor-in-Chief)
      - Vignesh Ram (Serve Robotics VP, Public Policy)
      
      Theme: Human impact of artificial intelligence
      
      This was the flagship event that set the tone for the entire festival.
    `,
    category: "insight",
    tags: ["schedule", "opening night", "main stage", "day 1", "keynote", "TD", "AI"],
  },
  {
    id: "insight-ai-job-displacement",
    title: "AI Job Displacement: Theoretical vs. Tangible",
    content: `
      Opening night revealed spectrum of AI displacement concerns:
      
      Theoretical (Urmson): Jobs will shift, not disappear
      - Technology creates new opportunities
      - Dangerous jobs can be eliminated (trucking = coal mining)
      - Labor shortages in key industries
      
      Personal (Simu Liu): Worried about AI actors replacing human performers
      - Creative industries face unique challenges
      - Authenticity and human connection at risk
      
      Tangible (Lehane/Publishers): ChatGPT competing with news sources
      - Direct economic impact on publishers
      - Copyright and compensation issues
      - Questions about democratization vs. displacement
      
      Key takeaway: AI displacement is not one-size-fits-all; impacts vary dramatically by industry and role.
    `,
    category: "insight",
    tags: ["job displacement", "AI impact", "employment", "future of work", "industry disruption"],
  },
  {
    id: "insight-ai-human-connection",
    title: "The Need for Human Connection in AI Era",
    content: `
      Multiple speakers emphasized human connection as critical:
      
      Justin Scaini (Kids Help Phone):
      - AI trained on wrong data can miss critical human signals
      - Solution requires blending AI with human oversight
      
      Ndidi Oteh (Accenture Song):
      - 70% of purchase decisions based on customer experience
      - AI must enhance human connections, not replace them
      
      Nick Frosst (Cohere):
      - AI is a tool, not the goal
      - Focus on the problem you're solving, not the technology
      
      Overarching theme: As AI becomes more prevalent, human connection becomes more valuable, not less.
    `,
    category: "insight",
    tags: ["human connection", "AI", "customer experience", "mental health", "empathy", "technology ethics"],
  },
  {
    id: "insight-llm-plateau",
    title: "LLM Performance Plateau & Realistic Expectations",
    content: `
      Nick Frosst (Cohere) provided reality check on AI capabilities:
      
      Key observations:
      - LLM performance improvements are slowing
      - Models won't become "gods" as once predicted
      - Limitations are now clearer
      - Focus shifting from capability to adoption
      
      Implications for businesses:
      - Stop waiting for perfect AI
      - Focus on practical applications with current technology
      - AI is a tool for solving problems, not a magic solution
      - Cut through hype and focus on real value creation
      
      This represents maturation of AI discourse from hype to pragmatism.
    `,
    category: "insight",
    tags: ["LLM", "AI plateau", "realistic expectations", "pragmatism", "AI maturity", "hype cycle"],
  },

  // AI IN GAMING & ENTERTAINMENT
  {
    id: "insight-ai-gaming-evolution",
    title: "AI in Gaming: Evolution of Technology Adoption",
    content: `
      Brief insight on gaming industry's technology evolution
      
      HISTORICAL PROGRESSION:
      1. Graphics improvements
      2. 3D rendering
      3. Internet connectivity
      4. Mobile gaming
      5. AI Agents (current/future)
      
      KEY OBSERVATION:
      "Many technologies start as agents"
      - Gaming often early adopter of new technologies
      - What starts in gaming spreads to other industries
      - AI agents in games may preview broader AI adoption patterns
      
      IMPLICATIONS:
      - Gaming industry as bellwether for AI adoption
      - Agent-based interactions becoming normalized through gaming
      - Entertainment industry exploring AI applications
      
      Note: This was a brief mention, suggesting AI's role in gaming and movies is an emerging area of interest.
    `,
    category: "insight",
    tags: ["AI", "gaming", "entertainment", "technology adoption", "agents", "movies", "industry trends"],
  },
  // DAY 2 HIGHLIGHTS & SESSIONS
  {
    id: "day-2-overview",
    title: "Day 2 Recap: Elevate Festival 2025",
    content: `
      Day 2 (October 8, 2025) was filled with high-impact meetups and powerhouse conversations.
      
      KEY HIGHLIGHTS:
      
      1. YOUTUBE ON FUTURE FOCUS STAGE
      - What's next for content and creators
      - Future of storytelling
      - Platform evolution and creator economy
      
      2. CANADA'S MOMENT: ENTREPRENEURSHIP IN AN ERA OF CHANGE
      - Led by Arlene Dickinson
      - How Canadian founders can thrive amid global shifts
      - Powerful conversation on Canadian entrepreneurship
      
      3. WOMEN+ ENTREPRENEUR PITCH COMPETITION
      - Winner: Serenity Power (Calgary-based)
      - Prize: $100,000 investment
      - Partnership with Firehood
      - Celebrating women founders across Canada
      
      4. CURATED MEETUPS
      - Hundreds of hours of programming
      - Connecting founders, investors, and innovators
      - Meaningful, purpose-driven conversations
      
      5. AFTER PARTY
      - Hosted by TechTO
      - Partnership with Startup Open House
      - Celebrating people and ideas shaping future of tech
      
      OVERALL THEME:
      Energy of Canada's innovation community coming together to spark new ideas, partnerships, and momentum.
    `,
    category: "insight",
    tags: ["day 2", "recap", "highlights", "October 8", "meetups", "pitch competition", "after party"],
  },
  {
    id: "session-youtube-future-focus",
    title: "YouTube on Future Focus Stage",
    content: `
      Day 2 session featuring YouTube
      Stage: Future Focus Stage
      
      Topics covered:
      - What's next for content creation
      - Future of creators and creator economy
      - Evolution of storytelling on digital platforms
      - Platform innovations and trends
      
      Significance: YouTube's perspective on how content creation and consumption is evolving, particularly relevant for brands and marketers understanding digital engagement.
    `,
    category: "topic",
    tags: ["YouTube", "content", "creators", "storytelling", "future focus", "day 2", "creator economy"],
  },
  {
    id: "session-canadas-moment",
    title: "Canada's Moment: Entrepreneurship in an Era of Change",
    content: `
      Led by: Arlene Dickinson
      Day: Day 2 (October 8, 2025)
      
      Focus: How Canadian founders can thrive amid global shifts
      
      Key themes:
      - Navigating global economic uncertainty
      - Canadian competitive advantages
      - Building resilient businesses
      - Seizing opportunities in changing landscape
      - National entrepreneurship strategy
      
      Described as "powerful conversation" on the state and future of Canadian entrepreneurship.
      
      Context: Particularly relevant given discussions about brain drain, SR&ED reform, and need for more ambitious Canadian startups.
    `,
    category: "topic",
    tags: [
      "Arlene Dickinson",
      "Canadian entrepreneurship",
      "global shifts",
      "resilience",
      "day 2",
      "Canada",
      "founders",
    ],
  },
  {
    id: "speaker-arlene-dickinson-canadas-moment",
    title: "Arlene Dickinson - Canada's Moment Session",
    content: `
      Dragons' Den dragon
      Venture capitalist and entrepreneur
      
      Led session: "Canada's Moment: Entrepreneurship in an Era of Change"
      Day: Day 2 (October 8, 2025)
      
      Focus areas:
      - Canadian entrepreneurship landscape
      - Thriving amid global economic shifts
      - Building competitive Canadian companies
      - National innovation strategy
      
      Arlene brought her extensive experience as both entrepreneur and investor to discuss how Canadian founders can succeed in challenging global environment.
      
      Represents voice of Canadian entrepreneurship and investment community.
    `,
    category: "speaker",
    tags: ["Arlene Dickinson", "Dragons Den", "entrepreneurship", "Canada", "venture capital", "day 2"],
  },
  {
    id: "women-pitch-competition",
    title: "Women+ Entrepreneur Pitch Competition",
    content: `
      Day: Day 2 (October 8, 2025)
      Prize: $100,000 investment
      Partnership: Firehood
      
      WINNER: Serenity Power (Calgary-based)
      
      Purpose:
      - Celebrating women founders across Canada
      - Providing capital to women-led startups
      - Addressing funding gap for women entrepreneurs
      - Building more inclusive startup ecosystem
      
      Significance:
      - Aligns with festival's 51% women/non-binary representation
      - Tangible support for underrepresented founders
      - Partnership model for supporting diversity
      - Calgary company winning shows geographic diversity
      
      Part of broader Women+ in Tech programming throughout festival.
    `,
    category: "insight",
    tags: [
      "women entrepreneurs",
      "pitch competition",
      "Serenity Power",
      "Firehood",
      "investment",
      "Calgary",
      "diversity",
      "day 2",
    ],
  },
  {
    id: "startup-serenity-power",
    title: "Serenity Power - Women+ Pitch Competition Winner",
    content: `
      Location: Calgary, Alberta
      Achievement: Won Women+ Entrepreneur Pitch Competition
      Prize: $100,000 investment
      Partner: Firehood
      Day: Day 2 (October 8, 2025)
      
      Significance:
      - Represents women-led innovation in Canada
      - Calgary-based (showing geographic diversity beyond Toronto/Vancouver)
      - Competed against women founders from across Canada
      - Received significant investment to scale business
      
      Victory demonstrates quality of women-led startups in Canadian ecosystem and importance of dedicated funding opportunities.
    `,
    category: "insight",
    tags: ["Serenity Power", "Calgary", "women founders", "winner", "investment", "startup"],
  },
  {
    id: "partner-firehood",
    title: "Firehood - Women+ Pitch Competition Partner",
    content: `
      Role: Partner for Women+ Entrepreneur Pitch Competition
      Contribution: $100,000 investment prize
      
      Partnership demonstrates:
      - Corporate commitment to supporting women entrepreneurs
      - Tangible investment in diversity and inclusion
      - Model for other organizations to support underrepresented founders
      
      Winner: Serenity Power (Calgary)
      Day: Day 2 (October 8, 2025)
    `,
    category: "insight",
    tags: ["Firehood", "partnership", "women entrepreneurs", "investment", "diversity"],
  },
  {
    id: "curated-meetups-day2",
    title: "Curated Meetups - Hundreds of Hours",
    content: `
      Day: Day 2 (October 8, 2025)
      Scale: Hundreds of hours of programming
      
      Purpose:
      - Connecting founders with investors
      - Facilitating innovator networking
      - Sparking new ideas and partnerships
      - Building momentum for future collaborations
      
      Format:
      - Purpose-driven conversations
      - Meaningful connections (not just networking)
      - Curated matching of participants
      - Structured for high-value interactions
      
      Impact:
      - New partnerships formed
      - Investment conversations initiated
      - Ideas sparked for future ventures
      - Community building across Canadian tech ecosystem
      
      Represents the "connective tissue" of the festival beyond main stage programming.
    `,
    category: "insight",
    tags: ["meetups", "networking", "founders", "investors", "partnerships", "day 2", "connections"],
  },
  {
    id: "after-party-startup-open-house",
    title: "After Party with Startup Open House & TechTO",
    content: `
      Day: Day 2 (October 8, 2025)
      Hosted by: TechTO
      Partnership: Startup Open House
      
      Purpose:
      - Celebrating people and ideas shaping future of tech
      - Informal networking in social setting
      - Community building
      - Closing out Day 2 with celebration
      
      Significance:
      - TechTO is major Toronto tech community organizer
      - Startup Open House brings startup community together
      - Represents the social/community aspect of tech ecosystem
      - Networking continues beyond formal programming
      
      Described as "unforgettable" celebration of the innovation community.
    `,
    category: "insight",
    tags: ["after party", "TechTO", "Startup Open House", "networking", "community", "day 2", "celebration"],
  },
  {
    id: "partner-techto",
    title: "TechTO - After Party Host",
    content: `
      Role: Hosted Day 2 After Party
      Partnership: Startup Open House
      
      About TechTO:
      - Major Toronto tech community organizer
      - Regular tech meetups and events
      - Central to Toronto startup ecosystem
      - Community-building focus
      
      Contribution to Elevate:
      - Hosted unforgettable after party
      - Brought community-building expertise
      - Extended festival impact beyond formal programming
      - Created space for informal connections
    `,
    category: "insight",
    tags: ["TechTO", "Toronto", "community", "after party", "partnership", "networking"],
  },
  {
    id: "insight-purpose-driven-conversations",
    title: "Purpose-Driven Conversations & Meaningful Connections",
    content: `
      Theme throughout Day 2: Moving beyond transactional networking
      
      APPROACH:
      - Hundreds of hours of curated meetups
      - Intentional matching of participants
      - Focus on meaningful conversations
      - Purpose-driven rather than random networking
      
      OUTCOMES:
      - New ideas sparked
      - Partnerships formed
      - Momentum for future collaborations
      - Genuine connections made
      
      PHILOSOPHY:
      Quality over quantity in networking
      - Not just exchanging business cards
      - Building real relationships
      - Shared purpose and values
      - Long-term thinking
      
      KPMG RELEVANCE:
      This approach to relationship-building aligns with consulting philosophy of deep client relationships over transactional engagements.
      
      Represents evolution of tech events from pure networking to community building.
    `,
    category: "insight",
    tags: [
      "networking",
      "purpose-driven",
      "meaningful connections",
      "community",
      "relationships",
      "partnerships",
      "KPMG",
    ],
  },
  {
    id: "takeaway-kpmg-women-founders",
    title: "KPMG: Support for Women Founders & Diversity Initiatives",
    content: `
      Inspired by Women+ Entrepreneur Pitch Competition and 51% representation
      
      OPPORTUNITIES FOR KPMG:
      
      1. ADVISORY SERVICES FOR WOMEN-LED STARTUPS
      - Pro bono or reduced-fee services for women founders
      - Mentorship programs
      - Financial planning and strategy
      - Growth advisory
      
      2. PARTNERSHIP MODELS
      - Follow Firehood's example with investment partnerships
      - Sponsor women entrepreneur initiatives
      - Create KPMG Women Founders Program
      
      3. INTERNAL DIVERSITY GOALS
      - Set ambitious targets like Elevate's 51%
      - Measure and report progress
      - Embed diversity in all aspects of business
      
      4. CLIENT ADVISORY
      - Help clients develop diversity initiatives
      - Measure ROI of diversity programs
      - Best practices from successful models
      
      KEY INSIGHT:
      Serenity Power winning from Calgary shows opportunity exists across Canada, not just major tech hubs. KPMG's national presence positions us to support founders everywhere.
      
      BUSINESS CASE:
      - Women-led companies often underserved by traditional advisory
      - Growing market segment
      - Aligns with KPMG values and ESG commitments
      - Builds brand reputation and community goodwill
    `,
    category: "takeaway",
    tags: ["KPMG", "women founders", "diversity", "advisory", "partnerships", "mentorship", "ESG", "opportunity"],
  },

  // PROGRAMS & INITIATIVES
  {
    id: "founder-acceleration-hub",
    title: "Founder Acceleration Hub",
    content: `
      Presented by Moneris
      
      Features:
      - High-impact space connecting startups with investors and mentors
      - Pitch opportunities for founders
      - Real-time acceleration and growth support
      - Designed to accelerate growth in real-time
      
      Purpose-built to create immediate value for participating startups.
    `,
    category: "takeaway",
    tags: ["startups", "acceleration", "mentorship", "pitching", "Moneris"],
  },
  {
    id: "masterclasses",
    title: "Masterclasses",
    content: `
      Intimate, hands-on training sessions (100 seats per session)
      
      Topics covered:
      - AI deployment strategies
      - Capital raising techniques
      - Talent strategy and acquisition
      - Practical implementation guidance
      
      Designed to drive results through focused, actionable learning.
    `,
    category: "takeaway",
    tags: ["masterclass", "training", "AI", "capital raising", "talent"],
  },
  {
    id: "trailblazer-pass",
    title: "Trailblazer Networking Pass",
    content: `
      Exclusive VIP experience for senior executives
      
      Benefits:
      - Unmatched access to speakers
      - Private networking lounges
      - High-value introductions
      - Curated networking opportunities
      
      Designed for C-suite and senior leadership to maximize networking ROI.
    `,
    category: "takeaway",
    tags: ["VIP", "networking", "executives", "leadership", "access"],
  },
  {
    id: "ecommerce-north-accelerator",
    title: "eCommerce North Accelerator",
    content: `
      Year-round program powered by Moneris
      
      Purpose:
      - Supporting Canadian startups beyond the festival
      - Programming designed to scale global businesses from Canada
      - Continuous support and resources
      - Building sustainable ecommerce companies
      
      Demonstrates Elevate's commitment extends beyond the annual festival.
    `,
    category: "takeaway",
    tags: ["ecommerce", "accelerator", "year-round", "Moneris", "Canada"],
  },

  // TAKEAWAYS FOR KPMG
  {
    id: "takeaway-kpmg-ai",
    title: "KPMG AI Strategy Recommendations",
    content: `
      Based on festival insights, recommendations for KPMG:
      
      1. Accelerate AI pilot programs in audit and advisory services
      2. Develop ethical AI framework for client engagements
      3. Invest in upskilling consultants on AI tools and applications
      4. Position KPMG as thought leader in responsible AI adoption
      
      Key insight: Organizations that embed ethics into AI strategy from day one will build stronger client trust.
    `,
    category: "takeaway",
    tags: ["KPMG", "AI", "strategy", "ethics", "consulting"],
  },
  {
    id: "takeaway-kpmg-partnerships",
    title: "KPMG Partnership Opportunities",
    content: `
      Potential partnership and collaboration opportunities identified:
      
      1. Explore partnerships with fintech innovators for client solutions
      2. Connect with scale-up companies needing advisory services
      3. Engage with diversity-focused funds like Raven Capital
      4. Support Canadian startups through mentorship and advisory
      
      The festival demonstrated strong appetite for professional services partnerships.
    `,
    category: "takeaway",
    tags: ["KPMG", "partnerships", "fintech", "startups", "advisory"],
  },
  {
    id: "takeaway-kpmg-talent",
    title: "KPMG Talent Strategy Insights",
    content: `
      Talent-related insights from Future of Work discussions:
      
      1. Hybrid work is permanent - adapt policies accordingly
      2. Emphasize soft skills and creativity in hiring
      3. Continuous learning must be embedded in culture
      4. Mental health and work-life balance are competitive advantages
      5. Organizations embracing flexibility will win the talent war
      
      Action: Review KPMG's talent strategy against these emerging best practices.
    `,
    category: "takeaway",
    tags: ["KPMG", "talent", "future of work", "culture", "hiring"],
  },
  {
    id: "takeaway-kpmg-diversity",
    title: "KPMG Diversity & Inclusion Learnings",
    content: `
      Key learnings from Elevate's 51% women/non-binary achievement:
      
      1. Ambitious diversity goals are achievable with intentional effort
      2. Diversity must be embedded in all aspects (programming, partnerships, hiring)
      3. Representation creates better outcomes and innovation
      4. Support for underrepresented founders creates economic opportunity
      
      Recommendation: Set ambitious diversity targets for KPMG's tech practice and measure progress.
    `,
    category: "takeaway",
    tags: ["KPMG", "diversity", "inclusion", "representation", "culture"],
  },
  {
    id: "takeaway-kpmg-ai-ethics-framework",
    title: "KPMG: Develop AI Ethics Framework for Clients",
    content: `
      As AI becomes more prevalent in business, KPMG should develop a comprehensive AI ethics framework to guide clients through responsible AI implementation.
      
      Key considerations:
      1. Transparency and explainability in AI decision-making
      2. Bias detection and mitigation strategies
      3. Data privacy and security protocols
      4. Accountability and governance structures
      
      Recommendation: Position KPMG as a leader in ethical AI consulting by creating industry-specific frameworks.
    `,
    category: "takeaway",
    tags: ["KPMG", "AI", "ethics", "governance", "consulting"],
  },
  {
    id: "takeaway-kpmg-copyright-advisory",
    title: "KPMG: AI Copyright & IP Advisory Services",
    content: `
      OpenAI copyright discussion reveals emerging advisory opportunity:
      
      Client needs:
      - Understanding AI copyright implications
      - Protecting IP when using AI tools
      - Navigating AI-generated content ownership
      - Compliance with evolving regulations
      
      KPMG opportunity:
      - Develop AI copyright advisory practice
      - Help clients understand risks and protections
      - Guide policy development for AI tool usage
      - Connect legal, tech, and business implications
      
      Market timing: Canadian publishers actively litigating; many organizations uncertain about AI IP issues.
    `,
    category: "takeaway",
    tags: ["KPMG", "copyright", "intellectual property", "AI", "advisory", "legal", "compliance"],
  },

  // PROGRAM SCHEDULE - DAY 1 (October 7, 2025)
  {
    id: "schedule-registration",
    title: "Registration & Badge Pick Up",
    content: `
      Time: 2:00pm - 9:00pm
      Location: Meridian Hall
      Duration: 420 minutes
      
      Details:
      - Badges available for pick up throughout the afternoon and evening
      - Encouraged to arrive early to avoid lines
      - Extended hours to accommodate different arrival times
    `,
    category: "insight",
    tags: ["schedule", "registration", "day1", "logistics"],
  },
  {
    id: "schedule-pitch-showcase",
    title: "Pitch Showcase - Unicorns in the Making",
    content: `
      Time: 2:00pm
      Duration: 60 minutes
      Location: Meridian Hall - Main Stage
      
      Format: 3-minute pitches from emerging startups
      
      Featured Startups:
      1. Acephalt - Winnicent Zuo
      2. miRoncol - Victoria Xu
      3. CoLab Education - Ariella Racco
      4. Material - Bhavish Beejan
      5. Neuropeutics - Marc Shenouda
      6. Bot Food Corporation - Ian Collins
      7. Serenity Vet - Ivan Zakharenkov
      8. Wireless PnC - Samira Soltani
      9. CrashLabs - Ryan Junejo
      10. Shop The Films - Morgan Davidoff
      11. TerraFixing - Vida Gabriel
      12. Neuraura Biotech - Claire Dixon
      
      Purpose: Showcase emerging companies and connect with potential investors.
      Opportunity: Scout for investment opportunities or partnership potential.
    `,
    category: "insight",
    tags: ["schedule", "pitch", "startups", "day 1"],
  },
]

export function searchNotesByCategory(category: FestivalNote["category"]): FestivalNote[] {
  return festivalNotes.filter((note) => note.category === category)
}

export function searchNotesByTag(tag: string): FestivalNote[] {
  return festivalNotes.filter((note) => note.tags.includes(tag))
}

export function searchNotesByKeyword(keyword: string): FestivalNote[] {
  const lowerKeyword = keyword.toLowerCase()
  return festivalNotes.filter(
    (note) =>
      note.title.toLowerCase().includes(lowerKeyword) ||
      note.content.toLowerCase().includes(lowerKeyword) ||
      note.tags.some((tag) => tag.toLowerCase().includes(lowerKeyword)),
  )
}

export function getAvailableMetadata() {
  const categories = Array.from(new Set(festivalNotes.map((note) => note.category)))
  const tags = Array.from(new Set(festivalNotes.flatMap((note) => note.tags)))
  const speakers = Array.from(
    new Set(festivalNotes.filter((note) => note.speaker).map((note) => note.speaker as string)),
  )

  return {
    categories,
    tags,
    speakers,
    totalNotes: festivalNotes.length,
  }
}
