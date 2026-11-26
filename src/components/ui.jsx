import firma from '../assets/brand/firma-path.json'

export function Firma({ className = '', title = 'Seba Simón', ...rest }) {
  return (
    <svg viewBox={firma.viewBox} className={className} role="img" aria-label={title} {...rest}>
      <path fill="currentColor" fillRule="evenodd" d={firma.d} />
    </svg>
  )
}

export function Monograma({ className = '' }) {
  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-label="Monograma SS">
      <circle cx="32" cy="32" r="30" fill="var(--color-lima)" />
      <path d="M8 20c14 4 20 14 18 38M56 44c-14-4-20-14-18-38" fill="none" stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round" opacity=".28" />
      <text x="32" y="42" textAnchor="middle" fontFamily="Archivo, Arial Black, sans-serif" fontWeight="900" fontSize="27" letterSpacing="-2" fill="#0A0A0A" style={{ fontStretch: '125%' }}>SS</text>
    </svg>
  )
}

export function IconoWhatsApp({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}

export function IconoInstagram({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="0.6" fill="currentColor" />
    </svg>
  )
}

// Marco tipo visor de cámara, tomado del reel de Seba.
export function Visor({ etiqueta, pill, pie, children, className = '' }) {
  const esquina = 'absolute h-4 w-4 border-lima'
  return (
    <div className={`grupo-foto relative overflow-hidden bg-carbon ${className}`}>
      {children}
      <div className="pointer-events-none absolute inset-3 sm:inset-4">
        <span className={`${esquina} left-0 top-0 border-l-2 border-t-2`} />
        <span className={`${esquina} right-0 top-0 border-r-2 border-t-2`} />
        <span className={`${esquina} bottom-0 left-0 border-b-2 border-l-2`} />
        <span className={`${esquina} bottom-0 right-0 border-b-2 border-r-2`} />
        {etiqueta && <span className="hud absolute left-6 top-0.5 rounded-sm bg-tinta/70 px-1.5 py-0.5 text-lima">{etiqueta}</span>}
        {pill && <span className="hud absolute right-6 top-0.5 rounded-full bg-lima px-2 py-0.5 text-tinta">{pill}</span>}
        {pie && (
          <span className="hud absolute bottom-0.5 left-6 flex items-center gap-2 whitespace-nowrap rounded-sm bg-tinta/70 px-1.5 py-0.5 text-hueso/90">
            <span className="h-1.5 w-1.5 rounded-full bg-lima" />{pie}
          </span>
        )}
      </div>
    </div>
  )
}

export function Boton({ href, children, variante = 'lima', className = '', ...rest }) {
  const base = 'inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3.5 text-[0.95rem] font-bold transition duration-200 active:scale-[.98]'
  const estilos = {
    lima: 'bg-lima text-tinta hover:bg-hueso',
    linea: 'border border-hueso/25 text-hueso hover:border-lima hover:text-lima',
  }
  const Tag = href ? 'a' : 'button'
  return <Tag href={href} className={`${base} ${estilos[variante]} ${className}`} {...rest}>{children}</Tag>
}

export function Rotulo({ n, children }) {
  return (
    <p className="hud mb-5 flex items-center gap-3 text-lima">
      <span>{n}</span><span className="h-px w-8 bg-lima/50" /><span className="text-hueso/70">{children}</span>
    </p>
  )
}
