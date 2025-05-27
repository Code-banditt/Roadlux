"use client";

import { Heart } from "lucide-react";
import { useState } from "react";

import { useContextTwo } from "../_context/context2";

export default function Fav() {
  const [selected, setSelected] = useState(false);
  const { addfavorite } = useContextTwo();

  const handleClick = () => {
    setSelected((prev) => !prev);
    addfavorite();
  };

  return (
    <Heart
      onClick={() => handleClick(selected)}
      className={`w-8 h-8 cursor-pointer transition ${
        selected ? "fill-red-600" : "fill-white"
      }`}
    />
  );
}
