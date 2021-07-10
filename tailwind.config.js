module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'viola' : '#C074B2',
        'valhalla' : '#2A1E5E',
        'ebony' : '#110D23',
        'eminence' : '#692B7E',
        'eminence-purple' : '#552D86',
        'vivid-violet' : '#842D91',
        'haiti' : '#121130',
        'bunting' : '#1D124E',
        'plum-web' : '#E0B1E7',
        'french-mauve' : '#CD82D9',
        'pink-lavender' : '#E6C0EC'
      },
      sizing: {
        '1.5' : '6rem',
        '192' : '48rem',
        '160' : '40rem',
        '128' : '32rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}