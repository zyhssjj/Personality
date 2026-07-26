import { Link } from 'react-router-dom'
import type { ProjectCase } from '../types/site'

interface ProjectCardProps {
  project: ProjectCase
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article className="project-card reveal" data-project-card data-project-index={index}>
      <div className="project-card__glow" aria-hidden="true" />
      <div className="project-card__breath" aria-hidden="true" />
      <div className="project-card__spark project-card__spark--one" aria-hidden="true" />
      <div className="project-card__spark project-card__spark--two" aria-hidden="true" />
      <div className="project-card__spark project-card__spark--three" aria-hidden="true" />
      <div className="project-card__meta">
        <span className="eyebrow">{project.category}</span>
        <span className="project-card__index">0{index + 1}</span>
      </div>
      <h3>{project.title}</h3>
      <p className="project-card__summary">{project.summary}</p>
      <p className="project-card__role">{project.role}</p>

      <div className="project-card__stack">
        {project.techStack.map((item) => (
          <span key={item} className="chip chip--soft">
            {item}
          </span>
        ))}
      </div>

      <div className="project-card__metric">
        <span>{project.metric.label}</span>
        <strong>{project.metric.value}</strong>
        <p>{project.metric.note}</p>
      </div>

      <div className="project-card__footer">
        <p>{project.spotlight}</p>
        <Link className="project-card__link" to={`/projects/${project.slug}`}>
          进入项目详情
        </Link>
      </div>
    </article>
  )
}
