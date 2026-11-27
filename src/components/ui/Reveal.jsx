import useInView from '../../hooks/useInView'

/**
 * Fades its children up into view the first time they scroll on screen
 * (styles in styles/animations.css; disabled under prefers-reduced-motion).
 *
 * @param {object} props
 * @param {React.ElementType} [props.as='div'] element to render, e.g. 'section' or 'ul'
 */
export default function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const [ref, visible] = useInView({ threshold: 0.12 })
  const classes = ['reveal', visible && 'is-visible', className].filter(Boolean).join(' ')
  return (
    <Tag ref={ref} className={classes} {...rest}>
      {children}
    </Tag>
  )
}
