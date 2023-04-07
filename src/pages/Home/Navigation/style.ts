import { styled } from "../../../styles/stitches.config";

export const Container = styled('section', {
  width: "100%",
  backgroundColor: "#005de9",
  display: "flex",
  flexFlow: "row wrap",
  justifyContent: "space-between",
  gap: '0.5rem',
  alignItems: "center",

  "@bp2": {
    paddingInline: "2rem",
  }
})

export const Brand = styled('span', {
  color: "white",
  fontWeight: 800,
  margin: "0.5rem 0 0 0.5rem",

  '@bp2': {
    margin: 0,
  }
})

export const MenuToggle = styled('button', {
  padding: "0.6rem 0.9rem",
  backgroundColor: "transparent",
  color: "white",
  fontSize: '1.1rem',
  border: "1px solid white",
  margin: "0.5rem 0.5rem 0 0",
  borderRadius: 3,
  cursor: "pointer",
  transition: ".3s",
  visibility: "visible",

  '&:hover': {
    backgroundColor: "white",
    color: "#005de9",
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
    height: "150px",
    visibility: "visible",
  },

  '@bp2': {
    flexDirection: "row",
    width: "max-content",
    height: "60px !important",
  }
})

export const MenuItem = styled('li', {
  display: "flex",
  listStyle: "none",
})

export const MenuLink = styled('a', {
  textDecoration: "none",
  color: "white",
  width: "100%",
  textAlign: "center",
  padding: '0.8rem',
  fontFamily: "$caption",

  '&:hover': {
    backgroundColor: "#0056d3",
  },

  '@bp2': {
    padding: "1rem",
    height: "100%",
  }
})