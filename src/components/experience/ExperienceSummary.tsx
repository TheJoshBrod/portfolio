import SkillTag from "../skilltag";
import React from 'react';
import { motion } from "framer-motion";

interface ExperienceSummaryProps {
  id: number;
  organization: string;
  role: string;
  timespan: string;
  skills?: string[];
  highlights?: string[];
  selectedExperience: number;
}

export default function ExperienceSummary({
  id,
  organization,
  role,
  timespan,
  skills,
  highlights,
  selectedExperience,
}: ExperienceSummaryProps) {
  const isSelected = selectedExperience === id;

  if (!isSelected) return null;

  return (
    <motion.div
      key={id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full font-mono"
    >
      <div className="flex flex-col items-start text-left">
        <h2 className="text-xl md:text-2xl text-white font-bold mb-1">{role}</h2>
        <div className="text-sm text-gray-500 mb-6">
          {organization} <span className="mx-2">/</span> {timespan}
        </div>

        {skills && skills.length > 0 && (
          <div className="flex flex-wrap mb-6">
            {skills.map((skill, index) => (
              <SkillTag key={index} name={skill} />
            ))}
          </div>
        )}

        {highlights && highlights.length > 0 && (
          <ul className="space-y-3 text-sm text-gray-400 pl-4 border-l border-gray-800 ml-1">
            {highlights.map((highlight, index) => (
              <li key={index} className="leading-relaxed">
                {highlight}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
}
