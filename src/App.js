/**
 * Challenge:
 * 
 * When the timer reaches 0, count the number of words the user typed in 
 * and display it in the "Word count" section
 * 
 * After the game ends, make it so the user can click the Start button again
 * to play a second time
 */

import React, {useState, useEffect} from "react"

function App() {   
		const STARTING_TIME = 2
		const [words, setWords] = useState("")
		const [wordCount, setWordCount] = useState(0)
		const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME)
		const [startedTimer, setStartedTimer] = useState(false)

		function updateWords(e) {
			const {value} = e.target
			setWords(value)
		}

		useEffect(() => {
	
			if (timeRemaining > 0 && startedTimer) {
				const timeoutId = setTimeout(() => {
					setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 1)
				}, 1000)
				return () => clearTimeout(timeoutId)
			} else if (!timeRemaining) {
				endGame()
			}

		}, [startedTimer, timeRemaining]) 


		function getWordCount(str) {
			return str.split(" ")
            .filter(n => n !== "")
            .length;
		}

		function startGame() {
			setStartedTimer(true)
			setTimeRemaining(STARTING_TIME)
			setWordCount(0)
			setWords("")
		}

		function endGame() {
			setWordCount(getWordCount(words))
			setStartedTimer(false)
		}

    return (
        <div>
          <h1>Speed Typing Game!</h1>
          <textarea value={words} onChange={updateWords}/>
          <h4>Time remaining: {timeRemaining}</h4>
          <button onClick={() => startGame()}>Start</button>
          <h1>Word count: {wordCount}</h1>
        </div>
    )
}

export default App