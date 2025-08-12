import React from "react";
import { socialLinks } from "../data";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";
import { motion } from "framer-motion";

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
      className="min-h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-10 px-6"
    >
      {/* Profile Image */}
      <motion.img
        src="/profile.jpg"
        alt="Profile"
        className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-primary shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl md:text-5xl font-bold text-primary mb-3">
          MERN Stack Developer
        </h1>
        <p className="text-gray-300 max-w-lg mb-6">
          Hi, I’m [Your Name]. I love building modern, responsive, and
          user-friendly web applications. Passionate about clean code,
          beautiful UI, and smooth UX.
        </p>

        {/* Resume Button */}
        <a
          href="/resume.pdf"
          download
          className="inline-block bg-primary text-black px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-primary/80 transition duration-300"
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
                className="text-gray-300 hover:text-primary transition duration-300 text-2xl"
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
