import { useEffect, useRef, useState } from 'react'
import { navLinks, profile, socials } from '../data'
import useActiveSection from '../hooks/useActiveSection'
import useTheme from '../hooks/useTheme'
import { ExternalLink } from './ui'

// 'home' is watched too so nothing is highlighted while you're at the top.
const sectionIds = ['home', ...navLinks.map((l) => l.id)]

const themeMeta = {
  light: { icon: 'fa-solid fa-sun', label: 'Light' },
  dark: { icon: 'fa-solid fa-moon', label: 'Dark' },
  system: { icon: 'fa-solid fa-desktop', label: 'System' },
}

export default function Navbar() {
  const active = useActiveSection(sectionIds)
  const { preference, cycle } = useTheme()
  const theme = themeMeta[preference]
  const [menuOpen, setMenuOpen] = useState(false)
  const [socialsOpen, setSocialsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const socialsRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!socialsOpen) return
    const close = (e) => {
      if (e.type === 'keydown' ? e.key === 'Escape' : !socialsRef.current?.contains(e.target)) {
        setSocialsOpen(false)
      }
    }
    document.addEventListener('mousedown', close)
    document.addEventListener('keydown', close)
    return () => {
      document.removeEventListener('mousedown', close)
      document.removeEventListener('keydown', close)
    }
  }, [socialsOpen])

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a href="#home" className="brand" onClick={() => setMenuOpen(false)}>
          <img className="brand-logo" src="/assets/images/logo.png" alt="MH logo" width="372" height="195" />
          <span className="brand-name">
            {profile.firstName} {profile.lastName}
          </span>
        </a>

        <nav className={`nav-links ${menuOpen ? 'is-open' : ''}`} aria-label="Main">
          {navLinks.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? 'is-active' : undefined}
              aria-current={active === id ? 'true' : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <div className="socials-dropdown" ref={socialsRef}>
            <button
              type="button"
              className="btn-pill"
              aria-expanded={socialsOpen}
              onClick={() => setSocialsOpen((o) => !o)}
            >
              <i className="fa-solid fa-magnifying-glass"></i> Socials{' '}
              <i className="fa-solid fa-arrow-right"></i>
            </button>
            {socialsOpen && (
              <div className="socials-menu" role="menu">
                {socials.map(({ label, icon, url }) => (
                  <ExternalLink key={label} href={url} role="menuitem">
                    <i className={icon}></i> {label}
                  </ExternalLink>
                ))}
              </div>
            )}
          </div>

          <button
            type="button"
            className="theme-toggle"
            onClick={cycle}
            aria-label={`Theme: ${theme.label}. Click to change.`}
            title={`Theme: ${theme.label}`}
          >
            <i className={theme.icon}></i>
          </button>

          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>
    </header>
  )
}
