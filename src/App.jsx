import { useEffect } from 'react'
import styles from  './App.module.css'
import {Navbar} from './components/Navbar/Navbar'
import {Hero} from './components/Hero/Hero'
import {About} from './components/About/About'
import {Experience} from './components/Experience/Experience'
import {Projects} from './components/Projects/Projects'
import {Contact} from './components/Contact/Contact'
import {Skills} from './components/Skills/Skills'

function App() {
  useEffect(() => {
    const getSections = () => Array.from(document.querySelectorAll('section, footer'))
    let currentIndex = 0
    let isScrolling = false
    let touchStartY = 0
    const DURATION = 1100

    const ease = (t) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

    const lerp = (a, b, t) => a + (b - a) * t

    const animateSection = (el, fromScale, toScale, fromRot, toRot, fromOp, toOp) => {
      let start = null
      const step = (ts) => {
        if (!start) start = ts
        const t = ease(Math.min((ts - start) / DURATION, 1))
        el.style.transform = `perspective(1200px) scale(${lerp(fromScale, toScale, t)}) rotateX(${lerp(fromRot, toRot, t)}deg)`
        el.style.opacity = lerp(fromOp, toOp, t)
        if ((ts - start) < DURATION) requestAnimationFrame(step)
        else { el.style.transform = ''; el.style.opacity = '' }
      }
      requestAnimationFrame(step)
    }

    const goTo = (index) => {
      const sections = getSections()
      if (index < 0 || index >= sections.length || isScrolling) return

      const prevIndex = currentIndex
      const dir = index > prevIndex ? 1 : -1
      currentIndex = index
      isScrolling = true

      const navbarHeight = parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue('--navbar-height')
      ) || 0
      const targetY = sections[index].getBoundingClientRect().top + window.scrollY - navbarHeight
      const startY = window.scrollY
      const diff = targetY - startY
      let start = null

      // Outgoing section: shrinks and tilts away
      animateSection(sections[prevIndex], 1, 0.80, 0, dir > 0 ? -12 : 12, 1, 0)
      // Incoming section: grows and straightens
      animateSection(sections[index],    0.80, 1, dir > 0 ? 12 : -12, 0, 0, 1)

      const scrollStep = (ts) => {
        if (!start) start = ts
        const progress = Math.min((ts - start) / DURATION, 1)
        window.scrollTo({ top: startY + diff * ease(progress), behavior: 'instant' })
        if (progress < 1) requestAnimationFrame(scrollStep)
        else setTimeout(() => { isScrolling = false }, 80)
      }
      requestAnimationFrame(scrollStep)
    }

    const handleWheel = (e) => {
      e.preventDefault()
      goTo(currentIndex + (e.deltaY > 0 ? 1 : -1))
    }

    const handleTouchStart = (e) => { touchStartY = e.touches[0].clientY }
    const handleTouchEnd = (e) => {
      const delta = touchStartY - e.changedTouches[0].clientY
      if (Math.abs(delta) > 40) goTo(currentIndex + (delta > 0 ? 1 : -1))
    }

    const handleScroll = () => {
      if (isScrolling) return
      const sections = getSections()
      let nearest = 0, minDist = Infinity
      sections.forEach((s, i) => {
        const dist = Math.abs(s.getBoundingClientRect().top)
        if (dist < minDist) { minDist = dist; nearest = i }
      })
      currentIndex = nearest
    }

    const handleAnchorClick = (e) => {
      const href = e.currentTarget.getAttribute('href')
      if (!href?.startsWith('#')) return
      e.preventDefault()
      const target = document.querySelector(href)
      if (!target) return
      const idx = getSections().indexOf(target)
      if (idx !== -1) goTo(idx)
    }
    const anchors = document.querySelectorAll('a[href^="#"]')
    anchors.forEach(a => a.addEventListener('click', handleAnchorClick))

    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchend', handleTouchEnd, { passive: true })
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      anchors.forEach(a => a.removeEventListener('click', handleAnchorClick))
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchend', handleTouchEnd)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return <div className={styles.App}>
    <div className={styles.blurTop} />
    <div className={styles.blurBottom} />
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Experience />
    <Projects />
    <Contact />
  </div>;
}

export default App
