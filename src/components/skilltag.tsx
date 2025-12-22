import React from 'react';

export default function SkillTag({ name }: { name: string }) {
  return (
    <span className="font-mono text-sm text-gray-400 mr-2">
      {name}
    </span>
  );
}

export function SkillIcon({ name }: { name: string }) {
  return (
    <span className="inline-block font-mono text-xs text-gray-500 border border-gray-800 px-2 py-0.5 rounded-sm hover:border-gray-500 hover:text-gray-300 transition-colors cursor-default">
      {name}
    </span>
  );
}