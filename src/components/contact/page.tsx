import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionHeader from '../general/SectionHeader'





export default function ExperienceSection() {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });


  return (
    <div id="contact" className="flex flex-col items-center w-full max-w-4xl px-4 mb-20 mx-auto">

      <SectionHeader key="contact" title="Contact" subtitle="How to reach me" />

      <div className="w-full max-w-2xl bg-gray-900/60 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-white/10 mt-10">
        <form className='flex flex-col gap-6'>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-gray-300 font-medium ml-1">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="your@email.com"
              className='bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all'
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-gray-300 font-medium ml-1">Message</label>
            <textarea
              name="message"
              id="message"
              rows={4}
              placeholder="Hello, I'd like to reach out..."
              className='bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all resize-none'
            />
          </div>

          <button type="button" className="mt-4 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold tracking-wide shadow-lg hover:shadow-blue-500/25 hover:scale-[1.02] transition-all active:scale-[0.98]">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}


