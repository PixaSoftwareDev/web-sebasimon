import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { clases, niveles, dias, franjas, site, waLink } from '../data/site'
import { IconoWhatsApp, Rotulo } from './ui'

function Chips({ legend, opciones, valor, onChange, multiple = false }) {
  const activo = (o) => (multiple ? valor.includes(o) : valor === o)
  const toggle = (o) =>
    multiple ? onChange(activo(o) ? valor.filter((v) => v !== o) : [...valor, o]) : onChange(o)
  return (
    <fieldset>
      <legend className="hud mb-3 text-humo">{legend}</legend>
      <div className="flex flex-wrap gap-2">
        {opciones.map((o) => (
          <button
            key={o} type="button" aria-pressed={activo(o)} onClick={() => toggle(o)}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
              activo(o) ? 'border-lima bg-lima text-tinta' : 'border-linea text-hueso/80 hover:border-hueso/60'
            }`}
          >{o}</button>
        ))}
      </div>
    </fieldset>
  )
}

export default function Reserva({ tipo, setTipo }) {
  const [nombre, setNombre] = useState('')
  const [nivel, setNivel] = useState('')
  const [misDias, setMisDias] = useState([])
  const [franja, setFranja] = useState('')
  const [nota, setNota] = useState('')

  const clase = clases.find((c) => c.id === tipo)
  const mensaje = [
    `Hola Seba!${nombre.trim() ? ` Soy ${nombre.trim()}.` : ''}`,
    `Quiero reservar una clase${clase ? ` *${clase.titulo.toLowerCase()}*` : ''} de pádel.`,
    nivel && `Nivel: ${nivel}`,
    misDias.length > 0 && `Días que puedo: ${dias.filter((d) => misDias.includes(d)).join(', ')}`,
    franja && `Horario: ${franja.toLowerCase()}`,
    nota.trim() && nota.trim(),
  ].filter(Boolean).join('\n')

  return (
    <section id="reserva" className="relative border-t border-linea bg-carbon">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 [&>*]:min-w-0 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-20 lg:py-28">
        <div data-reveal>
          <Rotulo n="06">Reservá</Rotulo>
          <h2 className="display text-[clamp(1.75rem,7.4vw,4.5rem)]">
            Reservá <span className="text-lima">tu clase.</span>
          </h2>
          <p className="mt-6 max-w-md text-lg text-hueso/70">
            Elegí cómo querés entrenar y cuándo podés. Se abre WhatsApp con el mensaje armado y Seba te confirma día y horario.
          </p>
          <a href={waLink()} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-3 text-hueso/80 transition hover:text-lima">
            <IconoWhatsApp className="h-5 w-5" />
            <span className="font-mono text-sm tracking-wider">{site.whatsappVisible}</span>
          </a>
        </div>

        <form
          data-reveal
          className="space-y-7 rounded-3xl border border-linea bg-tinta p-6 sm:p-9"
          onSubmit={(e) => { e.preventDefault(); window.open(waLink(mensaje), '_blank', 'noopener') }}
        >
          <label className="block">
            <span className="hud mb-3 block text-humo">Tu nombre</span>
            <input
              value={nombre} onChange={(e) => setNombre(e.target.value)} autoComplete="given-name" placeholder="¿Cómo te llamás?"
              className="w-full border-b border-linea bg-transparent pb-3 text-xl font-semibold placeholder:text-hueso/25 focus:border-lima focus:outline-none"
            />
          </label>
          <Chips legend="Tipo de clase" opciones={clases.map((c) => c.titulo)} valor={clase?.titulo ?? ''} onChange={(t) => setTipo(clases.find((c) => c.titulo === t).id)} />
          <Chips legend="Tu nivel" opciones={niveles} valor={nivel} onChange={setNivel} />
          <Chips legend="Días que podés" opciones={dias} valor={misDias} onChange={setMisDias} multiple />
          <Chips legend="Horario" opciones={franjas} valor={franja} onChange={setFranja} />
          <label className="block">
            <span className="hud mb-3 block text-humo">Algo más (opcional)</span>
            <input
              value={nota} onChange={(e) => setNota(e.target.value)} placeholder="Ej: quiero mejorar la bandeja"
              className="w-full border-b border-linea bg-transparent pb-3 placeholder:text-hueso/25 focus:border-lima focus:outline-none"
            />
          </label>
          <button type="submit" className="group flex w-full items-center justify-between rounded-full bg-lima py-3 pl-5 pr-3 text-base font-extrabold sm:pl-6 sm:text-lg text-tinta transition hover:bg-hueso">
            <span className="flex items-center gap-3"><IconoWhatsApp className="h-6 w-6" />Enviar por WhatsApp</span>
            <span className="grid h-10 w-10 place-items-center rounded-full bg-tinta text-lima transition group-hover:rotate-45"><ArrowUpRight className="h-5 w-5" /></span>
          </button>
        </form>
      </div>
    </section>
  )
}
