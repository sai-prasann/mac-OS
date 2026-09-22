import React from 'react'
import MacWindow from './MacWindow'
import "./spotify.scss"

const Spotify = ({ windowName, setWindowState}) => {
  return (
    <MacWindow width='400' height='400' windowName={windowName} setWindowState={setWindowState}>
        <div className="spotify-window">
            <iframe data-testid="embed-iframe" style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/album/3ukkRHDHbN8tNRPKsGZR1h?utm_source=generator&theme=0&si=ce073e60c2964110" 
            width="100%" height="352" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
    </MacWindow>
  )
}

export default Spotify
