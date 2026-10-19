import { useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { pick } from '../data/pick'
import { logos } from '../data/logos'

const SPEED = 30 // pixels per second (bigger = faster)

// A row of skill sections ("Frontend", "Backend & data", ...) that slides slowly to the left forever.
// You can also drag it with the mouse or a finger. Step by step:
// 1. The row is shown twice, one copy after the other, so it can loop without a jump.
// 2. "offset" says how far the row has moved. Every frame we move it a tiny bit to the left.
// 3. When one full copy has slid out, we jump back by exactly one copy (you can't see the jump).
// 4. While you drag, the row follows your mouse/finger instead, and moves on by itself when you let go.
export default function LogoCarousel({ groups, lang, label }) {
  const viewport = useRef(null)
  const track = useRef(null)

  useEffect(() => {
    const view = viewport.current
    const row = track.current
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let offset = 0
    let last = performance.now()
    let frame = 0
    let hovering = false
    let drag = null // { startX, startOffset } while dragging
    let visible = true

    const copyWidth = () => row.firstElementChild.offsetWidth // width of one copy (incl. its gap)
    const wrap = () => {
      const w = copyWidth()
      if (offset <= -w) offset += w
      if (offset > 0) offset -= w
    }
    const draw = () => { row.style.transform = `translate3d(${offset}px, 0, 0)` }

    const tick = (now) => {
      const seconds = Math.min(now - last, 100) / 1000 // never jump far after a pause
      last = now
      if (!drag && !hovering && !reduceMotion) offset -= SPEED * seconds
      wrap()
      draw()
      frame = visible ? requestAnimationFrame(tick) : 0
    }

    // Only animate while the carousel is on screen (saves battery / CPU)
    const seen = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting
      if (visible && !frame) { last = performance.now(); frame = requestAnimationFrame(tick) }
    })
    seen.observe(view)

    const down = (e) => {
      drag = { startX: e.clientX, startOffset: offset }
      view.setPointerCapture(e.pointerId)
      view.classList.add('dragging')
    }
    const move = (e) => {
      if (!drag) return
      offset = drag.startOffset + (e.clientX - drag.startX)
      wrap()
      draw()
    }
    const up = () => {
      drag = null
      view.classList.remove('dragging')
    }
    const enter = (e) => { if (e.pointerType === 'mouse') hovering = true }
    const leave = () => { hovering = false }
    // Keyboard: arrow keys move the row
    const key = (e) => {
      if (e.key === 'ArrowLeft') offset += 120
      else if (e.key === 'ArrowRight') offset -= 120
      else return
      e.preventDefault()
      wrap()
      draw()
    }

    view.addEventListener('pointerdown', down)
    view.addEventListener('pointermove', move)
    view.addEventListener('pointerup', up)
    view.addEventListener('pointercancel', up)
    view.addEventListener('pointerenter', enter)
    view.addEventListener('pointerleave', leave)
    view.addEventListener('keydown', key)
    return () => {
      cancelAnimationFrame(frame)
      seen.disconnect()
      view.removeEventListener('pointerdown', down)
      view.removeEventListener('pointermove', move)
      view.removeEventListener('pointerup', up)
      view.removeEventListener('pointercancel', up)
      view.removeEventListener('pointerenter', enter)
      view.removeEventListener('pointerleave', leave)
      view.removeEventListener('keydown', key)
    }
  }, [])

  return (
    <div ref={viewport} className="carousel" tabIndex={0} role="region" aria-label={label}>
      <div ref={track} className="carousel-track">
        {[0, 1].map((copy) => (
          <div key={copy} className="carousel-row" aria-hidden={copy === 1 ? true : undefined}>
            {groups.map((g) => (
              <section key={pick(g.title, 'en')} className="logo-group">
                <h4>{pick(g.title, lang)}</h4>
                {/* 2 rows in every card: columns = half the number of logos (rounded up) */}
                <ul className="logo-list" style={{ '--cols': Math.ceil(g.items.length / 2) }}>
                  {g.items.map((key) => (
                    <li key={key} className="carousel-item">
                      <span className="logo-tile" aria-hidden="true">
                        <FontAwesomeIcon icon={logos[key].icon} />
                      </span>
                      <span className="carousel-name">{pick(logos[key].name, lang)}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
