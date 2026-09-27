import { livehouse } from "../data/livehouse";
import type { Collection } from "../data/collections";
import { AssetImage } from "./AssetImage";
import { FloatingSticker } from "./FloatingSticker";
import { FloatingGif } from "./CharacterLayer";
import { useRoomRadio } from "./RoomRadioContext";

export function CollectionScene({ collection: c }: { collection: Collection }) {
  const { isPlaying } = useRoomRadio();
  return (
    <div
      className={`collection-scene collection-scene--${c.character}`}
      aria-hidden="true"
      data-playing={isPlaying}
    >
      <div className="collection-scene-orbit" />
      <div className="scene-poster">
        <AssetImage src={livehouse.posters[c.character]} loading="eager" />
        <span />
      </div>
      <div className="scene-sketch">
        <AssetImage src={livehouse.sketches[c.character]} loading="eager" />
      </div>
      <span className="scene-volume">{c.number}</span>
      <FloatingSticker
        src={livehouse.stage[c.character]}
        className="scene-performer"
        rotation={c.character === "ryo" ? -2 : 3}
      />
      <div className="scene-gif">
        <FloatingGif id={c.character} />
        <span>KEEP THE IDEAS PLAYING</span>
      </div>
      <div className="scene-caption">
        <AssetImage src={livehouse.icons[c.character]} />
        <span>
          ONE RECORD.
          <br />
          MANY POSSIBILITIES.
        </span>
        <i />
        <i />
        <i />
      </div>
    </div>
  );
}
