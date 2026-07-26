import type { ReactNode } from 'react'

interface AccordionSectionProps {
  id: string
  title: string
  eyebrow: string
  summary: string
  defaultOpen?: boolean
  children: ReactNode
}

export function AccordionSection({
  id,
  title,
  eyebrow,
  summary,
  defaultOpen = false,
  children,
}: AccordionSectionProps) {
  return (
    <details className="accordion-section reveal" id={id} open={defaultOpen}>
      <summary className="accordion-section__summary">
        <div className="accordion-section__heading">
          <span className="eyebrow">{eyebrow}</span>
          <div>
            <h3>{title}</h3>
            <p>{summary}</p>
          </div>
        </div>
        <span className="accordion-section__toggle" aria-hidden="true">
          展开
        </span>
      </summary>
      <div className="accordion-section__content">{children}</div>
    </details>
  )
}
