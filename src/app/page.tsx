import Header from "@/components/homepage/page";
import ExperienceSection from "@/components/experience/page";
import AboutMeSection from "@/components/aboutme/page";
import Portfolio from "@/components/portfolio/Portfolio";
import Contact from "@/components/contact/page";
import Footnote from "@/components/footnote/page";
import { getAllProjects } from "@/lib/projects";

export default function Home() {
  const projects = getAllProjects();

  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex flex-col gap-32 pt-32 pb-32 bg-[#111]/60 relative z-10">
        <AboutMeSection />
        <ExperienceSection />
        <Portfolio projects={projects} />
        <Contact />
        <Footnote />
      </div>
    </div>
  );
}