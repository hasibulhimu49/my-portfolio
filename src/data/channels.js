// YouTube channels, shown in order. Required: name, url (also the React key, so keep it unique).
// Banner: "cover" image (add coverFit: 'contain' for text-only covers that must not be cropped),
//   or "icon" on a "theme" gradient (theme-* classes in src/styles/components.css).
// Avatar: "avatarImg", or "avatarIcon" on the theme, or "avatar" text initials.
// Optional: category, topics, desc, handle.
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
