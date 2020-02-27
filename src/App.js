/**
 * Challenge:
 * 
 * Move the "business logic" into a custom hook, which will provide
 * any parts of state and any functions to this component to use.
 * 
 * You can easily tell which parts the component needs by looking at 
 * the variables being used inside the `return`ed markup below.
 */

import React from "react"
import useGameData from "./useGameData"

function App() {   
		const {words, wordCount, updateWords, textBoxRef, timeRemaining, startedTimer, startGame, endGame} = useGameData()

    return (
        <div>
          <h1>Speed Typing Game!</h1>
          <textarea
						ref={textBoxRef}
						value={words}
						onChange={updateWords}
						disabled={!startedTimer}
						/>
          <h4>Time remaining: {timeRemaining}</h4>
					<button
						onClick={() => startGame()}
						disabled={startedTimer}
					>
						Start
					</button>
          <h1>Word count: {wordCount}</h1>
        </div>
    )
}

export default App