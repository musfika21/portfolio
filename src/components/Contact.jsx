import { useState } from "react";
import { FaDiscord, FaEnvelope, FaTwitter, FaPaperPlane } from "react-icons/fa";
import useAuth from "../Hooks/useAuth";

const Contact = () => {
  const { theme } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Using Formspree for email handling (free service)
      const response = await fetch('https://formspree.io/f/mzzknpry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section
      id="contacts"
      className={`w-full py-12 sm:py-16 md:py-24 ${theme ? "bg-gray-900" : "bg-gray-100"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contacts Section */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
            <span className="text-blue-500 text-xl sm:text-2xl md:text-3xl font-bold">/</span>
            <h2 className={`text-xl sm:text-2xl md:text-3xl font-bold ${theme ? "text-white" : "text-gray-900"}`}>
              contacts
            </h2>
          </div>

          <p className={`text-base sm:text-lg font-semibold mb-4 sm:mb-6 ${theme ? "text-white" : "text-gray-900"}`}>
            Who am i?
          </p>

          <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
            {/* Left Side - Contact Form */}
            <div className="flex-1 w-full">
              <p className={`text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 ${theme ? "text-gray-400" : "text-gray-600"}`}>
                I'm interested in freelance opportunities. However, if you have other request or question, don't hesitate to contact me
              </p>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name"
                      required
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 transition-colors duration-300 text-sm sm:text-base ${
                        theme
                          ? "bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-blue-500"
                          : "bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500"
                      } outline-none`}
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      required
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 transition-colors duration-300 text-sm sm:text-base ${
                        theme
                          ? "bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-blue-500"
                          : "bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500"
                      } outline-none`}
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                    className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 transition-colors duration-300 text-sm sm:text-base ${
                      theme
                        ? "bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-blue-500"
                        : "bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500"
                    } outline-none`}
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    required
                    rows="5"
                    className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 transition-colors duration-300 resize-none text-sm sm:text-base ${
                      theme
                        ? "bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-blue-500"
                        : "bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500"
                    } outline-none`}
                  />
                </div>

                {submitStatus && (
                  <div
                    className={`px-4 py-3 rounded text-sm ${
                      submitStatus === 'success'
                        ? theme
                          ? 'bg-green-900/30 text-green-400 border border-green-500/50'
                          : 'bg-green-50 text-green-700 border border-green-200'
                        : theme
                        ? 'bg-red-900/30 text-red-400 border border-red-500/50'
                        : 'bg-red-50 text-red-700 border border-red-200'
                    }`}
                  >
                    {submitStatus === 'success'
                      ? '✓ Message sent successfully!'
                      : '✗ Failed to send message. Please try again.'}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-blue-500 text-white font-medium transition-all duration-300 hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base ${
                    isSubmitting ? "cursor-wait" : ""
                  }`}
                >
                  <FaPaperPlane className="text-xs sm:text-sm" />
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                </button>
              </form>
            </div>

            {/* Right Side - Contact Boxes */}
            <div className="w-full lg:w-auto flex flex-col gap-4 sm:gap-5">
              {/* Support me here box */}
              <div
                className={`border-2 p-4 sm:p-5 w-full lg:min-w-[220px] ${
                  theme ? "border-gray-700 bg-gray-800/50" : "border-gray-300 bg-white"
                }`}
              >
                <h3 className={`text-sm sm:text-base font-semibold mb-2 ${theme ? "text-white" : "text-gray-900"}`}>
                  Support me here
                </h3>
                <a
                  href="#"
                  className={`text-xs sm:text-sm transition-colors duration-300 break-all ${
                    theme ? "text-gray-400 hover:text-blue-500" : "text-gray-600 hover:text-blue-500"
                  }`}
                >
                  ↗️9500120690030
                </a>
              </div>

              {/* Message me here box */}
              <div
                className={`border-2 p-4 sm:p-5 w-full lg:min-w-[220px] ${
                  theme ? "border-gray-700 bg-gray-800/50" : "border-gray-300 bg-white"
                }`}
              >
                <h3 className={`text-sm sm:text-base font-semibold mb-3 ${theme ? "text-white" : "text-gray-900"}`}>
                  Message me here
                </h3>

                <div className="space-y-2">
                  {/* Discord */}
                  <a
                    href="#"
                    className={`flex items-center gap-2 text-xs sm:text-sm transition-colors duration-300 ${
                      theme ? "text-gray-400 hover:text-blue-500" : "text-gray-600 hover:text-blue-500"
                    }`}
                  >
                    <FaDiscord className="text-sm sm:text-base flex-shrink-0" />
                    <span className="break-all">Elias#1234</span>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:elias@elias-dev.ml"
                    className={`flex items-center gap-2 text-xs sm:text-sm transition-colors duration-300 ${
                      theme ? "text-gray-400 hover:text-blue-500" : "text-gray-600 hover:text-blue-500"
                    }`}
                  >
                    <FaEnvelope className="text-sm sm:text-base flex-shrink-0" />
                    <span className="break-all">elias@elias-dev.ml</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All Media Section */}
        <div>
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <span className="text-blue-500 text-xl sm:text-2xl md:text-3xl font-bold">#</span>
            <h2 className={`text-xl sm:text-2xl md:text-3xl font-bold ${theme ? "text-white" : "text-gray-900"}`}>
              all-media
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href="https://twitter.com/elias"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 text-sm sm:text-base transition-colors duration-300 ${
                theme ? "text-gray-400 hover:text-blue-500" : "text-gray-600 hover:text-blue-500"
              }`}
            >
              <FaTwitter className="text-lg sm:text-xl flex-shrink-0" />
              <span>@elias</span>
            </a>

            <a
              href="https://twitter.com/elias"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 text-sm sm:text-base transition-colors duration-300 ${
                theme ? "text-gray-400 hover:text-blue-500" : "text-gray-600 hover:text-blue-500"
              }`}
            >
              <FaTwitter className="text-lg sm:text-xl flex-shrink-0" />
              <span>@elias</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;