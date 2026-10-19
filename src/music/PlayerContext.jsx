import { createContext, useContext, useEffect, useRef, useState } from 'react'
import { songs } from '../data/music'
import { createAudioEngine } from './audioEngine'

// The "brain" of the chiptune player: which song, play/pause, time, volume.
// It wraps the whole site (main.jsx). The player you see (ChiptunePlayer.jsx) just shows this and sends clicks here.
// The player's home is the sidebar. Once you press play it follows you: when the sidebar player is
// scrolled out of view (phones, or short windows), a floating copy shows at the bottom of the screen,
// until you pause it in the sidebar or close it with the X.

const START_VOLUME = 0.5 // NES music can be loud; start at half volume
const PlayerContext = createContext(null)
export const usePlayer = () => useContext(PlayerContext)

export function PlayerProvider({ children }) {
  const engine = useRef(null)
  const [index, setIndex] = useState(0)
  const [state, setState] = useState('idle') // idle | loading | playing | paused | error
  const [time, setTime] = useState(0)
  const [length, setLength] = useState(0)
  const [volume, setVolume] = useState(START_VOLUME)
  const [muted, setMuted] = useState(false)
  // "following": after the visitor presses play, the player follows you down the page.
  // The X on the floating player turns it off again (and stops the music).
  const [following, setFollowing] = useState(false)
  // Is the player in the sidebar on screen right now? (set by ChiptunePlayer.jsx)
  // The floating copy is only needed when it isn't.
  const [homeVisible, setHomeVisible] = useState(true)
  const seeking = useRef(false) // true while the visitor drags the seek bar

  // Start song number i
  const start = async (i) => {
    setFollowing(true)
    // The sound engine is made on the first click (browsers only allow sound after a click)
    if (!engine.current) engine.current = createAudioEngine({ onEnd: () => next.current() })
    engine.current.setVolume(muted ? 0 : volume)
    setIndex(i)
    setTime(0)
    setState('loading')
    try {
      setLength(await engine.current.play(songs[i].file))
      setState('playing')
    } catch {
      setState('error')
    }
  }
  const go = (step) => start((index + step + songs.length) % songs.length)
  // When a song ends, play the next one (kept in a ref so the engine always calls the newest version)
  const next = useRef(() => {})
  next.current = () => go(1)

  // Play / pause. "floating" = the click came from the floating player.
  // Pausing in the sidebar means "I'm done listening", so the player stops following you.
  // Pausing the floating player keeps it on screen, so you can start it again (or close it with the X).
  const toggle = async (floating = false) => {
    if (state === 'playing') {
      engine.current.pause()
      setState('paused')
      if (!floating) setFollowing(false)
    } else if (state === 'paused') {
      setFollowing(true)
      await engine.current.resume()
      setState('playing')
    } else if (state !== 'loading') {
      start(index)
    }
  }

  // The X on the floating player: stop the music and stop following.
  // (The player is still in the sidebar; pressing play there starts it again.)
  const close = () => {
    if (state === 'playing') {
      engine.current.pause()
      setState('paused')
    }
    setFollowing(false)
  }

  // Seek bar: jump to that spot in the song
  const seek = (ms) => {
    setTime(ms)
    engine.current?.seek(ms)
  }

  // Volume slider + mute button. Dragging the slider up also turns mute off.
  const changeVolume = (v) => {
    setVolume(v)
    setMuted(v === 0)
    engine.current?.setVolume(v)
  }
  const toggleMute = () => {
    const nowMuted = !muted && volume > 0
    setMuted(nowMuted)
    engine.current?.setVolume(nowMuted ? 0 : volume || START_VOLUME)
    if (!nowMuted && volume === 0) setVolume(START_VOLUME)
  }

  // While playing: update the time 4 times a second (not while the seek bar is being dragged)
  useEffect(() => {
    if (state !== 'playing') return
    const timer = setInterval(() => {
      if (!seeking.current) setTime(engine.current.position())
    }, 250)
    return () => clearInterval(timer)
  }, [state])

  const value = {
    song: songs[index], index, count: songs.length, state, time, length, volume, muted,
    following, homeVisible, setHomeVisible,
    showFloating: following && !homeVisible, // the floating copy at the bottom of the screen
    toggle, go, seek, changeVolume, toggleMute, close, seeking,
    analyser: () => engine.current?.analyser, // for the level meter
  }
  return <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>
}
