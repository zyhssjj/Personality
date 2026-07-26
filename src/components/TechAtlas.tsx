import type { SkillGroup } from '../types/site'
import { AccordionSection } from './AccordionSection'

interface TechAtlasProps {
  groups: SkillGroup[]
}

export function TechAtlas({ groups }: TechAtlasProps) {
  return (
    <AccordionSection
      id="skills"
      eyebrow="Tech Atlas"
      title="技术图谱"
      summary="压缩首页长度，需要时再展开看技术能力层次。"
    >
      <div className="tech-atlas__grid">
        {groups.map((group) => (
          <article key={group.title} className="atlas-card">
            <h4>{group.title}</h4>
            <p>{group.summary}</p>
            <ul className="atlas-card__list">
              {group.items.map((item) => (
                <li key={item.name}>
                  <div className="atlas-card__topline">
                    <strong>{item.name}</strong>
                    <span>{item.level}</span>
                  </div>
                  <p>{item.scene}</p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </AccordionSection>
  )
}
