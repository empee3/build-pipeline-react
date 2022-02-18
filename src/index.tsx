import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Counter from './components/Counter';
import ShowLogo from './components/ShowLogo';
import './index.scss';

ReactDOM.render(
  <div className="root">
    <h1 className="h1">Hello, Welcome to React and TypeScript Demo</h1>
    <ShowLogo />
    <Counter />
  </div>,
  document.getElementById('root'),
);
