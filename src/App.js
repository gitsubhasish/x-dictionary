import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

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
    // Find the word in the wordList
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
            placeholder="Search for a word..."
            onChange={(e) => setQuestion(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <div>
          <span>
            <strong>Definition : </strong>
            {answer != "" ? answer : null}
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
