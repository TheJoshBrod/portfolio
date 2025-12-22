export default function ContactSection() {
  return (
    <div id="contact" className="flex flex-col items-start w-full max-w-5xl mx-auto px-8 md:px-16 mb-32 pt-24">

      <div className="mb-8 font-mono text-gray-500 text-sm">
        [contact]
      </div>

      <div className="w-full max-w-lg">
        <form className='flex flex-col gap-8 font-mono text-sm'>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-gray-500">email:</label>
            <input
              type="email"
              name="email"
              id="email"
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
              placeholder="..."
              className='bg-transparent border-b border-gray-800 py-2 text-gray-300 placeholder-gray-700 focus:outline-none focus:border-white transition-colors w-full resize-none'
            />
          </div>

          <button type="button" className="self-start text-gray-500 hover:text-white border border-gray-800 hover:border-white px-4 py-2 rounded-sm transition-all mt-4">
            [send message]
          </button>
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


