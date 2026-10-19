import { content } from '../data/content'
import { pick } from '../data/pick'
import { TrophyIcon } from './Icons'
import kold from '../assets/kold-festival.jpg'

// Pictures for the cases. Add a new image here and use its name as "image" in content.js.
const images = { kold }

// "Featured case": shown at the top of the Projects section (picture left, text right).
export default function FeaturedCase({ lang }) {
  const p = content.projects
  return (
    <div className="project-part">
      <h3 className="subhead">{p[lang].title}</h3>
      {p.items.map((item) => (
        <article key={item.name} className="showcase">
          {item.image && (
            <a className="showcase-media frame" href={item.site} target="_blank" rel="noreferrer" tabIndex={-1}>
              <img src={images[item.image]} alt={`${item.name} website`} loading="lazy" />
            </a>
          )}
          <div className="showcase-body">
            {item.award && (
              <p className="label"><TrophyIcon /> {pick(item.award, lang)}</p>
            )}
            <h3>{item.name}</h3>
            {item.meta && <p className="meta">{pick(item.meta, lang)}</p>}
            <p className="text">{pick(item.text, lang)}</p>
            <div className="btn-row">
              <a className="btn" href={item.site} target="_blank" rel="noreferrer">{p[lang].visit}</a>
              {item.code && <a className="btn alt" href={item.code} target="_blank" rel="noreferrer">{p[lang].code}</a>}
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
