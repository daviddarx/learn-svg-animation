const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.vue', './components/**/*.vue', './layouts/**/*.vue'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Azeret Mono', ...defaultTheme.fontFamily.sans],
      },
      fontWeight: {
        normal: 500,
        bold: 800,
      },
      lineHeight: {
        relaxed: '1.8',
      },
      colors: {
        primary: colors.sky,
        secondary: colors.green,
      },
      transitionProperty: {
        text: 'color',
        bg: 'background-color',
      },
      transitionDuration: {
        text: '250ms',
        250: '250ms',
        350: '350ms',
        400: '400ms',
        450: '450ms',
        600: '600ms',
        800: '800ms',
        900: '900ms',
        1500: '1500ms',
      },
      transitionTimingFunction: {
        'in-quad': 'cubic-bezier(0.550, 0.085, 0.680, 0.530)',
        'out-quad': 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
        'in-out-quad': 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
        'in-cubic': 'cubic-bezier(0.550, 0.055, 0.675, 0.190)',
        'out-cubic': 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
        'in-out-cubic': 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
        'in-quart': 'cubic-bezier(0.895, 0.03, 0.685, 0.22)',
        'out-quart': 'cubic-bezier(0.165, 0.84, 0.44, 1)',
        'in-out-quart': 'cubic-bezier(0.77, 0, 0.175, 1)',
        'in-quint': 'cubic-bezier(0.755, 0.050, 0.855, 0.060)',
        'out-quint': 'cubic-bezier(0.230, 1.000, 0.320, 1.000)',
        'in-out-quint': 'cubic-bezier(0.860, 0.000, 0.070, 1.000)',
        'in-sine': 'cubic-bezier(0.470, 0.000, 0.745, 0.715)',
        'out-sine': 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
        'in-out-sine': 'cubic-bezier(0.445, 0.050, 0.550, 0.950)',
        'in-expo': 'cubic-bezier(0.950, 0.050, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.190, 1.000, 0.220, 1.000)',
        'in-out-expo': 'cubic-bezier(1.000, 0.000, 0.000, 1.000)',
        'in-circ': 'cubic-bezier(0.600, 0.040, 0.980, 0.335)',
        'out-circ': 'cubic-bezier(0.075, 0.820, 0.165, 1.000)',
        'in-out-circ': 'cubic-bezier(0.785, 0.135, 0.150, 0.860)',
        'in-back': 'cubic-bezier(0.600, -0.280, 0.735, 0.045)',
        'out-back': 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
        'in-out-back': 'cubic-bezier(0.680, -0.550, 0.265, 1.550)',
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
