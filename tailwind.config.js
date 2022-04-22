const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{html,js,vue}'],
  theme: {
    extend: {
      colors: {
        primary: colors.sky,
        secondary: colors.green,
      },
      spacing: {
        '5vw': '5vw',
        '10vw': '10vw',
      },
      transitionProperty: {
        text: 'color',
      },
      transitionDuration: {
        text: '250ms',
      },
    },
    screens: {
      'desktop-2xl': { max: '1920px' },
      'desktop-xl': { max: '1440px' },
      desktop: { max: '1280px' },
      tablet: { max: '1024px' },
      'tablet-s': { max: '768px' },
      mobile: { max: '560px' },
      'mobile-s': { max: '320px' },
    },
  },
  plugins: [],
}
