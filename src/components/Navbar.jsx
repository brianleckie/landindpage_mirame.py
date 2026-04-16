import { useState } from 'react'
import { SearchIcon, CartIcon, MenuIcon, CloseIcon } from './icons.jsx'

export default function Navbar({ cartCount, onCartClick }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full" style={{ backdropFilter: 'blur(12px)', backgroundColor: 'rgba(10,10,10,0.85)', borderBottom: '1px solid rgba(78,205,180,0.1)' }}>
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="#" className="flex-shrink-0">
          <img src="/logo.svg" alt="Mírame Poster Shop" className="h-8 w-auto" />
        </a>

        {/* Links — desktop */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#catalogo" className="text-sm text-gray-400 hover:text-white transition-colors">Explorar</a>
          <a href="#artistas" className="text-sm text-gray-400 hover:text-white transition-colors">Artistas</a>
          <a href="#como-funciona" className="text-sm text-gray-400 hover:text-white transition-colors">Cómo funciona</a>
        </div>

        {/* Search */}
        <div className="hidden md:flex flex-1 max-w-xs items-center gap-2 px-3 py-1.5 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
          <SearchIcon size={15} className="text-gray-500 flex-shrink-0" />
          <input
            type="text"
            placeholder="Buscar posters, artistas..."
            className="bg-transparent text-sm text-white placeholder-gray-500 outline-none w-full"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Cart */}
          <button onClick={onCartClick} className="relative p-2 text-gray-300 hover:text-white transition-colors" aria-label="Carrito">
            <CartIcon size={22} />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] rounded-full text-[10px] font-bold flex items-center justify-center px-1" style={{ backgroundColor: '#4ECDB4', color: '#0a0a0a' }}>
                {cartCount}
              </span>
            )}
          </button>

          {/* CTA button — desktop */}
          <a href="#artistas" className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-colors" style={{ border: '1.5px solid #4ECDB4', color: '#4ECDB4' }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#4ECDB4'; e.currentTarget.style.color = '#0a0a0a' }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#4ECDB4' }}
          >
            Unirse como artista
          </a>

          {/* Hamburger — mobile */}
          <button className="md:hidden p-2 text-gray-400" onClick={() => setMenuOpen(o => !o)}>
            {menuOpen ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3" style={{ backgroundColor: 'rgba(10,10,10,0.95)' }}>
          <a href="#catalogo" className="text-sm text-gray-300 py-2" onClick={() => setMenuOpen(false)}>Explorar</a>
          <a href="#artistas" className="text-sm text-gray-300 py-2" onClick={() => setMenuOpen(false)}>Artistas</a>
          <a href="#como-funciona" className="text-sm text-gray-300 py-2" onClick={() => setMenuOpen(false)}>Cómo funciona</a>
          <div className="flex items-center gap-2 px-3 py-2 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <SearchIcon size={15} className="text-gray-500" />
            <input type="text" placeholder="Buscar..." className="bg-transparent text-sm text-white placeholder-gray-500 outline-none w-full" />
          </div>
        </div>
      )}
    </nav>
  )
}
