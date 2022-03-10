import { useState, useEffect } from "react";

export default function App() {
  const [key, setKey] = useState("");

  useEffect(() => {
    // handle what happens on key press
    const handleKeyPress = (event: KeyboardEvent) => {
      setKey(event.key);
    };

    // attach the event listener
    document.addEventListener("keydown", handleKeyPress);

    // remove the event listener
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div className="App">
      <h2>Try typing on a key</h2>
      <p>Key typed: {key}</p>
    </div>
  );
}
