import GithubIcon from "./../public/assets/icons/github.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
import XIcon from "./../public/assets/icons/x.svg";
import InstagramIcon from "./../public/assets/icons/instagram.svg";
import FrontendIcon from "./../public/assets/icons/frontend.svg";
import DevOpsIcon from "./../public/assets/icons/dev-ops.svg";
import FreelancerIcon from "./../public/assets/icons/freelance.svg";
import BackendIcon from "./../public/assets/icons/backend.svg";
import FullStackIcon from "./../public/assets/icons/full-stack.svg";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: <FullStackIcon />,
  },
  {
    title: "Back-End Developer",
    icon: <BackendIcon />,
  },
  {
    title: "Front-End Developer",
    icon: <FrontendIcon />,
  },
  {
    title: "DevOps",
    icon: <DevOpsIcon />,
  },
  {
    title: "Freelancer",
    icon: <FreelancerIcon />,
  },
];

const technologies = {
  languages: [
    {
      name: "JavaScript",
      icon: "/assets/tech/javascript.svg",
      link: "https://www.javascript.com/",
    },
    {
      name: "TypeScript",
      icon: "/assets/tech/typescript.svg",
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "PHP",
      icon: "/assets/tech/php.svg",
      link: "https://www.php.net/",
    },
    {
      name: "Python",
      icon: "/assets/tech/python.svg",
      link: "https://www.python.org/",
    },
    {
      name: "Go",
      icon: "/assets/tech/go.svg",
      link: "https://go.dev/",
    },
  ],
  frameworks: [
    {
      name: "Laravel",
      icon: "/assets/tech/laravel.svg",
      link: "https://laravel.com/",
    },
    {
      name: "CodeIgniter",
      icon: "/assets/tech/codeigniter.svg",
      link: "https://www.codeigniter.com/",
    },
    {
      name: "Vue",
      icon: "/assets/tech/vue.svg",
      link: "https://vuejs.org/",
    },
    {
      name: "NextJS",
      icon: "/assets/tech/nextjs.svg",
      link: "https://nextjs.org/",
    },
    {
      name: "Bootstrap",
      icon: "/assets/tech/bootstrap.svg",
      link: "https://getbootstrap.com/",
    },
    {
      name: "TailwindCSS",
      icon: "/assets/tech/tailwindcss.svg",
      link: "https://tailwindcss.com/",
    },
  ],
  libraries: [
    {
      name: "React",
      icon: "/assets/tech/react.svg",
      link: "https://react.dev/",
    },
    {
      name: "jQuery",
      icon: "/assets/tech/jquery.svg",
      link: "https://jquery.com/",
    },
    {
      name: "npm",
      icon: "/assets/tech/npm.svg",
      link: "https://www.npmjs.com/",
    },
  ],
  databases: [
    {
      name: "MySQL",
      icon: "/assets/tech/mysql.svg",
      link: "https://www.mysql.com/",
    },
    {
      name: "MariaDB",
      icon: "/assets/tech/mariadb.svg",
      link: "https://mariadb.org/",
    },
    {
      name: "PostgreSQL",
      icon: "/assets/tech/postgresql.svg",
      link: "https://www.postgresql.org",
    },
  ],
  tools: [
    {
      name: "VSCode",
      icon: "/assets/tech/vscode.svg",
      link: "https://code.visualstudio.com/",
    },
    // {
    //   name: "Antigravity",
    //   icon: "/assets/tech/antigravity.svg",
    //   link: "https://antigravity.google/",
    // },
    {
      name: "Docker",
      icon: "/assets/tech/docker.svg",
      link: "https://www.docker.com/",
    },
    {
      name: "Git",
      icon: "/assets/tech/git.svg",
      link: "https://git-scm.com/",
    },
    // {
    //   name: "Github",
    //   icon: "/assets/tech/github.svg",
    //   link: "https://github.com/",
    // },
    // {
    //   name: "Gitlab",
    //   icon: "/assets/tech/gitlab.svg",
    //   link: "https://gitlab.com/",
    // },
    // {
    //   name: "Postman",
    //   icon: "/assets/tech/postman.svg",
    //   link: "https://www.postman.com/",
    // },
    {
      name: "Insomnia",
      icon: "/assets/tech/insomnia.svg",
      link: "https://insomnia.rest/",
    },
  ],
  os: [
    // {
    //   name: "PopOS",
    //   icon: "/assets/tech/pop-os.svg",
    //   link: "https://system76.com/pop",
    // },
    // {
    //   name: "Ubuntu",
    //   icon: "/assets/tech/ubuntu.svg",
    //   link: "https://ubuntu.com/",
    // },
    {
      name: "Linux",
      icon: "/assets/tech/linux.svg",
      link: "https://www.linux.org/",
    },
    {
      name: "Windows",
      icon: "/assets/tech/windows.svg",
      link: "https://www.microsoft.com/en-us/windows",
    },
    {
      name: "Android",
      icon: "/assets/tech/android.svg",
      link: "https://www.android.com/",
    },
  ],
};

