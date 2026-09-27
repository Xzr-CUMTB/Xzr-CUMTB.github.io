import { useState } from "react";
import { siteContent, experience, stats } from "../data/siteContent";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";
import { SectionCharacter } from "./CharacterLayer";
import { AssetImage } from "./AssetImage";
import { FloatingSticker } from "./FloatingSticker";
import { TicketBadge } from "./TicketBadge";
import { livehouse } from "../data/livehouse";
import { Icon } from "./Icon";
export function AboutSection() {
  const [tab, setTab] = useState("education");
  return (
    <section
      id="about"
      className="section about-section theme-nijika"
      aria-labelledby="about-heading"
    >
      <div className="shell">
        <Reveal>
          <SectionTitle
            number="02"
            label="THE GREEN ROOM / ABOUT ME"
            title="认真研究，"
            accent="也认真感受"
          />
        </Reveal>
        <div className="about-grid">
          <Reveal className="profile-board">
            <div className="profile-tape" />
            <div className="profile-topline">
              <span>ARTIST / RESEARCHER PASS</span>
              <span>NO. 001</span>
            </div>
            <div className="artist-pass-art" aria-hidden="true">
              <span className="pass-monogram">XZ</span>
              <span className="pass-orbit" />
              <AssetImage src={livehouse.companions.nijika} />
              <span className="pass-caption">
                STAY CURIOUS.
                <br />
                STAY CONNECTED.
              </span>
            </div>
            <h3>
              {siteContent.nameZh}
              <span>{siteContent.name}</span>
            </h3>
            <p>安全科学与工程 · 硕士在读</p>
            <div className="profile-rule" />
            <span className="profile-location">◉ {siteContent.location}</span>
            <div className="profile-barcode" aria-hidden="true" />
            <FloatingSticker
              src={livehouse.sketches.nijika}
              className="pass-sketch"
            />
            <AssetImage
              src={livehouse.icons.nijika}
              className="pass-instrument"
            />
            <SectionCharacter id="nijika" className="about-guide" />
          </Reveal>
          <div className="about-story">
            <Reveal>
              <h3 id="about-heading">
                研究者的好奇心，
                <br />
                创造者的行动力<span>。</span>
              </h3>
              <p>{siteContent.about}</p>
              <p>{siteContent.approach}</p>
              <div className="about-links">
                <a href={`mailto:${siteContent.email}`}>
                  <Icon name="mail" size={17} /> Email <Icon size={14} />
                </a>
                <a href={siteContent.github} target="_blank" rel="noreferrer">
                  <Icon name="github" size={17} /> GitHub <Icon size={14} />
                </a>
              </div>
            </Reveal>
            <div
              className="experience-tabs"
              role="tablist"
              aria-label="经历类型"
            >
              {[
                { id: "education", label: "Education / 教育" },
                { id: "practice", label: "Experience / 实习" },
              ].map((item) => (
                <button
                  id={`tab-${item.id}`}
                  key={item.id}
                  role="tab"
                  aria-selected={tab === item.id}
                  aria-controls="experience-panel"
                  onClick={() => setTab(item.id)}
                  onKeyDown={(event) => {
                    if (
                      event.key === "ArrowRight" ||
                      event.key === "ArrowLeft"
                    ) {
                      const next =
                        tab === "education" ? "practice" : "education";
                      setTab(next);
                      document.getElementById(`tab-${next}`)?.focus();
                    }
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div
              id="experience-panel"
              className="timeline"
              role="tabpanel"
              aria-labelledby={`tab-${tab}`}
            >
              {experience
                .filter((item) => item.type === tab)
                .map((item) => (
                  <div className="timeline-item" key={item.title}>
                    <span className="timeline-date">{item.date}</span>
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.role}</p>
                      <small>{item.detail}</small>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="green-room-note">
          <AssetImage src={livehouse.albums[4]} />
          <p>
            不同的兴趣，也可以合奏。
            <small>RESEARCH × DESIGN × A LITTLE ROCK 'N' ROLL</small>
          </p>
          <TicketBadge
            label="BACKSTAGE ACCESS"
            detail="KEEP LEARNING / KEEP MAKING"
          />
        </div>
        <Reveal className="stats-grid">
          {stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <strong>
                {stat.value}
                <span> /</span>
              </strong>
              <div>
                <b>{stat.label}</b>
                <small>{stat.note}</small>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
