/**
 * Challenge:
 * 
 * Make the input box focus (DOM elements have a method called .focus()) 
 * immediately when the game starts
 */

import React, {useState, useEffect, useRef} from "react"

function App() {   
		const STARTING_TIME = 2
		const [words, setWords] = useState("")
		const [wordCount, setWordCount] = useState(0)
		const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME)
		const [startedTimer, setStartedTimer] = useState(false)
		let textBoxRef = useRef(null) // initialize with a null value

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
			// Because setting state is asychronous, by the time .focus() is called on the textarea, disable hasn't switched yet to false.
			// So, force the switch here, which is synchronous (happens immediately) and allows the focus() to work on the element.
			textBoxRef.current.disabled = false
			textBoxRef.current.focus()
		}

		function endGame() {
			setWordCount(getWordCount(words))
			setStartedTimer(false)
		}

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