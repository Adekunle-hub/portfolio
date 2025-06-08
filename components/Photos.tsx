"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Photos = () => {
  return (
    <div className="h-full w-full relative ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeInOut" },
        }}
        
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[298px] absolute rounded-full h-[298px] xl:w-[320px] xl:h-[320px] mix-blend-lighten"
        >
          <Image
            fill
            priority
            quality={100}
            className="  object-cover object-top rounded-full  "
            src="/check2.jpg"
            alt="profile-picture"
          />
        </motion.div>

        <motion.svg
          className="w-[300px] overflow-visible h-[300px] lg:w-[320px]  lg:h-[320px]"
          fill="transparent"
          viewBox="0 0 400 400"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="200"
            cy="200"
            r="240"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 97 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photos;
