"use client";

import { Suspense, useEffect, useState } from "react";

import VehicleCard from "./vehicleCard";
import InfoRenderer from "./InfoRenderer";
import { useSession } from "next-auth/react";
import { useVehicleContext } from "../_context/vehicleContex";
import { motion, AnimatePresence, direction } from "framer-motion";

export default function VehiclePopupManager({ vehicle }) {
  const {
    page,
    vehicles,
    onNext,
    onPrevious,
    hasNextPage,
    hasPreviousPage,
    handleVehicleClick,
    closePopup,
    selectedVehicle,
    isloading,
  } = useVehicleContext();

  const { data: session, status } = useSession();

  return (
    <div className="col-span-4 p-6 flex flex-col gap-6 shadow-lg rounded-lg">
      {/* Header */}
      <div className="text-base flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <span>Dear</span>
        <span className="font-bold text-orange-600">{session?.user?.name}</span>
        Choose your vehicle
        <span className="flex font-mono gap-2">
          Page <span>{page}</span> of <span>7</span>
        </span>
      </div>

      {/* Vehicles Section */}
      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial={{ x: 300, opacity: 0, scale: 0.9, rotateY: 20 }}
          animate={{ x: 0, opacity: 1, scale: 1, rotateY: 0 }}
          exit={{ x: -300, opacity: 0, scale: 0.9, rotateY: -15 }}
          transition={{
            x: { type: "tween", duration: 0.4 },
            opacity: { duration: 0.3 },
            scale: { duration: 0.4 },
            rotateY: { duration: 0.5 },
            ease: "easeInOut",
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-base gap-4 p-4"
        >
          {isloading
            ? [...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="h-[200px] bg-gray-200 animate-pulse rounded-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                />
              ))
            : vehicles.map((vehicle) => (
                <VehicleCard
                  key={vehicle.vehicleID}
                  vehicle={vehicle}
                  onClick={() => handleVehicleClick(vehicle)}
                  priority
                />
              ))}
        </motion.div>
      </AnimatePresence>

      {/* Pagination Buttons */}
      <div className="flex justify-between mt-4">
        <button
          onClick={onPrevious}
          disabled={!hasPreviousPage()}
          className={`bg-white text-black font-thin text-sm py-2 px-4 rounded shadow hover:bg-gray-200 transition duration-300 ${
            !hasPreviousPage() ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Previous
        </button>

        <button
          type="button"
          onClick={onNext}
          disabled={!hasNextPage()}
          className={`bg-white text-black font-thin text-sm py-2 px-4 rounded shadow hover:bg-gray-200 transition duration-300 ${
            !hasNextPage() ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Next
        </button>
      </div>

      {/* Display Popup When a Vehicle Is Selected */}
      <AnimatePresence mode="wait">
        {selectedVehicle && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 10 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed inset-0 flex items-center justify-center z-50"
          >
            <InfoRenderer vehicle={selectedVehicle} onClose={closePopup} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
