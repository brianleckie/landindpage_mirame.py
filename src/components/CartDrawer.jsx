import { CloseIcon, WhatsAppIcon, TrashIcon } from './icons.jsx'

function fmt(n) {
  return '₲ ' + n.toLocaleString('es-PY')
}

export default function CartDrawer({ open, onClose, items, onRemove }) {
  const subtotal = items.reduce((acc, item) => acc + item.size.price, 0)

  function buildWhatsAppUrl() {
    if (items.length === 0) return '#'
    const list = items.map(item => `• ${item.name} (${item.size.label}) — ${fmt(item.size.price)}`).join('\n')
    const text = `Hola! Me gustaría comprar los siguientes posters de Mírame Poster Shop:\n\n${list}\n\nTotal: ${fmt(subtotal)}`
    return `https://wa.me/595981000000?text=${encodeURIComponent(text)}`
  }

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-40"
          style={{ backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(2px)' }}
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className="fixed top-0 right-0 h-full z-50 flex flex-col w-80 max-w-full"
        style={{
          backgroundColor: '#111111',
          borderLeft: '1px solid rgba(78,205,180,0.15)',
          transform: open ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s ease',
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <h2 className="font-semibold text-white text-base">Tu carrito</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors p-1">
            <CloseIcon size={18} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-5 py-4 flex flex-col gap-4">
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center py-16">
              <div className="text-4xl mb-3">🖼️</div>
              <p className="text-gray-400 text-sm">Tu carrito está vacío</p>
              <p className="text-gray-600 text-xs mt-1">Explorá el catálogo y encontrá tu poster</p>
            </div>
          ) : (
            items.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                {/* SVG thumbnail */}
                <div className="w-12 h-16 rounded overflow-hidden flex-shrink-0" style={{ backgroundColor: '#1a1a1a' }}
                  dangerouslySetInnerHTML={{ __html: item.art }}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm font-medium truncate">{item.name}</p>
                  <p className="text-xs mt-0.5" style={{ color: '#4ECDB4' }}>{item.artist}</p>
                  <p className="text-gray-400 text-xs mt-0.5">Tamaño: {item.size.label}</p>
                  <p className="text-white text-sm font-semibold mt-1">{fmt(item.size.price)}</p>
                </div>
                <button onClick={() => onRemove(i)} className="text-gray-600 hover:text-red-400 transition-colors mt-0.5 flex-shrink-0">
                  <TrashIcon size={15} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="px-5 py-4" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-400 text-sm">Subtotal</span>
            <span className="text-white font-bold">{fmt(subtotal)}</span>
          </div>
          <p className="text-gray-600 text-xs mb-3">* Envío coordinado por WhatsApp</p>
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-opacity"
            style={{
              backgroundColor: items.length > 0 ? '#25D366' : '#2a2a2a',
              color: items.length > 0 ? '#ffffff' : '#555555',
              pointerEvents: items.length === 0 ? 'none' : 'auto',
            }}
          >
            <WhatsAppIcon size={18} />
            Pedir por WhatsApp
          </a>
        </div>
      </div>
    </>
  )
}
