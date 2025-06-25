import { useEffect, useState } from "react";

export default function SkillTag({ name }: { name: string }) {
  
  const [textColor, setTextColor] = useState("")
  const [backgroundColor, setBackgroundColor] = useState("")
  


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
    Langchain: "#1c3c3c90"
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
      <div id="skill" className="mr-2 p-2 text-[#c3c3ff] flex justify-center rounded-full  font-semibold text-xs" style={{ backgroundColor: backgroundColor, color: textColor }}>
        <p className="drop-shadow-lg">
          {name}
        </p>
      </div>
  );
}


