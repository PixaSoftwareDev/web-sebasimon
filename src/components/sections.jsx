import { useEffect, useRef, useState } from 'react'
import { ArrowDown, ArrowUpRight, MapPin, Menu, Play, Volume2, VolumeX, X } from 'lucide-react'
import { site, metodo, clases, waLink } from '../data/site'
import { Boton, Firma, IconoInstagram as Instagram, IconoWhatsApp, Rotulo, Visor } from './ui'

import heroImg from '../assets/img/hero.webp'
import voleaImg from '../assets/img/volea-baja.webp'
import perfilImg from '../assets/img/perfil-pala.webp'
import saqueImg from '../assets/img/saque.webp'
import saquePublicoImg from '../assets/img/saque-publico.webp'
import revesImg from '../assets/img/reves-bn.webp'
import smashImg from '../assets/img/smash.webp'
import pelotasImg from '../assets/img/pelotas.webp'
import palaCanchaImg from '../assets/img/pala-cancha.webp'
import espaldaImg from '../assets/img/espalda-pala.webp'
import productoImg from '../assets/img/orkell-producto.webp'
import orkellLogo from '../assets/brand/orkell-logo.webp'
import portonLogo from '../assets/brand/elporton-logo.webp'

const contenedor = 'mx-auto max-w-7xl px-5 sm:px-8'
const links = [
  ['Método', '#metodo'], ['Clases', '#clases'], ['Seba', '#seba'], ['En cancha', '#cancha'], ['Sponsor', '#sponsor'],
]

