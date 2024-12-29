import { useState } from "react";

function BgColor() {
  let [color, setColor] = useState();

  setColor = () => {
    let hex = "0123456789ABCDEF";
    color = "#";
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const changeColor = () => {
    document.body.style.backgroundColor = setColor();
    console.log("clicked");
  };

  return (
    <div>
      <h1>Change color</h1>

      <button onClick={changeColor}>Change</button>
    </div>
  );
}

export default BgColor;
