import { portfolio } from "./portfolio";
import snapshot from "./github-snapshot.json";

export type ContributionDay = { date: string; level: number; count: number };
export type Activity = { days: ContributionDay[]; total: number; cached: boolean };

export function parseContributions(html: string): ContributionDay[] {
  const tips = new Map<string, number>();
  for (const match of html.matchAll(/<tool-tip\b[^>]*for="([^"]+)"[^>]*>([\s\S]*?)<\/tool-tip>/g)) {
    const count = match[2].replace(/<[^>]*>/g, "").match(/([\d,]+) contributions?/);
    tips.set(match[1], count ? Number(count[1].replaceAll(",", "")) : 0);
  }
  const days: ContributionDay[] = [];
  for (const match of html.matchAll(/<td\b[^>]*data-date="([^"]+)"[^>]*id="([^"]+)"[^>]*data-level="(\d)"[^>]*>/g)) {
    days.push({ date: match[1], level: Number(match[3]), count: tips.get(match[2]) ?? 0 });
  }
  return days.sort((a, b) => a.date.localeCompare(b.date));
}

export async function getContributions(): Promise<Activity> {
  try {
    const response = await fetch(`https://github.com/users/${encodeURIComponent(portfolio.githubUsername)}/contributions`, { next: { revalidate: 3600 }, signal: AbortSignal.timeout(6000) });
    if (!response.ok) throw new Error("GitHub unavailable");
    const days = parseContributions(await response.text());
    if (days.length < 300) throw new Error("Contribution data unavailable");
    return { days, total: days.reduce((total, day) => total + day.count, 0), cached: false };
  } catch {
    const days = portfolio.githubUsername === snapshot.username ? snapshot.days : [];
    return { days, total: days.reduce((total, day) => total + day.count, 0), cached: true };
  }
}
