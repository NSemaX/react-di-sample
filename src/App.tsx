import React from 'react';
import logo from './logo.svg';
import './App.css';
import "reflect-metadata";
import { ILogger } from "./ILogger";
import { container } from "./inversify.config";
import { Logger } from './Logger';
import { IContext } from "./IContext";
import { Context } from './Context';


function App() {

  const context = container.get<IContext>("CONTEXT")
  context.getLogContext("App Context");

  const logger = container.get<ILogger>("LOGGER")
  logger.log("Hello World.")


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
      </div>
    </div>
  );
}

export default App;
