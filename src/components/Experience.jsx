import { experience } from '../data'
import { Reveal, SectionHeader } from './ui'

export default function Experience() {
  return (
    <section id="experience" className="section section-white">
      <Reveal className="container">
        <SectionHeader title="Experience" subtitle="Where I've been building software professionally." />

        <div className="exp-list">
          {experience.map(({ company, logo, location, about, roles }) => {
            const first = roles[roles.length - 1]
            const latest = roles[0]
            return (
              <article key={company} className="card exp-card">
                <header className="exp-company">
                  <img className="exp-logo" src={logo} alt={`${company} logo`} width="56" height="56" />
                  <div>
                    <h3>{company}</h3>
                    <p>
                      <i className="fa-solid fa-location-dot"></i> {location}
                      <span className="exp-dot">·</span>
                      {about}
                    </p>
                  </div>
                  <span className="exp-span">
                    {first.start} – {latest.end}
                  </span>
                </header>

                <ol className="exp-roles">
                  {roles.map((r, i) => (
                    <li key={r.title} className={r.current ? 'is-current' : undefined}>
                      <div className="exp-role-head">
                        <h4>{r.title}</h4>
                        {r.current && <span className="exp-badge">Current</span>}
                        {i === 0 && roles.length > 1 && (
                          <span className="exp-badge exp-badge-promo">
                            <i className="fa-solid fa-arrow-trend-up"></i> Promoted
                          </span>
                        )}
                      </div>
                      <time>
                        {r.start} – {r.end}
                      </time>
                      {r.points && (
                        <ul className="exp-points">
                          {r.points.map((p) => (
                            <li key={p}>{p}</li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ol>
              </article>
            )
          })}
        </div>
      </Reveal>
    </section>
  )
}
