"use client";

import MyDatePicker from "./Calender";
import { useSession } from "next-auth/react";
import { Alert, Error } from "../hooks/Toast";
import { bookVehicles, getExchangeRate, getUserCurrency } from "../lib/library";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useVehicleContext } from "../_context/vehicleContex";
import formatCurrency from "../lib/helper";

export default function InfoForm({ vehicle }) {
  const { data: session } = useSession();
  const router = useRouter();
  const random = Math.floor(1000 + Math.random() * 9000);
  const [pickUpAt, setPickUpAt] = useState("");
  const [dropOffAt, setDropOffAt] = useState("");
  const [rentalStart, setRentalStart] = useState("");
  const [rentalEnd, setRentalEnd] = useState("");
  const [duration, setDuration] = useState("");
  const numericDuration = parseInt(duration);
  const [userCurrency, setUserCurrency] = useState("USD");
  const [exchangeRate, setExchangeRate] = useState(1);
  const { closePopup } = useVehicleContext();

  const calc = (vehicle.PPD * (numericDuration || 0) + 91) * exchangeRate;
  const formattedCalc = formatCurrency(calc, userCurrency);

  //fetch exchange rate

  useEffect(() => {
    async function fetchCurrency() {
      const userInfo = await getUserCurrency();
      setUserCurrency(userInfo.currency);
      setPickUpAt(userInfo.country);
      console.log(userInfo);

      const rate = await getExchangeRate("USD", userInfo.currency);
      setExchangeRate(rate);
    }

    fetchCurrency();
  }, []);

  //book vehicle
  const handleCheckout = async (e) => {
    try {
      // Ensure that the user is logged in
      if (!session || !session.user) {
        throw new Error("You must be logged in to make a booking.");
      }

      const bookingData = {
        rentalEnd,
        rentalStart,
        pickUpAt,
        dropOffAt,
        customerID: session.user.name, // User ID from session
        vehicleID: vehicle.vehicleID, // Vehicle ID from the passed props
        name: vehicle.name,
        payment: calc, // Price per day from vehicle data
        rentalID: random,
      };
      console.log("Sending booking data:", bookingData);
      // Call the fetchBooking method (or insert booking method) with bookingData
      const booking = await bookVehicles(bookingData);
      if (booking) {
        Alert("Booking successful!");
        closePopup();
        router.push("/redirect");
      }
    } catch (err) {
      Error("Booking failed. Please try again.");
      console.error("Booking error:", err?.message || err);
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault(); // Prevent page reload
        handleCheckout();
      }}
      className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg space-y-6 sm:max-w-md lg:max-w-4xl"
    >
      <h2 className="text-2xl font-semibold text-gray-800 text-center sm:text-left">
        Booking Information
      </h2>

      <div className="space-y-4">
        {/* Name Input */}
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Name
          </label>
          <input
            type="text"
            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            defaultValue={vehicle.name}
            disabled={true}
          />
        </div>

        {/* Vehicle Input */}
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Vehicle
          </label>
          <input
            type="text"
            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            defaultValue={vehicle.make}
            disabled={true}
          />
        </div>

        {/* Vehicle ID Input */}
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Vehicle ID
          </label>
          <input
            type="text"
            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            defaultValue={vehicle.vehicleID}
            disabled={true}
          />
        </div>

        {/* Pickup Location Input */}
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Pickup Location
          </label>
          <input
            type="text"
            defaultValue={pickUpAt}
            disabled={true}
            required
            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
            placeholder="Enter pickup location"
          />
        </div>

        {/* Drop-off Location Input */}
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Drop-off Location
          </label>
          <input
            type="text"
            value={dropOffAt}
            onChange={(e) => setDropOffAt(e.target.value)}
            required
            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
            placeholder="Enter drop-off location"
          />
        </div>

        {/* Transaction ID Input */}
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Transaction ID
          </label>
          <input
            type="text"
            value={random}
            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            disabled
          />
        </div>

        {/* Date Picker */}
        <MyDatePicker
          required
          rentalStart={rentalStart}
          setRentalStart={setRentalStart}
          rentalEnd={rentalEnd}
          setRentalEnd={setRentalEnd}
          duration={duration}
          setDuration={setDuration}
        />

        {/* Price per Day Input */}
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Price per Day
          </label>
          <input
            type="text"
            defaultValue={vehicle.PPD}
            disabled
            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center">
        <button
          type="submit"
          className="w-full sm:w-auto py-3 px-6 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition duration-300"
        >
          Pay on Delivery {formatCurrency(calc, userCurrency)}
        </button>
      </div>

      {/* Disclaimer */}
      <p className="text-xs text-center text-gray-500 sm:text-sm">
        The total will be calculated based on the duration and price per day. A
        $91 tax is included. The remaining amount will be paid during pickup.
      </p>
    </form>
  );
}
