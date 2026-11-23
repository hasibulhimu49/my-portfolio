import { channels, navLinks, profile, socials } from '../data'
import { ExternalLink, SocialIcons } from './ui'

const fullName = `${profile.firstName} ${profile.lastName}`

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-about">
          <a href="#home" className="footer-brand">
            <img className="brand-logo" src="/assets/images/logo.png" alt="MH logo" width="372" height="195" />
            <span>{fullName}</span>
          </a>
          <p className="footer-roles">{profile.roles.join(' · ')}</p>
          <p className="footer-bio">
            Building digital solutions, teaching what I love, and creating content that helps others grow.
          </p>
          <SocialIcons items={socials} className="footer-socials" />
        </div>

        <nav className="footer-col" aria-label="Footer">
          <h4>Quick Links</h4>
          <ul>
            {navLinks.map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-col">
          <h4>YouTube Channels</h4>
          <ul>
            {channels.map(({ name, handle, url }) => (
              <li key={url}>
                <ExternalLink href={url}>
                  <i className="fa-brands fa-youtube"></i> {name}
                </ExternalLink>
                <span className="footer-handle">{handle}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Get in Touch</h4>
          <ul className="footer-contact">
            <li>
              <i className="fa-regular fa-envelope"></i>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <i className="fa-solid fa-location-dot"></i>
              <span>{profile.location}</span>
            </li>
            {profile.website && (
              <li>
                <i className="fa-solid fa-globe"></i>
                <ExternalLink href={`https://${profile.website}`}>{profile.website}</ExternalLink>
              </li>
            )}
          </ul>
          <ExternalLink href={profile.resumeUrl} className="btn btn-outline btn-sm footer-resume">
            <i className="fa-solid fa-download"></i> Download Resume
          </ExternalLink>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>
          © {new Date().getFullYear()} {fullName}. All rights reserved.
        </p>
        <p className="footer-motto">Build · Learn · Create · Impact</p>
        <a href="#home" className="back-to-top" aria-label="Back to top">
          <i className="fa-solid fa-arrow-up"></i>
        </a>
      </div>
    </footer>
  )
}
