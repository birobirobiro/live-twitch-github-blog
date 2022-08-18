import { styled } from "../../styles";

export const PostListContainer = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "32px",
  margin: "48px 0 234px 0",
});

export const PostListItem = styled("article", {
  backgroundColor: "$secondaryShape",
  padding: "32px",
  borderRadius: "10px",
  maxHeight: "260px",

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseLine",
  },

  h3: {
    maxWidth: "283px",
  },

  span: {
    textAlign: "right",
  },

  p: {
    lineHeight: 1.5,
    marginTop: "20px",
    overflow: "hidden",
    "-webkit-line-clamp": 4,
    display: "-webkit-box",
    "-webkit-box-orient": "vertical",
  },

  "&:hover": {
    boxShadow: "0 0 0 2px $colors$labelInput",
    cursor: "pointer",
  },
});
