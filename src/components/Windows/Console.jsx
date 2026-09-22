import React from 'react'
import MacWindow from './MacWindow'
import TerminalModule from 'react-console-emulator'
import './console.scss'

const Terminal = TerminalModule.default ?? TerminalModule;

const Console = ({ windowName, setWindowState}) => {
    const commands = {
        echo: {
            description: 'Echo a passed string.',
            usage: 'echo <string>',
            fn: (...args) => args.join(' ')
        },
        about: {
            description: 'Short info about this portfolio.',
            usage: 'about',
            fn: () => 'This is a demo portfolio terminal showcasing dummy commands.'
        },
        projects: {
            description: 'List sample projects.',
            usage: 'projects',
            fn: () => [
                '1) Portfolio Website - A responsive personal site.',
                '2) Weather App - Fetches weather data from an API.',
                '3) Task Manager - A simple todo application.'
            ]
        },
        skills: {
            description: 'List example skills.',
            usage: 'skills',
            fn: () => 'JavaScript, React, CSS, Node.js'
        },
        contact: {
            description: 'Show contact information.',
            usage: 'contact',
            fn: () => 'Email: you@yourdomain.com | Twitter: @yourhandle'
        },
        resume: {
            description: 'Link to a resume (dummy).',
            usage: 'resume',
            fn: () => 'Resume: https://example.com/resume.pdf'
        },
    };

    const welcomeMessage = [
        'Welcome to the portfolio terminal!',
        `Available commands: ${Object.keys(commands).join(', ')}`,
        "Type 'help' to get more details on each command."
    ].join('\n');

    return (
        <MacWindow windowName={windowName} setWindowState={setWindowState}>
            <div className="console-window">
                <Terminal
                    commands={commands}
                    welcomeMessage={welcomeMessage}
                    promptLabel="prasannacheedi:~$"
                    promptLabelStyle={{ color: '#ffbf00' }}
                />
            </div>
        </MacWindow>
    )
}

export default Console
