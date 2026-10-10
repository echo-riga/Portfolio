import { credentials } from "@/lib/portfolio";

export function CredentialList({ compact = false }: { compact?: boolean }) {
  const items = compact ? credentials.slice(0, 2) : credentials;
  return <div className={compact ? "credentials-list" : "modal-credentials"}>{items.map(item => <article className="credential" key={`${item.name}-${item.issuer}-${item.year}`}><div><h3>{item.url ? <a className="credential-link" href={item.url} target="_blank" rel="noopener noreferrer">{item.name}</a> : item.name}</h3><p>{item.issuer} · {item.year}</p></div></article>)}</div>;
}
