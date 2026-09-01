import Title from "./page";
import { ConFrom, ConTo } from "./dropdown";
import { Input } from "./input";

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

function App() {
  return (
    <div className="container">
      <Title />
      <ConFrom />
      <Input />
      <ConTo />
      <Button />
    </div>
  );
}

export default App;
