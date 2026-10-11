import Link from "next/link";
import Image from "next/image";
import { ModalTrigger, PortfolioModals } from "@/components/portfolio-modals";
import { portfolio, projects } from "@/lib/portfolio";

export const metadata = { title: "Projects", description: "Selected projects, previews, features, and implementation details." };

export default function ProjectsPage() {
  return <PortfolioModals><a className="skip-link" href="#main">Skip to content</a><main id="main" className="projects-page"><header className="projects-page-header"><Link className="back-home" href="/">← {portfolio.name}</Link><h1>Projects</h1></header><div className="project-collection">{projects.map(project => <ModalTrigger key={project.slug} className={`collection-row ${project.images.length ? "" : "collection-row-text"}`} selection={{ type: "projects", slug: project.slug }} label={`Open ${project.name} project`}><span className="collection-copy"><span className="collection-category">{project.category}{project.year && ` / ${project.year}`}</span><span className="collection-title">{project.name}</span><span className="collection-description">{project.description}</span>{project.tools.length > 0 && <span className="collection-tools">{project.tools.join(" / ")}</span>}</span>{project.images.length > 0 && <span className="collection-images">{project.images.slice(0, 3).map((image, index) => <span className="collection-image" key={image.src}><Image src={image.src} alt={image.alt} fill sizes="(max-width: 700px) 30vw, 240px" />{index === 2 && project.images.length > 3 && <span className="more-images" aria-hidden="true">+{project.images.length - 3}</span>}</span>)}</span>}<span className="collection-open" aria-hidden="true">&#8599;</span></ModalTrigger>)}</div></main></PortfolioModals>;
}
