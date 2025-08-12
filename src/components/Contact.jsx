import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-16 bg-black text-gray-300 px-6 md:px-20 max-w-3xl mx-auto"
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
        className="space-y-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="text-center space-y-4">
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:your.email@example.com"
              className="text-primary hover:underline"
            >
              your.email@example.com
            </a>
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+1234567890" className="text-primary hover:underline">
              +1 234 567 890
            </a>
          </p>
          <p>
            <strong>WhatsApp:</strong>{" "}
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              +1 234 567 890
            </a>
          </p>
        </div>

        {/* Optional Contact Form */}
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
      </motion.div>
    </section>
  );
};

export default Contact;
