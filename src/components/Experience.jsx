import { content } from '../data/content'
import { pick } from '../data/pick'
import Section from './Section'
import LogoCarousel from './LogoCarousel'

// "Skills & experience": job timeline first, then the skills as a slow logo carousel underneath.
export default function Experience({ lang }) {
  const e = content.experience
  const sk = content.skills
  return (
    <Section id="experience" title={e[lang].title}>
      <ol className="timeline">
        {e.items.map((item) => (
          <li key={item.company} className="timeline-item">
            <div className="timeline-when">
              <span className="period">{pick(item.period, lang)}</span>
              <span className="where">{pick(item.role, lang)} · {item.place}</span>
            </div>
            <div className="timeline-body">
              <h3>{item.company}</h3>
              {/* skills are shown once: as tags when the job has them, otherwise as a short sentence */}
              {item.skills ? (
                <ul className="tags job-tags">
                  {item.skills.map((s) => <li key={s}>{s}</li>)}
                </ul>
              ) : (
                <p className="points">{item.points.map((p) => pick(p, lang)).join('  ·  ')}</p>
              )}
            </div>
          </li>
        ))}
      </ol>

      <div className="skills-box">
        <h3 className="subhead">{sk[lang].title}</h3>
        <LogoCarousel groups={sk.groups} lang={lang} label={sk[lang].title} />
      </div>
    </Section>
  )
}
