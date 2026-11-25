import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { fadeIn } from '../utils/motion';

const Contact = () => {
  const fromRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        'service_r9ajtlb',
        'template_3c3jji1',
        {
          from_name: form.name,
          to_name: 'Shresth',
          from_email: form.email,
          to_email: 'akshat4575@gmail.com',
          message: form.message,
        },
        'rcoQHbhc4DPv84sAv'
      )
      .then(
        () => {
          setLoading(false);
          alert('Thank you. I will get back to you as soon as possible.');

          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert('Something went wrong!');
        }
      );
  };

  return (
    <div className="xl:mt-12 flex lg:flex-row flex-col-reverse gap-10 overflow-hidden items-center justify-between">
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="lg:flex-[0.9] w-full bg-black-100 p-8 rounded-2xl border border-[#2b274c] shadow-card"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        {/* Clean Contact Info Badges with Crisp SVG Icons */}
        <div className="mt-4 mb-6 grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-[13px]">
          <a
            href="mailto:akshat4575@gmail.com"
            className="flex items-center gap-2 text-secondary hover:text-white bg-[#151030] px-3.5 py-2.5 rounded-xl border border-[#2b274c] hover:border-[#00cea8] transition-all"
            title="Email Shresth"
          >
            <svg
              className="w-4 h-4 text-[#00cea8] shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span className="truncate">akshat4575@gmail.com</span>
          </a>

          <div
            className="flex items-center gap-2 text-secondary bg-[#151030] px-3.5 py-2.5 rounded-xl border border-[#2b274c]"
            title="Location"
          >
            <svg
              className="w-4 h-4 text-[#915eff] shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="truncate">Jaipur, Rajasthan</span>
          </div>

          <a
            href="https://github.com/shresthgour"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-secondary hover:text-white bg-[#151030] px-3.5 py-2.5 rounded-xl border border-[#2b274c] hover:border-[#915eff] transition-all"
            title="GitHub Profile"
          >
            <svg
              className="w-4 h-4 text-white shrink-0"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
            <span className="truncate">GitHub Profile</span>
          </a>
        </div>

        <form
          ref={fromRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-6"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-3">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-transparent focus:border-[#915eff] font-medium transition-colors"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-3">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-transparent focus:border-[#915eff] font-medium transition-colors"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-3">Your Message</span>
            <textarea
              rows="6"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-transparent focus:border-[#915eff] font-medium transition-colors"
            />
          </label>

          <button
            type="submit"
            className="bg-[#915eff] hover:bg-[#7e47f3] transition-colors py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl cursor-pointer"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      {/* 3D Rotating Earth Canvas */}
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="lg:flex-1 w-full xl:h-[650px] lg:h-[550px] md:h-[500px] h-[350px] flex items-center justify-center relative"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
