export const profile = {
  name: "Yodahe Zegeye",
  title: "ERP Engineer & Full-Stack Developer",
  location: "Elmont, New York",
  bio: "I am an ERP Engineer at Kassys Consulting with a strong foundation in systems analysis and solution implementation. I graduated from Stony Brook University with a B.S. in Information Systems, where I developed a hybrid skillset bridging technical computing and business management. I am passionate about leveraging technology to solve complex organizational problems and drive efficiency for clients.",
  linkedin: "https://www.linkedin.com/in/yodahe-zegeye/",
  github: "https://github.com/YodaheZegeye",
  badges: ["English", "Amharic", "Dean's List", "Microsoft Azure Certified"],
};

export const experience = [
  {
    id: 1,
    title: "ERP Engineer",
    company: "Kassys Consulting",
    location: "Silver Spring, MD",
    type: "Full-time · Remote",
    start: "Sep 2025",
    end: "Present",
    bullets: [
      "Support implementation and post-implementation of large enterprise systems, handling user setup, security, Active Directory, access management, single sign-on, and system performance monitoring.",
      "Assist in delivering custom and standard ERP/ERM solutions as a junior technology consultant within the Professional Services team.",
    ],
    tags: ["ERP", "Active Directory", "SSO", "DML"],
  },
  {
    id: 2,
    title: "Founding Member, Senior Software Developer & Project Manager",
    company: "Connect Platforms — Startup",
    location: "Stony Brook, NY",
    type: "Self-employed · Hybrid",
    start: "May 2024",
    end: "Feb 2025",
    bullets: [
      "Partnered with a team of 5 to engineer a scalable decentralized social media platform aimed at improving user privacy.",
      "Led a cross-functional team, managing project timelines, milestones, and deliverables.",
      "Designed an end-to-end encryption system using the Signal Protocol for secure user communication.",
      "Built the platform's front-end using React + TypeScript and Node.js; optimized data management with MongoDB.",
      "Developed a multilingual speaking assistant using Google Cloud and OpenAI, enabling communication in 50+ languages.",
    ],
    tags: ["React", "TypeScript", "Node.js", "MongoDB", "OpenAI", "Google Cloud"],
    link: "https://github.com/YodaheZegeye/Connect",
  },
  {
    id: 3,
    title: "Programming Analyst",
    company: "eCom Technologies PLC",
    location: "Addis Ababa, Ethiopia",
    type: "Internship · On-site",
    start: "May 2023",
    end: "Jul 2023",
    bullets: [
      "Designed and developed web-based reports for the 8028 farmers' hotline system using Jasper Reports.",
      "Participated in the design and implementation of a caller profiling module powered by a custom AI model to deliver personalized caller experiences.",
    ],
    tags: ["Jasper Reports", "IIS", "SQL"],
  },
  {
    id: 4,
    title: "Database Developer",
    company: "eCom Technologies PLC",
    location: "Addis Ababa, Ethiopia",
    type: "Internship · On-site",
    start: "Jun 2022",
    end: "Aug 2022",
    bullets: [
      "Participated in the database design process of various projects.",
      "Designed and implemented tables, views, and stored procedures using MySQL.",
    ],
    tags: ["MySQL", "Python", "Database Design"],
  },
];

export const projects = [
  {
    id: 1,
    title: "Connect",
    description:
      "A decentralized social media platform engineered for user privacy with end-to-end encrypted messaging via the Signal Protocol, a multilingual AI assistant, and a React + MongoDB stack.",
    tags: ["React", "Node.js", "MongoDB", "Signal Protocol", "OpenAI"],
    link: "https://github.com/YodaheZegeye/Connect",
  },
  {
    id: 2,
    title: "Fake Stack Overflow",
    description:
      "A fully functional Stack Overflow clone with a RESTful API handling CRUD operations, seamless front-end/database communication, and full authentication flow.",
    tags: ["React", "Node.js", "MongoDB", "REST API"],
    date: "Feb – Apr 2024",
  },
  {
    id: 3,
    title: "Diamond Academy Website",
    description:
      "Designed and developed the school's static informational website from scratch, leading the information-gathering process and page layout design.",
    tags: ["HTML5", "CSS3", "Project Planning"],
    link: "https://github.com/YodaheZegeye/DiamondAcademy",
    date: "Nov 2019 – Feb 2020",
  },
];

export const skills = [
  { category: "Languages", items: ["Java", "Python", "SQL", "JavaScript", "TypeScript", "MATLAB"] },
  { category: "Frontend", items: ["React", "HTML5", "CSS3"] },
  { category: "Backend & Databases", items: ["Node.js", "MongoDB", "MySQL", "REST APIs"] },
  { category: "Cloud & DevOps", items: ["Microsoft Azure", "Google Cloud", "Active Directory", "SSO"] },
  { category: "Enterprise", items: ["ERP", "ERM", "Systems Analysis", "DML"] },
  { category: "Tools", items: ["GitHub", "IntelliJ IDEA", "Replit", "Jasper Reports"] },
];

export const education = [
  {
    id: 1,
    degree: "B.S. Information Systems",
    school: "Stony Brook University",
    start: "Aug 2021",
    end: "May 2025",
    gpa: "3.36",
    note: "Dean's List · Member of the Artificial Intelligence Community and Stony Brook Computing Society.",
    tags: ["Java", "MATLAB", "AI Community", "SBCS"],
  },
  {
    id: 2,
    degree: "High School Diploma",
    school: "Diamond Academy",
    start: "Sep 2017",
    end: "Jul 2021",
    gpa: "93",
    tags: ["Basketball Team", "Science & Technology Club"],
  },
];
