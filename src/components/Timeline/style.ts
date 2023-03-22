import { styled } from '../../styles/stitches.config'

export const Container = styled('section', {
  paddingY: '10rem',
  borderTop: '1px solid $light500',
  width: '100%',
})

export const Content = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
})

export const TimelineItem = styled('span', {
  fontFamily: '$body',
  fontSize: '1.1rem',
})