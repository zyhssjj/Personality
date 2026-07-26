import { useEffect, useState } from 'react'
import gsap from 'gsap'
import { AboutPanel } from '../components/AboutPanel'
import { HeroPanel } from '../components/HeroPanel'
import { TechAtlas } from '../components/TechAtlas'
import { contacts, profile, projectCases, skillGroups } from '../data/siteContent'

export function HomePage() {
  const [isContentCollapsed, setIsContentCollapsed] = useState(false)

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

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-panel__copy > *',
        { y: 18, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.08,
          ease: 'power3.out',
        },
      )

      gsap.fromTo(
        '.hero-panel__visual',
        { x: 32, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.18 },
      )
    })

    return () => {
      observer.disconnect()
      ctx.revert()
    }
  }, [])

  const jumpToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="home-page">
      <div className="home-page__hero-toggle-wrap">
        <button
          type="button"
          className={`hero-collapse-toggle${isContentCollapsed ? ' is-collapsed' : ''}`}
          aria-expanded={!isContentCollapsed}
          aria-controls="home-page-content"
          aria-label={isContentCollapsed ? '展开首页内容' : '折叠首页内容'}
          onClick={() => setIsContentCollapsed((value) => !value)}
        >
          <span className="hero-collapse-toggle__chevron" aria-hidden="true" />
        </button>
      </div>
      <div
        className={`home-page__content${isContentCollapsed ? ' is-collapsed' : ''}`}
        id="home-page-content"
        aria-hidden={isContentCollapsed}
      >
        <HeroPanel
          profile={profile}
          projects={projectCases}
          onJump={jumpToSection}
        />
        <div className="home-page__accordion-stack">
          <TechAtlas groups={skillGroups} />
          <AboutPanel profile={profile} contacts={contacts} />
        </div>
      </div>
    </div>
  )
}
