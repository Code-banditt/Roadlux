// app/not-found.js
"use client";

import Link from "next/link";
import { Suspense } from "react";

export default function NotFound() {
  return (
    <Suspense
      fallback={<div className="text-white text-center mt-10">Loading...</div>}
    >
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
        <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
        <p className="mt-4 text-lg">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="mt-6 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
        >
          Go back home
        </Link>
      </div>
    </Suspense>
  );
}
