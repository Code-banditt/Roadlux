"use client";
import { createContext, useContext, useState } from "react";
import { AddFavourites, FindBooking } from "../lib/library";
import { Alert, Error } from "../hooks/Toast";
import { useSession } from "next-auth/react";

// Create the context
const ContextTWO = createContext();

// Create the provider
export function BookProvider({ children }) {
  const [fav, setFav] = useState("");

  const { data: session } = useSession();

  const addfavorite = async () => {
    if (!session || !session.user) {
      Alert("You must be logged in to add favorites!");
      console.error("User is not logged in.");
      return;
    }

    const favorite = {
      name: fav.name,
      image: fav.image,
      customer: session.user.name,
    };

    try {
      const add = await AddFavourites(favorite);
      console.log("API response:", add);
      setFav(add);
      Alert("Added to wishlist");
    } catch (err) {
      console.error("Failed to add favorite:", err); // ✅ Full error log
      Error("Failed to add to wishlist");
    }
  };

  return (
    <ContextTWO.Provider value={{ addfavorite, fav, setFav }}>
      {children}
    </ContextTWO.Provider>
  );
}

// Custom hook for using the context
export function useContextTwo() {
  return useContext(ContextTWO);
}
