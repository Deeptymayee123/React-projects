// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  // const [count, setCount] = useState(0);
  let myObj = {
    userName: "deepti",
    age: "23",
  };

  let myArray = [1, 2, 3];
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded">tailwindcss</h1>
      <Card channel="chaiaurcode" userName="chai aur code" btnText="" />
      {/* here we pass props */}
      <Card
        channel="chaiaurcode"
        userName="hitesh chaudhury"
        btnText="visit me"
      />
    </>
  );
}

export default App;

//tailwind component.

//  <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
{
  /* <img
className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
src="../public/women_image2.png"
alt=""
width="384"
height="512"
/>
<div className="pt-6 md:p-8 text-center md:text-left space-y-4">
<blockquote>
  <p className="text-lg font-medium">
    “Tailwind CSS is the only framework that I've seen scale on large
    teams. It’s easy to customize, adapts to any design, and the build
    size is tiny.”
  </p>
</blockquote>
<figcaption className="font-medium">
  <div className="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
  <div className="text-slate-700 dark:text-slate-500">
    Staff Engineer, Algolia
  </div>
</figcaption>
</div>
</figure> */
}