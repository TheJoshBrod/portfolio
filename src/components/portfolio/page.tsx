import SectionHeader from '../general/SectionHeader'
import Carousel from '@/components/portfolio/Portfolio';

export default function ExperienceSection() {
  return (
    <div id="portfolio" className="flex flex-col items-center">
      <SectionHeader key="experience" title="Portfolio" subtitle="Some projects in my" />
      <Carousel></Carousel>
    </div>
  );
}
