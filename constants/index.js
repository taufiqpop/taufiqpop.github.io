import FullStackIcon from "./../public/assets/icons/full-stack.svg";
import BackendIcon from "./../public/assets/icons/backend.svg";
import DevOpsIcon from "./../public/assets/icons/dev-ops.svg";
import FreelancerIcon from "./../public/assets/icons/freelance.svg";

import GithubIcon from "./../public/assets/icons/social/github.svg";
import LinkedInIcon from "./../public/assets/icons/social/linkedin.svg";
import DiscordIcon from "./../public/assets/icons/social/discord.svg";
import SpotifyIcon from "./../public/assets/icons/social/spotify.svg";
import YoutubeIcon from "./../public/assets/icons/social/youtube.svg";
import LinktreeIcon from "./../public/assets/icons/social/linktree.svg";

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
      name: "PHP",
      icon: "/assets/tech/php.svg",
      link: "https://www.php.net/",
    },
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
      name: "NextJS",
      icon: "/assets/tech/nextjs.svg",
      link: "https://nextjs.org/",
    },
    {
      name: "Vue",
      icon: "/assets/tech/vue.svg",
      link: "https://vuejs.org/",
    },
    {
      name: "Bootstrap",
      icon: "/assets/tech/bootstrap.svg",
      link: "https://getbootstrap.com/",
    },
    {
      name: "Tailwind",
      icon: "/assets/tech/tailwind.svg",
      link: "https://tailwindcss.com/",
    },
  ],
  libraries: [
    {
      name: "jQuery",
      icon: "/assets/tech/jquery.svg",
      link: "https://jquery.com/",
    },
    {
      name: "React",
      icon: "/assets/tech/react.svg",
      link: "https://react.dev/",
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
      name: "MongoDB",
      icon: "/assets/tech/mongodb.svg",
      link: "https://www.mongodb.com/",
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
    {
      name: "Antigravity",
      icon: "/assets/tech/antigravity.svg",
      link: "https://antigravity.google/",
    },
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
    {
      name: "Insomnia",
      icon: "/assets/tech/insomnia.svg",
      link: "https://insomnia.rest/",
    },
  ],
  os: [
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
    testimonial: "Test",
    name: "Test",
    designation: "Test",
    company: "Test",
    image: "#",
  },
];

const projects = [
  {
    name: "AFEL",
    description: "Core Projects",
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
    image: "/assets/projects/core/afel.png",
    source_code_link: "#",
    deployed_link: "https://afel.online/",
    featured: true,
  },
  {
    name: "RAPMA FM Radio",
    description: "Core Projects",
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
    image: "/assets/projects/core/rapmafm.png",
    source_code_link: "https://github.com/taufiqpop/rapmafm",
    deployed_link: "https://rapmafm.com/",
    featured: true,
  },
  {
    name: "RSUI YAKSSI Gemolong",
    description: "Core Projects",
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
    image: "/assets/projects/core/rsui-yakssi.png",
    source_code_link: "#",
    deployed_link: "https://mtatv.net/",
    featured: true,
  },
  {
    name: "PT. ARINA AL-HAQ (MTATV)",
    description: "Support Projects",
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
    image: "/assets/projects/support/mtatv.jpg",
    source_code_link: "#",
    deployed_link: "https://mtatv.net/",
    featured: false,
  },
];

const socials = [
  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/taufiqpop",
  },
  {
    id: "github",
    icon: <GithubIcon />,
    link: "https://github.com/taufiqpop",
  },
  {
    id: "discord",
    icon: <DiscordIcon />,
    link: "https://discord.gg/CKXCwBZr72",
  },
  {
    id: "spotify",
    icon: <SpotifyIcon />,
    link: "https://open.spotify.com/show/66lFgL2DzwXQQORXKkvsf4",
  },
  {
    id: "linktree",
    icon: <LinktreeIcon />,
    link: "https://linktr.ee/TaufiqPop",
  },
  {
    id: "youtube",
    icon: <YoutubeIcon />,
    link: "https://www.youtube.com/@TaufiqPop?sub_confirmation=1",
  },
];

const heroTexts = [
  "Full-Stack Developer",
  500,
  "Back-End Developer",
  500,
  "Software Developer",
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
