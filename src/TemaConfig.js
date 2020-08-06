import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
let theme = createMuiTheme({
  palette: {
    secondary: {
      main: "#FFFFFF",
    },
    primary: {
      main: "#525252",
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
