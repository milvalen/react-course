import React from "react"
import Die from "./Die"
import {nanoid} from "nanoid"

export default function App() {
/**
 * Challenge: Create a function `holdDice` that takes
 * `id` as a parameter. For now, just have the function
 * console.log(id).
 * 
 * Then, figure out how to pass that function down to each
 * instance of the Die component so when each one is clicked,
 * it logs its own unique ID property. (Hint: there's more
 * than one way to make that work, so just choose whichever
 * you want)
 * 
 */

    const [dice, setDice] = React.useState(allNewDice())
    
    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push({
                value: Math.ceil(Math.random() * 6),
                isHeld: false,
                id: nanoid()
            })
        }
        return newDice
    }
    
    function holdDice(id) {
        console.log(id)
    }
    
    function rollDice() {
        setDice(allNewDice())
    }
    
    const diceElements = dice.map(die => (
        <Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={() => holdDice(die.id)} />
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