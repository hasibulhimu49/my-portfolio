// All site content lives here. Edit this file to update text, links and numbers.
//
// TODO: links set to '#' are placeholders. Replace them with your real URLs.

export const profile = {
  firstName: 'Mohammad',
  lastName: 'Hasibul Hasan',
  roles: ['Software Engineer', 'Educator', 'Content Creator'],
  intro:
    'I build digital solutions, teach what I love, and create content to inspire and help others grow. Welcome to my personal space on the internet!',
  banner: '/assets/images/hero-banner.jpg',
  resumeUrl: 'https://drive.google.com/uc?export=download&id=1V1GjW6V9WP8UF-II1i_cb9_Zm2hYzXtT',
  email: 'hasibulx26@gmail.com',
  phone: '+880 1705-064149',
  location: 'Bashundhara R/A, Dhaka, Bangladesh',
  joined: '2022',
  website: '', // e.g. 'mohammadhasibulhasan.com' once the domain is live (hidden while empty)
  youtubeUrl: '#content', // hero "Watch My YouTube" button: scrolls to the channels section
}

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'content', label: 'YouTube' },
  { id: 'courses', label: 'Learn' },
  { id: 'contact', label: 'Contact' },
]

export const socials = [
  { label: 'YouTube', icon: 'fa-brands fa-youtube', url: 'https://www.youtube.com/@hasibulhimu49' },
  { label: 'Instagram', icon: 'fa-brands fa-instagram', url: '#' }, // TODO
  { label: 'Facebook', icon: 'fa-brands fa-facebook', url: '#' }, // TODO
  { label: 'LinkedIn', icon: 'fa-brands fa-linkedin', url: 'https://www.linkedin.com/in/hasibulhimu49' },
  { label: 'X', icon: 'fa-brands fa-x-twitter', url: 'https://twitter.com/hasibulhimu49' },
  { label: 'Medium', icon: 'fa-brands fa-medium', url: '#' }, // TODO
  { label: 'GitHub', icon: 'fa-brands fa-github', url: 'https://github.com/hasibulhimu49' },
  { label: 'Telegram', icon: 'fa-brands fa-telegram', url: '#' }, // TODO
  { label: 'Discord', icon: 'fa-brands fa-discord', url: '#' }, // TODO
]

export const about = {
  paragraphs: [
    "I'm Mohammad Hasibul Hasan, a passionate Software Engineer, Educator, and Content Creator. I love building useful products, sharing knowledge, and helping others grow in their journey.",
    "Whether it's writing clean code, teaching complex concepts in simple ways, or creating content that inspires — I'm always up for learning, creating, and making an impact.",
  ],
  quote: { text: 'The best way to predict the future is to invent it.', author: 'Alan Kay' },
}

export const services = [
  {
    title: 'Build',
    icon: 'fa-solid fa-code',
    color: 'blue',
    text: 'Developing modern web applications, scalable systems and useful digital products.',
  },
  {
    title: 'Teach',
    icon: 'fa-solid fa-book-open',
    color: 'green',
    text: 'Creating tutorials, courses and learning resources to make tech simple.',
  },
  {
    title: 'Create',
    icon: 'fa-solid fa-circle-play',
    color: 'purple',
    text: 'Making content on YouTube, blog and social media to inspire and share knowledge.',
  },
  {
    title: 'Community',
    icon: 'fa-solid fa-users',
    color: 'orange',
    text: 'Building and supporting communities of learners, creators and developers.',
  },
]

// Newest company first; roles inside a company are newest first.
// Add "points" (array of strings) to a role to list what you did there.
export const experience = [
  {
    company: 'Global 360 Ventures',
    logo: '/assets/images/global360-logo.png',
    location: 'London, UK & Bangladesh',
    about: 'London–Bangladesh based software company',
    roles: [
      { title: 'Software Engineer L1', start: 'Jul 2026', end: 'Present', current: true },
      { title: 'Software Engineer (Intern)', start: 'Jan 2026', end: 'Jun 2026' },
    ],
  },
]

