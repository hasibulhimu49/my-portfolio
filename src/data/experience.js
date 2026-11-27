// "Experience" section. Newest company first; roles inside a company are newest first.
// Optional role fields:
//   current   true for the role you hold now (adds the "Current" badge and a highlighted dot)
//   points    array of strings listing what you did there
// The newest role gets a "Promoted" badge when a company has more than one role.
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
