import { css, styled } from "../../../styles/stitches.config";

export const Title = styled("h1", {
  fontFamily: "$outline",
  fontSize: "3rem",
  color: "#595959",
  marginBottom: "3rem",


  "@bp2": {
    color: "#3F3F3F",
    fontSize: "5rem",
  },

  "@bp4": {
    fontSize: "7rem",

  }
})

export const Container = styled("div", {
  overflow: "hidden",
  backgroundColor: "#101010",
  display: "flex",
  flexDirection: "column",
  padding: "4rem 2rem",

  ".ant-timeline-item-tail": {
    backgroundColor: "#252525",
  },

  ".ant-timeline-item-head": {
    backgroundColor: "transparent",
  },

  "@bp2": {
    alignItems: "center",
  }
})

export const TimelineCss = css("div", {
})

export const History = styled("div", {
  fontFamily: "$body",

  h5: {
    fontWeight: 600,
    color: "#CCCCCC",
    paddingTop: 4,
  },

  h4: {
    fontWeight: 600,
    color: "#CCCCCC",
  },

  h3: {
    color: "#FFFFFF",
  },

  p: {
    paddingTop: 8,
    color: "#AFAFAF",
  }
})