"use client";

import Link from "next/link";
import { StartPageLayout } from "@/styles/page-style";

export default function Page() {
  return (
    <StartPageLayout>
      <h1>{`Welcome to Switter 🍬\n환영합니다!`}</h1>
      <Link href="/home">Start →</Link>
    </StartPageLayout>
  );
}
