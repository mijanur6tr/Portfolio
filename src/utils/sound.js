// Web Audio API Synthesizer for Retro Windows 95 Sound Effects
// Zero external assets required, instant loading, works across all modern browsers.

let audioCtx = null;
let isMuted = false;

function getAudioContext() {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {});
  }
  return audioCtx;
}

export const getSoundMuted = () => isMuted;

export const setSoundMuted = (muted) => {
  isMuted = muted;
};

export const toggleSoundMuted = () => {
  isMuted = !isMuted;
  return isMuted;
};

// Subtle mechanical retro click
export const playClickSound = () => {
  if (isMuted) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(800, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.04);

    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.05);
  } catch (e) {
    // ignore audio block
  }
};

// Window open sound (retro cheerful rising chime)
export const playOpenSound = () => {
  if (isMuted) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    const notes = [440, 659.25, 880]; // A4, E5, A5
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.04);

      gain.gain.setValueAtTime(0.06, now + idx * 0.04);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.04 + 0.12);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + idx * 0.04);
      osc.stop(now + idx * 0.04 + 0.13);
    });
  } catch (e) {
    // ignore
  }
};

// Window close sound (descending 2-tone retro chime)
export const playCloseSound = () => {
  if (isMuted) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    const notes = [659.25, 440];
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.04);

      gain.gain.setValueAtTime(0.05, now + idx * 0.04);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.04 + 0.1);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + idx * 0.04);
      osc.stop(now + idx * 0.04 + 0.11);
    });
  } catch (e) {
    // ignore
  }
};

// Classic Win95 startup synthesizer chime
export const playStartupChime = () => {
  if (isMuted) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    // Harmonic frequencies simulating the famous Brian Eno Win95 chords:
    // Eb maj7 / Ab maj9 atmospheric harmonics
    const chords = [
      { t: 0.0, freqs: [311.13, 466.16, 622.25] },     // Eb4, Bb4, Eb5
      { t: 0.4, freqs: [392.00, 587.33, 783.99] },     // G4, D5, G5
      { t: 0.9, freqs: [466.16, 698.46, 932.33] },     // Bb4, F5, Bb5
      { t: 1.5, freqs: [523.25, 783.99, 1046.50] },    // C5, G5, C6
      { t: 2.2, freqs: [622.25, 932.33, 1244.51] },    // Eb5, Bb5, Eb6
    ];

    chords.forEach((chord) => {
      chord.freqs.forEach((freq) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + chord.t);

        gain.gain.setValueAtTime(0.04, now + chord.t);
        gain.gain.exponentialRampToValueAtTime(0.001, now + chord.t + 1.8);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + chord.t);
        osc.stop(now + chord.t + 2.0);
      });
    });
  } catch (e) {
    // ignore
  }
};
