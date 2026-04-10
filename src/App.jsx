import { useState, useEffect } from 'react'

/* ─────────────────────────── SVG ICONS ─────────────────────────── */

const IconMoney = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="8" width="28" height="18" rx="3" stroke="#4ECDB4" strokeWidth="2" />
    <circle cx="16" cy="17" r="4" stroke="#4ECDB4" strokeWidth="2" />
    <path d="M7 12h2M23 12h2M7 22h2M23 22h2" stroke="#4ECDB4" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

const IconUpload = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 22V10M16 10l-5 5M16 10l5 5" stroke="#4ECDB4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 24h20" stroke="#4ECDB4" strokeWidth="2" strokeLinecap="round" />
    <path d="M26 14a6 6 0 0 1 0 12" stroke="#4ECDB4" strokeWidth="2" strokeLinecap="round" />
    <path d="M6 14a6 6 0 0 0 0 12" stroke="#4ECDB4" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

const IconGlobe = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="12" stroke="#4ECDB4" strokeWidth="2" />
    <ellipse cx="16" cy="16" rx="5" ry="12" stroke="#4ECDB4" strokeWidth="2" />
    <path d="M4 16h24M6 10h20M6 22h20" stroke="#4ECDB4" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

const IconShield = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 3L5 8v8c0 6.627 4.925 12.822 11 14 6.075-1.178 11-7.373 11-14V8L16 3z" stroke="#4ECDB4" strokeWidth="2" strokeLinejoin="round" />
    <path d="M11 16l3 3 7-7" stroke="#4ECDB4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const IconMenu = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 6h18M3 12h18M3 18h18" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

const IconClose = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 6L6 18M6 6l12 12" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

const IconArrow = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

/* ─────────────────── SVG POSTER PLACEHOLDERS ────────────────────── */

const Poster1 = () => (
  <svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="300" height="400" fill="#0a0a0a" />
    <circle cx="150" cy="200" r="120" fill="none" stroke="#4ECDB4" strokeWidth="1.5" opacity="0.6" />
    <circle cx="150" cy="200" r="80" fill="none" stroke="#4ECDB4" strokeWidth="1" opacity="0.4" />
    <circle cx="150" cy="200" r="40" fill="#4ECDB4" opacity="0.15" />
    <line x1="30" y1="200" x2="270" y2="200" stroke="#4ECDB4" strokeWidth="0.8" opacity="0.3" />
    <line x1="150" y1="80" x2="150" y2="320" stroke="#4ECDB4" strokeWidth="0.8" opacity="0.3" />
    <circle cx="150" cy="200" r="6" fill="#4ECDB4" />
    <text x="150" y="360" textAnchor="middle" fill="#4ECDB4" fontSize="11" fontFamily="Inter, sans-serif" letterSpacing="4" opacity="0.7">COSMOS I</text>
  </svg>
)

const Poster2 = () => (
  <svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="300" height="400" fill="#0a0a0a" />
    <defs>
      <linearGradient id="g2" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#4ECDB4" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#4ECDB4" stopOpacity="0.1" />
      </linearGradient>
    </defs>
    <polygon points="150,60 260,330 40,330" fill="none" stroke="#4ECDB4" strokeWidth="1.5" opacity="0.7" />
    <polygon points="150,100 230,310 70,310" fill="url(#g2)" opacity="0.2" />
    <polygon points="150,140 200,290 100,290" fill="none" stroke="#4ECDB4" strokeWidth="0.8" opacity="0.4" />
    <line x1="150" y1="60" x2="150" y2="330" stroke="#4ECDB4" strokeWidth="0.5" opacity="0.25" strokeDasharray="4,4" />
    <text x="150" y="370" textAnchor="middle" fill="#4ECDB4" fontSize="11" fontFamily="Inter, sans-serif" letterSpacing="4" opacity="0.7">FORMA II</text>
  </svg>
)

const Poster3 = () => (
  <svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="300" height="400" fill="#0a0a0a" />
    {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
      <rect
        key={i}
        x={60 + i * 6}
        y={80 + i * 18}
        width={180 - i * 12}
        height={240 - i * 36}
        fill="none"
        stroke="#4ECDB4"
        strokeWidth="1"
        opacity={0.8 - i * 0.09}
      />
    ))}
    <rect x="128" y="178" width="44" height="44" fill="#4ECDB4" opacity="0.12" />
    <text x="150" y="370" textAnchor="middle" fill="#4ECDB4" fontSize="11" fontFamily="Inter, sans-serif" letterSpacing="4" opacity="0.7">ORDEN III</text>
  </svg>
)

