"use client";

import { useEffect, useId, useState } from "react";
import type { Activity } from "@/lib/github";

const dayOffsets: Record<string, number> = { ArrowLeft: -7, ArrowRight: 7, ArrowUp: -1, ArrowDown: 1 };

export function GitHubGraph({ activity }: { activity: Activity }) {
  const tooltipId = useId();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const tooltipOpen = hoveredIndex !== null || focusedIndex !== null;
  useEffect(() => {
    if (!tooltipOpen) return;
    const dismiss = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setHoveredIndex(null);
        setFocusedIndex(null);
      }
    };
    document.addEventListener("keydown", dismiss);
    return () => document.removeEventListener("keydown", dismiss);
  }, [tooltipOpen]);
  if (!activity.days.length) return <p className="activity-unavailable">Activity is temporarily unavailable. Visit GitHub to see the latest contributions.</p>;
  const firstDay = new Date(`${activity.days[0].date}T00:00:00Z`).getUTCDay();
  const cells = [...Array.from({ length: firstDay }, () => null), ...activity.days];
  const weeks = Math.ceil(cells.length / 7);
  const months = Array.from({ length: weeks }, (_, week) => {
    const day = cells.slice(week * 7, week * 7 + 7).find(day => day && Number(day.date.slice(-2)) === 1);
    return day ? { week, label: new Date(`${day.date}T00:00:00Z`).toLocaleDateString("en-US", { month: "short", timeZone: "UTC" }) } : null;
  }).filter(month => month !== null);
  const year = activity.days.at(-1)?.date.slice(0, 4);
  const activeIndex = hoveredIndex ?? focusedIndex;
  const activeDay = activeIndex === null ? null : cells[activeIndex];
  const tooltipPosition = activeIndex === null ? 50 : ((Math.floor(activeIndex / 7) + .5) / weeks) * 100;
  return <><div className="activity-summary"><strong>{activity.total.toLocaleString("en-US")}</strong><span>contributions in the past year</span></div><div className="graph-wrapper"><div className="graph-months" style={{ gridTemplateColumns: `repeat(${weeks}, 1fr)` }} aria-hidden="true">{months.map(month => <span className="graph-month" key={month.week} style={{ gridColumn: `${month.week + 1} / span ${Math.min(3, weeks - month.week)}` }}>{month.label}</span>)}</div><div className="contribution-calendar" onMouseLeave={() => setHoveredIndex(null)}><div className="contribution-grid" role="group" tabIndex={0} aria-describedby={activeDay ? tooltipId : undefined} onFocus={() => setFocusedIndex(cells.length - 1)} onBlur={() => setFocusedIndex(null)} onKeyDown={event => { if (event.key === "Escape") { setHoveredIndex(null); setFocusedIndex(null); return; } const offset = dayOffsets[event.key]; if (offset !== undefined) { event.preventDefault(); setHoveredIndex(null); setFocusedIndex(index => Math.max(firstDay, Math.min(cells.length - 1, (index ?? cells.length - 1) + offset))); } }} aria-label={`${activity.total} GitHub contributions from ${activity.days[0].date} to ${activity.days.at(-1)?.date}. Each square represents one day.`} style={{ gridTemplateColumns: `repeat(${weeks}, 1fr)` }}>{cells.map((day, index) => <span key={day?.date ?? `empty-${index}`} className={`contribution-cell ${day ? `level-${day.level}` : "empty"}`} aria-hidden="true" data-active={day && index === activeIndex ? "true" : undefined} onMouseEnter={() => setHoveredIndex(day ? index : null)} />)}</div>{activeDay && <div id={tooltipId} role="tooltip" className="contribution-tooltip" style={{ left: `clamp(110px, ${tooltipPosition}%, calc(100% - 110px))` }}><strong>{activeDay.count} {activeDay.count === 1 ? "contribution" : "contributions"}</strong><span>{new Date(`${activeDay.date}T00:00:00Z`).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" })}</span></div>}</div></div><div className="graph-footer"><span>{activity.cached ? "Saved activity · " : ""}{year}</span><div className="graph-legend" aria-label="Contribution intensity from less to more"><span>Less</span>{[0, 1, 2, 3, 4].map(level => <i className={`level-${level}`} key={level} />)}<span>More</span></div></div></>;
}
