import { createTheme } from "@mui/material";

export const panelTheme = createTheme({
  palette: {
    primary: {
      main: "#0309b5",
    },
    background: {
      default: "#f4f6f8",
    },
    secondary: {
      main: "#f50057",
    },
    success: {
      main: "#4caf50",
    },
    info: {
      main: "#2196f3",
    },
    warning: {
      main: "#ff9800",
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
        },
      },
    },
  },
});