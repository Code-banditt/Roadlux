"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaHeart, FaTrashAlt } from "react-icons/fa";
import Brand from "../_components/brand";
import { Delete, fetchFavourites } from "../lib/library";
import { useSession } from "next-auth/react";

export default function FavoritesPage() {
  const { data: session } = useSession();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (session?.user?.name) {
      const fetchData = async () => {
        const fetchedFavorites = await fetchFavourites(session.user.name);
        setFavorites(fetchedFavorites);
      };
      fetchData();
    }
  }, [session]);

  const remove = async (id) => {
    try {
      await Delete(id);
      setFavorites(favorites.filter((fav) => fav.id !== id));
      Alert("Favorite removed successfully!");
    } catch (error) {
      Error("Error removing favorite:", error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#1A0633] via-[#2B1055] to-[#430D66]  py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="text-4xl text-white font-extrabold text-center mb-8 flex flex-col gap-5">
          <Brand /> Your Wishlist here
        </span>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Map through the favorites and render them */}
          {favorites.map((favorite) => (
            <div
              key={favorite.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <div className="relative">
                <Image
                  src={favorite.image}
                  alt={favorite.name}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-2 right-2 p-2 bg-white bg-opacity-50 rounded-full">
                  <FaHeart className="text-red-500 text-xl" />
                </div>
              </div>
              <div className="p-4">
                <h2 className="text-2xl font-semibold text-gray-900">
                  {favorite.name}
                </h2>
                <p className="text-gray-600">{favorite.year}</p>
              </div>
              <div className="p-4 bg-gray-100 text-center">
                <button
                  onClick={() => remove(favorite.id)}
                  className="text-red-500 hover:text-red-700 flex items-center justify-center gap-2 text-sm"
                >
                  <FaTrashAlt />
                  Remove from favorites
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
