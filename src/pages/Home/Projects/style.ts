import { styled } from "../../../styles/stitches.config";

export const Container = styled("section", {
  width: "100%",
  backgroundColor: "black",
  padding: "5rem 1rem",

  "@bp2": {
    padding: "5rem 5rem",
  },

  "@bp4": {
    padding: "5rem 16rem",
  }
})

export const Content = styled("div", {
  display: "flex",
  flexFlow: "row wrap",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",
})

export const Card = styled("div", {
  backgroundColor: " #0E0E0E",
  borderRadius: 4,
  transition: ".3s",
  cursor: "pointer",
  width: 300,

  "@bp2": {
    width: 350,
  },

  "&:hover": {
    transform: "translateY(-0.8rem)",
  }
})

export const CardHeader = styled("div", {
  padding: "1rem",

  img: {
    width: "100%",
  },
})

export const CardBody = styled("div", {
  padding: "0 1rem 1.5rem 1rem",

  h1: {
    color: "white",
  },

  p: {
    color: "#CDCDCD",
    marginTop: "1rem",
  },

})

export const TagArea = styled("div", {
  display: "flex",
  flexFlow: "row wrap",
  gap: 10,
  marginTop: "1rem",
})

export const Tag = styled("span", {
  color: "#CDCDCD",

  "&::before": {
    content: "#",
  }
})