import { injectable } from "inversify";

export interface IContext {
    getLogContext(context:string): string;
  }