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

  // Ensure that rentalStart and rentalEnd are always set correctly.
  useEffect(() => {
    if (!rentalStart) {
      setRentalStart(startDate);
    }
    if (!rentalEnd) {
      setRentalEnd(endDate);
    }
  }, [
    startDate,
    endDate,
    rentalStart,
    rentalEnd,
    setRentalStart,
    setRentalEnd,
  ]);

  useEffect(() => {
    if (startDate && endDate) {
      const differenceInTime = endDate.getTime() - startDate.getTime();
      const days = Math.max(
        Math.floor(differenceInTime / (1000 * 3600 * 24)),
        0
      );
      setDuration(days > 0 ? `${days} day(s)` : "");
    }
  }, [startDate, endDate, setDuration]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!duration || duration === "") {
      alert("Please select a rental duration.");
      return;
    }

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
            }}
            dateFormat="dd/MM/yyyy"
            isClearable
            placeholderText="Select a date"
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
            }}
            dateFormat="dd/MM/yyyy"
            isClearable
            placeholderText="Select a date"
            className="text-sm border rounded-lg h-9 p-2 bg-white"
          />
        </div>

        <div className="flex flex-col -my-2 gap-3">
          <label htmlFor="duration" className="text-base">
            Duration
          </label>
          <input
            required
            value={duration || "Select duration"}
            disabled
            id="duration"
            className="text-sm border rounded-lg h-9 p-2"
          />
        </div>
      </div>
    </div>
  );
}
