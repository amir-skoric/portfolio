import { content } from '../data/content'
import Section from './Section'
import { cv } from '../data/cv'
import { GitHubIcon, LinkedInIcon, MailIcon, ArrowIcon } from './Icons'

const icons = { 'E-mail': MailIcon, LinkedIn: LinkedInIcon, GitHub: GitHubIcon }

export default function Contact({ lang }) {
  const c = content.contact
  const t = c[lang]
  const mail = c.links.find((l) => l.href.startsWith('mailto:'))
  return (
    <Section id="contact" title={t.title}>
      <div className="contact">
        <div className="contact-intro">
          <h3>{t.heading}</h3>
          <p className="text">{t.text}</p>
          <div className="btn-row">
            {mail && <a className="btn" href={mail.href}>{t.mail}</a>}
            <a className="btn alt" href={cv[lang].file} download={cv[lang].name}>{cv[lang].label}</a>
          </div>
        </div>
        <ul className="contact-list">
          {c.links.map((l) => {
            const Icon = icons[l.label]
            // E-mail opens the mail app; web links open in a new tab.
            const external = l.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {}
            return (
              <li key={l.label}>
                <a href={l.href} {...external}>
                  {Icon && <span className="contact-icon"><Icon /></span>}
                  <span className="contact-text">
                    <small>{l.label}</small>
                    {l.value}
                  </span>
                  <span className="contact-go"><ArrowIcon /></span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </Section>
  )
}
