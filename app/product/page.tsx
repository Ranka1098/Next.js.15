"use client"; // Matlab: Ye component client-side pe chalega.
// Next.js me agar aap useState, useEffect, useRouter jaise React hooks use karte ho to 'use client' likhna mandatory hai.
// Isse ye component server-side render nahi hoga.

import { useRouter } from "next/navigation";
// useRouter ek hook hai jo Next.js ka navigation control deta hai.
// Isse aap programmatically kisi aur page pe redirect kar sakte ho (router.push()).
import Link from "next/link";

const productPage = () => {
  const router = useRouter();

  const handleClick = (id: string) => {
    router.push(`/product/${id}`);
  };

  return (
    <div>
      <Link href="/">
        <p className="underline cursor-pointer">got to home page</p>
      </Link>
      <ul>
        <li
          className="my-1 hover:bg-gray-100 cursor-pointer"
          onClick={() => handleClick("1")}
        >
          Product 1
        </li>
        <li
          className="my-1 hover:bg-gray-100 cursor-pointer"
          onClick={() => handleClick("2")}
        >
          Product 2
        </li>
        <li
          className="my-1 hover:bg-gray-100 cursor-pointer"
          onClick={() => handleClick("3")}
        >
          Product 3
        </li>
      </ul>
    </div>
  );
};

export default productPage;
