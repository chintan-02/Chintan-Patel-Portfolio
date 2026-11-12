import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ArrowDown, Database, FileText, Braces, Check } from 'lucide-react';
import { siteMeta } from '../../data/siteMeta.js';
function PossibilityVisual(){
 const art=useRef(null);const [played,setPlayed]=useState(false);const [connections,setConnections]=useState(null);
 useEffect(()=>{
  const root=art.current;
  const update=()=>{
   const bounds=root.getBoundingClientRect();
   const relative=selector=>{const box=root.querySelector(selector).getBoundingClientRect();return {x:box.left-bounds.left,y:box.top-bounds.top,width:box.width,height:box.height};};
   const engine=relative('.engine-orbit'),product=relative('.art-product');
   const mobile=window.matchMedia('(max-width: 900px)').matches;
   const inputs=['.input-data','.input-doc','.input-code'].map((selector,index)=>{
    const card=relative(selector);
    if(mobile){const x=card.x+card.width/2,y=card.y+card.height+9,targetX=engine.x+engine.width*(.25+index*.25),targetY=engine.y-8;return `M${x} ${y} C${x} ${y+25} ${targetX} ${targetY-25} ${targetX} ${targetY}`;}
    const x=card.x+card.width+10,y=card.y+card.height*(index===0?.2:.5),targetX=engine.x-14,targetY=engine.y+engine.height*(.3+index*.2);
    return `M${x} ${y} C${x+32} ${y} ${targetX-45} ${targetY} ${targetX} ${targetY}`;
   });
   const output=mobile?`M${engine.x+engine.width/2} ${engine.y+engine.height+9} L${product.x+product.width/2} ${product.y-10}`:`M${engine.x+engine.width+14} ${engine.y+engine.height/2} L${product.x-10} ${engine.y+engine.height/2}`;
   setConnections({width:bounds.width,height:bounds.height,inputs,output});
  };
  const resize=new ResizeObserver(update);resize.observe(root);root.querySelectorAll('.input-sheet,.engine-orbit,.art-product').forEach(el=>resize.observe(el));update();
  const observer=new IntersectionObserver(([entry])=>{if(entry.isIntersecting){setPlayed(true);observer.disconnect();}},{threshold:.35});observer.observe(root);
  return()=>{resize.disconnect();observer.disconnect();};
 },[]);
 return <div ref={art} className={`possibility-art ${played ? "art-entered" : ""}`} role="img" aria-label="Original conceptual illustration: documents, data and code connect through engineering to an application with sources and human review. Not a live product screen."><div className="art-inputs"><div className="input-sheet input-data"><Database size={21}/><span>Data</span><i/><i/><i/></div><div className="input-sheet input-doc"><FileText size={21}/><span>Documents</span><i/><i/><i/></div><div className="input-sheet input-code"><Braces size={21}/><span>Code</span><i/><i/><i/></div></div>{connections&&<svg className="art-connections" viewBox={`0 0 ${connections.width} ${connections.height}`} aria-hidden="true">{connections.inputs.map((path,index)=><path key={index} d={path}/>)}<path className="copper-route" d={connections.output}/>{connections.inputs.map((path,index)=><circle key={index} className="flow-dot input-dot" r="3.4" style={{offsetPath:`path('${path}')`,animationDelay:`${.3+index*.2}s`}}/>)}<circle className="flow-dot output-dot" r="3.8" style={{offsetPath:`path('${connections.output}')`,animationDelay:'2.8s'}}/></svg>}<div className="art-engine"><div className="engine-orbit"/><div className="engine-core"><span>Model</span><span className="engine-plus">+</span><strong>Engineering</strong></div><span className="engine-caption">EVALUATE · CONNECT · VERIFY</span></div><div className="art-product"><div className="art-product-chrome"><span>● ● ●</span><span>A USEFUL APPLICATION</span></div><div className="art-product-body"><div className="mini-product-nav"><span/><span/><span/></div><div className="mini-product-content"><p>From question to clarity.</p><div className="mini-answer"><Check size={17}/><span>Evidence linked. Ready for review.</span></div><div className="mini-content-line"/><div className="mini-content-line short"/><div className="mini-source"><FileText size={14}/><span>Source context</span><ArrowUpRight size={13}/></div><div className="mini-review"><span className="review-avatar">CP</span><span>Human judgment stays in the loop.</span></div></div></div></div><span className="art-note">Concept illustration · inputs to application</span></div>;
}
export function Hero(){return <section className="possibility-hero" aria-labelledby="possibility-title"><div className="folio-wrap"><div className="possibility-statement"><h1 id="possibility-title">From <em>possibility</em><br/>to practical AI.</h1><p>Clinical triage, regulatory analysis, policy search, and product-finding agents. Built with Python, FastAPI, React, and cloud delivery on Azure and GCP.</p><div className="possibility-actions"><a className="folio-primary" href="#selected-work">Explore my work <ArrowDown size={17}/></a><a className="hero-resume-link" href={siteMeta.resume} target="_blank" rel="noopener noreferrer">Resume <ArrowUpRight size={17}/></a></div></div><PossibilityVisual/><div className="hero-scroll-cue" aria-hidden="true">Scroll <ArrowDown size={15}/></div></div></section>;}
