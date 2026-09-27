export type CharacterId = "nijika" | "bocchi" | "ryo" | "kita";
export type Character = {
  id: CharacterId;
  name: string;
  image: string;
  gif: string;
  color: string;
  section: string;
  lift: number;
  playingLift: number;
  sway: number;
};
export const characters: Record<CharacterId, Character> = {
  nijika: {
    id: "nijika",
    name: "伊地知虹夏",
    image: "/characters/nijika-pixel.png",
    gif: "/gifs/nijika-idle.gif",
    color: "#edc74a",
    section: "about",
    lift: 3,
    playingLift: 6,
    sway: 0.6,
  },
  bocchi: {
    id: "bocchi",
    name: "后藤独",
    image: "/characters/bocchi-pixel.png",
    gif: "/gifs/bocchi-idle.gif",
    color: "#e6a6be",
    section: "contact",
    lift: 1,
    playingLift: 1.6,
    sway: 0.4,
  },
  ryo: {
    id: "ryo",
    name: "山田凉",
    image: "/characters/ryo-pixel.png",
    gif: "/gifs/ryo-idle.gif",
    color: "#799bb7",
    section: "strengths",
    lift: 0.6,
    playingLift: 0.8,
    sway: 0,
  },
  kita: {
    id: "kita",
    name: "喜多郁代",
    image: "/characters/kita-pixel.png",
    gif: "/gifs/kita-idle.gif",
    color: "#e87969",
    section: "projects",
    lift: 2,
    playingLift: 4,
    sway: 1.2,
  },
};
export const bandOrder: CharacterId[] = ["bocchi", "ryo", "nijika", "kita"];
