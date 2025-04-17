"use client";
import Image from "next/image";
import image1 from "/public/imgs/bentbet.png";
import Navigation from "./_components/navigation";
import Cartages from "./_components/cartags";
import AboutUs from "./About/page";
import Link from "next/link";
import Section3 from "./_components/section3";
import RevealOnScroll from "./hooks/scrollReveal";
import { motion } from "framer-motion";
import { useStickyNav } from "./hooks/scrollReveal";
import Newsbar from "./_components/newsBar";
import RoadLuxFooter from "./_components/footer";

import Sponsors from "./_components/sponsors";
import SideBarIcon from "./_components/sideBarIcon";
import HiddenSideBar from "./_components/sideBarHidden";
import { useState } from "react";
import AccordionDemo from "./_components/accordion";

export default function Page() {
  const { ref: heroRef, isSticky } = useStickyNav();
  const [showBar, setShowBar] = useState(false);
  const handleShowBar = () => {
    setShowBar(true);
  };

  const handleHidebar = () => {
    setShowBar(false);
  };
  return (
    <div className="w-full min-h-screen  ">
      {/*hidden sidebar*/}
      {showBar && (
        <div>
          <HiddenSideBar handleHidebar={handleHidebar} />
        </div>
      )}

      <div onClick={handleShowBar} className="lg:hidden  ">
        <SideBarIcon />
      </div>

      <motion.div
        initial={{ position: "relative", top: 0 }}
        animate={{
          position: isSticky ? "fixed" : "relative",
          top: isSticky ? 0 : 0,
          zIndex: isSticky ? 50 : 10,

          boxShadow: isSticky ? "0 2px 12px rgba(0,0,0,0.1)" : "none",
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="w-full h-16 bg-white  z-50 transition-all ease-in duration-500 hidden lg:block"
      >
        <Navigation />
      </motion.div>

      {/* Main Grid Layout */}
      <div
        ref={heroRef}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 "
      >
        {/* Left Section - Car */}
        <RevealOnScroll direction="left">
          <div className=" sm:order-2 lg:order-1 relative flex justify-center items-center text-white p-2  max-h-screen">
            {/* Car Image */}
            <Image
              src={image1}
              alt="Luxury Car"
              className="object-contain w-4/5 max-w-lg h-3/4"
            />

            {/* Car Overlay Information */}
            <div className="absolute bg-white bg-opacity-90 p-4 rounded-lg top-1/3 left-1/3 transform -translate-x-1/2 shadow-lg cursor-pointer hover:scale-125 transition duration-500 ease-in-out text-xs md-text-base lg:text-lg">
              <p className="text-xs md:text-base font-light  text-amber-700 duration-500 ease-in-out ">
                {" "}
                &mdash; Bentley bentangya, most rented car of the month
              </p>
              <p className="md:text-xl text-sm font-bold text-gray-900">
                $2,340 <span className="font-thin text-sm">per month</span>
              </p>
            </div>

            {/* Car Tags */}
            <div className="duration-500 ease-in-out animate-pulse">
              <Cartages />
            </div>
          </div>
        </RevealOnScroll>

        {/* Right Section - Text */}
        <RevealOnScroll direction="right">
          <div className=" sm:order-1 lg:order-2 flex flex-col gap-6 lg:text-right sm:text-center ">
            <p className="text-sm text-amber-700 font-light tracking-wide ">
              ————— statement few vehicles can have!
            </p>
            <h1 className="text-4xl md:text-8xl lg:text-8xl font-bold leading-tight font-lato">
              RENT CARS WORLDWIDE
            </h1>
            <p className="text-sm text-amber-700 font-light">
              ——— just fast and elegant style
            </p>
            <p className="text-xs lg:mx-44 md:text-sm lg:w-3/4 font-bold text-gray-600 font-lato">
              Unleash Your Drive with Unparalleled Performance. Discover a
              driving experience like no other with our latest line of luxury
              vehicles. Combining cutting-edge technology with breathtaking
              design, our cars are engineered to deliver unmatched performance,
              comfort, and style.
            </p>
            <div className="flex gap-4 mt-4 justify-center">
              <Link
                href="/store"
                className="bg-black text-base text-white py-2 px-4 rounded-full transition hover:bg-gray-800 hover:text-white hover:ring-2 hover:ring-yellow-400 hover:ring-offset-2
hover:scale-105"
              >
                Explore now
              </Link>

              <Link
                href="/login"
                className="bg-white text-base text-gray-800  py-2 px-4 rounded-full transition hover:scale-105 hover:ring-2 hover:ring-yellow-400 hover:ring-offset-2 shadow-md
"
              >
                Join Roadlux
              </Link>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      <div className="bg-white">
        <Section3 />
      </div>
      <div className=" w-full flex flex-col items-center justify-center bg-white mt-16">
        <span className="flex flex-col lg:flex-row justify-center items-center gap-2 mb-12">
          <h1 className="font-bold text-3xl lg:text-6xl text-orange-700 relative inline-block">
            <span className="bg-gradient-to-r from-orange-700 to-orange-700 bg-clip-text text-transparent relative">
              Testimonials
            </span>
            <span className="absolute left-0 top-1/2 w-full border-t-4 border-white transform -translate-y-1/2 rotate-[-3deg]"></span>
          </h1>
          <h1 className="font-bold text-xl lg:text-4xl ">From Customers</h1>
        </span>
        <Newsbar />
      </div>

      <AboutUs />
      <div className="flex items-center p-6">
        <AccordionDemo />
      </div>

      <Sponsors />

      <div className="bg-black shadow-md text-yellow-400 overflow-hidden">
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "easeOut",
          }}
          className="p-2 grid grid-rows-1 gap-6 h-8 w-full text-sm"
        >
          <div className="flex space-x-4">
            <span className="border-r-4 border-r-white">
              <h1 className="mr-4">News</h1>
            </span>

            <span className="w-full">
              <h1>Tesla's will be available from March 14th &mdash;</h1>
            </span>

            <span className="w-full">
              <h1>Our app is now on Google Play &mdash;</h1>
            </span>

            <span className="w-full">
              <h1>
                Pay on delivery is now unavailable to South American rentees
              </h1>
            </span>
          </div>
        </motion.div>
      </div>

      <RoadLuxFooter />
    </div>
  );
}
