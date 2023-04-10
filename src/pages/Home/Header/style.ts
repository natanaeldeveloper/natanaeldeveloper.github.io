import { styled } from "../../../styles/stitches.config";
import { ButtonBase } from "../../../components/Button";
import bannerImg from '../../../assets/banner.jpeg'

export const Container = styled("section", {
  height: "calc(100vh - 100px)",
  backgroundColor: "black",
  display: "flex",
  justifyContent: "center",
  backgroundImage: "url(" + bannerImg + ")",
  backgroundSize: "auto 100%",
  backgroundPositionX: "right",
  backgroundRepeat: "no-repeat",
  position: "relative",
  zIndex: 1,
  minHeight: 500,


  '&::before': {
    backgroundColor: "rgba(1,1,1,0.7)",
    position: "absolute",
    height: "100%",
    width: "100%",
    content: " ",
    zIndex: -1,
  },

  '@bp2': {
    justifyContent: "normal",
    backgroundSize: "115% auto",
    backgroundPosition: "left",
  },
})

export const Text = styled("div", {
  color: "white",
  alignSelf: "center",
  textAlign: "center",

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
    margin: "0 0 0 5rem",
    textAlign: "left",

    h1: {
      fontSize: "3rem",
    },

    h2: {
      fontSize: "1.5rem",
    },
  },
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