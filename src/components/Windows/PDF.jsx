import React from 'react'
import MacWindow from './MacWindow'
import "./pdf.scss";
const PDF = ({ windowName, setWindowState}) => {
  return (
    <MacWindow windowName={windowName} setWindowState={setWindowState}>
        <div className="pdf-window">
            <iframe src="/Resume.pdf#toolbar=1&navpanes=1&scrollbar=1" frameBorder="0"></iframe>
        </div>
    </MacWindow>
  )
}

export default PDF
