# Mohammad Hasibul Hasan — Portfolio

Personal portfolio site for Mohammad Hasibul Hasan: Software Engineer, Educator and Content Creator. A single-page site
with sections for experience, services, projects, YouTube channels, courses and contact, plus a light/dark theme and a
responsive mobile layout.

## Tech stack

- [React 19](https://react.dev/) with [Vite 8](https://vite.dev/)
- Plain CSS (design tokens in `src/styles/tokens.css`, one stylesheet per component)
- ESLint (flat config) and Prettier

## Getting started

Requires Node.js 20 or newer.

```bash
npm install       # install dependencies
npm run dev       # start the dev server at http://localhost:5173
npm run build     # production build into dist/
npm run preview   # serve the production build locally
npm run lint      # run ESLint
npm run format    # format all files with Prettier (format:check to verify only)
```

## Project structure

```
public/                    Static files served as-is (icons, manifest, robots.txt)
  assets/images/           Site images (logo, banner, project and channel artwork)
src/
  main.jsx                 Entry point: mounts <App /> and loads global styles
  App.jsx                  Page layout: lists the sections in display order
  components/
    layout/                Navbar and Footer (component + CSS each)
    sections/              One component + CSS file per page section
    ui/                    Shared building blocks (Reveal, SectionHeader, ExternalLink, SocialIcons)
  data/                    All site content (text, links, numbers); index.js re-exports everything
  hooks/                   useActiveSection, useDismiss, useInView, useTheme
  styles/                  Global CSS: tokens, base, layout, components, animations (index.css imports them)
```

## Editing content

All text, links and numbers live in `src/data/`, so most updates never touch a component.

| File            | Contents                                          |
| --------------- | ------------------------------------------------- |
| `profile.js`    | Name, roles, banner, contact details, socials     |
| `about.js`      | About section paragraphs and quote                |
| `experience.js` | Companies and roles (newest first)                |
| `services.js`   | "What I Do" service cards and skills list         |
| `projects.js`   | Project cards (image, description, links)         |
| `channels.js`   | YouTube channels                                  |
| `content.js`    | Latest videos (newest first; the first 4 show)    |
| `learning.js`   | Courses and community                             |
| `navigation.js` | Navbar links (each `id` matches a section's `id`) |

Links set to `'#'` are placeholders and are marked with `TODO` comments; search for `TODO` to find them. Images go in
`public/assets/images/` and are referenced as `/assets/images/<file>`.

## Adding a section

1. Create `src/components/sections/MySection.jsx` and `MySection.css` (import the CSS from the component). Give the
   root element an `id`, e.g. `<section id="my-section">`.
2. Put its content in a file under `src/data/` and export it from `src/data/index.js`.
3. Render `<MySection />` in `src/App.jsx` at the desired position.
4. To show it in the navbar, add `{ id: 'my-section', label: 'My Section' }` to `src/data/navigation.js`.

## Deployment

`npm run build` outputs a fully static site to `dist/`. Deploy that folder to any static host (GitHub Pages, Netlify,
Vercel, Cloudflare Pages, etc.). No server or environment variables are required.
