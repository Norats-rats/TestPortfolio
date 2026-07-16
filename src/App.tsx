import { useState } from 'react'

import './App.css'

function App() {


  return (
    <div style ={{ textAlign: "center", padding:"30px", fontFamily:"math"}}>
        <h1>My Portfolio</h1>

        <div style={{ marginTop: "30px"}}>
            <h2>About Me</h2>
            <p>
                Hello, I am Man Lance Isaac. A 4th year student SY2026-2027 that is enrolled in NU-MOA under the BSIT-MWA course. Currently i am 20 as of the date that this portfolio has been last updated (2026).
            </p>

            <h2>My Sample Outputs:</h2>
            <ul style={{ listStyle: "none", padding:"20"}}>
                <li>Github: https://github.com/Norats-rats</li>
                <li>Capstone Group Project Output: https://www.ecclsync.org/</li>
            </ul>

            <h2>My Hobbies</h2>
            <ul style={{ listStyle: "none", padding:"0"}}>
                <li>Tokusatsu</li>
                <li>Cooking</li>
                <li>Gaming</li>
                <li>Sculpting Model pieces</li>
                <li>Building Scale Models</li>
            </ul>

            <h2>My Coding Skills Include:</h2>
            <ul style={{ listStyle: "none", padding:"0"}}>
                <li>Simple HTML</li>
                <li>JavaScript</li>
                <li>CSS</li>
                <li>ReactJS</li>
                <li>React Vite</li>
                <li>Basic Python</li>
            </ul>
        </div>
    </div>

)
}

export default App
