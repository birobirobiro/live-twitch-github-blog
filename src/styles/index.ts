import { createStitches } from "@stitches/react";

export const { styled, globalCss, getCssText } = createStitches({
  theme: {
    colors: {
      title: "#E7EDF4",
      text: "#AFC2D4",
      primaryShape: "#0B1B2B",
      secondaryShape: "#112131",
      background: "#071422",
      brand: "#3294F8",
      span: "#7B96B2",
      subtitle: "#C4D4E3",
      borderInput: "#1C2F41",
      backgroundInput: "#040F1A",
      labelInput: "#3A536B",
    },
    fonts: {
      default: "Nunito",
    },
  },
});
