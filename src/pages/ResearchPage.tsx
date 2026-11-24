import { useEffect } from "react";
import { Link, useParams } from "react-router";
import { researchProjects } from "../data/research";
import { collections, collectionStyle } from "../data/collections";
import { useRoomRadio } from "../components/RoomRadioContext";
import { CollectionScene } from "../components/CollectionScene";
export function ResearchPage() {
  const { id } = useParams();
  const p = researchProjects.find((p) => p.id === id);
  const { setIsVideoPlaying } = useRoomRadio();
  useEffect(() => () => setIsVideoPlaying(false), [id, setIsVideoPlaying]);
  if (!p)
    return (
      <main className="archive-not-found">
        <h1>未找到这项研究。</h1>
        <Link to="/#research">返回研究列表</Link>
      </main>
    );
  const c = collections[1];
  return (
    <div className="collection-page research-detail" style={collectionStyle(c)}>
      <header className="archive-header">
        <div className="shell archive-header-inner">
          <Link className="wordmark" to="/">
            XZ.<small>DIGITAL LIVEHOUSE</small>
          </Link>
          <Link to="/#research">← 返回近期研究</Link>
          <Link to="/projects">全部项目 ↗</Link>
        </div>
      </header>
      <main className="shell">
        <section className="archive-hero">
          <div className="archive-breadcrumb">
            <Link to="/">LIVEHOUSE</Link>
            <span>/ RESEARCH</span>
          </div>
          <div className="archive-hero-grid">
            <div className="archive-intro">
              <p className="archive-eyebrow">{p.status}</p>
              <h1>
                {p.title}
                <span>{p.english}</span>
              </h1>
              <p className="archive-description">{p.summary}</p>
            </div>
            <CollectionScene collection={c} />
          </div>
        </section>
        <div className="research-detail-body">
          {p.video && (
            <figure>
              <video
                controls
                playsInline
                preload="none"
                poster={p.image}
                width="1920"
                height="1080"
                onPlay={() => setIsVideoPlaying(true)}
                onPause={() => setIsVideoPlaying(false)}
                onEnded={() => setIsVideoPlaying(false)}
              >
                <source src={p.video} type="video/mp4" />
                <a href={p.video}>打开演示视频</a>
              </video>
              <figcaption>
                DustWise
                真实操作演示（49秒、静音）。历史回放与演示录入仅用于说明流程，不代表新增实测结果。
              </figcaption>
            </figure>
          )}
          {p.image && (
            <figure>
              <a href={p.image} target="_blank" rel="noreferrer">
                <img
                  src={p.image}
                  alt={p.caption}
                  width={p.imageWidth}
                  height={p.imageHeight}
                />
              </a>
              <figcaption>{p.caption} 点击图片查看完整图。</figcaption>
            </figure>
          )}
          {p.sections.map((s) => (
            <section className="research-detail-text" key={s.title}>
              <h2>{s.title}</h2>
              <p>{s.text}</p>
            </section>
          ))}
          <nav className="research-links" aria-label="项目资料">
            {p.links.map((l) => (
              <a
                key={l.href}
                className="text-link"
                href={l.href}
                target={l.href.startsWith("https") ? "_blank" : undefined}
                rel="noreferrer"
              >
                {l.label} ↗
              </a>
            ))}
          </nav>
          <Link className="text-link" to="/#research">
            ← 返回研究列表
          </Link>
        </div>
      </main>
    </div>
  );
}
