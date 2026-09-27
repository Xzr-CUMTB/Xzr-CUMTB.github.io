import { useState } from "react";
import { useReducedMotion } from "framer-motion";
import { characters, type CharacterId } from "../data/characters";

const failedPaths = new Set<string>();
export function CharacterArtwork({
  id,
  gif = false,
  className = "",
  eager = false,
}: {
  id: CharacterId;
  gif?: boolean;
  className?: string;
  eager?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  const character = characters[id];
  const src = gif ? character.gif : character.image;
  if (failed) return null;
  return (
    <img
      src={src}
      width={gif ? 128 : 1024}
      height={gif ? 128 : 1536}
      alt=""
      draggable={false}
      loading={eager ? "eager" : "lazy"}
      data-character-image={id}
      data-asset-kind={gif ? "gif" : "png"}
      className={`character-art ${gif ? "line-gif" : ""} ${className}`}
      onError={() => {
        if (!failedPaths.has(src)) {
          console.error(
            `[Digital Room] ${character.name} 素材加载失败：${src}，请检查 public${src}。`,
          );
          failedPaths.add(src);
        }
        setFailed(true);
      }}
    />
  );
}
export function FloatingGif({
  id,
  className = "",
}: {
  id: CharacterId;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return reduced ? null : (
    <span className={`floating-gif ${className}`} aria-hidden="true">
      <CharacterArtwork id={id} gif eager />
    </span>
  );
}
export function SectionCharacter({
  id,
  className = "",
}: {
  id: CharacterId;
  className?: string;
}) {
  return (
    <div className={`section-character ${className}`} aria-hidden="true">
      <CharacterArtwork id={id} />
      <FloatingGif id={id} />
    </div>
  );
}
