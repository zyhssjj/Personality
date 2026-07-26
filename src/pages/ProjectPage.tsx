import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ProjectDetailSections } from '../components/ProjectDetailSections'
import { projectCases } from '../data/siteContent'

export function ProjectPage() {
  const { slug } = useParams()
  const project = projectCases.find((item) => item.slug === slug)

  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>('.reveal'))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.18 },
    )

    items.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [slug])

  if (!project) {
    return <Navigate to="/404" replace />
  }

  return (
    <div className="project-page">
      <div className="project-page__back reveal">
        <Link className="button" to="/">
          返回首页
        </Link>
      </div>
      <ProjectDetailSections project={project} />
    </div>
  )
}
