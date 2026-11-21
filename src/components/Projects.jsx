import { projects } from '../data'

export default function Projects() {
  return (
    <section id="project">
      <div className="section-header">
        <h2>Featured Projects</h2>
        <p>Some of my recent work and personal projects</p>
      </div>

      <div className="projects-grid">
        {projects.map(({ image, title, description, tech, links }, i) => (
          <div className="project-card" key={title}>
            <div className="project-image">
              <img src={image} alt={`Project ${i + 1}`} />
              <div className="project-overlay">
                <div className="project-links">
                  {links.map(({ href, title: linkTitle, label, external }) => (
                    <a key={href} href={href} target="_blank" rel="noreferrer" title={linkTitle}>
                      <i className={external ? 'fa-solid fa-external-link' : 'fa-brands fa-github'}></i>{' '}
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="project-info">
              <h3>{title}</h3>
              <p>{description}</p>
              <div className="project-tech">
                {tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
