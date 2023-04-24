import { styled } from "../../../styles/stitches.config";

export const Title = styled("h1", {
  fontFamily: "$outline",
  fontSize: "4rem",
  color: "#595959",


  "@bp2": {
    color: "#3F3F3F",
    fontSize: "7rem",
  },

  "@bp4": {
    fontSize: "7rem",

  }
})

export const Container = styled("section", {
  width: "100%",
  backgroundColor: "black",
  padding: "5rem 1rem",
  textAlign: "center",

  "@bp2": {
    padding: "4rem 5rem",
  },

  "@bp4": {
    padding: "4rem 14rem",
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
  backgroundColor: " #101010",
  borderRadius: 4,
  transition: ".3s",
  cursor: "pointer",
  width: 300,

  "@bp2": {
    width: 290,
  },

  "&:hover": {
    transform: "translateY(-0.4rem)",
  }
})

export const CardHeader = styled("div", {
  padding: "0.5rem",

  img: {
    width: "100%",
  },
})

export const CardBody = styled("div", {
  padding: "0 1rem 1.5rem 1rem",
  textAlign: "left",

  h1: {
    color: "white",
    fontWeight: 500,
    fontSize: 20,
  },

  p: {
    color: "#CDCDCD",
    marginTop: "1rem",
    fontSize: 14,
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
  fontSize: 12,

  "&::before": {
    content: "#",
  }
})

export const CardFooter = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 1rem 1.5rem 1rem",

  span: {
    color: "#5A5A5A",
    fontSize: 12,
    fontFamily: "$body",
    fontWeight: 600,
  },
})

export const FooterButtons = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: 16,
})

export const GithubLink = styled("a", {
  color: "$light100",

  svg: {
    fontSize: 22,
    fill: "$light100",
  }
})

export const FigmaLink = styled("a", {
  color: "$light100",
  fontSize: 22,

  svg: {
    fill: "$light100",
  }
})

export const ReadmeLink = styled("a", {
  color: "$light100",
  width: 24,
  svg: {
    fill: "$light100",
  }
})

