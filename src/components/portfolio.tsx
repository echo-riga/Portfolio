import Image from "next/image";

export function ProjectVisual({ theme, image }: { theme: string; image?: { src: string; alt: string } }) {
  if (image) return <div className={`project-visual project-image ${theme}`}><Image src={image.src} alt={image.alt} fill sizes="(max-width: 600px) 90vw, 700px" /></div>;
  return <div className={`project-visual ${theme}`} aria-hidden="true"><div><div className="visual-mark">{theme === "studio" ? "studio." : "◒ forma"}</div><div className="visual-caption">SAMPLE PROJECT / {theme === "studio" ? "BRAND WEBSITE" : "PRODUCT INTERFACE"}</div></div></div>;
}