export const skills = [
  'Java',
  'Spring Boot',
  'Spring Security',
  'Spring AI',
  'PostgreSQL',
  'MySQL',
  'Docker',
  'Git',
  'Linux',
  'System Design',
  'Microservices',
]

const GH = 'https://github.com/hasibulhimu49'

export const projects = [
  {
    image: '/assets/images/financetracker.jpg',
    title: 'Secure Personal Finance Tracker',
    description:
      'Full-stack finance platform with secure authentication, income and expense tracking, and financial reporting.',
    tech: ['React', 'Java 21', 'Spring Boot', 'PostgreSQL', 'JWT'],
    links: [{ label: 'Backend', url: `${GH}/personal-finance-tracker-backend`, icon: 'fa-brands fa-github' }],
  },
  {
    image: '/assets/images/buysmarter.jpg',
    title: 'BuySmarter – CPU Price Comparison',
    description:
      'Compares CPU prices across vendors in Bangladesh with AI product recognition and an interactive PC builder.',
    tech: ['React', 'Next.js', 'Python', 'SQLite'],
    links: [
      { label: 'Backend', url: `${GH}/buysmarter-backend`, icon: 'fa-brands fa-github' },
      { label: 'Frontend', url: `${GH}/buysmarter-frontend`, icon: 'fa-brands fa-github' },
    ],
  },
  {
    image: '/assets/images/naturenest.jpg',
    title: 'NatureNest – Tree Marketplace',
    description:
      'E-commerce platform for buying trees with an integrated AI-based plant disease detection system.',
    tech: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
    links: [
      { label: 'Backend', url: `${GH}/naturenest-backend`, icon: 'fa-brands fa-github' },
      { label: 'Live', url: 'https://nature0nest.netlify.app/', icon: 'fa-solid fa-arrow-up-right-from-square' },
    ],
  },
  {
    image: '/assets/images/portzen.jpg',
    title: 'PortZen – CV & Portfolio Builder',
    description:
      'Generates professional resumes and portfolios with reusable templates and real-time preview.',
    tech: ['Vue.js', 'Laravel', 'PHP', 'MySQL'],
    links: [
      { label: 'Backend', url: `${GH}/portzen-backend`, icon: 'fa-brands fa-github' },
      { label: 'Frontend', url: `${GH}/portzen-frontend`, icon: 'fa-brands fa-github' },
    ],
  },
  {
    image: null,
    title: 'Ecommerce Platform API',
    description:
      'Secure REST API for product catalog, user accounts and order processing, with JWT-based Spring Security.',
    tech: ['Java 21', 'Spring Boot', 'PostgreSQL', 'JWT'],
    links: [{ label: 'Backend', url: `${GH}/ecommerce-platform-backend`, icon: 'fa-brands fa-github' }],
  },
  {
    image: null,
    title: 'Blog Platform API',
    description:
      'RESTful backend for user profiles and posts with structured JSON responses and Flyway migrations.',
    tech: ['Java 21', 'Spring Boot', 'Hibernate', 'Flyway'],
    links: [{ label: 'Backend', url: `${GH}/blog-platform-backend`, icon: 'fa-brands fa-github' }],
  },
]

// Add subscriber counts with a "subscribers" field (e.g. "12K+"); the handle shows until then.
export const channels = [
  {
    name: 'Mohammad Hasibul Hasan',
    category: 'Personal & Lifestyle',
    topics: 'Life | Experiences | Adventures',
    desc: 'This channel is all about my life, experiences, adventures, and the little things that make life interesting.',
    handle: '@hasibulhimu49',
    cover: '/assets/images/yt-personal-cover.jpg',
    avatarImg: '/assets/images/yt-personal-avatar.jpg',
    url: 'https://www.youtube.com/@hasibulhimu49',
  },
  {
    name: 'BrainXNext',
    category: 'Full Stack Development',
    topics: 'Java | Spring Boot | Spring Security',
    desc: 'Build real-world apps with Spring, PostgreSQL, Redis and Docker — job-ready skills for beginner and intermediate developers.',
    handle: '@BrainXNext',
    cover: '/assets/images/yt-brainxnext-cover.jpg',
    avatarImg: '/assets/images/yt-brainxnext-avatar.jpg',
    url: 'https://www.youtube.com/@BrainXNext',
  },
  {
    name: 'Smart Zone',
    category: 'Tech News & Tips',
    topics: 'Gadgets | Mobile Tips | Buying Guides',
    desc: 'Latest tech news on phones, computers and gadgets, plus practical tips to get more out of your smartphone.',
    handle: '@HelloSmartZone',
    cover: '/assets/images/yt-smartzone-cover.jpg',
    coverFit: 'contain',
    avatarImg: '/assets/images/yt-smartzone-avatar.jpg',
    url: 'https://www.youtube.com/@HelloSmartZone',
  },
  {
    name: 'Tech On The Way',
    category: 'Future Tech & AI',
    topics: 'AI | Emerging Tech | Innovation',
    desc: 'English videos on future technology and AI: where tech is heading and what it means for you.',
    handle: '@TechOnTheWay',
    icon: 'fa-solid fa-robot',
    theme: 'future',
    avatarIcon: 'fa-solid fa-microchip',
    url: 'https://www.youtube.com/@TechOnTheWay',
  },
]

