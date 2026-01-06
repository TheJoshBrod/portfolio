'use client';

export default function Footnote() {

    return (
        <div id="footnote" className="flex flex-col items-start w-full max-w-5xl mx-auto px-8 md:px-16 mb-16">

            <div className=" text-gray-600 font-mono text-xs">
                Built with Next.js & Tailwind.
                <br />
                ASCII art generated using{" "}
                <a
                    href="https://www.asciiart.eu/ascii-night-sky-generator"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-gray-800"
                >
                    <span className="underline hover:text-gray-800">asciiart.eu</span>
                </a>
                <br />
                &copy; {new Date().getFullYear()} Josh Brodsky.
            </div>
        </div>
    );
}

