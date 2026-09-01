import { useState } from "react";

export function Input() {
  const [binary, setBinary] = useState("");

  return (
    <div
      style={{
        position: "absolute",
        top: "300px",
        left: "500px",
        width: "300px",
      }}
    >
      <label className="form-label">Input:</label>

      <input 
        type="text"
        className="form-control"
        value={binary}
        onChange={(e) => setBinary(e.target.value)}
      />
    </div>
  );
}

export function Output() {
  const [binary, setBinary] = useState("");

  return (
    <div
      style={{
        position: "absolute",
        top: "300px",
        right: "500px",
        width: "300px",
      }}
    >
      <label className="form-label">Output:</label>
      <output className="form-control">value</output>
    </div>
  );
}
