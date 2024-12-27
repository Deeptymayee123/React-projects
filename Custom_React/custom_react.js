//it creates a root we pass here our document then it render App, so App is a simple fun where we write some jsx.

function customRender(reactElement, mainContent) {
  //   //inject here all element
  //   const domElement = document.createElement(reactElement.type);
  //   domElement.innerHTML = reactElement.children;
  //   //set attributes
  //   domElement.setAttribute("href", reactElement.props.href);
  //   domElement.setAttribute("target", reactElement.props.target);
  //   mainContent.appendChild(domElement); //now add all in mainContent i.e in html.

  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    if (prop === "children") {
      continue;
    }
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  mainContent.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};
const mainContent = document.querySelector("#root");
//then we want to render it.

customRender(reactElement, mainContent);
