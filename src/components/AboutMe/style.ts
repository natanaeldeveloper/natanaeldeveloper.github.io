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
    paddingInline: '4rem',
  },
  
  '@md': {
    paddingInline: '8rem',
    paddingY: '5rem',
  },
  
  '@lg': {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingInline: '7rem',
    paddingY: '10rem',
  },

  '@xl': {
    paddingInline: '12rem',
  },

  '@xxl': {
    paddingInline: '18rem',
  }

})

export const MyPhoto = styled('img', {
  width: '230px !important',

  '@sm': {
    width: '300px !important',
  },

  '@md': {
    width: '300px !important',
  },

  '@lg': {
    width: '250px !important',
  },

  '@xxl': {
    width: '300px !important',
  }
})

export const SkillArea = styled('div', {
  paddingTop: '1rem',
  display: 'flex',
  width: '100%',
  gap: 8,
  justifyContent: 'center',
  flexFlow: 'row wrap',

  '@lg': {
    justifyContent: 'flex-start',
  }
})

export const SkillItemCss = css('svg', {
  transition: '.3s',
  width: '50px !important',
  height: '50px !important',
  fill: '$dark400',
  border: '1px solid $light400',
  padding: 8,
  borderRadius: 4,

  '&:hover': {
    fill: '$light100',
  }
})
