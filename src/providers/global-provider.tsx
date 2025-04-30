"use client";

import { ThemeProvider } from "next-themes";

export function GlobalProvider({ children }: React.ComponentProps<"div">) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
