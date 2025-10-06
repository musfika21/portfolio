import React from "react";
import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import { useTheme } from "../context/ThemeContext";

const Contact = () => {
  const { colors } = useTheme();

  return (
    <section
      id="contact"
      className="py-16 px-6 md:px-10 transition-colors duration-300"
      style={{ backgroundColor: colors.bg.primary }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-10 text-center"
          style={{ color: colors.accent.primary }}
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
          <motion.div
            className="flex justify-center w-full md:w-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Player
              autoplay
              loop
              src="/dm.json"
              className="h-40 w-40 sm:h-48 sm:w-48 md:h-65 md:w-65 lg:h-80 lg:w-80 xl:h-90 xl:w-90"
            />
          </motion.div>

          {/* Contact Info & Form */}
          <div className="w-full md:w-1/2 space-y-6">
            {/* Contact Info */}
            <motion.div
              className="text-center md:text-left space-y-4"
              style={{ color: colors.text.secondary }}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:musfikaiqfatmomo2004@gmail.com"
                  className="hover:underline transition-colors duration-300"
                  style={{ color: colors.accent.primary }}
                >
                  musfikaiqfatmomo2004@gmail.com
                </a>
              </p>
              <p>
                <strong>Phone:</strong>{" "}
                <a
                  href="tel:+8801777-378806"
                  className="hover:underline transition-colors duration-300"
                  style={{ color: colors.accent.primary }}
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
                  className="hover:underline transition-colors duration-300"
                  style={{ color: colors.accent.primary }}
                >
                  +8801777-378806
                </a>
              </p>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              className="flex flex-col space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you for your message!");
                e.target.reset();
              }}
            >
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="p-3 rounded transition-all duration-300 focus:outline-none focus:ring-2"
                style={{
                  backgroundColor: colors.bg.card,
                  color: colors.text.primary,
                  borderColor: colors.accent.border,
                }}
              />
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="p-3 rounded transition-all duration-300 focus:outline-none focus:ring-2"
                style={{
                  backgroundColor: colors.bg.card,
                  color: colors.text.primary,
                  borderColor: colors.accent.border,
                }}
              />
              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                name="message"
                rows="5"
                placeholder="Your Message"
                required
                className="p-3 rounded transition-all duration-300 focus:outline-none focus:ring-2 resize-none"
                style={{
                  backgroundColor: colors.bg.card,
                  color: colors.text.primary,
                  borderColor: colors.accent.border,
                }}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="py-3 rounded font-semibold transition-all duration-300"
                style={{
                  backgroundColor: colors.accent.primary,
                  color: colors.bg.primary,
                }}
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;