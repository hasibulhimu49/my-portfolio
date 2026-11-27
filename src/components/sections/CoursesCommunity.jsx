import { communities, courses, profile } from '../../data'
import { ExternalLink, Reveal, SectionHeader } from '../ui'
import './CoursesCommunity.css'

function CourseCard({ title, platform, thumbIcon, thumbLabel, iconColor, rating, reviews, url }) {
  return (
    <article className="card course-card">
      <div className="course-thumb" aria-hidden="true">
        <i className={thumbIcon} style={{ color: iconColor }}></i>
        <span>{thumbLabel}</span>
      </div>
      <div className="course-body">
        <h3>{title}</h3>
        <p className="course-platform">
          <i className="fa-solid fa-graduation-cap" aria-hidden="true"></i> {platform}
        </p>
        <div className="course-footer">
          {rating ? (
            <span className="rating">
              <i className="fa-solid fa-star" aria-hidden="true"></i> {rating}
              {reviews ? ` (${reviews})` : null}
            </span>
          ) : (
            <span className="course-new">New</span>
          )}
          {/* Several buttons share the same text, so name each one after its course. */}
          <ExternalLink href={url} className="btn btn-primary btn-sm" aria-label={`View course: ${title}`}>
            View Course <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </ExternalLink>
        </div>
      </div>
    </article>
  )
}

function CommunityCard({ name, desc, icon, color, url }) {
  return (
    <ExternalLink href={url} className="card community-card">
      <span className="round-icon" style={{ background: color }} aria-hidden="true">
        <i className={icon}></i>
      </span>
      <h3>{name}</h3>
      <p>{desc}</p>
      <span className="join-link">
        Join Now <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
      </span>
    </ExternalLink>
  )
}

export default function CoursesCommunity() {
  return (
    <section className="section section-light">
      <Reveal className="container courses-community">
        {/* Two in-page anchors share this section: #courses (nav "Learn") and #community. */}
        <div id="courses">
          <SectionHeader title="Featured Courses" subtitle="Learn at your own pace with my premium courses." />
          {courses.length > 0 && (
            <div className="courses-grid">
              {courses.map((course) => (
                <CourseCard key={course.title} {...course} />
              ))}
            </div>
          )}
          {profile.learnSite && (
            <div className="courses-more">
              <ExternalLink href={profile.learnSite.url} className="btn btn-primary">
                Explore more on {profile.learnSite.name}{' '}
                <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
              </ExternalLink>
            </div>
          )}
        </div>

        {communities.length > 0 && (
          <div id="community">
            <SectionHeader
              title="Join My Community"
              subtitle="Be a part of something bigger. Let's learn, grow and build together."
            />
            <div className="community-grid">
              {communities.map((community) => (
                <CommunityCard key={community.name} {...community} />
              ))}
            </div>
          </div>
        )}
      </Reveal>
    </section>
  )
}
