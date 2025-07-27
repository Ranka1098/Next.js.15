"use client";

import { useParams } from "next/navigation";

export default function ProductDetail() {
  const params = useParams();
  const productId = params.productId;

  return <div>Product Detail: {productId}</div>;
}
