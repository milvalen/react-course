import React from "react"
import Die from "./Die"
import {nanoid} from "nanoid"

export default function App() {
/**
 * Challenge: Add conditional styling to the Die component
 * so that if it's held (isHeld === true), its background color
 * changes to a light green (#59E391)
 * 
 * Remember: currently the Die component has no way of knowing
 * if it's "held" or not.
 */

    const [dice, setDice] = React.useState(allNewDice())
    
    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push({
                value: Math.ceil(Math.random() * 6), 
                isHeld: true,
                id: nanoid()
            })
        }
        return newDice
    }
    
    function rollDice() {
        setDice(allNewDice())
    }
    
    const diceElements = dice.map(die => (
        <Die isHeld={die.isHeld} key={die.id} value={die.value} />
    ))
    
    return (
        <main>
            <div className="dice-container">
                {diceElements}
            </div>
            <button className="roll-dice" onClick={rollDice}>Roll</button>
        </main>
    )
}