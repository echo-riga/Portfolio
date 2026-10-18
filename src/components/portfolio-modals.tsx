"use client";

import Image from "next/image";
import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { projects } from "@/lib/portfolio";
import { TechStack } from "./tech-stack";
import { CredentialList } from "./credential-list";
import { ProjectGallery } from "./project-gallery";
import { AboutMe } from "./about-me";
import { SkillsMD } from "./skills-md";

type Selection = { type: "projects"; slug: string } | { type: "project-list" | "stack" | "credentials" | "about" };
const ModalContext = createContext<((selection: Selection, opener: HTMLButtonElement) => void) | null>(null);

export function ModalTrigger({ selection, children, className, label }: { selection: Selection; children: ReactNode; className?: string; label?: string }) {
  const open = useContext(ModalContext);
  if (!open) throw new Error("ModalTrigger requires PortfolioModals");
  return <button type="button" className={className} aria-label={label} aria-haspopup="dialog" onClick={event => open(selection, event.currentTarget)}>{children}</button>;
}

function ProjectActions({ project }: { project: (typeof projects)[number] }) {
  if (!project.sourceUrl && !project.liveUrl) return null;
  return <div className="project-actions">{project.sourceUrl && <a className="project-action" href={project.sourceUrl} target="_blank" rel="noopener noreferrer" title={project.sourceIsExample ? "Next.js framework repository — example link" : undefined}>{project.sourceIsExample ? "Example source code" : "View source code"}</a>}{project.liveUrl && <a className="project-action" href={project.liveUrl} target="_blank" rel="noopener noreferrer">Visit website</a>}</div>;
}

function ProjectDetail({ project }: { project: (typeof projects)[number] }) {
  return <div className="project-detail-layout"><div className={`project-detail-grid ${project.images.length ? "" : "project-detail-text"}`}>{project.images.length > 0 && <ProjectGallery name={project.name} theme={project.theme} images={project.images} />}<article className="project-detail-copy"><p className="modal-project-meta">{project.category}{project.year && ` / ${project.year}`}</p><section><h3>What it is</h3><p>{project.description}</p>{project.brief && <p>{project.brief}</p>}</section>{project.slug === "skills-mds" ? <SkillsMD /> : <>{project.features.length > 0 && <section><h3>Features</h3><ul className="feature-list">{project.features.map(feature => <li key={feature}>{feature}</li>)}</ul></section>}{(project.approach || project.tools.length > 0) && <section><h3>Implementation</h3>{project.approach && <p>{project.approach}</p>}<div className="skills">{project.tools.map(tool => <span key={tool}>{tool}</span>)}</div></section>}</>}<ProjectActions project={project} /></article></div></div>;
}

function ProjectCollection({ onOpen }: { onOpen: (slug: string, opener: HTMLButtonElement) => void }) {
  return <div className="modal-project-list">{projects.map(project => <button key={project.slug} type="button" className={`home-project-row ${project.images.length ? "" : "home-project-row-text"}`} aria-label={`View ${project.name} project details`} aria-haspopup="dialog" onClick={event => onOpen(project.slug, event.currentTarget)}>{project.images.length > 0 && <span className="home-project-preview"><Image src={project.images[0].src} alt={project.images[0].alt} fill sizes="(max-width: 480px) calc(100vw - 76px), (max-width: 700px) 120px, 170px" />{project.images.length > 1 && <span className="home-image-count" aria-hidden="true">+{project.images.length - 1}</span>}</span>}<span className="home-project-copy"><span className="home-project-title">{project.name}</span><span className="home-project-description">{project.summary}</span><span className="home-project-tools">{project.tools.slice(0, 3).join(" · ")}</span></span><span className="home-project-arrow" aria-hidden="true">&#8599;</span></button>)}</div>;
}

export function PortfolioModals({ children }: { children: ReactNode }) {
  const [selection, setSelection] = useState<Selection | null>(null);
  const [detailSlug, setDetailSlug] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const detailDialogRef = useRef<HTMLDialogElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const detailHeadingRef = useRef<HTMLHeadingElement>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);
  const detailOpenerRef = useRef<HTMLButtonElement | null>(null);
  const isOpen = selection !== null;
  const project = selection?.type === "projects" ? projects.find(item => item.slug === selection.slug) : undefined;
  const detailProject = projects.find(item => item.slug === detailSlug);
  const compact = selection?.type === "about" || (selection?.type === "projects" && project?.images.length === 0);
  const collection = selection?.type === "project-list" || selection?.type === "stack" || selection?.type === "credentials";
  const title = project ? project.name : selection?.type === "stack" ? "Technologies" : selection?.type === "credentials" ? "Certificates & Achievements" : selection?.type === "about" ? "About me" : "Projects";

  useEffect(() => {
    if (!isOpen) return;
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    if (dialog && !dialog.open) dialog.showModal();
    return () => {
      document.body.style.overflow = previousOverflow;
      if (dialog?.open) dialog.close();
    };
  }, [isOpen]);

  useEffect(() => { if (selection) headingRef.current?.focus(); }, [selection]);

  useEffect(() => {
    if (!detailProject) return;
    const dialog = detailDialogRef.current;
    if (dialog && !dialog.open) dialog.showModal();
    detailHeadingRef.current?.focus();
    return () => { if (dialog?.open) dialog.close(); };
  }, [detailProject]);

  return <ModalContext.Provider value={(next, opener) => { openerRef.current = opener; setDetailSlug(null); setSelection(next); }}>
    {children}
    <dialog ref={dialogRef} className={`portfolio-modal ${compact ? "compact-modal" : ""} ${collection ? "collection-modal" : ""} ${selection?.type === "project-list" ? "project-list-modal" : ""}`} aria-labelledby="modal-title" onClose={event => { if (event.target !== event.currentTarget) return; setDetailSlug(null); setSelection(null); openerRef.current?.focus(); }} onClick={event => {
      if (event.target !== event.currentTarget) return;
      const bounds = event.currentTarget.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) event.currentTarget.close();
    }}>
      {selection && <><div className="modal-header"><h2 ref={headingRef} id="modal-title" tabIndex={-1}>{title}</h2><button type="button" className="modal-close" aria-label="Close dialog" title="Close" onClick={() => dialogRef.current?.close()}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg></button></div><div className="modal-content">
        {selection.type === "project-list" && <ProjectCollection onOpen={(slug, opener) => { detailOpenerRef.current = opener; setDetailSlug(slug); }} />}
        {selection.type === "projects" && project && <ProjectDetail project={project} />}
        {selection.type === "stack" && <TechStack />}
        {selection.type === "credentials" && <CredentialList />}
        {selection.type === "about" && <AboutMe onViewSkills={() => setSelection({ type: "projects", slug: "skills-mds" })} />}
      </div></>}
    </dialog>
    <dialog ref={detailDialogRef} className={`portfolio-modal ${detailProject?.images.length === 0 ? "compact-modal" : ""}`} aria-labelledby="project-detail-title" onClose={event => { if (event.target !== event.currentTarget) return; setDetailSlug(null); detailOpenerRef.current?.focus(); }} onClick={event => {
      if (event.target !== event.currentTarget) return;
      const bounds = event.currentTarget.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) event.currentTarget.close();
    }}>
      {detailProject && <><div className="modal-header"><h2 ref={detailHeadingRef} id="project-detail-title" tabIndex={-1}>{detailProject.name}</h2><button type="button" className="modal-close" aria-label="Close project details" title="Close" onClick={() => detailDialogRef.current?.close()}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg></button></div><div className="modal-content"><ProjectDetail project={detailProject} /></div></>}
    </dialog>
  </ModalContext.Provider>;
}
