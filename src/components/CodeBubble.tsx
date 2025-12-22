// components/CodeBubble.tsx
import React from "react";

const CodeBubble = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative bg-gray-900/90 backdrop-blur-xl border border-white/10 text-gray-100 rounded-xl shadow-2xl overflow-hidden">
      {/* Header with fake buttons */}
      <div className="flex items-center space-x-2 px-4 py-3 bg-white/5 border-b border-white/10">
        <span className="w-3 h-3 bg-red-500 rounded-full shadow-inner hover:bg-red-400 transition-colors"></span>
        <span className="w-3 h-3 bg-yellow-500 rounded-full shadow-inner hover:bg-yellow-400 transition-colors"></span>
        <span className="w-3 h-3 bg-green-500 rounded-full shadow-inner hover:bg-green-400 transition-colors"></span>
      </div>
      {/* Code content */}
      <pre className="px-5 py-4 overflow-x-auto text-sm font-mono leading-relaxed opacity-90">
        <code>{children}</code>
      </pre>
    </div>
  );
};

export default CodeBubble;
