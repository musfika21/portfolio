// import React, { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import { Player } from "@lottiefiles/react-lottie-player";
// import { FaEnvelope, FaPhone, FaWhatsapp, FaPaperPlane, FaGithub, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

// // Custom useInView hook
// const useInView = (options = {}) => {
//   const [inView, setInView] = useState(false);
//   const ref = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(([entry]) => {
//       if (entry.isIntersecting) {
//         setInView(true);
//         if (options.triggerOnce) {
//           observer.disconnect();
//         }
//       } else if (!options.triggerOnce) {
//         setInView(false);
//       }
//     }, {
//       threshold: options.threshold || 0.2,
//     });

//     if (ref.current) {
//       observer.observe(ref.current);
//     }

//     return () => {
//       if (ref.current) {
//         observer.unobserve(ref.current);
//       }
//     };
//   }, [options.threshold, options.triggerOnce]);

//   return [ref, inView];
// };

// const Contact = () => {
//   const { colors, isDarkMode } = useTheme();
//   const [ref, inView] = useInView({
//     threshold: 0.2,
//     triggerOnce: true,
//   });

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     message: ""
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState(null);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: [0.6, 0.05, 0.01, 0.9],
//       },
//     },
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmitStatus(null);

//     try {
//       const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           firstName: formData.firstName,
//           lastName: formData.lastName,
//           email: formData.email,
//           phone: formData.phone,
//           message: formData.message,
//           _replyto: formData.email,
//         }),
//       });

//       if (response.ok) {
//         setSubmitStatus('success');
//         setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
//       } else {
//         setSubmitStatus('error');
//       }
//     } catch (error) {
//       setSubmitStatus('error');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const contactMethods = [
//     {
//       icon: FaWhatsapp,
//       title: "SMS / Whatsapp",
//       value: "+880 1777-378806",
//       link: "https://wa.me/8801777378806"
//     },
//     {
//       icon: FaEnvelope,
//       title: "Email:",
//       value: "musfikaiqfatmomo21@gmail.com",
//       link: "mailto:musfikaiqfatmomo21@gmail.com"
//     }
//   ];

//   const socialLinks = [
//     { icon: FaGithub, link: "https://github.com/musfika21" },
//     { icon: FaLinkedin, link: "https://www.linkedin.com/in/musfika-iqfat21" },
//     { icon: FaFacebook, link: "https://www.facebook.com/musfikaiqfatmomo21" },
//     { icon: FaTwitter, link: "https://x.com/Musfika_Iqfat21" }
//   ];

//   return (
//     <section
//       id="contact"
//       ref={ref}
//       className="min-h-screen py-16 xs:py-20 sm:py-24 md:py-28 lg:py-32 xl:py-36 px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 relative overflow-hidden"
//       style={{ backgroundColor: colors.bg.primary }}
//     >
//       {/* Animated Background */}
//       <motion.div
//         className="absolute inset-0 opacity-20"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 0.2 }}
//         transition={{ duration: 1.5 }}
//       >
//         <motion.div
//           className="absolute top-20 right-10 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full blur-3xl"
//           style={{ backgroundColor: colors.accent.primary }}
//           animate={{
//             scale: [1, 1.2, 1],
//             opacity: [0.3, 0.5, 0.3],
//           }}
//           transition={{
//             duration: 8,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />
//         <motion.div
//           className="absolute bottom-20 left-10 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full blur-3xl"
//           style={{ backgroundColor: colors.accent.secondary }}
//           animate={{
//             scale: [1, 1.3, 1],
//             opacity: [0.2, 0.4, 0.2],
//           }}
//           transition={{
//             duration: 10,
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: 1,
//           }}
//         />
//       </motion.div>

