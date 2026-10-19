import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/theme.css'
import './styles/layout.css'
import App from './App.jsx'
import { PlayerProvider } from './music/PlayerContext'

// PlayerProvider: the music player's "brain" wraps the whole site, so both players (sidebar + floating) share it
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PlayerProvider>
      <App />
    </PlayerProvider>
  </StrictMode>,
)
