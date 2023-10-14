"use client";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "@/app/libs/theme";
import { store } from "@/app/store";
import { Provider } from "react-redux";
import { CookiesProvider } from "react-cookie";

export default function TemaProvider({ children }) {
  return (
    <Provider store={store}>
      <CookiesProvider defaultSetOptions={{ path: "/" }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </CookiesProvider>
    </Provider>
  );
}
