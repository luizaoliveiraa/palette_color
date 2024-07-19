import { useState } from "react";
import "./App.css";
import { BytesColor } from "./components/palleteColors.jsx";

function App() {
  const [change, setChange] = useState(false);
  return (
    <div className="App">
      <div className="div-app"
     
      >
        <h1 className="h1">Bytes4Coolors</h1>
        <button
          className="btn-gerar-cor"
          onClick={() => {
            setChange((prev) => !prev);
          }}
        >
          generate a random palette
        </button>
      </div>
      <BytesColor change={change} />
      <BytesColor change={change} />
      <BytesColor change={change} />
      <BytesColor change={change} />
      <BytesColor change={change} />
    </div>
  );
}

export default App;
