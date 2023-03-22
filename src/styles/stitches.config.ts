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
  theme
} = createStitches({
  media: {
    xs: '(min-width: 0px)',
    sm: '(min-width: 576px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 992px)',
    xl: '(min-width: 1200px)',
    xxl: '(min-width: 1400px)',
  },
  theme: {
    colors: {

      primary: '#0056d3',

      // light scales
      light100: '#FFFFFF',
      light200: '#F8F9FA',
      light300: '#E9ECEF',
      light400: '#DEE2E6',
      light500: '#CED4DA',

      // dark scales
      dark100: '#000000',
      dark200: '#212529',
      dark300: '#343A40',
      dark400: '#495057',
      dark500: '#6C757D',
      dark600: '#ADB5BD',
    },
    fonts: {
      header: "'Montserrat', sans-serif",
      caption: "'Open Sans', sans-serif",
      body: "'Yantramanav', sans-serif",
    }
  },
  utils: {
    paddingY: (value: any) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    borderY: (value: any) => ({
      borderTop: value,
      borderBottom: value,
    }),
  }
})