import { useEffect, useRef } from 'react'
import { playerText } from '../data/music'
import { usePlayer } from '../music/PlayerContext'

const BARS = 6 // bars in the little level meter

// 83000 ms -> "1:23"
const clock = (ms) => `${Math.floor(ms / 60000)}:${String(Math.floor(ms / 1000) % 60).padStart(2, '0')}`

// Smooth icons for the buttons (simple shapes; the outlines use the button colour)
const speaker = <path d="M2 6h3l4-3v10l-4-3H2z" />
const icons = {
  play: <path d="M5 2.5l9 5.5-9 5.5z" />,
  pause: <path d="M4 3h3v10H4zM9 3h3v10H9z" />,
  prev: <path d="M3 3h2v10H3zM14 3v10L6 8z" />,
  next: <path d="M11 3h2v10h-2zM2 3v10l8-5z" />,
  sound: <>{speaker}<path d="M11.5 5.5a3.5 3.5 0 0 1 0 5M13.5 3.5a6.4 6.4 0 0 1 0 9" fill="none" stroke="currentColor" strokeWidth="1.5" /></>,
  mute: <>{speaker}<path d="M11 6l4 4M15 6l-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" /></>,
  close: <path d="M4 4l8 8M12 4l-8 8" fill="none" stroke="currentColor" strokeWidth="1.5" />,
}
const Icon = ({ name }) => (
  <svg className="icon" viewBox="0 0 16 16" aria-hidden="true">{icons[name]}</svg>
)

// The chiptune player you see. Everything it shows comes from the player "brain" (music/PlayerContext.jsx).
// - Its home is the sidebar.
// - After you press play it follows you: when the sidebar player is out of view, a copy floats at the
//   bottom of the screen ("floating"), with an X in the corner that closes it and stops the music.
export default function ChiptunePlayer({ lang, floating = false }) {
  const t = playerText[lang]
  const p = usePlayer()
  const meter = useRef(null)
  const box = useRef(null)

  // The player in the sidebar tells the brain whether it can be seen right now.
  // (It counts as "seen" while at least a third of it is on screen.)
  const { setHomeVisible } = p
  useEffect(() => {
    if (floating) return
    const observer = new IntersectionObserver(([entry]) => setHomeVisible(entry.isIntersecting), { threshold: 0.33 })
    observer.observe(box.current)
    return () => observer.disconnect()
  }, [floating, setHomeVisible])

  // While playing: move the level meter (unless the visitor asked for less motion)
  useEffect(() => {
    const analyser = p.analyser()
    if (p.state !== 'playing' || !analyser) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const levels = new Uint8Array(analyser.frequencyBinCount)
    let frame
    const draw = () => {
      analyser.getByteFrequencyData(levels)
      meter.current?.querySelectorAll('i').forEach((bar, b) => {
        bar.style.transform = `scaleY(${Math.max(0.1, levels[b * 3 + 1] / 255)})`
      })
      frame = requestAnimationFrame(draw)
    }
    draw()
    return () => cancelAnimationFrame(frame)
  }, [p.state])

  const playing = p.state === 'playing'
  const label =
    p.state === 'loading' ? t.loading
    : p.state === 'error' ? t.error
    : p.state === 'idle' ? `${t.label} · ${t.by}`
    : `${t.label} · ${p.index + 1}/${p.count}`
  const shownVolume = p.muted ? 0 : p.volume
  const shownTime = Math.min(p.time, p.length)

  return (
    <div ref={box} className={`player ${p.state} ${floating ? 'floating' : ''}`} role="region" aria-label={t.label}>
      {floating && (
        <button type="button" className="player-close" onClick={p.close} aria-label={t.close} title={t.close}>
          <Icon name="close" />
        </button>
      )}
      {/* previous · play/pause · next, joined into one control (play in the middle) */}
      <div className="player-transport">
        <button type="button" className="player-skip" onClick={() => p.go(-1)} aria-label={t.prev}><Icon name="prev" /></button>
        <button type="button" className="player-play" onClick={() => p.toggle(floating)} aria-label={playing ? t.pause : t.play}>
          <Icon name={playing ? 'pause' : 'play'} />
        </button>
        <button type="button" className="player-skip" onClick={() => p.go(1)} aria-label={t.next}><Icon name="next" /></button>
      </div>

      <div className="player-info">
        <p className="player-label" aria-live="polite">{label}</p>
        <p className="player-title">{p.song.title}<span>.nsf</span></p>
      </div>

      <div className="player-meter" ref={meter} aria-hidden="true">
        {Array.from({ length: BARS }, (_, b) => <i key={b} />)}
      </div>

      <div className="player-seek">
        <span>{clock(p.time)}</span>
        <input
          type="range" className="player-range" aria-label={t.seek}
          min="0" max={Math.round(p.length) || 1} step="100" value={shownTime}
          disabled={!p.length}
          style={{ '--fill': `${p.length ? (shownTime / p.length) * 100 : 0}%` }}
          aria-valuetext={`${clock(p.time)} / ${clock(p.length)}`}
          onPointerDown={() => (p.seeking.current = true)}
          onPointerUp={() => (p.seeking.current = false)}
          onChange={(e) => p.seek(Number(e.target.value))}
        />
        <span>{p.length ? clock(p.length) : '-:--'}</span>
      </div>

      {/* mute + volume */}
      <div className="player-sound">
        <button type="button" onClick={p.toggleMute} aria-label={p.muted ? t.unmute : t.mute} aria-pressed={p.muted}>
          <Icon name={shownVolume === 0 ? 'mute' : 'sound'} />
        </button>
        <input
          type="range" className="player-range player-volume" aria-label={t.volume}
          min="0" max="1" step="0.01" value={shownVolume}
          style={{ '--fill': `${shownVolume * 100}%` }}
          aria-valuetext={`${Math.round(shownVolume * 100)}%`}
          onChange={(e) => p.changeVolume(Number(e.target.value))}
        />
      </div>
    </div>
  )
}
