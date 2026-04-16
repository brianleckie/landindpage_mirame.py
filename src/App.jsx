import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import CartDrawer from './components/CartDrawer.jsx'
import Hero from './components/Hero.jsx'
import Catalog from './components/Catalog.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import ForArtists from './components/ForArtists.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [cart, setCart] = useState([])
  const [activeCategory, setActiveCategory] = useState('Todos')
  const [drawerOpen, setDrawerOpen] = useState(false)

  function addToCart(product, size) {
    setCart(prev => [...prev, { ...product, size }])
  }

  function removeFromCart(index) {
    setCart(prev => prev.filter((_, i) => i !== index))
  }

  return (
    <div style={{ backgroundColor: '#0a0a0a', minHeight: '100vh' }}>
      <Navbar
        cartCount={cart.length}
        onCartClick={() => setDrawerOpen(true)}
      />
      <CartDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        items={cart}
        onRemove={removeFromCart}
      />
      <main>
        <Hero />
        <Catalog
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          onAddToCart={addToCart}
        />
        <HowItWorks />
        <ForArtists />
      </main>
      <Footer />
    </div>
  )
}
