import { motion } from "framer-motion";
import Navigation from "./navigation";

export default function HiddenSideBar({ handleHidebar }) {
  return (
    <div className="h-screen fixed inset-y-0 left-0 shadow-md bg-white/90 z-30 p-2 overflow-hidden lg:hidden w-5/6 sm:w-2/3 md:w-1/2 lg:w-1/3">
      {/* Animated Diagonal Orange Stripe */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{
          duration: 12,
          ease: "easeOut",
        }}
        className="absolute -left-1/2 bottom-1/4 w-[400%] h-48 bg-orange-500 rotate-[-20deg] shadow-lg pointer-events-none z-0"
      />

      {/* Close button */}
      <div
        className="font-bold text-3xl absolute top-4 right-4 p-2 hover:opacity-55 cursor-pointer z-20 text-red-600 rounded-full"
        onClick={handleHidebar}
      >
        X
      </div>

      {/* Content above the stripe */}
      <div className="relative z-10 mt-8">
        <Navigation />
      </div>
    </div>
  );
}
