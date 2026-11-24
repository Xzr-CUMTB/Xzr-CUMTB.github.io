import { Link } from "react-router";
import { researchProjects, recentUpdates } from "../data/research";
import { SectionTitle } from "./SectionTitle";
import { Reveal } from "./Reveal";

export function ResearchNews() {
  return (
    <aside className="research-news shell" aria-label="近期动态">
      {recentUpdates.map((n) => (
        <Link key={n.text} to={n.href}>
          <small>{n.label}</small>
          <span>{n.text} ↗</span>
        </Link>
      ))}
    </aside>
  );
}
export function ResearchSection() {
  return (
    <section id="research" className="section theme-kita research-section">
      <div className="shell">
        <SectionTitle
          number="04"
          label="RECENT RESEARCH / 最新研究"
          title="把问题展开，"
          accent="把研究做实"
          description="从实验选配、数值预测到能源运行，记录近期的研究与工具。"
        />
        <div className="research-grid">
          {researchProjects.map((p, i) => (
            <Reveal key={p.id}>
              <article className="research-card">
                <Link
                  to={`/research/${p.id}`}
                  className="research-cover"
                  aria-label={`查看${p.title}`}
                >
                  <img
                    src={p.image}
                    alt={p.caption}
                    loading="lazy"
                    width={p.imageWidth}
                    height={p.imageHeight}
                  />
                </Link>
                <div className="research-card-copy">
                  <small>
                    0{i + 1} / {p.status}
                  </small>
                  <h3>
                    <Link to={`/research/${p.id}`}>{p.title}</Link>
                  </h3>
                  <small>{p.english}</small>
                  <p>{p.summary}</p>
                  <div className="archive-tags">
                    {p.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  <Link className="text-link" to={`/research/${p.id}`}>
                    查看研究与证据 ↗
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="research-links">
          <Link className="text-link" to="/projects#archive-records">
            更多研究与参与项目 ↗
          </Link>
        </p>
      </div>
    </section>
  );
}
