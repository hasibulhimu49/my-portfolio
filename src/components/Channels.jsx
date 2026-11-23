import { channels } from '../data'
import { ExternalLink, Reveal, SectionHeader } from './ui'

export default function Channels() {
  return (
    <section id="content" className="section section-white">
      <Reveal className="container">
        <SectionHeader
          title="My YouTube Channels"
          subtitle="Different topics, same goal — to share knowledge and create value."
        />
        <div className="channels-grid">
          {channels.map((c, i) => (
            <ExternalLink key={`${c.name}-${i}`} href={c.url} className="card channel-card">
              <div
                className={`channel-banner ${c.cover ? 'has-image' : `theme-${c.theme}`} ${c.coverFit === 'contain' ? 'fit-contain' : ''}`}
              >
                {c.cover ? <img src={c.cover} alt="" loading="lazy" /> : <i className={c.icon}></i>}
                <span className="play-badge">
                  <i className="fa-solid fa-play"></i>
                </span>
              </div>
              <span className={`channel-avatar ${c.avatarIcon ? `theme-${c.theme}` : ''}`}>
                {c.avatarImg ? (
                  <img src={c.avatarImg} alt="" loading="lazy" />
                ) : c.avatarIcon ? (
                  <i className={c.avatarIcon}></i>
                ) : (
                  c.avatar
                )}
              </span>
              <div className="channel-body">
                <h3>{c.name}</h3>
                <p className="channel-category">{c.category}</p>
                <p className="channel-topics">{c.topics}</p>
                {c.desc && <p className="channel-desc">{c.desc}</p>}
                <p className="channel-subs">
                  <i className="fa-solid fa-circle-play"></i>{' '}
                  {c.subscribers ? `${c.subscribers} subscribers` : c.handle}
                </p>
              </div>
            </ExternalLink>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
