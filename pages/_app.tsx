import type { AppProps } from "next/app";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import Navbar from "../components/Navbar/navbar";

const lightTheme = createTheme({
  type: "light",
  theme: {},
});

const darktheme = createTheme({
  type: "dark",
  theme: {},
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="system"
      value={{
        light: lightTheme.className,
        dark: darktheme.className,
      }}
    >
      <NextUIProvider>
        <Navbar />
        <Component {...pageProps} />
      </NextUIProvider>
    </NextThemeProvider>
  );
}
