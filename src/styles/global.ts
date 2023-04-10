import { globalCss } from "./stitches.config";

const globalStyle = globalCss({
  '@import': [
    "url('https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@100;200;300;400;500;600;700;800&Montserrat:wght@300;400;500;600;700&family=Open+Sans:wght@300;400;500;600;700&family=Yantramanav:wght@300;400;500;600;700&display=swap')",
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
})

export default globalStyle