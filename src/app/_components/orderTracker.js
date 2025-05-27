"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Truck, LoaderCircle, Flag } from "lucide-react";

export default function OrderTracker({ booking }) {
  const steps = [
    { label: "Order Placed", icon: <CheckCircle className="w-5 h-5" /> },
    { label: "Processing", icon: <LoaderCircle className="w-5 h-5" /> },
    { label: "Shipping", icon: <Truck className="w-5 h-5" /> },
    { label: "Delivered", icon: <Flag className="w-5 h-5" /> },
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const [trigger, setTrigger] = useState(0); // ✅ Trigger state

  useEffect(() => {
    if (!booking) return;

    let timers = [];
    let interval;

    const rentalEndDate = new Date(booking.rentalEnd);
    const now = new Date();

    const isPastRentalEnd = rentalEndDate < now;

    if (isPastRentalEnd) {
      setCurrentStep(steps.length - 1); // Delivered
    } else {
      setCurrentStep(0);
      timers.push(setTimeout(() => setCurrentStep(1), 1000)); // Processing
      timers.push(setTimeout(() => setCurrentStep(2), 2000)); // Shipping
      timers.push(setTimeout(() => setCurrentStep(3), 5000)); // Delivered
    }

    interval = setInterval(() => {
      const currentTime = new Date();
      if (currentTime >= rentalEndDate) {
        setCurrentStep(steps.length - 1); // Delivered
      }
    }, 10000); // Check every 10 seconds (you can adjust)

    return () => {
      timers.forEach(clearTimeout);
      clearInterval(interval);
    };
  }, [booking, trigger, steps.length]); // ✅ Add trigger dependency

  const handleBooking = () => {
    if (!booking) return;
    setTrigger((prev) => prev + 1); // ✅ Trigger effect to restart
  };

  return (
    <div className="w-full max-w-xl mx-auto p-4 bg-white rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold mb-6 text-center text-gray-800">
        Order Tracker
      </h2>

      <button
        onClick={handleBooking}
        className="mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Start Booking
      </button>

      <div className="flex items-center justify-between relative">
        {/* Progress Line */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 transform -translate-y-1/2 z-0">
          <motion.div
            className="h-1 bg-blue-500"
            initial={{ width: 0 }}
            animate={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
            transition={{ duration: 0.6 }}
          />
        </div>

        {/* Steps */}
        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isActive = index === currentStep;

          return (
            <div
              key={index}
              className="relative z-10 flex flex-col items-center"
            >
              <motion.div
                className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                  isCompleted
                    ? "bg-blue-500 border-blue-500 text-white"
                    : isActive
                    ? "border-blue-500 text-blue-500 bg-white"
                    : "border-gray-300 text-gray-400 bg-white"
                }`}
                whileHover={{ scale: 1.1 }}
              >
                {step.icon}
              </motion.div>
              <div
                className={`mt-2 text-sm text-center ${
                  isActive ? "text-blue-600 font-medium" : "text-gray-500"
                }`}
              >
                {step.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