const experiences = [
  {
    title: "Software Developer",
    company_name: "PT. Phicos Cipta Media",
    icon: "/assets/company/briefcase.svg",
    iconBg: "#E6DEDD",
    date: "June 2024 - Present",
    points: [
      "Delivered 47+ client projects, including web-based applications and custom business solutions across multiple domains.",
      "Collaborated directly with clients to analyze requirements, define system workflows, and recommend technical solutions.",
      "Designed and developed application features aligned with business objectives, usability requirements, and system scalability.",
      "Maintained and enhanced existing applications through feature improvements, issue resolution, and performance optimization.",
      "Supported the full software development lifecycle, including requirement gathering, development, testing, implementation, and post-deployment support.",
    ],
  },
  {
    title: "IT Specialist",
    company_name: "RSUI YAKSSI Gemolong",
    icon: "/assets/company/briefcase.svg",
    iconBg: "#E6DEDD",
    date: "January 2024 - April 2024",
    points: [
      "Developed and maintained the official website of RSUI YAKSSI Gemolong.",
      "Managed website content and ensured system availability and performance.",
      "Provided technical support for network infrastructure, servers, computers, and printers.",
      "Performed troubleshooting, maintenance, and issue resolution to support daily hospital operations.",
    ],
  },
  {
    title: "IT Specialist",
    company_name: "RAPMA FM Radio",
    icon: "/assets/company/briefcase.svg",
    iconBg: "#E6DEDD",
    date: "January 2021 - December 2022",
    points: [
      "Managed and maintained RAPMA FM's website, blog, and event landing pages to support digital publications and audience engagement.",
      "Monitored and analyzed website traffic, visitor behavior, and engagement metrics to support data-driven decision making.",
      "Ensured the availability and performance of radio streaming services across web and mobile platforms.",
      "Analyzed daily streaming listener data to identify audience trends and evaluate broadcasting performance.",
      "Provided technical support for software, operating systems, hardware, and network infrastructure, including installation, configuration, maintenance, and troubleshooting.",
      "Managed participant registration and ticketing databases for RAPMAFEST webinars and competitions, ensuring data accuracy and smooth event operations.",
    ],
  },
  {
    title: "Full-Stack Developer (Internship)",
    company_name: "PT. ARINA AL-HAQ (MTATV)",
    icon: "/assets/company/briefcase.svg",
    iconBg: "#E6DEDD",
    date: "February 2022 - May 2022",
    points: [
      "Developed a web-based platform for MTATV's promotional and content management needs.",
      "Built front-end and back-end features to support content publishing and website operations.",
      "Managed and organized Kajian Ahad Pagi video archives and promotional content through an integrated database system.",
      "Developed administrative features to simplify content management and improve operational efficiency.",
      "Collaborated with the IT team during development, testing, and implementation phases.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "AFEL",
    description: "",
    tags: [
      {
        name: "codeigniter",
        color: "pink-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "bootstrap",
        color: "blue-text-gradient",
      },
    ],
    image: "/assets/projects/afel.png",
    source_code_link: "#",
    deployed_link: "https://afel.online/",
  },
  {
    name: "RAPMA FM Radio",
    description: "",
    tags: [
      {
        name: "laravel",
        color: "pink-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "bootstrap",
        color: "blue-text-gradient",
      },
    ],
    image: "/assets/projects/rapmafm.png",
    source_code_link: "https://github.com/taufiqpop/rapmafm",
    deployed_link: "https://rapmafm.com/",
  },
  {
    name: "RSUI YAKSSI Gemolong",
    description: "",
    tags: [
      {
        name: "codeigniter",
        color: "pink-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "bootstrap",
        color: "blue-text-gradient",
      },
    ],
    image: "/assets/projects/rsui-yakssi.png",
    source_code_link: "#",
    deployed_link: "https://mtatv.net/",
  },
  {
    name: "PT. ARINA AL-HAQ (MTATV)",
    description: "",
    tags: [
      {
        name: "php",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "bootstrap",
        color: "blue-text-gradient",
      },
    ],
    image: "/assets/projects/mtatv.jpg",
    source_code_link: "#",
    deployed_link: "https://mtatv.net/",
  },
];

const socials = [
  {
    id: "github",
    icon: <GithubIcon />,
    link: "https://github.com/taufiqpop",
  },
  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/taufiqpop",
  },
  {
    id: "x",
    icon: <XIcon />,
    link: "https://twitter.com/taufiqpop99",
  },
  {
    id: "instagram",
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/taufiqpop99",
  },
];

const heroTexts = [
  "Software Developer",
  500,
  "Back-End Developer",
  500,
  "Full-Stack Developer",
  500,
  "Freelancer",
  500,
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socials,
  heroTexts,
};
