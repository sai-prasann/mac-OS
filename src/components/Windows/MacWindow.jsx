import React from 'react'
import { Rnd } from 'react-rnd'
import './macwindow.scss'

const MacWindow = ({ children, width="400", height="300", windowName, setWindowState }) => {
  return (
    <Rnd
      default={{
        width: width,
        height: height,
        x: 100,
        y: 50,
      }}
    >
      <div className="mac-window">
          <div className="navbar">
              <div className="buttons">
                  <div 
                  onClick={()=> setWindowState(state=>({...state, [windowName]: false}))}
                  className="button close"></div>
                  <div className="button minimize"></div>
                    <div className="button maximize"></div>
                </div>
                <div className="title">
                    <p>prasannacheedi-zsh</p>
                </div>
            </div>
            <div className="main-content">
                {children}
            </div>
        </div>
    </Rnd>
  )
}

export default MacWindow
