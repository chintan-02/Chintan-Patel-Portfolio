import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Check, ChevronRight } from 'lucide-react';
import { projects } from '../../data/projects.js';
import { portfolioRoles, roleEvidence } from '../../data/roleEvidence.js';
import '../../styles/role-explorer.css';

export function RoleExplorer() {
  const [roleId, setRoleId] = useState(portfolioRoles[0].id);
  const [evidenceId, setEvidenceId] = useState(portfolioRoles[0].evidence[0]);
  const role = portfolioRoles.find((item) => item.id === roleId);
  const evidence = roleEvidence[evidenceId];
  const project = projects.find((item) => item.slug === evidence.projectSlug);

  function selectRole(nextRole) {
    setRoleId(nextRole.id);
    setEvidenceId(nextRole.evidence[0]);
  }

  return (
    <section id="explore-by-role" className="folio-section role-explorer" aria-labelledby="role-explorer-heading">
      <div className="folio-wrap">
        <div className="folio-section-head">
          <div>
            <p className="folio-kicker">EXPLORE BY ROLE</p>
            <h2 id="role-explorer-heading">Your role.<br />The relevant <em>evidence.</em></h2>
          </div>
          <p>Start with the work you are hiring for. Follow a skill to the implementation, the engineering decision, and its limits.</p>
        </div>
        <div className="role-explorer-roles" role="group" aria-label="Choose an engineering focus">
          {portfolioRoles.map((item) => (
            <button key={item.id} type="button" aria-pressed={roleId === item.id} onClick={() => selectRole(item)}>
              {item.label}<ArrowUpRight size={15} aria-hidden="true" />
            </button>
          ))}
        </div>
        <p className="role-explorer-description">{role.description}</p>
        <div className="role-explorer-frame">
          <div className="role-explorer-menu" role="group" aria-label={`${role.label} project evidence`}>
            <p className="role-explorer-caption">FOLLOW A SKILL</p>
            {role.evidence.map((id, index) => {
              const item = roleEvidence[id];
              const source = projects.find((entry) => entry.slug === item.projectSlug);
              return (
                <button key={id} type="button" aria-pressed={id === evidenceId} aria-controls="role-evidence-detail" onClick={() => setEvidenceId(id)}>
                  <span className="role-explorer-index">0{index + 1}</span>
                  <span><strong>{item.label}</strong><small>{source.title}</small></span>
                  <ChevronRight size={16} aria-hidden="true" />
                </button>
              );
            })}
            <p className="role-explorer-menu-note"><Check size={14} aria-hidden="true" />Linked to documented project work</p>
          </div>
          <div id="role-evidence-detail" className="role-explorer-detail" aria-live="polite" aria-atomic="true">
            <div className="role-explorer-detail-head"><span>{evidence.category}</span><span>{project.title}</span></div>
            <h3>{evidence.title}</h3>
            <p className="role-explorer-summary">{evidence.summary}</p>
            <div className="role-explorer-decision"><h4>Engineering decision</h4><p>{evidence.decision}</p></div>
            <div className="project-tags">{evidence.stack.map((item) => <span key={item}>{item}</span>)}</div>
            <div className="role-explorer-proof"><h4>What you can inspect</h4><p>{evidence.proof}</p></div>
            <p className="role-explorer-boundary"><strong>Scope & limits</strong> {evidence.boundary}</p>
            <div className="role-explorer-actions">
              {project.caseStudyUrl
                ? <Link className="folio-primary" to={project.caseStudyUrl}>Read case study <ArrowRight size={16} aria-hidden="true" /></Link>
                : <a className="folio-primary" href={project.liveUrl} target="_blank" rel="noopener noreferrer">Try the demo <ArrowUpRight size={16} aria-hidden="true" /></a>}
              <a className="folio-secondary" href={project.githubUrl} target="_blank" rel="noopener noreferrer">Inspect source <ArrowUpRight size={16} aria-hidden="true" /></a>
            </div>
            {evidence.writingUrl && <Link className="role-explorer-walkthrough" to={evidence.writingUrl}>{evidence.writingLabel} <ArrowRight size={14} aria-hidden="true" /></Link>}
          </div>
        </div>
        <p className="role-explorer-footnote">A curated guide to my work. Each path links to the same case studies and source code—without automated fit scores.</p>
      </div>
    </section>
  );
}
