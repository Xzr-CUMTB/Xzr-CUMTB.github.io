import { collections } from "../data/collections";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";
import { SectionCharacter } from "./CharacterLayer";
import { AlbumCard } from "./AlbumCard";
import { FloatingSticker } from "./FloatingSticker";
import { AssetImage } from "./AssetImage";
import { livehouse } from "../data/livehouse";
export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="section projects-section theme-kita collection-section"
      aria-label="四张主题档案唱片"
    >
      <div className="shell">
        <Reveal className="section-heading-row">
          <SectionTitle
            number="03"
            label="THE COLLECTIONS / FOUR RECORDS"
            title="一路探索，"
            accent="持续收录"
            description="四张唱片，四种记录。打开一张，走进我的研究、实践与成长。"
          />
          <div className="project-guide-wrap">
            <FloatingSticker
              src={livehouse.companions.kita}
              className="project-jump"
              rotation={5}
            />
            <AssetImage
              src={livehouse.icons.kita}
              className="section-instrument"
            />
          </div>
        </Reveal>
        <div className="collection-index">
          <span>SELECT A RECORD / 选择一个主题</span>
          <span>01 — 04 · THE ARCHIVE IS GROWING</span>
        </div>
        <div className="projects-grid">
          {collections.map((collection, i) => (
            <Reveal key={collection.id} delay={i * 0.04}>
              <AlbumCard collection={collection} />
            </Reveal>
          ))}
        </div>
        <div className="setlist-footer">
          <span>EVERY RECORD KEEPS GROWING.</span>
          <SectionCharacter id="kita" />
          <span>新的故事，继续收录。 ↗</span>
        </div>
      </div>
    </section>
  );
}
