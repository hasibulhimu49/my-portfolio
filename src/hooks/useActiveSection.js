import { useEffect, useState } from 'react'

/**
 * Scroll spy: returns the id of the section currently in the middle of the viewport.
 * When several are there at once (e.g. Courses and Community side by side),
 * the one listed first in `ids` wins, so the highlight doesn't flicker.
 *
 * @param {string[]} ids section element ids, in page order. Pass a stable array
 *   (module constant or memoised): a new array each render re-creates the observer.
 */
export default function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const visible = new Set()
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visible.add(entry.target.id)
          else visible.delete(entry.target.id)
        })
        const first = ids.find((id) => visible.has(id))
        if (first) setActive(first)
      },
      // A thin band just above the middle of the viewport: a section is "active" while it crosses it.
      { rootMargin: '-45% 0px -50% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [ids])

  return active
}
