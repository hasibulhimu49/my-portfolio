export const RESUME_URL =
  'https://drive.google.com/uc?export=download&id=1V1GjW6V9WP8UF-II1i_cb9_Zm2hYzXtT'

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#project', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export const stats = [
  { value: '01+', label: 'Years Experience' },
  { value: '10+', label: 'Project Done' },
  { value: '05+', label: 'Happy Client' },
]

export const skillCategories = [
  {
    icon: 'fa-code',
    title: 'Frontend Ecosystem',
    skills: [
      ['HTML5', 95],
      ['CSS3 / Tailwind', 90],
      ['JavaScript (ES6+)', 68],
      ['TypeScript', 55],
      ['React.js', 30],
    ],
  },
  {
    icon: 'fa-server',
    title: 'Backend & Database',
    skills: [
      ['Java', 95],
      ['Spring Boot', 87],
      ['Spring Security', 75],
      ['PostgreSQL', 85],
      ['MySQL', 88],
    ],
  },
  {
    icon: 'fa-tools',
    title: 'Tools & DevOps',
    skills: [
      ['Git & GitHub', 90],
      ['IntelliJ IDEA', 85],
      ['Docker', 45],
      ['Microservices', 60],
      ['AWS (EC2, S3)', 30],
    ],
  },
]

export const softSkills = [
  { icon: 'fa-comments', label: 'Communication' },
  { icon: 'fa-users', label: 'Team Collaboration' },
  { icon: 'fa-lightbulb', label: 'Problem Solving' },
  { icon: 'fa-clock', label: 'Time Management' },
  { icon: 'fa-video', label: 'Content Creator' },
  { icon: 'fa-language', label: 'English Proficiency' },
]

const GH = 'https://github.com/hasibulhimu49'

export const projects = [
  {
    image: 'https://placehold.co/600x400/112240/64ffda?text=Blog+Platform',
    title: 'Blog Platform API – Spring Boot Backend',
    description:
      'Developed a RESTful backend API for user profile management, enabling secure creation, updating, and retrieval of user data, including profiles and posts. Implemented structured JSON responses following REST principles.',
    tech: ['Java 21', 'Spring Boot', 'PostgreSQL', 'Spring Security', 'Hibernate', 'Flyway'],
    links: [{ href: `${GH}/blog-platform-backend`, title: 'GitHub Backend', label: 'Backend' }],
  },
  {
    image: 'https://placehold.co/600x400/112240/64ffda?text=Ecommerce+Platform',
    title: 'Ecommerce Platform API – Spring Boot Backend',
    description:
      'Developed a secure REST API for ecommerce management, handling product cataloging, user accounts, and order processing. Implemented Spring Security (JWT) for authentication and followed RESTful principles for scalable frontend integration.',
    tech: ['Java 21', 'Spring Boot', 'PostgreSQL', 'Hibernate', 'Spring Security', 'JWT'],
    links: [{ href: `${GH}/ecommerce-platform-backend`, title: 'GitHub Backend', label: 'Backend' }],
  },
  {
    image: 'https://placehold.co/600x400/112240/64ffda?text=Finance+Tracker',
    title: 'Secure Personal Finance Tracker – Expense & Budgeting Platform',
    description:
      'Developed a full-stack finance management platform featuring secure user authentication, income and expense tracking, and financial reporting with a clean and responsive user interface.',
    tech: ['JavaScript', 'React.js', 'Java 21', 'Spring Boot', 'PostgreSQL', 'JWT'],
    links: [
      { href: `${GH}/personal-finance-tracker-backend`, title: 'GitHub Backend', label: 'Backend' },
    ],
  },
  {
    image: '/assets/images/buysmarter.png',
    title: 'BuySmarter – AI-Powered CPU Price Comparison Platform',
    description:
      'A modern web application for comparing CPU prices across multiple vendors in Bangladesh, featuring AI-powered product recognition, price aggregation, and an interactive PC builder to help users create optimized custom builds.',
    tech: ['React.js', 'JavaScript', 'Bootstrap', 'Python', 'Next.js', 'SQLite'],
    links: [
      { href: `${GH}/buysmarter-backend`, title: 'GitHub Backend', label: 'Backend' },
      { href: `${GH}/buysmarter-frontend`, title: 'GitHub Frontend', label: 'Frontend' },
    ],
  },
  {
    image:
      'https://github.com/hasibulhimu49/Team_Enforces_NatureNest/blob/main/Images/WhatsApp%20Image%202024-12-10%20at%2011.14.34%20PM.jpeg?raw=true',
    title: 'NatureNest – Tree Marketplace with AI Plant Disease Detection',
    description:
      'A full-stack e-commerce platform for buying trees with an integrated AI-based plant disease detection system. Designed to promote environmental awareness while providing a seamless shopping experience.',
    tech: ['Tailwind CSS', 'React.js', 'Typescript', 'Node.js', 'Express.js', 'MongoDB'],
    links: [
      { href: `${GH}/naturenest-backend`, title: 'GitHub Backend', label: 'Backend' },
      { href: `${GH}/naturenest-frontend`, title: 'GitHub Frontend', label: 'Frontend' },
      { href: 'https://nature0nest.netlify.app/', title: 'Live Demo', label: 'Live', external: true },
    ],
  },
  {
    image: '/assets/images/portzen.png',
    title: 'PortZen – CV and Portfolio Builder with Templates',
    description:
      'Developed a full-stack CV and portfolio builder that enables users to generate professional resumes and portfolios efficiently. Implemented reusable templates, real-time preview functionality for seamless user experience.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Vue.js', 'PHP', 'Laravel', 'MySQL'],
    links: [
      { href: `${GH}/portzen-backend`, title: 'GitHub Backend', label: 'Backend' },
      { href: `${GH}/portzen-frontend`, title: 'GitHub Frontend', label: 'Frontend' },
    ],
  },
]
