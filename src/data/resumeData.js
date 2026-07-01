// All content sourced directly from Shashank C A's resume.
// Edit this file to update site content — components read from here.

export const profile = {
  name: 'Shashank C A',
  initials: 'SC',
  title: 'Software Developer',
  roles: [
    'Full Stack Developer',
    'Java Developer',
    'AI / ML Developer',
    'Web Developer',
  ],
  summary:
    'Information Science graduate with hands-on experience in Full Stack Development, Java Development, and AI-powered applications. Skilled in Java, Python, JavaScript, React.js, Node.js, Express.js, Spring Boot, MongoDB, and MySQL. Strong foundation in Data Structures & Algorithms, OOPs, DBMS, Operating Systems, and Computer Networks. Experienced in building web applications, automation systems, and intelligent recommendation platforms.',
  tagline: 'Seeking Software Engineer, Full Stack Developer, or Java Developer opportunities.',
  email: 'shashank.ca156@gmail.com',
  phone: '+91 7760219785',
  location: 'Bengaluru, India',
  github: 'https://github.com/shashank0019',
  linkedin: 'https://linkedin.com/in/shashank-c-a-313876315',
  resumeFile: '/Shashank_CA_Resume.pdf',
}

export const skills = [
  {
    category: 'Programming Languages',
    items: ['Java', 'Python', 'JavaScript', 'SQL'],
  },
  {
    category: 'Core Java',
    items: ['Data Structures & Algorithms', 'OOPs', 'Collections Framework', 'JDBC'],
  },
  {
    category: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Material-UI'],
  },
  {
    category: 'Backend',
    items: ['Spring Boot', 'REST APIs', 'Node.js', 'Express.js'],
  },
  {
    category: 'Databases',
    items: ['MySQL', 'MongoDB', 'PostgreSQL'],
  },
  {
    category: 'AI / ML',
    items: ['NLP', 'TF-IDF', 'Cosine Similarity', 'Skill Extraction'],
  },
  {
    category: 'Tools & Platforms',
    items: ['VS Code', 'Eclipse', 'Git', 'GitHub', 'Android Studio'],
  },
  {
    category: 'Core Concepts',
    items: ['Operating Systems', 'Computer Networks', 'DBMS'],
  },
]

export const experience = [
  {
    company: 'Samsung R&D Institute Bangalore (SRIB)',
    role: 'Full Stack Web Developer Intern',
    program: 'PRISM Program',
    duration: 'Jul 2025 – Dec 2025',
    points: [
      'Engineered a scalable workflow management system using React.js, Material-UI, Bootstrap, Node.js, and ASP.NET Core, improving process efficiency across enterprise operations.',
      'Designed and deployed RESTful APIs to automate approval workflows, enable rule-based task assignment, and integrate external services for seamless scalability.',
      'Optimized workflow pipelines that reduced manual intervention and significantly enhanced cross-team collaboration within the organization.',
      'Integrated SQL Server as the primary data store, ensuring reliable data flow and consistent system performance across all frontend and backend layers.',
    ],
    stack: ['React.js', 'Material-UI', 'Node.js', 'ASP.NET Core', 'SQL Server', 'REST APIs'],
  },
  {
    company: 'Mind Matrix',
    role: 'Android App Developer Intern',
    program: 'Android App Development Using GenAI',
    duration: 'Feb 2026 – May 2026',
    points: [
      'Built Karunada-Vanya, a wildlife education and AI alert Android app addressing human-wildlife conflicts in forest-border communities.',
      'Implemented real-time wildlife movement alerts (elephants, leopards, tigers) to warn residents in areas bordering forests and national parks.',
      'Integrated AI-based safety guidance to provide contextual recommendations when wildlife activity is detected near villages or roads.',
      'Developed educational modules on wildlife coexistence, helping communities build awareness and reduce panic responses to wildlife encounters.',
      'Used Java, Firebase, and MVVM architecture to deliver reliable, real-time data management with secure user authentication.',
      'Integrated REST APIs, Firestore, and RecyclerView to build a scalable, responsive mobile experience across Android devices.',
    ],
    stack: ['Java', 'Firebase', 'MVVM', 'Generative AI', 'REST APIs', 'Firestore', 'Android Studio'],
  },
]

