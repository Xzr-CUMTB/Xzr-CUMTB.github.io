import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { siteContent } from "../data/siteContent";
import { useRoomRadio } from "./RoomRadioContext";
export function LiveHouseBackground() {
  const reduced = useReducedMotion();
  const { isPlaying } = useRoomRadio();
  const [video, setVideo] = useState(false);
  useEffect(() => {
    if (reduced) return;
    const controller = new AbortController();
    fetch(siteContent.heroVideo, { method: "HEAD", signal: controller.signal })
      .then((r) =>
        setVideo(r.ok && !!r.headers.get("content-type")?.startsWith("video/")),
      )
      .catch(() => {});
    return () => controller.abort();
  }, [reduced]);
  return (
    <div
      className="livehouse-background"
      aria-hidden="true"
      data-playing={isPlaying}
    >
      {video && !reduced && (
        <video
          src={siteContent.heroVideo}
          autoPlay
          muted
          loop
          playsInline
          onError={() => setVideo(false)}
        />
      )}
      <div className="venue-grid" />
      <div className="venue-vignette" />
      <motion.div
        className="stage-light stage-light--gold"
        animate={
          reduced
            ? {}
            : {
                rotate: [-12, -2, -12],
                opacity: isPlaying ? [0.38, 0.56, 0.38] : [0.26, 0.4, 0.26],
              }
        }
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="stage-light stage-light--blue"
        animate={
          reduced ? {} : { rotate: [9, -6, 9], opacity: [0.15, 0.3, 0.15] }
        }
        transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="stage-haze" />
      <div className="paper-grain" />
      <div className="venue-halftone" />
    </div>
  );
}
