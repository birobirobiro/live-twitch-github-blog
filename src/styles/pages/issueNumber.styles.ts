import { styled } from "..";

export const PostContent = styled("div", {
  padding: "32px 40px",

  ".react-markdown": {
    whiteSpace: "pre-wrap",
    lineHeight: 1.6,
    hyphens: "auto",
  },

  img: {
    maxWidth: "100%",
  },

  ul: {
    listStylePosition: "inside",
  },

  a: {
    color: "$brand",
  },
});
