// Plays the recorded songs (mp3 files exported from FamiStudio) and feeds the little level meter.
//
// How it works, step by step:
// 1. A normal <audio> element plays the file.
// 2. Its sound goes through a volume knob (gain) and an "analyser" (it measures how loud each pitch is
//    right now, which the player uses to move the level meter), then to the speakers.

// Must be called from a click (browsers only allow sound after the visitor does something).
export function createAudioEngine({ onEnd }) {
  const audio = new Audio()
  audio.preload = 'auto'
  audio.addEventListener('ended', () => onEnd?.())

  const Ctx = window.AudioContext || window.webkitAudioContext
  const ctx = new Ctx()
  const volume = ctx.createGain()
  const analyser = ctx.createAnalyser()
  analyser.fftSize = 64
  ctx.createMediaElementSource(audio).connect(volume)
  volume.connect(analyser)
  analyser.connect(ctx.destination)

  return {
    analyser,

    // Start a song from the beginning. Returns its length in ms.
    async play(url) {
      if (audio.src !== new URL(url, document.baseURI).href) audio.src = url
      audio.currentTime = 0
      await ctx.resume()
      await audio.play() // when this is done, the file has loaded far enough to know its length
      return audio.duration * 1000
    },

    pause: () => audio.pause(),
    resume: () => audio.play(),
    // Where we are in the song, in ms
    position: () => audio.currentTime * 1000,
    // Jump to a spot in the song (ms)
    seek(ms) {
      audio.currentTime = ms / 1000
    },
    setVolume(v) {
      volume.gain.value = v
    },
  }
}
