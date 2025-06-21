'use client'
import Header from "@/components/homepage/page";
import ExperienceSection from "@/components/experience/page";
import AboutMeSection from "@/components/aboutme/page";
import CodeBubble from "@/components/CodeBubble";

export default function Home() {
  return (
    <>
      <Header/>
      <AboutMeSection/>
      <ExperienceSection/>
    </>
  );
}