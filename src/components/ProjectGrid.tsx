import type { ProjectCase } from '../types/site'
import { ProjectCard } from './ProjectCard'

interface ProjectGridProps {
  projects: ProjectCase[]
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <section className="project-grid" id="projects" aria-labelledby="project-grid-title">
      <div className="section-heading reveal">
        <span className="eyebrow">Case Studies</span>
        <h3 id="project-grid-title">核心项目总览</h3>
        <p>每张卡片只保留足够让面试官决定要不要继续问的信息，细节放进详情页。</p>
      </div>

      <div className="project-grid__list">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}
