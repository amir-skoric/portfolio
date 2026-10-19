import { useEffect, useRef, useState } from 'react'
import { content } from '../data/content'
import { cv } from '../data/cv'
import { playerText } from '../data/music'
import person from '../assets/person.jpg'
import LanguageToggle from './LanguageToggle'
import ChiptunePlayer from './ChiptunePlayer'

// The left column. On big screens it stays in place while the right side scrolls.
// "active" is the part you are looking at right now; it gets the long red line in the menu.
export default function Sidebar({ pages, active, lang, setLang }) {
  const h = content.hero
  const t = h[lang]
  const side = useRef(null)

  // When the sidebar is taller than the screen (small laptops, or after "Read more"), it scrolls
  // along with the page until its bottom reaches the bottom of the screen, and then stays there.
  // So nothing is cut off, and the menu and player stay in view. (--side-top is used in layout.css)
  useEffect(() => {
    const el = side.current
    const update = () => el.style.setProperty('--side-top', `${Math.min(0, window.innerHeight - el.offsetHeight)}px`)
    const watch = new ResizeObserver(update)
    watch.observe(el)
    window.addEventListener('resize', update)
    return () => {
      watch.disconnect()
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <header className="side" ref={side}>
      {/* language switch at the very top, above the photo */}
      <div className="side-lang"><LanguageToggle lang={lang} setLang={setLang} /></div>
      <div className="side-me">
        <img src={person} alt="Amir Skoric" className="side-photo" width="104" height="104" />
      </div>
      <h1 className="side-name">{h.name}</h1>
      <p className="side-role">{t.role}</p>
      <p className="side-intro">{t.intro}</p>
      <a className="btn alt small side-cv" href={cv[lang].file} download={cv[lang].name}>{cv[lang].label}</a>

      <SideAbout lang={lang} />

      <nav className="side-nav" aria-label={content.pages[lang].menu}>
        {pages.map((p) => (
          <a key={p.id} href={`#${p.id}`} className={active === p.id ? 'on' : ''} aria-current={active === p.id ? 'true' : undefined}>
            {p.title(lang)}
          </a>
        ))}
      </nav>

      {/* my own chiptune: one short line that says what the player is, right on top of it */}
      <div className="side-player">
        <p className="side-music">{playerText[lang].short}</p>
        <ChiptunePlayer lang={lang} />
      </div>

      <div className="side-foot">
        <a href="https://github.com/amir-skoric/" target="_blank" rel="noreferrer">GitHub ↗</a>
        <a href="https://www.linkedin.com/in/amir-skoric-926119162/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
      </div>
    </header>
  )
}

// "About me": the heading and "Read more"; the whole text (plus the quick facts) opens below it.
function SideAbout({ lang }) {
  const t = content.about[lang]
  const [open, setOpen] = useState(false)
  return (
    <section className="side-about" id="about" aria-labelledby="about-title">
      <h2 id="about-title" className="side-about-title">{t.title}</h2>
      <div id="about-more" className="side-about-more" hidden={!open}>
        {t.paragraphs.map((p) => <p key={p}>{p}</p>)}
        <dl className="stats">
          {t.stats.map(([k, v]) => (
            <div key={k} className="stat"><dt>{k}</dt><dd>{v}</dd></div>
          ))}
        </dl>
      </div>
      <button type="button" className="more-toggle" aria-expanded={open} aria-controls="about-more" onClick={() => setOpen(!open)}>
        {open ? t.less : t.more}
        <span className="more-arrow" aria-hidden="true" />
      </button>
    </section>
  )
}
