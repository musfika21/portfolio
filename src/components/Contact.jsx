import { useState } from "react";
import { FaDiscord, FaEnvelope, FaTwitter, FaPaperPlane, FaWhatsapp, FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import useAuth from "../Hooks/useAuth";
import { FaXTwitter } from "react-icons/fa6";


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
      className={`w-full pt-16 sm:pt-20 md:pt-24 lg:pt-28 lg:pb-10 ${theme ? "bg-black" : "bg-white"}`}
    >
      <div className="max-w-7xl md:w-11/12 mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10">
        {/* Section Title */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
            <span className="text-blue-500 text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold">/</span>
            <h2
              className={`text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold ${theme ? "text-white" : "text-gray-900"}`}
            >
              CONTACT
            </h2>
          </div>

          <p
            className={`text-sm xs:text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4 md:mb-6 ${theme ? "text-white" : "text-gray-900"}`}
          >
            Who am i?
          </p>

          <p
            className={`text-xs xs:text-sm sm:text-base md:text-lg leading-relaxed ${theme ? "text-gray-400" : "text-gray-600"}`}
          >
            I design and develop modern web experiences using the MERN Stack. If you’d like to learn more or collaborate, don’t hesitate to reach out.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* Left Side - Contact Form */}
          <div className="lg:col-span-7 xl:col-span-8">
            <form onSubmit={handleSubmit} className="space-y-4 xs:space-y-5 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xs:gap-5 sm:gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                    className={`w-full px-3 xs:px-4 sm:px-5 py-2.5 xs:py-3 sm:py-3.5 border-2 rounded transition-all duration-300 text-xs xs:text-sm sm:text-base ${theme
                        ? "bg-gray-900 border-gray-700 text-white placeholder-gray-500 focus:border-blue-500 focus:bg-gray-800"
                        : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white"
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
                    className={`w-full px-3 xs:px-4 sm:px-5 py-2.5 xs:py-3 sm:py-3.5 border-2 rounded transition-all duration-300 text-xs xs:text-sm sm:text-base ${theme
                        ? "bg-gray-900 border-gray-700 text-white placeholder-gray-500 focus:border-blue-500 focus:bg-gray-800"
                        : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white"
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
                  className={`w-full px-3 xs:px-4 sm:px-5 py-2.5 xs:py-3 sm:py-3.5 border-2 rounded transition-all duration-300 text-xs xs:text-sm sm:text-base ${theme
                      ? "bg-gray-900 border-gray-700 text-white placeholder-gray-500 focus:border-blue-500 focus:bg-gray-800"
                      : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white"
                    } outline-none`}
                />
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  required
                  rows="6"
                  className={`w-full px-3 xs:px-4 sm:px-5 py-2.5 xs:py-3 sm:py-3.5 border-2 rounded transition-all duration-300 resize-none text-xs xs:text-sm sm:text-base ${theme
                      ? "bg-gray-900 border-gray-700 text-white placeholder-gray-500 focus:border-blue-500 focus:bg-gray-800"
                      : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white"
                    } outline-none`}
                />
              </div>

              {submitStatus && (
                <div
                  className={`px-3 xs:px-4 sm:px-5 py-2.5 xs:py-3 rounded text-xs xs:text-sm sm:text-base font-medium ${submitStatus === 'success'
                      ? theme
                        ? 'bg-green-900/30 text-green-400 border-2 border-green-500/50'
                        : 'bg-green-50 text-green-700 border-2 border-green-200'
                      : theme
                        ? 'bg-red-900/30 text-red-400 border-2 border-red-500/50'
                        : 'bg-red-50 text-red-700 border-2 border-red-200'
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
                className={`flex items-center justify-center gap-2 xs:gap-3 px-6 xs:px-8 sm:px-10 py-2.5 xs:py-3 sm:py-3.5 bg-blue-500 text-white font-semibold rounded transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 disabled:opacity-50 disabled:cursor-not-allowed text-xs xs:text-sm sm:text-base w-full sm:w-auto cursor-pointer ${isSubmitting ? "cursor-wait" : ""
                  }`}
              >
                <FaPaperPlane className="text-xs xs:text-sm" />
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
              </button>
            </form>
          </div>

          {/* Right Side - Contact Info */}
          <div className="lg:col-span-5 xl:col-span-4">
            <div
              className={`border-2 rounded p-5 xs:p-6 sm:p-7 md:p-8 h-full ${theme
                  ? "border-gray-800 bg-gray-900/50 backdrop-blur-sm"
                  : "border-gray-200 bg-gray-50/50 backdrop-blur-sm"
                }`}
            >
              <h3
                className={`text-base xs:text-lg sm:text-xl font-bold mb-4 xs:mb-5 sm:mb-6 ${theme ? "text-white" : "text-gray-900"
                  }`}
              >
                Contact me here
              </h3>

              <div className="space-y-3 xs:space-y-4">
                {/* Discord */}
                <a
                  href="#"
                  className={`flex items-center gap-3 xs:gap-4 text-xs xs:text-sm sm:text-base transition-all duration-300 group ${theme ? "text-gray-400 hover:text-indigo-500" : "text-gray-600 hover:text-indigo-500"
                    }`}
                >
                  <div
                    className={`p-2 xs:p-2.5 sm:p-3 rounded transition-colors duration-300 ${theme ? "bg-gray-800 group-hover:bg-indigo-500/10" : "bg-white group-hover:bg-indigo-500/10"
                      }`}
                  >
                    <FaDiscord className="text-base xs:text-lg sm:text-xl flex-shrink-0" />
                  </div>
                  <span className="break-all font-medium">musfika_iqfat_21</span>
                </a>

                {/* Email */}
                <a
                  href="mailto:musfikaiqfatmomo21@gmail.com"
                  className={`flex items-center gap-3 xs:gap-4 text-xs xs:text-sm sm:text-base transition-all duration-300 group ${theme ? "text-gray-400 hover:text-red-500" : "text-gray-600 hover:text-red-500"
                    }`}
                >
                  <div
                    className={`p-2 xs:p-2.5 sm:p-3 rounded transition-colors duration-300 ${theme ? "bg-gray-800 group-hover:bg-red-500/10" : "bg-white group-hover:bg-red-500/10"
                      }`}
                  >
                    <FaEnvelope className="text-base xs:text-lg sm:text-xl flex-shrink-0" />
                  </div>
                  <span className="break-all font-medium">musfikaiqfatmomo21@gmail.com</span>
                </a>

                {/* Twitter */}
                <a
                  href="https://x.com/Musfika_Iqfat21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 xs:gap-4 text-xs xs:text-sm sm:text-base transition-all duration-300 group ${theme ? "text-gray-400 hover:text-sky-500" : "text-gray-600 hover:text-sky-500"
                    }`}
                >
                  <div
                    className={`p-2 xs:p-2.5 sm:p-3 rounded transition-colors duration-300 ${theme ? "bg-gray-800 group-hover:bg-sky-500/10" : "bg-white group-hover:bg-sky-500/10"
                      }`}
                  >
                    <FaXTwitter className="text-base xs:text-lg sm:text-xl flex-shrink-0" />
                  </div>
                  <span className="break-all font-medium">Musfika_Iqfat21</span>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/m_maymunaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 xs:gap-4 text-xs xs:text-sm sm:text-base transition-all duration-300 group ${theme ? "text-gray-400 hover:text-pink-500" : "text-gray-600 hover:text-pink-500"
                    }`}
                >
                  <div
                    className={`p-2 xs:p-2.5 sm:p-3 rounded transition-colors duration-300 ${theme ? "bg-gray-800 group-hover:bg-pink-500/10" : "bg-white group-hover:bg-pink-500/10"
                      }`}
                  >
                    <FaInstagram className="text-base xs:text-lg sm:text-xl flex-shrink-0" />
                  </div>
                  <span className="break-all font-medium">m_maymunaa</span>
                </a>
                {/* WhatsApp */}
                <a
                  href="https://wa.me/8801777378806"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 xs:gap-4 text-xs xs:text-sm sm:text-base transition-all duration-300 group ${theme ? "text-gray-400 hover:text-green-500" : "text-gray-600 hover:text-green-500"
                    }`}
                >
                  <div
                    className={`p-2 xs:p-2.5 sm:p-3 rounded transition-colors duration-300 ${theme ? "bg-gray-800 group-hover:bg-green-500/10" : "bg-white group-hover:bg-green-500/10"
                      }`}
                  >
                    <FaWhatsapp className="text-base xs:text-lg sm:text-xl flex-shrink-0" />
                  </div>
                  <span className="break-all font-medium">WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;