import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import StreamerDashboardLayout from "@/components/dashboard/SideBar/StreamerSideBarLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Streamer Dashboard",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StreamerDashboardLayout>{children}</StreamerDashboardLayout>
      </body>
    </html>
  );
}
