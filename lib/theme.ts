"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#6366F1",
      light: "#818CF8",
      dark: "#4F46E5",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#22D3EE",
      light: "#67E8F9",
      dark: "#06B6D4",
      contrastText: "#0A0F1E",
    },
    background: {
      default: "#0A0F1E",
      paper: "#111827",
    },
    text: {
      primary: "#F1F5F9",
      secondary: "#94A3B8",
    },
    divider: "rgba(148, 163, 184, 0.08)",
  },
  typography: {
    fontFamily: "'Inter', 'Geist', system-ui, sans-serif",
    h1: { fontWeight: 700, letterSpacing: "-0.025em" },
    h2: { fontWeight: 700, letterSpacing: "-0.02em" },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          padding: "10px 28px",
          fontSize: "0.938rem",
        },
        containedPrimary: {
          background: "linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)",
          boxShadow: "0 4px 20px 0 rgba(99, 102, 241, 0.3)",
          "&:hover": {
            background: "linear-gradient(135deg, #818CF8 0%, #6366F1 100%)",
            boxShadow: "0 6px 28px 0 rgba(99, 102, 241, 0.45)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#111827",
          border: "1px solid rgba(148, 163, 184, 0.08)",
          boxShadow: "none",
        },
      },
    },
  },
});

export default theme;
