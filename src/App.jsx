import { useEffect, useState } from 'react'
import { content } from './data/content'
import Sidebar from './components/Sidebar'
import Experience from './components/Experience'
import Education from './components/Education'
import Apps from './components/Apps'
import Contact from './components/Contact'
import ScrollTop from './components/ScrollTop'
import MobileBar from './components/MobileBar'
import ChiptunePlayer from './components/ChiptunePlayer'
import { usePlayer } from './music/PlayerContext'

// One long page: the sidebar on the left, all parts after each other on the right.
// "id" is the part's address: #projects, #experience, ... (the menu links jump there)
// ("About me" is in the sidebar itself, see Sidebar.jsx)
const pages = [
  { id: 'projects', Page: Apps, title: (l) => content.apps[l].title },
  { id: 'experience', Page: Experience, title: (l) => content.experience[l].title },
  { id: 'education', Page: Education, title: (l) => content.education[l].title },
  { id: 'contact', Page: Contact, title: (l) => content.contact[l].title },
]

// Start language: the visitor's last choice, else Danish for Danish browsers, else English.
function startLang() {
  try {
    const saved = localStorage.getItem('lang')
    if (saved === 'da' || saved === 'en') return saved
  } catch {
    // storage blocked (private mode etc.) - just fall through
  }
  return navigator.language?.startsWith('da') ? 'da' : 'en'
}

export default function App() {
  const [lang, setLang] = useState(startLang)
  const [active, setActive] = useState(pages[0].id)

  // Keep <html lang> correct (screen readers, translation) and remember the choice.
  useEffect(() => {
    document.documentElement.lang = lang
    try {
      localStorage.setItem('lang', lang)
    } catch {
      // ignore
    }
  }, [lang])

  // Which part is on screen? The one crossing a line a bit above the middle of the window.
  // At the very bottom of the page the last part counts (it may be too short to reach that line).
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-35% 0px -60% 0px' },
    )
    pages.forEach((p) => observer.observe(document.getElementById(p.id)))
    const onScroll = () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) setActive(pages.at(-1).id)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  // After you press play, a floating copy of the player shows while the one in the sidebar is out of view
  const { showFloating } = usePlayer()

  return (
    <div className={`site ${showFloating ? 'with-floating-player' : ''}`}>
      <div className="bg-swirls" aria-hidden="true" /> {/* swirls behind the top of the page */}
      <MobileBar pages={pages} active={active} lang={lang} />
      <div className="layout">
        <Sidebar pages={pages} active={active} lang={lang} setLang={setLang} />
        <main className="content">
          {pages.map(({ id, Page }) => <Page key={id} lang={lang} />)}
          <footer className="footer">© {new Date().getFullYear()} Amir Skoric</footer>
        </main>
      </div>
      {showFloating && <ChiptunePlayer lang={lang} floating />}
      <ScrollTop />
    </div>
  )
}
