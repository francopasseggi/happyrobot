import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HappyRobot",
  description: "HappyRobot app",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
