import { styled } from "../../styles/stitches.config";

export const Button = styled('button', {
  padding: '0.8rem 1rem',
  borderRadius: 4,
  fontFamily: '$caption',

  variants: {
    color: {
      primary: {
        backgroundColor: '$primary',
        color: '$light100',
      }
    }
  }
})