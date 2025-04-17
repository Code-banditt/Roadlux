"use client";
import { FaBackward, FaSearch } from "react-icons/fa";

import { FindBooking } from "../lib/library";
import { useState } from "react";
import Link from "next/link";
import Brand from "../_components/brand";
import Countdown from "../_components/countdown";
import Reciept from "../_components/reciept";
import OrderTracker from "../_components/orderTracker";

export default function Tracker() {
  const [rentalID, setrentalID] = useState("");
  const [booking, setBooking] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleClick = async () => {
    setLoading(true);
    setError("");

    try {
      const result = await FindBooking(rentalID);
      setBooking(result);
    } catch (err) {
      setError("Failed to fetch booking.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#0a1f24]">
      {/* Top Bar */}
      <div className="p-4 flex items-center justify-between w-full max-w-screen-lg">
        <Link href="/bookings">
          <FaBackward className="text-white text-xl cursor-pointer hover:opacity-60" />
        </Link>
        <Brand />
      </div>

      {/* Main Content Wrapper */}
      <div className="w-full max-w-screen-lg flex flex-col gap-8 p-4">
        {/* Search Bar */}
        <div className="relative w-full sm:w-4/5 md:w-2/3 lg:w-1/2 mx-auto">
          <input
            type="text"
            placeholder="Enter Rental ID"
            value={rentalID}
            onChange={(e) => setrentalID(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder:text-white/60 rounded-xl shadow-inner focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-white/60 absolute left-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={handleClick}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M16.5 10.5a6 6 0 11-12 0 6 6 0 0112 0z"
            />
          </svg>
        </div>

        {/* Countdown + Tracker */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <Countdown booking={booking} />
          <OrderTracker />
        </div>

        {/* Map/Receipt Display */}
        <div className="w-full h-[300px] md:h-[400px] bg-black/90 backdrop-blur-md border border-white/10 rounded-xl shadow-lg overflow-hidden">
          {booking && <Reciept booking={booking} />}
        </div>

        {/* Optional error */}
        {error && <p className="text-red-400 text-center">{error}</p>}
      </div>
    </div>
  );
}
