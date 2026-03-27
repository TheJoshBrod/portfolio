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
    <div className="flex flex-col gap-32 pb-32 bg-[#111]">
      <Header />
      <AboutMeSection />
      <ExperienceSection />
      <Portfolio projects={projects} />
      <Contact />
      <Footnote />
    </div>
  );
}