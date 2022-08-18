import { styled } from "..";

export const InputContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  marginTop: "72px",

  input: {
    backgroundColor: "$backgroundInput",
    border: "1px solid $borderInput",
    borderRadius: "6px",
    padding: "12px 16px",
    fontSize: "16px",
    color: "$labelInput",
    outline: 0,

    "&:focus": {
      border: "1px solid $brand",
      boxShadow: "0 0 0 1px $colors$brand",
    },
  },
});

export const InputHeader = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  h3: {
    color: "$subtitle",
    fontSize: "18px",
  },
  span: {
    color: "$span",
    fontSize: "14px",
  },
});
