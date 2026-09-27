import type { CharacterId } from "./characters";

const asset = (path: string) => `/assets/${path}`;
export const livehouse = {
  mark: asset("logos/kessoku-mark.svg"),
  wordmark: asset("logos/kessoku-wordmark.svg"),
  colors: asset("icons/four-colors.svg"),
  icons: {
    nijika: asset("icons/drums.svg"),
    bocchi: asset("icons/guitar.svg"),
    ryo: asset("icons/bass.svg"),
    kita: asset("icons/vocal.svg"),
  },
  stage: {
    nijika: asset("characters/nijika-stage.png"),
    bocchi: asset("characters/bocchi-stage.png"),
    ryo: asset("characters/ryo-stage.png"),
    kita: asset("characters/kita-stage.png"),
  } satisfies Record<CharacterId, string>,
  companions: {
    nijika: asset("characters/nijika-jump.png"),
    bocchi: asset("characters/bocchi-rest.png"),
    ryo: asset("characters/ryo-rest.png"),
    kita: asset("characters/kita-jump.png"),
  },
  memory: asset("characters/band-memory.png"),
  posters: {
    nijika: asset("posters/bd-nijika.webp"),
    bocchi: asset("posters/bd-bocchi.webp"),
    ryo: asset("posters/bd-ryo.webp"),
    kita: asset("posters/bd-kita.webp"),
  },
  livePosters: ["bocchi", "nijika", "ryo", "kita"].map((id) =>
    asset(`posters/live-${id}.webp`),
  ),
  albums: [
    "kessoku",
    "into-the-light",
    "re-re",
    "youth",
    "never-forget",
    "nothing-wrong",
    "live",
  ].map((id) => asset(`albums/${id}.webp`)),
  sketches: {
    nijika: asset("sketches/nijika.webp"),
    bocchi: asset("sketches/bocchi.webp"),
    ryo: asset("sketches/ryo.webp"),
    kita: asset("sketches/kita.webp"),
  },
};
export const studioTools = [
  "Python",
  "JavaScript",
  "D3.js",
  "Three.js",
  "AI Agent",
  "Data Visualization",
];
