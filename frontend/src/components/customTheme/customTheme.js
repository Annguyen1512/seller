import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#fff",
    },
    background: {
      paper: "#141414",
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
  },
});

export default theme;