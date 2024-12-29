import { useState } from "react";

function Counter() {
  let [Counter, setCount] = useState(0);

  const addNumber = () => {
    setCount((Counter) => Counter + 1);
    setCount((Counter) => Counter + 1);
    setCount((Counter) => Counter + 1);
    setCount((Counter) => Counter + 1);
    console.log(Counter);
  };

  const removeNumber = () => {
    setCount((Counter) => Counter - 1);
    setCount((Counter) => Counter - 1);
    setCount((Counter) => Counter - 1);
    setCount((Counter) => Counter - 1);
  };

  return (
    <div>
      <h1>Counter Number {Counter}</h1>
      <button onClick={addNumber}>Add number: {Counter}</button>
      <br /> <br />
      <button onClick={removeNumber}>Remove number: {Counter}</button>
    </div>
  );
}

export default Counter;
