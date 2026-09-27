import { motion, useReducedMotion } from "framer-motion";
import { AssetImage } from "./AssetImage";
export function FloatingSticker({
  src,
  className = "",
  rotation = -6,
}: {
  src: string;
  className?: string;
  rotation?: number;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={`floating-sticker ${className}`}
      aria-hidden="true"
      animate={
        reduced
          ? {}
          : { y: [0, -4, 0], rotate: [rotation, rotation + 1, rotation] }
      }
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      whileHover={
        reduced
          ? {}
          : { y: -7, rotate: 0, transition: { duration: 0.2, repeat: 0 } }
      }
    >
      <AssetImage src={src} />
    </motion.div>
  );
}
