import type { Activity } from "@/lib/github";

export function GitHubGraph({ activity }: { activity: Activity }) {
  if (!activity.days.length) return <p className="activity-unavailable">Activity is temporarily unavailable. Visit GitHub to see the latest contributions.</p>;
  const firstDay = new Date(`${activity.days[0].date}T00:00:00Z`).getUTCDay();
  const cells = [...Array.from({ length: firstDay }, () => null), ...activity.days];
  const weeks = Math.ceil(cells.length / 7);
  const months = Array.from({ length: weeks }, (_, week) => {
    const date = week === 0 ? activity.days[0] : cells.slice(week * 7, week * 7 + 7).find(day => day && Number(day.date.slice(-2)) === 1);
    return date ? new Date(`${date.date}T00:00:00Z`).toLocaleDateString("en-US", { month: "short", timeZone: "UTC" }) : "";
  });
  return <><div className="activity-summary"><strong>{activity.total.toLocaleString("en-US")}</strong><span>contributions in the past year</span></div><div className="graph-wrapper"><div className="graph-months" style={{ gridTemplateColumns: `repeat(${weeks}, 1fr)` }} aria-hidden="true">{months.map((month, index) => <span key={index}>{month}</span>)}</div><div className="contribution-grid" role="img" aria-label={`${activity.total} GitHub contributions from ${activity.days[0].date} to ${activity.days.at(-1)?.date}. Each square represents one day.`} style={{ gridTemplateColumns: `repeat(${weeks}, 1fr)` }}>{cells.map((day, index) => <span key={day?.date ?? `empty-${index}`} className={`contribution-cell ${day ? `level-${day.level}` : "empty"}`} title={day ? `${day.count} contributions on ${day.date}` : undefined} />)}</div></div><div className="graph-footer"><span>{activity.cached ? "Saved activity · " : ""}{activity.days.at(-1)?.date}</span><div className="graph-legend" aria-label="Contribution intensity from less to more"><span>Less</span>{[0, 1, 2, 3, 4].map(level => <i className={`level-${level}`} key={level} />)}<span>More</span></div></div></>;
}
