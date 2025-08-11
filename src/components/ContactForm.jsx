import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState('');

  // Replace with your actual Formspree form endpoint URL
  const formspreeEndpoint = 'https://formspree.io/f/xeozvdwd';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedback('');

    const formData = new FormData(e.target);

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      const text = await response.text();

      // Try to parse JSON, or fallback to raw text
      let data;
      try {
        data = JSON.parse(text);
      } catch {
        data = null;
      }

      console.log('Formspree response status:', response.status);
      console.log('Formspree response text:', text);
      console.log('Parsed response data:', data);

      if (response.ok) {
        setFeedback('Message sent successfully!');
        e.target.reset();
      } else if (data && data.errors) {
        setFeedback(data.errors.map((err) => err.message).join(', '));
      } else if (data && data.message) {
        setFeedback(data.message);
      } else {
        setFeedback(`Failed to send message. Status: ${response.status}`);
      }
    } catch (error) {
      console.error('Submit error:', error);
      setFeedback(`Error: ${error.message || error.toString()}`);
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

      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-glassBg backdrop-blur-xs border border-glassBorder rounded-3xl p-8 shadow-neon-violet flex flex-col gap-6"
      >
        <motion.input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="p-4 rounded-md bg-transparent border border-neonBlue text-textPrimary focus:outline-none focus:ring-2 focus:ring-neonViolet"
          whileFocus={{ scale: 1.05 }}
        />

        <motion.input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="p-4 rounded-md bg-transparent border border-neonBlue text-textPrimary focus:outline-none focus:ring-2 focus:ring-neonViolet"
          whileFocus={{ scale: 1.05 }}
        />

        <motion.textarea
          name="message"
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
