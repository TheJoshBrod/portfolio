'use client';

import { useState, FormEvent } from 'react';

export default function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch('https://formspree.io/f/mvzpjlpp', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus('success');
        form.reset();
        // Reset success message after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div id="contact" className="flex flex-col items-start w-full max-w-5xl mx-auto px-8 md:px-16 mb-32 pt-24">

      <div className="mb-8 font-mono text-gray-500 text-sm">
        [contact]
      </div>

      <div className="w-full max-w-lg">
        <form onSubmit={handleSubmit} className='flex flex-col gap-8 font-mono text-sm'>
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-gray-500">name*:</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="your name"
              className='bg-transparent border-b border-gray-800 py-2 text-gray-300 placeholder-gray-700 focus:outline-none focus:border-white transition-colors w-full'
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-gray-500">email*:</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="user@example.com"
              className='bg-transparent border-b border-gray-800 py-2 text-gray-300 placeholder-gray-700 focus:outline-none focus:border-white transition-colors w-full'
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-gray-500">message:</label>
            <textarea
              name="message"
              id="message"
              rows={4}
              required
              placeholder="Your message here..."
              className='bg-transparent border-b border-gray-800 py-2 text-gray-300 placeholder-gray-700 focus:outline-none focus:border-white transition-colors w-full resize-none'
            />
          </div>

          <button 
            type="submit" 
            disabled={status === 'loading'}
            className="self-start text-gray-500 hover:text-white border border-gray-800 hover:border-white px-4 py-2 rounded-sm transition-all mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? '[sending...]' : '[send message]'}
          </button>

          {status === 'success' && (
            <p className="text-green-500 text-sm">
              ✓ message sent successfully
            </p>
          )}
          {status === 'error' && (
            <p className="text-red-500 text-sm">
              ✗ failed to send. please try again.
            </p>
          )}
        </form>
      </div>

      <div className="mt-24 text-gray-600 font-mono text-xs">
        Built with Next.js & Tailwind.
        <br />
        ASCII art generated using{" "}
        <a
          href="https://www.asciiart.eu/ascii-night-sky-generator"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gray-800"
        >
          asciiart.eu
        </a>.
        <br />
        &copy; {new Date().getFullYear()} Josh Brodsky.
      </div>

    </div>
  );
}