//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         animate={inView ? "visible" : "hidden"}
//         className="relative z-10 max-w-7xl mx-auto"
//       >
//         {/* Section Title */}
//         <motion.div variants={itemVariants} className="text-center mb-10 xs:mb-12 sm:mb-14 md:mb-16 lg:mb-20">
//           <h2
//             className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 xs:mb-4"
//             style={{ color: colors.text.primary }}
//           >
//             Contact{" "}
//             <span style={{ color: colors.accent.primary }}>Me</span>
//           </h2>
//           <motion.div
//             className="w-16 xs:w-20 sm:w-24 md:w-32 h-1 mx-auto rounded-full"
//             style={{
//               background: `linear-gradient(90deg, ${colors.accent.primary}, ${colors.accent.secondary})`,
//             }}
//             initial={{ width: 0 }}
//             animate={inView ? { width: "8rem" } : { width: 0 }}
//             transition={{ duration: 0.8, delay: 0.5 }}
//           />
//         </motion.div>

//         {/* Main Content Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-start">
          
//           {/* Left Side - Form */}
//           <motion.div variants={itemVariants}>
//             <div
//               className="p-6 sm:p-8 md:p-10 rounded-3xl"
//               style={{
//                 backgroundColor: colors.bg.card,
//                 border: `1px solid ${colors.accent.border}`,
//                 boxShadow: isDarkMode 
//                   ? `0 8px 32px ${colors.accent.primary}15` 
//                   : '0 8px 32px rgba(0, 0, 0, 0.08)',
//               }}
//             >
//               <h3
//                 className="text-xl sm:text-2xl md:text-3xl font-bold mb-5"
//                 style={{ color: colors.text.primary }}
//               >
//                 Send me a message
//               </h3>
//               <div className="space-y-4 sm:space-y-5">
//                 {/* First Name & Last Name */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-xs sm:text-sm font-medium mb-2" style={{ color: colors.text.primary }}>
//                       First Name
//                     </label>
//                     <input
//                       type="text"
//                       name="firstName"
//                       value={formData.firstName}
//                       onChange={handleChange}
//                       placeholder="Enter your first name"
//                       required
//                       className="w-full px-4 py-3 rounded-xl text-sm transition-all duration-300"
//                       style={{
//                         backgroundColor: colors.bg.secondary,
//                         color: colors.text.primary,
//                         border: `2px solid ${colors.accent.border}`,
//                         outline: 'none',
//                       }}
//                       onFocus={(e) => e.target.style.borderColor = colors.accent.primary}
//                       onBlur={(e) => e.target.style.borderColor = colors.accent.border}
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-xs sm:text-sm font-medium mb-2" style={{ color: colors.text.primary }}>
//                       Last Name
//                     </label>
//                     <input
//                       type="text"
//                       name="lastName"
//                       value={formData.lastName}
//                       onChange={handleChange}
//                       placeholder="Enter your Last name"
//                       required
//                       className="w-full px-4 py-3 rounded-xl text-sm transition-all duration-300"
//                       style={{
//                         backgroundColor: colors.bg.secondary,
//                         color: colors.text.primary,
//                         border: `2px solid ${colors.accent.border}`,
//                         outline: 'none',
//                       }}
//                       onFocus={(e) => e.target.style.borderColor = colors.accent.primary}
//                       onBlur={(e) => e.target.style.borderColor = colors.accent.border}
//                     />
//                   </div>
//                 </div>

//                 {/* Email & Phone */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-xs sm:text-sm font-medium mb-2" style={{ color: colors.text.primary }}>
//                       Email
//                     </label>
//                     <input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       placeholder="Enter your email"
//                       required
//                       className="w-full px-4 py-3 rounded-xl text-sm transition-all duration-300"
//                       style={{
//                         backgroundColor: colors.bg.secondary,
//                         color: colors.text.primary,
//                         border: `2px solid ${colors.accent.border}`,
//                         outline: 'none',
//                       }}
//                       onFocus={(e) => e.target.style.borderColor = colors.accent.primary}
//                       onBlur={(e) => e.target.style.borderColor = colors.accent.border}
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-xs sm:text-sm font-medium mb-2" style={{ color: colors.text.primary }}>
//                       Contact Details
//                     </label>
//                     <input
//                       type="tel"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       placeholder="Enter your contact number"
//                       className="w-full px-4 py-3 rounded-xl text-sm transition-all duration-300"
//                       style={{
//                         backgroundColor: colors.bg.secondary,
//                         color: colors.text.primary,
//                         border: `2px solid ${colors.accent.border}`,
//                         outline: 'none',
//                       }}
//                       onFocus={(e) => e.target.style.borderColor = colors.accent.primary}
//                       onBlur={(e) => e.target.style.borderColor = colors.accent.border}
//                     />
//                   </div>
//                 </div>

