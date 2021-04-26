import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    black: "#000",
    yellow: "#F2D33C",
    greys: ["#DCDCDC", "#717786"],
  },
  typography: {
    large: {
      fontWeight: "900",
      fontSize: "25px",
      letterSpacing: "-0.24px",
      lineHeight: "40px",
    },
    medium: {
      fontWeight: "500",
      fontSize: "16px",
      letterSpacing: "-0.05px",
      lineHeight: "20px",
    },
  },
});

export default theme;
