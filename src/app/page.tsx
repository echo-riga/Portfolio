import Image from "next/image";
import { ProjectPlaceholder } from "@/components/project-placeholder";
import { ModalTrigger, PortfolioModals } from "@/components/portfolio-modals";
import { portfolio, projects, experiences, education } from "@/lib/portfolio";
import { getContributions } from "@/lib/github";
import { GitHubGraph } from "@/components/github-graph";
import { TechStack } from "@/components/tech-stack";
import { CredentialList } from "@/components/credential-list";
import { SocialIcon } from "@/components/social-icon";
import { ThemeToggle } from "@/components/theme-toggle";

export const revalidate = 3600;

export default async function Home({ searchParams }: { searchParams: Promise<{ project?: string | string[]; view?: string | string[] }> }) {
  const { project, view } = await searchParams;
  const initialProjectSlug = typeof project === "string" && projects.some(item => item.slug === project) ? project : undefined;
  const activity = await getContributions();
  return <PortfolioModals initialProjectSlug={initialProjectSlug} initialProjectList={view === "projects"}><a className="skip-link" href="#main">Skip to content</a><main id="main" className="dashboard">
    <div className="overview-grid">
      <section className="profile" aria-labelledby="profile-title">
        <div className="profile-header"><div className="identity"><div className="profile-name"><h1 id="profile-title">{portfolio.name}</h1><div className="profile-meta"><p className="role">{portfolio.role}</p><p className="location">{portfolio.location}</p></div></div></div><div className="profile-actions"><div className="profile-links" aria-label="Contact and social links"><a href={`https://github.com/${portfolio.githubUsername}`} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" data-tooltip="GitHub"><SocialIcon name="github" /></a>{portfolio.linkedinUrl ? <a href={portfolio.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" data-tooltip="LinkedIn"><SocialIcon name="linkedin" /></a> : <span className="inactive-social" role="img" aria-label="LinkedIn — not configured" data-tooltip="LinkedIn — not configured"><SocialIcon name="linkedin" /></span>}<a href={`mailto:${portfolio.email}`} aria-label={`Email ${portfolio.name}`} data-tooltip="Email"><SocialIcon name="email" /></a><a href={portfolio.resumeUrl} target="_blank" rel="noopener noreferrer" aria-label="View resume (PDF, opens in a new tab)" data-tooltip="Resume"><SocialIcon name="resume" /></a></div><ThemeToggle /></div></div>
      </section>
      <section className="experience panel" aria-labelledby="experience-title"><div className="panel-heading"><h2 id="experience-title">Experience</h2></div><ol className="timeline">{experiences.map(experience => <li key={experience.role}><span className={`timeline-dot ${experience.period.includes("Present") ? "current" : ""}`} /><div className="timeline-top"><h3>{experience.role}</h3><span>{experience.period}</span></div>{experience.company && <p className="company">{experience.company}</p>}</li>)}</ol><div className="education"><h3>Education</h3><div className="timeline-top"><span className="education-role">{education.role}</span><span>{education.period}</span></div><p className="company">{education.school}</p></div></section>
      <section className="activity panel" aria-labelledby="activity-title"><div className="panel-heading"><h2 id="activity-title">GitHub activity</h2><a className="quiet-link" href={`https://github.com/${portfolio.githubUsername}`} target="_blank" rel="noopener noreferrer">@{portfolio.githubUsername}</a></div><GitHubGraph activity={activity} /></section>
    </div>
    <div className="work-grid">
      <section className="projects panel" aria-labelledby="projects-title"><div className="panel-heading"><h2 id="projects-title">Projects <span className="heading-count">{String(projects.length).padStart(2, "0")}</span></h2><ModalTrigger className="quiet-link" selection={{ type: "project-list" }} label="View all projects">View all</ModalTrigger></div><div className="home-project-list">{projects.slice(0, 2).map(project => <ModalTrigger key={project.slug} className="home-project-row" selection={{ type: "projects", slug: project.slug }} label={`View ${project.name} project`}>{project.images.length > 0 ? <span className="home-project-preview">{project.images[0] && <Image src={project.images[0].src} alt={project.images[0].alt} fill sizes="(max-width: 480px) calc(100vw - 112px), (max-width: 700px) 104px, (max-width: 1099px) 96px, 180px" />}{project.images.length > 1 && <span className="home-image-count" aria-hidden="true">+{project.images.length - 1}</span>}</span> : <span className="home-project-preview"><ProjectPlaceholder /></span>}<span className="home-project-copy"><span className="home-project-title">{project.name}</span><span className="home-project-description">{project.summary}</span><span className="home-project-tools">{project.tools.slice(0, 3).join(" · ")}</span></span></ModalTrigger>)}</div></section>
      <section className="tech panel" aria-labelledby="tech-title"><div className="panel-heading"><h2 id="tech-title">Technologies</h2><ModalTrigger className="quiet-link" selection={{ type: "stack" }} label="View all technologies">View all</ModalTrigger></div><TechStack compact /></section>
    </div>
    <section className="credentials panel" aria-labelledby="credentials-title"><div className="credentials-heading"><h2 id="credentials-title">Certificates & Achievements</h2><ModalTrigger className="quiet-link" selection={{ type: "credentials" }} label="View all certificates and achievements">View all</ModalTrigger></div><CredentialList compact /></section>
    <footer className="dashboard-footer"><span>© {new Date().getFullYear()} {portfolio.name}</span></footer>
  </main></PortfolioModals>;
}
