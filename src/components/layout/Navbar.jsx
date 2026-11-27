import { useEffect, useRef, useState } from 'react'
import { navLinks, profile, socials } from '../../data'
import useActiveSection from '../../hooks/useActiveSection'
import useDismiss from '../../hooks/useDismiss'
import useTheme from '../../hooks/useTheme'
import { ExternalLink } from '../ui'
import './Navbar.css'

// 'home' is watched too so nothing is highlighted while you're at the top.
// Defined at module level so the array is stable across renders (useActiveSection depends on it).
const sectionIds = ['home', ...navLinks.map((l) => l.id)]

const fullName = `${profile.firstName} ${profile.lastName}`

const themeMeta = {
  light: { icon: 'fa-solid fa-sun', label: 'Light' },
  dark: { icon: 'fa-solid fa-moon', label: 'Dark' },
  system: { icon: 'fa-solid fa-desktop', label: 'System' },
}

export default function Navbar() {
  const active = useActiveSection(sectionIds)
  const { preference, next, cycle } = useTheme()
  const theme = themeMeta[preference]
  const [menuOpen, setMenuOpen] = useState(false)
  const [socialsOpen, setSocialsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const headerRef = useRef(null)
  const menuButtonRef = useRef(null)
  const socialsRef = useRef(null)
  const socialsButtonRef = useRef(null)

  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Escape returns focus to the button that opened the popup, so keyboard users aren't lost.
  useDismiss(headerRef, menuOpen, (e) => {
    setMenuOpen(false)
    if (e.type === 'keydown') menuButtonRef.current?.focus()
  })
  useDismiss(socialsRef, socialsOpen, (e) => {
    setSocialsOpen(false)
    if (e.type === 'keydown') socialsButtonRef.current?.focus()
  })

  // Close the socials dropdown when keyboard focus tabs out of it.
  const onSocialsBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) setSocialsOpen(false)
  }

  return (
    <header ref={headerRef} className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container navbar-inner">
        {/* The visible name is hidden on narrow screens, so the link gets its own label. */}
        <a href="#home" className="brand" aria-label={`${fullName}, home`} onClick={closeMenu}>
          <img className="brand-logo" src="/assets/images/logo.png" alt="" width="240" height="123" />
          <span className="brand-name">{fullName}</span>
        </a>

        <nav id="primary-nav" className={`nav-links ${menuOpen ? 'is-open' : ''}`} aria-label="Main">
          {navLinks.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? 'is-active' : undefined}
              aria-current={active === id ? 'location' : undefined}
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <div className="socials-dropdown" ref={socialsRef} onBlur={onSocialsBlur}>
            <button
              ref={socialsButtonRef}
              type="button"
              className="btn-pill"
              aria-expanded={socialsOpen}
              aria-controls="socials-menu"
              onClick={() => setSocialsOpen((o) => !o)}
            >
              <i className="fa-solid fa-magnifying-glass" aria-hidden="true"></i> Socials{' '}
              <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </button>
            {/* Plain disclosure of links (not role="menu", which would require arrow-key handling). */}
            <div id="socials-menu" className="socials-menu" hidden={!socialsOpen}>
              {socials.map(({ label, icon, url }) => (
                <ExternalLink key={label} href={url}>
                  <i className={icon} aria-hidden="true"></i> {label}
                </ExternalLink>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="theme-toggle"
            onClick={cycle}
            aria-label={`Theme: ${theme.label}. Switch to ${themeMeta[next].label}.`}
            title={`Theme: ${theme.label}`}
          >
            <i className={theme.icon} aria-hidden="true"></i>
          </button>

          <button
            ref={menuButtonRef}
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="primary-nav"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'}`} aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </header>
  )
}
