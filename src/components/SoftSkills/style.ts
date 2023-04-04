import { styled } from "../../styles/stitches.config";

export const Container = styled('section', {
  width: '100%',
  backgroundColor: '#0A0A0A',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '2rem',
  padding: '5rem 1rem',

  '@lg': {
    flexDirection: 'row',
    padding: '5rem 5rem',
  }
})

export const SoftSkillItem = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  gap: '1.5rem',
  maxWidth: 450,
  padding: '1rem',

  svg: {
    width: 80,
    borderRadius: '100%',
    padding: 10,
    backgroundColor: '$light200',
    fill: '$dark500',
  },

  '@lg': {
    gap: '2rem',
  }
})