import { projects } from '../data'
import { ExternalLink, Reveal, SectionHeader } from './ui'

export default function Projects() {
  return (
    <section id="projects" className="section section-light">
      <Reveal className="container">
        <SectionHeader
          title="Featured Projects"
          subtitle="Things I've built — from secure Spring Boot APIs to full-stack products."
          linkLabel="View GitHub"
          linkUrl="https://github.com/hasibulhimu49"
        />
        <div className="projects-grid">
          {projects.map(({ image, title, description, tech, links }) => (
            <article key={title} className="card project-card">
              <div className="project-thumb">
                {image ? (
                  <img src={image} alt="" loading="lazy" />
                ) : (
                  <div className="thumb-placeholder theme-tech">
                    <i className="fa-solid fa-server"></i>
                  </div>
                )}
              </div>
              <div className="project-body">
                <h3>{title}</h3>
                <p>{description}</p>
                <ul className="tags">
                  {tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <div className="project-links">
                  {links.map(({ label, url, icon }) => (
                    <ExternalLink key={url} href={url}>
                      <i className={icon}></i> {label}
                    </ExternalLink>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
