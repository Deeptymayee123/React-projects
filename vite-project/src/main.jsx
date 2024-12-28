import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
// function MyApp() {
//   return (
//     <div>
//       <h1>Custom app</h1>
//     </div>
//   );
// }
// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit google",
// };
const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit google
  </a>
);
createRoot(document.getElementById("root")).render(anotherElement);
//
//  {/* this is jsx syntax.(done by bundler) bcz react does not understand js it understands jsx .it parse function html into js object*/}
// createRoot(document.getElementById("root")).render(MyApp()); //it also shows same result.
// light weight, bcz vite remove react script, testing library.
//it creates a root we pass here our document then it render App, so App is a simple fun where we write some jsx.
