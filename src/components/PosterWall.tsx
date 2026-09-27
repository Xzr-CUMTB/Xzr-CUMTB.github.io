import { motion, useReducedMotion } from "framer-motion";
import { livehouse } from "../data/livehouse";
import { AssetImage } from "./AssetImage";

export function PosterWall({
  variant = "stage",
}: {
  variant?: "stage" | "backstage";
}) {
  const reduced = useReducedMotion();
  const posters =
    variant === "stage"
      ? livehouse.livePosters
      : [
          livehouse.sketches.bocchi,
          livehouse.albums[3],
          livehouse.sketches.kita,
        ];
  const angles = variant === "stage" ? [-9, 4, -5, 9] : [-10, 5, 11];
  return (
    <div className={`poster-wall poster-wall--${variant}`} aria-hidden="true">
      {posters.map((src, i) => (
        <motion.div
          className={`wall-poster wall-poster--${i + 1}`}
          key={src}
          animate={
            reduced
              ? { y: 0, rotate: angles[i] }
              : {
                  y: [0, -3, 0],
                  rotate: [angles[i], angles[i] + 0.6, angles[i]],
                }
          }
          transition={{ duration: 8 + i, repeat: Infinity, ease: "easeInOut" }}
        >
          <AssetImage
            src={src}
            loading={variant === "stage" ? "eager" : "lazy"}
          />
          <span className="poster-tape" />
        </motion.div>
      ))}
    </div>
  );
}
