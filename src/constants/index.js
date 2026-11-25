import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  threejs,
  ace,
  gaming,
  playground,
  buzzonearth,
  eleve,
  jaypore,
  shaktipuja,
  qliventures,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Frontend & Next.js",
    icon: mobile,
  },
  {
    title: "Backend & REST APIs",
    icon: backend,
  },
  {
    title: "3D & Interactive Web",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Material UI",
      "Formik",
      "Three.js",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "CRUD",
      "SMTP",
      "Gmail / Outlook / Zoho Mail Integration",
    ],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "MySQL"],
  },
  {
    title: "Tools & Hosting",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "Jira",
      "Figma",
      "Vercel",
      "Netlify",
      "Server Hosting",
      "Auto-deploy on Push",
    ],
  },
  {
    title: "APIs & Integrations",
    skills: [
      "Google Places API",
      "Payment Gateway Integration",
      "AI Chatbot Integration",
      "SEO Basics",
    ],
  },
];

const experiences = [
  {
    title: "Full Stack Web Developer",
    company_name: "Eleve Technologies",
    location: "Jaipur (Remote)",
    icon: eleve,
    iconBg: "#ffffff",
    date: "Jan 2026 – Present",
    sections: [
      {
        heading: "Finonest (loan platform): frontend, admin panel and Node.js API",
        points: [
          "Built the Used Car Loan application form on a config-driven form component, with field validations, dependent fields and the rule changes the client kept sending. It submits to the API in the JSON format the backend team specified.",
          "Wrote the lead status flow: a next-status button, an approval popup (loan amount, ROI, EMI, tenure), rejection reasons, RC collection and lead rework, on both the admin panel and the API.",
          "Created APIs and screens for bank product recommendations, recoveries and payouts with Excel download, banner CRUD, document upload, bulk upload of multiple files and manager assignment.",
          "Connected Gmail, Outlook and Zoho mail, then built the mail trail and conversation view for each lead. Added Google Places autocomplete for addresses.",
          "Cleared Jira tickets, build errors and PR merge conflicts, and sat in on client demos and test rounds.",
        ],
      },
      {
        heading: "Client websites: frontend, admin panel, backend",
        points: [
          "Jaypore Murti: categories, products, sizes, stock, size charts, analytics, blog with a text editor and AI chatbot. Listed 200+ products and edited 200+ product photos.",
          "Shakti Puja: built the site, admin, API and database. Includes an SMTP mailbox where admins read and reply to customer emails.",
          "Qli Ventures, Nyaypath, Pooja Path, and Eleve Technologies site: venture consultancy platform, lawyer booking (three design versions), pooja booking with pandit management, and company site I built.",
          "Made design variants and demo sites that the team used in client pitches.",
        ],
      },
      {
        heading: "Teaching (since Aug 2026)",
        points: [
          "Eleve assigned me to teach two team members. We run long daily sessions, on top of my project work.",
        ],
      },
    ],
    points: [
      "Finonest (loan platform): Built Used Car Loan form (config-driven, field validations, dependent fields), lead status flow (approval/rejection/rework), bank recommendations & recovery APIs, and email integration (Gmail/Outlook/Zoho).",
      "Client websites: Delivered Jaypore Murti (e-commerce + AI chatbot), Shakti Puja (SMTP mailbox), Nyaypath, Pooja Path, and Eleve Technologies website from first design to hosting.",
      "Teaching & Mentorship: Assigned by Eleve to teach two team members via daily long sessions alongside project delivery.",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company_name: "BuzzOnEarth",
    location: "Remote",
    icon: buzzonearth,
    iconBg: "#383E56",
    date: "Sept 2023 – Dec 2023",
    points: [
      "Built MERN stack web apps and deployed them to hosting providers.",
      "Improved site performance and added security measures across the site.",
    ],
  },
];

const educations = [
  {
    degree: "B.Tech, Computer Science Engineering",
    institution: "Vivekananda Institute of Technology, Jaipur",
    date: "2021 – 2025",
    description:
      "Core studies in Computer Science & Engineering covering Data Structures, Algorithms, Database Management Systems, Computer Networks, and Full Stack Software Architecture.",
  },
  {
    degree: "Senior Secondary, CBSE",
    institution: "Subodh Public School, Jaipur",
    date: "2009 – 2021",
    description:
      "Completed senior secondary education under Central Board of Secondary Education (CBSE) with focus on Science and Mathematics.",
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Shresth proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Shresth does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Shresth optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "3D Playground",
    description:
      "A browser tool for drawing shapes and placing playground objects in 3D. Supports Bézier curves, collision detection, textures, model scaling and a live area calculation. Deployed on Vercel.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "r3f",
        color: "blue-text-gradient",
      },
    ],
    image: playground,
    source_code_link: "https://github.com/shresthgour/3D-Playground",
    live_link: "https://github.com/shresthgour/3D-Playground",
  },
  {
    name: "Finonest (Loan Platform)",
    description:
      "Production loan platform with real customers: config-driven Used Car Loan application, automated lead status workflows, bank recommendations, recovery & payout Excel export, and Gmail/Outlook/Zoho mail conversation views.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "blue-text-gradient",
      },
      {
        name: "smtp",
        color: "green-text-gradient",
      },
    ],
    image: null,
    isConfidential: true,
  },
  {
    name: "Jaypore Murti",
    description:
      "E-commerce platform with 200+ listed products, custom size charts, inventory tracking, sales analytics, rich-text blog management, and an AI-powered conversational chatbot for customer support.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "aichatbot",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: jaypore,
    live_link: "https://jayporemurti.com/",
  },
  {
    name: "Shakti Puja",
    description:
      "Pooja and ritual booking platform featuring client site, admin portal, REST API, MongoDB database, and a custom SMTP mailbox allowing administrators to read and reply to customer emails directly.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "smtp",
        color: "blue-text-gradient",
      },
    ],
    image: shaktipuja,
  },
  {
    name: "Qli Ventures",
    description:
      "Modern venture and corporate consulting web platform built from first design to hosting, featuring clean responsive UI, optimized asset loading, and interactive business capability showcases.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: qliventures,
    live_link: "https://www.qli-ventures.com/",
  },
  {
    name: "Ace",
    description:
      "Production corporate website developed from scratch during internship at BuzzOnEarth following custom design specifications, with optimized responsiveness and payment integration.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: ace,
    live_link: "https://aceindia.in",
  },
  {
    name: "Gaming Website",
    description:
      "Showcasing modern frontend skills with elegant designs, animated transitions, and seamless user experiences with 3D and motion effects.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "motion",
        color: "pink-text-gradient",
      },
    ],
    image: gaming,
    source_code_link: "https://github.com/shresthgour/Gaming-Website",
  },
];

export { services, technologies, experiences, testimonials, projects, educations };
