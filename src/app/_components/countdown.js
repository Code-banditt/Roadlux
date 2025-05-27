"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Countdown({ booking }) {
  const [timeLeft, setTimeLeft] = useState({});
  const [status, setStatus] = useState("upcoming"); // upcoming, active, ended

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const start = new Date(booking.rentalStart);
      const end = new Date(booking.rentalEnd);

      let targetDate;
      if (now < start) {
        setStatus("upcoming");
        targetDate = start;
      } else if (now >= start && now <= end) {
        setStatus("active");
        targetDate = end;
      } else {
        setStatus("ended");
        setTimeLeft({});
        clearInterval(interval);
        return;
      }

      const diff = targetDate - now;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [booking.rentalStart, booking.rentalEnd]);

  if (!booking) {
    return <p>No booking data available</p>; // or return null or a spinner
  }

  const renderTimeUnit = (value, label) => (
    <div className="text-center">
      <span className="countdown font-mono text-4xl">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={value}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ "--value": value }}
            aria-live="polite"
          >
            {value}
          </motion.span>
        </AnimatePresence>
      </span>
      <div className="text-sm">{label}</div>
    </div>
  );

  return (
    <div className="bg-secondary p-4 rounded-sm flex flex-col items-center gap-3">
      {/* Status */}
      <div className="text-primary text-sm">
        {status === "upcoming" && "Rental starts in:"}
        {status === "active" && "Rental ends in:"}
        {status === "ended" && "Rental completed ✅"}
      </div>

      {/* Countdown */}
      {status !== "ended" && (
        <div className="flex gap-5">
          {renderTimeUnit(timeLeft.days, "days")}
          {renderTimeUnit(timeLeft.hours, "hours")}
          {renderTimeUnit(timeLeft.minutes, "min")}
          {renderTimeUnit(timeLeft.seconds, "sec")}
        </div>
      )}

      {/* Optional: Show rental dates */}
      <div className="text-xs text-gray-300 mt-2">
        <div>Start: {new Date(booking.rentalStart).toLocaleString()}</div>
        <div>End: {new Date(booking.rentalEnd).toLocaleString()}</div>
      </div>
    </div>
  );
}
