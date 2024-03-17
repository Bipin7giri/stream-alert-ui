"use client";
import { Button } from "@material-tailwind/react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button key={"button"} size="lg" variant="gradient" placeholder={"ok"}>
        hi
      </Button>
      ;
    </main>
  );
}
