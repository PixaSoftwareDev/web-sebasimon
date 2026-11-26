import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Nav, Hero, Cinta, Metodo, Clases, Sobre, Cancha, Sponsor, Footer, BurbujaWhatsApp } from './components/sections'
import Reserva from './components/Reserva'
import Marca from './components/Marca'
import { Firma } from './components/ui'

gsap.registerPlugin(ScrollTrigger)

function useHash() {
  const [hash, setHash] = useState(window.location.hash)
  useEffect(() => {
    const on = () => setHash(window.location.hash)
    window.addEventListener('hashchange', on)
    return () => window.removeEventListener('hashchange', on)
  }, [])
  return hash
}

function Sitio() {
  const raiz = useRef(null)
  const [tipo, setTipo] = useState('')
  // Entrada con la firma: una sola vez por visita, no en cada recarga.
  const [intro, setIntro] = useState(
    () => !sessionStorage.getItem('intro') && !window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      const espera = intro ? 1.25 : 0.1
      if (intro) {
        gsap.timeline({ onComplete: () => { sessionStorage.setItem('intro', '1'); setIntro(false) } })
          .fromTo('[data-intro-firma]', { clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)', duration: 0.85, ease: 'power2.inOut', delay: 0.1 })
          .to('[data-intro]', { yPercent: -100, duration: 0.6, ease: 'power3.inOut' }, '+=0.2')
      }
      gsap.from('[data-hero]', { y: 40, opacity: 0, duration: 0.9, ease: 'power3.out', stagger: 0.09, delay: espera })
      gsap.from('[data-hero-img]', { scale: 1.12, duration: 1.8, ease: 'power2.out', delay: Math.max(0, espera - 0.3) })
      gsap.to('[data-hero-img]', {
        yPercent: 10, ease: 'none',
        scrollTrigger: { trigger: '#top', start: 'top top', end: 'bottom top', scrub: true },
      })
      ScrollTrigger.batch('[data-reveal]', {
        start: 'top 88%', once: true,
        onEnter: (els) => gsap.to(els, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.08 }),
      })
      gsap.set('[data-reveal]', { y: 36, opacity: 0 })
      // La firma se "escribe" de izquierda a derecha al llegar a El profe
      gsap.fromTo('[data-firma]', { clipPath: 'inset(0 100% 0 0)' }, {
        clipPath: 'inset(0 0% 0 0)', duration: 1.5, ease: 'power2.inOut', delay: 0.35,
        scrollTrigger: { trigger: '[data-firma]', start: 'top 88%', once: true },
      })
    }, raiz)
    return () => ctx.revert()
  }, [])

  const elegir = (id) => {
    setTipo(id)
    document.getElementById('reserva')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div ref={raiz}>
      {intro && (
        <div data-intro aria-hidden="true" className="fixed inset-0 z-[100] grid place-items-center bg-tinta">
          <Firma data-intro-firma className="w-[min(70vw,26rem)] text-lima" />
        </div>
      )}
      <Nav />
      <main>
        <Hero />
        <Cinta />
        <Metodo />
        <Clases onElegir={elegir} />
        <Sobre />
        <Cancha />
        <Sponsor />
        <Reserva tipo={tipo} setTipo={setTipo} />
      </main>
      <Footer />
      <BurbujaWhatsApp />
    </div>
  )
}

export default function App() {
  const hash = useHash()
  useEffect(() => { if (hash === '#marca') window.scrollTo(0, 0) }, [hash])
  return hash === '#marca' ? <Marca /> : <Sitio />
}
