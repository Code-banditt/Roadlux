"use client";

import { motion } from "framer-motion";

export default function BreakingNews() {
  <motion.div
    initial={{ x: "100%" }}
    animate={{ x: "-100%" }}
    transition={{
      repeat: Infinity,
      repeatType: "loop",
      duration: 20,
      ease: "easeOut",
    }}
    className="p-2 flex justify-between gap-6 h-8"
  >
    <span>
      <h1>breaking news</h1>
    </span>

    <span>
      <h1>breaking news</h1>
    </span>

    <span>
      <h1>breaking news</h1>
    </span>

    <span>
      <h1>breaking news</h1>
    </span>

    <span>
      <h1>breaking news</h1>
    </span>
  </motion.div>;
}
