import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#EA663F",
    },
  },
});

theme.typography.h5 = {
  fontSize: "1.3rem",
  fontWeight: "400",
  "@media (min-width:600px)": {
    fontSize: "0.8rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.5rem",
  },
};

export default theme;
