import { css, styled } from "../../styles/stitches.config";

export const Container = styled('section', {
  padding: '3rem 1rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  '@lg': {
    paddingY: '5rem',
    paddingInline: '10rem',
  }
})

export const Content = styled('div', {
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'center',
  gap: '1.5rem',
  paddingInline: '1rem',

  '@sm': {
    gap: '2rem',
    paddingInline: '2rem',
  },

  '@md': {
    gap: '2rem',
  },

  '@lg': {
  },

  '@xl': {
  }
})

export const JobCard = styled('div', {
  backgroundColor: '$light500',
  boxShadow: '1px 10px 10px $light200',
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  alignItems: 'center',
  color: '$dark100',
  width: 270,
  height: 270,
  overflow: 'hidden',

  img: {
    height: '100%',
  },

  '@sm': {
    width: 250,
    height: 250,
  },

  '@lg': {
    width: 210,
    height: 210,
  },

  '@xl': {
    width: 300,
    height: 300,
  },
})

export const ModalClass = css('div', {
  top: 20,
  img: {
    width: '100%',
  }
})