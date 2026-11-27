// Newest first; the section shows the first 4 (MAX_ITEMS in LatestContent.jsx) and hides when empty.
// Thumbnail: a "thumb" image URL (16:9), or an "icon" on a "theme" gradient (theme-* classes).
// "date" is optional display text. "title" is the React key, so keep it unique.
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
  {
    title: 'How to Setup Spring Boot with PostgreSQL',
    tag: 'Tutorial',
    date: 'Aug 10, 2025',
    icon: 'fa-solid fa-leaf',
    theme: 'tech',
    url: '#',
  },
  {
    title: 'Docker & Docker Compose Complete Guide',
    tag: 'DevOps',
    date: 'Aug 5, 2025',
    icon: 'fa-brands fa-docker',
    theme: 'academy',
    url: '#',
  },
  {
    title: 'Top 10 VS Code Extensions for Java Developers',
    tag: 'Tips',
    date: 'Aug 1, 2025',
    icon: 'fa-solid fa-code',
    theme: 'vlog',
    url: '#',
  },
  {
    title: 'A Day in My Life | Vlog',
    tag: 'Lifestyle',
    date: 'Jul 25, 2025',
    icon: 'fa-solid fa-mug-hot',
    theme: 'build',
    url: '#',
  },
]
