import { redirect } from "next/navigation";
import { projects } from "@/lib/portfolio";

export default async function ProjectsPage({ searchParams }: { searchParams: Promise<{ project?: string | string[] }> }) {
  const { project } = await searchParams;
  if (typeof project === "string" && projects.some(item => item.slug === project)) {
    redirect(`/?project=${encodeURIComponent(project)}`);
  }
  redirect("/?view=projects");
}