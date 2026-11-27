import { useEffect, useRef, useState } from 'react'

// Browsers without IntersectionObserver (or a non-browser env) just show everything,
// so content hidden by .reveal never gets stuck invisible.
const supported = typeof window !== 'undefined' && 'IntersectionObserver' in window

/**
 * Tracks whether an element is on screen.
 * Returns [ref, inView]: attach `ref` to the element.
 *
 * @param {object} [options]
 * @param {number} [options.threshold=0] fraction of the element that must be visible
 * @param {boolean} [options.once=true]  stay true after the first intersection (and stop observing)
 */
export default function useInView({ threshold = 0, once = true } = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(!supported)

  useEffect(() => {
    const el = ref.current
    if (!el || !supported) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setInView(false)
        }
      },
      { threshold },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, once])

  return [ref, inView]
}
