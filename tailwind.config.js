export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: { oswald: ['Oswald', 'sans-serif'], inter: ['Inter', 'sans-serif'] },
      colors: {
        brand: { primary: '#1A5276', accent: '#58D68D', light: '#EBF5FB', dark: '#0D2137' }
      }
    }
  },
  plugins: []
}
