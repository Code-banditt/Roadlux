"use client";

import React from "react";
import "@/app/globals.css";
import { SessionProvider } from "next-auth/react";
import { VehicleProvider } from "./_context/vehicleContex";
import {
  Inter,
  Poppins,
  Lato,
  Playfair_Display,
  Raleway,
  Bricolage_Grotesque,
  Orbitron,
} from "next/font/google";
import AuthSessionToast from "./hooks/Toast";
import { Toaster } from "react-hot-toast";
//import "leaflet/dist/leaflet.css";

import { BookProvider } from "./_context/context2";

// FONTS
const inter = Inter({ subsets: ["latin"], weight: ["400", "600", "700"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });
const lato = Lato({ subsets: ["latin"], weight: ["100", "300", "700"] });
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const raleway = Raleway({ subsets: ["latin"], weight: ["300", "600", "900"] });
const orbitron = Orbitron({ subsets: ["latin"], weight: ["400", "600"] });
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Roadlux</title>
      </head>

      <body className="min-h-screen">
        <SessionProvider>
          <VehicleProvider>
            <BookProvider>
              <Toaster
                toastOptions={{
                  style: {
                    position: "top-center",
                    borderRadius: "8px",
                    fontSize: "14px",
                    color: "#333",
                  },
                }}
              />
              <AuthSessionToast />
              {children}
            </BookProvider>
          </VehicleProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
