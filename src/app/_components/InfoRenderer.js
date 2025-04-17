"use client";

import Image from "next/image";
import { useEffect } from "react";
import InfoForm from "./InfoForm";
import { Suspense } from "react";
import { FaArrowLeft, FaHeart } from "react-icons/fa";
import Rating from "./starRater";
import Fav from "./favourite";
import { useReadMore } from "../hooks/readmore";
import { useContextTwo } from "../_context/context2";
import SecondAccord from "./secondAccord";

export default function InfoRenderer({ vehicle, onClose }) {
  const { isExpanded, toggleReadMore, handleText } = useReadMore(450);
  const { fav, setFav } = useContextTwo();

  useEffect(() => {
    if (vehicle) {
      setFav({
        name: vehicle.name,
        image: vehicle.imagebg,
        make: vehicle.make,
      });
    }
  }, [vehicle, setFav]);

  if (!vehicle) {
    return <div>No vehicle details available</div>; // Graceful fallback
  }

  return (
    <div className="absolute overflow-y-auto h-full w-full top-0 left-0 border-solid translate-y-0 transform-transition duration-500 -mx-4">
      {/* Main div */}
      <div className="rounded-lg p-4 mt-11 bg-white transition-transform transform scale-100 opacity-100 duration-300 ease-out">
        {/* Heart and Exit Button Div */}
        <div className="flex justify-between mb-4">
          <button className="text-xl font-semibold text-cyan-500 p-3 rounded-full hover:bg-opacity-50">
            <Fav />
          </button>
          <button
            className="text-sm font-semibold text-red-700 p-3 flex items-center gap-2 hover:opacity-50"
            onClick={onClose}
          >
            <FaArrowLeft />
            Exit page
          </button>
        </div>

        {/* Vehicle Info Div */}
        <div className="flex flex-col sm:flex-row gap-6 p-6 items-center sm:items-start">
          <Image
            src={vehicle.imagebg}
            height={500}
            width={500}
            alt="car"
            className="shadow-lg bg-slate-200 mb-4 sm:mb-0 sm:w-[300px] sm:h-[300px]"
          />
          <div className="flex flex-col items-center sm:items-start">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-orbitron">
              {vehicle.name || fav.name}
            </h1>
            <div className="flex gap-2 text-xs p-2 sm:text-sm sm:p-4">
              <p className="bg-slate-50 border p-2 rounded-full">
                {vehicle.make || fav.make}
              </p>
              <p className="bg-slate-50 border p-2 rounded-full">Available</p>
              <p className="bg-slate-50 border p-2 rounded-full">
                {vehicle.year}
              </p>
              <p className="bg-slate-50 border p-2 rounded-full">
                {vehicle.color}
              </p>
            </div>
            <div className="mx-6 lg:w-1/6">
              <Suspense fallback={<div>Loading...</div>}>
                <Rating />
              </Suspense>
            </div>
            <div className="m-auto p-6 text-center sm:text-left">
              <h2 className="text-2xl font-semibold font-inter">
                Vehicle Overview
              </h2>
              <p className="text-sm my-4 leading-relaxed font-lato">
                {handleText([vehicle.about])}
              </p>

              {vehicle.about.length > 450 && (
                <button
                  onClick={toggleReadMore}
                  className={`text-blue-500 font-semibold transition-all duration-300 transform text-sm mb-4 -mt-6 hover:scale-105 hover:text-blue-600 ${
                    isExpanded ? "text-blue-600" : "text-blue-500"
                  }`}
                >
                  <span className="inline-block transform transition-all duration-300">
                    {isExpanded ? "Read Less" : "Read More"}
                  </span>
                  <span
                    className={`inline-block transform transition-all duration-300 ${
                      isExpanded ? "rotate-180" : "rotate-0"
                    } ml-2`}
                  >
                    ➔
                  </span>
                </button>
              )}
              <div className="text-base mt-8">
                <h2 className="font-bold border-b-2">License Number</h2>
                <p className="font-mono">{vehicle.liscence}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Platelets Div */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center">
          <div className="col-span-1 sm:col-span-2">
            <SecondAccord vehicle={vehicle} />
          </div>
        </div>

        {/* Calendar and Form Div */}
        <div className="flex justify-center items-center mt-10">
          <Suspense fallback={<div>Loading...</div>}>
            {" "}
            <InfoForm vehicle={vehicle} />{" "}
          </Suspense>
        </div>
      </div>
    </div>
  );
}
