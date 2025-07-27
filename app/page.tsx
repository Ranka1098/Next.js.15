// app/page.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "home page - my app",
  description: "this is homepage of my awesome app",
};

export default function HomePage() {
  return <h1>🏠 Home</h1>;
}
