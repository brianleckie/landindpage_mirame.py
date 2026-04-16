import { useState } from 'react'
import { SIZES } from './products.js'

function fmt(n) {
  return '₲ ' + n.toLocaleString('es-PY')
}

export default function ProductCard({ product, onAddToCart }) {
  const [selectedSize, setSelectedSize] = useState(SIZES[0])
  const [added, setAdded] = useState(false)

  function handleAdd() {
    onAddToCart(product, selectedSize)
    setAdded(true)
    setTimeout(() => setAdded(false), 1400)
  }

  return (
    <div className="rounded-2xl overflow-hidden flex flex-col group" style={{ backgroundColor: '#111111', border: '1px solid rgba(255,255,255,0.07)' }}>
      {/* Art */}
      <div
        className="w-full overflow-hidden"
        style={{ aspectRatio: '3/4', backgroundColor: '#0d0d0d' }}
        dangerouslySetInnerHTML={{ __html: product.art }}
      />

      {/* Info */}
      <div className="p-4 flex flex-col gap-2 flex-1">
        <div>
          <h3 className="text-white font-semibold text-sm leading-tight">{product.name}</h3>
          <p className="text-xs mt-0.5" style={{ color: '#4ECDB4' }}>{product.artist}</p>
        </div>

        {/* Size selector */}
        <select
          value={selectedSize.label}
          onChange={e => setSelectedSize(SIZES.find(s => s.label === e.target.value))}
          className="w-full text-xs rounded-lg px-2 py-1.5 outline-none cursor-pointer"
          style={{ backgroundColor: '#1a1a1a', color: '#cccccc', border: '1px solid rgba(255,255,255,0.1)' }}
        >
          {SIZES.map(s => (
            <option key={s.label} value={s.label}>{s.label} — {fmt(s.price)}</option>
          ))}
        </select>

        {/* Price + button */}
        <div className="flex items-center justify-between mt-auto pt-1">
          <span className="text-white font-bold text-sm">{fmt(selectedSize.price)}</span>
          <button
            onClick={handleAdd}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
            style={{
              backgroundColor: added ? 'rgba(78,205,180,0.15)' : '#4ECDB4',
              color: added ? '#4ECDB4' : '#0a0a0a',
              border: added ? '1px solid #4ECDB4' : 'none',
            }}
          >
            {added ? '✓ Agregado' : 'Agregar al carrito'}
          </button>
        </div>
      </div>
    </div>
  )
}
