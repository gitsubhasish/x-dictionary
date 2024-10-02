import React, { useState } from "react";

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const qaList = [
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ];

  const handleSearch = () => {
    if (!question.trim()) {
      setAnswer("Word not found in the dictionary.");
      return;
    }

    // Find the word in the qaList
    const foundWord = qaList.find(
      (entry) => entry.word.toLowerCase() === question.toLowerCase()
    );

    // If word found, set the meaning, otherwise set the error message
    if (foundWord) {
      setAnswer(foundWord.meaning);
    } else {
      setAnswer("Word not found in the dictionary.");
    }
  };

  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <div className="search-container">
        <div>
          <input
            type="text"
            value={question} // Ensure input is controlled
            placeholder="Search for a word..."
            onChange={(e) => setQuestion(e.target.value)} // Update state on change
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <div>
          <span>
            <strong>Definition:</strong> {answer !== "" ? answer : null}
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
