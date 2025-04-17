"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useVehicleContext } from "../_context/vehicleContex";
import Brand from "./brand";
import Link from "next/link";

export default function SideBar() {
  const { data: session, status } = useSession();
  const { handleBrandClick, clearFilter } = useVehicleContext();

  return (
    <aside className="w-full md:w-64 lg:w-72  p-4 mr-4 space-y-2 md:space-y-8 ">
      {/* Brand */}
      <div className="border-b pb-2">
        <Brand />
      </div>

      {/* Filter Header */}
      <div className="flex justify-between items-center border-b pb-2 mr-4">
        <h1 className="text-base font-medium text-gray-800">Filter</h1>
        <p
          onClick={clearFilter}
          className="text-sm text-red-500 hover:underline cursor-pointer"
        >
          Clear filter
        </p>
      </div>

      {/* Category Filter */}
      <div className="border-b pb-4">
        <h2 className="text-sm text-red-600 font-bold mb-2">CAR CATEGORY</h2>
        <ul className="space-y-2">
          {["Sedan", "Sports Car", "SUV", "Coupe"].map((type) => (
            <li
              key={type}
              onClick={() => handleBrandClick(type.toLowerCase())}
              className="text-sm text-gray-700 hover:text-indigo-600 cursor-pointer"
            >
              {type}
            </li>
          ))}
        </ul>
      </div>

      {/* Price Filter */}
      <div className="border-b pb-4">
        <h2 className="text-sm text-red-600 font-bold mb-2">PRICE PER DAY</h2>
        <ul className="space-y-2 text-sm text-gray-700">
          <li>$50/day</li>
          <li>$70/day</li>
          <li>$90/day</li>
          <li>$100/day</li>
        </ul>
      </div>

      {/* Logout */}
      <div className="mt-6 mr-4">
        <button className="w-full bg-black text-white rounded-lg px-4 py-3 flex items-center justify-between hover:opacity-80 transition">
          <span className="text-red-500 font-semibold">Logout</span>
          <span className="text-sm">{session?.user?.name}</span>
        </button>
      </div>
    </aside>
  );
}