//                 {/* Message */}
//                 <div>
//                   <label className="block text-xs sm:text-sm font-medium mb-2" style={{ color: colors.text.primary }}>
//                     Message
//                   </label>
//                   <textarea
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     rows="5"
//                     placeholder="Enter your message"
//                     required
//                     className="w-full px-4 py-3 rounded-xl text-sm transition-all duration-300 resize-none"
//                     style={{
//                       backgroundColor: colors.bg.secondary,
//                       color: colors.text.primary,
//                       border: `2px solid ${colors.accent.border}`,
//                       outline: 'none',
//                     }}
//                     onFocus={(e) => e.target.style.borderColor = colors.accent.primary}
//                     onBlur={(e) => e.target.style.borderColor = colors.accent.border}
//                   />
//                 </div>

//                 {/* Submit Button */}
//                 <motion.button
//                   onClick={handleSubmit}
//                   disabled={isSubmitting}
//                   className="w-full py-3.5 sm:py-4 rounded-xl font-bold text-sm sm:text-base flex items-center justify-center gap-2"
//                   style={{
//                     background: `linear-gradient(135deg, ${colors.accent.primary}, ${colors.accent.secondary})`,
//                     color: isDarkMode ? colors.bg.primary : '#FFFFFF',
//                     opacity: isSubmitting ? 0.7 : 1,
//                     cursor: isSubmitting ? 'not-allowed' : 'pointer',
//                     boxShadow: isDarkMode 
//                       ? `0 4px 20px ${colors.accent.primary}40` 
//                       : '0 4px 20px rgba(0, 0, 0, 0.15)',
//                   }}
//                   whileHover={!isSubmitting ? { scale: 1.02 } : {}}
//                   whileTap={!isSubmitting ? { scale: 0.98 } : {}}
//                 >
//                   <span>{isSubmitting ? 'Sending...' : 'Send a Message'}</span>
//                   <FaPaperPlane className="text-sm" />
//                 </motion.button>

//                 {/* Status Messages */}
//                 {submitStatus === 'success' && (
//                   <motion.div
//                     initial={{ opacity: 0, y: -10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     className="p-4 rounded-xl text-center text-sm font-medium"
//                     style={{
//                       backgroundColor: isDarkMode 
//                         ? `${colors.accent.primary}20` 
//                         : `${colors.accent.primary}15`,
//                       color: colors.accent.primary,
//                       border: `1px solid ${colors.accent.primary}40`,
//                     }}
//                   >
//                     ✓ Message sent successfully! I'll get back to you soon.
//                   </motion.div>
//                 )}

//                 {submitStatus === 'error' && (
//                   <motion.div
//                     initial={{ opacity: 0, y: -10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     className="p-4 rounded-xl text-center text-sm font-medium"
//                     style={{
//                       backgroundColor: isDarkMode ? '#ff444420' : '#ffe5e5',
//                       color: isDarkMode ? '#ff6b6b' : '#d32f2f',
//                       border: `1px solid ${isDarkMode ? '#ff444440' : '#ffcccc'}`,
//                     }}
//                   >
//                     ✗ Something went wrong. Please try again or email me directly.
//                   </motion.div>
//                 )}
//               </div>
//             </div>
//           </motion.div>

