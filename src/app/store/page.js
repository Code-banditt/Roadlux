"use client";

// i know i could have imported a store client so that this component wont
//loose its server side rendering ability, but i just wanted to finish up,
// the project quickly bcause i'm behind schedule

import { Suspense } from "react";
import SideBar from "../_components/StoreSideBar";
import loadvehicles from "../lib/library";
import VehiclePopupManager from "../_components/vehiclemanager";
import Contact from "../_components/contactUs";

export default function Store() {
  const { data } = loadvehicles(); // Fetch on server

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="bg-slate-100 w-full h-screen text-black flex flex-col items-center gap-2 p-6 overflow-scroll md:overflow-hidden">
        <div className=" grid grid-col-2  md:grid-cols-5  gap-2 h-screen w-full p-4 bg-slate-100">
          <div className="sm:hidden md:block  md:col-span-1 text-base flex flex-col gap-4 p-4 shadow-lg rounded-md">
            {/* Navigation */}
            <SideBar />
          </div>

          {/* Pass vehicles and pagination handlers */}
          <VehiclePopupManager vehicles={data} />
          <Contact />
        </div>
      </div>
    </Suspense>
  );
}
