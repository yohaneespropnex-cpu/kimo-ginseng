import { StrictMode } from 'react'
import { hydrateRoot, createRoot } from 'react-dom/client'
// Font self-host (same-origin, tanpa request render-blocking ke Google Fonts).
// Hanya subset latin + weight yang benar-benar dipakai.
import '@fontsource/cormorant-garamond/latin-600.css'
import '@fontsource/cormorant-garamond/latin-700.css'
import '@fontsource/inter/latin-400.css'
import '@fontsource/inter/latin-500.css'
import '@fontsource/inter/latin-600.css'
import '@fontsource/oswald/latin-600.css'
import './index.css'
import App from './App.tsx'

const root = document.getElementById('root')!
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// HTML sudah di-prerender saat build (scripts/prerender.mjs) → hydrate.
// Saat `npm run dev` root masih kosong → render biasa.
if (root.firstElementChild) {
  hydrateRoot(root, app)
} else {
  createRoot(root).render(app)
}
