import { Hero } from '../components/home/Hero.jsx';
import { FeaturedProjects } from '../components/home/FeaturedProjects.jsx';
import { EngineeringProof } from '../components/home/EngineeringProof.jsx';
import { SkillsSystem } from '../components/home/SkillsSystem.jsx';
import { CareerSnapshot } from '../components/home/CareerSnapshot.jsx';
import { HowIWork } from '../components/home/HowIWork.jsx';
import { ContactCTA } from '../components/home/ContactCTA.jsx';

export function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <EngineeringProof />
      <SkillsSystem />
      <CareerSnapshot />
      <HowIWork />
      <ContactCTA />
    </>
  );
}
