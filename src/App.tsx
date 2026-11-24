import { MotionConfig } from "framer-motion";
import { BrowserRouter, Link, Route, Routes, useLocation } from "react-router";
import { useEffect } from "react";
import { collections } from "./data/collections";
import { CollectionPage } from "./pages/CollectionPage";
import { RoomRadioProvider } from "./components/RoomRadioContext";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { StrengthsSection } from "./components/StrengthsSection";
import { ContactSection } from "./components/ContactSection";
import { MusicPlayer } from "./components/MusicPlayer";
import { ResearchSection, ResearchNews } from "./components/ResearchSection";
import { PublicationsSection } from "./components/PublicationsSection";
import { researchProjects } from "./data/research";
import { ResearchPage } from "./pages/ResearchPage";
function RoutePosition() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const collection = collections.find(
      (c) => pathname === `/${c.id}` || pathname === `/${c.id}/`,
    );
    const research = researchProjects.find(
      (p) => pathname.replace(/\/$/, "") === `/research/${p.id}`,
    );
    document.title = research
      ? `${research.title} · Xu Zirui`
      : collection
        ? `${collection.title} · Xu Zirui Digital Livehouse`
        : "Xu Zirui · Digital Livehouse";
    const frame = requestAnimationFrame(() => {
      if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
      else window.scrollTo({ top: 0, behavior: "instant" });
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);
  return null;
}

function HomePage() {
  return (
    <>
      <a className="skip-link" href="#about">
        跳到正文
      </a>
      <Navbar />
      <main>
        <HeroSection />
        <ResearchNews />
        <AboutSection />
        <ProjectsSection />
        <ResearchSection />
        <PublicationsSection />
        <StrengthsSection />
        <ContactSection />
      </main>
    </>
  );
}

export function App() {
  return (
    <MotionConfig reducedMotion="user">
      <RoomRadioProvider>
        <BrowserRouter>
          <RoutePosition />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/research/:id" element={<ResearchPage />} />
            {collections.map((c) => (
              <Route
                key={c.id}
                path={`/${c.id}`}
                element={<CollectionPage key={c.id} collection={c} />}
              />
            ))}
            <Route
              path="*"
              element={
                <main className="archive-not-found">
                  <span>404 / RECORD NOT FOUND</span>
                  <h1>这张唱片还没有上架。</h1>
                  <Link to="/#projects">返回唱片架 ↗</Link>
                </main>
              }
            />
          </Routes>
          <MusicPlayer />
        </BrowserRouter>
      </RoomRadioProvider>
    </MotionConfig>
  );
}
