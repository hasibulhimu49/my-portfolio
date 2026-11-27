import { projects, projectsGithubUrl } from '../../data'
import { ExternalLink, Reveal, SectionHeader } from '../ui'
import './Projects.css'

// Screenshot, or an icon tile for projects without one (e.g. backend-only APIs).
function ProjectThumb({ image }) {
  return (
    <div className="project-thumb">
      {image ? (
        // Decorative: the card title already names the project. The 16:9 size matches the thumb box (object-fit crops).
        <img src={image} alt="" width="960" height="540" loading="lazy" />
      ) : (
        <div className="thumb-placeholder theme-tech">
          <i className="fa-solid fa-server" aria-hidden="true"></i>
        </div>
      )}
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section section-light">
      <Reveal className="container">
        <SectionHeader
          title="Featured Projects"
          subtitle="Things I've built — from secure Spring Boot APIs to full-stack products."
          linkLabel="View GitHub"
          linkUrl={projectsGithubUrl}
        />
        <div className="projects-grid">
          {projects.map(({ image, title, description, tech, links }) => (
            <article key={title} className="card project-card">
              <ProjectThumb image={image} />
              <div className="project-body">
                <h3>{title}</h3>
                <p>{description}</p>
                {tech.length > 0 && (
                  <ul className="tags">
                    {tech.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                )}
                {links.length > 0 && (
                  <div className="project-links">
                    {links.map(({ label, url, icon }) => (
                      // Every card has "Backend"/"Frontend" links, so the accessible name adds the project title.
                      <ExternalLink key={url} href={url} aria-label={`${label}: ${title}`}>
                        <i className={icon} aria-hidden="true"></i> {label}
                      </ExternalLink>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
