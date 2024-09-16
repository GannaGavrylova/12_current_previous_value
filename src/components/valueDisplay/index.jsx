import styles from "./styles.module.css";
import React, { useRef, useEffect } from "react";

function ValueDisplay({ inputText, setInputText, inputRef }) {
  const previousRef = useRef("");

  const updatePreviousValue = () => {
    previousRef.current = inputText;
  };
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        updatePreviousValue();
        setInputText("");
      }
    };

    const handleClickOutside = (e) => {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        updatePreviousValue();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [inputText]);

  return (
    <div>
      <p>Current Value: {inputText}</p>
      <p>Previous Value: {previousRef.current}</p>
    </div>
  );
}

export default ValueDisplay;
