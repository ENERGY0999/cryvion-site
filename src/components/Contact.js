import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from 'emailjs-com';
import { toast, Toaster } from 'react-hot-toast';
import { FaUser, FaEnvelope, FaCommentDots } from 'react-icons/fa';

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    const form = e.target;
    const honeypot = form.honeypot.value;

    if (honeypot) {
      console.warn('Bot detected!');
      return;
    }

    setLoading(true);

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        form,
        'YOUR_PUBLIC_KEY'
      )
      .then(() => {
        toast.success('Message sent! I will get back to you soon.');
        form.reset();
      })
      .catch(() => {
        toast.error('Something went wrong. Please try again.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className="bg-bgPrimary text-textPrimary py-20 px-6 sm:px-12 md:px-24 min-h-screen flex flex-col items-center justify-center"
    >
      <Toaster position="top-right" reverseOrder={false} />

      <motion.div
        className="bg-glassBg backdrop-blur-xs border border-glassBorder rounded-3xl p-12 shadow-neon-violet max-w-2xl w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h2 className="font-orbitron text-5xl font-extrabold mb-10 text-neonBlue drop-shadow-neon-blue text-center">
          Contact Us
        </h2>

        <form onSubmit={sendEmail} className="space-y-10">
          <div className="hidden">
            <input type="text" name="honeypot" />
          </div>

          {/* Input Group */}
          <div className="relative">
            <FaUser className="absolute top-1/2 left-4 transform -translate-y-1/2 text-neonBlue" />
            <input
              required
              type="text"
              name="name"
              className="peer w-full pl-12 pr-4 py-4 bg-transparent border-b-2 border-textPrimary/30 focus:border-neonBlue outline-none text-lg transition-all"
              placeholder=" "
            />
            <label className="absolute left-12 top-4 text-textPrimary/70 text-lg pointer-events-none transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-lg peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-neonBlue">
              Name
            </label>
          </div>

          <div className="relative">
            <FaEnvelope className="absolute top-1/2 left-4 transform -translate-y-1/2 text-neonBlue" />
            <input
              required
              type="email"
              name="email"
              className="peer w-full pl-12 pr-4 py-4 bg-transparent border-b-2 border-textPrimary/30 focus:border-neonBlue outline-none text-lg transition-all"
              placeholder=" "
            />
            <label className="absolute left-12 top-4 text-textPrimary/70 text-lg pointer-events-none transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-lg peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-neonBlue">
              Email
            </label>
          </div>

          <div className="relative">
            <FaCommentDots className="absolute top-4 left-4 text-neonBlue" />
            <textarea
              required
              name="message"
              rows="5"
              className="peer w-full pl-12 pr-4 py-4 bg-transparent border-b-2 border-textPrimary/30 focus:border-neonBlue outline-none text-lg transition-all"
              placeholder=" "
            ></textarea>
            <label className="absolute left-12 top-4 text-textPrimary/70 text-lg pointer-events-none transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-lg peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-neonBlue">
              Message
            </label>
          </div>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px #00BFFF' }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={loading}
            className="w-full text-center bg-neonBlue text-bgPrimary font-bold px-8 py-4 rounded-full shadow-neon-blue hover:shadow-neon-violet transition focus:outline-none focus:ring-4 focus:ring-neonViolet focus:ring-opacity-60"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}
