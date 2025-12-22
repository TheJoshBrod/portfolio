import { useEffect, useState } from "react";

const skillBackgroundColorMap: Record<string, string> = {
  AWS: "#FF990090",
  React: "#3178c690",
  RAG: "#8963BA90",
  PostgreSQL: "#33669190",
  Python: "#ccb24590",
  Docker: "#0092e790",
  NextJS: "#11111190",
  TypeScript: "#3077c590",
  Jenkins: "#d3383390",
  QT: "#41cd5290",
  "C#": "#7a339990",
  C: "#649ad290",
  Pandas: "#0b004790",
  Plotly: "#7cd1c090",
  OpenAI: "#74AA9C90",
  Langchain: "#1c3c3c90",
  "C++": "#00599C90",
  Java: "#B0721990",
  JavaScript: "#F7DF1E90",
  Bash: "#89E05190",
  SQL: "#e38c0090",
  jQuery: "#0769AD90",
  Vue: "#42B88390",
  Bootstrap: "#7952B390",
  Flask: "#00000090",
  Git: "#00000090",
  Regex: "#6e44ff90"
};

export default function SkillTag({ name }: { name: string }) {
  const [backgroundColor, setBackgroundColor] = useState("")

  useEffect(() => {
    setBackgroundColor(skillBackgroundColorMap[name] || "#99999990");
  }, [name]);

  return (
    <div
      className="mr-2 mb-2 px-3 py-1 flex justify-center items-center rounded-full text-xs font-semibold text-white shadow-sm backdrop-blur-sm transition-transform hover:scale-105 cursor-default border border-white/10"
      style={{ backgroundColor }}
    >
      <p className="drop-shadow-sm tracking-wide">
        {name}
      </p>
    </div>
  );
}

export function SkillIcon({ name }: { name: string }) {
  const [backgroundColor, setBackgroundColor] = useState("")

  useEffect(() => {
    setBackgroundColor(skillBackgroundColorMap[name] || "#99999990");
  }, [name]);

  return (
    <div
      className="mr-2 mb-2 px-3 py-1 flex justify-center items-center rounded-full text-xs font-semibold text-white shadow-sm backdrop-blur-sm transition-transform hover:scale-105 cursor-default border border-white/10"
      style={{ backgroundColor }}
    >
      {/* Assuming naii.png is a general icon, if it's specific to the skill we might need logic, but keeping as is for now */}
      <img src="/naii.png" className="w-4 h-4 mr-2 opacity-90" alt="" />
      <p className="drop-shadow-sm tracking-wide">
        {name}
      </p>
    </div>
  )
}