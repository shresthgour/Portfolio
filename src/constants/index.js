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
  PW,
  freelancer,
  carrent,
  jobit,
  tripguide,
  threejs,
  hirehub,
  hoobank,
  excelify,
  newswave,
  buzzonearth,
  shopcart,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Software Engineer",
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

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Physics Wallah",
    icon: PW,
    iconBg: "#383E56",
    date: "May 2023 - June 2023",
    points: [
      "Designed, developed, and optimized a responsive and bug-free countdown app",
      "Developed the app using HTML5, CSS3, JavaScript, ReactJS, and Tailwind CSS, ensuring a seamless and visually appealing user experience",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Managed and coordinated a two-person team, ensuring effective collaboration and achieving project goals.",
    ],
  },
  {
    title: "Freelancer",
    company_name: "freelancer",
    icon: freelancer,
    iconBg: "#E6DEDD",
    date: "June 2023 - August 2023",
    points: [
      "Developed dynamic and responsive websites for clients, utilizing both front-end and back-end technologies.",
      "Collaborated with clients to understand project requirements, goals, and target audience to deliver customized solutions.",
      "Designed and implemented intuitive user interfaces using HTML5, CSS3, and JavaScript, React JS, Tailwind CSS ensuring a seamless user experience across multiple devices.",
      "Created robust back-end functionalities using frameworks such as Node.js and Express, and integrated databases (e.g., MySQL, MongoDB) for efficient data management.",
    ],
  },
  {
    title: "Full Stack Web Developer",
    company_name: "BuzzOnEarth",
    icon: buzzonearth,
    iconBg: "#E6DEDD",
    date: "September 2023 - September 2024",
    points: [
      "Enhanced IndiaMUN performance by 20% through image optimization and code refinement.",
      "Transformed Indiamun with a complete redesign based on provided guidelines.",
      "Developed responsive design for Indiamun , resolving previous non-responsiveness.",
      "Implemented secure login/logout feature and custom data storage hook for IndiaMUN.",
      "Developed Aceindia from scratch , following design specifications.",
      "Resolved bugs on Gaiatheearthfoundation , improving overall functionality.",
      "Integrated Razorpay payment on multiple sites using React.js, Firebase, and Node.js.",
      "Redesigned and optimized Affiliate Now page on Indiamun for enhanced user experience.",
      "Efficiently handled data storage and management using Firebase.",
      "Coordinated with the design and marketing teams for seamless integration of web development strategies.",
      "Built an entire backend server using Express js, Node js.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
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
    name: "HireHub",
    description:
      "Showcasing my exceptional frontend skills with elegant designs and seamless user experiences. Witness the artistry of web development.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: hirehub,
    source_code_link: "https://github.com/shresthgour/Hire-Hub",
  },
  {
    name: "ShopCart",
    description:
      "Showcasing my exceptional frontend skills with elegant designs and seamless user experiences. Witness the artistry of web development.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: shopcart,
    source_code_link: "https://github.com/shresthgour/Shopcart",
  },
  {
    name: "Excelify",
    description:
      "Showcasing my exceptional frontend skills with elegant designs and seamless user experiences. Witness the artistry of web development.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "hooks",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: excelify,
    source_code_link: "https://github.com/shresthgour/excelify",
  },
  {
    name: "Hoobank",
    description:
      "Showcasing my exceptional frontend skills with elegant designs and seamless user experiences. Witness the artistry of web development.",
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
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: hoobank,
    source_code_link: "https://github.com/shresthgour/Hoobank",
  },
  {
    name: "NewsWave",
    description:
      "It uses an API that fetches data and I showcased it using fetch API",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap5",
        color: "green-text-gradient",
      },
    ],
    image: newswave,
    source_code_link: "https://github.com/shresthgour/NewsWave",
  },
];

export { services, technologies, experiences, testimonials, projects };