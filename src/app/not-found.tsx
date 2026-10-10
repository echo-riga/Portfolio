import Link from "next/link";
export default function NotFound() {
  return <main id="main" className="container not-found"><span className="eyebrow">404 / Page not found</span><h1>A little<br /><span className="muted">off the path.</span></h1><p>This page doesn’t exist. Let’s head back.</p><Link className="text-link" href="/">Back to home ↗</Link></main>;
}
