import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// `base: './'` menggunakan path relatif sehingga build dapat di-host di
// GitHub Pages "project site" (mis. https://user.github.io/nama-repo/) TANPA
// perlu mengubah nama repo. Jika kamu memakai custom domain atau "user site"
// (https://user.github.io/), ini tetap berfungsi.
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
})
