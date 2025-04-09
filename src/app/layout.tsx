import "@/styles/globals.css";
import "@/styles/lines.css";
import "@/styles/ham.css";
import { cn } from "@/lib/utils";
import { type Metadata } from "next";
import { Open_Sans, Sofia_Sans_Condensed, Poppins } from "next/font/google";
import Providers from "@/app/Providers";

export const metadata: Metadata = {
  title: "template1",
  description: "template1",
  icons: [{ rel: "icon", url: "/images/home/hero/logo.png", sizes: "11x11" }],
};

const sofia_sans = Sofia_Sans_Condensed({
  subsets: ["latin"],
  variable: "--font-sofia_sans",
  weight: ["400", "500", "600", "700", "800"],
});

const open_sans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open_sans",
  weight: ["400", "500", "600", "700", "800"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "theme-custom font-inter flex min-h-screen antialiased",
          sofia_sans.variable,
          open_sans.variable,
          poppins.variable,
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
