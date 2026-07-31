import { useEffect, useState, useCallback, useRef, useMemo } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { getProjectBySlug, getNextProject } from '../../data/caseStudies'
import './projectDetail.css'

function computeReadingTime(story) {
  const words = story.reduce((acc, block) => {
    const text = block.text.join(' ')
    return acc + text.split(/\s+/).filter(Boolean).length
  }, 0)
  return Math.max(1, Math.ceil(words / 200))
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()

  const project = useMemo(() => getProjectBySlug(slug), [slug])
  const nextProject = useMemo(() => project ? getNextProject(slug) : null, [slug, project])

  const [lightbox, setLightbox] = useState(null)
  const [progress, setProgress] = useState(0)
  const [activeIdx, setActiveIdx] = useState(-1)
  const [copied, setCopied] = useState(false)
  const copiedTimer = useRef(null)
  const sectionRefs = useRef([])

  const closeLightbox = useCallback(() => setLightbox(null), [])

  // Feature 1: Reading progress
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Feature 2: Active story section detection
  useEffect(() => {
    const els = sectionRefs.current.filter(Boolean)
    if (!els.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const idx = els.indexOf(entry.target)
            if (idx !== -1) setActiveIdx(idx)
          }
        }
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    )

    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [slug, project])

  // Scroll to top on slug change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [slug])

  // Dynamic title (handled by Helmet in JSX below)

  // Feature 5 + lightbox: Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      const tag = e.target.tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return

      if (e.key === 'Escape') {
        if (lightbox) closeLightbox()
        return
      }
      if (e.key === 'ArrowRight' && nextProject) {
        navigate(`/projects/${nextProject.slug}`)
        return
      }
      if (e.key === 'ArrowLeft') {
        navigate('/projects')
        return
      }
    }

    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [lightbox, closeLightbox, nextProject, navigate])

  // Lightbox body scroll lock
  useEffect(() => {
    if (!lightbox) return
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [lightbox])

  // Feature 6: Copy link
  const handleCopyLink = useCallback(() => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true)
      clearTimeout(copiedTimer.current)
      copiedTimer.current = setTimeout(() => setCopied(false), 2000)
    })
  }, [])

  if (!project) {
    return (
      <>
        <Helmet>
          <title>404 — Project Not Found | Mostafa Akajdid</title>
          <meta
            name="description"
            content="The requested project could not be found. Browse the portfolio of Mostafa Akajdid."
          />
          <meta property="og:title" content="404 — Project Not Found | Mostafa Akajdid" />
          <meta
            property="og:description"
            content="The requested project could not be found. Browse the portfolio of Mostafa Akajdid."
          />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://makajdid.vercel.app/og-image.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="404 — Project Not Found | Mostafa Akajdid" />
          <meta
            name="twitter:description"
            content="The requested project could not be found. Browse the portfolio of Mostafa Akajdid."
          />
          <meta name="twitter:image" content="https://makajdid.vercel.app/og-image.png" />
        </Helmet>
        <div className="pe pe--404">
          <div className="pe__404">
            <h1 className="pe__404-title">404</h1>
            <p className="pe__404-text">This project could not be found.</p>
            <Link to="/projects" className="pe__404-link">
              ← All Projects
            </Link>
          </div>
        </div>
      </>
    )
  }

  const { title, subtitle, meta, story, technologies, liveUrl, githubUrl, facts, status } = project
  const readTime = useMemo(() => computeReadingTime(story), [story])

  return (
    <>
      <Helmet>
        <title>{title} — Mostafa Akajdid</title>
        <meta
          name="description"
          content={subtitle}
        />
        <link rel="canonical" href={`https://makajdid.vercel.app/projects/${slug}`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={subtitle} />
        <meta property="og:url" content={`https://makajdid.vercel.app/projects/${slug}`} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://makajdid.vercel.app/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={subtitle} />
        <meta name="twitter:image" content="https://makajdid.vercel.app/og-image.png" />
      </Helmet>
      <article className="pe">
      {/* Feature 1: Reading progress bar */}
      <div className="pe__progress" style={{ width: `${progress}%` }} aria-hidden="true" />

      <header className="pe__hero">
        <button
          className="pe__back"
          onClick={() => navigate('/projects')}
          aria-label="Go back to projects"
        >
          ← All Projects
        </button>
        <h1 className="pe__title">{title}</h1>
        <p className="pe__intro">{subtitle}</p>
        <div className="pe__hero-lower">
          <div className="pe__meta-sticky-wrap">
            <div className="pe__meta">
              <span className="pe__meta-item">
                <span className="pe__meta-label">Role</span>
                <span className="pe__meta-value">{meta.role}</span>
              </span>
              <span className="pe__meta-item">
                <span className="pe__meta-label">Type</span>
                <span className="pe__meta-value">{meta.type}</span>
              </span>
              <span className="pe__meta-item">
                <span className="pe__meta-label">Year</span>
                <span className="pe__meta-value">{meta.year}</span>
              </span>
              <span className="pe__meta-item">
                <span className="pe__meta-label">Status</span>
                <span className="pe__meta-value">{status}</span>
              </span>
            </div>
            <div className="pe__reading-time">{readTime} MIN READ</div>
          </div>
          <div className="pe__links-col">
            {(liveUrl || githubUrl) && (
              <div className="pe__links">
                {liveUrl && (
                  <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="pe__link">
                    Visit Live <span className="pe__link-arrow">→</span>
                  </a>
                )}
                {githubUrl && (
                  <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="pe__link">
                    View Source <span className="pe__link-arrow">→</span>
                  </a>
                )}
              </div>
            )}
            <button
              className="pe__link pe__copy-link"
              onClick={handleCopyLink}
              aria-label={copied ? 'Link copied' : 'Copy project link'}
            >
              {copied ? 'Copied ✓' : 'Copy Link'}
            </button>
          </div>
        </div>
      </header>

      {/* Feature 7: Optimized hero image */}
      <figure className="pe__hero-image">
        <button
          className="pe__image-btn"
          onClick={() => setLightbox({ src: story[0].image, alt: story[0].imageAlt })}
          aria-label="Open image in lightbox"
        >
          <img
            src={story[0].image}
            alt={story[0].imageAlt}
            fetchpriority="high"
            decoding="async"
          />
        </button>
      </figure>

      {story.map((block, i) => (
        <section
          className="pe__story-block"
          key={i}
          ref={(el) => { sectionRefs.current[i] = el }}
        >
          <h2 className={`pe__story-title${activeIdx === i ? ' pe__story-title--active' : ''}`}>
            {block.title}
          </h2>
          {block.text.map((paragraph, j) => (
            <p className="pe__story-text" key={j}>
              {paragraph}
            </p>
          ))}
          {block.image && (
            <figure className="pe__story-image">
              <button
                className="pe__image-btn"
                onClick={() => setLightbox({ src: block.image, alt: block.imageAlt })}
                aria-label="Open image in lightbox"
              >
                {/* Feature 7: Lazy story images */}
                <img
                  src={block.image}
                  alt={block.imageAlt}
                  loading="lazy"
                  decoding="async"
                />
              </button>
            </figure>
          )}
        </section>
      ))}

      <section className="pe__facts">
        <h2 className="pe__section-label">Project Facts</h2>
        <div className="pe__facts-grid">
          {facts.industry && (
            <div className="pe__fact">
              <span className="pe__fact-label">Industry</span>
              <span className="pe__fact-value">{facts.industry}</span>
            </div>
          )}
          {facts.platform && (
            <div className="pe__fact">
              <span className="pe__fact-label">Platform</span>
              <span className="pe__fact-value">{facts.platform}</span>
            </div>
          )}
          {facts.responsive && (
            <div className="pe__fact">
              <span className="pe__fact-label">Responsive</span>
              <span className="pe__fact-value">{facts.responsive}</span>
            </div>
          )}
          {facts.team && (
            <div className="pe__fact">
              <span className="pe__fact-label">Team</span>
              <span className="pe__fact-value">{facts.team}</span>
            </div>
          )}
        </div>
      </section>

      <section className="pe__tech">
        <h2 className="pe__section-label">Built with</h2>
        <ul className="pe__tech-list">
          {technologies.map((tech, i) => (
            <li key={i}>{tech}</li>
          ))}
        </ul>
      </section>

      <Link to={`/projects/${nextProject.slug}`} className="pe__next">
        <span className="pe__next-label">Next Project</span>
        <h2 className="pe__next-title">{nextProject.title}</h2>
        <p className="pe__next-desc">{nextProject.subtitle}</p>
        <figure className="pe__next-image">
          <img src={nextProject.image} alt={`${nextProject.title} preview`} />
        </figure>
      </Link>

      {lightbox && (
        <div
          className="pe__lightbox"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <div className="pe__lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <button
              className="pe__lightbox-close"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              ✕
            </button>
            <img src={lightbox.src} alt={lightbox.alt} className="pe__lightbox-img" />
          </div>
        </div>
      )}
    </article>
    </>
  )
}
