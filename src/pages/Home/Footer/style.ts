import { styled } from "../../../styles/stitches.config";

export const Container = styled("section", {
  width: "100%",
  backgroundColor: "$dark100",
  display: "flex",
  flexDirection: "column",
  padding: "2rem",
})

export const Box = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  color: "#A5A5A5",

  a: {
    textDecoration: "none",
    color: "#A5A5A5",
  },

  "a:hover": {
    textDecoration: "underline",
  }
})

export const NetworkArea = styled("div", {
  display: "flex",
  gap: "1rem",
  margin: "2rem 0 1rem 0",
})

export const NetworkItem = styled("a", {
  width: 45,
  height: 45,
  borderRadius: "100%",
  backgroundColor: "#101010",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  svg: {
    fill: "$primary",
    fontSize: "1.2rem",
  }
})

export const Divider = styled("div", {
  width: "100%",
  height: "1px",
  backgroundColor: "#1B1B1B",
  margin: "1rem 0",
})