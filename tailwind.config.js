/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Palet mewah: hitam pekat + aksen emas + teks krem
        ink: {
          DEFAULT: '#0b0a08', // latar utama (hampir hitam, hangat)
          800: '#121009',
          700: '#1a1710',
          600: '#241f15',
        },
        gold: {
          DEFAULT: '#c9a24b',
          light: '#e6c878',
          deep: '#a07d2e',
        },
        cream: {
          DEFAULT: '#f3e9d2',
          dim: '#cdc3ad',
        },
      },
      fontFamily: {
        // Serif untuk judul, sans-serif untuk body
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        gold: '0 10px 40px -12px rgba(201, 162, 75, 0.45)',
        'gold-sm': '0 4px 18px -6px rgba(201, 162, 75, 0.35)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #e6c878 0%, #c9a24b 45%, #a07d2e 100%)',
        'radial-glow': 'radial-gradient(60% 60% at 50% 0%, rgba(201,162,75,0.18) 0%, rgba(11,10,8,0) 70%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out both',
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [],
}
