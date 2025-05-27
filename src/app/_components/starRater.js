"use client";

import { Star } from "lucide-react";
import { useState } from "react";
import { useVehicleContext } from "../_context/vehicleContex";

export default function Rating({ totalStars = 5, onRate }) {
  const [hovered, setHovered] = useState(0);
  const [selected, setSelected] = useState(0);
  const { handleRated } = useVehicleContext();

  const handleClick = (rating) => {
    setSelected(rating);
    if (onRate) {
      onRate(rating);
    }

    handleRated();
  };

  return (
    <div className="flex gap-1">
      {Array.from({ length: totalStars }, (_, i) => {
        const rating = i + 1;
        return (
          <Star
            key={rating}
            onMouseEnter={() => setHovered(rating)}
            onMouseLeave={() => setHovered(0)}
            onClick={() => handleClick(rating)}
            className={`w-5 h-8 cursor-pointer transition ${
              rating <= (hovered || selected)
                ? "fill-yellow-400 stroke-yellow-400"
                : "stroke-gray-400"
            }`}
          />
        );
      })}
    </div>
  );
}