export const projects = [
  {
    title: 'AI Career Guidance Platform',
    subtitle: 'Final Year Project · Python & Flask',
    description:
      'An AI-powered job recommendation system that analyzes resumes and matches candidates with relevant opportunities using NLP. Built as a final year project, it goes beyond keyword matching to provide personalized career guidance.',
    features: [
      'Resume parsing and analysis using TF-IDF and cosine similarity',
      'NLP-based skill extraction to identify candidate strengths',
      'Skill-gap analysis against target job descriptions',
      'Personalized career guidance with actionable recommendations',
      'Improved recommendation accuracy through iterative NLP tuning',
    ],
    stack: ['Python', 'Flask', 'NLP', 'TF-IDF', 'Cosine Similarity'],
    badge: 'Final Year Project',
    github: '',
    demo: '',
    featured: true,
  },
  {
    title: 'StartupSync (SSS)',
    subtitle: 'Startup Founder Matching Platform',
    description:
      'A full-stack SaaS platform that lets startup founders create startups, manage teams, and connect with skilled professionals — powered by AI-based matching and real-time collaboration.',
    features: [
      'JWT-based authentication and secure session handling',
      'AI-based matching engine connecting founders with skilled professionals',
      'Real-time chat between teams and collaborators',
      'Task management for startup teams',
      'REST APIs built with Spring Boot, consumed by a React frontend',
    ],
    stack: ['Java 21', 'Spring Boot 3', 'React', 'PostgreSQL', 'JWT'],
    badge: '',
    github: '',
    demo: '',
    featured: true,
  },
  {
    title: 'Smart Hospital Management System',
    subtitle: 'MERN Stack Healthcare Platform',
    description:
      'A hospital management system covering appointment scheduling, patient record management, and inventory tracking, with secure role-based access for administrators, doctors, and patients.',
    features: [
      'Appointment scheduling for patients and doctors',
      'Patient record management with full CRUD support',
      'Inventory tracking for hospital resources',
      'JWT-based authentication',
      'Role-based access control for admins, doctors, and patients',
    ],
    stack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT'],
    badge: '',
    github: '',
    demo: '',
    featured: true,
  },
  {
    title: 'Medical Chatbot',
    subtitle: 'Generative AI · NLP',
    description:
      'An AI-powered chatbot that answers medical questions in real time using NLP models. Built during the Generative AI course, it demonstrates practical application of intent detection and automated response generation.',
    features: [
      'Real-time answers to medical questions via AI-driven conversation',
      'NLP models for detecting user intent and routing queries',
      'Accurate, context-aware automated responses',
      'Reduced repetitive FAQ handling through intelligent automation',
    ],
    stack: ['Python', 'Generative AI', 'NLP', 'LLMs'],
    badge: 'Gen AI Course Project',
    github: '',
    demo: '',
    featured: false,
  },
  {
    title: 'NotePix',
    subtitle: 'Flask · Web App',
    description:
      'A full-featured note-taking web application built with Flask, offering secure authentication, rich-text editing, and tag-based filtering — accessible seamlessly across all devices.',
    features: [
      'Secure user authentication and session management',
      'Full CRUD operations for notes',
      'Rich-text editing for formatted notes',
      'Tag-based filtering and full-text search',
      'Responsive UI for cross-device access',
    ],
    stack: ['Python', 'Flask', 'SQLite'],
    badge: '',
    github: '',
    demo: '',
    featured: false,
  },
]

export const education = [
  {
    degree: 'Bachelor of Engineering — Information Science and Engineering',
    institution: 'Cambridge Institute of Technology, Bengaluru',
    score: 'CGPA: 8.9 / 10',
    duration: '2022 – 2026',
  },
  {
    degree: 'Pre-University — PCMB',
    institution: 'SBGNS Rural Composite PU College',
    score: '95.33%',
    duration: '2020 – 2022',
  },
  {
    degree: 'SSLC — Secondary School',
    institution: 'New Horizon English School',
    score: '96.48%',
    duration: '2019 – 2020',
  },
]

export const languages = [
  { name: 'English', level: 'Advanced' },
  { name: 'Kannada', level: 'Fluent' },
  { name: 'Telugu', level: 'Advanced' },
]

export const certifications = [
  {
    title: 'Generative AI Course: Build AI Apps with LLMs & Generative Models',
    issuer: 'Guvi | HCL',
    partners: 'Google for Education Partner · ISO 9001-27001 Certified',
    date: 'Nov 2, 2024',
    score: '',
    grade: '',
    certId: 'e5560U1n3q9O2v37Dx',
    verifyUrl: 'https://www.guvi.in/certificate?id=e5560U1n3q9O2v37Dx',
  },
  {
    title: 'Python Programming Zero to Hero: Complete Python Bootcamp',
    issuer: 'Guvi | HCL',
    partners: 'Google for Education Partner · ISO 9001-27001 Certified',
    date: 'Mar 20, 2025',
    score: '',
    grade: '',
    certId: '5V4C5d7G72AD8461r2',
    verifyUrl: 'https://www.guvi.in/certificate?id=5V4C5d7G72AD8461r2',
  },
  {
    title: 'Legacy Responsive Web Design V8',
    issuer: 'freeCodeCamp',
    partners: '~300 hours · Developer Certification',
    date: 'Mar 29, 2025',
    score: '',
    grade: '',
    certId: '',
    verifyUrl: 'https://freecodecamp.org/certification/shashankca/responsive-web-design',
  },
  {
    title: 'Introduction to Flask Basics',
    issuer: 'CodeSignal',
    partners: 'APIs Made Easy with Python and Flask · Server-Side Programming',
    date: 'Apr 11, 2025',
    score: '',
    grade: '',
    certId: 'cm94c3z7s000b14c3udmljmh0',
    verifyUrl: 'https://codesignal.com/learn/certificates/cm94c3z7s000b14c3udmljmh0/courses/353',
  },
  {
    title: 'Certification Program in Service Desk Operations',
    issuer: 'EduBridge (NSDC Approved Partner)',
    partners: 'Capgemini · SAP',
    date: 'May 7, 2026',
    score: '84%',
    grade: 'A',
    certId: 'EBEON01261277030',
    verifyUrl: '',
  },
]
