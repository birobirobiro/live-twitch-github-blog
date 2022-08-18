import { styled } from "..";

export const PostContent = styled("div", {
  padding: "32px 40px",

  ".react-markdown": {
    whiteSpace: "pre-wrap",
  },

  img: {
    maxWidth: "100%",
  },

  ul: {
    paddingLeft: "20px",
  },

  a: {
    color: "$brand",
  },
});
