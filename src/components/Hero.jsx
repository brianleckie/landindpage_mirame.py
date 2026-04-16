import { products } from './products.js'
import { ArrowRightIcon } from './icons.jsx'

const rotations = ['rotate-[-8deg]', 'rotate-[4deg]', 'rotate-[-3deg]', 'rotate-[9deg]']
const positions = [
  { top: '10%', left: '5%' },
  { top: '5%', right: '8%' },
  { bottom: '8%', left: '8%' },
  { bottom: '5%', right: '5%' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#0a0a0a' }}>
      {/* Background poster cards */}
      {products.slice(0, 4).map((product, i) => (
        <div
          key={product.id}
          className={`absolute w-40 md:w-56 rounded-xl overflow-hidden shadow-2xl opacity-30 md:opacity-40 pointer-events-none select-none ${rotations[i]}`}
          style={{ ...positions[i], aspectRatio: '3/4', border: '1px solid rgba(78,205,180,0.2)' }}
          dangerouslySetInnerHTML={{ __html: product.art }}
        />
      ))}

      {/* Radial gradient center glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(78,205,180,0.07) 0%, transparent 70%)' }} />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6" style={{ backgroundColor: 'rgba(78,205,180,0.12)', color: '#4ECDB4', border: '1px solid rgba(78,205,180,0.25)' }}>
          🇵🇾 Marketplace paraguayo de arte impreso
        </div>

        <h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight mb-6">
          Arte independiente<br />
          <span style={{ color: '#4ECDB4' }}>para tu espacio</span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
          Posters únicos de artistas paraguayos. Elegí tu tamaño, pedí por WhatsApp y decorá con arte real.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#catalogo"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#4ECDB4', color: '#0a0a0a' }}
          >
            Explorar catálogo
            <ArrowRightIcon size={18} />
          </a>
          <a
            href="#artistas"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold transition-colors"
            style={{ border: '1.5px solid rgba(255,255,255,0.2)', color: '#ffffff' }}
          >
            Subir mis diseños
          </a>
        </div>

        {/* Stats row */}
        <div className="mt-14 flex flex-wrap justify-center gap-8">
          {[['1.200+', 'artistas activos'], ['12.000+', 'posters vendidos'], ['70%', 'para el artista']].map(([num, label]) => (
            <div key={label} className="text-center">
              <div className="text-2xl font-black" style={{ color: '#4ECDB4' }}>{num}</div>
              <div className="text-xs text-gray-500 mt-0.5">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