/* ---------------- Nav ---------------- */
export function Nav() {
  const [abierto, setAbierto] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24)
    on(); window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${scrolled || abierto ? 'border-b border-linea bg-tinta/85 backdrop-blur-md' : 'border-b border-transparent'}`}>
      <nav className={`${contenedor} flex h-16 items-center justify-between sm:h-20`}>
        <a href="#top" aria-label="Seba Simón, inicio" className="text-hueso transition hover:text-lima">
          <Firma className="h-9 w-auto sm:h-11" />
        </a>
        <ul className="hidden items-center gap-8 lg:flex">
          {links.map(([t, h]) => (
            <li key={h}><a href={h} className="hud text-hueso/70 transition hover:text-lima">{t}</a></li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <Boton href="#reserva" className="!px-5 !py-2.5 !text-sm">Reservar</Boton>
          <button className="grid h-10 w-10 place-items-center rounded-full border border-linea lg:hidden" aria-label="Menú" aria-expanded={abierto} onClick={() => setAbierto(!abierto)}>
            {abierto ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>
      {abierto && (
        <ul className={`${contenedor} pb-6 lg:hidden`}>
          {links.map(([t, h]) => (
            <li key={h} className="border-t border-linea">
              <a href={h} onClick={() => setAbierto(false)} className="display block py-4 text-2xl">{t}</a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}

/* ---------------- Hero ---------------- */
export function Hero() {
  return (
    <section id="top" className="grano relative min-h-svh overflow-hidden">
      <img
        src={heroImg} alt="Seba Simón golpeando una volea bajo un foco, en cancha oscura" fetchPriority="high"
        data-hero-img
        className="absolute inset-y-0 right-0 h-full w-full object-cover object-[50%_35%] opacity-60 lg:w-[54%] lg:opacity-100"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-tinta via-tinta/55 to-tinta/30 lg:bg-gradient-to-r lg:from-tinta lg:via-tinta/90 lg:via-45% lg:to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-tinta to-transparent" />

      <div className={`${contenedor} relative z-10 flex min-h-svh flex-col justify-end pb-14 pt-28 lg:justify-center lg:pb-24`}>
        <p data-hero className="hud mb-6 flex items-center gap-3 text-hueso/75">
          <span className="h-2 w-2 animate-pulse rounded-full bg-lima" />
          Clases de pádel · {site.ciudad.split(',')[0]}
        </p>
        <h1 className="display text-[clamp(2.2rem,11.3vw,4.6rem)] lg:text-[clamp(4rem,6.6vw,7rem)]">
          <span data-hero className="block">Entrá a</span>
          <span data-hero className="block">la cancha.</span>
          <span data-hero className="block text-lima">Salí jugando.</span>
        </h1>
        <p data-hero className="mt-7 max-w-md text-lg leading-relaxed text-hueso/75">
          Clases con el profe Seba Simón en El Portón. Desde tu primer golpe hasta competir mejor: técnica clara, corrección en el momento y mucha pelota.
        </p>
        <div data-hero className="mt-9 flex flex-wrap items-center gap-3">
          <Boton href="#reserva"><IconoWhatsApp className="h-5 w-5" />Reservá tu clase</Boton>
          <Boton href="#clases" variante="linea">Ver clases<ArrowDown className="h-4 w-4" /></Boton>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-5 top-24 z-10 hidden lg:block">
        <span className="absolute right-0 top-0 h-5 w-5 border-r-2 border-t-2 border-lima" />
        <span className="absolute bottom-0 right-0 h-5 w-5 border-b-2 border-r-2 border-lima" />
        <span className="hud absolute right-8 top-1 flex items-center gap-2 text-hueso/70">
          <span className="h-1.5 w-1.5 rounded-full bg-lima" />Rec · El Portón · Pergamino
        </span>
      </div>
    </section>
  )
}

/* ---------------- Cinta ---------------- */
export function Cinta() {
  const frases = ['Mirá la bola', 'Bajá la bola', 'Menos fuerza', 'Salí jugando']
  const fila = [...frases, ...frases]
  return (
    <div className="overflow-hidden bg-lima py-4 text-tinta" aria-hidden="true">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((k) => (
          <div key={k} className="flex shrink-0 items-center">
            {fila.map((f, i) => (
              <span key={i} className="display flex items-center text-xl sm:text-2xl">
                <span className="px-6">{f}</span>
                <span className="h-3 w-3 rounded-full bg-tinta" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

/* ---------------- Método ---------------- */
export function Metodo() {
  return (
    <section id="metodo" className={`${contenedor} grid gap-12 py-20 [&>*]:min-w-0 lg:grid-cols-[0.85fr_1fr] lg:gap-20 lg:py-32`}>
      <div data-reveal className="lg:self-center">
        <Visor etiqueta="01 / Seba dice" pill="x0.5" pie="Rec 00:00:13" className="aspect-[4/5] rounded-2xl">
          <img src={voleaImg} alt="Seba Simón bajando a una volea baja con la mirada en la pelota" loading="lazy" className="foto h-full w-full object-cover" />
        </Visor>
      </div>
      <div className="flex flex-col justify-center">
        <div data-reveal>
          <Rotulo n="01">El método</Rotulo>
          <h2 className="display text-[clamp(1.75rem,7.4vw,4.5rem)]">
            Tres ideas. <span className="text-lima">Mil repeticiones.</span>
          </h2>
        </div>
        <ol className="mt-10">
          {metodo.map((m) => (
            <li key={m.n} data-reveal className="group grid grid-cols-[auto_1fr] gap-x-6 border-t border-linea py-7 last:border-b">
              <span className="hud pt-2 text-lima">{m.n}</span>
              <div>
                <h3 className="display text-2xl transition group-hover:text-lima sm:text-3xl">{m.titulo}</h3>
                <p className="mt-2 max-w-md text-hueso/65">{m.texto}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

/* ---------------- Clases ---------------- */
export function Clases({ onElegir }) {
  return (
    <section id="clases" className="border-y border-linea bg-carbon">
      <div className={`${contenedor} py-20 lg:py-28`}>
        <div data-reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Rotulo n="02">Clases</Rotulo>
            <h2 className="display text-[clamp(1.75rem,7.4vw,4.5rem)]">Elegí <span className="text-lima">cómo entrenar.</span></h2>
          </div>
          <p className="max-w-xs text-hueso/65">Todos los niveles. Si nunca agarraste una pala, también: arrancamos de cero.</p>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-linea bg-linea sm:grid-cols-2 lg:grid-cols-4">
          {clases.map((c, i) => (
            <button
              key={c.id} data-reveal onClick={() => onElegir(c.id)}
              className="group flex min-h-72 flex-col bg-tinta p-7 text-left transition duration-300 hover:bg-lima hover:text-tinta"
            >
              <span className="hud flex w-full items-center justify-between text-humo group-hover:text-tinta/70">
                <span>0{i + 1}</span><span>{c.cupo}</span>
              </span>
              <h3 className="display mt-10 text-3xl">{c.titulo}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-hueso/65 group-hover:text-tinta/80">{c.texto}</p>
              <span className="mt-auto flex items-center gap-2 pt-8 text-sm font-bold text-lima group-hover:text-tinta">
                Reservar <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- Sobre Seba ---------------- */
export function Sobre() {
  const datos = [
    ['Sede', site.sede.nombre],
    ['Academia', site.sede.academia.replace('Academia de Pádel ', '')],
    ['Dirección', site.sede.direccion],
    ['Pala', `${site.sponsor.nombre} ${site.sponsor.pala}`],
  ]
  return (
    <section id="seba" className={`${contenedor} grid gap-12 py-20 [&>*]:min-w-0 lg:grid-cols-[1fr_0.85fr] lg:gap-20 lg:py-32`}>
      <div className="order-2 flex flex-col justify-center lg:order-1">
        <div data-reveal>
          <Rotulo n="03">El profe</Rotulo>
          <h2 className="display text-[clamp(1.75rem,7.4vw,4.5rem)]">Seba <span className="text-lima">Simón.</span></h2>
          <div className="mt-8 max-w-xl space-y-4 text-lg leading-relaxed text-hueso/75">
            <p>Profe y jugador de pádel de Pergamino. Doy clases en El Portón, dentro de la Academia de Pádel Federico De Pascual, para gente que arranca de cero y para jugadores que quieren competir mejor.</p>
            <p>Mi forma de enseñar es simple: pocas ideas claras, muchas repeticiones y corrección en el momento. Que cada clase te deje algo para usar en tu próximo partido.</p>
          </div>
          <Firma data-firma className="mt-8 h-16 w-auto text-lima" />
          <a href={`https://instagram.com/${site.sede.instagram}`} target="_blank" rel="noreferrer" className="mt-8 flex w-fit items-center gap-4 rounded-full border border-linea py-2 pl-2 pr-6 transition hover:border-lima">
            <img src={portonLogo} alt="" width="200" height="200" loading="lazy" className="h-12 w-12" />
            <span><span className="hud block text-humo">Enseño en</span><span className="font-semibold">El Portón · @{site.sede.instagram}</span></span>
          </a>
        </div>
        <dl data-reveal className="mt-10 grid grid-cols-2 gap-x-8 border-t border-linea">
          {datos.map(([k, v]) => (
            <div key={k} className="border-b border-linea py-4">
              <dt className="hud text-humo">{k}</dt>
              <dd className="mt-1 font-semibold">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div data-reveal className="order-1 lg:order-2">
        <Visor etiqueta="03 / El profe" pie="Pergamino · AR" className="aspect-[4/5] rounded-2xl">
          <img src={perfilImg} alt="Seba Simón de perfil sosteniendo su pala Orkell Vanta" loading="lazy" className="foto h-full w-full object-cover object-right" />
        </Visor>
      </div>
    </section>
  )
}

/* ---------------- En cancha: fotos + reels ---------------- */
function Reel({ nombre, titulo, conAudio = false }) {
  const ref = useRef(null)
  const [activo, setActivo] = useState(false)
  const [mudo, setMudo] = useState(true)
  const alternar = () => {
    const v = ref.current
    if (v.paused) { v.play(); setActivo(true) } else { v.pause(); setActivo(false) }
  }
  return (
    <figure className="relative aspect-[9/16] w-[62vw] max-w-[270px] shrink-0 snap-start overflow-hidden rounded-2xl bg-carbon sm:w-[270px] lg:w-auto lg:max-w-none">
      <video
        ref={ref} src={`/video/${nombre}.mp4`} poster={`/video/${nombre}.jpg`} preload="none"
        muted={mudo} loop playsInline onPause={() => setActivo(false)} onPlay={() => setActivo(true)}
        className="h-full w-full object-cover"
      />
      <button onClick={alternar} aria-label={`${activo ? 'Pausar' : 'Reproducir'} video: ${titulo}`} className="absolute inset-0 grid place-items-center">
        {!activo && (
          <span className="grid h-14 w-14 place-items-center rounded-full bg-lima text-tinta shadow-lg transition hover:scale-110">
            <Play className="ml-0.5 h-6 w-6 fill-current" />
          </span>
        )}
      </button>
      <figcaption className="hud pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-tinta/90 to-transparent p-4 pt-10 text-hueso/90">{titulo}</figcaption>
      {conAudio && activo && (
        <button onClick={() => setMudo(!mudo)} aria-label={mudo ? 'Activar sonido' : 'Silenciar'} className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-tinta/70 text-hueso backdrop-blur">
          {mudo ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </button>
      )}
    </figure>
  )
}

export function Cancha() {
  const fotos = [
    [revesImg, 'Seba de espaldas ejecutando un revés, en blanco y negro'],
    [saquePublicoImg, 'Seba sacando en un partido con público detrás del vidrio'],
    [smashImg, 'Seba armando un remate'],
    [pelotasImg, 'Cancha con pelotas y canasto después de un entrenamiento'],
    [saqueImg, 'Seba preparando el saque'],
    [palaCanchaImg, 'Pala Orkell Vanta frente a la cancha azul'],
  ]
  const reels = [
    ['promo', 'Reel · Salí jugando', true],
    ['clase', 'Clase de menores'], ['punto', 'Punto ganado'], ['saque', 'Partido'], ['entrenamiento', 'Canasto'],
  ]
  return (
    <section id="cancha" className="border-t border-linea">
      <div className={`${contenedor} pt-20 lg:pt-28`}>
        <div data-reveal>
          <Rotulo n="04">En cancha</Rotulo>
          <h2 className="display text-[clamp(1.75rem,7.4vw,4.5rem)]">Se entrena <span className="text-lima">como se juega.</span></h2>
        </div>
        <div className="mt-12 columns-2 gap-3 sm:gap-4 lg:columns-3">
          {fotos.map(([src, alt]) => (
            <div key={src} data-reveal className="grupo-foto mb-3 overflow-hidden rounded-xl bg-carbon sm:mb-4">
              <img src={src} alt={alt} loading="lazy" className="foto w-full" />
            </div>
          ))}
        </div>
      </div>
      <div data-reveal className="mx-auto mt-10 flex max-w-7xl snap-x gap-3 overflow-x-auto px-5 pb-20 [scrollbar-width:none] sm:gap-4 sm:px-8 lg:grid lg:grid-cols-5 lg:overflow-visible lg:pb-28">
        {reels.map(([n, t, a]) => <Reel key={n} nombre={n} titulo={t} conAudio={a} />)}
      </div>
    </section>
  )
}

/* ---------------- Sponsor ---------------- */
// Video sin sonido que solo se reproduce mientras está en pantalla.
function VideoEnVista({ nombre, titulo }) {
  const ref = useRef(null)
  useEffect(() => {
    const v = ref.current
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const io = new IntersectionObserver(([e]) => { e.isIntersecting ? v.play().catch(() => {}) : v.pause() }, { threshold: 0.25 })
    io.observe(v)
    return () => io.disconnect()
  }, [])
  return (
    <video
      ref={ref} src={`/video/${nombre}.mp4`} poster={`/video/${nombre}.jpg`} preload="none" muted loop playsInline
      aria-label={titulo} className="foto absolute inset-0 h-full w-full object-cover"
    />
  )
}

export function Sponsor() {
  return (
    <section id="sponsor" className="border-y border-linea bg-carbon">
      <div className={`${contenedor} grid gap-12 py-20 [&>*]:min-w-0 lg:grid-cols-2 lg:gap-20 lg:py-28`}>
        <div data-reveal className="flex flex-col justify-center">
          <p className="hud mb-5 flex items-center gap-3 text-oro">
            <span>05</span><span className="h-px w-8 bg-oro/50" /><span className="text-hueso/70">Sponsor oficial</span>
          </p>
          <h2 className="display text-[clamp(1.75rem,7.4vw,4.5rem)]">Juego con <span className="text-oro">{site.sponsor.nombre}.</span></h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-hueso/70">
            Seba entrena y compite con la {site.sponsor.nombre} {site.sponsor.pala}, de la {site.sponsor.linea}. Indumentaria y palas argentinas, en cancha todos los días.
          </p>
          <a href={site.sponsor.web} target="_blank" rel="noreferrer" aria-label="Ir al sitio oficial de Orkell" className="mt-9 inline-block w-fit opacity-90 transition hover:opacity-100">
            <img src={orkellLogo} alt="Orkell · 100% Padel in Motion" width="441" height="181" loading="lazy" className="h-20 w-auto sm:h-24" />
          </a>
          <dl className="mt-8 grid max-w-md grid-cols-2 border-t border-linea">
            <div className="border-b border-linea py-4"><dt className="hud text-humo">Pala</dt><dd className="mt-1 font-semibold">{site.sponsor.pala}</dd></div>
            <div className="border-b border-linea py-4"><dt className="hud text-humo">Línea</dt><dd className="mt-1 font-semibold">{site.sponsor.linea}</dd></div>
          </dl>
        </div>
        <div data-reveal className="grid grid-cols-2 gap-3 sm:gap-4">
          <Visor etiqueta="Vanta 1.0" pie="Rec · Orkell" className="row-span-2 rounded-2xl">
            <VideoEnVista nombre="orkell" titulo="Video de Seba jugando con la pala Orkell Vanta 1.0" />
          </Visor>
          <div className="grupo-foto aspect-square overflow-hidden rounded-2xl"><img src={espaldaImg} alt="Seba de espaldas con la pala Orkell lista para el revés" loading="lazy" className="foto h-full w-full object-cover" /></div>
          <div className="grupo-foto aspect-square overflow-hidden rounded-2xl"><img src={productoImg} alt="Pala y zapatilla Orkell apoyadas contra la red" loading="lazy" className="foto h-full w-full object-cover" /></div>
        </div>
      </div>
    </section>
  )
}

/* ---------------- Footer ---------------- */
export function Footer() {
  return (
    <footer className="border-t border-linea">
      <div className={`${contenedor} py-16`}>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Firma className="h-20 w-auto text-hueso" />
            <p className="hud mt-5 text-humo">Pádel · Pergamino</p>
          </div>
          <div>
            <p className="hud mb-4 text-humo">Dónde</p>
            <a href={`https://instagram.com/${site.sede.instagram}`} target="_blank" rel="noreferrer" className="mb-4 inline-block transition hover:scale-105">
              <img src={portonLogo} alt="El Portón · 100% Pádel" width="200" height="200" loading="lazy" className="h-16 w-16" />
            </a>
            <p className="text-lg font-semibold">{site.sede.nombre}</p>
            <p className="text-hueso/65">{site.sede.academia}</p>
            <p className="text-hueso/65">{site.sede.direccion}, Buenos Aires</p>
            <a href={site.sede.mapa} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-lima hover:underline">
              <MapPin className="h-4 w-4" />Cómo llegar
            </a>
          </div>
          <div>
            <p className="hud mb-4 text-humo">Contacto</p>
            <ul className="space-y-3">
              <li><a href={waLink()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 font-semibold hover:text-lima"><IconoWhatsApp className="h-5 w-5" />{site.whatsappVisible}</a></li>
              <li><a href={`https://instagram.com/${site.instagram}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 font-semibold hover:text-lima"><Instagram className="h-5 w-5" />@{site.instagram}</a></li>
              <li><a href={`https://instagram.com/${site.sede.instagram}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 text-hueso/65 hover:text-lima"><Instagram className="h-5 w-5" />@{site.sede.instagram}</a></li>
            </ul>
          </div>
        </div>
        <a href={site.sponsor.web} target="_blank" rel="noreferrer" className="mt-14 flex w-fit items-center gap-4 opacity-70 transition hover:opacity-100">
          <span className="hud text-humo">Sponsor oficial</span>
          <img src={orkellLogo} alt="Orkell" width="441" height="181" loading="lazy" className="h-10 w-auto" />
        </a>
        <div className="hud mt-8 flex flex-wrap justify-between gap-3 border-t border-linea pt-6 text-humo">
          <span>© {new Date().getFullYear()} Seba Simón</span>
          <a href="https://intellix.com.ar" target="_blank" rel="noopener" className="transition hover:text-lima">
            Sitio por <span className="text-hueso/80">Intellix</span>
          </a>
        </div>
      </div>
    </footer>
  )
}

/* ---------------- Burbuja de WhatsApp ---------------- */
export function BurbujaWhatsApp() {
  return (
    <a
      href={waLink()} target="_blank" rel="noreferrer" aria-label="Escribile a Seba por WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-3 rounded-full bg-lima p-4 text-tinta shadow-[0_10px_40px_-8px_rgba(215,245,49,.55)] transition hover:scale-105 sm:bottom-7 sm:right-7"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-lima opacity-20 [animation-duration:2.6s]" />
      <IconoWhatsApp className="h-7 w-7" />
      <span className="hidden pr-2 font-bold sm:block">Reservá tu clase</span>
    </a>
  )
}
