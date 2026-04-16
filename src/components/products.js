export const SIZES = [
  { label: 'A4', price: 120000 },
  { label: 'A3', price: 180000 },
  { label: 'A2', price: 250000 },
  { label: '50×70', price: 290000 },
]

export const products = [
  {
    id: 1,
    name: 'Cosmos I',
    artist: 'Valentina Ríos',
    category: 'Abstracto',
    art: `<svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
      <rect width="300" height="400" fill="#0d0d1a"/>
      <circle cx="150" cy="200" r="120" fill="none" stroke="#4ECDB4" stroke-width="0.5" opacity="0.6"/>
      <circle cx="150" cy="200" r="80" fill="none" stroke="#4ECDB4" stroke-width="0.3" opacity="0.4"/>
      <circle cx="150" cy="200" r="40" fill="none" stroke="#ffffff" stroke-width="0.8" opacity="0.3"/>
      <circle cx="150" cy="80" r="4" fill="#4ECDB4" opacity="0.9"/>
      <circle cx="220" cy="150" r="2" fill="#ffffff" opacity="0.7"/>
      <circle cx="90" cy="280" r="3" fill="#4ECDB4" opacity="0.6"/>
      <circle cx="200" cy="300" r="2" fill="#ffffff" opacity="0.5"/>
      <circle cx="60" cy="180" r="1.5" fill="#4ECDB4" opacity="0.8"/>
      <line x1="150" y1="80" x2="220" y2="150" stroke="#4ECDB4" stroke-width="0.3" opacity="0.3"/>
      <line x1="220" y1="150" x2="200" y2="300" stroke="#ffffff" stroke-width="0.2" opacity="0.2"/>
    </svg>`,
  },
  {
    id: 2,
    name: 'Forma II',
    artist: 'Diego Marecos',
    category: 'Geométrico',
    art: `<svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
      <rect width="300" height="400" fill="#0a1a10"/>
      <polygon points="150,60 260,340 40,340" fill="none" stroke="#4ECDB4" stroke-width="1.5"/>
      <polygon points="150,100 230,310 70,310" fill="none" stroke="#4ECDB4" stroke-width="0.8" opacity="0.6"/>
      <polygon points="150,140 200,280 100,280" fill="none" stroke="#ffffff" stroke-width="0.5" opacity="0.4"/>
      <line x1="150" y1="60" x2="150" y2="340" stroke="#4ECDB4" stroke-width="0.3" opacity="0.3"/>
    </svg>`,
  },
  {
    id: 3,
    name: 'Orden III',
    artist: 'Luciana Paredes',
    category: 'Minimalista',
    art: `<svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
      <rect width="300" height="400" fill="#111111"/>
      <line x1="60" y1="100" x2="240" y2="100" stroke="#4ECDB4" stroke-width="2"/>
      <line x1="60" y1="140" x2="200" y2="140" stroke="#ffffff" stroke-width="0.5" opacity="0.5"/>
      <line x1="60" y1="170" x2="220" y2="170" stroke="#ffffff" stroke-width="0.5" opacity="0.5"/>
      <line x1="60" y1="200" x2="180" y2="200" stroke="#ffffff" stroke-width="0.5" opacity="0.5"/>
      <line x1="60" y1="230" x2="240" y2="230" stroke="#4ECDB4" stroke-width="1"/>
      <line x1="60" y1="280" x2="160" y2="280" stroke="#ffffff" stroke-width="0.5" opacity="0.3"/>
      <rect x="60" y="310" width="30" height="30" fill="#4ECDB4" opacity="0.8"/>
    </svg>`,
  },
  {
    id: 4,
    name: 'Órbita IV',
    artist: 'Andrés Villalba',
    category: 'Abstracto',
    art: `<svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
      <rect width="300" height="400" fill="#0a0a0a"/>
      <ellipse cx="150" cy="200" rx="130" ry="60" fill="none" stroke="#4ECDB4" stroke-width="1" opacity="0.7"/>
      <ellipse cx="150" cy="200" rx="130" ry="60" fill="none" stroke="#4ECDB4" stroke-width="1" opacity="0.7" transform="rotate(60 150 200)"/>
      <ellipse cx="150" cy="200" rx="130" ry="60" fill="none" stroke="#4ECDB4" stroke-width="1" opacity="0.7" transform="rotate(120 150 200)"/>
      <circle cx="150" cy="200" r="10" fill="#ffffff" opacity="0.9"/>
    </svg>`,
  },
  {
    id: 5,
    name: 'Brote',
    artist: 'Sofía Benítez',
    category: 'Botánico',
    art: `<svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
      <rect width="300" height="400" fill="#0a1208"/>
      <line x1="150" y1="380" x2="150" y2="100" stroke="#4ECDB4" stroke-width="1.5"/>
      <path d="M150 280 Q100 240 80 180 Q120 200 150 240" fill="#4ECDB4" opacity="0.5"/>
      <path d="M150 220 Q200 180 230 130 Q190 160 150 200" fill="#4ECDB4" opacity="0.5"/>
      <path d="M150 160 Q110 120 100 80 Q140 110 150 150" fill="#4ECDB4" opacity="0.35"/>
      <circle cx="150" cy="95" r="8" fill="#4ECDB4" opacity="0.9"/>
    </svg>`,
  },
  {
    id: 6,
    name: 'Asunción 2050',
    artist: 'Rodrigo Aquino',
    category: 'Arquitectura',
    art: `<svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
      <rect width="300" height="400" fill="#080810"/>
      <rect x="40" y="300" width="220" height="80" fill="#1a1a2e"/>
      <rect x="60" y="220" width="30" height="80" fill="#0f0f1a" stroke="#4ECDB4" stroke-width="0.5"/>
      <rect x="100" y="180" width="40" height="120" fill="#0f0f1a" stroke="#4ECDB4" stroke-width="0.5"/>
      <rect x="150" y="140" width="50" height="160" fill="#0f0f1a" stroke="#4ECDB4" stroke-width="0.5"/>
      <rect x="210" y="200" width="30" height="100" fill="#0f0f1a" stroke="#4ECDB4" stroke-width="0.5"/>
      <line x1="40" y1="300" x2="260" y2="300" stroke="#4ECDB4" stroke-width="1"/>
      <rect x="160" y="155" width="6" height="8" fill="#4ECDB4" opacity="0.6"/>
      <rect x="170" y="155" width="6" height="8" fill="#4ECDB4" opacity="0.6"/>
    </svg>`,
  },
  {
    id: 7,
    name: 'Selva',
    artist: 'Camila Ortega',
    category: 'Naturaleza',
    art: `<svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
      <rect width="300" height="400" fill="#060e06"/>
      <path d="M0 350 Q75 280 150 320 Q225 280 300 350 L300 400 L0 400Z" fill="#0d1f0d"/>
      <path d="M50 350 Q80 270 110 310 Q130 260 150 290 Q170 260 190 310 Q220 270 250 350" fill="none" stroke="#4ECDB4" stroke-width="0.8" opacity="0.6"/>
      <circle cx="150" cy="180" r="60" fill="#0d1f0d" opacity="0.8"/>
      <circle cx="80" cy="230" r="45" fill="#0d1f0d" opacity="0.7"/>
      <circle cx="220" cy="220" r="50" fill="#0d1f0d" opacity="0.7"/>
      <circle cx="150" cy="180" r="60" fill="none" stroke="#4ECDB4" stroke-width="0.5" opacity="0.4"/>
    </svg>`,
  },
  {
    id: 8,
    name: 'Bauhaus PY',
    artist: 'Fernando Duarte',
    category: 'Tipografía',
    art: `<svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
      <rect width="300" height="400" fill="#0a0a0a"/>
      <text x="30" y="160" font-family="serif" font-size="120" fill="#4ECDB4" opacity="0.15" font-weight="900">PY</text>
      <text x="30" y="240" font-family="sans-serif" font-size="14" fill="#4ECDB4" letter-spacing="8">PARAGUAY</text>
      <text x="30" y="265" font-family="sans-serif" font-size="9" fill="#ffffff" opacity="0.4" letter-spacing="4">ARTE INDEPENDIENTE</text>
      <line x1="30" y1="275" x2="270" y2="275" stroke="#4ECDB4" stroke-width="0.5"/>
      <rect x="30" y="60" width="4" height="140" fill="#4ECDB4"/>
    </svg>`,
  },
  {
    id: 9,
    name: 'Red',
    artist: 'Jimena Cáceres',
    category: 'Geométrico',
    art: `<svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
      <rect width="300" height="400" fill="#0a0a0a"/>
      <line x1="0" y1="0" x2="300" y2="400" stroke="#4ECDB4" stroke-width="0.3" opacity="0.3"/>
      <line x1="100" y1="0" x2="300" y2="267" stroke="#4ECDB4" stroke-width="0.3" opacity="0.3"/>
      <line x1="200" y1="0" x2="300" y2="133" stroke="#4ECDB4" stroke-width="0.3" opacity="0.3"/>
      <line x1="300" y1="0" x2="0" y2="400" stroke="#ffffff" stroke-width="0.2" opacity="0.2"/>
      <line x1="0" y1="133" x2="200" y2="400" stroke="#ffffff" stroke-width="0.2" opacity="0.2"/>
      <line x1="0" y1="267" x2="100" y2="400" stroke="#ffffff" stroke-width="0.2" opacity="0.2"/>
      <circle cx="150" cy="200" r="3" fill="#4ECDB4"/>
      <circle cx="100" cy="133" r="2" fill="#4ECDB4" opacity="0.6"/>
      <circle cx="200" cy="267" r="2" fill="#4ECDB4" opacity="0.6"/>
    </svg>`,
  },
  {
    id: 10,
    name: 'Hoja Palma',
    artist: 'Isabel Rojas',
    category: 'Botánico',
    art: `<svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
      <rect width="300" height="400" fill="#0a0e08"/>
      <path d="M150 380 C150 380 150 200 200 100 C230 50 260 60 260 60 C260 60 220 90 190 160 C160 230 150 380 150 380Z" fill="#4ECDB4" opacity="0.25"/>
      <path d="M150 380 C150 380 150 200 100 100 C70 50 40 60 40 60 C40 60 80 90 110 160 C140 230 150 380 150 380Z" fill="#4ECDB4" opacity="0.2"/>
      <path d="M150 380 C140 300 130 220 80 160" stroke="#4ECDB4" stroke-width="1" fill="none" opacity="0.5"/>
      <path d="M150 380 C160 300 170 220 220 160" stroke="#4ECDB4" stroke-width="1" fill="none" opacity="0.5"/>
      <line x1="150" y1="380" x2="150" y2="60" stroke="#4ECDB4" stroke-width="1.2" opacity="0.6"/>
    </svg>`,
  },
  {
    id: 11,
    name: 'Vacío',
    artist: 'Martín Fleitas',
    category: 'Minimalista',
    art: `<svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
      <rect width="300" height="400" fill="#0a0a0a"/>
      <circle cx="150" cy="200" r="60" fill="none" stroke="#4ECDB4" stroke-width="1.5"/>
      <circle cx="150" cy="200" r="2" fill="#4ECDB4"/>
    </svg>`,
  },
  {
    id: 12,
    name: 'Ruta 1',
    artist: 'Carolina Villasboa',
    category: 'Naturaleza',
    art: `<svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
      <rect width="300" height="400" fill="#07090f"/>
      <path d="M0 300 Q75 260 150 280 Q225 260 300 300" fill="none" stroke="#4ECDB4" stroke-width="0.8" opacity="0.5"/>
      <path d="M0 330 Q75 290 150 310 Q225 290 300 330" fill="none" stroke="#4ECDB4" stroke-width="0.5" opacity="0.3"/>
      <rect x="0" y="330" width="300" height="70" fill="#0d1117"/>
      <circle cx="60" cy="180" r="30" fill="#1a1a0a" opacity="0.8"/>
      <circle cx="200" cy="160" r="45" fill="#1a1a0a" opacity="0.8"/>
      <circle cx="130" cy="200" r="35" fill="#1a1a0a" opacity="0.6"/>
      <line x1="0" y1="330" x2="300" y2="330" stroke="#4ECDB4" stroke-width="1"/>
      <circle cx="240" cy="90" r="25" fill="#1a1500" opacity="0.4"/>
      <circle cx="240" cy="90" r="25" fill="none" stroke="#4ECDB4" stroke-width="0.5" opacity="0.4"/>
    </svg>`,
  },
]
