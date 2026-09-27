import { useEffect, useState } from "react";
import { navigation } from "../data/siteContent";
import { Icon } from "./Icon";
import { AssetImage } from "./AssetImage";
import { livehouse } from "../data/livehouse";
export function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -55% 0px" },
    );
    navigation.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  return (
    <header className={`navbar ${active === "home" ? "navbar--live" : ""}`}>
      <div className="nav-inner shell">
        <a className="wordmark" href="#home" aria-label="Xu Zirui 返回首页">
          <span className="brand-star">✳</span>
          <span>
            XZ<span className="wordmark-dot">.</span>
            <small>DIGITAL LIVEHOUSE</small>
          </span>
        </a>
        <AssetImage
          src={livehouse.mark}
          className="nav-band-mark"
          loading="eager"
        />
        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="site-navigation"
        >
          {open ? "Close" : "Menu"} <span>{open ? "−" : "+"}</span>
        </button>
        <nav
          id="site-navigation"
          className={open ? "nav-links is-open" : "nav-links"}
          aria-label="主导航"
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              setOpen(false);
              document
                .querySelector<HTMLButtonElement>(".menu-toggle")
                ?.focus();
            }
          }}
        >
          {navigation.map((item, i) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={active === item.id ? "location" : undefined}
              onClick={() => setOpen(false)}
            >
              <small>0{i + 1}</small>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="nav-contact" href="#contact">
          Say hello <Icon size={16} />
        </a>
      </div>
    </header>
  );
}
