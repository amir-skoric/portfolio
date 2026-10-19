// ================================================
// MUSIC - the songs in the chiptune player (in the sidebar; it follows you after you press play).
// The songs are made in FamiStudio and exported as mp3 (File > Export > MP3, 2 loops).
// To add a song: put the .mp3 in src/assets/music, import it below with "?url", and add a line to "songs".
// ================================================
import epicJack from '../assets/music/epic_jack.mp3?url'
import theChill from '../assets/music/the_chill.mp3?url'
import theNicest from '../assets/music/the_nicest.mp3?url'

export const songs = [
  { title: 'Epic Jack', file: epicJack },
  { title: 'The Chill', file: theChill },
  { title: 'The nicest', file: theNicest },
]

export const playerText = {
  da: { label: 'Min chiptune', play: 'Afspil', pause: 'Pause', prev: 'Forrige sang', next: 'Næste sang', mute: 'Slå lyd fra', unmute: 'Slå lyd til', seek: 'Spol i sangen', volume: 'Lydstyrke', close: 'Luk afspilleren og stop musikken', loading: 'Indlæser…', error: 'Kunne ikke afspille', by: 'lavet af mig', short: '♪ Min egen 8-bit musik – tryk play.', intro: 'Mine egne 8-bit numre, lavet som på en NES. Tryk play, og lyt med, mens du kigger rundt.' },
  en: { label: 'My chiptune', play: 'Play', pause: 'Pause', prev: 'Previous song', next: 'Next song', mute: 'Mute', unmute: 'Unmute', seek: 'Seek', volume: 'Volume', close: 'Close the player and stop the music', loading: 'Loading…', error: 'Could not play', by: 'made by me', short: '♪ My own 8-bit music – press play.', intro: 'My own 8-bit tracks, made the NES way. Press play and listen while you look around.' },
}
