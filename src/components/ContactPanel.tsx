import type { ContactItem } from '../types/site'
import { AccordionSection } from './AccordionSection'

interface ContactPanelProps {
  contacts: ContactItem[]
}

export function ContactPanel({ contacts }: ContactPanelProps) {
  return (
    <AccordionSection
      id="contact"
      eyebrow="Contact"
      title="联系方式与外链入口"
      summary="需要时展开，避免首页尾部拖得太长。"
    >
      <div className="contact-panel__grid">
        {contacts.map((contact) => (
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
        ))}
      </div>
    </AccordionSection>
  )
}
