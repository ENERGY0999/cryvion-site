import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { send } from '@emailjs/browser';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedback('');

    try {
      await send(
        'service_y7oqpj6', // from emailjs dashboard
        'template_g82st2k', // your email template id
        form,
        'T_VtCzyoxOW3PJseS'  // from emailjs dashboard
      );
      setFeedback('Message sent successfully!');
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      setFeedback('Failed to send message. Please try again later.');
    }
    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="bg-bgPrimary text-textPrimary py-20 px-6 sm:px-12 md:px-24 min-h-screen"
      aria-label="Contact form"
    >
      <h2 className="font-orbitron text-5xl font-extrabold mb-12 text-neonBlue drop-shadow-neon-blue text-center">
        Contact Us
      </h2>

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-glassBg backdrop-blur-xs border border-glassBorder rounded-3xl p-8 shadow-neon-violet flex flex-col gap-6">
        <motion.input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="p-4 rounded-md bg-transparent border border-neonBlue text-textPrimary focus:outline-none focus:ring-2 focus:ring-neonViolet"
          whileFocus={{ scale: 1.05 }}
        />

        <motion.input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="p-4 rounded-md bg-transparent border border-neonBlue text-textPrimary focus:outline-none focus:ring-2 focus:ring-neonViolet"
          whileFocus={{ scale: 1.05 }}
        />

        <motion.textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows="5"
          required
          className="p-4 rounded-md bg-transparent border border-neonBlue text-textPrimary focus:outline-none focus:ring-2 focus:ring-neonViolet resize-none"
          whileFocus={{ scale: 1.05 }}
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-neonViolet text-bgPrimary font-bold py-3 rounded-full shadow-neon-violet hover:shadow-neon-blue transition transform hover:scale-105"
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>

        {feedback && (
          <p className="text-center mt-2 text-neonBlue">{feedback}</p>
        )}
      </form>
    </section>
  );
}
