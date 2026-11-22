import { useEffect, useState } from 'react'

// Theme preference: 'light' | 'dark' | 'system'. 'system' follows the OS setting
// and updates live if it changes. The choice is remembered in localStorage.
// index.html applies the saved theme before React loads so there's no flash.
const STORAGE_KEY = 'theme'
const ORDER = ['light', 'dark', 'system']
const media = window.matchMedia('(prefers-color-scheme: dark)')

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

  const cycle = () => setPreference((p) => ORDER[(ORDER.indexOf(p) + 1) % ORDER.length])

  return { preference, cycle }
}
