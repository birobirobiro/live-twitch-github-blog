import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    "-webkit-font-smoothing": "antialiased",
  },
  body: {
    background: "$background",
    color: "$text",
    fontFamily: "$default, sans-serif",
  },
  input: {
    fontFamily: "$default, sans-serif",
  },
  "h1, h2, h3, h4, h5, h6": {
    color: "$title",
  },
});
