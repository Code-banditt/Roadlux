"use client";
import Image from "next/image";
import { useVehicleContext } from "../_context/vehicleContex";
import { useEffect } from "react";

export default function Checkout() {
  return (
    <div className="absolute inset-0 z-50 bg-white/30 backdrop-blur-sm flex items-center justify-center ">
      {/* Main div */}
      <div className="fixed top-auto w-11/12 max-w-5xl h-auto p-6  bg-white rounded-2xl shadow-2xl flex gap-4">
        {/* Sidebar div */}
        <div className=" w-1/2 text-base flex p-2 border shadow-sm border-b-4 ">
          <div></div>

          <h1 className="font-bold text-4xl my-5 font-mono"></h1>
        </div>

        {/* Car list */}
        <div className=" w-1/4 h-2/3 p-6 flex flex-col gap-6 shadow-sm border">
          <h1 className="text-base font-bold border-b">Order summary</h1>
          <div className=" text-base gap-8 p-4 flex flex-col justify-between">
            <span className="flex justify-between items-center border-b"></span>
            <button className="bg-black text-white p-2 rounded-lg hover:bg-opacity-35"></button>
          </div>
        </div>
      </div>
    </div>
  );
}
