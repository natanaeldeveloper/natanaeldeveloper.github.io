import { globalCss } from './stitches.config'

const globalStyle = globalCss({
  '@import': [
    "url('https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@100;200;300;400;500;600;700;800&Montserrat:wght@300;400;500;600;700&family=Open+Sans:wght@300;400;500;600;700&family=Yantramanav:wght@300;400;500;600;700&display=swap')"
  ],
  '*': {
    padding: 0,
    border: 0,
    margin: 0,
    boxSizing: 'border-box',
  },
  body: {
    fontFamily: '$body',
  },

  'div, ul, li': {
    // border: '1px solid white',
  },

  'html': {
    scrollBehavior:'smooth',
  },

  '.d-flex': {
    display: 'flex',
  },

  '.flex-column': {
    flexDirection: 'column',
  },

  '.w-100': {
    width: '100%',
  },

  '.p-0': {
    padding: '0rem',
  },

  '.p-1': {
    padding: '1rem',
  },

  '.p-2': {
    padding: '2rem',
  },

  '.p-3': {
    padding: '3rem',
  },

  '.p-4': {
    padding: '4rem',
  }

})

export default globalStyle
