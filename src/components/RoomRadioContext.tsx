import { createContext, useContext, useState } from "react";

type RoomRadioState = {
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
  isVideoPlaying: boolean;
  setIsVideoPlaying: (playing: boolean) => void;
};

const RoomRadioContext = createContext<RoomRadioState | null>(null);

export function RoomRadioProvider({ children }: { children: React.ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  return (
    <RoomRadioContext.Provider
      value={{ isPlaying, setIsPlaying, isVideoPlaying, setIsVideoPlaying }}
    >
      {children}
    </RoomRadioContext.Provider>
  );
}

export function useRoomRadio() {
  const state = useContext(RoomRadioContext);
  if (!state)
    throw new Error("useRoomRadio must be used within RoomRadioProvider");
  return state;
}
