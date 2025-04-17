"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Platelets() {
  const { data: session } = useSession();
  return (
    <div className="stats shadow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* Total Rents */}
      <div className="stat">
        <div className="stat-figure text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-8 w-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
        </div>
        <div className="stat-title text-primary text-sm sm:text-base lg:text-lg">
          Total Rents
        </div>
        <div className="stat-value text-primary text-xl sm:text-2xl lg:text-3xl">
          25.6K
        </div>
        <div className="stat-desc text-orange-500 text-xs sm:text-sm lg:text-base">
          21% more than last month
        </div>
      </div>

      {/* Page Views */}
      <div className="stat">
        <div className="stat-figure text-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-8 w-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            ></path>
          </svg>
        </div>
        <div className="stat-title text-primary text-sm sm:text-base lg:text-lg">
          Page Views
        </div>
        <div className="stat-value text-primary text-xl sm:text-2xl lg:text-3xl">
          2k
        </div>
        <div className="stat-desc text-orange-500 text-xs sm:text-sm lg:text-base">
          21% more than last month
        </div>
      </div>

      {/* Tasks Done */}
      <div className="stat">
        <div className="stat-figure text-secondary">
          <div className="avatar online">
            <div className="w-16 rounded-full">
              <Image
                width={100}
                height={100}
                className="rounded-full"
                src={session?.user?.image || "img"}
                alt="user-avatar"
              />
            </div>
          </div>
        </div>
        <div className="stat-value text-xl sm:text-2xl lg:text-3xl">86%</div>
        <div className="stat-title text-primary text-sm sm:text-base lg:text-lg">
          Tasks done
        </div>
        <div className="stat-desc text-orange-500 text-xs sm:text-sm lg:text-base">
          31 tasks remaining
        </div>
      </div>
    </div>
  );
}
