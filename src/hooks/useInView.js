import { useEffect, useRef, useState } from 'react'

// Replaces the IntersectionObserver code from the old script.js.
// Returns [ref, inView]. With once=true (default) it stays true after the first intersection.
export default function useInView({ threshold = 0, once = true } = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) observer.disconnect()
        }
      },
      { threshold },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, once])

  return [ref, inView]
}
