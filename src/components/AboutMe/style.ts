import { css, styled } from "../../styles/stitches.config";

export const Container = styled('section', {
  width: '100%',
})

export const Content = styled('div', {
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '3rem 2rem',
  gap: '2.5rem',

  p: {
    fontFamily: '$body',
    fontSize: '1.3rem',
    textAlign: 'justify',
  },

  '@sm': {
    padding: '5rem 4rem',
  },
  
  '@md': {
    padding: '5rem 8rem',
  },
  
  '@lg': {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: '5rem 7rem',
  },

  '@xl': {
    padding: '5rem 12rem',
  },

  '@xxl': {
    padding: '5rem 18rem',
  }

})

export const myPhotoClass = css('img', {
  width: '230px !important',
  height: '230px !important',

  '@sm': {
    width: '300px !important',
    height: '300px !important',
  },

  '@md': {
    width: '300px !important',
    height: '300px !important',
  },

  '@lg': {
    width: '250px !important',
    height: '250px !important',
  },

  '@xxl': {
    width: '300px !important',
    height: '300px !important',
  }
})