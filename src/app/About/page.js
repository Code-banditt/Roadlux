"use client";

import Image from "next/image";
import image1 from "/public/imgs/naturalteam.png";
import image2 from "/public/imgs/carteam2.jpg";
import { FaArrowRight } from "react-icons/fa";
import RevealOnScroll from "../hooks/scrollReveal";

export default function AboutUs() {
  return (
    <div className="relative flex flex-col items-center overflow-hidden">
      {/* Decorative background divs */}
      <div className="absolute -left-1/2 bottom-full w-[200%] h-1/2 bg-orange-500 rotate-[-20deg] shadow-lg pointer-events-none z-0"></div>
      <div className="absolute -left-1/2 top-full w-[200%] h-1/2 bg-orange-500 rotate-[-20deg] shadow-lg pointer-events-none z-0"></div>

      {/* Main content container */}
      <div className="relative z-10 w-full md:w-4/5 lg:w-2/3 px-4 sm:px-6 md:px-8">
        {/* your RevealOnScroll and the rest of the content... */}

        {/* Writing section */}
        <RevealOnScroll direction="left">
          <div className="flex flex-col md:flex-row gap-8 md:gap-10 my-10 justify-between w-full">
            <span>
              <p className=" z-10 text-xs sm:text-sm text-red-500 font-bold my-2 sm:my-4">
                We are Roadlux
              </p>
              <h2 className=" z-10 font-bold text-2xl sm:text-3xl">
                We Set Out To Build
              </h2>
              <h3 className="font-bold opacity-40 text-xl sm:text-2xl md:text-3xl text-black">
                a better way to Transport
              </h3>
            </span>

            <span className="h-full my-4 md:my-16 w-full md:w-1/3">
              <p className="text-xs sm:text-sm font-semibold text-black">
                Together the renters and the rentees have worked together to
                build this powerful and successful company
              </p>
            </span>
          </div>
        </RevealOnScroll>

        {/* Photo section */}
        <RevealOnScroll direction="bottom">
          <div className="flex flex-col sm:flex-row gap-3 items-center bg-white/50 rounded-lg p-2">
            <span className="w-full sm:w-1/2">
              <Image
                src={image1}
                alt="nun"
                className="rounded-lg w-full h-auto object-cover"
              />
            </span>

            <span className="w-full sm:w-1/2">
              <Image
                src={image2}
                alt="nun"
                className="rounded-lg w-full h-auto object-cover clip-right-bottom-edge"
              />
            </span>
          </div>
        </RevealOnScroll>

        {/* Our Story section */}
        <RevealOnScroll direction="right">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 my-12">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold flex gap-2 items-center opacity-55 text-orange-700">
                Our Story <FaArrowRight />
              </h1>
            </div>
            <div className="flex flex-col gap-4 sm:gap-6">
              <p className="text-xs sm:text-sm font-bold">
                &mdash; Our story begins with a team of enthusiastic individuals
                who shared a common love for cars and travel. We recognized a
                gap in the market for a car rental service that not only
                provided top-quality vehicles but also prioritized customer
                satisfaction and convenience. With this vision, RoadLux Car
                Rental was founded.
              </p>
              <p className="text-xs sm:text-sm text-gradient-to-br from-black to-transparent clip-triangle">
                &mdash; As we embarked on this journey, we knew that merely
                offering vehicles wasn&apotas;t enough. We wanted to create a
                unique experience for our customers, one that would make every
                journey memorable. Our dedication to excellence led us to
                carefully select and maintain a diverse fleet of 50+ vehicles,
                ensuring that we could cater to the varying needs of our
                clients. From sleek sedans for business travelers to spacious
                SUVs for family vacations, we had it all.
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}
