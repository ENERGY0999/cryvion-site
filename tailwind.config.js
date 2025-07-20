/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: '#0A0F23',        // Very dark blue-black background
        textPrimary: '#E0E7FF',      // Soft off-white with blue tint
        neonBlue: '#00BFFF',         // Electric blue neon accent
        neonViolet: '#8A2BE2',       // Violet accent
        glassBg: 'rgba(10, 15, 35, 0.6)', // Frosted glass dark panel
        glassBorder: 'rgba(138, 43, 226, 0.5)', // Neon violet border
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        orbitron: ['Orbitron', 'sans-serif'],
      },
      boxShadow: {
        'neon-blue': '0 0 12px #00BFFF, 0 0 24px #00BFFF88',
        'neon-violet': '0 0 12px #8A2BE2, 0 0 24px #8A2BE288',
      },
      backdropBlur: {
        xs: '4px',
      },
    },
  },
  plugins: [],
}
