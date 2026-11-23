import { about, profile } from '../data'
import { ExternalLink, Reveal } from './ui'

const details = [
  { icon: 'fa-solid fa-location-dot', label: 'Location', value: profile.location },
  { icon: 'fa-regular fa-envelope', label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: 'fa-regular fa-calendar', label: 'Joined', value: profile.joined },
  profile.website && {
    icon: 'fa-solid fa-globe',
    label: 'Website',
    value: profile.website,
    href: `https://${profile.website}`,
  },
].filter(Boolean)

export default function About() {
  return (
    <section id="about" className="section section-light">
      <Reveal className="container about-grid">
        <div className="about-text">
          <h2 className="section-title underline">About Me</h2>
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <p className="signature">
            {profile.firstName} {profile.lastName}
          </p>
        </div>

        <div className="about-details">
          <ul>
            {details.map(({ icon, label, value, href }) => (
              <li key={label}>
                <i className={icon}></i>
                <div>
                  <strong>{label}</strong>
                  {href ? <ExternalLink href={href}>{value}</ExternalLink> : <span>{value}</span>}
                </div>
              </li>
            ))}
          </ul>
          <ExternalLink href={profile.resumeUrl} className="btn btn-ghost">
            <i className="fa-solid fa-download"></i> Download Resume
          </ExternalLink>
        </div>

        <blockquote className="quote-card">
          <i className="fa-solid fa-quote-left"></i>
          <p>{about.quote.text}</p>
          <cite>— {about.quote.author}</cite>
        </blockquote>
      </Reveal>
    </section>
  )
}
