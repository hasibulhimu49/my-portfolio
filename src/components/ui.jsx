import useInView from '../hooks/useInView'

// Fades its children up into view the first time they scroll on screen.
export function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const [ref, visible] = useInView({ threshold: 0.12 })
  return (
    <Tag ref={ref} className={`reveal ${visible ? 'is-visible' : ''} ${className}`} {...rest}>
      {children}
    </Tag>
  )
}

export function SectionHeader({ title, subtitle, linkLabel, linkUrl = '#' }) {
  return (
    <div className="section-header">
      <div>
        <h2 className="section-title">{title}</h2>
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
      </div>
      {linkLabel && (
        <a className="section-link" href={linkUrl}>
          {linkLabel} <i className="fa-solid fa-arrow-right"></i>
        </a>
      )}
    </div>
  )
}

export function ExternalLink({ href, children, ...rest }) {
  const isExternal = /^https?:\/\//.test(href)
  return (
    <a href={href} {...(isExternal ? { target: '_blank', rel: 'noreferrer' } : {})} {...rest}>
      {children}
    </a>
  )
}

export function SocialIcons({ items, className = '' }) {
  return (
    <div className={`social-icons ${className}`}>
      {items.map(({ label, icon, url }) => (
        <ExternalLink key={label} href={url} aria-label={label} title={label}>
          <i className={icon}></i>
        </ExternalLink>
      ))}
    </div>
  )
}
