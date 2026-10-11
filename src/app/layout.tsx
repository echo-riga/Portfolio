import type { Metadata } from "next";
import { portfolio } from "@/lib/portfolio";
import { Analytics } from "@vercel/analytics/next";
import "@fontsource-variable/inter";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: `${portfolio.name} — Portfolio`, template: `%s — ${portfolio.name}` },
  description: portfolio.introduction,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
