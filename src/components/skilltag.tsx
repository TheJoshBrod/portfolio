import { useEffect, useState } from "react";

export default function SkillTag({ name }: { name: string }) {
  
  const [textColor, setTextColor] = useState("")
  const [backgroundColor, setBackgroundColor] = useState("")
  


  const skillBackgroundColorMap: Record<string, string> = {
    AWS: "#FF9900",
    React: "#3178c6",
    RAG: "#8963BA",
    PostgreSQL: "#336691",
    Python: "#ccb245",
    Docker: "#0092e7",
    NextJS: "#111111",
    TypeScript: "#3077c5",
    Jenkins: "#d33833",
    QT: "#41cd52",
    "C#": "#7a3399",
    C: "#649ad2",
    Pandas: "#0b0047",
    Plotly: "#7cd1c0",
    OpenAI: "#74AA9C",
    Langchain: "#1c3c3c"
  };

  const skillTextColorMap: Record<string, string> = {
    // AWS: "#FF9900",
    // React: "#3178c6",
    // RAG: "#3178c6",
  };

  useEffect(() => {
    setBackgroundColor(skillBackgroundColorMap[name] || "#999999");
    setTextColor(skillTextColorMap[name] || "#FFFFFF")
  }, [name]);



  return (
      <div id="skill" className="m-1 p-2 text-white rounded font-semibold text-xs" style={{ backgroundColor: backgroundColor, color: textColor }}>
        <p className="drop-shadow-lg">
          {name}
        </p>
      </div>
  );
}


