import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Duy Nguyen | Software Engineer",
  description:
    "Software Engineer with 3+ years of experience in full-stack and front-end development. Skilled in Node.js, React.js, TypeScript, and AWS services.",
  keywords: [
    "Software Engineer",
    "Frontend Developer",
    "Full Stack Developer",
    "React.js",
    "Node.js",
    "TypeScript",
    "Ho Chi Minh City",
  ],
  authors: [{ name: "Nguyen Duy Nguyen" }],
  openGraph: {
    title: "Duy Nguyen | Software Engineer",
    description:
      "Software Engineer with 3+ years of experience in full-stack and front-end development.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
