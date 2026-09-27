import { PosterWall } from "./PosterWall";
import { CharacterPerformance } from "./CharacterPerformance";
import { AssetImage } from "./AssetImage";
import { FloatingGif } from "./CharacterLayer";
import { livehouse } from "../data/livehouse";
import { useRoomRadio } from "./RoomRadioContext";
export function MusicStage() {
  const { isPlaying } = useRoomRadio();
  return (
    <div className="music-stage" data-playing={isPlaying}>
      <div className="stage-wall-label">
        <span>LIVE AT MY LITTLE CORNER</span>
        <AssetImage src={livehouse.mark} loading="eager" />
      </div>
      <PosterWall />
      <div className="lighting-truss" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
      </div>
      <div className="stage-floor" aria-hidden="true">
        <span>MAKE SOME MEANING.</span>
      </div>
      <svg
        className="stage-equipment"
        viewBox="0 0 650 580"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="ampMesh"
            width="5"
            height="5"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r=".6" fill="#c1b697" opacity=".3" />
          </pattern>
        </defs>
        <g>
          <rect
            x="34"
            y="355"
            width="115"
            height="121"
            rx="5"
            fill="#30332c"
            stroke="#81785b"
            strokeWidth="2"
          />
          <rect x="43" y="379" width="97" height="88" fill="url(#ampMesh)" />
          <path d="M50 365h29" stroke="#d8c185" strokeWidth="3" />
          <circle cx="119" cy="365" r="3" fill="#efd078" />
          <circle cx="126" cy="365" r="2" fill="#e77756" />
        </g>
        <g opacity=".9">
          <rect
            x="423"
            y="293"
            width="90"
            height="130"
            rx="4"
            fill="#333d42"
            stroke="#748c99"
          />
          <circle cx="468" cy="339" r="25" stroke="#72858b" />
          <circle cx="468" cy="394" r="18" stroke="#72858b" />
        </g>
        <g className="stage-drums">
          <circle
            cx="299"
            cy="434"
            r="57"
            fill="#be7b40"
            stroke="#c6b58a"
            strokeWidth="4"
          />
          <circle cx="299" cy="434" r="48" fill="#ede3c6" />
          <circle cx="299" cy="434" r="34" stroke="#d4c09a" />
          <path
            d="m255 472-8 30m99-30 6 30m-142-92v98m178-109v105"
            stroke="#bbb095"
            strokeWidth="3"
          />
          <ellipse cx="211" cy="405" rx="46" ry="8" fill="#d4b15e" />
          <ellipse cx="389" cy="388" rx="41" ry="7" fill="#bfa067" />
          <rect
            x="252"
            y="363"
            width="66"
            height="32"
            rx="7"
            fill="#b6774d"
            stroke="#d8c49b"
            strokeWidth="2"
          />
          <ellipse cx="285" cy="363" rx="32" ry="7" fill="#eee4cd" />
          <path
            className="drumstick drumstick--one"
            d="m255 348 24 21"
            stroke="#e9d6a9"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            className="drumstick drumstick--two"
            d="m313 345-20 23"
            stroke="#e9d6a9"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </g>
        <g>
          <path
            d="m526 346-5 165m-25 4h52m-21-167 20-19"
            stroke="#c3b496"
            strokeWidth="3"
          />
          <rect
            x="543"
            y="320"
            width="25"
            height="9"
            rx="4"
            fill="#cfc4a7"
            transform="rotate(-40 543 320)"
          />
        </g>
        <path
          d="M69 484c-8 38 79 65 172 52s165 21 255-2 103-6 122 12"
          stroke="#928774"
          strokeWidth="2"
        />
        <path d="m53 512 83-5 10 26-92 8Z" fill="#32382f" stroke="#6a7057" />
        <path d="m419 529 85-11 17 26-91 10Z" fill="#2e3637" stroke="#627474" />
      </svg>
      <CharacterPerformance />
      <div className="stage-gif stage-gif--one">
        <FloatingGif id="nijika" />
        <small>ONE, TWO…</small>
      </div>
      <div className="stage-gif stage-gif--two">
        <FloatingGif id="bocchi" />
      </div>
      <span className="stage-front-note">
        REHEARSAL IN PROGRESS <i />
      </span>
    </div>
  );
}
