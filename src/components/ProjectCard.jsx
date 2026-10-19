import { useId, useState } from 'react'
import { pick } from '../data/pick'
import { PictureIcon } from './Icons'

// One project card: picture on top, text underneath, buttons at the bottom.
// - "soon" projects get a "Coming soon" label and a placeholder picture.
// - onImageClick: the picture becomes clickable (e.g. to see the design big).
// - children: extra buttons (e.g. "Open the app"). A "link" on the project adds "See project".
// - "details" on the project: the longer story, hidden behind a "Read more" button.
//   The school/date line (meta) and the tags are shown in there too, so the card itself stays calm.
export default function ProjectCard({ item, image, lang, t, onImageClick, imageLabel, children }) {
  const name = pick(item.name, lang)
  const picture = image ? (
    <img className="project-thumb frame" src={image} alt={name} loading="lazy" />
  ) : (
    <div className="project-thumb frame placeholder" aria-hidden="true"><PictureIcon /></div>
  )
  const label = item.soon ? t.soon : pick(item.label, lang)
  const [open, setOpen] = useState(false)
  const detailsId = useId()

  return (
    <article className={`project-card${item.soon ? ' soon' : ''}`}>
      {onImageClick ? (
        <button type="button" className="thumb-btn" onClick={onImageClick} aria-label={imageLabel}>
          {picture}
          {/* small badge in the corner: you can click the picture to see it big */}
          <span className="zoom-badge" aria-hidden="true">
            <svg viewBox="0 0 16 16" width="12" height="12"><path d="M9.5 2H14v4.5M14 2 9 7M6.5 14H2V9.5M2 14l5-5" fill="none" stroke="currentColor" strokeWidth="1.6" /></svg>
          </span>
        </button>
      ) : picture}
      {label && <p className="label">{label}</p>}
      <h3>{name}</h3>
      <p className="text">{pick(item.text, lang)}</p>
      {item.details && (
        <>
          <button type="button" className="more-toggle" aria-expanded={open} aria-controls={detailsId} onClick={() => setOpen(!open)}>
            {open ? t.readLess : t.readMore}
            <span className="more-arrow" aria-hidden="true" />
          </button>
          {/* every section has a title and either a text or a list */}
          <div id={detailsId} className="project-details" hidden={!open}>
            {item.meta && <p className="meta">{pick(item.meta, lang)}</p>}
            {item.details.map((part) => (
              <section key={pick(part.title, 'en')}>
                <h4>{pick(part.title, lang)}</h4>
                {part.text && <p>{pick(part.text, lang)}</p>}
                {part.list && (
                  <ul>
                    {part.list.map((point) => <li key={pick(point, 'en')}>{pick(point, lang)}</li>)}
                  </ul>
                )}
              </section>
            ))}
            {item.tags && (
              <ul className="tags">
                {item.tags.map((tag) => <li key={pick(tag, 'en')}>{pick(tag, lang)}</li>)}
              </ul>
            )}
          </div>
        </>
      )}
      {(children || item.link || item.code) && (
        <div className="btn-row">
          {children}
          {item.link && <a className="btn alt small" href={item.link} target="_blank" rel="noreferrer">{t.view}</a>}
          {item.code && <a className="btn alt small" href={item.code} target="_blank" rel="noreferrer">{t.code}</a>}
        </div>
      )}
    </article>
  )
}
