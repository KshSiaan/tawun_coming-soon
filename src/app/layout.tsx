import type { Metadata } from "next";
import "./globals.css";
import { ReactLenis } from "@/lib/lenis";
import { App } from "antd";
export const metadata: Metadata = {
  title: "Tawun - Coming soon",
  description: "Tawun Coming soon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactLenis root>
        <body className={`antialiased bg-[#FBF9F5] overflow-x-hidden`}>
          <App>{children}</App>
        </body>
      </ReactLenis>
    </html>
  );
}
