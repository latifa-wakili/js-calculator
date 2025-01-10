import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_c5bo2do', // ID سرویس شما
        'template_sjd5jmj', // ID قالب شما
        form.current,
        'TsBL0LLV8wC31sD30' // کلید عمومی شما
      )
      .then(
        (result) => {
          console.log('Email sent:', result.text);
          alert('Your message has been sent!');
        },
        (error) => {
          console.error('Error sending email:', error.text);
          alert('Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <main className="py-20 px-8 bg-gray-900 text-white min-h-screen">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-orange-500 mb-6">Contact Me</h2>
        <p className="text-gray-400 mb-8">
          Have a question or want to work together? Feel free to reach out!
        </p>
        <form ref={form} onSubmit={sendEmail} className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-left text-gray-300 font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="user_name"
              id="name"
              className="w-full p-3 border rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-left text-gray-300 font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              id="email"
              className="w-full p-3 border rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-left text-gray-300 font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              className="w-full p-3 border rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-orange-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}

export default Contact;