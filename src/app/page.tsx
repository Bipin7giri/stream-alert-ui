"use client";

import { Button } from "antd";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button
        className="bg-primary text-white hover:bg-gray-300 focus:bg-gray-300"
        href="/auth/streamer/login"
      >
        Login As Streamer
      </Button>
    </main>
  );
}
