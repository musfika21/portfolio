import React from "react";
import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-16 bg-black text-gray-300 px-6 md:px-10 max-w-11/12 mx-auto"
    >
      <motion.h2
        className="text-3xl font-bold text-primary mb-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Contact Me
      </motion.h2>

      <motion.div
        className="flex flex-col md:flex-row items-center gap-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Lottie Animation */}
        <div className="flex justify-center w-full md:w-1/2">
          <Player
            autoplay
            loop
            src="/dm.json"
            className="h-40 w-40 sm:h-48 sm:w-48 md:h-65 md:w-65 lg:h-80 lg:w-80 xl:h-90 xl:w-90"
          />
        </div>


        {/* Contact Info & Form */}
        <div className="w-full md:w-1/2 space-y-6">
          {/* Contact Info */}
          <div className="text-center md:text-left space-y-4">
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:musfikaiqfatmomo2004@gmail.com"
                className="text-primary hover:underline"
              >
                musfikaiqfatmomo2004@gmail.com
              </a>
            </p>
            <p>
              <strong>Phone:</strong>{" "}
              <a
                href="tel:+8801777-378806"
                className="text-primary hover:underline"
              >
                +8801777-378806
              </a>
            </p>
            <p>
              <strong>WhatsApp:</strong>{" "}
              <a
                href="https://wa.me/8801777378806"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                +8801777-378806
              </a>
            </p>
          </div>

          {/* Contact Form */}
          <form
            className="flex flex-col space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you for your message!");
              e.target.reset();
            }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="p-3 rounded bg-gray-900 text-gray-300 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="p-3 rounded bg-gray-900 text-gray-300 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="p-3 rounded bg-gray-900 text-gray-300 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
            <button
              type="submit"
              className="bg-primary text-black py-3 rounded font-semibold hover:bg-primary/80 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </motion.div>

    </section>
  );
};

export default Contact;
