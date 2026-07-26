import { useEffect } from 'react'
import { HashRouter, Link, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { profile } from './data/siteContent'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { ProjectPage } from './pages/ProjectPage'

const leftDogIcon = `${import.meta.env.BASE_URL}nav-dog-left-user.png`
const rightDogIcon = `${import.meta.env.BASE_URL}nav-dog-right-user.png`

function ScrollManager() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname])

  return null
}

function PointerGlow() {
  useEffect(() => {
    const updateGlow = (event: PointerEvent) => {
      document.documentElement.style.setProperty('--pointer-x', `${event.clientX}px`)
      document.documentElement.style.setProperty('--pointer-y', `${event.clientY}px`)
    }

    window.addEventListener('pointermove', updateGlow)

    return () => window.removeEventListener('pointermove', updateGlow)
  }, [])

  return null
}

function MotionReady() {
  useEffect(() => {
    document.documentElement.classList.add('motion-ready')

    return () => {
      document.documentElement.classList.remove('motion-ready')
    }
  }, [])

  return null
}

function AppShell() {
  const location = useLocation()
  const isProjectPage = location.pathname.startsWith('/projects/')

  return (
    <div className="app-shell">
      <MotionReady />
      <PointerGlow />
      <div className="app-shell__noise" aria-hidden="true" />
      <div className="app-shell__grid" aria-hidden="true" />
      <header className="site-header">
        <Link className="brand-mark" to="/">
          <span className="brand-mark__name">{profile.name}</span>
          <span className="brand-mark__system">System Atlas</span>
        </Link>
        <nav className="site-header__nav" aria-label="Primary">
          {isProjectPage ? (
            <Link className="nav-link" to="/">
              返回首页
            </Link>
          ) : (
            <div className="site-header__nav-group">
              <img className="nav-pet-icon nav-pet-icon--left" src={leftDogIcon} alt="左侧线条小狗图标" />
              <a className="nav-link nav-link--pet" href={profile.links.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="nav-link nav-link--pet" href={profile.links.resume} target="_blank" rel="noreferrer">
                简历
              </a>
              <img className="nav-pet-icon nav-pet-icon--right" src={rightDogIcon} alt="右侧线条小狗图标" />
            </div>
          )}
        </nav>
      </header>

      <main className="page-shell">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/:slug" element={<ProjectPage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <p>{profile.footerNote}</p>
      </footer>
    </div>
  )
}

export default function App() {
  return (
    <HashRouter>
      <ScrollManager />
      <AppShell />
    </HashRouter>
  )
}
