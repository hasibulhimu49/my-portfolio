// "Featured Projects" section, shown in this order.
// Fields:
//   image        screenshot path, or null to show an icon tile instead
//   tech         technology tags (may be empty)
//   links        buttons under the card: { label, url, icon } (may be empty)

const GH = 'https://github.com/hasibulhimu49'

// Target of the section's "View GitHub" link.
export const projectsGithubUrl = GH

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
    description: 'E-commerce platform for buying trees with an integrated AI-based plant disease detection system.',
    tech: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
    links: [
      { label: 'Backend', url: `${GH}/naturenest-backend`, icon: 'fa-brands fa-github' },
      { label: 'Live', url: 'https://nature0nest.netlify.app/', icon: 'fa-solid fa-arrow-up-right-from-square' },
    ],
  },
  {
    image: '/assets/images/portzen.jpg',
    title: 'PortZen – CV & Portfolio Builder',
    description: 'Generates professional resumes and portfolios with reusable templates and real-time preview.',
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
    description: 'RESTful backend for user profiles and posts with structured JSON responses and Flyway migrations.',
    tech: ['Java 21', 'Spring Boot', 'Hibernate', 'Flyway'],
    links: [{ label: 'Backend', url: `${GH}/blog-platform-backend`, icon: 'fa-brands fa-github' }],
  },
]
