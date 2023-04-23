import { css, styled } from "../../../styles/stitches.config";

export const Container = styled("div", {
  backgroundColor: "#101010",
  display: "flex",
  justifyContent: "center",
  padding: "4rem 2rem",

  ".ant-timeline-item-tail": {
    backgroundColor: "$light300",
  },

  ".ant-timeline-item-head": {
    backgroundColor: "transparent",
  }
})

export const TimelineCss = css("div", {
  color: "white",
})

export const History = styled("div", {
  fontFamily: "$body",

  h3: {
    marginTop: 8,
  },

  h4: {
    fontWeight: 400,
  },

  p: {
    marginTop: 4,
  }
})