import { injectable } from "inversify";

export interface ILogger {
  log(message:string): void;
}


