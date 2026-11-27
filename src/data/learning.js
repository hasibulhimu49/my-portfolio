// TODO: replace the Udemy home link with each course's own URL once published.
// "rating"/"reviews" are optional; a "New" badge shows instead of the rating line when absent.
// "iconColor" tints the thumbnail icon; "title" is the React key, so keep it unique.
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
// "color" is the icon circle's background; the "Join My Community" block hides when this list is empty.
export const communities = [
  { name: 'Facebook Group', desc: 'Programming & Career', icon: 'fa-brands fa-facebook-f', color: '#1877f2', url: '#' },
  {
    name: 'WhatsApp Channel',
    desc: 'Updates & Announcements',
    icon: 'fa-brands fa-whatsapp',
    color: '#25d366',
    url: '#',
  },
  {
    name: 'Telegram Channel',
    desc: 'Resources & Discussions',
    icon: 'fa-brands fa-telegram',
    color: '#229ed9',
    url: '#',
  },
  {
    name: 'Discord Community',
    desc: 'Live Discussions & Networking',
    icon: 'fa-brands fa-discord',
    color: '#5865f2',
    url: '#',
  },
]
