export const portfolioData = {
  personal: {
    name: "Faraz Khan",
    profession: "Web Developer",
    experienceLevel: "Intermediate",
    roleLabel: "WEB DEVELOPER / CREATIVE BUILDER",
    headline: {
      line1: "BUILDING FOR THE WEB.",
      line2: "DESIGNED TO STAND OUT.",
      highlight: "STAND OUT."
    },
    shortBio: "I'm a web developer focused on building modern, responsive and user-friendly digital experiences using React, Next.js and modern frontend technologies.",
    extendedBio: [
      "I am an intermediate web developer with a strong focus on crafting modern, intuitive, and responsive frontend experiences.",
      "My primary toolkit revolves around React, Next.js, and modern CSS architecture with Tailwind CSS. I care deeply about writing clean, maintainable code, structuring scalable component hierarchies, and delivering fast-loading, accessible digital products.",
      "Driven by user-centric design principles, I continuously refine my development workflow, explore modern web standards, and transform conceptual designs into fluid, responsive web applications."
    ],
    availability: "Available for select freelance & full-time roles",
    email: "farazkhan.dev@gmail.com",
    github: "https://github.com/farazkhan-dev",
    linkedin: "https://linkedin.com/in/farazkhan-dev",
    location: "Global / Remote",
  },

  navLinks: [
    { label: "HOME", href: "/" },
    { label: "ABOUT", href: "/about" },
    { label: "STACK", href: "/#stack" },
    { label: "SERVICES", href: "/#services" },
    { label: "WORK", href: "/projects" },
    { label: "PROCESS", href: "/#process" },
    { label: "CONTACT", href: "/contact" },
  ],

  marqueeItems: [
    "REACT",
    "JAVASCRIPT",
    "NEXT.JS",
    "HTML",
    "CSS",
    "TAILWIND CSS",
    "RESPONSIVE DESIGN",
    "COMPONENT ARCHITECTURE",
    "ACCESSIBILITY",
    "MODERN FRONTEND"
  ],

  techStack: {
    frontend: [
      { name: "HTML", category: "Core Structure", desc: "Semantic markup & web standards" },
      { name: "CSS", category: "Styling Architecture", desc: "Modern layouts, Flexbox & Grid" },
      { name: "JavaScript", category: "Core Logic", desc: "ES6+, DOM manipulation & async flows" },
      { name: "React", category: "UI Library", desc: "Hooks, state management & reusable components" },
      { name: "Next.js", category: "Framework", desc: "App Router, SSR, SSG & performance" },
      { name: "Tailwind CSS", category: "Styling Engine", desc: "Utility-first design systems & responsive styling" },
    ],
    tools: [
      { name: "Git", category: "Version Control", desc: "Branching workflows & version management" },
      { name: "GitHub", category: "Collaboration", desc: "Repositories, pull requests & CI workflows" },
      { name: "VS Code", category: "IDE & Tooling", desc: "Optimized development environment & extensions" },
    ],
  },

  services: [
    {
      number: "01",
      title: "Website Development",
      description: "End-to-end development of bespoke, fast-loading, and standards-compliant websites tailored to brand identity and business objectives.",
      badge: "Full Build"
    },
    {
      number: "02",
      title: "Responsive Web Design",
      description: "Pixel-perfect multi-device layouts engineered to provide flawless touch and desktop experiences across mobile, tablet, and ultra-wide screens.",
      badge: "Adaptive"
    },
    {
      number: "03",
      title: "Frontend Development",
      description: "Clean, modular codebases built with semantic HTML5, modern CSS, and performant JavaScript with high accessibility standards.",
      badge: "Core Stack"
    },
    {
      number: "04",
      title: "React & Next.js Development",
      description: "Scalable Single Page Applications and server-rendered web applications with optimized routing, dynamic rendering, and robust state management.",
      badge: "Modern Framework"
    },
  ],

  // 3 Featured projects displayed in one row on Homepage matching user's exact design
  featuredProjects: [
    {
      id: "travel-villas",
      number: "01",
      name: "TRAVEL VILLAS",
      badge: "HOSPITALITY",
      image: "/images/projects/travelvillas.png",
      tags: ["Frontend Development", "Responsive Web Design"],
      liveUrl: "https://travelvillas.in",
      githubUrl: "https://github.com/farazkhan-dev/travel-villas",
      description: "Luxury villa rental and boutique hospitality platform with seamless multi-device browsing and interactive booking flows."
    },
    {
      id: "auras-fragrances",
      number: "02",
      name: "AURAS FRAGRANCES",
      badge: "ECOMMERCE",
      image: "/images/projects/auras-fragrances.png",
      tags: ["Shopify", "Ecommerce Website Development"],
      liveUrl: "https://aurasfragrances.com",
      githubUrl: "https://github.com/farazkhan-dev/auras-fragrances",
      description: "High-end artisanal fragrance storefront engineered with responsive merchandising, refined interactions, and fast checkout."
    },
    {
      id: "fruitilicious",
      number: "03",
      name: "FRUITILICIOUS | HEALTHY GIFTING",
      badge: "ECOMMERCE",
      image: "/images/projects/fruitilicious.png",
      tags: ["Ecommerce Website Development", "Website Customization"],
      liveUrl: "https://fruitilicious.in",
      githubUrl: "https://github.com/farazkhan-dev/fruitilicious",
      description: "Handcrafted fruit bouquet and luxury edible gift e-commerce portal built for custom orders and scheduled delivery."
    },
  ],

  // Full catalog of projects for the dedicated /projects page
  allProjects: [
    {
      id: "amaan-shaikh-portfolio",
      number: "01",
      name: "AMAAN SHAIKH PORTFOLIO",
      badge: "PORTFOLIO",
      category: "Creative Dev",
      image: "/images/projects/amaan-portfolio.png",
      tags: ["Next.js", "React", "Creative Frontend", "Tailwind CSS"],
      liveUrl: "https://amaan-shk-portfolio.vercel.app/",
      githubUrl: "https://github.com/farazkhan-dev/amaan-portfolio",
      description: "Award-winning creative developer portfolio featuring terminal system boot animation, interactive motion, and modern frontend styling."
    },
    {
      id: "your-vcare",
      number: "02",
      name: "YOUR VCARE HEALTHCARE",
      badge: "HEALTHCARE",
      category: "Healthcare",
      image: "/images/projects/yourvcare.png",
      tags: ["Healthcare Portal", "Responsive Web Design", "Next.js"],
      liveUrl: "https://yourvcare.com",
      githubUrl: "https://github.com/farazkhan-dev/your-vcare",
      description: "Comprehensive medical wellness and specialty clinic web portal with appointment booking, doctor credentials, and accessible health information."
    },
    {
      id: "unique-wellcare",
      number: "03",
      name: "UNIQUE WELLCARE",
      badge: "WELLNESS",
      category: "Healthcare",
      image: "/images/projects/uniquewellcare.png",
      tags: ["Clinical Web App", "Frontend UI", "Tailwind CSS"],
      liveUrl: "https://uniquewellcare.com/",
      githubUrl: "https://github.com/farazkhan-dev/unique-wellcare",
      description: "Multi-disciplinary healthcare and physical rehabilitation center website featuring treatment guides, patient intake, and mobile-friendly touchpoints."
    },
    {
      id: "ubercare",
      number: "04",
      name: "UBERCARE CLINICAL",
      badge: "CLINICAL",
      category: "Healthcare",
      image: "/images/projects/ubercarebling.png",
      tags: ["Healthcare Engineering", "Responsive UI", "Next.js"],
      liveUrl: "https://ubercare.co.in/",
      githubUrl: "https://github.com/farazkhan-dev/ubercare",
      description: "Advanced aesthetic clinic and clinical skincare portal providing online patient inquiries, treatment breakdowns, and clinic location mapping."
    },
    {
      id: "frisson-hospital",
      number: "05",
      name: "FRISSON HOSPITAL",
      badge: "HOSPITAL",
      category: "Healthcare",
      image: "/images/projects/frissonhospital.png",
      tags: ["Hospital Portal", "Emergency Infrastructure", "Tailwind CSS"],
      liveUrl: "https://frissonhospital.com/",
      githubUrl: "https://github.com/farazkhan-dev/frisson-hospital",
      description: "Full-scale multi-specialty hospital digital platform with emergency services directory, doctor consultation scheduling, and patient facilities."
    },
    {
      id: "travel-villas",
      number: "06",
      name: "TRAVEL VILLAS",
      badge: "HOSPITALITY",
      category: "Hospitality",
      image: "/images/projects/travelvillas.png",
      tags: ["Frontend Development", "Responsive Web Design", "Next.js"],
      liveUrl: "https://travelvillas.in",
      githubUrl: "https://github.com/farazkhan-dev/travel-villas",
      description: "Luxury villa rental and boutique hospitality platform with seamless multi-device browsing and interactive booking flows."
    },
    {
      id: "auras-fragrances",
      number: "07",
      name: "AURAS FRAGRANCES",
      badge: "ECOMMERCE",
      category: "E-Commerce",
      image: "/images/projects/auras-fragrances.png",
      tags: ["Shopify", "Ecommerce Website Development", "Tailwind CSS"],
      liveUrl: "https://aurasfragrances.com",
      githubUrl: "https://github.com/farazkhan-dev/auras-fragrances",
      description: "High-end artisanal fragrance storefront engineered with responsive merchandising, refined interactions, and fast checkout."
    },
    {
      id: "fruitilicious",
      number: "08",
      name: "FRUITILICIOUS | HEALTHY GIFTING",
      badge: "ECOMMERCE",
      category: "E-Commerce",
      image: "/images/projects/fruitilicious.png",
      tags: ["Ecommerce Website Development", "Website Customization", "JavaScript"],
      liveUrl: "https://fruitilicious.in",
      githubUrl: "https://github.com/farazkhan-dev/fruitilicious",
      description: "Handcrafted fruit bouquet and luxury edible gift e-commerce portal built for custom orders and scheduled delivery."
    },
    {
      id: "dr-matin-dental",
      number: "09",
      name: "DR. MATIN DENTAL CARE",
      badge: "CLINICAL",
      category: "Healthcare",
      image: "/images/projects/dr-matin-dental.png",
      tags: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
      liveUrl: "https://drmatinkidsdental.com",
      githubUrl: "https://github.com/farazkhan-dev/dr-matin-dental",
      description: "Specialized pediatric dental clinic website delivering accessible patient information, treatment schedules, and interactive contact touchpoints."
    },
    {
      id: "mek-grand-central",
      number: "10",
      name: "MEK GRAND CENTRAL",
      badge: "REALTY",
      category: "Corporate & Real Estate",
      image: "/images/projects/mekgrandcentral.png",
      tags: ["Commercial Realty", "Next.js", "Tailwind CSS"],
      liveUrl: "https://mekgrandcentral.com",
      githubUrl: "https://github.com/farazkhan-dev/mek-grand-central",
      description: "Corporate commercial real estate portal featuring floor plan visualization, tenant inquiry touchpoints, and responsive property specifications."
    },
  ],

  processStages: [
    {
      step: "01",
      name: "DISCOVER",
      summary: "Understand the project, objectives and requirements.",
      details: "Detailed review of business goals, user personas, brand aesthetics, and technical constraints to establish a clear architectural roadmap."
    },
    {
      step: "02",
      name: "PLAN",
      summary: "Plan structure, visual direction and user experience.",
      details: "Wireframing layout hierarchies, defining typographic scales, mapping component states, and establishing responsive grid rules."
    },
    {
      step: "03",
      name: "DEVELOP",
      summary: "Build responsive interfaces using modern frontend technologies.",
      details: "Translating architectural specs into modular React components, clean Tailwind styling, smooth interactive behaviors, and semantic HTML."
    },
    {
      step: "04",
      name: "TEST",
      summary: "Rigorous quality assurance, accessibility and cross-device testing.",
      details: "Validating responsive behavior across breakpoints, checking accessibility compliance, measuring Lighthouse metrics, and debugging interaction states."
    },
    {
      step: "05",
      name: "DELIVER",
      summary: "Optimize performance and prepare the finished website for launch.",
      details: "Final asset optimization, SEO meta tagging, production build verification, and clean deployment handover."
    },
  ],

  faqs: [
    {
      number: "01",
      question: "WHAT SERVICES DO YOU OFFER?",
      answer: "I build modern, responsive and user-friendly websites using React, Next.js, JavaScript, HTML, CSS and Tailwind CSS. My focus is on creating clean interfaces and smooth user experiences."
    },
    {
      number: "02",
      question: "WHAT IS YOUR TYPICAL DEVELOPMENT PROCESS?",
      answer: "I start by understanding the project requirements, then plan the structure and design, develop the website, test responsiveness and functionality, and prepare the final result."
    },
    {
      number: "03",
      question: "WHICH TECHNOLOGIES DO YOU WORK WITH?",
      answer: "My primary technologies include React, Next.js, JavaScript, HTML, CSS and Tailwind CSS. I also work with Git and GitHub for development and version control."
    },
    {
      number: "04",
      question: "WILL MY WEBSITE WORK ON MOBILE DEVICES?",
      answer: "Yes. I focus on responsive layouts that adapt to desktops, tablets and mobile devices, with attention to readability, navigation and usability."
    },
    {
      number: "05",
      question: "HOW CAN I CONTACT YOU FOR A PROJECT?",
      answer: "You can contact me through the contact form, email or social media links available on this portfolio. Share your project idea and requirements, and we can discuss the next steps."
    }
  ],
};
