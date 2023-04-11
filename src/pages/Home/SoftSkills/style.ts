import { styled } from "../../../styles/stitches.config";

export const Container = styled("section", {
  width: "100%",
  backgroundColor: "#0E0E0E",
})

export const Content = styled("div", {
  padding: "4rem 2rem",
  display: "flex",
  flexFlow: "row wrap",
  justifyContent: "center",
  gap: "5rem",
})

export const Box = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1.5rem",
  maxWidth: 350,
})

export const Icon = styled("div", {
  color: "$primary",
  fontSize: "2.2rem",
  backgroundColor: "black",
  // border: "2px solid $primary",
  borderRadius: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: 80,
  height: 80,
})

export const Text = styled("div", {
  color: "white",
  textAlign: "center",

  h1: {
    fontFamily: "$header",
    fontSize: "1.4rem",
    marginBottom: "0.7rem",
  },

  p: {
    fontFamily: "$body",
    color: "#CDCDCD",
  }
})