import { useState, useCallback, useEffect, useRef } from "react";

import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumber] = useState(false);
  const [charAllowed, setChar] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(); //it can take reference of any element in webpage.like password.

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*{}[]-_~";

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1); //it gives index value of array.
      console.log(char);

      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);
  // useCallback is responsible for "optimize", "memorize", optimize or "save it in catch memory" if there is any change in dependency array.

  const CopyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select(); //here user can see selected password string.we can also give the range.
    passwordRef.current.setSelectionRange(0, 8); //set range

    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  //useEffect responsible only if ther is any change then "run" it again.
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-2 text-white bg-slate-300">
        <h1 className="text-black text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-x-hidden mb-4 my-3">
          <br />
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          ></input>
          <button
            onClick={CopyPasswordToClipBoard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2  text-black">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
              // now the value is changed when u click range.
            />
            <label>length {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            {/* injecting variable length by {} */}
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumber((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {
                setChar((prev) => !prev);
              }}
              //reverse the previous value i.e (prev) to !prev.Now it flips true or false.if prev value is ture it gona false viceversa.
            />
            <label htmlFor="charInput">Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

//read documentation i.e Quick start.-->Reference--> callBack.
// Def: useCallBack is a React Hook that lets you cache a function definition between re-renders.
//readOnly: for no can can write in input text.
//must read hook i.e useState, useEffect, useCallback, useRef from documentation or w3school.
// passwordRef.current?.select(); //here user can see selected password string.we can also give the range.
// passwordRef.current?.setSelectionRange(0, 8); //set range
