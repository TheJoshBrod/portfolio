'use client'
import Header from "@/components/homepage/page";
import ExperienceSection from "@/components/experience/page";
import AboutMeSection from "@/components/aboutme/page";
import Portfolio from "@/components/portfolio/page";
import Contact from "@/components/contact/page";

export default function Home() {

  return (
    <>
      <Header/>
      <AboutMeSection/>
      <ExperienceSection/>
      <Portfolio/>
      <Contact/>
      <div className="h-500"></div>
    </>
  );
}