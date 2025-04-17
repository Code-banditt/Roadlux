"use client";

import Image from "next/image";
import image1 from "/public/imgs/image0_0.jpg";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Brand from "./brand";
import { fetchFavourites } from "../lib/library";

export default function Navigation() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (session?.user?.name) {
      const fetchData = async () => {
        const fetchedFavorites = await fetchFavourites(session.user.name);
        setFavorites(fetchedFavorites);
      };
      fetchData();
    }
  }, [session]);
  const handleLogout = () => {
    router.push("/api/auth/signout");
  };

  return (
    <div className="flex flex-col lg:flex-row justify-around font-poppins p-4 gap-6 lg:gap-0">
      {/*header*/}
      <Brand />
      {/*links*/}
      <ul className="flex flex-col lg:flex-row justify-center gap-8 text-base m-2 font-bold font-lato ">
        <Link href="/" className="hover:opacity-35 cursor-pointer text-lg ">
          Home
        </Link>
        <Link href="/store" className="hover:opacity-35 cursor-pointer text-xl">
          Vehicles
        </Link>
        <Link
          href="/bookings"
          className="hover:opacity-35 cursor-pointer text-xl"
        >
          Booking
        </Link>
        <Link href="/About" className="hover:opacity-35 cursor-pointer text-xl">
          About
        </Link>

        <Link
          href="/profile"
          className="hover:opacity-35 cursor-pointer text-xl"
        >
          Profile
        </Link>
      </ul>
      {/*profile and wishlist*/}
      {session ? (
        <div className=" md:flex gap-4 items-start lg:items-center mt-4 lg:mt-0 ">
          <Link href={"/favourites"} className="relative">
            <svg
              fill="#000000"
              width="40px"
              height="40px"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g data-name="24 wishlist" id="_24_wishlist">
                  {" "}
                  <path d="M27.11,17.74a1,1,0,0,1-1,1H16.79a1,1,0,0,1,0-2h9.32A1,1,0,0,1,27.11,17.74Z"></path>{" "}
                  <path d="M39.79,16.65,35.71,20a1.025,1.025,0,0,1-.64.23.948.948,0,0,1-.65-.25l-2.78-2.42a1,1,0,0,1-.1-1.41,1.011,1.011,0,0,1,1.42-.1l2.13,1.87,3.44-2.82a.989.989,0,0,1,1.4.14A1,1,0,0,1,39.79,16.65Z"></path>{" "}
                  <path d="M27.11,27.06a1,1,0,0,1-1,1H16.79a1,1,0,0,1,0-2h9.32A1,1,0,0,1,27.11,27.06Z"></path>{" "}
                  <path d="M39.79,25.97l-4.08,3.35a.97.97,0,0,1-.64.23.948.948,0,0,1-.65-.25l-2.78-2.42a1,1,0,0,1-.1-1.41,1.011,1.011,0,0,1,1.42-.1l2.13,1.87,3.44-2.82a.989.989,0,0,1,1.4.14A1,1,0,0,1,39.79,25.97Z"></path>{" "}
                  <path d="M27.11,36.38a1,1,0,0,1-1,1H16.79a1,1,0,0,1,0-2h9.32A1,1,0,0,1,27.11,36.38Z"></path>{" "}
                  <path d="M39.79,35.29l-4.08,3.36a1.015,1.015,0,0,1-.64.22.987.987,0,0,1-.65-.24L31.64,36.2a1,1,0,0,1-.1-1.41,1.01,1.01,0,0,1,1.42-.09l2.13,1.86,3.44-2.82a1,1,0,0,1,1.26,1.55Z"></path>{" "}
                  <path d="M27.11,45.7a1,1,0,0,1-1,1H16.79a1,1,0,0,1,0-2h9.32A1,1,0,0,1,27.11,45.7Z"></path>{" "}
                  <path d="M45.75,38.46V9.93A3.718,3.718,0,0,0,41.96,6.3H35.5V5.5a2.006,2.006,0,0,0-2-2H22.45a2.006,2.006,0,0,0-2,2v.8H13.99a3.727,3.727,0,0,0-3.8,3.63V52.2a3.728,3.728,0,0,0,3.8,3.64H33.45a11.248,11.248,0,1,0,12.3-17.38ZM22.45,5.5H33.5V9.09H22.45ZM13.99,53.84a1.752,1.752,0,0,1-1.8-1.64V9.93a1.751,1.751,0,0,1,1.8-1.63h6.46v.79a2,2,0,0,0,2,2H33.5a2,2,0,0,0,2-2V8.3h6.46a1.741,1.741,0,0,1,1.79,1.63V38.06a11.726,11.726,0,0,0-1.2-.07A11.238,11.238,0,0,0,32.29,53.84ZM42.55,58.5a9.255,9.255,0,1,1,9.26-9.25A9.261,9.261,0,0,1,42.55,58.5Z"></path>{" "}
                  <path d="M49.52,46.61c-.01-.11-.03-.21-.05-.32a3.519,3.519,0,0,0-3.48-2.94h-.02a5,5,0,0,0-3.42,1.46,4.963,4.963,0,0,0-3.42-1.46h-.01a3.326,3.326,0,0,0-.96.15.749.749,0,0,0-.16.04,3.5,3.5,0,0,0-2.01,1.73c-.01.03-.02.05-.03.08a3.682,3.682,0,0,0-.33.95c-.02.1-.03.2-.05.31-.65,4.9,4.37,8.58,5.89,9.57l.51.35a.931.931,0,0,0,.57.19.959.959,0,0,0,.58-.19l.47-.33C45.15,55.19,50.17,51.51,49.52,46.61ZM42.55,54.5c-2.67-1.76-5.38-4.67-4.98-7.63l.03-.21a1.526,1.526,0,0,1,1.52-1.31,3.026,3.026,0,0,1,2.54,1.58,1.039,1.039,0,0,0,1.78,0,3.039,3.039,0,0,1,2.54-1.58,1.518,1.518,0,0,1,1.52,1.3l.04.22C47.93,49.82,45.25,52.72,42.55,54.5Z"></path>{" "}
                </g>{" "}
              </g>
            </svg>
            {/*whislist number*/}
            <motion.p
              className="text-xs absolute -top-2 left-6 text-white bg-black rounded-full p-2 border border-orange-500 shadow-[0_0_15px_#ff6a00]"
              animate={{
                scale: [1, 1.2, 1], // Pulsating effect
                boxShadow: [
                  "0px 0px 10px #ff6a00",
                  "0px 0px 20px #ff6a00",
                  "0px 0px 10px #ff6a00",
                ], // Glowing animation
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {favorites.length}
            </motion.p>
          </Link>{" "}
          <Image
            src={session?.user?.image || image1}
            alt="rd"
            width={500}
            height={300}
            className="bg-black w-10 rounded-full"
          />{" "}
          <motion.button
            onClick={handleLogout}
            className="text-base text-white font-bold py-2 px-4 rounded-full hover:bg-gray-800 bg-black border-2 border-slate-400 "
            whileHover={{
              scale: 1.2,
            }}
          >
            Sign Out
          </motion.button>
        </div>
      ) : (
        <span className="flex gap-4">
          <Image
            src={session?.user?.image || image1}
            alt="Profile picture"
            width={500}
            height={300}
            className="bg-black w-10 h-10 rounded-full cursor-pointer object-cover"
          />

          <Link
            href="/login"
            className="text-base bg-black text-white font-bold py-2 px-4 rounded-full hover:bg-gray-800"
          >
            LogIn
          </Link>
        </span>
      )}
    </div>
  );
}
