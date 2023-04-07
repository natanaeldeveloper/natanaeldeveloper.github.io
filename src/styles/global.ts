import { globalCss } from "./stitches.config";

const globalStyle = globalCss({
  '@import': [
    "url('https://fonts.googleapis.com/css2?family=Average+Sans&family=Montserrat:ital,wght@0,100;0,200;0,300;0,600;0,700;0,800;0,900;1,400;1,500&family=Palanquin:wght@100;300;400;500;600;700&display=swap')"
  ],

  '*': {
    margin: 0,
    padding: 0,
    border: 0,
    boxSizing: "border-box",
  },

  body: {
    fontFamily: "$body",
  },

  "div, ul, li, a": {
    // border: "1px solid black",
  }
})

export default globalStyle