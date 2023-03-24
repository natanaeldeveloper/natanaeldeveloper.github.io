import { styled } from '../../styles/stitches.config'

export const Container = styled('nav', {
  width: '100%',
  display: 'flex',
  backgroundColor: '$dark200',
  flexDirection: 'column',
  alignItems: 'flex-end',

  '@md': {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingInline: '2.5rem',
    backgroundColor: '$dark100',
    height: 'max-content',
  },
})

export const Nav = styled('ul', {

  variants: {
    visibled: {
      true: {
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
        zIndex: 99,
        minHeight: '100vh',
        paddingTop: '5rem',

        '@md': {
          display: 'inline-flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          minHeight: 'max-content',
          paddingTop: 0,
        },
      },
      false: {
        display: 'none',
      }
    }
  }
})

export const NavItem = styled('li', {

  display: 'flex',
  width: '100%',
  textAlign: 'center',

  a: {
    textDecoration: 'none',
    padding: '1rem',
    fontSize: '1rem',
    fontFamily: '$header',
    color: '$light100',
    fontWeight: 500,
    width: '100%',
  },

  'a:hover': {
    backgroundColor: '$light200',
    color: '$dark100',
  },

  '@md': {
    width: 'max-content',
    
    a: {
      fontSize: '0.9rem',
      paddingY: '2rem',
      paddingInline: '1rem',
    },

    'a:hover': {
      textDecoration: 'underline',
      backgroundColor: '$dark100',
      color: '$light100',
    },
  },
})

export const MenuButton = styled('button', {
  padding: '1.5rem',
  backgroundColor: '$dark200',
  color: '$light100',
  display: 'block',
  border: '1px solid transparent',
  transition: '.3s',

  '&:hover': {
    border: '1px solid $light100',
  },

  '@md': {
    display: 'none',
  },

})