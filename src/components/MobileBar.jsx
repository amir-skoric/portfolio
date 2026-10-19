import { useEffect, useRef, useState } from 'react'
import { content } from '../data/content'

// Small pixel icons (drawn with squares, so they stay sharp)
const MenuIcon = () => (
  <svg className="icon" viewBox="0 0 16 16" shapeRendering="crispEdges" aria-hidden="true"><path d="M2 3h12v2H2zM2 7h12v2H2zM2 11h12v2H2z" /></svg>
)
const CloseIcon = () => (
  <svg className="icon" viewBox="0 0 16 16" shapeRendering="crispEdges" aria-hidden="true">
    <path d="M3 3h2v2H3zM5 5h2v2H5zM7 7h2v2H7zM9 5h2v2H9zM11 3h2v2h-2zM5 9h2v2H5zM3 11h2v2H3zM9 9h2v2H9zM11 11h2v2h-2z" />
  </svg>
)

// Phones and tablets only (on big screens the sidebar menu is always visible, so CSS hides this).
// A bar that sticks to the top: my name (back to the top) + a "Menu" button that opens the list of parts.
// "active" is the part you're reading right now; it's marked in the list.
export default function MobileBar({ pages, active, lang }) {
  const w = content.pages[lang]
  const [open, setOpen] = useState(false)
  const button = useRef(null)

  // Close the menu with Esc (focus goes back to the button) or by tapping anywhere outside the bar
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        button.current.focus()
      }
    }
    const onClick = (e) => {
      if (!e.target.closest('.mobile-bar')) setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('click', onClick)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('click', onClick)
    }
  }, [open])

  const toTop = (e) => {
    e.preventDefault()
    setOpen(false)
    window.scrollTo({ top: 0 })
  }

  return (
    <div className={`mobile-bar ${open ? 'open' : ''}`}>
      <div className="mobile-bar-row">
        <a href="#" className="mobile-name" onClick={toTop} aria-label={w.top}>Amir Skoric</a>
        <button
          ref={button}
          type="button"
          className="mobile-menu-btn"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          {open ? w.close : w.menu} {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
      <nav id="mobile-menu" className="mobile-menu" hidden={!open} aria-label={w.menu}>
        {pages.map((p) => (
          <a
            key={p.id}
            href={`#${p.id}`}
            className={active === p.id ? 'on' : ''}
            aria-current={active === p.id ? 'true' : undefined}
            onClick={() => setOpen(false)}
          >
            {p.title(lang)}
          </a>
        ))}
      </nav>
    </div>
  )
}
