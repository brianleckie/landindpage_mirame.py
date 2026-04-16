import { CheckIcon, ArrowRightIcon } from './icons.jsx'

const benefits = [
  '70% de ganancias por cada venta',
  'Sin costo de entrada ni mensualidades',
  'Mockups automáticos para tus redes',
  'Panel de estadísticas en tiempo real',
  'Soporte en español 24/7',
  'Pagos en guaraníes o dólares',
]

const stats = [
  { value: '1.200', label: 'artistas activos' },
  { value: '₲ 45M', label: 'en ventas totales' },
  { value: '98%', label: 'satisfacción' },
  { value: '4.2 días', label: 'primer pago promedio' },
]

export default function ForArtists() {
  return (
    <section id="artistas" className="py-20 px-4" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: benefits */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-5" style={{ backgroundColor: 'rgba(78,205,180,0.12)', color: '#4ECDB4', border: '1px solid rgba(78,205,180,0.25)' }}>
            Para artistas
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
            Monetizá tu arte<br />
            <span style={{ color: '#4ECDB4' }}>sin complicaciones</span>
          </h2>
          <p className="text-gray-400 text-base mb-8 leading-relaxed">
            Subí tus diseños, nosotros nos encargamos de la impresión, envío y cobranza. Vos solo creás.
          </p>

          <ul className="flex flex-col gap-3 mb-8">
            {benefits.map(b => (
              <li key={b} className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(78,205,180,0.15)', color: '#4ECDB4' }}>
                  <CheckIcon size={12} />
                </span>
                <span className="text-gray-300 text-sm">{b}</span>
              </li>
            ))}
          </ul>

          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#4ECDB4', color: '#0a0a0a' }}
          >
            Empezar como artista
            <ArrowRightIcon size={16} />
          </a>
        </div>

        {/* Right: stats card */}
        <div className="rounded-2xl p-8" style={{ backgroundColor: '#111111', border: '1px solid rgba(78,205,180,0.15)' }}>
          <p className="text-gray-500 text-xs uppercase tracking-widest mb-6">Panel de artista — Ejemplo</p>

          <div className="grid grid-cols-2 gap-6 mb-8">
            {stats.map(s => (
              <div key={s.label} className="flex flex-col gap-1">
                <span className="text-2xl font-black" style={{ color: '#4ECDB4' }}>{s.value}</span>
                <span className="text-gray-500 text-xs">{s.label}</span>
              </div>
            ))}
          </div>

          {/* Fake mini bar chart */}
          <div className="mt-4">
            <p className="text-gray-600 text-xs mb-3">Ventas últimas 6 semanas</p>
            <div className="flex items-end gap-2 h-16">
              {[40, 65, 50, 80, 70, 95].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t"
                  style={{ height: `${h}%`, backgroundColor: i === 5 ? '#4ECDB4' : 'rgba(78,205,180,0.25)' }}
                />
              ))}
            </div>
            <div className="flex gap-2 mt-1">
              {['S1', 'S2', 'S3', 'S4', 'S5', 'S6'].map(l => (
                <div key={l} className="flex-1 text-center text-gray-700 text-xs">{l}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
