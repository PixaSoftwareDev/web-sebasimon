import { ArrowLeft } from 'lucide-react'
import { Firma, Monograma, Visor } from './ui'
import voleaImg from '../assets/img/volea-baja.webp'

const colores = [
  ['Tinta', '#0A0A0A', 'Fondo principal', 'bg-tinta text-hueso border border-linea'],
  ['Lima', '#D7F531', 'Acento, botones, titulares destacados', 'bg-lima text-tinta'],
  ['Hueso', '#F5F5F0', 'Texto sobre negro', 'bg-hueso text-tinta'],
  ['Carbón', '#131312', 'Fondos alternos', 'bg-carbon text-hueso border border-linea'],
  ['Humo', '#8F8F88', 'Texto secundario', 'bg-humo text-tinta'],
  ['Oro', '#C9A961', 'Solo para el bloque Orkell', 'bg-oro text-tinta'],
]

function Bloque({ n, titulo, children }) {
  return (
    <section className="border-t border-linea py-14">
      <p className="hud mb-8 flex items-center gap-3 text-lima"><span>{n}</span><span className="h-px w-8 bg-lima/50" /><span className="text-hueso/70">{titulo}</span></p>
      {children}
    </section>
  )
}

export default function Marca() {
  return (
    <main className="mx-auto max-w-6xl px-5 pb-24 pt-10 sm:px-8">
      <a href="#top" className="hud inline-flex items-center gap-2 text-humo hover:text-lima"><ArrowLeft className="h-4 w-4" />Volver al sitio</a>
      <header className="py-16">
        <p className="hud mb-5 text-lima">Guía de marca · v1</p>
        <h1 className="display text-[clamp(2.4rem,9vw,6rem)]">Seba <span className="text-lima">Simón.</span></h1>
        <p className="mt-6 max-w-xl text-lg text-hueso/70">Negro, lima y la firma de Seba. Fotos en blanco y negro, titulares anchos y pesados, y el visor de cámara de su reel como recurso gráfico.</p>
      </header>

      <Bloque n="01" titulo="Logo · la firma">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="grid aspect-[3/2] place-items-center rounded-2xl border border-linea bg-tinta p-10"><Firma className="w-full text-hueso" /></div>
          <div className="grid aspect-[3/2] place-items-center rounded-2xl bg-lima p-10"><Firma className="w-full text-tinta" /></div>
          <div className="grid aspect-[3/2] place-items-center rounded-2xl bg-hueso p-10"><Firma className="w-full text-tinta" /></div>
        </div>
        <p className="mt-5 max-w-2xl text-hueso/65">La firma original, vectorizada y con el trazo afinado. Siempre en un solo color: hueso sobre negro, o negro sobre lima o claro. Nunca con el sponsor adentro.</p>
      </Bloque>

      <Bloque n="02" titulo="Versiones">
        <div className="grid gap-4 md:grid-cols-[1.4fr_1fr]">
          <div className="grid place-items-center rounded-2xl border border-linea bg-carbon p-10">
            <div className="text-center">
              <Firma className="mx-auto w-72 text-hueso" />
              <p className="hud mt-4 text-lima">Pádel · Pergamino</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-8 rounded-2xl border border-linea bg-carbon p-10">
            <Monograma className="h-28 w-28" />
            <Monograma className="h-14 w-14" />
            <Monograma className="h-8 w-8" />
          </div>
        </div>
        <p className="mt-5 max-w-2xl text-hueso/65">Firma con bajada para piezas completas. Monograma "SS" en pelota lima para foto de perfil, favicon y lugares chicos donde la firma no se lee.</p>
      </Bloque>

      <Bloque n="03" titulo="Color">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {colores.map(([nombre, hex, uso, cls]) => (
            <div key={hex} className={`flex min-h-36 flex-col justify-between rounded-2xl p-5 ${cls}`}>
              <span className="display text-xl">{nombre}</span>
              <span><span className="font-mono text-sm">{hex}</span><span className="mt-1 block text-sm opacity-70">{uso}</span></span>
            </div>
          ))}
        </div>
      </Bloque>

      <Bloque n="04" titulo="Tipografía">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="display text-5xl sm:text-6xl">Salí <span className="text-lima">jugando.</span></p>
            <p className="hud mt-5 text-humo">Archivo Expanded Black · titulares, siempre en mayúsculas</p>
          </div>
          <div>
            <p className="text-xl leading-relaxed text-hueso/80">Clases de pádel para todos los niveles, con técnica clara y corrección en el momento.</p>
            <p className="hud mt-5 text-humo">Archivo Regular / Bold · textos</p>
            <p className="mt-8 font-mono text-sm tracking-widest text-lima">REC 00:00:13 · 01 / SEBA DICE</p>
            <p className="hud mt-3 text-humo">JetBrains Mono · rótulos</p>
          </div>
        </div>
      </Bloque>

      <Bloque n="05" titulo="Fotografía y recurso gráfico">
        <div className="grid gap-4 md:grid-cols-2">
          <Visor etiqueta="01 / Seba dice" pill="x0.5" pie="Rec 00:00:13" className="aspect-[4/5] rounded-2xl">
            <img src={voleaImg} alt="Ejemplo de foto en blanco y negro con visor" className="h-full w-full object-cover grayscale contrast-[1.12]" />
          </Visor>
          <ul className="flex flex-col justify-center gap-5 text-hueso/75">
            <li><strong className="text-hueso">Blanco y negro contrastado.</strong> El único color de la pieza es el lima.</li>
            <li><strong className="text-hueso">Visor de cámara.</strong> Esquinas, etiqueta y "REC" enmarcan fotos y videos.</li>
            <li><strong className="text-hueso">Frases cortas, con punto.</strong> "Mirá la bola." "Bajá la bola." "Menos fuerza."</li>
            <li><strong className="text-hueso">Orkell aparte.</strong> El sponsor va en su bloque, con dorado, nunca dentro del logo.</li>
          </ul>
        </div>
      </Bloque>
    </main>
  )
}
