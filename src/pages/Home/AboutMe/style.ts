import { css, styled } from "../../../styles/stitches.config";

export const Container = styled('section', {
  backgroundColor: "black",
  width: '100%',
  display: "flex",
  alignItems: "center",

  '@bp2': {
    padding: "0 3rem",
  },

  '@bp3': {
    paddingInline: "0 5rem",
  },

  '@bp4': {
    justifyContent: "center",
  }
})

export const Photo = styled('img', {
  width: 400,
  height: "max-content",
  display: "none",

  '@bp3': {
    display: "block",
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
  padding: "2rem",

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
    padding: "2rem 0 0 0",

    h1: {
      textAlign: "left",
    },

    p: {
      textAlign: "left",
    }
  },

  '@bp3': {
    padding: "3rem 0 0 0",
  },

  '@bp4': {
    padding: 0,
  },
})

export const SkillsContainer = styled('div', {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  minHeight: 200,

  '@bp2': {
    flexDirection: "row",
    marginTop: "2rem",
    gap: "1.5rem",
  }
})

export const SkillsBox = styled('div', {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  // backgroundColor: "#0F0F0F",
  // padding: "1.3rem",
  borderRadius: 4,


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
  gap: 8,
  marginTop: "1rem",

  '@bp2': {
    justifyContent: "flex-start",
  },

  '@bp3': {
    // maxWidth: 350,
  }
})

export const SkillItem = styled('div', {

  svg: {
    width: 45,
    // border: "1px solid grey",
    padding: 6,
    borderRadius: 4,
    fill: "white",
    cursor: "pointer",
  },
})

export const SkillIconCss = css('svg', {

})