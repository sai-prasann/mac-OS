import React from 'react'
import "./nav.scss"
import DateTime from "./DateTime.jsx"

const nav = () => {
  return (
    <nav className='navbar'>
        <div className='left'>
            <div className="nav-elem">
                <img src="/nav-icons/apple.svg" alt="" />
            </div>
            <div className="nav-elem">
                <p>Sai Prasanna </p>
            </div>
            <div className="nav-elem">
                <p>File</p>
            </div>
            <div className="nav-elem">
                <p>Window</p>
            </div>
            <div className="nav-elem">
                <p>Terminal</p>
            </div>
        </div>
        <div className='right'>
            <div className="nav-elem">
                <img src="/nav-icons/wifi.svg" alt="" />
            </div>
            <DateTime />
        </div>
    </nav>
  )
}

export default nav
