import { latestContent } from '../../data'
import { ExternalLink, Reveal, SectionHeader } from '../ui'
import './LatestContent.css'

// One row of four on desktop; older items stay in the data file but aren't shown.
const MAX_ITEMS = 4

function ContentCard({ title, tag, date, icon, theme, thumb, url }) {
  return (
    <ExternalLink href={url} className="card content-card">
      <div className={`content-thumb ${thumb ? 'has-image' : theme ? `theme-${theme}` : ''}`}>
        {thumb ? (
          // 1280x720 matches YouTube's maxresdefault thumbnails (and the 16:9 box).
          <img src={thumb} alt="" width="1280" height="720" loading="lazy" decoding="async" />
        ) : (
          icon && <i className={icon} aria-hidden="true"></i>
        )}
        <span className="content-play" aria-hidden="true">
          <i className="fa-solid fa-play"></i>
        </span>
      </div>
      <div className="content-body">
        <h3>{title}</h3>
        <p>
          {tag && <span className="tag">{tag}</span>}
          {date && <time>{date}</time>}
        </p>
      </div>
    </ExternalLink>
  )
}

export default function LatestContent() {
  if (latestContent.length === 0) return null
  return (
    <section id="latest" className="section section-white">
      <Reveal className="container">
        <SectionHeader title="Latest Content" subtitle="Fresh tutorials, courses and stories from my channels." />
        <div className="content-grid">
          {/* Keyed by title: placeholder items share the '#' url. */}
          {latestContent.slice(0, MAX_ITEMS).map((item) => (
            <ContentCard key={item.title} {...item} />
          ))}
        </div>
      </Reveal>
    </section>
  )
}
