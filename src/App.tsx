import React from 'react';
import logo from './logo.svg';
import './App.css';
import "reflect-metadata";
import { ILogger } from "./ILogger";
import { container } from "./inversify.config";
import { Logger } from './Logger';
import { IContext } from "./IContext";
import { Context } from './Context';
import {Injector} from "./Injector";
import {Injector1} from "./Injector1";


function App() {

  /*const context = container.get<IContext>("CONTEXT")
  context.setLogContext("App Context");

  console.log(context.getLogContext())

  const logger = container.get<ILogger>("LOGGER")
  logger.log("Hello World.") */

  const context = new Context("");

  Injector1.register('lcontext', "sema");

  const logger = Injector.resolve<ILogger>(Logger);
  logger.log("test");


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
