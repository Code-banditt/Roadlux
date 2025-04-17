"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import image1 from "/public/imgs/tracker1.png";
import Image from "next/image";
import Brand from "../_components/brand";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function RedirectPage() {
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <div className="flex flex-col gap-10 items-center justify-center min-h-screen bg-gray-900 text-white px-6 text-center">
      <div className=" flex gap-6 items-center">
        <Link href={"/store"}>
          <h1 className="text-white cursor-pointer hover:text-red-400 underline ">
            Return to store
          </h1>
        </Link>
        <Brand />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl space-y-6"
      >
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Booking Successfull 🎉🎉
        </h1>
        <p className="text-gray-400 text-lg">
          Stay updated with your orders, check status, and manage your bookings
          effortlessly. Thanks for Ordering 🎉.
        </p>
        <span>
          We sent you a confirmation email and your reciept{" "}
          <p className="text-orange-500">@{session?.user?.email} </p>
        </span>
        <div className="w-full h-60 bg-gray-800 rounded-2xl flex items-center justify-center">
          {/* Replace this div with an actual image */}
          <span className="text-gray-500">
            <Image src={image1} width={400} height={400} alt="img" />
          </span>
        </div>
        <button
          className="px-6 py-3 text-lg font-semibold bg-indigo-500 hover:bg-indigo-400 rounded-lg transition"
          onClick={() => router.push("/bookings")}
        >
          Go to Booking Page
        </button>
      </motion.div>
    </div>
  );
}
