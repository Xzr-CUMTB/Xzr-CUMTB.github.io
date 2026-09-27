import type { ArchiveEntry } from "../data/collections";
import { Icon } from "./Icon";

export function ArchiveRecord({
  entry,
  index,
}: {
  entry: ArchiveEntry;
  index: number;
}) {
  return (
    <article className="archive-record" id={entry.id}>
      <div className="archive-record-number">
        {String(index + 1).padStart(2, "0")}
        <span>TRACK</span>
      </div>
      <div className="archive-record-body">
        <div className="archive-record-meta">
          <span>{entry.category}</span>
          {entry.date && <span>{entry.date}</span>}
          {entry.status && (
            <span className="archive-status">{entry.status}</span>
          )}
        </div>
        <h3>{entry.title}</h3>
        <p>{entry.description}</p>
        {entry.facts && (
          <dl>
            {entry.facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        )}
        {entry.tags && (
          <div className="archive-tags">
            {entry.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        )}
        {entry.url && (
          <a
            className="text-link archive-source"
            href={entry.url}
            target="_blank"
            rel="noreferrer"
          >
            查看原始记录 <Icon size={15} />
          </a>
        )}
      </div>
    </article>
  );
}
