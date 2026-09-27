import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useRoomRadio } from "./RoomRadioContext";

const QUIET_BARS = Array.from({ length: 16 }, (_, index) => 3 + (index % 4));
const AUDIO_PATH = "/audio/room-loop.wav";

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const contextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const busyRef = useRef(false);
  const { isPlaying, setIsPlaying } = useRoomRadio();
  const [hasError, setHasError] = useState(false);
  const [busy, setBusy] = useState(false);
  const [bars, setBars] = useState(QUIET_BARS);
  const reduced = useReducedMotion();

  useEffect(() => {
    const audio = audioRef.current;
    return () => {
      audio?.pause();
      if (contextRef.current?.state !== "closed")
        void contextRef.current?.close();
      contextRef.current = null;
      analyserRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!isPlaying || reduced || !analyserRef.current) return;
    const analyser = analyserRef.current;
    const frequencies = new Uint8Array(analyser.frequencyBinCount);
    let frame = 0;
    let previous = 0;
    const update = (time: number) => {
      if (time - previous > 65) {
        analyser.getByteFrequencyData(frequencies);
        setBars(QUIET_BARS.map((_, i) => Math.max(3, frequencies[2 + i] / 18)));
        previous = time;
      }
      frame = requestAnimationFrame(update);
    };
    frame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frame);
  }, [isPlaying, reduced]);

  async function togglePlayback() {
    const audio = audioRef.current;
    if (!audio || busyRef.current) return;
    if (!audio.paused) {
      audio.pause();
      setBars(QUIET_BARS);
      return;
    }
    busyRef.current = true;
    setBusy(true);
    try {
      if (!contextRef.current) {
        const context = new AudioContext();
        const analyser = context.createAnalyser();
        analyser.fftSize = 256;
        analyser.smoothingTimeConstant = 0.85;
        context.createMediaElementSource(audio).connect(analyser);
        analyser.connect(context.destination);
        contextRef.current = context;
        analyserRef.current = analyser;
        audio.volume = 0.45;
      }
      await contextRef.current.resume();
      await audio.play();
      setHasError(false);
    } catch (error) {
      console.error(`[Room Radio] 音频播放失败：${AUDIO_PATH}`, error);
      setHasError(true);
      setIsPlaying(false);
    } finally {
      busyRef.current = false;
      setBusy(false);
    }
  }

  return (
    <motion.aside
      className="music-player"
      data-playing={isPlaying}
      aria-label="Room Radio 背景音乐"
      initial={reduced ? false : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <audio
        ref={audioRef}
        src={AUDIO_PATH}
        loop
        preload="none"
        onPlaying={() => setIsPlaying(true)}
        onPause={() => {
          setIsPlaying(false);
          setBars(QUIET_BARS);
        }}
        onError={() => {
          console.error(`[Room Radio] 缺少或无法读取音频：public${AUDIO_PATH}`);
          setHasError(true);
          setIsPlaying(false);
        }}
      />
      <div className="player-inner">
        <motion.div
          className="record-disc"
          aria-hidden="true"
          animate={isPlaying && !reduced ? { rotate: 360 } : { rotate: 0 }}
          transition={
            isPlaying && !reduced
              ? { duration: 14, ease: "linear", repeat: Infinity }
              : { duration: 0.3 }
          }
        >
          <span>XZ</span>
        </motion.div>
        <div className="player-info">
          <p className="player-label">ROOM RADIO · 01</p>
          <p className="player-title">
            {hasError ? "Audio unavailable" : "Afternoon in the Room"}
          </p>
          <div className="audio-wave" aria-hidden="true">
            {bars.map((height, i) => (
              <span
                key={i}
                style={{ height: reduced ? QUIET_BARS[i] : height }}
              />
            ))}
          </div>
        </div>
        <button
          className="play-button"
          onClick={togglePlayback}
          disabled={busy}
          aria-label={isPlaying ? "暂停背景音乐" : "播放背景音乐"}
          aria-pressed={isPlaying}
        >
          {isPlaying ? (
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="currentColor"
              aria-hidden="true"
            >
              <rect x="3" y="2" width="3" height="12" rx="1" />
              <rect x="10" y="2" width="3" height="12" rx="1" />
            </svg>
          ) : (
            <svg
              width="13"
              height="13"
              viewBox="0 0 16 16"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="m4 2 9 6-9 6V2Z" />
            </svg>
          )}
        </button>
      </div>
      <span className="sr-only" aria-live="polite">
        {hasError
          ? "音乐暂时无法播放。"
          : isPlaying
            ? "背景音乐正在播放。"
            : "背景音乐已暂停。"}
      </span>
    </motion.aside>
  );
}
