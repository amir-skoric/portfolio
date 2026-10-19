import { useEffect, useRef, useState } from 'react'
import { ChevronIcon } from './Icons'

const SWIPE = 40 // how far (px) you must swipe before it changes screen

// Pop-up that shows design screens (or screenshots) big, one at a time.
// wide: for wide desktop screenshots instead of tall phone screens.
// Change screen with the arrows, the ← → keys, or by swiping/dragging the picture.
// Closes with the close button, Esc, or a click on the dark background.
export default function ScreenZoom({ screens, labels, t, onClose, wide = false }) {
  const dialog = useRef(null)
  const dragStart = useRef(null)
  const [current, setCurrent] = useState(0)
  const go = (step) => setCurrent((c) => (c + step + screens.length) % screens.length)

  useEffect(() => {
    dialog.current.showModal()
    document.body.style.overflow = 'hidden' // the page behind doesn't scroll
    return () => { document.body.style.overflow = '' }
  }, [])

  const keys = (e) => {
    if (e.key === 'ArrowLeft') go(-1)
    if (e.key === 'ArrowRight') go(1)
  }
  const up = (e) => {
    if (dragStart.current === null) return
    const moved = e.clientX - dragStart.current
    dragStart.current = null
    if (moved <= -SWIPE) go(1)
    else if (moved >= SWIPE) go(-1)
  }

  return (
    <dialog
      ref={dialog}
      className={wide ? 'zoom wide' : 'zoom'}
      aria-label={labels[current]}
      onClose={onClose}
      onKeyDown={keys}
      onClick={(e) => e.target === dialog.current && dialog.current.close()} // clicked the dark background
    >
      <div className="zoom-stage">
        <button type="button" className="slide-arrow prev" onClick={() => go(-1)} aria-label={t.prev}><ChevronIcon /></button>
        <img
          src={screens[current]}
          alt={labels[current]}
          onPointerDown={(e) => { dragStart.current = e.clientX }}
          onPointerUp={up}
          onDragStart={(e) => e.preventDefault()}
        />
        <button type="button" className="slide-arrow next" onClick={() => go(1)} aria-label={t.next}><ChevronIcon /></button>
      </div>
      <div className="zoom-foot">
        <span className="zoom-count">{current + 1} / {screens.length}</span>
        <button type="button" className="btn alt small" onClick={() => dialog.current.close()}>{t.close}</button>
      </div>
    </dialog>
  )
}
