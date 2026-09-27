import { createContext, useContext, useState } from "react";

type RoomRadioState = {
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
};

const RoomRadioContext = createContext<RoomRadioState | null>(null);

export function RoomRadioProvider({ children }: { children: React.ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <RoomRadioContext.Provider value={{ isPlaying, setIsPlaying }}>
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
