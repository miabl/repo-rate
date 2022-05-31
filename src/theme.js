import { Platform } from "react-native-web"

const theme = {
  colors: {
    textPrimary: "#24292e",
    textSecondary: "#586069",
    primary: "#0366d6",
    top: "#ffffff",
    appBarBackground: "#24292e",
    mainBackground: "#e1e4e8",
    cardBackground: "#fff",
    error: "#d73a4a",
  },
  fontSizes: {
    body: 15,
    subheading: 16,
    heading: 20,
  },
  fonts: {
    main: Platform.select({
      android: "Roboto",
      ios: "Arial",
      default: "System",
    }),
  },
  fontWeights: {
    normal: "400",
    bold: "700",
  },
}

export default theme