//           {/* Right Side - Info Card */}
//           <motion.div variants={itemVariants}>
//             <div
//               className="p-6 sm:p-8 md:p-10 rounded-3xl h-full flex flex-col"
//               style={{
//                 background: `linear-gradient(135deg, ${colors.accent.primary}, ${colors.accent.secondary})`,
//                 boxShadow: isDarkMode 
//                   ? `0 10px 40px ${colors.accent.primary}30` 
//                   : '0 10px 40px rgba(0, 0, 0, 0.15)',
//               }}
//             >
//               <h3
//                 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8"
//                 style={{ color: isDarkMode ? colors.bg.primary : '#FFFFFF' }}
//               >
//                 Hi! I am always here to help you.
//               </h3>

//               {/* Contact Methods */}
//               <div className="space-y-4 mb-8">
//                 {contactMethods.map((method, index) => {
//                   const Icon = method.icon;
//                   return (
//                     <motion.a
//                       key={index}
//                       href={method.link}
//                       target={method.link?.startsWith('http') ? '_blank' : '_self'}
//                       rel={method.link?.startsWith('http') ? 'noopener noreferrer' : ''}
//                       className="flex items-center gap-4 p-4 rounded-2xl transition-all duration-300"
//                       style={{
//                         backgroundColor: isDarkMode 
//                           ? `${colors.bg.primary}30` 
//                           : 'rgba(255, 255, 255, 0.25)',
//                         backdropFilter: 'blur(10px)',
//                         border: `1px solid ${isDarkMode ? 'transparent' : 'rgba(255, 255, 255, 0.3)'}`,
//                       }}
//                       whileHover={{ 
//                         scale: 1.02, 
//                         backgroundColor: isDarkMode 
//                           ? `${colors.bg.primary}40` 
//                           : 'rgba(255, 255, 255, 0.35)',
//                       }}
//                       initial={{ opacity: 0, x: 20 }}
//                       animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
//                       transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
//                     >
//                       <div
//                         className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
//                         style={{ 
//                           backgroundColor: isDarkMode 
//                             ? `${colors.bg.primary}50` 
//                             : 'rgba(255, 255, 255, 0.4)',
//                         }}
//                       >
//                         <Icon 
//                           className="text-xl" 
//                           style={{ color: isDarkMode ? colors.bg.primary : '#FFFFFF' }} 
//                         />
//                       </div>
//                       <div className="flex-1 min-w-0">
//                         <p 
//                           className="text-xs sm:text-sm font-medium mb-0.5" 
//                           style={{ 
//                             color: isDarkMode ? colors.bg.primary : '#FFFFFF', 
//                             opacity: 0.9 
//                           }}
//                         >
//                           {method.title}
//                         </p>
//                         <p 
//                           className="text-sm sm:text-base font-bold truncate" 
//                           style={{ color: isDarkMode ? colors.bg.primary : '#FFFFFF' }}
//                         >
//                           {method.value}
//                         </p>
//                       </div>
//                     </motion.a>
//                   );
//                 })}
//               </div>

//               {/* Social Links */}
//               <div className="mt-auto">
//                 <div 
//                   className="h-px mb-6" 
//                   style={{ 
//                     backgroundColor: isDarkMode 
//                       ? `${colors.bg.primary}30` 
//                       : 'rgba(255, 255, 255, 0.3)',
//                   }} 
//                 />
//                 <p 
//                   className="text-sm sm:text-base font-semibold mb-4" 
//                   style={{ color: isDarkMode ? colors.bg.primary : '#FFFFFF' }}
//                 >
//                   Connect with me
//                 </p>
//                 <div className="flex gap-4">
//                   {socialLinks.map((social, index) => {
//                     const Icon = social.icon;
//                     return (
//                       <motion.a
//                         key={index}
//                         href={social.link}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center transition-all duration-300"
//                         style={{
//                           backgroundColor: isDarkMode 
//                             ? `${colors.bg.primary}30` 
//                             : 'rgba(255, 255, 255, 0.25)',
//                           border: `1px solid ${isDarkMode ? 'transparent' : 'rgba(255, 255, 255, 0.3)'}`,
//                         }}
//                         whileHover={{ 
//                           scale: 1.1, 
//                           backgroundColor: isDarkMode 
//                             ? colors.bg.primary 
//                             : '#FFFFFF',
//                         }}
//                         whileTap={{ scale: 0.95 }}
//                       >
//                         <Icon 
//                           className="text-lg sm:text-xl" 
//                           style={{ color: isDarkMode ? colors.bg.primary : '#FFFFFF' }} 
//                         />
//                       </motion.a>
//                     );
//                   })}
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default Contact;



