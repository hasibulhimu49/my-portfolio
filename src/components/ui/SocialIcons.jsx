import ExternalLink from './ExternalLink'

/**
 * Row of icon-only social links. Each link is named by its `label` for screen readers.
 *
 * @param {object} props
 * @param {{ label: string, icon: string, url: string }[]} props.items icon = Font Awesome classes
 * @param {string} [props.className] extra class for per-section styling
 */
export default function SocialIcons({ items, className = '' }) {
  return (
    <div className={`social-icons ${className}`.trim()}>
      {items.map(({ label, icon, url }) => (
        <ExternalLink key={label} href={url} aria-label={label} title={label}>
          <i className={icon} aria-hidden="true"></i>
        </ExternalLink>
      ))}
    </div>
  )
}
