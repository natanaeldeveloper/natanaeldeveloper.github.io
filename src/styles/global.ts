import { globalCss } from './stitches.config'

const globalStyle = globalCss({
  '@import': [
    "url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Open+Sans:wght@300;400&family=Yantramanav&display=swap')"
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

  div: {
    border: '1px solid black',
  }
})

export default globalStyle