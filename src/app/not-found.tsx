import Link from 'next/link';
import StarsBackground from '@/components/StarsBackground';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#111] text-gray-300 font-mono relative overflow-hidden flex items-center justify-center">
      <StarsBackground />
      <div className="relative z-10 text-center flex flex-col gap-6">
        <p className="text-6xl font-bold text-white">[404]</p>
        <p className="text-gray-500 text-sm">page not found</p>
        <Link
          href="/"
          className="text-xs text-gray-500 hover:text-white border-b border-gray-800 hover:border-white pb-0.5 transition-all self-center"
        >
          [go home]
        </Link>
      </div>
    </div>
  );
}
