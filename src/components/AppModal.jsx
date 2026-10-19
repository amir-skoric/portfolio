import { useEffect, useRef } from 'react'

// Pop-up that runs an app (a single html file) inside a frame.
// Desktop: the app sits in a phone shape, or in a browser window when frame="browser"
// (for apps made for big screens). Phone: the app fills the whole screen.
// background: the colour behind the app while it starts.
// Closes with the close button, the Esc key, or a click on the dark background.
export default function AppModal({ title, html, closeLabel, onClose, frame = 'phone', background }) {
  const dialog = useRef(null)

  useEffect(() => {
    const d = dialog.current
    d.showModal() // real pop-up: keeps keyboard focus inside, Esc closes it
    document.body.style.overflow = 'hidden' // the page behind doesn't scroll
    return () => { document.body.style.overflow = '' }
  }, [])

  // When you click inside the app, key presses go to the app, not the pop-up.
  // So we also listen for Esc inside the app (allowed, because it comes from our own page).
  const listenForEsc = (e) => {
    e.target.contentWindow?.addEventListener('keydown', (k) => {
      if (k.key === 'Escape') dialog.current?.close()
    })
  }

  return (
    <dialog
      ref={dialog}
      className="app-modal"
      aria-label={title}
      onClose={onClose}
      onClick={(e) => e.target === dialog.current && dialog.current.close()} // clicked the dark background
    >
      <div className={frame === 'browser' ? 'app-modal-browser' : 'app-modal-phone'}>
        {frame === 'browser' && (
          <div className="app-modal-bar" aria-hidden="true">
            <span /><span /><span />
            <p>{title}</p>
          </div>
        )}
        {/* srcDoc = the whole app, so no extra page or address is needed */}
        <iframe srcDoc={html} title={title} onLoad={listenForEsc} style={background ? { background } : undefined} />
      </div>
      <button type="button" className="app-modal-close btn alt" onClick={() => dialog.current.close()}>
        {closeLabel}
      </button>
    </dialog>
  )
}
