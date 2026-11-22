import { latestContent } from '../data'
import { ExternalLink, Reveal, SectionHeader } from './ui'

export default function LatestContent() {
  if (latestContent.length === 0) return null
  return (
    <section id="latest" className="section section-white">
      <Reveal className="container">
        <SectionHeader
          title="Latest Content"
          subtitle="Fresh tutorials, courses and stories from my channels."
        />
        <div className="content-grid">
          {latestContent.slice(0, 4).map(({ title, tag, date, icon, theme, thumb, url }) => (
            <ExternalLink key={title} href={url} className="card content-card">
              <div className={`content-thumb ${thumb ? 'has-image' : `theme-${theme}`}`}>
                {thumb ? <img src={thumb} alt="" loading="lazy" /> : <i className={icon}></i>}
                <span className="content-play">
                  <i className="fa-solid fa-play"></i>
                </span>
              </div>
              <div className="content-body">
                <h3>{title}</h3>
                <p>
                  <span className="tag">{tag}</span>
                  {date && <time>{date}</time>}
                </p>
              </div>
            </ExternalLink>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
