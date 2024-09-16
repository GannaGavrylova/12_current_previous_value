import "./App.css";
import React, { useState, useRef, useEffect } from "react";
import ValueDisplay from "./components/valueDisplay";

function App() {
  const [inputText, setInputText] = useState(""); // текущее значение

  const focusRef = useRef(null);
  const inputRef = useRef(null);

  // Фокусируемся на input при первом рендере
  useEffect(() => {
    if (focusRef.current) {
      focusRef.current.focus();
    }
  }, []);

  return (
    <div className="App">
      <h1>Current and Previous Value</h1>
      <input
        ref={inputRef}
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />

      <ValueDisplay
        inputText={inputText}
        setInputText={setInputText}
        inputRef={inputRef}
      />
    </div>
  );
}

export default App;

// function handleChange(e) {
//   setInputText(e.target.value); // обновляем текущее значение
// }

// function handleChange() {
//   if (inputRef.current) setInputText(inputRef.current.value);
// }
// console.log(inputText);
