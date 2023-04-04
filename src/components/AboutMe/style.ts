import { css } from "../../styles/stitches.config";

export const containerCss = css('section', {
  width: '100%',
  backgroundColor: '$dark100',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingInline: '2rem',
  paddingY: '5rem',

  '@lg': {
    paddingInline: '0rem 4rem',
    flexDirection: 'row',
    paddingY: 0,
  },

  '@xl': {
    paddingInline: '4rem 8rem',
  },

  '@xxl': {
    paddingInline: '8rem 10rem',
  }
})

export const myPhotoCss = css('img', {
  display: 'none',

  '@lg': {
    display: 'block',
    width: '400px',
  },

  '@xl': {
    width: '500px',
  },

  '@xxl': {
    width: '600px',
  }
})

export const contentCss = css('div', {
})

export const textAreaCss = css('div', {
  maxWidth: 800,
  paddingInline: '0.5rem',

  h1: {
    fontFamily: '$header',
    color: '$light400',
    fontSize: '2.3rem',
    textAlign: 'center',
  },

  p: {
    marginTop: '0.8rem',
    fontFamily: '$body',
    color: '$light400',
    fontSize: '1.1rem',
    textAlign: 'justify',
    fontWeight: '400',
  },

  '@md': {
    paddingInline: '3rem',
  },

  '@lg': {
    paddingInline: 0,

    h1: {
      textAlign: 'left',
    }
  }
})

export const stackListAreaCss = css('div', {
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'center',
  gap: 8,
  marginTop: '3.5rem',

  '@lg': {
    justifyContent: 'flex-start',
  }
})

export const stackItemCss = css('svg', {
  transition: '.3s',
  width: '50px',
  height: '50px',
  fill: '$light400',
  border: '1px solid transparent',
  padding: 8,
  borderRadius: 4,
  opacity: 0.5,

  '&:hover': {
    fill: '$light100',
    opacity: 1,
  }
})
