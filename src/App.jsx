import React from 'react'
import { useState } from 'react'
import "./app.scss"
import Doc from "./components/Doc.jsx"
import Nav from "./components/Nav.jsx"
import MacWindow from "./components/Windows/MacWindow.jsx"
import GitHub from './components/Windows/GitHub.jsx'
import Notes from './components/Windows/Notes.jsx'
import PDF from './components/Windows/PDF.jsx'
import Spotify from './components/Windows/Spotify.jsx'
import Console from './components/Windows/Console.jsx'
import github from 'react-syntax-highlighter/dist/esm/styles/hljs/github.js'


const App = () => {

  const [windowState, setWindowState] = useState({
    github: false,
    note: false,
    pdf: false,
    spotify: false,
    console: false
  })
  return (
    <main>
      <Nav />
      <Doc windowState={windowState} setWindowState={setWindowState}/>

      { windowState.github && <GitHub windowName="github" setWindowState={setWindowState} />}
      { windowState.note && <Notes windowName="note" setWindowState={setWindowState} />}
      { windowState.pdf && <PDF windowName="pdf" setWindowState={setWindowState} />}
      { windowState.spotify && <Spotify windowName="spotify" setWindowState={setWindowState} />}
      { windowState.console && <Console windowName="console" setWindowState={setWindowState} />}
    </main>
  )
}

export default App
