import React from "react";
import ReactDOM from "react-dom/client";

// * React.createElement() => object => ReactDOM.createElement => HTMLelement(remder)

// * JSX = HTML like or XML like syntax
// ! this syntax cannot be understand by JS engine so Babel takes the JSX and transpiles into JavaScript before it reaches the JS engine

// ? JSX => transpile into React.createElement => React.createElement -> JS Object => HTMLelement(renders)

const heading = (
  <h1 id="heading" className="myClass">
    Hi This heading from JSX
  </h1>
);

// ! this is component composition
const HeadingComponent = () => (
  <div>
    {heading}
    <h1 id="heading2">This is functional component 🚀</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
