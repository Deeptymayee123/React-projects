import React from "react"; //react- A core foundational library takes all references.
import ReactDOM from "react-dom/client"; //reactDOM - it is an implementation of react in web.
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")); //react create its own dom called virtual DOM where, in html div id root.
//then take virtual dom reference to a root variable.
root.render(
  // <React.StrictMode>
  // {/* React.StrintMode is a react property. */}
  <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
