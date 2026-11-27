import { useId } from 'react'
import { channels } from '../../data'
import { ExternalLink, Reveal, SectionHeader } from '../ui'
import './Channels.css'

const classNames = (...names) => names.filter(Boolean).join(' ')

// Channel profile picture: a photo, an icon on the channel's theme, or text initials.
function ChannelAvatar({ channel }) {
  const { avatarImg, avatarIcon, avatar, theme } = channel
  return (
    // Hidden from screen readers: the channel name is already announced by the card.
    <span className={classNames('channel-avatar', avatarIcon && theme && `theme-${theme}`)} aria-hidden="true">
      {avatarImg ? (
        <img src={avatarImg} alt="" width="40" height="40" loading="lazy" decoding="async" />
      ) : avatarIcon ? (
        <i className={avatarIcon}></i>
      ) : (
        avatar
      )}
    </span>
  )
}

function ChannelCard({ channel }) {
  const { name, category, topics, desc, handle, subscribers, cover, coverFit, icon, theme, url } = channel
  const titleId = useId()
  const descId = useId()
  const subsLabel = subscribers ? `${subscribers} subscribers` : handle

  return (
    // The whole card is one link: name it after the channel (not every line of text in it)
    // and keep the description available as a supplementary hint.
    <ExternalLink
      href={url}
      className="card channel-card"
      aria-labelledby={titleId}
      aria-describedby={desc ? descId : undefined}
    >
      <div
        className={classNames(
          'channel-banner',
          cover ? 'has-image' : theme && `theme-${theme}`,
          coverFit === 'contain' && 'fit-contain',
        )}
      >
        {/* Absolutely positioned and sized by CSS, so no intrinsic width/height is needed. */}
        {cover ? (
          <img src={cover} alt="" loading="lazy" decoding="async" />
        ) : (
          icon && <i className={icon} aria-hidden="true"></i>
        )}
        <span className="play-badge" aria-hidden="true">
          <i className="fa-solid fa-play"></i>
        </span>
      </div>
      <ChannelAvatar channel={channel} />
      <div className="channel-body">
        <h3 id={titleId}>{name}</h3>
        {category && <p className="channel-category">{category}</p>}
        {topics && <p className="channel-topics">{topics}</p>}
        {desc && (
          <p id={descId} className="channel-desc">
            {desc}
          </p>
        )}
        {subsLabel && (
          <p className="channel-subs">
            <i className="fa-solid fa-circle-play" aria-hidden="true"></i> {subsLabel}
          </p>
        )}
      </div>
    </ExternalLink>
  )
}

export default function Channels() {
  return (
    <section id="content" className="section section-white">
      <Reveal className="container">
        <SectionHeader
          title="My YouTube Channels"
          subtitle="Different topics, same goal — to share knowledge and create value."
        />
        <div className="channels-grid">
          {channels.map((channel) => (
            <ChannelCard key={channel.url} channel={channel} />
          ))}
        </div>
      </Reveal>
    </section>
  )
}
