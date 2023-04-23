import { styled } from "../../../styles/stitches.config";
import { ButtonBase } from "../../../components/Button";

import bannerImg from '../../../assets/banner.jpeg'

export const Container = styled("section", {
  height: "calc(100vh - 3rem)",
  backgroundColor: "$dark100",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  minHeight: 500,
  backgroundImage: "url(" + bannerImg + ")",
  backgroundSize: "auto 100%",
  backgroundPositionX: "right",
  backgroundRepeat: "no-repeat",

  '&::before': {
    background: "linear-gradient(100.5deg, rgba(0, 0, 0, 0.69) 1.36%, rgba(15, 15, 15, 0.51) 79.19%, rgba(0, 0, 0, 0.72) 99.03%);",
    position: "absolute",
    height: "100%",
    width: "100%",
    content: " ",
  },

  '@bp2': {
    justifyContent: "normal",
    backgroundSize: "auto 100%",
    backgroundPosition: "right",
  },

  '@bp3': {
    backgroundSize: "180%",
    backgroundPosition: "right",
  },

  '@bp4': {
    backgroundSize: "140%",
    backgroundPosition: "right",
  },

  "@bp5": {
    backgroundSize: "100%",
    backgroundPosition: "right",
  }
})

export const Navbar = styled('section', {
  width: "100%",
  backgroundColor: "$dark200",
  display: "flex",
  flexFlow: "row wrap",
  justifyContent: "space-between",
  gap: '0.5rem',
  alignItems: "center",
  zIndex: 5,
  position: "absolute",

  "@bp2": {
    padding: "0.5rem 2rem 0 5rem",
    backgroundColor: "transparent",
  }
})

export const Brand = styled('span', {
  color: "$light100",
  fontWeight: 800,
  margin: "0.5rem 0 0 1.5em",

  '@bp2': {
    margin: 0,
  }
})

export const MenuToggle = styled('button', {
  padding: "0.8rem 1rem",
  backgroundColor: "transparent",
  color: "$light100",
  fontSize: '1.1rem',
  margin: "0.5rem 0.5rem 0 0",
  borderRadius: 2,
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
    height: "250px",
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
  color: "$light100",
  width: "100%",
  textAlign: "center",
  padding: '0.8rem',
  fontFamily: "$caption",
  fontWeight: 500,
  lineHeight: "2rem",
  transition: ".3s",
  backgroundColor: "transparent",
  borderBottom: "2px solid transparent",
  
  "&:hover": {
    backgroundColor: "$primary",
    borderBottom: "2px solid transparent",
  },

  '@bp2': {
    padding: "1rem",
    height: "100%",
    backgroundColor: "transparent",
    borderBottom: "2px solid transparent",

    "&:hover": {
      backgroundColor: "transparent",
      borderBottom: "2px solid $primary",
    },
  }
})

export const Text = styled("div", {
  color: "white",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1,
  height: "100vh",

  h1: {
    fontFamily: "$header",
    fontSize: "2.2rem",
    fontWeight: 800,
  },

  h2: {
    fontFamily: "$caption",
    fontSize: "1.2rem",
    fontWeight: 600,
  },

  '@bp2': {
    padding: "0 0 0 5rem",
    textAlign: "left",
    alignItems: "flex-start",

    h1: {
      fontSize: "3rem",
    },

    h2: {
      fontSize: "1.5rem",
    },
  }
})

export const ContactButton = styled(ButtonBase, {
  margin: "1.5rem 0 0 0",
  backgroundColor: "$primary",
  color: "white",
  transition: ".3s",

  '&:hover': {
    backgroundColor: "$secundary",
  }
})

