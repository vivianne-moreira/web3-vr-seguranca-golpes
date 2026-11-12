/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        display: ['Sora', '"DM Sans"', 'system-ui', 'sans-serif']
      },
      colors: {
        ink: { 950: '#050304', 900: '#0D0608', 800: '#1A0B10', 700: '#2E1119' },
        volt: '#C8304D',
        wave: '#8B1E3F',
        wine: '#5E0F20',
        aqua: '#FF6B86',
        mint: '#34D399',
        alarm: '#FF8A5C'
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-14px)' } },
        floatB: { '0%,100%': { transform: 'translateY(0) rotate(-3deg)' }, '50%': { transform: 'translateY(12px) rotate(2deg)' } },
        spin: { to: { transform: 'rotate(360deg)' } },
        marquee: { to: { transform: 'translateX(-50%)' } },
        aurora: { '0%,100%': { transform: 'translate(0,0) scale(1)' }, '50%': { transform: 'translate(6%,-5%) scale(1.15)' } },
        pop: { '0%': { transform: 'scale(.9)', opacity: '0' }, '100%': { transform: 'scale(1)', opacity: '1' } },
        shake: { '0%,100%': { transform: 'translateX(0)' }, '25%': { transform: 'translateX(-6px)' }, '75%': { transform: 'translateX(6px)' } },
        toss: {
          '0%,22%': { transform: 'translate(0,0) rotate(0)', opacity: '1' },
          '55%': { transform: 'translate(-30px,170px) rotate(-14deg)', opacity: '1' },
          '70%,100%': { transform: 'translate(-40px,215px) rotate(-22deg) scale(.4)', opacity: '0' }
        },
        rise: { from: { opacity: '0', transform: 'translateY(28px)' }, to: { opacity: '1', transform: 'none' } },
        burst: { '0%': { transform: 'translate(0,0) scale(1)', opacity: '1' }, '100%': { transform: 'translate(var(--dx),var(--dy)) scale(0)', opacity: '0' } },
        pulseRing: { '0%': { transform: 'scale(.8)', opacity: '.7' }, '100%': { transform: 'scale(1.6)', opacity: '0' } }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        floatB: 'floatB 7s ease-in-out infinite',
        'spin-slow': 'spin 40s linear infinite',
        'spin-rev': 'spin 60s linear infinite reverse',
        marquee: 'marquee 38s linear infinite',
        aurora: 'aurora 16s ease-in-out infinite',
        pop: 'pop .3s ease-out',
        shake: 'shake .35s ease-in-out',
        toss: 'toss 6s ease-in infinite',
        rise: 'rise .9s cubic-bezier(.2,.8,.2,1) both',
        pulseRing: 'pulseRing 2.4s ease-out infinite'
      }
    }
  },
  plugins: []
}
