

export function Input() {

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
        className="form-control">Binary</input>
    </div>
  );
}

export function Output() {
;

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
