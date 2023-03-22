import { styled } from "../../styles/stitches.config";

export const Container = styled('section', {
  backgroundColor: '$light200',
  width: '100%',
  fontFamily: '$body',
})

export const ContactArea = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '1.2rem',
  gap: 24,
  paddingY: '2rem',
  borderBottom: '1px solid $light400',
})

export const SocialMediaArea = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: 'max-content',
  gap: 16,
  
  svg: {
    fontSize: '1.4rem',
    color: '$dark300',
  }
})

export const BadgeSocialMedia = styled('a', {
  borderRadius: '100%',
  width: 50,
  height: 50,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '$light100',
  border: '1px solid $light300',

  svg: {
    fontSize: '1.8rem',
    color: '$dark100',
  }
})

export const EmailArea = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 8,
})

export const CaptionArea = styled('caption', {
  display: 'flex',
  justifyContent: 'center',
  gap: '1.3rem',
  paddingY: '1rem',
})