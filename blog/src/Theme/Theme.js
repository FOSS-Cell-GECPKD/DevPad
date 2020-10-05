import { createMuiTheme } from "@material-ui/core/styles";

export const light_theme = createMuiTheme({
  palette: {
    primary: {
      main: "#202020",
      dark: "#fff",
      background: {
        default: "#fff",
        paper: "#121212",
      },
    },
  },
});
export const dark_theme = createMuiTheme({
  palette: {
    primary: { main: "#fff" },
    secondary: {
      main: "#bbe1fa",
    },
    background: {
      default: "#1b262c",
      paper: "#0f4c75",
    },
    text: {
      primary: "#fff",
      secondary: "#bbe1fa",
      disabled: "#0f4c75",
    },
    action: {
      disabled: "#0f4c75",
    },
    info: {
      main: "#0f4c75",
    },
  },
});
