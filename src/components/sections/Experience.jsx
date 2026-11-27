import { experience } from '../../data'
import { Reveal, SectionHeader } from '../ui'
import './Experience.css'

// One step on a company's role timeline. `isPromotion` marks the newest role
// when the person moved up from an earlier one at the same company.
function Role({ title, start, end, current, points, isPromotion }) {
  return (
    <li className={current ? 'is-current' : undefined}>
      <div className="exp-role-head">
        <h4>{title}</h4>
        {current && <span className="exp-badge">Current</span>}
        {isPromotion && (
          <span className="exp-badge exp-badge-promo">
            <i className="fa-solid fa-arrow-trend-up" aria-hidden="true"></i> Promoted
          </span>
        )}
      </div>
      <p className="exp-role-dates">
        {start} – {end}
      </p>
      {points?.length > 0 && (
        <ul className="exp-points">
          {points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      )}
    </li>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="section section-white">
      <Reveal className="container">
        <SectionHeader title="Experience" subtitle="Where I've been building software professionally." />

        <div className="exp-list">
          {experience
            .filter(({ roles }) => roles.length > 0)
            .map(({ company, logo, location, about, roles }) => {
              // Roles are newest first, so the overall span runs from the last role's start to the first role's end.
              const first = roles[roles.length - 1]
              const latest = roles[0]
              return (
                <article key={company} className="card exp-card">
                  <header className="exp-company">
                    <img
                      className="exp-logo"
                      src={logo}
                      alt={`${company} logo`}
                      width="56"
                      height="56"
                      loading="lazy"
                    />
                    <div>
                      <h3>{company}</h3>
                      <p>
                        <i className="fa-solid fa-location-dot" aria-hidden="true"></i> {location}
                        <span className="exp-dot" aria-hidden="true">
                          ·
                        </span>
                        {about}
                      </p>
                    </div>
                    <span className="exp-span">
                      {first.start} – {latest.end}
                    </span>
                  </header>

                  <ol className="exp-roles">
                    {roles.map((role, i) => (
                      <Role key={role.title} {...role} isPromotion={i === 0 && roles.length > 1} />
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
