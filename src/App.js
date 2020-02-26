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
		const [words, setWords] = useState("")
		const [timeRemaining, setTimeRemaining] = useState(2)
		const [startedTimer, setStartedTimer] = useState(false)

		function updateWords(e) {
			const {value} = e.target
			setWords(value)
		}

		useEffect(() => {
			let timeoutId

			if (timeRemaining > 0 && startedTimer) {
				timeoutId = setTimeout(() => {
				setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 1)
			}, 1000)} else if (!timeRemaining) {
				console.log('time is up!')
				setStartedTimer(false)
			}

			return () => clearTimeout(timeoutId)
			
		}, [startedTimer, timeRemaining]) 


		function getWordsCount(str) {
			return str.split(" ")
            .filter(n => n !== "")
            .length;
		}

		function beginTimer() {
			setStartedTimer(true)
			if (!timeRemaining) setTimeRemaining(2)
		}
		
    return (
        <div>
          <h1>Speed Typing Game!</h1>
          <textarea value={words} onChange={updateWords}/>
          <h4>Time remaining: {timeRemaining}</h4>
          <button onClick={() => beginTimer()}>Start</button>
          <h1>Word count: {!timeRemaining ? getWordsCount(words) : 0}</h1>
        </div>
    )
}

export default App