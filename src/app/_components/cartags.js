"use client";

import Link from "next/link";
import { useVehicleContext } from "../_context/vehicleContex";

export default function Cartages() {
  const { handleBrandClick, handleMakeClick } = useVehicleContext();
  return (
    <div className="absolute top-10 left-10 flex justify-center gap-2 text-black hidden md:block">
      <p className="text-xs font-bold">Quick navigation</p>
      <Link
        onClick={() => handleBrandClick("sports car")}
        className="bg-white border text-xs px-3 py-1 rounded-full hover:opacity-50 cursor-pointer hover:scale-125 transition duration-500 ease-in-out shadow-md"
        href="/store"
      >
        Tesla
      </Link>
      <Link
        onClick={() => handleBrandClick("SUV")}
        className="bg-white border text-xs px-3 py-1 rounded-full hover:opacity-50 cursor-pointer hover:scale-125 transition duration-500 ease-in-out shadow-md"
        href="/store"
      >
        SUV
      </Link>

      <Link
        onClick={() => handleMakeClick("Bentley")}
        className="bg-white border text-xs px-3 py-1 rounded-full hover:opacity-50 cursor-pointer hover:scale-125 transition duration-500 ease-in-out shadow-md"
        href="/store"
      >
        Bentley
      </Link>

      <Link
        onClick={() => handleMakeClick("Mercedes")}
        className="bg-white border text-xs px-3 py-1 rounded-full hover:opacity-50 cursor-pointer hover:scale-125 transition duration-500 ease-in-out shadow-md"
        href="/store"
      >
        Mercedes
      </Link>

      <Link
        onClick={() => handleBrandClick("sedan")}
        className="bg-white border text-xs px-3 py-1 rounded-full hover:opacity-50 cursor-pointer hover:scale-125 transition duration-500 ease-in-out shadow-md"
        href="/store"
      >
        Sedan
      </Link>
    </div>
  );
}
