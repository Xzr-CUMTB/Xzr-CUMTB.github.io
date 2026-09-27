"""Render a small original instrumental loop for the homepage Room Radio.

No external audio files or Python packages are needed. Run this script again
after changing the notes or instruments to regenerate public/audio/room-loop.wav.
"""

from math import exp, pi, sin, tanh
from pathlib import Path
from random import Random
from struct import pack
import wave

SAMPLE_RATE = 22_050
SECONDS = 24
BEAT = 0.75  # 80 bpm
TOTAL = SAMPLE_RATE * SECONDS
samples = [0.0] * TOTAL
rng = Random(2026)


def frequency(midi: int) -> float:
    return 440.0 * 2 ** ((midi - 69) / 12)


def add_note(start: float, duration: float, midi: int, volume: float, kind: str) -> None:
    """Add a gently shaped note, wrapping tails to make the file loop cleanly."""
    count = int(duration * SAMPLE_RATE)
    start_index = int(start * SAMPLE_RATE)
    hz = frequency(midi)

    for index in range(count):
        t = index / SAMPLE_RATE
        phase = 2 * pi * hz * t

        if kind == "pluck":
            envelope = min(1.0, t / 0.012) * exp(-2.8 * t)
            tone = sin(phase) + 0.38 * sin(2 * phase) + 0.13 * sin(3 * phase)
        elif kind == "melody":
            envelope = min(1.0, t / 0.025) * exp(-1.65 * t)
            tone = sin(phase) + 0.2 * sin(2 * phase) + 0.06 * sin(4 * phase)
        elif kind == "bass":
            envelope = min(1.0, t / 0.03) * exp(-1.4 * t)
            tone = sin(phase) + 0.16 * sin(2 * phase)
        else:  # soft pad
            attack = min(1.0, t / 0.45)
            release = min(1.0, (duration - t) / 1.0)
            envelope = max(0.0, attack * release)
            tone = sin(phase) + 0.14 * sin(2 * phase)

        samples[(start_index + index) % TOTAL] += volume * envelope * tone


chords = [
    [48, 52, 55, 59],  # Cmaj7
    [45, 48, 52, 55],  # Am7
    [41, 45, 48, 52],  # Fmaj7
    [43, 47, 50, 57],  # Gadd9
]

for chord_index, chord in enumerate(chords):
    start = chord_index * 6
    for pitch in chord:
        add_note(start, 6.45, pitch, 0.016, "pad")

for beat_index in range(32):
    chord = chords[beat_index // 8]
    start = beat_index * BEAT
    note = chord[[0, 2, 1, 3, 0, 2, 1, 2][beat_index % 8]] + 12
    add_note(start, 1.65, note, 0.078, "pluck")
    if beat_index % 4 == 0:
        add_note(start, 1.9, chord[0] - 12, 0.10, "bass")

melody = [
    (0.75, 76), (2.25, 79), (3.75, 71), (5.25, 67),
    (6.75, 72), (8.25, 76), (9.75, 67), (11.25, 64),
    (12.75, 69), (14.25, 72), (15.75, 76), (17.25, 72),
    (18.75, 74), (20.25, 71), (21.75, 69), (23.25, 67),
]

for start, pitch in melody:
    add_note(start, 1.6, pitch, 0.057, "melody")

# A barely audible brush on beats two and four adds a human rhythm.
for beat_index in range(32):
    if beat_index % 4 not in (1, 3):
        continue
    start_index = int(beat_index * BEAT * SAMPLE_RATE)
    for index in range(int(0.09 * SAMPLE_RATE)):
        t = index / SAMPLE_RATE
        sample = rng.uniform(-1, 1) * exp(-48 * t) * 0.009
        samples[(start_index + index) % TOTAL] += sample

# Soft saturation keeps occasional overlapping notes from sounding sharp.
peak = max(abs(sample) for sample in samples)
gain = 0.72 / peak
output = Path(__file__).resolve().parents[1] / "public" / "audio" / "room-loop.wav"
output.parent.mkdir(parents=True, exist_ok=True)

with wave.open(str(output), "wb") as file:
    file.setnchannels(1)
    file.setsampwidth(2)
    file.setframerate(SAMPLE_RATE)
    file.writeframes(b"".join(pack("<h", int(tanh(sample * gain) * 32767)) for sample in samples))

print(f"Wrote {output} ({SECONDS}s)")
