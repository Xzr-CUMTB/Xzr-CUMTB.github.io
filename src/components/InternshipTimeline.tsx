import { Link } from "react-router";
import { internships } from "../data/internships";
import { livehouse } from "../data/livehouse";

export function InternshipTimeline() {
  return (
    <section
      id="internships"
      className="internships shell"
      aria-labelledby="internship-title"
    >
      <header className="internship-heading">
        <div>
          <p className="archive-eyebrow">INTERNSHIP EXPERIENCE</p>
          <h2 id="internship-title">实习经历</h2>
          <p>走出研究室，理解真实的工程世界。</p>
        </div>
        <img src={livehouse.icons.ryo} width="64" height="64" alt="" />
      </header>
      <ol className="internship-stops">
        {internships.map((job) => (
          <li key={job.id} id={`intern-${job.id}`}>
            <div className="internship-date">{job.period}</div>
            <div className="internship-body">
              <h3>{job.organization}</h3>
              <strong>{job.role}</strong>
              {job.duties.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <div className="internship-tags">
                {job.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              {job.id === "huarui" && (
                <div className="internship-links">
                  <Link to="/research/dustwise">粉尘防控研究 ↗</Link>
                  <Link to="/#strengths">研究软件与 AI 工具 ↗</Link>
                </div>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
