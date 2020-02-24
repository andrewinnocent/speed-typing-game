/**
 * Challenge: Using hooks, track the state of the text in the textarea on every keystroke
 * To verify it's working, you could just console.log the state on every change
 */
import React, {useState} from "react"

function App() {   
		const [words, setWords] = useState("")

		function updateWords(e) {
			const {value} = e.target
			setWords(value)
		}

		function getWordsCount(str) {
			return str.split(" ")
            .filter(n => n !== "")
            .length;
		}
		
    return (
        <div>
          <h1>Speed Typing Game!</h1>
          <textarea value={words} onChange={updateWords}/>
          <h4>Time remaining: [seconds]</h4>
          <button onClick={() => console.log(getWordsCount(words))}>Start</button>
          <h1>Word count: [x]</h1>
        </div>
    )
}

export default App