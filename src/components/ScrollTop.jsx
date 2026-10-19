import { useEffect, useState } from 'react'

// Small "back to top" button. Only shows after you scroll down a bit.
// It just scrolls up (it doesn't change the address, so you stay on the same page).
export default function ScrollTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      type="button"
      className={`btn alt small to-top ${show ? 'show' : ''}`}
      aria-hidden={!show}
      tabIndex={show ? 0 : -1}
      onClick={() => window.scrollTo({ top: 0 })}
    >
      Top
    </button>
  )
}
