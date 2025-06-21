// components/CodeBubble.tsx
import React from "react";

const CodeBubble = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-gray-900 text-white rounded-xl shadow-md overflow-hidden">
      {/* Header with fake buttons */}
      <div className="flex items-center space-x-2 px-4 py-2 bg-gray-800">
        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
      </div>
      {/* Code content */}
      <pre className="px-4 py-3 overflow-x-auto text-sm font-mono">
        <code>{children}</code>
      </pre>
    </div>
  );
};

export default CodeBubble;
