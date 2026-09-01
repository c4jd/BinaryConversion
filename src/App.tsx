import Title from "./page";
import { ConFrom, ConTo } from "./dropdown";
import { Input, Output } from "./input";
import { useState } from "react";

function Button() {
  return (
    <button
      className="btn btn-primary"
      style={{
        position: "absolute",
        top: "120px",
        left: "865px",
      }}
    >
      Convert
    </button>
  );
}

const [binary, setBinary] = useState("");
async function handleConvert() {
  try {
    const response = await fetch("http://localhost:5173/convert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ binary }),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    setBinary(data.convertedValue);
  } catch (error) {
    console.error("Error during conversion:", error);
  }
}

function App() {
  return (
    <div className="container">
      <Title />
      <ConFrom />
      <Input />
      <Output />
      <ConTo />
      <Button />
    </div>
  );
}

export default App;
