import { strengths } from "../data/strengths";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";
import { SectionCharacter } from "./CharacterLayer";
import { Icon } from "./Icon";
import { livehouse, studioTools } from "../data/livehouse";
import { AssetImage } from "./AssetImage";
import { FloatingSticker } from "./FloatingSticker";
export function StrengthsSection() {
  return (
    <section
      id="strengths"
      className="section strengths-section theme-ryo"
      aria-label="个人优势"
    >
      <div className="shell">
        <Reveal className="strengths-heading">
          <SectionTitle
            number="04"
            label="THE STUDIO / MY EQUIPMENT"
            title="不同技能，"
            accent="同一个节奏"
            description="在研究、工程和表达之间，寻找更顺畅的连接。"
          />
          <div className="ryo-guide">
            <div className="mini-wave" aria-hidden="true">
              {[14, 24, 36, 19, 30, 44, 21, 32, 16].map((h, i) => (
                <i key={i} style={{ height: h }} />
              ))}
            </div>
            <FloatingSticker
              src={livehouse.companions.ryo}
              className="studio-companion"
              rotation={-3}
            />
          </div>
        </Reveal>
        <div className="studio-console">
          <div className="console-header">
            <span>
              <i /> XZ / SIGNAL PROCESSING UNIT
            </span>
            <span>INPUT → THINK → BUILD → SHARE</span>
            <AssetImage src={livehouse.icons.ryo} />
          </div>
          <div className="studio-tools">
            {studioTools.map((tool, i) => (
              <div key={tool}>
                <span>CH / 0{i + 1}</span>
                <strong>{tool}</strong>
                <div className="console-slider">
                  <i style={{ left: `${30 + i * 9}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="strengths-grid">
          {strengths.map((s, i) => (
            <Reveal key={s.number} delay={i * 0.035}>
              <article className="strength-card">
                <div className="strength-top">
                  <Icon name={s.icon} size={26} />
                  <span>{s.number}</span>
                </div>
                <h3>{s.title}</h3>
                <h4>{s.titleZh}</h4>
                <p>{s.description}</p>
                <small>{s.tools}</small>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="skills-footnote">
          <div className="studio-stickers">
            <AssetImage src={livehouse.sketches.ryo} />
            <AssetImage src={livehouse.albums[5]} />
            <SectionCharacter id="ryo" />
          </div>
          <p>好工具，让想法有回声。</p>
          <span>♪ KEEP PRACTICING</span>
        </div>
      </div>
    </section>
  );
}
