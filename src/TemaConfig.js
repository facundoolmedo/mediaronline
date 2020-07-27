import { createMuiTheme } from "@material-ui/core/styles";
import { blueGrey } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: "#fff",
    },
    primary: {
      light: blueGrey[200],
      main: blueGrey[300],
      dark: blueGrey[400],
      contrastText: "#fff",
    },
  },
});

export default theme;
