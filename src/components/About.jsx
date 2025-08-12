import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 md:py-24  text-gray-200 px-4 sm:px-6 md:px-12 lg:px-20"
    >
      <div className="">
        <motion.h2
          className="text-3xl font-bold text-primary mb-10 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 items-start">
          {/* Text Content */}
          <motion.div
            className="space-y-6 text-base sm:text-lg md:text-xl leading-relaxed"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p>
              I'm <span className="text-primary font-semibold">Musfika Iqfat</span>, a dedicated MERN Stack Developer with a passion for crafting innovative and scalable web solutions. My coding journey began in 2025, sparked by a fascination with creating dynamic, user-centric applications that blend aesthetic design with robust functionality.
            </p>
            <p>
              Specializing in the MERN stack (MongoDB, Express.js, React, Node.js), I excel at building seamless, responsive interfaces and efficient backend systems. From pixel-perfect frontends to complex server-side logic, I tackle challenges with precision and creativity, ensuring an exceptional user experience.
            </p>
          </motion.div>

          {/* Highlight Card */}
          <motion.div
            className="bg-gray-800/50 p-6 rounded-lg shadow-lg border-l-4 border-primary"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-4">My Mission</h3>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              To empower businesses and individuals with cutting-edge web applications that are intuitive, performant, and impactful. I strive to bridge creativity and technology, delivering solutions that drive success.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;