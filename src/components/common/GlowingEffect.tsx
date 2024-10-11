"use client";
import { motion } from "framer-motion";

const GlowingEffect = () => {
  return (
    <motion.div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full z-0"
      animate={{
        boxShadow: [
          "0 0 368px 100px rgba(241, 195, 87, 0.3), 0 0 368px 250px rgba(242, 87, 87, 0.3)",
          "0 0 368px 50px rgba(241, 195, 87, 0.1), 0 0 368px 175px rgba(242, 87, 87, 0.1)",
          "0 0 368px 100px rgba(241, 195, 87, 0.3), 0 0 368px 250px rgba(242, 87, 87, 0.3)",
        ],
      }}
      transition={{ duration: 3, repeat: Infinity }}
    />
  );
};

export default GlowingEffect;
