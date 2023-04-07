import { createStitches } from '@stitches/react'

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  prefix,
  reset,
  styled,
  theme, 
} = createStitches({
  media: {
    bp1: '(min-width: 640px)',
    bp2: '(min-width: 768px)',
    bp3: '(min-width: 1024px)',
    bp4: '(min-width: 1280px)',
  },
  theme: {
    colors: {
        primary: '#005de9',
        secundary: '#0056d3',
    },
    fonts: {
      header: "'Montserrat', sans-serif",
      caption: "'Average Sans', sans-serif",
      body: "'Palanquin', sans-serif",
    },
    sizes: {

    },
  },
  utils: {
  }
})

