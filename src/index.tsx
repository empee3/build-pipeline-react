import * as React from "react";
import * as ReactDOM from "react-dom";
import Counter from './components/Counter';
import ShowLogo from './components/ShowLogo';

ReactDOM.render(
  <div>
    <h1>Hello, Welcome to React and TypeScript</h1>
    <Counter />
    <ShowLogo />
  </div>,
  document.getElementById("root")
);