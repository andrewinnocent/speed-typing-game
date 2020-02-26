
/**
 * Challenge:
 * 
 * Make it so clicking the Start button starts the timer instead of it starting on refresh
 * (Hint: use a new state variable to indicate if the game should be running or not)
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
			console.log(startedTimer)
			let timeoutId
			if (timeRemaining > 0 && startedTimer) {
				timeoutId = setTimeout(() => {
				setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 1)
			}, 1000)} else if(!timeRemaining) {
				setStartedTimer(false)
			}
			
			return () => clearTimeout(timeoutId)
			
		}, [startedTimer, timeRemaining]) 


		// function getWordsCount(str) {
		// 	return str.split(" ")
    //         .filter(n => n !== "")
    //         .length;
		// }


    return (
        <div>
          <h1>Speed Typing Game!</h1>
          <textarea value={words} onChange={updateWords}/>
          <h4>Time remaining: {timeRemaining}</h4>
          <button onClick={() => setStartedTimer(true)}>Start</button>
          <h1>Word count: [x]</h1>
        </div>
    )
}

export default App