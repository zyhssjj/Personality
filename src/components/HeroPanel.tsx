import type { Profile, ProjectCase } from '../types/site'
import { ProjectCard } from './ProjectCard'

interface HeroPanelProps {
  profile: Profile
  projects: ProjectCase[]
  onJump: (sectionId: string) => void
}

export function HeroPanel({
  profile,
  projects,
  onJump,
}: HeroPanelProps) {
  return (
    <section className="hero-panel reveal" id="hero">
      <div className="hero-panel__cloud hero-panel__cloud--peach" aria-hidden="true" />
      <div className="hero-panel__cloud hero-panel__cloud--mint" aria-hidden="true" />
      <div className="hero-panel__paper hero-panel__paper--one" aria-hidden="true" />
      <div className="hero-panel__paper hero-panel__paper--two" aria-hidden="true" />
      <div className="hero-panel__copy">
        <span className="eyebrow">{profile.heroId}</span>
        <p className="status-chip">{profile.status}</p>
        <h1>{profile.name}</h1>
        <h2>{profile.role}</h2>

        <div className="hero-panel__actions">
          <button type="button" className="button button--primary" onClick={() => onJump('projects')}>
            查看项目
          </button>
          <button type="button" className="button" onClick={() => onJump('about')}>
            了解我
          </button>
          <a className="button" href={profile.links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>

      <div className="hero-panel__projects">
        <div className="hero-panel__projects-head">
          <div>
            <span className="eyebrow">Core Projects</span>
            <h3 id="projects">核心项目总览</h3>
          </div>
        </div>
        <div className="hero-panel__project-list">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
