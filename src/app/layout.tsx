import type { Metadata } from "next";
import "./globals.css";
import { Sider } from "./components/sider/Sider";
import { Search } from "./components/search/Search";
import { Play } from "./components/play/Play";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Spotify",
  description: "Online Music App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="bg-[#292929]">
        <div className="container mx-auto">
          <div className="flex items-start">
            <div className="w-[280px]">
              <Sider />
            </div>
            <div className="flex-1 ml-[20px]">
              <Suspense>
                <Search />
              </Suspense>
              <main className="mt-[30px] mb-[150px]">{children}</main>
            </div>
          </div>
        </div>
        <Play />
      </body>
    </html>
  );
}