// TODO: replace the Udemy home link with each course's own URL once published.
// "rating"/"reviews" are optional; the rating line is hidden when absent.
export const courses = [
  {
    title: 'Complete Java Programming Course (Beginner to Advanced)',
    platform: 'Udemy',
    thumbIcon: 'fa-brands fa-java',
    thumbLabel: 'Java',
    iconColor: '#f97316',
    url: 'https://www.udemy.com/',
  },
  {
    title: 'AI Engineering with Spring AI: Build Intelligent Apps',
    platform: 'Udemy',
    thumbIcon: 'fa-solid fa-brain',
    thumbLabel: 'AI',
    iconColor: '#22d3ee',
    url: 'https://www.udemy.com/',
  },
  {
    title: 'DevOps Bootcamp: Docker, CI/CD & Kubernetes',
    platform: 'Udemy',
    thumbIcon: 'fa-brands fa-docker',
    thumbLabel: 'DevOps',
    iconColor: '#38bdf8',
    url: 'https://www.udemy.com/',
  },
]

// TODO: community invite links (cards link to '#' until set).
export const communities = [
  { name: 'Facebook Group', desc: 'Programming & Career', icon: 'fa-brands fa-facebook-f', color: '#1877f2', url: '#' },
  { name: 'WhatsApp Channel', desc: 'Updates & Announcements', icon: 'fa-brands fa-whatsapp', color: '#25d366', url: '#' },
  { name: 'Telegram Channel', desc: 'Resources & Discussions', icon: 'fa-brands fa-telegram', color: '#229ed9', url: '#' },
  { name: 'Discord Community', desc: 'Live Discussions & Networking', icon: 'fa-brands fa-discord', color: '#5865f2', url: '#' },
]

// Newest first; the section shows the first 4.
export const latestContent = [
  {
    title: 'Class 01 | What is Software Design? | Software Design Fundamentals',
    tag: 'Software Design',
    thumb: 'https://i.ytimg.com/vi/7vnFe3IcLq8/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=7vnFe3IcLq8',
  },
  {
    title: 'Java Full Course for Beginners | Part 2 | Advanced Core Java',
    tag: 'Full Course',
    thumb: 'https://i.ytimg.com/vi/ircakgWb5qY/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=ircakgWb5qY',
  },
  { title: 'How to Setup Spring Boot with PostgreSQL', tag: 'Tutorial', date: 'Aug 10, 2025', icon: 'fa-solid fa-leaf', theme: 'tech', url: '#' },
  { title: 'Docker & Docker Compose Complete Guide', tag: 'DevOps', date: 'Aug 5, 2025', icon: 'fa-brands fa-docker', theme: 'academy', url: '#' },
  { title: 'Top 10 VS Code Extensions for Java Developers', tag: 'Tips', date: 'Aug 1, 2025', icon: 'fa-solid fa-code', theme: 'vlog', url: '#' },
  { title: 'A Day in My Life | Vlog', tag: 'Lifestyle', date: 'Jul 25, 2025', icon: 'fa-solid fa-mug-hot', theme: 'build', url: '#' },
]
