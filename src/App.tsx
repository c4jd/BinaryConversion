import {Title, Body} from "./page";
import { ConFrom, ConTo } from "./dropdown";
import { Input, Output } from "./input";


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
      <Body />
      <ConFrom />
      <Input />
      <Output />
      <ConTo />
      <Button />
    </div>
  );
}

export default App;
