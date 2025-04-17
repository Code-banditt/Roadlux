import { motion } from "framer-motion";
import Image from "next/image";
import image1 from "/public/imgs/image0_0.jpg";
import Link from "next/link";
console.log("motion:", motion);
export default function Brand() {
  return (
    <div>
      <Link href={"/"} className="cursor-pointer">
        <h1
          className={`text-4xl flex items-center gap-2 font-bold tracking-wide font-orbitron bg-gradient-to-r from-orange-800 to-yellow-400 text-transparent bg-clip-text
`}
        >
          <Image
            src={image1}
            alt="rd"
            className="object-cover w-9 rounded-full "
          ></Image>
          RoadLux
        </h1>
      </Link>
    </div>
  );
}
