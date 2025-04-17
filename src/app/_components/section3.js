import Image from "next/image";
import Link from "next/link";
import image1 from "/public/imgs/tracker2.png";
import { FaArrowRight } from "react-icons/fa";
import RevealOnScroll from "../hooks/scrollReveal";

export default function Section3() {
  return (
    <div>
      {/* Main container */}
      <div className="p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Text section */}
        <RevealOnScroll direction="left">
          <div className="my-4 border-e-0 lg:border-e-2">
            <div>
              <p className="font-bold text-xs sm:text-sm text-black mb-2 w-full lg:w-1/2">
                Easy tracking with Google Maps &mdash;&mdash;&mdash;&mdash;
              </p>
              <h1 className="font-bold text-3xl sm:text-4xl lg:text-7xl text-black my-2 leading-tight">
                Track your orders
              </h1>
              <h2 className="font-bold text-2xl sm:text-3xl lg:text-6xl text-orange-600">
                Smoothly
              </h2>
            </div>

            <div className="my-4 bg-black rounded-full hover:opacity-55 px-6 py-3 w-1/2 sm:w-1/3 flex justify-center font-bold text-sm sm:text-base text-white cursor-pointer">
              <Link href="/Tracking">Start Tracking</Link>
            </div>
          </div>
        </RevealOnScroll>

        {/* Image and list section */}
        <RevealOnScroll direction="bottom">
          <div className="p-4 flex flex-col justify-center items-center bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white h-full rounded-lg">
            <span className="my-4 w-full">
              <Image
                src={image1}
                alt="img"
                width={600}
                height={500}
                className="rounded-lg w-full h-auto object-cover"
              />
            </span>
            <span className="text-xs sm:text-sm flex flex-col gap-3 w-full">
              {[
                "Securely & easily track your orders",
                "Get alerted when order arrives",
                "Keep contact with transporter",
              ].map((text, idx) => (
                <p
                  key={idx}
                  className="border-black border-b p-2 flex items-center gap-2"
                >
                  {text} <FaArrowRight />
                </p>
              ))}
            </span>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}
