import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    const form = e.target;
    const honeypot = form.honeypot.value;

    if (honeypot) {
      console.warn('Bot detected!');
      return;
    }

    emailjs
      .sendForm(
        'service_y7oqpj6',
        'template_g82st2k',
        form,
        'T_VtCzyoxOW3PJseS'
      )
      .then(
        () => {
          setStatus('Message sent! I will get back to you soon.');
          form.reset();
        },
        (error) => {
          console.error(error.text);
          setStatus('Something went wrong. Please try again.');
        }
      );
  };

  return (
    <section
      id="contact"
      className="bg-bgPrimary text-textPrimary py-20 px-6 sm:px-12 md:px-24 min-h-screen flex flex-col items-center justify-center"
    >
      <h2 className="font-orbitron text-5xl font-extrabold mb-8 text-neonBlue drop-shadow-neon-blue text-center">
        Contact Us
      </h2>

      <form onSubmit={sendEmail} className="space-y-6 max-w-lg w-full">
        {/* Honeypot Field */}
        <div className="hidden">
          <label htmlFor="honeypot">Leave this empty</label>
          <input type="text" id="honeypot" name="honeypot" />
        </div>

        <div>
          <label htmlFor="name" className="block mb-2">Name</label>
          <input
            required
            type="text"
            name="name"
            id="name"
            className="w-full px-4 py-3 rounded-lg bg-glassBg border border-glassBorder focus:outline-none focus:ring-2 focus:ring-neonBlue transition"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-2">Email</label>
          <input
            required
            type="email"
            name="email"
            id="email"
            className="w-full px-4 py-3 rounded-lg bg-glassBg border border-glassBorder focus:outline-none focus:ring-2 focus:ring-neonBlue transition"
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-2">Message</label>
          <textarea
            required
            name="message"
            id="message"
            rows="5"
            className="w-full px-4 py-3 rounded-lg bg-glassBg border border-glassBorder focus:outline-none focus:ring-2 focus:ring-neonBlue transition"
          ></textarea>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="bg-neonBlue text-bgPrimary font-bold px-8 py-4 rounded-full shadow-neon-blue hover:shadow-neon-violet transition focus:outline-none focus:ring-4 focus:ring-neonViolet focus:ring-opacity-60"
        >
          Send Message
        </motion.button>
      </form>

      <AnimatePresence>
        {status && (
          <motion.div
            className={`mt-6 px-4 py-2 rounded-md ${
              status.startsWith('Message sent')
                ? 'bg-green-600 text-white'
                : 'bg-red-600 text-white'
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {status}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
