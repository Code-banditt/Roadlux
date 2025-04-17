import Image from "next/image";
import image1 from "/public/imgs/bentbet.png";
import Rating from "./starRater";

export default function VehicleCard({ vehicle, onClick }) {
  return (
    <div
      onClick={onClick}
      className="sm:2/2 lg:w-2/3 shadow-lg rounded-lg p-6 flex flex-col gap-2 hover:scale-105 cursor-pointer transition duration-300 bg-white"
    >
      <h2 className="text-sm font-semibold">{vehicle.name}</h2>

      <span className="hidden gap-2 text-xs  lg:flex ">
        <p className="bg-slate-50 border p-2 rounded-full">{vehicle.make}</p>
        <p className="bg-slate-50 border p-2 rounded-full">{vehicle.model}</p>
        <p className="bg-slate-50 border p-2 rounded-full">{vehicle.year}</p>
      </span>
      <span className="w-20">
        <Rating />
      </span>
      <span>
        <Image
          src={vehicle.imagebg}
          width={500}
          height={300}
          alt="car"
          className="object-cover"
        ></Image>
      </span>
      <span className="flex gap-2">
        <h1 className="text-sm">
          {" "}
          <strong className="text-2xl text-cyan-700">
            ${vehicle.PPD}
          </strong>{" "}
          per/day
        </h1>
        <p className="bg-slate-200 shadow-lg p-2 cursor-pointer hover:bg-slate-600 transition duration-300">
          &mdash;
        </p>
        <p className="bg-slate-200 shadow-lg p-2 cursor-pointer hover:bg-slate-600 transition duration-300">
          +
        </p>
      </span>
    </div>
  );
}
