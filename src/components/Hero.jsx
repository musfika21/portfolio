import React from "react";
import { socialLinks } from "../data";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";
import TypeWriterEffect from "react-typewriter-effect";

const iconMap = {
  FaGithub: FaGithub,
  FaLinkedin: FaLinkedin,
  FaTwitter: FaTwitter,
  FaFacebook: FaFacebook,
};

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-8 px-4 sm:px-6 md:px-8 lg:px-12"
    >
      {/* Profile Image */}
      <motion.img
        src="/logo.png"
        alt="Profile"
        className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full object-cover border-4 border-primary shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-full md:max-w-lg lg:max-w-xl flex flex-col items-center md:items-start"
      >
        <div className="min-h-[3rem] sm:min-h-[3.5rem] md:min-h-[4rem] lg:min-h-[4.5rem] w-full flex justify-center md:justify-start">
          <TypeWriterEffect
            textStyle={{
              fontWeight: "bold",
              color: "#00b4d8",
              fontSize: "clamp(1.875rem, 5vw, 2.25rem)",
              lineHeight: "1.2",
            }}
            startDelay={100}
            cursorColor="#00b4d8"
            multiText={[
              "Full Stack Developer",
              "MERN Stack Developer",
              "Frontend Developer",
            ]}
            multiTextDelay={1500}
            typeSpeed={100}
            deleteSpeed={50}
            multiTextLoop
          />
        </div>
        <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-lg mt-3 mb-6">
          Hi, I’m Musfika Iqfat. I love building modern, responsive, and
          user-friendly web applications. Passionate about clean code,
          beautiful UI, and smooth UX.
        </p>

        {/* Resume Button */}
        <a
          href="/Musfika Iqfat.pdf"
          download
          className="inline-block bg-primary text-black px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold shadow-lg hover:bg-primary/80 transition duration-300 text-sm sm:text-base"
        >
          Download Resume
        </a>

        {/* Social Icons */}
        <div className="flex gap-4 mt-6 justify-center md:justify-start">
          {socialLinks.map((link, index) => {
            const Icon = iconMap[link.icon];
            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition duration-300 text-xl sm:text-2xl md:text-3xl"
              >
                <Icon />
              </a>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;