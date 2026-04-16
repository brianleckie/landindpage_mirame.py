const CATEGORIES = ['Todos', 'Abstracto', 'Naturaleza', 'Arquitectura', 'Tipografía', 'Minimalista', 'Botánico', 'Geométrico']

export default function CategoryPills({ active, onChange }) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {CATEGORIES.map(cat => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className="px-4 py-2 rounded-full text-sm font-medium transition-all"
          style={
            active === cat
              ? { backgroundColor: '#4ECDB4', color: '#0a0a0a' }
              : { backgroundColor: 'rgba(255,255,255,0.05)', color: '#aaaaaa', border: '1px solid rgba(255,255,255,0.1)' }
          }
        >
          {cat}
        </button>
      ))}
    </div>
  )
}
