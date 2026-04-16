import { products } from './products.js'
import ProductCard from './ProductCard.jsx'
import CategoryPills from './CategoryPills.jsx'

export default function Catalog({ activeCategory, onCategoryChange, onAddToCart }) {
  const filtered = activeCategory === 'Todos'
    ? products
    : products.filter(p => p.category === activeCategory)

  return (
    <section id="catalogo" className="py-20 px-4" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">Catálogo</h2>
          <p className="text-gray-400 text-base">Arte original de artistas paraguayos, listo para imprimir</p>
        </div>

        <div className="mb-8">
          <CategoryPills active={activeCategory} onChange={onCategoryChange} />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filtered.map(product => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-600">No hay posters en esta categoría aún.</div>
        )}
      </div>
    </section>
  )
}
