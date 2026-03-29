'use client';

import Link from 'next/link';
import StarsBackground from '@/components/StarsBackground';
import { useEffect, useState } from 'react';

const LOBSTER = `
                          ,.---.
               ,,,,     /    _ \`.
                \\\\\\\\   /      \\  )
                 |||| /\\/\`\`-.__\\/
                 ::::/\\/_
 {{\`-.__.-'(\`(^^(^^^(^ 9 \`.=========\'
{{{{{{ { ( ( (  (   (-----:=
 {{.-'~~'-.(,(,,(,,,(__6_.'=========.
                 ::::\/\\
                 |||| \\/\\  ,-'/\\
                ////   \\ \`\` _/  )
               ''''     \\  \`   /
                         \`---''
`;

const STEPS = [
  { type: 'cmd',  text: 'cd /the-page-you-wanted' },
  { type: 'err',  text: 'bash: cd: /the-page-you-wanted: no such file or directory' },
  { type: 'cmd',  text: 'find / -name "page"' },
  { type: 'err',  text: 'no results found.' },
  { type: 'cmd',  text: 'sudo find / -name "page"' },
  { type: 'err',  text: 'nice try.' },
  { type: 'art',  text: LOBSTER },
  { type: 'info', text: "looks like you're lost. let me help." },
  { type: 'link', text: '[go home]' },
  { type: 'credit' },
];

const DELAY_MS = 600;

export default function NotFound() {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    if (visible >= STEPS.length) return;
    const t = setTimeout(() => setVisible((v) => v + 1), DELAY_MS);
    return () => clearTimeout(t);
  }, [visible]);

  return (
    <div className="min-h-screen bg-[#111] text-gray-300 font-mono relative overflow-hidden flex items-center justify-center">
      <StarsBackground />
      <div className="relative z-10 flex flex-col gap-1 max-w-xl w-full px-8">
        {STEPS.slice(0, visible).map((step, i) => {
          if (step.type === 'cmd') {
            return (
              <div key={i} className="flex gap-2 text-sm">
                <span className="text-gray-600 shrink-0">josh@portfolio:~$</span>
                <span className="text-white">{step.text}</span>
              </div>
            );
          }
          if (step.type === 'err') {
            return (
              <p key={i} className="text-red-400/70 text-xs pl-4">{step.text}</p>
            );
          }
          if (step.type === 'art') {
            return (
              <pre key={i} className="text-gray-400 text-xs leading-snug my-4 self-center">
                {step.text}
              </pre>
            );
          }
          if (step.type === 'info') {
            return (
              <p key={i} className="text-gray-500 text-xs mt-2">{step.text}</p>
            );
          }
          if (step.type === 'link') {
            return (
              <Link
                key={i}
                href="/"
                className="text-xs text-gray-500 hover:text-white border-b border-gray-800 hover:border-white pb-0.5 transition-all self-start mt-1"
              >
                {step.text}
              </Link>
            );
          }
          if (step.type === 'credit') {
            return (
              <p key={i} className="text-gray-700 text-xs mt-4">
                lobster ascii art by{' '}
                <a
                  href="https://www.asciiart.eu/art/6078a1f1b2def6b1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-500"
                >
                  joan g. stark (spunk)
                </a>
              </p>
            );
          }
          return null;
        })}
        {visible < STEPS.length && (
          <span className="text-white text-sm animate-pulse">▋</span>
        )}
      </div>
    </div>
  );
}
