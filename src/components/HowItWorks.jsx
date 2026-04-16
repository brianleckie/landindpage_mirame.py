const steps = [
  {
    num: '01',
    title: 'Explorá el catálogo',
    desc: 'Navegá por cientos de diseños únicos de artistas paraguayos. Filtrá por estilo, color y tamaño.',
  },
  {
    num: '02',
    title: 'Elegí tu tamaño',
    desc: 'Disponible en A4, A3, A2 y 50×70 cm. Cada tamaño impreso en papel de alta calidad.',
  },
  {
    num: '03',
    title: 'Recibí tu poster',
    desc: 'Coordinamos el pago y envío por WhatsApp. Entrega en todo Paraguay en 3-5 días hábiles.',
  },
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 px-4" style={{ backgroundColor: '#0d0d0d' }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">Cómo funciona</h2>
          <p className="text-gray-400">Conseguir tu poster favorito es simple</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.num} className="flex flex-col items-start gap-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center font-black text-sm flex-shrink-0" style={{ backgroundColor: 'rgba(78,205,180,0.12)', color: '#4ECDB4', border: '1px solid rgba(78,205,180,0.3)' }}>
                {step.num}
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
