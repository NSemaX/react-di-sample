import { injectable } from "inversify";

export interface IContext {
    getLogContext(): string;
    setLogContext(context:string): void;
  }