/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neural-dark': '#0A0F1F',
        'neural-cyan': '#0EF6CC',
        'neural-card': '#222C3A',
        'neural-text': '#FAFAFA',
      },
      fontFamily: {
        'space': ['Space Grotesk', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'typewriter': 'typewriter 4s steps(40) 1s forwards',
        'fadeInUp': 'fadeInUp 0.8s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #0EF6CC, 0 0 10px #0EF6CC' },
          '100%': { boxShadow: '0 0 10px #0EF6CC, 0 0 20px #0EF6CC, 0 0 30px #0EF6CC' },
        },
        typewriter: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'neural-gradient': 'linear-gradient(135deg, #0EF6CC, #6A5ACD)',
        'grid-pattern': 'radial-gradient(circle at 1px 1px, rgba(14, 246, 204, 0.15) 1px, transparent 0)',
      },
    },
  },
  plugins: [],
}
