import SkillTag from "../skilltag";
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";

interface ExperienceSummaryProps {
  id: number;
  organization: string;
  role: string;
  logo: string;
  timespan: string;
  about: string;
  skills?: string[];
  highlights?: string[];
  selectedExperience: number;
}

export default function ExperienceSummary({
  id,
  organization,
  role,
  logo,
  timespan,
  about,
  skills,
  highlights,
  selectedExperience,
}: ExperienceSummaryProps) {
  const isSelected = selectedExperience === id;

  if (!isSelected) return null;

  return (
    <motion.div
      key={id}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="w-full"
    >
      <div className="relative overflow-hidden bg-gray-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl text-gray-100">

        {/* Background Gradient */}


        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-white/10">
            <div className="flex-1">
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-2">{role}</h2>
              <p className="text-xl text-blue-200/90 font-medium">
                {organization} <span className="text-gray-500 mx-2">|</span> {timespan}
              </p>
            </div>
            {logo && (
              <div className="bg-white p-2 rounded-xl shadow-lg shrink-0">
                <img src={logo} className="h-12 w-auto object-contain" alt={`${organization} logo`} />
              </div>
            )}
          </div>

          {skills && skills.length > 0 && (
            <div className="py-6 flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <SkillTag key={index} name={skill} />
              ))}
            </div>
          )}

          {highlights && highlights.length > 0 && (
            <div className="space-y-4 pt-2">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0 group-hover:bg-blue-300 transition-colors" />
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">{highlight}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
