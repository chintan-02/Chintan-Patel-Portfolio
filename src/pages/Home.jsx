import { Hero } from '../components/home/Hero.jsx';
import { FeaturedProjects } from '../components/home/FeaturedProjects.jsx';
import { CareerSnapshot } from '../components/home/CareerSnapshot.jsx';
import { ContactCTA } from '../components/home/ContactCTA.jsx';

export function Home() {
  return <><Hero /><FeaturedProjects /><CareerSnapshot /><ContactCTA /></>;
}
