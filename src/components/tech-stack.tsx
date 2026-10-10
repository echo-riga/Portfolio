import { techGroups } from "@/lib/portfolio";

export function TechStack({ compact = false }: { compact?: boolean }) {
  const groups = compact ? techGroups.filter(group => ["Frontend & Apps", "Backend & APIs", "Databases & Storage"].includes(group.name)) : techGroups;
  return <div className="tech-sections">{groups.map(group => <section className="tech-section" key={group.name}><h3>{group.name}</h3><ul className="tech-tags">{(compact ? group.skills.slice(0, 3) : group.skills).map(skill => <li key={skill}>{skill}</li>)}{compact && group.skills.length > 3 && <li className="tech-more" aria-label={`${group.skills.length - 3} more technologies`}>+{group.skills.length - 3}</li>}</ul></section>)}</div>;
}
