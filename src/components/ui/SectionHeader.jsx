import ExternalLink from './ExternalLink'

/**
 * Section title row with an optional subtitle and a "see all" style link on the right.
 *
 * @param {object} props
 * @param {string} props.title
 * @param {string} [props.subtitle]
 * @param {string} [props.linkLabel] the link is only rendered when this is set
 * @param {string} [props.linkUrl='#']
 */
export default function SectionHeader({ title, subtitle, linkLabel, linkUrl = '#' }) {
  return (
    <div className="section-header">
      <div>
        <h2 className="section-title">{title}</h2>
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
      </div>
      {linkLabel && (
        <ExternalLink className="section-link" href={linkUrl}>
          {linkLabel} <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
        </ExternalLink>
      )}
    </div>
  )
}
