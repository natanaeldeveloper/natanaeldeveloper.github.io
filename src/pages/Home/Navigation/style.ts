import { styled } from "../../../styles/stitches.config";

export const Container = styled('section', {
  width: "100%",
  backgroundColor: "$light100",
  display: "flex",
  flexFlow: "row wrap",
  justifyContent: "space-between",
  gap: '0.5rem',
  alignItems: "center",

  "@bp2": {
    paddingInline: "3rem 2rem",
  }
})

export const Brand = styled('span', {
  color: "$dark100",
  fontWeight: 800,
  margin: "0.5rem 0 0 1.5em",

  '@bp2': {
    margin: 0,
  }
})

export const MenuToggle = styled('button', {
  padding: "0.6rem 0.9rem",
  backgroundColor: "$light300",
  color: "$dark200",
  fontSize: '1.1rem',
  margin: "0.5rem 0.5rem 0 0",
  borderRadius: 3,
  cursor: "pointer",
  transition: ".3s",
  visibility: "visible",

  '&:hover': {
    backgroundColor: "$primary",
    color: "white",
  },

  '@bp2': {
    display: "none",
    visibility: "hidden",
  }
})

export const Menu = styled('ul', {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: 0,
  overflow: "hidden",
  visibility: "hidden",
  transition: '.3s',

  '&.--active': {
    height: "190px",
    visibility: "visible",
  },

  '@bp2': {
    flexDirection: "row",
    width: "max-content",
    height: "65px !important",
  }
})

export const MenuItem = styled('li', {
  display: "flex",
  listStyle: "none",
})

export const MenuLink = styled('a', {
  textDecoration: "none",
  color: "$dark100",
  width: "100%",
  textAlign: "center",
  padding: '0.8rem',
  fontFamily: "$caption",
  fontWeight: 500,
  lineHeight: "2rem",

  '&:hover': {
    backgroundColor: "$light200",
  },

  '@bp2': {
    padding: "1rem",
    height: "100%",
  }
})