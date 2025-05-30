import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";
import LayoutContent from "@/components/LayoutContent";

export const metadata: Metadata = {
  title: "Ishaan Narang - Portfolio",
  description: "Computer Science student at Penn State focusing on AI interpretability research",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className="antialiased transition-colors duration-300">
        <ThemeProvider>
          <ThemeToggle />
          <LayoutContent>
            {children}
          </LayoutContent>
        </ThemeProvider>
      </body>
    </html>
  );
}
