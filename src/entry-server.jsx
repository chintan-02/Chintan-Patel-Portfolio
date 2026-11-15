/* eslint-disable react-refresh/only-export-components -- Build-only server entry; never loaded by the browser. */
import React from 'react';
import { renderToString } from 'react-dom/server';
import { MDXProvider } from '@mdx-js/react';
import App from './App.jsx';
import { mdxComponents } from './components/mdx/MDXComponents.jsx';

// Eager imports are isolated to this build-only entry. Browser routes stay lazy.
import { Home } from './pages/Home.jsx';
import { Projects } from './pages/Projects.jsx';
import { CaseStudy } from './pages/CaseStudy.jsx';
import { Engineering } from './pages/Engineering.jsx';
import { Writing } from './pages/Writing.jsx';
import { Article } from './pages/Article.jsx';
import { About } from './pages/About.jsx';
import { Contact } from './pages/Contact.jsx';
import { Privacy } from './pages/Privacy.jsx';
import { NotFound } from './pages/NotFound.jsx';
const studies = import.meta.glob('./content/case-studies/*.mdx', { eager: true });
const articles = import.meta.glob('./content/writing/*.mdx', { eager: true });
const studyModules = {
  'regimpact-ai': studies['./content/case-studies/regimpact.mdx'].default,
  triageai: studies['./content/case-studies/triageai.mdx'].default,
  resumeiq: studies['./content/case-studies/resumeiq.mdx'].default,
  'policygpt-enterprise': studies['./content/case-studies/policygpt.mdx'].default
};
const articleModules = Object.fromEntries(Object.entries(articles).map(([path, module]) => [path.split('/').pop().replace(/\.mdx$/, ''), module.default]));
function StaticCaseStudy() { return <CaseStudy studyModules={studyModules} />; }
function StaticArticle() { return <Article articleModules={articleModules} />; }
const pages = { Home, Projects, CaseStudy: StaticCaseStudy, Engineering, Writing, Article: StaticArticle, About, Contact, Privacy, NotFound };

export function render(location) {
  return renderToString(
    <React.StrictMode><MDXProvider components={mdxComponents}><App location={location} pages={pages} /></MDXProvider></React.StrictMode>
  );
}
