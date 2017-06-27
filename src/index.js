import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import CommandManager from "./command/CommandManager";

const undoLimit = 3;
const commandManager = new CommandManager(undoLimit);

ReactDOM.render(
  <App
      commandManager={commandManager}
  />,
  document.getElementById('root')
);
