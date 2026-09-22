import React from 'react'
import "./doc.scss"

const doc = ({ windowState, setWindowState }) => {
    return (
        <footer className='doc-icons'>
            <div className='icons calender'>
                <img src="/doc-icons/calender.svg" alt="" />
            </div>
            <div
                onClick={() => { setWindowState(state => ({ ...state, console: true })) }}
                className='icons cli'>
                <img src="/doc-icons/cli.svg" alt="" />
            </div>
            <div className='icons link'>
                <img src="/doc-icons/link.svg" alt="" />
            </div>
            <div
                onClick={() => { setWindowState(state => ({ ...state, note: true })) }}
                className='icons note'>
                <img src="/doc-icons/note.svg" alt="" />
            </div>
            <div className='icons mail'>
                <img src="/doc-icons/mail.svg" alt="" />
            </div>
            <div
                onClick={() => { setWindowState(state => ({ ...state, pdf: true })) }}
                className='icons pdf'>
                <img src="/doc-icons/pdf.svg" alt="" />
            </div>
            <div
                onClick={() => { setWindowState(state => ({ ...state, spotify: true })) }}
                className='icons spotify'>
                <img src="/doc-icons/spotify.svg" alt="" />
            </div>
            <div
                onClick={() => { setWindowState(state => ({ ...state, github: true })) }}
                className='icons github'>
                <img src="/doc-icons/github.svg" alt="" />
            </div>
        </footer>
    )
}

export default doc
