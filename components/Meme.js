import React from "react"

export default function Meme() {
    return (
        <form>
            <input className="form--input" placeholder="Top text field"/>
            <input className="form--input" placeholder="Bottom text field"/>
            <button className="form--button">Get a new meme image  🖼</button>
        </form>
    )
}