import type { ProjectCase } from '../types/site'

interface ProjectDetailSectionsProps {
  project: ProjectCase
}

export function ProjectDetailSections({ project }: ProjectDetailSectionsProps) {
  return (
    <div className="project-detail">
      <section className="project-detail__hero reveal">
        <div>
          <span className="eyebrow">{project.category}</span>
          <h1>{project.title}</h1>
          <p className="project-detail__summary">{project.summary}</p>
        </div>
        <aside className="project-detail__metric">
          <span>{project.metric.label}</span>
          <strong>{project.metric.value}</strong>
          <p>{project.metric.note}</p>
        </aside>
      </section>

      <section className="detail-section reveal">
        <div className="detail-section__heading">
          <span className="eyebrow">01 / Background</span>
          <h2>为什么做</h2>
        </div>
        <p>{project.background}</p>
      </section>

      <section className="detail-section reveal">
        <div className="detail-section__heading">
          <span className="eyebrow">02 / Scope</span>
          <h2>你负责了什么</h2>
        </div>
        <div className="scope-list">
          {project.scope.map((item) => (
            <article key={item} className="scope-list__item">
              {item}
            </article>
          ))}
        </div>
      </section>

      <section className="detail-section reveal">
        <div className="detail-section__heading">
          <span className="eyebrow">03 / Architecture</span>
          <h2>系统怎么拆</h2>
        </div>
        <div className="architecture-grid">
          {project.architecture.map((node) => (
            <article key={node.name} className={`architecture-node is-${node.accent}`}>
              <h3>{node.name}</h3>
              <p>{node.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="detail-section reveal">
        <div className="detail-section__heading">
          <span className="eyebrow">04 / Decisions</span>
          <h2>为什么这样选型</h2>
        </div>
        <div className="decision-grid">
          {project.decisions.map((decision) => (
            <article key={decision.title} className="decision-card">
              <h3>{decision.title}</h3>
              <p>{decision.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="detail-section reveal">
        <div className="detail-section__heading">
          <span className="eyebrow">05 / Challenges</span>
          <h2>最难的问题怎么解决</h2>
        </div>
        <div className="challenge-grid">
          {project.challenges.map((challenge) => (
            <article key={challenge.title} className="challenge-card">
              <h3>{challenge.title}</h3>
              <p>
                <strong>问题:</strong> {challenge.problem}
              </p>
              <p>
                <strong>动作:</strong> {challenge.action}
              </p>
              <p>
                <strong>结果:</strong> {challenge.outcome}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="detail-section reveal">
        <div className="detail-section__heading">
          <span className="eyebrow">06 / Outcomes</span>
          <h2>最终结果和反思是什么</h2>
        </div>
        <div className="outcome-list">
          {project.outcomes.map((outcome) => (
            <span key={outcome} className="chip">
              {outcome}
            </span>
          ))}
        </div>
        <p className="project-detail__reflection">{project.reflection}</p>
      </section>

      <section className="detail-section reveal">
        <div className="detail-section__heading">
          <span className="eyebrow">07 / Links</span>
          <h2>外链补充材料</h2>
        </div>
        <div className="link-list">
          {project.links.map((link) => (
            <a key={link.label} className="button" href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
