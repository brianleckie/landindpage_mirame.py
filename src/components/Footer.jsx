export default function Footer() {
  return (
    <footer className="py-12 px-4" style={{ backgroundColor: '#080808', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-10">
          {/* Brand */}
          <div className="max-w-xs">
            <img src="/logo.svg" alt="Mírame Poster Shop" className="h-8 w-auto mb-3" />
            <p className="text-gray-500 text-sm leading-relaxed">
              Marketplace de arte independiente paraguayo. Conectamos artistas con personas que quieren vivir rodeadas de arte.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-12">
            <div>
              <p className="text-white text-sm font-semibold mb-3">Comprar</p>
              <ul className="flex flex-col gap-2">
                {['Explorar catálogo', 'Categorías', 'Novedades', 'Más vendidos'].map(l => (
                  <li key={l}><a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-white text-sm font-semibold mb-3">Artistas</p>
              <ul className="flex flex-col gap-2">
                {['Unirse', 'Cómo funciona', 'Ganancias', 'Soporte'].map(l => (
                  <li key={l}><a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-white text-sm font-semibold mb-3">Legal</p>
              <ul className="flex flex-col gap-2">
                {['Términos de uso', 'Privacidad', 'Cookies'].map(l => (
                  <li key={l}><a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-3 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <p className="text-gray-600 text-xs">© 2025 Mírame Poster Shop. Todos los derechos reservados.</p>
          <p className="text-gray-600 text-xs">Hecho con amor en Paraguay 🇵🇾</p>
        </div>
      </div>
    </footer>
  )
}
