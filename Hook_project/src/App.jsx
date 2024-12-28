import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(15);

  // let counter = 10;

  const addValue = () => {
    //arrow function.
    // console.log("value added.", Math.random());
    // console.log("value added.", counter);
    // counter = counter + 1;
    if (counter < 20) {
      setCounter(counter + 1);
    } else {
      alert("value can not increased more than 20!");
    }
  };

  const removeValue = () => {
    // console.log("value removed.", counter);
    // counter = counter - 1;
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      alert("value can not dencreased from 0!");
    }
  };

  return (
    <>
      <h1>good morning</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value: {counter}</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>
    </>
  );
}

export default App;
//ui updation is controled by react.
