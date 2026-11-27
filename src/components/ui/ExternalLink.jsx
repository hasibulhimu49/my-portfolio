/**
 * Link that opens http(s) URLs in a new tab; in-page anchors ('#about') and
 * mailto:/tel: links stay in the same tab. Extra props (className, aria-*) pass through.
 */
export default function ExternalLink({ href, children, ...rest }) {
  const isExternal = /^https?:\/\//.test(href)
  // noreferrer also implies noopener: the new tab can't reach back via window.opener.
  const newTab = isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {}
  return (
    <a href={href} {...newTab} {...rest}>
      {children}
    </a>
  )
}
