"use client";
import { Theme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { ReactNode } from "react";


interface ThemeRegistryProps {
  children: ReactNode;
  theme: Theme;
}

export default function ThemeRegistry({ children, theme }: ThemeRegistryProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
