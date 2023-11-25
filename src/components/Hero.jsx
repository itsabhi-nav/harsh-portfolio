import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={[
          styles.paddingX,
          "absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-col items-center gap-5",
        ].join(" ")}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div className="text-white text-center">
          <h1 className={[styles.heroHeadText, "mb-2"].join(" ")}>
            Hi, I'm <span className="text-[#B31312]">Harsh</span>
          </h1>
          <p className={[styles.heroSubText, "mb-2"].join(" ")}>
            ECE Student | Full-Stack Developer | ML & AI Enthusiast | Blockchain
            Explorer
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute bottom-10 sm:bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[32px] h-[48px] rounded-2xl border-4 border-secondary flex justify-center items-start p-1">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-4 h-4 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
