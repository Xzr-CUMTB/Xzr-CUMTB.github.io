import { siteContent, education, stats } from "../data/siteContent";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";
import { SectionCharacter } from "./CharacterLayer";
import { AssetImage } from "./AssetImage";
import { FloatingSticker } from "./FloatingSticker";
import { TicketBadge } from "./TicketBadge";
import { livehouse } from "../data/livehouse";
import { Icon } from "./Icon";
import { researchDirections } from "../data/research";
import { Link } from "react-router";
export function AboutSection() {
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
            <p>安全科学与工程 · 硕博连读培养</p>
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
              <div className="research-directions">
                {researchDirections.map((d) => (
                  <Link key={d.title} to={`/research/${d.project}`}>
                    <strong>{d.title} ↗</strong>
                    {d.description}
                  </Link>
                ))}
              </div>
              <div className="about-links">
                <a href={`mailto:${siteContent.email}`}>
                  <Icon name="mail" size={17} /> Email <Icon size={14} />
                </a>
                <a href={siteContent.github} target="_blank" rel="noreferrer">
                  <Icon name="github" size={17} /> GitHub <Icon size={14} />
                </a>
              </div>
            </Reveal>
            <div className="experience-tabs">
              <h4>Education / 教育</h4>
            </div>
            <div className="timeline">
              {education.map((item) => (
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
