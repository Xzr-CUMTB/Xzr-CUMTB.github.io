import { useState } from "react";
import { Link, NavLink } from "react-router";
import {
  collections,
  collectionStyle,
  type Collection,
} from "../data/collections";
import { archiveEntries } from "../data/archiveEntries";
import { siteContent } from "../data/siteContent";
import { livehouse } from "../data/livehouse";
import { CollectionScene } from "../components/CollectionScene";
import { ArchiveRecord } from "../components/ArchiveRecord";
import { AssetImage } from "../components/AssetImage";
import { SectionCharacter } from "../components/CharacterLayer";
import { Reveal } from "../components/Reveal";
import { Icon } from "../components/Icon";

export function CollectionPage({ collection: c }: { collection: Collection }) {
  const entries = archiveEntries[c.id];
  const [filter, setFilter] = useState("全部");
  const [query, setQuery] = useState("");
  const normalized = query.trim().toLowerCase();
  const visible = entries.filter(
    (entry) =>
      (filter === "全部" || entry.category === filter) &&
      [
        entry.title,
        entry.description,
        entry.category,
        entry.status,
        entry.date,
        ...(entry.tags || []),
        ...(entry.facts?.map((f) => f.value) || []),
      ]
        .join(" ")
        .toLowerCase()
        .includes(normalized),
  );
  const next =
    collections[
      (collections.findIndex((item) => item.id === c.id) + 1) %
        collections.length
    ];
  return (
    <div
      className={`collection-page collection-page--${c.id}`}
      style={collectionStyle(c)}
    >
      <a className="skip-link" href="#archive-records">
        跳到档案列表
      </a>
      <header className="archive-header">
        <div className="shell archive-header-inner">
          <Link className="wordmark" to="/" aria-label="Xu Zirui 返回首页">
            <span className="brand-star">✳</span>
            <span>
              XZ.<small>DIGITAL LIVEHOUSE</small>
            </span>
          </Link>
          <nav aria-label="主题档案导航">
            {collections.map((item) => (
              <NavLink
                key={item.id}
                to={`/${item.id}`}
                style={collectionStyle(item)}
              >
                <small>{item.number}</small>
                {item.title}
              </NavLink>
            ))}
          </nav>
          <Link className="archive-back" to="/#projects">
            返回唱片架 <span>↗</span>
          </Link>
        </div>
      </header>
      <main id="archive-main">
        <section className="archive-hero shell" aria-labelledby="archive-title">
          <div className="archive-breadcrumb">
            <Link to="/">LIVEHOUSE</Link>
            <span>/</span>
            <span>COLLECTION {c.number}</span>
          </div>
          <div className="archive-hero-grid">
            <Reveal className="archive-intro">
              <p className="archive-eyebrow">
                SIDE {c.number} — XU ZIRUI'S PERSONAL ARCHIVE
              </p>
              <h1 id="archive-title">
                {c.title}
                <span>{c.english}</span>
              </h1>
              <p className="archive-description">{c.intro}</p>
              <div className="archive-hero-bottom">
                <a className="archive-browse" href="#archive-records">
                  翻阅这份记录 <Icon name="down" size={17} />
                </a>
                <span className="archive-count">
                  <strong>{String(entries.length).padStart(2, "0")}</strong>
                  RECORDS / 持续更新
                </span>
              </div>
            </Reveal>
            <CollectionScene collection={c} />
          </div>
          <div className="archive-marquee">
            <span>RESEARCHER · DESIGNER · BUILDER</span>
            <i>✳</i>
            <p>{c.note}</p>
            <span>VOL. {c.number} / OPEN ENDED</span>
          </div>
        </section>
        <section
          id="archive-records"
          className="archive-body shell"
          aria-labelledby="archive-list-title"
        >
          <div className="archive-list-heading">
            <div>
              <span className="archive-eyebrow">THE TRACKLIST</span>
              <h2 id="archive-list-title">
                每一条，都有来处<span>。</span>
              </h2>
            </div>
            <p>
              记录依据 {siteContent.resumeUpdated} 简历
              <br />
              {c.id === "papers"
                ? "保留原始进展；WE 为简历所用状态缩写。"
                : "更多经历与成果，陆续收录。"}
            </p>
          </div>
          <div className="archive-controls">
            <div className="archive-filters" aria-label="档案分类筛选">
              {["全部", ...c.filters].map((value) => (
                <button
                  key={value}
                  aria-pressed={value === filter}
                  onClick={() => setFilter(value)}
                >
                  {value}
                  <small>
                    {value === "全部"
                      ? entries.length
                      : entries.filter((e) => e.category === value).length}
                  </small>
                </button>
              ))}
            </div>
            <label className="archive-search">
              <Icon name="search" size={17} />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="查找标题、关键词…"
                aria-label={`搜索${c.title}`}
              />
            </label>
          </div>
          <div className="archive-content-grid">
            <div className="archive-tracklist">
              <p className="archive-results" aria-live="polite">
                收录 {entries.length} 条 · 当前显示 {visible.length} 条
              </p>
              {visible.map((entry) => (
                <ArchiveRecord
                  key={entry.id}
                  entry={entry}
                  index={entries.indexOf(entry)}
                />
              ))}
              {!visible.length && (
                <div className="archive-empty">
                  <span>♪</span>
                  <h3>
                    {!query && filter === "软件著作权"
                      ? "这一面，等待新的记录。"
                      : "暂时没有匹配的记录。"}
                  </h3>
                  <p>
                    {!query && filter === "软件著作权"
                      ? "软件著作权条目尚未提供，后续将在这里收录。"
                      : "试试其他关键词，或回到全部记录。"}
                  </p>
                  <button
                    onClick={() => {
                      setQuery("");
                      setFilter("全部");
                    }}
                  >
                    查看全部记录 ↗
                  </button>
                </div>
              )}
              {c.id === "intellectual-property" &&
                filter === "全部" &&
                !query && (
                  <div className="archive-footnote">
                    软件著作权记录尚未提供；专利申请号及授权状态将在资料补齐后更新。
                  </div>
                )}
            </div>
            <aside className="archive-side-note" aria-label="档案寄语">
              <AssetImage
                className="archive-side-sketch"
                src={livehouse.sketches[c.character]}
              />
              <span className="note-pin" />
              <p>{c.note}</p>
              <div>
                <AssetImage src={livehouse.icons[c.character]} />
                <span>
                  WORK IN PROGRESS
                  <br />
                  LIFE IN PROGRESS
                </span>
              </div>
              <SectionCharacter id={c.character} />
            </aside>
          </div>
        </section>
        <section className="archive-outro shell">
          <div>
            <span className="archive-eyebrow">
              THERE IS ALWAYS ANOTHER SIDE
            </span>
            <h2>下一张，也来听听。</h2>
            <p>研究、实践与成长，在不同的声音里连成一条线。</p>
          </div>
          <Link
            className="next-record"
            to={`/${next.id}`}
            style={collectionStyle(next)}
          >
            <span className="next-record-disc">{next.number}</span>
            <span>
              <small>NEXT COLLECTION</small>
              <strong>{next.title}</strong>
            </span>
            <Icon size={23} />
          </Link>
        </section>
      </main>
      <footer className="archive-footer shell">
        <Link to="/#projects">← 回到 Xu Zirui 的唱片架</Link>
        <AssetImage src={livehouse.wordmark} />
        <span>© 2026 · Keep the ideas playing.</span>
        <a href={`mailto:${siteContent.email}`}>聊聊这些想法 ↗</a>
      </footer>
    </div>
  );
}
