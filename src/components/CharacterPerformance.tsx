import { motion, useReducedMotion } from "framer-motion";
import { characters, bandOrder } from "../data/characters";
import { livehouse } from "../data/livehouse";
import { useRoomRadio } from "./RoomRadioContext";
import { AssetImage } from "./AssetImage";
export function CharacterPerformance() {
  const { isPlaying } = useRoomRadio();
  const reduced = useReducedMotion();
  return (
    <div
      className="performance-layer"
      data-playing={isPlaying}
      aria-hidden="true"
    >
      {bandOrder.map((id, i) => {
        const c = characters[id];
        return (
          <div
            key={id}
            className={`performer performer--${id}`}
            data-hero-character={id}
          >
            <span className="performer-shadow" />
            <motion.div
              animate={
                reduced
                  ? {}
                  : {
                      y: [0, -(isPlaying ? c.playingLift : c.lift), 0],
                      rotate: [0, c.sway * 0.45, 0],
                    }
              }
              transition={{
                duration: 4.5 + i * 0.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <AssetImage
                src={livehouse.stage[id]}
                className="performance-art"
                loading="eager"
                data-character-image={id}
              />
            </motion.div>
            <div className="performance-beats">
              <i />
              <i />
              <i />
            </div>
          </div>
        );
      })}
    </div>
  );
}
