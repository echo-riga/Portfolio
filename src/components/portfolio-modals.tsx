"use client";

import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { projects } from "@/lib/portfolio";
import { TechStack } from "./tech-stack";
import { CredentialList } from "./credential-list";
import { ProjectGallery } from "./project-gallery";
import { AboutMe } from "./about-me";
import { SkillsMD } from "./skills-md";

type Selection = { type: "projects"; slug: string } | { type: "stack" | "credentials" | "about" };
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

export function PortfolioModals({ children }: { children: ReactNode }) {
  const [selection, setSelection] = useState<Selection | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);
  const isOpen = selection !== null;
  const project = selection?.type === "projects" ? projects.find(item => item.slug === selection.slug) : undefined;
  const compact = selection?.type === "about" || (selection?.type === "projects" && project?.images.length === 0);
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

  return <ModalContext.Provider value={(next, opener) => { openerRef.current = opener; setSelection(next); }}>
    {children}
    <dialog ref={dialogRef} className={`portfolio-modal ${compact ? "compact-modal" : ""}`} aria-labelledby="modal-title" onClose={event => { if (event.target !== event.currentTarget) return; setSelection(null); openerRef.current?.focus(); }} onClick={event => {
      if (event.target !== event.currentTarget) return;
      const bounds = event.currentTarget.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) event.currentTarget.close();
    }}>
      {selection && <><div className="modal-header"><h2 ref={headingRef} id="modal-title" tabIndex={-1}>{title}</h2><button type="button" className="modal-close" aria-label="Close dialog" title="Close" onClick={() => dialogRef.current?.close()}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg></button></div><div className="modal-content">
        {selection.type === "projects" && <div className="project-detail-layout">{(project ? [project] : projects.slice(0, 1)).map(item => <div className={`project-detail-grid ${item.images.length ? "" : "project-detail-text"}`} key={item.slug}>{item.images.length > 0 && <ProjectGallery name={item.name} theme={item.theme} images={item.images} />}<article className="project-detail-copy"><p className="modal-project-meta">{item.category} / {item.year}</p><section><h3>What it is</h3><p>{item.description}</p>{item.brief && <p>{item.brief}</p>}</section>{item.slug === "skills-mds" ? <SkillsMD /> : <><section><h3>Features</h3><ul className="feature-list">{item.features.map(feature => <li key={feature}>{feature}</li>)}</ul></section><section><h3>Implementation</h3><p>{item.approach}</p><div className="skills">{item.tools.map(tool => <span key={tool}>{tool}</span>)}</div></section></>}<ProjectActions project={item} /></article></div>)}</div>}
        {selection.type === "stack" && <TechStack />}
        {selection.type === "credentials" && <CredentialList />}
        {selection.type === "about" && <AboutMe onViewSkills={() => setSelection({ type: "projects", slug: "skills-mds" })} />}
      </div></>}
    </dialog>
  </ModalContext.Provider>;
}
