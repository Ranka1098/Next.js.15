// app/page.tsx

import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h2>🏠 Home Page</h2>
      <Link href={"/product"}>
        <p className="underline cursor-pointer">go to product page</p>
      </Link>
    </div>
  );
}
