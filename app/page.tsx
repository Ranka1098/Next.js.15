"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleClicked = () => {
    router.push("/product");
  };
  return (
    <div className="text-center ">
      <p className="text-3xl font-bold"> My Next.Js. Crash Course</p>
      <p className="cursor-pointer my-2" onClick={handleClicked}>
        Product Page
      </p>
    </div>
  );
}
