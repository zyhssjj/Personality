import type { ContactItem, Profile } from '../types/site'
import { AccordionSection } from './AccordionSection'

interface AboutPanelProps {
  profile: Profile
  contacts: ContactItem[]
}

export function AboutPanel({ profile, contacts }: AboutPanelProps) {
  return (
    <AccordionSection
      id="about"
      eyebrow="About Me"
      title="关于我"
      summary="只在面试官想继续了解你的风格和工作方式时展开。"
    >
      <div className="about-panel__grid">
        <article className="about-panel__content">
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </article>

        <aside className="about-panel__principles">
          <span className="eyebrow">Working Principles</span>
          <ul>
            {profile.principles.map((principle) => (
              <li key={principle}>{principle}</li>
            ))}
          </ul>
        </aside>

        <div className="about-panel__contacts">
          <span className="eyebrow">Links</span>
          <div className="contact-panel__grid">
            {contacts.map((contact) =>
              contact.href ? (
                <a
                  key={contact.label}
                  className={`contact-card ${contact.primary ? 'is-primary' : ''}`}
                  href={contact.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>{contact.label}</span>
                  <strong>{contact.value}</strong>
                </a>
              ) : (
                <div key={contact.label} className={`contact-card ${contact.primary ? 'is-primary' : ''}`}>
                  <span>{contact.label}</span>
                  <strong>{contact.value}</strong>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </AccordionSection>
  )
}
