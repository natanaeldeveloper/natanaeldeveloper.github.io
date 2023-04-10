import { css, styled } from "../../../styles/stitches.config";

export const Container = styled('section', {
  backgroundColor: "black",
  width: '100%',
  display: "flex",
  alignItems: "center",

  '@bp2': {
    paddingInline: "3rem",
  },

  '@bp3': {
    paddingInline: "8rem 5rem",
  },

  '@bp4': {

  }
})

export const Photo = styled('img', {
  width: 200,
  height: "max-content",
  display: "none",

  '@bp2': {
    display: "block",
  },

  '@bp3': {
    width: 350,
  },

  '@bp4': {
    width: 400,
  }
})

export const Text = styled('div', {
  padding: "2rem",
  color: "white",

  h1: {
    fontFamily: "$header",
    fontSize: "1.8rem",
    textAlign: "center",
  },

  p: {
    marginTop: "1rem",
    fontFamily: "$body",
    textAlign: "center",
  },

  '@bp2': {
    padding: 0,

    h1: {
      textAlign: "left",
    },

    p: {
      textAlign: "left",
    }
  }
})

export const SkillsContainer = styled('div', {
  marginTop: "2rem",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#141414",
  padding: "1.3rem",

  gap: 16,

  '@bp2': {
    flexDirection: "row",
  }
})

export const SkillsBox = styled('div', {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  // padding: "1rem",
  borderRight: "1px solid white",

  

  span: {
    color: "white",
    textAlign: "center",
    fontFamily: "$header",
    fontWeight: 400,
    fontSize: "1.2rem",
  },

  '@bp2': {
    alignItems: "flex-start",
  }
})

export const SkillsItems = styled('div', {
  display: "flex",
  flexFlow: "row wrap",
  justifyContent: "center",
  maxWidth: 300,
  gap: 8,
  marginTop: "1rem",

  '@bp2': {
    justifyContent: "flex-start",
  }
})

export const SkillItem = styled('div', {
  svg: {
    width: 45,
    border: "1px solid grey",
    padding: 8,
    borderRadius: 4,
    fill: "white",
    cursor: "pointer",
  },
})