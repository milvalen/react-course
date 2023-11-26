import React from "react"

export default function Header() {
    return (
        <header>
            <div className="header--logo">
                <img alt="" className="logo--trollface" src="images/troll-face.png" />
                <p className="logo--text">Meme Generator</p>
            </div>
            <p className="header--text">React Course - Project 3</p>
        </header>
    )
}