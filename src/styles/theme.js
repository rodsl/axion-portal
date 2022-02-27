import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  initialColorMode: "dark",
  // fonts: {
  //   body: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
  //   // body: `Helvetica, sans-serif`
  // },
  colors: {
    brand1: {
      50: "#EAECFA",
      100: "#C4CBF2",
      200: "#9EAAEA",
      300: "#7988E2",
      400: "#5367DA",
      500: "#2D46D2",
      600: "#2438A8",
      700: "#1B2A7E",
      800: "#121C54",
      900: "#090E2A"
    },
    brand2: {
      50: "#E5F8FF",
      100: "#B8ECFF",
      200: "#8ADFFF",
      300: "#5CD3FF",
      400: "#2EC6FF",
      500: "#00BAFF",
      600: "#0095CC",
      700: "#006F99",
      800: "#004A66",
      900: "#002533"
    }
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 700,
    xBold: 900,
  },
  styles: {
    global: (props) => ({
      // "*": {
      //   "&::-webkit-scrollbar": {
      //     width: "10px",
      //     backgroundColor: "rgb(255,255,255,0.0)",
      //   },
      //   "&::-webkit-scrollbar-thumb": {
      //     backgroundColor: "#A0AEC0",
      //     borderRadius: "10px",
      //     border: "2px solid #F7FAFC",
      //   },
      // },
      body: {
        bg: mode("gray.200", "gray.900")(props),
        fontFamily: "Helvetica, sans-serif",
      },
      html: {
        fontFamily: "Helvetica, sans-serif",
      },
    }),
  },
});

export default theme;
