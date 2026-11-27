import { useEffect, useState } from 'react'

// Theme preference: 'light' | 'dark' | 'system'. 'system' follows the OS setting
// and updates live if it changes. The choice is remembered in localStorage.
// index.html applies the saved theme before React loads so there's no flash:
// keep STORAGE_KEY and the light/dark resolution in sync with that inline script.
// Use this hook in one component only (the Navbar); separate instances don't share state.
const STORAGE_KEY = 'theme'
const ORDER = ['light', 'dark', 'system']
const media = window.matchMedia('(prefers-color-scheme: dark)')

const nextOf = (preference) => ORDER[(ORDER.indexOf(preference) + 1) % ORDER.length]

function readPreference() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (ORDER.includes(saved)) return saved
  } catch {
    // storage blocked (private mode etc.): fall back to system
  }
  return 'system'
}

function apply(preference) {
  const resolved = preference === 'system' ? (media.matches ? 'dark' : 'light') : preference
  document.documentElement.dataset.theme = resolved
}

/** @returns {{ preference: string, next: string, cycle: () => void }} */
export default function useTheme() {
  const [preference, setPreference] = useState(readPreference)

  useEffect(() => {
    apply(preference)
    try {
      localStorage.setItem(STORAGE_KEY, preference)
    } catch {
      // ignore: the theme still applies for this visit
    }
    if (preference !== 'system') return
    const onChange = () => apply('system')
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [preference])

  const cycle = () => setPreference(nextOf)

  return { preference, next: nextOf(preference), cycle }
}
