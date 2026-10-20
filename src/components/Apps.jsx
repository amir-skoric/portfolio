import { useState } from 'react'
import { content } from '../data/content'
import { pick } from '../data/pick'
import Section from './Section'
import AppModal from './AppModal'
import ScreenZoom from './ScreenZoom'
import ProjectCard from './ProjectCard'
import FeaturedCase from './Projects'
// The weather app: a picture of all 4 design screens (for the card) + each screen on its own (for the zoom)
import weatherOverview from '../assets/weather-design/overview.webp'
import weather1 from '../assets/weather-design/screen-1.webp'
import weather2 from '../assets/weather-design/screen-2.webp'
import weather3 from '../assets/weather-design/screen-3.webp'
import weather4 from '../assets/weather-design/screen-4.webp'
// Screenshots of the three school projects (taken from their demos)
import webshopImage from '../assets/projects/webshop.webp'
import twitterImage from '../assets/projects/twitter-clone.webp'
import quizImage from '../assets/projects/quiz-app.webp'
// Big screenshots of each demo, for the zoom (made from the demos themselves)
import webshopShot1 from '../assets/projects/webshop/1.webp'
import webshopShot2 from '../assets/projects/webshop/2.webp'
import webshopShot3 from '../assets/projects/webshop/3.webp'
import webshopShot4 from '../assets/projects/webshop/4.webp'
import webshopShot5 from '../assets/projects/webshop/5.webp'
import webshopShot6 from '../assets/projects/webshop/6.webp'
import twitterShot1 from '../assets/projects/twitter/1.webp'
import twitterShot2 from '../assets/projects/twitter/2.webp'
import twitterShot3 from '../assets/projects/twitter/3.webp'
import twitterShot4 from '../assets/projects/twitter/4.webp'
import twitterShot5 from '../assets/projects/twitter/5.webp'
import quizShot1 from '../assets/projects/quiz/1.webp'
import quizShot2 from '../assets/projects/quiz/2.webp'
import quizShot3 from '../assets/projects/quiz/3.webp'
import quizShot4 from '../assets/projects/quiz/4.webp'
import quizShot5 from '../assets/projects/quiz/5.webp'
import quizShot6 from '../assets/projects/quiz/6.webp'

// Extra things a project can have. Use the name as "app" in content.js.
// - image: the card picture
// - screens: pictures you can look through big ("See the design" / "See screenshots")
// - shots: true = the pictures are screenshots, not design screens (changes the button text)
// - wide: true = the pictures are wide desktop screenshots (shown wide in the zoom)
// - load: the interactive demo (one html file, made by "npm run build" in the weather-app folder,
//   or in the demo-apps folders for the other three). It is only downloaded when someone
//   presses "Open the app", so the portfolio stays fast.
// - frame: 'browser' shows the demo in a browser window instead of a phone (desktop apps)
// - background: the colour behind the demo while it starts
const apps = {
  weather: {
    image: weatherOverview,
    screens: [weather1, weather2, weather3, weather4],
    load: () => import('../demos/weather-app.html?raw'),
  },
  webshop: {
    image: webshopImage,
    screens: [webshopShot1, webshopShot2, webshopShot3, webshopShot4, webshopShot5, webshopShot6],
    shots: true,
    wide: true,
    load: () => import('../demos/webshop.html?raw'),
    frame: 'browser',
    background: '#ffffff',
  },
  twitter: {
    image: twitterImage,
    screens: [twitterShot1, twitterShot2, twitterShot3, twitterShot4, twitterShot5],
    shots: true,
    load: () => import('../demos/twitter-clone.html?raw'),
    background: '#000000',
  },
  quiz: {
    image: quizImage,
    screens: [quizShot1, quizShot2, quizShot3, quizShot4, quizShot5, quizShot6],
    shots: true,
    wide: true,
    load: () => import('../demos/quiz-app.html?raw'),
    frame: 'browser',
    background: '#11191f',
  },
}

// Pictures for the other projects. Import a picture above and add it here, e.g. { shop: shopImage },
// then write  image: 'shop'  on that project in content.js.
const images = {}

// "Projects": the featured case on top, then "More projects" as a grid of cards (2 per row, 1 on phones).
export default function Apps({ lang }) {
  const a = content.apps
  const t = a[lang]
  const [demo, setDemo] = useState(null) // { item, html } while the demo pop-up is open
  const [design, setDesign] = useState(null) // the project whose design screens are shown big
  const [loading, setLoading] = useState('')

  const openApp = async (item) => {
    setLoading(item.app)
    try {
      const { default: html } = await apps[item.app].load()
      setDemo({ item, html })
    } finally {
      setLoading('')
    }
  }

  return (
    <Section id="projects" title={t.title}>
      <FeaturedCase lang={lang} />

      <div className="project-part">
        <h3 className="subhead">{t.more}</h3>
        <div className="project-grid">
        {a.items.map((item, i) => {
          const extra = item.app && apps[item.app]
          const name = pick(item.name, lang)
          return (
            <ProjectCard
              key={i}
              item={item}
              image={extra ? extra.image : images[item.image]}
              lang={lang}
              t={t}
              onImageClick={extra?.screens ? () => setDesign(item) : undefined}
              imageLabel={`${extra?.shots ? t.shots : t.design}: ${name}`}
            >
              {extra?.load && (
                <button type="button" className="btn small" onClick={() => openApp(item)} disabled={loading === item.app}>
                  {loading === item.app ? t.loading : t.open}
                </button>
              )}
            </ProjectCard>
          )
        })}
        </div>
      </div>

      {design && (
        <ScreenZoom
          screens={apps[design.app].screens}
          wide={apps[design.app].wide}
          labels={design.screens.map((s) => `${pick(design.name, lang)} · ${pick(s, lang)}`)}
          t={t}
          onClose={() => setDesign(null)}
        />
      )}
      {demo && (
        <AppModal
          title={pick(demo.item.name, lang)}
          html={demo.html}
          closeLabel={t.close}
          onClose={() => setDemo(null)}
          frame={apps[demo.item.app].frame}
          background={apps[demo.item.app].background}
        />
      )}
    </Section>
  )
}
