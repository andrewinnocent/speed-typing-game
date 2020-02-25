/**
 * Challenge:
 * 
 * 1. Create state to hold the current value of the countdown timer.
 *    Display this time in the "Time Remaining" header
 * 2. Set up an effect that runs every time the `timeRemaining` changes
 *    The effect should wait 1 second, then decrement the `timeRemaining` by 1
 * 
 *    Hint: use `setTimeout` instead of `setInterval`. This will help you avoid
 *    a lot of extra work.
 * 
 *    Warning: there will be a bug in this, but we'll tackle that next (AI note: The bug is an infinite loop of render/useEffect.)
 * 3. Make it so the effect won't run if the time is already at 0
 */

import React, {useState, useEffect} from "react"

function App() {   
		const [words, setWords] = useState("")
		const [timeRemaining, setTimeRemaining] = useState(5)

		function updateWords(e) {
			const {value} = e.target
			setWords(value)
		}

		useEffect(() => {
			let timeoutId
			if (timeRemaining > 0) {
				timeoutId = setTimeout(() => {
				setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 1)
			}, 1000)}
			
			return () => clearTimeout(timeoutId)
			
		}, [timeRemaining]) 


		function getWordsCount(str) {
			return str.split(" ")
            .filter(n => n !== "")
            .length;
		}
		
    return (
        <div>
          <h1>Speed Typing Game!</h1>
          <textarea value={words} onChange={updateWords}/>
          <h4>Time remaining: {timeRemaining}</h4>
          <button onClick={() => console.log(getWordsCount(words))}>Start</button>
          <h1>Word count: [x]</h1>
        </div>
    )
}

export default App