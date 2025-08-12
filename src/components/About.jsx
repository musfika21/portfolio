import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-16 bg-black text-gray-300 px-6 md:px-20"
    >
      <motion.h2
        className="text-3xl font-bold text-primary mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <motion.div
        className="max-w-4xl mx-auto text-lg leading-relaxed space-y-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p>
          Hello! I’m <span className="text-primary">[Your Name]</span>, a
          passionate MERN Stack Developer. My journey into programming
          started in [Year you started] when I discovered my love for
          building interactive and functional websites. Since then, I’ve
          been learning and improving my skills every single day.
        </p>

        <p>
          I enjoy working on modern, responsive, and user-friendly
          applications that provide a seamless user experience. Whether
          it’s designing a pixel-perfect UI or solving a tricky backend
          problem, I thrive on challenges.
        </p>

        <p>
          Outside of coding, I enjoy [Your Hobby 1], [Your Hobby 2], and
          exploring new technologies. I believe in continuous learning and
          pushing myself to create impactful solutions.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