const Poster4 = () => (
  <svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="300" height="400" fill="#0a0a0a" />
    <defs>
      <radialGradient id="g4" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#4ECDB4" stopOpacity="0.25" />
        <stop offset="100%" stopColor="#4ECDB4" stopOpacity="0" />
      </radialGradient>
    </defs>
    <ellipse cx="150" cy="200" rx="130" ry="160" fill="url(#g4)" />
    {[0, 30, 60, 90, 120, 150].map((angle) => {
      const rad = (angle * Math.PI) / 180
      return (
        <line
          key={angle}
          x1={150 - 130 * Math.cos(rad)}
          y1={200 - 160 * Math.sin(rad)}
          x2={150 + 130 * Math.cos(rad)}
          y2={200 + 160 * Math.sin(rad)}
          stroke="#4ECDB4"
          strokeWidth="0.7"
          opacity="0.3"
        />
      )
    })}
    <ellipse cx="150" cy="200" rx="130" ry="160" fill="none" stroke="#4ECDB4" strokeWidth="1.5" opacity="0.6" />
    <ellipse cx="150" cy="200" rx="65" ry="80" fill="none" stroke="#4ECDB4" strokeWidth="1" opacity="0.4" />
    <circle cx="150" cy="200" r="8" fill="#4ECDB4" opacity="0.9" />
    <text x="150" y="380" textAnchor="middle" fill="#4ECDB4" fontSize="11" fontFamily="Inter, sans-serif" letterSpacing="4" opacity="0.7">ÓRBITA IV</text>
  </svg>
)

/* ───────────────────────── COMPONENTS ───────────────────────────── */

function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Catálogo', href: '#posters' },
    { label: 'Para artistas', href: '#como-funciona' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-ink/95 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="text-xl font-black tracking-[0.15em] text-white group-hover:text-teal transition-colors duration-200">
            MÍRAME
          </span>
          <span className="hidden sm:block text-xs font-medium text-teal/70 tracking-widest mt-0.5">
            POSTER SHOP
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#cta"
            className="px-4 py-2 rounded-full text-sm font-semibold bg-teal text-ink hover:bg-teal-light transition-all duration-200 hover:shadow-[0_0_20px_#4ECDB455]"
          >
            Unirse como artista
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-ink/98 border-t border-white/5 px-5 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-base font-medium text-white/80 hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#cta"
            onClick={() => setOpen(false)}
            className="w-full text-center px-4 py-3 rounded-full text-sm font-semibold bg-teal text-ink hover:bg-teal-light transition-all duration-200"
          >
            Unirse como artista
          </a>
        </div>
      )}
    </nav>
  )
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-teal/5 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-teal/3 blur-[80px]" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#4ECDB4 1px, transparent 1px), linear-gradient(90deg, #4ECDB4 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-4xl mx-auto px-5 text-center py-24">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal/30 bg-teal/5 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
          <span className="text-xs font-medium text-teal tracking-widest uppercase">
            Ahora en beta · Paraguay
          </span>
        </div>

        {/* Tagline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.05] tracking-tight mb-6">
          Tu arte,{' '}
          <span className="relative inline-block">
            <span className="text-teal">en las paredes</span>
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 300 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 6 Q75 1 150 5 Q225 9 300 4"
                stroke="#4ECDB4"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.5"
              />
            </svg>
          </span>
          <br />
          de todos
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-white/55 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Subís tu obra, nosotros generamos los mockups y gestionamos todo.
          Vos solo cobrás el{' '}
          <span className="text-white/80 font-medium">70% de cada venta</span>.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#cta"
            className="group flex items-center gap-2 px-7 py-3.5 rounded-full bg-teal text-ink font-bold text-base hover:bg-teal-light transition-all duration-200 hover:shadow-[0_0_30px_#4ECDB466] hover:-translate-y-0.5"
          >
            Quiero publicar mi arte
            <IconArrow />
          </a>
          <a
            href="#posters"
            className="flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/15 text-white/80 font-medium text-base hover:border-white/30 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
          >
            Ver catálogo
          </a>
        </div>
      </div>
    </section>
  )
}

function PosterGrid() {
  const posters = [
    { component: <Poster1 />, title: 'Cosmos I', artist: '@luna.studio', price: '₲ 85.000' },
    { component: <Poster2 />, title: 'Forma II', artist: '@geometrik', price: '₲ 95.000' },
    { component: <Poster3 />, title: 'Orden III', artist: '@simetria.py', price: '₲ 75.000' },
    { component: <Poster4 />, title: 'Órbita IV', artist: '@aurora.arts', price: '₲ 110.000' },
  ]

  return (
    <section id="posters" className="py-24 px-5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-teal mb-3">Catálogo</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Arte que habla por sí solo</h2>
          <p className="text-white/45 mt-3 max-w-md mx-auto">
            Diseños únicos de artistas locales, listos para imprimir en alta calidad.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {posters.map((p, i) => (
            <div
              key={i}
              className="group relative rounded-2xl overflow-hidden border border-white/5 bg-white/[0.02] hover:border-teal/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_#4ECDB420] cursor-pointer"
            >
              {/* Poster image */}
              <div className="aspect-[3/4] relative overflow-hidden">
                {p.component}
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-teal/0 group-hover:bg-teal/5 transition-colors duration-300" />
              </div>

              {/* Info */}
              <div className="p-4">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="font-semibold text-white text-sm">{p.title}</p>
                    <p className="text-white/40 text-xs mt-0.5">{p.artist}</p>
                  </div>
                  <span className="text-teal font-bold text-sm whitespace-nowrap">{p.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#cta"
            className="inline-flex items-center gap-2 text-sm font-medium text-teal/80 hover:text-teal transition-colors duration-200"
          >
            Ver todos los posters <IconArrow />
          </a>
        </div>
      </div>
    </section>
  )
}

