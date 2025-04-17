"use client";
import { useRouter } from "next/navigation";
import { FaGoogle } from "react-icons/fa";
import Image from "next/image";
import image3 from "/public/imgs/tesla2.jpg";
import Brand from "../_components/brand";

export default function Login() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/api/auth/signin");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-h-screen bg-gray-100">
      {/* Image Section */}
      <div className="relative hidden md:block md:col-span-1 lg:col-span-2">
        <Image
          src={image3}
          layout="fill"
          objectFit="cover"
          alt="Car"
          className="rounded-none lg:rounded-r-lg"
        />
      </div>

      {/* Login Section */}
      <div className="flex flex-col items-center justify-center gap-6 p-6 bg-white">
        <Brand />

        <button
          onClick={handleLogin}
          className="flex items-center gap-3 bg-black text-white px-5 py-3 rounded-xl hover:opacity-55"
        >
          <FaGoogle className="text-xl" />
          Continue with Google
        </button>

        <p className="text-sm text-gray-600 mt-2 text-center">
          Sign in to gain full access
        </p>
      </div>
    </div>
  );
}
