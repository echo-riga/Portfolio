"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ProjectVisual } from "./portfolio";
import { ProjectPlaceholder } from "./project-placeholder";

type GalleryProps = { name: string; theme: string; images: { src: string; alt: string }[] };

export function ProjectGallery({ name, theme, images }: GalleryProps) {
  const [index, setIndex] = useState<number | null>(null);
  const viewerRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);
  const opened = index !== null;
  const image = index === null ? undefined : images[index];

  useEffect(() => {
    if (!opened) return;
    const viewer = viewerRef.current;
    if (viewer && !viewer.open) viewer.showModal();
    closeRef.current?.focus();
    return () => { if (viewer?.open) viewer.close(); };
  }, [opened]);

  function openImage(next: number, opener: HTMLButtonElement) {
    openerRef.current = opener;
    setIndex(next);
  }
  function move(direction: number) {
    setIndex(current => current === null ? null : Math.max(0, Math.min(images.length - 1, current + direction)));
  }

  return <>
    <div className="project-image-panel">
      {images.length ? <><button className="gallery-cover" type="button" aria-label={`Enlarge ${images[0].alt}`} onClick={event => openImage(0, event.currentTarget)}><ProjectVisual theme={theme} image={images[0]} /><span className="image-enlarge" aria-hidden="true">⤢</span></button><div className="gallery-thumbnails">{images.slice(1).map((item, thumbnailIndex) => <button className="gallery-thumbnail" type="button" key={item.src} aria-label={`Enlarge ${item.alt}`} onClick={event => openImage(thumbnailIndex + 1, event.currentTarget)}><Image src={item.src} alt={item.alt} fill sizes="(max-width: 700px) 30vw, 180px" /></button>)}</div><span className="gallery-count">{images.length} images</span></> : <div className="gallery-placeholder"><ProjectPlaceholder /></div>}
    </div>
    <dialog ref={viewerRef} className="image-lightbox" aria-labelledby="image-viewer-title" onCancel={event => event.stopPropagation()} onClose={event => {
      event.stopPropagation();
      setIndex(null);
      openerRef.current?.focus();
    }} onClick={event => {
      if (event.target !== event.currentTarget) return;
      const bounds = event.currentTarget.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) event.currentTarget.close();
    }} onKeyDown={event => {
      if (event.key === "ArrowLeft") { event.preventDefault(); move(-1); }
      if (event.key === "ArrowRight") { event.preventDefault(); move(1); }
    }}>
      {image && <><div className="lightbox-header"><h2 id="image-viewer-title">{name}</h2><span aria-live="polite">{(index ?? 0) + 1} / {images.length}</span><button ref={closeRef} className="modal-close" type="button" aria-label="Close image viewer" onClick={() => viewerRef.current?.close()}>×</button></div><div className="lightbox-image"><Image src={image.src} alt={image.alt} fill sizes="95vw" /></div><div className="lightbox-controls"><button className="slider-button" type="button" disabled={index === 0} onClick={() => move(-1)}>← Back</button><p aria-live="polite">{image.alt}</p><button className="slider-button" type="button" disabled={index === images.length - 1} onClick={() => move(1)}>Next →</button></div></>}
    </dialog>
  </>;
}
