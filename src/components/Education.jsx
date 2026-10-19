import { content } from '../data/content'
import { pick } from '../data/pick'
import Section from './Section'

// Same timeline look as "Skills & experience", so the page feels like one design.
export default function Education({ lang }) {
  const e = content.education
  return (
    <Section id="education" title={e[lang].title}>
      <ol className="timeline">
        {e.items.map((item, i) => (
          <li key={i} className="timeline-item">
            <div className="timeline-when">
              <span className="period">{item.years}</span>
              {item.current && <span className="badge">{e[lang].now}</span>}
            </div>
            <div className="timeline-body">
              <h3>{pick(item.name, lang)}</h3>
              <p className="where">{item.school}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
