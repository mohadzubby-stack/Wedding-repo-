// Gentle classical harp arpeggio synthesis via Web Audio API (offline, zero-network, elegant)

let audioCtx: AudioContext | null = null;
let isAudioMuted = false;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export function toggleAudioMute(muted?: boolean): boolean {
  if (typeof muted === 'boolean') {
    isAudioMuted = muted;
  } else {
    isAudioMuted = !isAudioMuted;
  }
  return isAudioMuted;
}

export function getIsMuted(): boolean {
  return isAudioMuted;
}

/**
 * Play a delicate harp arpeggio (C Major 9 chord: C4, E4, G4, B4, D5)
 */
export function playHarpArpeggio() {
  if (isAudioMuted) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const notes = [261.63, 329.63, 392.00, 493.88, 587.33, 659.25]; // C4, E4, G4, B4, D5, E5
    const now = ctx.currentTime;

    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      // Plucked string harmonic synthesis (triangle + slight sine)
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.08);

      // Attack and gentle decay curve of a harp
      const startTime = now + idx * 0.08;
      gain.gain.setValueAtTime(0.0001, startTime);
      gain.gain.exponentialRampToValueAtTime(0.08, startTime + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 1.2);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + 1.3);
    });
  } catch {
    // Fail silently if browser audio policy blocks
  }
}

/**
 * Play subtle soft wax-breaking click / resonant bell chime
 */
export function playWaxSealClick() {
  if (isAudioMuted) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(440, now);
    osc.frequency.exponentialRampToValueAtTime(880, now + 0.08);

    gain.gain.setValueAtTime(0.05, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.3);
  } catch {
    // Fail silently
  }
}
