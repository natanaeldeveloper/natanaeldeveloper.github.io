import { styled, css, getCssText } from '../../styles/stitches.config'

import bannerImg from '../../assets/banner.jpeg'

export const Container = styled('section', {
  width: '100%',
  height: '90vh',
  backgroundColor: '$dark100',
  display: 'flex',
  backgroundImage: 'url(' + bannerImg + ')',
  backgroundSize: 'auto 150%',
  backgroundPosition: 'right',
  backgroundRepeat: 'no-repeat',
  position: 'relative',
  justifyContent: 'center',

  '&::before': {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(1,1,1,0.7)',
    backgroundPosition: 'right',
    content: '',
  },

  '@md': {
    backgroundPosition: 'right',
    '&::before': {
      backgroundColor: 'rgba(1,1,1,0.6)',
    },
  },

  '@lg': {
    justifyContent: 'flex-start',
  },

  '@xxl': {
    backgroundSize: '110%',
  },
})

export const TextArea = styled('div', {
  alignSelf: 'center',
  color: '$light100',
  zIndex: 2,
  textAlign: 'center',

  paddingInline: '2rem',

  h1: {
    fontFamily: '$header',
    fontSize: '2rem',
  },

  h3: {
    fontFamily: '$caption',
    fontSize: '1rem',
    fontWeight: 500,
  },

  h4: {
    fontSize: '1rem',
    fontWeight: 500,
  },

  '@sm': {
    paddingInline: '5rem',
  },

  '@md': {

    h1: {
      fontSize: '2.5rem',
    },

    h3: {
      fontSize: '1.2rem',
    },

    h4: {
      fontSize: '1.2rem',
    }
  },

  '@lg': {
    textAlign: 'left',

    paddingInline: '8rem',

    h1: {
      fontSize: '3.5rem',
    },

    h3: {
      fontSize: '1.5rem',
    },

    h4: {
      fontSize: '1.5rem',
    },
  }
})

export const ButtonArea = styled('div', {
  display: 'flex',
  flexFlow: 'row wrap',
  gap: 12,
  marginTop: 16,
  justifyContent: 'center',

  '@lg': {
    justifyContent: 'flex-start',
  }
})

export const Button = styled('button', {
  borderRadius: 4,
  fontFamily: '$caption',
  display: 'flex',
  flexFlow: 'row nowrap',
  gap: 8,
  alignItems: 'center',
  transition: '.3s',
  padding: '0.5rem 0.9rem',
  fontSize: '0.9rem',

  '@md': {
    padding: '0.7rem 1.1rem',
    fontSize: '1rem',
  }
})

// export const ButtonBudget = css('button', {
//   backgroundColor: '#128C7E',
//   color: '$light100',
//   border: '1px solid #128C7E',

//   '&:hover': {
//     backgroundColor: '#075E54',
//     border: '1px solid #075E54',
//     color: '$light100',
//   }
// })

export const ButtonBudget = css('button', {
  backgroundColor: '$primary',
  color: '$light100',
  border: '1px solid $primary',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: '#0049B8',
    border: '1px solid #0049B8',
  }
})