import React from 'react';
import useAuth from '../Hooks/useAuth';

const Contact = () => {
  const {theme} = useAuth();
  return (
    <div className={`pt-30 pl-40 ${ theme ? "bg-black text-white" : "bg-white text-black"} min-h-screen`}>
      contact page 
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid nam ratione consequuntur! Excepturi sed vero aliquam dolores doloremque eveniet tenetur quod adipisci nemo similique? Reprehenderit corrupti nihil dolorem? Nostrum ea animi assumenda? Alias reprehenderit voluptate incidunt minima vel fugiat eligendi reiciendis consequatur consequuntur sint, dolor tempora veritatis cupiditate, sunt debitis, quisquam modi deleniti. Voluptas ratione eius quasi dicta excepturi fugiat aut temporibus rem necessitatibus odit, commodi quidem distinctio, voluptatum perferendis? Dolorem placeat, qui fugiat cupiditate molestiae nulla repellendus error accusamus veniam sed porro neque tempora, repudiandae consequatur aliquid nesciunt alias eligendi? Blanditiis, dolorem omnis eos excepturi in, ex perferendis error voluptatibus adipisci laborum nesciunt, asperiores dolor enim sapiente iste quas magni obcaecati? Nisi explicabo illo quas, ducimus officiis nemo sunt facere ex cupiditate id! Est quod placeat at ducimus quia quaerat commodi, mollitia tempora nam exercitationem provident illum natus deserunt autem incidunt nulla eos fuga voluptatibus dignissimos cupiditate aspernatur error! Mollitia similique in culpa iure repellat consequatur enim nam, voluptatibus perferendis, laboriosam modi quos expedita sint error sequi doloribus assumenda officia rem. Nobis sit consequuntur cupiditate quis eius. Labore autem dolorem laudantium provident est, odio sapiente quibusdam eum corrupti officiis harum? Exercitationem impedit numquam libero deleniti, tempora consectetur voluptatum ipsum natus est voluptas beatae modi qui accusamus dolorum error sed repudiandae architecto vitae non necessitatibus! Ducimus ad nemo natus eum nulla distinctio doloribus! Saepe maiores quis itaque possimus porro! Maiores, accusamus asperiores sint esse, quae excepturi ipsum praesentium, suscipit quisquam ut quos. Tempora provident impedit quaerat itaque accusamus? Possimus voluptas exercitationem doloribus officiis nisi modi cumque facilis reiciendis tenetur, vel consectetur qui laborum cupiditate voluptates. Veniam ex molestias quam labore eos quos error dolores ipsam. Numquam excepturi minima aspernatur doloribus corrupti aliquam, aperiam ea molestias at inventore tenetur quos omnis ipsum qui dolore, in odio ex culpa adipisci ipsa amet? Enim fugit porro architecto perspiciatis illo? Corporis quo debitis maxime necessitatibus impedit ex, sed tempore? Error aliquid quaerat delectus nesciunt quo dolor, sed dignissimos porro saepe reprehenderit, nobis nostrum dolore hic quia non. Sit expedita doloremque maxime esse doloribus ea voluptatibus dolore vel quaerat veritatis cumque magni nam magnam voluptatem aspernatur incidunt labore, quibusdam alias inventore iure vitae at, officia beatae? Esse optio deleniti assumenda, totam nulla velit dolorem, placeat corrupti repudiandae laboriosam quasi possimus odio aut? Facilis, officiis et accusantium illo, quas harum est consectetur omnis libero ut, reiciendis deleniti animi. Praesentium ut, beatae ducimus voluptatem eos aspernatur at? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro minima nisi odio similique, rerum magni debitis ipsam ipsum quasi molestiae assumenda delectus a dicta ducimus modi numquam eum soluta eius atque alias suscipit laboriosam accusamus veritatis aut. Placeat nihil suscipit corporis facilis sed delectus, est ullam ipsam impedit perspiciatis obcaecati, accusamus repellat asperiores eos vel aliquid consequatur, at sit ratione. Iusto eaque numquam eum, vero possimus quo aspernatur reiciendis quia quis. Tenetur vel ad, vero sit ratione laboriosam exercitationem cupiditate nemo reprehenderit, numquam hic neque aut asperiores quibusdam harum architecto cum velit eligendi beatae facilis eius corporis saepe. Aliquid deleniti cumque adipisci possimus maiores! Adipisci animi tempore dignissimos, molestiae assumenda ab aperiam, cumque minima officiis qui ratione saepe voluptas nulla numquam sequi minus voluptates ipsam fugit natus ex quisquam possimus. Maxime nulla earum cupiditate molestias quisquam modi in consectetur odit! Dolor, officia pariatur. Alias distinctio temporibus molestias dolorum delectus inventore quos nobis harum laudantium unde id qui at magni eius illo saepe totam, enim nemo. Beatae neque totam animi deleniti nihil odio. Quisquam quo velit praesentium laboriosam, voluptates iusto nemo cumque delectus voluptatibus officiis exercitationem quos eveniet natus aliquid quia perspiciatis laborum rerum. Ad ea saepe at quasi culpa. Recusandae molestias rerum, ipsum eius molestiae, placeat et necessitatibus ducimus voluptatem iusto quasi fugit officiis! Unde, delectus corrupti. Quidem inventore labore obcaecati adipisci beatae! Accusamus voluptatem quisquam quod voluptate ratione exercitationem perferendis quia repudiandae distinctio vel cumque nulla quaerat assumenda repellendus cum asperiores, praesentium eius magnam sequi facere? Beatae odit a autem deleniti atque asperiores expedita molestias officiis, exercitationem esse magni aliquid odio sunt tenetur ut vel distinctio harum illo hic ipsum voluptatum! Ad sequi placeat at corrupti mollitia nisi ab quis reprehenderit blanditiis numquam esse nulla sapiente, dignissimos molestias debitis vero repudiandae deleniti voluptatibus iusto? Saepe ratione corporis harum, nihil maiores reiciendis, rem dicta, voluptatibus non id cumque. Inventore sint voluptatem aliquam eveniet pariatur quos distinctio? Suscipit iusto cum a culpa animi, enim rerum tempore, numquam minus necessitatibus aut aliquam accusantium cumque fuga hic assumenda aspernatur molestias adipisci consequuntur laborum unde, neque atque nulla! Commodi aut consequuntur nihil non beatae modi magni assumenda natus distinctio ad! Modi et ipsa est odit eveniet aliquid hic esse accusamus quia, rerum eos, expedita obcaecati. Architecto quae ex, libero, impedit perferendis reiciendis aut perspiciatis quibusdam doloremque voluptatibus odit beatae eaque eos ad quam laborum ab exercitationem esse corporis incidunt dolores! Iste, minus numquam alias labore et nam saepe eaque aspernatur minima, modi perspiciatis sed voluptatibus debitis, atque culpa placeat cumque nesciunt soluta omnis tenetur expedita. Impedit tenetur explicabo sit, debitis rem amet modi esse provident laboriosam culpa fuga, obcaecati numquam ad, est quasi dolores minima qui quam laborum quod dolore? Dolorem cupiditate hic doloremque dicta soluta nobis saepe odit, quod ullam ut molestiae maiores tempore dolor incidunt consectetur quae possimus, modi et labore asperiores pariatur deleniti. Delectus at corporis facilis sunt laboriosam, aliquid veritatis eligendi modi non ipsam eum aliquam odio, voluptate quis est, eos distinctio itaque atque ex ut consequuntur ad beatae et! Quo blanditiis minima dolor molestias maiores, magni earum vero labore consequuntur, illum ducimus error sunt pariatur facere provident asperiores aperiam voluptate debitis aliquid tempore rem eos harum officia. Voluptatum ut, consequatur explicabo eos adipisci, inventore cupiditate laboriosam illo incidunt id fugit obcaecati. Eius, id ratione beatae consequuntur praesentium voluptatum doloribus voluptate architecto incidunt deserunt dignissimos eum laudantium amet totam, dolore vel cumque consectetur earum laboriosam nam mollitia, sunt quisquam? Tempora porro eius modi aperiam officiis molestiae et numquam necessitatibus praesentium explicabo voluptas rem qui, beatae excepturi quod assumenda perspiciatis itaque odit ab veniam? Porro sequi veritatis quod laudantium eveniet rerum consectetur nisi quam vero fugiat perspiciatis eos minima commodi consequuntur saepe aspernatur mollitia optio, harum nostrum doloribus numquam? Ea temporibus amet praesentium nesciunt qui eligendi, rem minus accusamus quaerat nobis dolore incidunt quibusdam natus? Natus quaerat magnam dolore, eligendi voluptas qui totam maiores sint pariatur deserunt tempora suscipit quia ab laudantium neque, beatae perspiciatis! Culpa, aperiam minus iusto sit expedita maxime nobis rerum a inventore illum qui dolorum quae libero similique voluptate nihil recusandae consequuntur eligendi, iure fugit? Pariatur facilis sint aspernatur dignissimos temporibus enim iusto inventore ratione doloremque, recusandae incidunt ex voluptate dolorum possimus fugit, harum reprehenderit adipisci praesentium dolores. Fugit, eum consectetur ducimus dolore, corrupti voluptatem numquam provident consequuntur distinctio doloribus velit magnam natus sunt placeat sint beatae blanditiis dolorem non? Quia architecto animi atque quasi vel esse harum nemo temporibus cumque ea facere praesentium adipisci voluptatibus laborum itaque dolorum porro incidunt quidem qui, velit rem. Asperiores laudantium recusandae dolore ducimus voluptas quaerat mollitia, ex pariatur culpa quae fugit sequi quidem ratione optio nobis facilis tempora aliquid beatae vel deserunt non, esse at eius eos! Inventore voluptas nesciunt, ducimus tempore ab aperiam omnis nihil porro. Delectus asperiores nostrum sapiente quibusdam reiciendis maxime iste maiores obcaecati voluptatem fugit aliquid non, ab inventore possimus eveniet error repellendus quod modi. Molestiae nesciunt veniam repellat sit, fugiat excepturi unde? Nulla officiis autem laudantium harum, ratione recusandae dicta voluptate, obcaecati est vitae quia, minima vel perspiciatis ducimus delectus sequi fugiat labore facere eius explicabo optio corrupti? Voluptatibus repellat ut accusantium blanditiis amet omnis illo consequatur, illum aperiam. Provident quae eaque vitae cumque facere ipsam commodi, laudantium voluptatem molestiae, sequi aliquid quod earum dolorem veniam harum reprehenderit fuga ipsum mollitia. Excepturi sapiente deserunt in, iure aperiam nihil, nisi ab sit est adipisci quas magni! Ipsam dolorum debitis nostrum maiores delectus commodi dignissimos odit voluptatibus, amet cupiditate fuga deleniti, nobis nemo vero recusandae quia consequuntur culpa rerum ea iste consectetur eum, voluptatem sunt quo. Libero corporis voluptate facere placeat earum quasi velit illum. Tenetur illo eveniet quidem distinctio nesciunt consectetur earum blanditiis vitae omnis sint mollitia odio aliquid recusandae temporibus necessitatibus ab sed, culpa vero pariatur similique rerum, reprehenderit eos harum. Molestias quod earum ea unde accusantium, odio modi nam illo delectus consequatur qui error quisquam molestiae rerum voluptatum reiciendis doloremque. Quidem ipsam nostrum dolorem. Nobis perspiciatis omnis nesciunt sunt sequi. Sapiente natus aperiam id, perspiciatis illum porro magnam quisquam nulla a quia, possimus praesentium?
    </div>
  );
};

export default Contact;