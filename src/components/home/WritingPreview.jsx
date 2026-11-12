import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { writingItems } from '../../data/writing.js';
const slugs=['regimpact-azure-deployment','policygpt-cost-10000-queries','lightgbm-vs-xgboost'];
export function WritingPreview(){return <section className="folio-section notes-section"><div className="folio-wrap"><div className="folio-section-head"><div><p className="folio-kicker">05 / FIELD NOTES</p><h2>What the build<br /><em>taught me.</em></h2></div><Link className="text-link" to="/writing">All writing <ArrowUpRight size={17}/></Link></div><div className="notes-list">{slugs.map((slug,i)=>{const a=writingItems.find(x=>x.slug===slug);return <Link key={slug} to={a.route}><span className="note-number">0{i+1}</span><div><span className="story-meta">{a.tags.slice(0,2).join(' / ')}</span><h3>{a.title}</h3><p>{a.description}</p></div><ArrowUpRight size={24}/></Link>})}</div></div></section>}
