import { profile, socials } from '../data'
import { ExternalLink, Reveal, SocialIcons } from './ui'

export default function Contact() {
  return (
    <section id="contact" className="contact-band">
      <Reveal className="container contact-inner">
        <div className="contact-text">
          <p className="contact-eyebrow">Open to opportunities</p>
          <h2>
            Have a project, collaboration or idea? <span className="gradient-text">Let&apos;s talk.</span>
          </h2>
          <p>
            Whether it&apos;s a job opportunity, freelance work, a course partnership or just a tech chat, my inbox is
            always open.
          </p>
        </div>

        <div className="contact-actions">
          <a href={`mailto:${profile.email}`} className="btn btn-primary">
            <i className="fa-regular fa-envelope"></i> {profile.email}
          </a>
          <ExternalLink href={profile.resumeUrl} className="btn btn-outline">
            <i className="fa-solid fa-download"></i> Download Resume
          </ExternalLink>
          <SocialIcons items={socials} className="contact-socials" />
        </div>
      </Reveal>
    </section>
  )
}
