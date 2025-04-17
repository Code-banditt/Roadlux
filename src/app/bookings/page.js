import Link from "next/link";
import image1 from "/public/imgs/imagephone.png";
import Image from "next/image";
import {
  FaCalendarAlt,
  FaCriticalRole,
  FaHome,
  FaPhone,
  FaTv,
} from "react-icons/fa";
import { fetchBookings } from "../lib/library";
import { Suspense } from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Brand from "../_components/brand";

export default async function Bookings() {
  const session = await getServerSession(authOptions);
  const bookings = await fetchBookings(session.user.name);
  const rawDate = new Date(bookings[0].rentalStart);
  const formattedDate = rawDate.toLocaleString();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-6 gap-2 h-screen w-full p-4 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 overflow-y-scroll">
      {/* Sidebar div */}
      <div className="sm:hidden lg:block col-span-1 text-lg font-bold flex flex-col p-4 shadow-lg rounded-md">
        <ul className="h-2/3 flex flex-col justify-between p-4 gap-6">
          <span className="-ml-5">
            <Brand />
          </span>

          <Link
            href="/"
            className="flex gap-2 hover:opacity-55 cursor-pointer items-center"
          >
            <FaHome className="font-bold " /> Home
          </Link>
          <li className="flex gap-2 cursor-pointer items-center">
            <FaCalendarAlt /> Today
          </li>
          <Link
            href={"/settings"}
            className="flex gap-2 cursor-pointer items-center"
          >
            <FaCriticalRole /> Settings
          </Link>
          <li className="flex gap-2 cursor-pointer items-center">
            <FaPhone /> Contact us
          </li>
          <Link
            href={"/Tracking"}
            className="flex gap-2 cursor-pointer items-center"
          >
            <FaTv /> Tracking
          </Link>
        </ul>
      </div>

      {/* bookings section */}
      <div className="col-span-1 lg:col-span-5 p-6 flex flex-col gap-6 shadow-lg rounded-lg">
        {/* Text board */}
        <div className="w-full p-4 bg-neutral-800 rounded-lg flex flex-col lg:flex-row justify-between bg-gradient-to-r from-orange-400 to-orange-700">
          {/* Text span */}
          <span className="grid lg:w-1/2">
            <h1 className="text-3xl font-semibold text-black">
              Get our App for easy Access
            </h1>
            <p className="text-sm text-white">easy to use & smooth UI</p>
            <button className="text-orange-600 text-sm font-bold p-2 bg-white rounded-lg hover:bg-opacity-55 w-1/2 lg:w-auto">
              Find App
            </button>
          </span>

          {/* Photo span */}
          <span className="w-1/2 lg:w-1/3">
            <Image src={image1} alt="pho" className="w-full scale-110"></Image>
          </span>
        </div>

        {/* Mid table order */}
        <div>
          <div className="flex justify-between my-2">
            <h1 className="font-bold">Orders</h1>
            <span className="text-xs flex gap-4">
              <button className="text-orange-600 text-xs font-bold p-2 bg-white rounded-lg hover:bg-opacity-55">
                Export
              </button>
              <button className="text-orange-600 text-xs font-bold p-2 bg-white rounded-lg hover:bg-opacity-55">
                More actions
              </button>
              <Link
                href={"/store"}
                className="bg-orange-600 text-white text-xs font-bold p-2 rounded-lg hover:bg-opacity-55"
              >
                Create Order
              </Link>
            </span>
          </div>
        </div>

        {/* History div */}
        <div className="bg-gradient-to-r from-[#FF6A00] via-[#FF3D00] to-[#D84315] text-xs text-white flex items-center justify-between bg-white p-4 rounded-lg shadow-md">
          <span>
            <h1>History</h1>
          </span>
          <span className="border-s flex flex-col items-center p-2">
            <h1>total Orders</h1> <strong>{bookings.length}</strong>
          </span>
          <span className="border-s p-2">
            <h1>total orders</h1> <strong>{bookings.length}</strong>
          </span>
          <span className="border-s p-2">
            <h1>Ongoing order</h1> <strong>{bookings.length}</strong>
          </span>
          <span className="border-s p-2">
            <h1>Returned vehicles</h1> <strong>0 of {bookings.length}</strong>
          </span>
        </div>

        {/* Filter options */}
        <div className="my-6 border-b p-2">
          <ul className="text-xs flex gap-6 justify-center lg:justify-start">
            <li className="hover:border-b-2 hover:border-orange-600 cursor-pointer">
              All
            </li>
            <li className="hover:border-b-2 hover:border-orange-600 cursor-pointer">
              Completed
            </li>
            <li className="hover:border-b-2 hover:border-orange-600 cursor-pointer">
              Ongoing
            </li>
            <li className="hover:border-b-2 hover:border-orange-600 cursor-pointer">
              Cancelled
            </li>
            <li className="hover:border-b-2 hover:border-orange-600 cursor-pointer">
              Pending
            </li>
          </ul>
        </div>

        {/* Transaction div */}
        <div className="p-4 rounded-lg shadow-md h-[200px] flex flex-col justify-center overflow-y-scroll">
          <div className="text-xs flex items-center justify-between bg-white p-2 rounded-lg font-semibold">
            <span>
              <h1>Date</h1>
            </span>
            <span>
              <h1>Orders</h1>
            </span>
            <span>
              <h1>Spent</h1>
            </span>
            <span>
              <h1>Rental ID</h1>
            </span>
            <span>
              <h1>Status</h1>
            </span>
          </div>

          {/* Booking Data */}
          <Suspense fallback={<div>Loading...</div>}>
            {bookings.map((booking) => (
              <div
                key={booking.rentalID}
                className="text-xs flex items-center justify-between p-4 my-4 border-b cursor-pointer hover:opacity-55"
              >
                <span>
                  <h1>{formattedDate}</h1>
                </span>
                <span>
                  <h1>{booking.name}</h1>
                </span>
                <span>
                  <h1>{booking.payment}</h1>
                </span>
                <span>
                  <h1>{booking.rentalID}</h1>
                </span>
                <span>
                  <h1>Yes</h1>
                </span>
              </div>
            ))}
          </Suspense>
        </div>
      </div>
    </div>
  );
}