function Stats() {
  const stats = [
    { value: '70%', label: 'para el artista', sub: 'en cada venta realizada' },
    { value: '$0', label: 'costo de entrada', sub: 'publicá gratis, siempre' },
    { value: '∞', label: 'mockups automáticos', sub: 'sin diseño extra de tu parte' },
  ]

  return (
    <section className="py-16 px-5 relative">
      {/* Divider line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-teal/30" />

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden">
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-ink px-8 py-10 text-center group hover:bg-white/[0.02] transition-colors duration-200"
            >
              <div className="text-5xl font-black text-teal mb-2 group-hover:scale-105 transition-transform duration-200">
                {s.value}
              </div>
              <div className="text-white font-semibold text-sm mb-1 uppercase tracking-wider">{s.label}</div>
              <div className="text-white/35 text-xs">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Subís tu obra',
      desc: 'Creá tu cuenta de artista y subí tus diseños en alta resolución. Aceptamos ilustración, fotografía, tipografía y más.',
    },
    {
      num: '02',
      title: 'Generamos mockups',
      desc: 'Nuestro sistema coloca tu arte automáticamente en mockups de sala, oficina y dormitorio. Sin Photoshop, sin esperar.',
    },
    {
      num: '03',
      title: 'Cobrás automático',
      desc: 'Cada vez que alguien compra uno de tus posters, recibís el 70% del precio directamente a tu cuenta. Sin fricción.',
    },
  ]

  return (
    <section id="como-funciona" className="py-24 px-5 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-teal/3 blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-teal mb-3">Proceso</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Cómo funciona</h2>
          <p className="text-white/45 mt-3 max-w-md mx-auto">
            Tres pasos y tu arte empieza a generar ingresos pasivos.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Connector line (desktop only) */}
          <div className="hidden md:block absolute top-10 left-[calc(33.3%+1rem)] right-[calc(33.3%+1rem)] h-px bg-gradient-to-r from-teal/40 via-teal/20 to-teal/40" />

          {steps.map((s, i) => (
            <div
              key={i}
              className="relative p-7 rounded-2xl border border-white/6 bg-white/[0.015] hover:border-teal/25 hover:bg-white/[0.03] transition-all duration-300 group"
            >
              {/* Step number */}
              <div className="text-6xl font-black text-teal/10 group-hover:text-teal/15 transition-colors duration-300 leading-none mb-4 select-none">
                {s.num}
              </div>
              {/* Dot indicator */}
              <div className="w-2 h-2 rounded-full bg-teal mb-4" />
              <h3 className="text-lg font-bold text-white mb-3">{s.title}</h3>
              <p className="text-white/45 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Benefits() {
  const items = [
    {
      icon: <IconMoney />,
      title: 'Comisión más alta del mercado',
      desc: 'El 70% de cada venta va directo a vos. Sin tarifas ocultas, sin subscripciones, sin trampa.',
    },
    {
      icon: <IconUpload />,
      title: 'Cero costo de entrada',
      desc: 'Publicá todos tus diseños gratis. Solo pagamos juntos cuando hay una venta real.',
    },
    {
      icon: <IconGlobe />,
      title: 'Alcance regional',
      desc: 'Tu arte llega a compradores de todo Paraguay y la región. Nosotros manejamos envíos y logística.',
    },
    {
      icon: <IconShield />,
      title: 'Tus derechos, protegidos',
      desc: 'Vos seguís siendo dueño de tu obra. Mírame solo gestiona las ventas, nunca te cedés el copyright.',
    },
  ]

  return (
    <section className="py-24 px-5">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-teal mb-3">Beneficios</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Diseñado para artistas</h2>
          <p className="text-white/45 mt-3 max-w-md mx-auto">
            Cada decisión que tomamos prioriza al creador.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {items.map((item, i) => (
            <div
              key={i}
              className="p-7 rounded-2xl border border-white/6 bg-white/[0.015] hover:border-teal/25 hover:bg-white/[0.025] transition-all duration-300 group hover:-translate-y-0.5"
            >
              <div className="mb-5 group-hover:scale-110 transition-transform duration-300 w-fit">
                {item.icon}
              </div>
              <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
              <p className="text-white/45 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setSubmitted(true)
  }

  return (
    <section id="cta" className="py-24 px-5 relative overflow-hidden">
      {/* Big glow behind */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[400px] rounded-full bg-teal/6 blur-[120px]" />
      </div>

      <div className="relative max-w-2xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal/30 bg-teal/5 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
          <span className="text-xs font-medium text-teal tracking-widest uppercase">Acceso anticipado</span>
        </div>

        <h2 className="text-4xl sm:text-5xl font-black mb-5 leading-tight">
          Empezá a vender<br />
          <span className="text-teal">hoy mismo</span>
        </h2>
        <p className="text-white/50 text-lg mb-10 max-w-md mx-auto">
          Dejanos tu email y te avisamos cuando abra el acceso anticipado para artistas.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              className="flex-1 px-5 py-3.5 rounded-full bg-white/5 border border-white/10 text-white placeholder-white/25 text-sm outline-none focus:border-teal/50 focus:bg-white/[0.07] transition-all duration-200"
            />
            <button
              type="submit"
              className="px-7 py-3.5 rounded-full bg-teal text-ink font-bold text-sm hover:bg-teal-light transition-all duration-200 hover:shadow-[0_0_25px_#4ECDB455] whitespace-nowrap"
            >
              Quiero entrar
            </button>
          </form>
        ) : (
          <div className="max-w-md mx-auto px-6 py-5 rounded-2xl border border-teal/30 bg-teal/5">
            <p className="text-teal font-semibold mb-1">¡Perfecto, {email}!</p>
            <p className="text-white/55 text-sm">Te avisamos cuando abramos el acceso. Mientras tanto, difundí la palabra.</p>
          </div>
        )}

        <p className="text-white/25 text-xs mt-5">
          Sin spam. Podés darte de baja cuando quieras.
        </p>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 px-5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-black text-sm tracking-[0.15em] text-white">MÍRAME</span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span className="text-white/30 text-xs">Poster Shop</span>
        </div>
        <p className="text-white/25 text-xs text-center sm:text-right">
          © 2025 Mírame Poster Shop · Paraguay
        </p>
      </div>
    </footer>
  )
}

/* ─────────────────────────── APP ROOT ──────────────────────────── */

export default function App() {
  return (
    <div className="min-h-screen bg-ink font-sans">
      <Nav />
      <main>
        <Hero />
        <PosterGrid />
        <Stats />
        <HowItWorks />
        <Benefits />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
