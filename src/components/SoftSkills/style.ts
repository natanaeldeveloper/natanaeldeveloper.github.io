import { styled } from "../../styles/stitches.config";

export const Container = styled('section', {
  width: '100%',
  backgroundColor: '#0A0A0A',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '2.5rem',
  padding: '5rem 1rem',

  '@lg': {
    flexDirection: 'row',
    padding: '5rem 5rem',
  },

  '&:before': {
    position: 'absolute',
    // backgroundColor: '#0041A3',
    content: '',
    zIndex: 2,
    width: '100%',
    height: 300,
  }
})

export const SoftSkillItem = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  gap: '1.5rem',
  maxWidth: 300,
  padding: '1rem',
  color: '$light400',

  '@lg': {
    gap: '2rem',
  }
})

export const SoftSkillIcon = styled('div', {
  borderRadius: '100%',
  backgroundColor: '#141414',
  width: 80,
  height: 80,
  padding: 23,

  svg: {
    width: '100%',
    color: '$primary',
  },
})