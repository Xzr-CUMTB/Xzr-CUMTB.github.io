import { useState } from "react";
import { siteContent } from "../data/siteContent";
import { Reveal } from "./Reveal";
import { SectionCharacter } from "./CharacterLayer";
import { Icon } from "./Icon";
import { livehouse } from "../data/livehouse";
import { AssetImage } from "./AssetImage";
import { PosterWall } from "./PosterWall";
import { TicketBadge } from "./TicketBadge";
export function ContactSection() {
  const [copyState, setCopyState] = useState("");
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(siteContent.email);
      setCopyState("邮箱已复制");
    } catch {
      setCopyState("请选中下方邮箱地址复制");
    }
  }
  return (
    <section
      id="contact"
      className="contact-section theme-bocchi"
      aria-labelledby="contact-title"
    >
      <div className="contact-grain paper-grain" />
      <div className="shell contact-inner">
        <Reveal>
          <p className="eyebrow">05 / AFTER THE SHOW · THE BACKSTAGE</p>
          <span className="ending-note">また、会いましょう。</span>
          <h2 id="contact-title">
            故事还没结束。
            <br />
            下一段，<em>一起写吧</em>
            <span>。</span>
          </h2>
          <p className="contact-message">
            关于研究、设计，或一个还没成形的想法。
            <br />
            很高兴，在这个小小的房间里遇见你。
          </p>
          <div className="contact-actions">
            <a
              className="button button-dark"
              href={`mailto:${siteContent.email}`}
            >
              Say hello <Icon name="mail" />
            </a>
            <a
              className="contact-github"
              href={siteContent.github}
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="github" /> GitHub <Icon size={16} />
            </a>
          </div>
          <div className="email-line">
            <a href={`mailto:${siteContent.email}`}>{siteContent.email}</a>
            <button onClick={copyEmail} aria-label="复制邮箱">
              <Icon name="copy" size={17} />
            </button>
          </div>
          <p className="copy-status" role="status">
            {copyState}
          </p>
        </Reveal>
        <div className="ending-art" aria-hidden="true">
          <div className="backstage-wall">
            <PosterWall variant="backstage" />
            <span className="backstage-lamp" />
            <div className="message-board">
              <small>LEAVE A SIGNAL</small>
              <p>
                好想法，
                <br />
                值得一起聊聊。
              </p>
              <span>To: the next collaborator ↗</span>
            </div>
            <div className="guitar-case">
              <AssetImage src={livehouse.mark} />
              <AssetImage src={livehouse.icons.bocchi} />
            </div>
            <AssetImage
              src={livehouse.companions.bocchi}
              className="backstage-bocchi"
            />
            <div className="backstage-bench" />
            <SectionCharacter id="bocchi" />
            <TicketBadge
              label="SEE YOU AT THE NEXT SHOW"
              detail="THANK YOU FOR BEING HERE"
            />
          </div>
        </div>
        <footer className="footer-ending">
          <a className="wordmark" href="#home">
            <span className="brand-star">✳</span>
            <span>Xu Zirui.</span>
          </a>
          <AssetImage src={livehouse.wordmark} className="footer-band-mark" />
          <AssetImage src={livehouse.memory} className="footer-memory" />
          <span>
            © {new Date().getFullYear()} · Made with curiosity & a little music.
          </span>
          <a href="#home">
            Back to top <Icon size={15} />
          </a>
        </footer>
      </div>
    </section>
  );
}
