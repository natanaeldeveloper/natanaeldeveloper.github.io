import { styled } from "../../styles/stitches.config";

export const Container = styled('section', {
  padding: '3rem 1rem',

  '@lg': {
    paddingInline: '2rem',
  }
})

export const Content = styled('div', {
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'center',
  gap: '1rem',


  '@sm': {
    paddingInline: '7rem',
    gap: '0.5rem',
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
  padding: '2rem',
  width: 170,
  height: 170,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '$dark100',

  '@lg': {
    width: 210,
    height: 210,
  },

  '@xl': {
    width: 250,
    height: 250,
  },
})