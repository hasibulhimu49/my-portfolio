import { useEffect, useEffectEvent } from 'react'

/**
 * Closes a popup (dropdown, mobile menu) when the user presses Escape or
 * presses the pointer anywhere outside `ref`. Listeners only exist while `open`.
 *
 * @param {React.RefObject<HTMLElement>} ref  element that counts as "inside"
 * @param {boolean} open                      whether the popup is currently open
 * @param {(event: Event) => void} onDismiss  called with the triggering event
 */
export default function useDismiss(ref, open, onDismiss) {
  // Effect event: always sees the latest onDismiss without re-subscribing every render.
  const dismiss = useEffectEvent(onDismiss)

  useEffect(() => {
    if (!open) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') dismiss(e)
    }
    // pointerdown (not click) so touch and mouse behave the same and the popup
    // closes before any element underneath reacts.
    const onPointerDown = (e) => {
      if (!ref.current?.contains(e.target)) dismiss(e)
    }
    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [ref, open])
}
