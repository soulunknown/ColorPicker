import { useState } from "react";
import "./index.css";

const Color = ({ color, setSelectedColor, isSelected }) => {
  const classNames = isSelected ? `${color} selected` : color;
  return (
    <div className={classNames} onClick={() => setSelectedColor(color)}></div>
  );
};

const App = () => {
  const [selectedColor, setSelectedColor] = useState("");
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color
          color="red"
          setSelectedColor={setSelectedColor}
          isSelected={selectedColor === "red"}
        />
        <Color
          color="violet"
          setSelectedColor={setSelectedColor}
          isSelected={selectedColor === "violet"}
        />
        <Color
          color="blue"
          setSelectedColor={setSelectedColor}
          isSelected={selectedColor === "blue"}
        />
      </div>
    </div>
  );
};

export default App;
