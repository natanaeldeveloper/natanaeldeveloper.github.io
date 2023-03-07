import { styled, css, getCssText } from '../../styles/stitches.config'

export const Container = styled('section', {
  width: '100%',
  height: '90vh',
  backgroundColor: '$dark100',
  display: 'flex',
})

export const TextBox = styled('div', {
  marginLeft: '2.5rem',
  alignSelf: 'center',
  color: '$light100',

  h1: {
    fontFamily: '$header',
    fontSize: '3.2rem',
  },

  h3: {
    fontFamily: '$caption',
    fontSize: '1.5rem',
    fontWeight: 500,
  },

  h4: {
    fontWeight: 500,
    fontSize: '1.2rem',
  }
})

export const Button = styled('button', {
  padding: '0.7rem 1.1rem',
  borderRadius: 8,
  fontFamily: '$caption',
  fontSize: '1rem',
  display: 'flex',
  gap: 8,
  alignItems: 'center',
  transition: '.3s',
})

export const ButtonBudget = css('button', {
  backgroundColor: '#128C7E',
  color: '$light100',
  border: '1px solid #128C7E',
  marginTop: 16,

  '&:hover': {
    backgroundColor: '#075E54',
    border: '1px solid #075E54',
    color: '$light100',
  }
})

export const ButtonJobOffer = css('button', {
  backgroundColor: 'transparent',
  color: '$light100',
  border: '1px solid $light100',
  marginTop: 16,

  '&:hover': {
    backgroundColor: '$primary',
    color: '$light100',
    border: '1px solid $primary',
  }
})