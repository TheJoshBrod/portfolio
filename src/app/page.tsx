'use client'
import Header from "@/components/homepage/page";
import ExperienceSection from "@/components/experience/page";
import AboutMeSection from "@/components/aboutme/page";

export default function Home() {

  return (
    <>
      <Header/>
      <AboutMeSection/>
      <ExperienceSection/>
      <div className="h-500"></div>
    </>
  );
}