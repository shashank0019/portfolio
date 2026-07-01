/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          900: '#0A0C10',
          800: '#0F131A',
          700: '#131820',
          600: '#1A2029',
          500: '#222A36',
        },
        ink: {
          100: '#F4F6F8',
          300: '#C7CFDA',
          500: '#8B95A5',
          700: '#5B6473',
        },
        signal: {
          DEFAULT: '#F2A33D',
          dim: '#B97A24',
          bright: '#FFC270',
        },
        wire: {
          DEFAULT: '#3FD0C9',
        },
      },
      fontFamily: {
        display: ['"JetBrains Mono"', 'monospace'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-faint':
          'linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)',
        'glow-radial':
          'radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(242,163,61,0.10), transparent 70%)',
      },
      boxShadow: {
        glass: '0 8px 32px rgba(0,0,0,0.45)',
        signal: '0 0 0 1px rgba(242,163,61,0.35), 0 0 24px rgba(242,163,61,0.15)',
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: 1 },
          '50%, 100%': { opacity: 0 },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
      animation: {
        blink: 'blink 1s steps(1) infinite',
        floaty: 'floaty 6s ease-in-out infinite',
        scanline: 'scanline 8s linear infinite',
      },
    },
  },
  plugins: [],
}
