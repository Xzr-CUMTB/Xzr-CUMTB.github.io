import { Link } from "react-router";
import {
  publications,
  paperCount,
  paperGroup,
  paperFilters,
  paperFilterUrl,
} from "../data/publications";
import { SectionTitle } from "./SectionTitle";
export function PublicationsSection() {
  const published = publications.filter((p) => p.status === "Published");
  return (
    <section
      id="publications"
      className="section theme-nijika publications-section"
    >
      <div className="shell">
        <SectionTitle
          number="05"
          label="PUBLICATIONS / 论文成果"
          title="让研究，"
          accent="留下可讨论的证据"
        />
        <nav className="paper-index" aria-label="按论文状态翻阅档案">
          {(["published", "accepted", "submitted"] as const).map((group) => (
            <Link key={group} to={paperFilterUrl(group)}>
              {paperFilters[group]} <b>{paperCount(group)}</b> ↗
            </Link>
          ))}
        </nav>
        <h3 className="publication-group">
          已发表 / Published <small>{published.length} 篇</small>
        </h3>
        {published.map((p, i) => (
          <article key={p.id} className="archive-record">
            <div className="archive-record-number">
              {String(i + 1).padStart(2, "0")}
            </div>
            <div className="archive-record-body">
              <h3>{p.title}</h3>
              {p.authors && (
                <p>
                  {p.authors.map((a, j) => (
                    <span key={a}>
                      {j > 0 ? ", " : ""}
                      {a === "Zirui Xu" ? <strong>{a}</strong> : a}
                    </span>
                  ))}
                </p>
              )}
              <p>
                {p.journal} · {p.citation || p.year || "Online"}
              </p>
              <div className="research-links">
                {p.url && (
                  <a
                    className="text-link"
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    出版社原文 ↗
                  </a>
                )}
                {p.project && (
                  <Link className="text-link" to={`/research/${p.project}`}>
                    关联项目 ↗
                  </Link>
                )}
              </div>
            </div>
          </article>
        ))}
        {(["accepted", "submitted"] as const).map(
          (group) =>
            paperCount(group) > 0 && (
              <div key={group}>
                <h3 className="publication-group">{paperFilters[group]}</h3>
                {publications
                  .filter((p) => paperGroup(p.status) === group)
                  .map((p) => (
                    <p key={p.id} className="publication-progress">
                      <Link to={`/papers#${p.id}`}>
                        {p.journal} · {p.title} ↗
                      </Link>
                      {group === "submitted" && (
                        <span className="archive-status" data-status={p.status}>
                          {p.status}
                        </span>
                      )}
                    </p>
                  ))}
              </div>
            ),
        )}
      </div>
    </section>
  );
}
