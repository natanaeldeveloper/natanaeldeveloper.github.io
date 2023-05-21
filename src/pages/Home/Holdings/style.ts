import { styled } from "../../../styles/stitches.config";

export const Title = styled("h1", {
  fontFamily: "$outline",
  fontSize: "5rem",
  // color: "#FFFFFF",
  color: "#505050",
  marginBottom: '3rem',

  // "@bp2": {
  //   color: "#3F3F3F",
  //   fontSize: "7rem",
  // },

  // "@bp4": {
  //   fontSize: "6rem",

  // }
})

export const Container = styled('section', {
  color: 'white',
  width: '100%',
  backgroundColor: '$dark100',
  padding: '4rem 6rem 0 8rem',
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
})


export const Card = styled('div', {
  width: '100%',
  backgroundColor: '#0C0C0C',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  '@bp3': {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center'
  }
})

export const CardHeader = styled('div', {
  overflow: 'hidden',
 
  img: {
    width: '100%',
  },

  '@bp3': {
    width: '40%',
  }
})

export const CardBody = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '1rem 0',
  width: '60%',

  '@bp3': {
    padding: '1rem 1.5rem',
  }
})

export const CardFooter = styled('div', {

})