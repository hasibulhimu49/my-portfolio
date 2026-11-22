import { communities, courses } from '../data'
import { ExternalLink, Reveal, SectionHeader } from './ui'

export default function CoursesCommunity() {
  return (
    <section className="section section-light">
      <Reveal className="container courses-community">
        <div id="courses">
          <SectionHeader title="Featured Courses" subtitle="Learn at your own pace with my premium courses." />
          <div className="courses-grid">
            {courses.map((c) => (
              <article key={c.title} className="card course-card">
                <div className="course-thumb">
                  <i className={c.thumbIcon} style={{ color: c.iconColor }}></i>
                  <span>{c.thumbLabel}</span>
                </div>
                <div className="course-body">
                  <h3>{c.title}</h3>
                  <p className="course-platform">
                    <i className="fa-solid fa-graduation-cap"></i> {c.platform}
                  </p>
                  <div className="course-footer">
                    {c.rating ? (
                      <span className="rating">
                        <i className="fa-solid fa-star"></i> {c.rating} ({c.reviews})
                      </span>
                    ) : (
                      <span className="course-new">New</span>
                    )}
                    <ExternalLink href={c.url} className="btn btn-primary btn-sm">
                      View Course <i className="fa-solid fa-arrow-right"></i>
                    </ExternalLink>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {communities.length > 0 && (
          <div id="community">
            <SectionHeader
              title="Join My Community"
              subtitle="Be a part of something bigger. Let's learn, grow and build together."
            />
            <div className="community-grid">
              {communities.map(({ name, desc, icon, color, url }) => (
                <ExternalLink key={name} href={url} className="card community-card">
                  <span className="round-icon" style={{ background: color }}>
                    <i className={icon}></i>
                  </span>
                  <h3>{name}</h3>
                  <p>{desc}</p>
                  <span className="join-link">
                    Join Now <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </ExternalLink>
              ))}
            </div>
          </div>
        )}
      </Reveal>
    </section>
  )
}
