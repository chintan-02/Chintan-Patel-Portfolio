import { Hero } from '../components/home/Hero.jsx';
import { About } from '../components/home/About.jsx';
import { FeaturedProjects } from '../components/home/FeaturedProjects.jsx';
import { SkillsSystem } from '../components/home/SkillsSystem.jsx';
import { Experience } from '../components/home/Experience.jsx';
import { Education } from '../components/home/Education.jsx';
import { CaseStudyPreview } from '../components/home/CaseStudyPreview.jsx';
import { WritingPreview } from '../components/home/WritingPreview.jsx';
import { Now } from '../components/home/Now.jsx';
import { ContactCTA } from '../components/home/ContactCTA.jsx';

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <FeaturedProjects />
      <SkillsSystem />
      <CaseStudyPreview />
      <WritingPreview />
      <Experience />
      <Education />
      <Now />
      <ContactCTA />
    </>
  );
}
