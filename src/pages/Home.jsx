import { Hero } from '../components/home/Hero.jsx';
import { RoleExplorer } from '../components/home/RoleExplorer.jsx';
import { FeaturedProjects } from '../components/home/FeaturedProjects.jsx';
import { EngineeringApproach, PortfolioStory } from '../components/home/PortfolioStory.jsx';
import { WritingPreview } from '../components/home/WritingPreview.jsx';
import { ContactCTA } from '../components/home/ContactCTA.jsx';
export function Home(){return <div className="portfolio-concept"><Hero/><FeaturedProjects/><RoleExplorer/><EngineeringApproach/><PortfolioStory/><WritingPreview/><ContactCTA/></div>}
