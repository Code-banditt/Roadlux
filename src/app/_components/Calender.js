"use client";
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function MyDatePicker({
  rentalStart,
  setRentalStart,
  rentalEnd,
  setRentalEnd,
  duration,
  setDuration,
}) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  // Store duration as a string

  // Calculate duration whenever startDate or endDate changes
  useEffect(() => {
    if (startDate && endDate) {
      const differenceInTime = endDate.getTime() - startDate.getTime();
      // Calculate the duration in whole days (rounded down)
      const days = Math.max(
        Math.floor(differenceInTime / (1000 * 3600 * 24)),
        0
      ); // Ensure non-negative, rounded down
      setDuration(days > 0 ? `${days} day(s)` : ""); // Avoid negative values
    }
  }, [startDate, endDate, setDuration]);

  useEffect(() => {
    // Synchronize rentalStart state with startDate on mount (only if it's not already set)
    if (!rentalStart) {
      setRentalStart(startDate);
    }
  }, [startDate, rentalStart, setRentalStart]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate duration before submitting
    if (!duration || duration === "") {
      alert("Please select a rental duration.");
      return;
    }

    // Handle the actual form submission
    console.log("Form submitted");
  };

  return (
    <div onSubmit={handleSubmit}>
      <div className="flex gap-4 flex-wrap items-center">
        <div>
          <label htmlFor="fromDate" className="text-lg flex gap-2">
            From
          </label>
          <DatePicker
            value={rentalStart}
            disabled={true}
            required
            id="fromDate"
            selected={startDate}
            onChange={(date) => {
              setStartDate(date);
              setRentalStart(date);
            }} // Update state with the selected date
            dateFormat="dd/MM/yyyy" // Optional: Specify the date format
            isClearable // Optional: Adds a clear button
            placeholderText="Select a date" // Optional: Placeholder text
            className="text-sm border rounded-lg h-9 p-2 bg-white"
          />
        </div>

        <div>
          <label htmlFor="toDate" className="text-lg flex gap-2">
            To
          </label>
          <DatePicker
            value={rentalEnd}
            id="toDate"
            selected={endDate}
            onChange={(date) => {
              setEndDate(date);
              setRentalEnd(date);
            }} // Update state with the selected date
            dateFormat="dd/MM/yyyy" // Optional: Specify the date format
            isClearable // Optional: Adds a clear button
            placeholderText="Select a date" // Optional: Placeholder text
            className="text-sm border rounded-lg h-9 p-2 bg-white"
          />
        </div>

        <div className="flex flex-col -my-2 gap-3">
          <label htmlFor="duration" className="text-base">
            Duration
          </label>
          <input
            required
            value={duration}
            disabled
            id="duration"
            className="text-sm border rounded-lg h-9 p-2"
          />
        </div>
      </div>
    </div>
  );
}
