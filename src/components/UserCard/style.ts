import { styled } from "../../styles";

export const UserCardContainer = styled("div", {
  backgroundColor: "$primaryShape",
  width: "100%",
  padding: "32px 40px",
  display: "flex",
  alignItems: "center",
  gap: "32px",
  borderRadius: "10px",
  marginTop: "-80px",

  img: {
    width: "148px",
    height: "148px",
    border: "2px solid $brand",
    borderRadius: "8px",
  },
});

export const UserCardContent = styled("div", {
  display: "flex",
  flex: 1,
  flexDirection: "column",

  p: {
    marginTop: "8px",
    marginBottom: "24px",
  },
});

export const UserCardNameContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",

  a: {
    display: "flex",
    alignItems: "center",
    color: "$brand",
    textDecoration: "none",
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: "12px",

    svg: {
      marginLeft: "8px",
    },
  },
});

export const UserCardInfo = styled("div", {
  display: "flex",
  alignItems: "center",
  width: "100%",
  gap: "24px",

  span: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
});
