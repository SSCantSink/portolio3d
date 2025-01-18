import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css, dat, epicsystems,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Web Developer",
        company_name: "Epic",
        icon: epicsystems,
        iconBg: "#fccbc1",
        date: "May 2022 - Dec 2022",
        points: [
            "Quickly learned and got acquainted into the Hyperspace web development system.",
            "Collaborating with other teams to evaluate critical problems.",
            "Creating and implementing responsive designs with delightful user experience.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Mobile Developer",
        company_name: "Dealer Automation Technologies",
        icon: dat,
        iconBg: "#2357BE",
        date: "August 2023 - Present",
        points: [
            "Using Flutter to create a cross-platform application to supplement a web application.",
            "Worked with React.js to create a landing page for the company to ensure the company goes to market",
            "Implementing responsive designs and meeting criteria for requirements.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/SSCantSink',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/karanveer-sandhu-4b5396209/',
    }
];

export const projects = [
    {
        iconUrl: dat,
        theme: 'btn-back-blue',
        name: 'Dealer Automation Technologies Landing Page',
        description: 'A Landing Page and E-Commerce for my current company Dealer Automation Technologies.',
        link: 'https://dealerat.com',
    }
];