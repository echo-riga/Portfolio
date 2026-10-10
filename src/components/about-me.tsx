export function AboutMe({ onViewSkills }: { onViewSkills: () => void }) {
  return <article className="about-content">
    <p className="about-intro">I approach problems from first principles: understand the goal, question assumptions, and work from what is actually needed.</p>
    <p className="about-transition">I put that approach into reusable skill files for UI design and backend decisions.</p>
    <button type="button" className="project-action about-project-link" onClick={onViewSkills}>Explore Skills MDs &#8594;</button>
  </article>;
}
