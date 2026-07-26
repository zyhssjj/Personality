export interface ExternalLinks {
  github: string
  blog: string
  email: string
  resume: string
}

export interface Profile {
  name: string
  heroId: string
  role: string
  summary: string
  status: string
  focusTags: string[]
  quickFacts: Array<{ label: string; value: string }>
  principles: string[]
  about: string[]
  links: ExternalLinks
  footerNote: string
}

export interface ProofPoint {
  value: string
  label: string
  note: string
}

export interface SkillItem {
  name: string
  level: string
  scene: string
}

export interface SkillGroup {
  title: string
  summary: string
  items: SkillItem[]
}

export interface ContactItem {
  label: string
  value: string
  href?: string
  primary?: boolean
}

export interface ProjectMetric {
  label: string
  value: string
  note: string
}

export interface ArchitectureNode {
  name: string
  detail: string
  accent: 'primary' | 'success' | 'warning'
}

export interface DecisionNote {
  title: string
  detail: string
}

export interface ChallengeNote {
  title: string
  problem: string
  action: string
  outcome: string
}

export interface ProjectLink {
  label: string
  href: string
}

export interface ProjectCase {
  slug: string
  category: string
  title: string
  summary: string
  role: string
  spotlight: string
  background: string
  scope: string[]
  techStack: string[]
  metric: ProjectMetric
  architecture: ArchitectureNode[]
  decisions: DecisionNote[]
  challenges: ChallengeNote[]
  outcomes: string[]
  reflection: string
  links: ProjectLink[]
}
