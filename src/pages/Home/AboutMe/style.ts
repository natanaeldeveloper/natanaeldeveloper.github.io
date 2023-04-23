import { css, styled } from "../../../styles/stitches.config";

export const Container = styled('section', {
  backgroundColor: "black",
  width: '100%',
  display: "flex",
  alignItems: "center",

  '@bp2': {
    padding: "0 3rem",
    alignItems: "flex-start",
  },

  '@bp3': {
    paddingInline: "0 5rem",
    alignItems: "center",
  },

  '@bp4': {
    justifyContent: "center",
  }
})

export const Photo = styled('img', {
  width: 400,
  height: "max-content",
  display: "none",

  '@bp2': {
    display: "block",
    width: 350,
  },

  '@bp3': {
    width: 450,
  },

  '@bp4': {
    width: 550,
  }
})

export const Content = styled('div', {
  maxWidth: 800,
})

export const Text = styled('div', {
  color: "white",
  padding: "5rem 2rem 2rem 2rem",

  h1: {
    fontFamily: "$header",
    fontSize: "1.8rem",
    textAlign: "center",
  },

  p: {
    color: "#CDCDCD",
    marginTop: "1rem",
    fontFamily: "$body",
    textAlign: "justify",
  },

  '@bp2': {
    padding: 0,
    marginTop: "5rem",

    h1: {
      textAlign: "left",
    },
  },

  '@bp3': {
    padding: "3rem 0 0 0",
  },

  '@bp4': {
    padding:" 0 2rem 0 0" ,
  },
})

export const HardSkillsContainer = styled('div', {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  minHeight: 200,
  marginTop: "2rem",
  gap: "1.5rem",

  '@bp3': {
    flexDirection: "row",
  }
})

export const HardSkillsBox = styled('div', {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  borderRadius: 4,

  span: {
    color: "white",
    textAlign: "center",
    fontFamily: "$header",
    fontWeight: 500,
    fontSize: "1.3rem",
  },

  '@bp2': {
    alignItems: "flex-start",
  }
})

export const HardSkillsItems = styled('div', {
  display: "flex",
  flexFlow: "row wrap",
  justifyContent: "center",
  gap: 8,
  padding: "2rem",
  maxWidth: 400,

  '@bp2': {
    padding: "1rem 0",
    justifyContent: "flex-start",
  },
})

export const HardSkillItem = styled('div', {

  svg: {
    width: 45,
    padding: 8,
    borderRadius: 4,
    cursor: "pointer",
    transition: "0.3s",
  },
})

export const HardSkillIconCss = css('svg', {
  fill: "#BEBEBE",
})