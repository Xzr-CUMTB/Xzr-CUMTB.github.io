import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { siteContent } from "../data/siteContent";
import { livehouse } from "../data/livehouse";
import { LiveHouseBackground } from "./LiveHouseBackground";
import { MusicStage } from "./MusicStage";
import { TicketBadge } from "./TicketBadge";
import { AssetImage } from "./AssetImage";
import { Icon } from "./Icon";
export function HeroSection() {
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const driftX = useSpring(x, { stiffness: 45, damping: 24 });
  const driftY = useSpring(y, { stiffness: 45, damping: 24 });
  return (
    <section
      id="home"
      className="hero livehouse-hero"
      aria-labelledby="hero-heading"
      onPointerMove={(event) => {
        if (reduced || event.pointerType !== "mouse") return;
        const r = event.currentTarget.getBoundingClientRect();
        x.set(((event.clientX - r.left) / r.width - 0.5) * 14);
        y.set(((event.clientY - r.top) / r.height - 0.5) * 8);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      <LiveHouseBackground />
      <div className="venue-topline shell">
        <span>
          <i /> A PERSONAL LIVEHOUSE ON THE INTERNET
        </span>
        <span>BEIJING, CN / EST. IN CURIOSITY</span>
      </div>
      <div className="hero-grid shell">
        <motion.div
          className="hero-copy"
          initial={reduced ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-issue">
            <span>VOL. 01</span>
            <p>
              研究，也是一场
              <br />
              持续发生的现场。
            </p>
          </div>
          <h1 id="hero-heading">
            <span>
              Xu Zirui<span className="name-period">.</span>
            </span>
            <small>
              DIGITAL <b>LIVEHOUSE</b>
            </small>
          </h1>
          <p className="hero-identity">{siteContent.identity}</p>
          <p className="hero-intro">
            把复杂问题写成研究，把想法做成作品。
            <br />
            在这里，让好奇心发出一点声音。
          </p>
          <div className="hero-actions">
            <a className="button button-yellow" href="#projects">
              进入我的现场 <Icon />
            </a>
            <a className="text-link" href="#contact">
              Let's connect <Icon size={16} />
            </a>
          </div>
          <div className="role-strip">
            {siteContent.roles.map((role) => (
              <span key={role}>{role}</span>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="hero-stage"
          style={{ x: reduced ? 0 : driftX, y: reduced ? 0 : driftY }}
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <MusicStage />
          <TicketBadge
            label="ALL IDEAS WELCOME"
            detail="ONE ROOM / ENDLESS POSSIBILITIES"
            className="hero-ticket"
          />
        </motion.div>
      </div>
      <div className="hero-bottom shell">
        <a href="#about">
          <span className="scroll-line" /> SCROLL TO THE NEXT TRACK{" "}
          <Icon name="down" size={14} />
        </a>
        <div className="hero-records" aria-hidden="true">
          {livehouse.albums.slice(0, 3).map((src) => (
            <AssetImage key={src} src={src} />
          ))}
          <span>
            A LITTLE MUSIC.
            <br />A LOT OF POSSIBILITY.
          </span>
        </div>
        <span className="hero-track-number">
          SIDE A <i /> 01 / 05
        </span>
      </div>
    </section>
  );
}
