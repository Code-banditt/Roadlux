"use client";

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import image1 from "/public/imgs/testi2.jpg";
import image2 from "/public/imgs/testi3.jpg";
import image3 from "/public/imgs/testi.jpg";
import { useState, useEffect } from "react";

export default function Newsbar() {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ x: "20%" }}
        animate={{ x: "0" }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "easeOut",
        }}
        className="p-2 sm:p-4 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
      >
        {/* Testimonial Card 1 */}
        <div className="bg-white/50 backdrop-blur-sm font-lato font-semibold flex flex-col sm:flex-row gap-4 w-full md:w-3/4 rounded-md shadow-md col-span-1 md:col-span-2 mx-auto">
          <span className="flex-shrink-0">
            <Image
              src={image1}
              alt="testimonial"
              width={300}
              height={500}
              className="scale-105 rounded-md w-full sm:w-48 md:w-64"
            />
          </span>
          <span className="w-full p-3 flex flex-col gap-2">
            <h1 className="font-bold text-4xl sm:text-6xl md:text-8xl opacity-55 font-mono">
              "
            </h1>
            <p className="text-sm sm:text-base">
              "I've been using this service for a few months now, and I honestly
              couldn't be happier. The entire process was smooth from start to
              finish, and the support team was always quick to respond whenever
              I had questions. It's rare to find a company that truly values its
              customers the way this one does. Highly recommended!"
            </p>
            <p className="text-lg sm:text-xl font-bold">Tolu markuo &mdash;</p>
            <span className="text-xs sm:text-sm text-orange-600 flex items-center justify-between">
              tolu02@gmail.com
              <p className="text-2xl sm:text-4xl text-black opacity-55 font-bold">
                01
              </p>
            </span>
          </span>
        </div>

        {/* Testimonial Card 2 */}
        <div className="bg-white/50 backdrop-blur-sm font-lato font-semibold flex flex-col sm:flex-row gap-4 w-full md:w-3/4 rounded-md shadow-md mx-auto">
          <span className="flex-shrink-0">
            <Image
              src={image2}
              alt="testimonial"
              width={300}
              height={500}
              className="scale-105 rounded-md w-full sm:w-48 md:w-64"
            />
          </span>
          <span className="w-full p-3 flex flex-col gap-2">
            <h1 className="font-bold text-4xl sm:text-6xl md:text-8xl opacity-55 font-mono">
              "
            </h1>
            <p className="text-sm sm:text-base">
              "We explored the best of cars, toyota, bmw, bentley all without
              the usual renting stress, truly a trip of a lifetime!"
            </p>
            <p className="text-lg sm:text-xl font-bold">
              Ebrima colley &mdash;
            </p>
            <span className="text-xs sm:text-sm text-orange-600 flex items-center justify-between">
              lordbrima44@outlook.com
              <p className="text-2xl sm:text-4xl text-black opacity-55 font-bold">
                02
              </p>
            </span>
          </span>
        </div>

        {/* Testimonial Card 3 */}
        <div className="bg-white/50 backdrop-blur-sm font-lato font-semibold flex flex-col sm:flex-row gap-4 w-full md:w-3/4 rounded-md shadow-md mx-auto">
          <span className="flex-shrink-0">
            <Image
              src={image3}
              alt="testimonial"
              width={300}
              height={500}
              className="scale-105 rounded-md w-full sm:w-48 md:w-64"
            />
          </span>
          <div className="w-full p-3 flex flex-col gap-2">
            <h1 className="font-bold text-4xl sm:text-6xl md:text-8xl opacity-55 font-mono">
              "
            </h1>
            <p className="text-sm sm:text-base">
              "We explored the best of cars, toyota, bmw, bentley all without
              the usual renting stress, truly a trip of a lifetime!"
            </p>
            <p className="text-lg sm:text-xl font-bold">Nancy Ekoku &mdash;</p>
            <span className="text-xs sm:text-sm text-orange-600 flex items-center justify-between">
              iloveekoku2@gmail.com
              <p className="text-2xl sm:text-4xl text-black opacity-55 font-bold">
                03
              </p>
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
