import { inject, injectable } from "inversify";
import { ILogger  } from "./ILogger";
import * as IContext from "./IContext";


@injectable()
export class Logger implements ILogger {
  private  _logcontext: IContext.IContext

  public constructor(
    @inject("CONTEXT") logcontext: IContext.IContext
    ) {
    this._logcontext = logcontext;
  } 

  log(message:string): void {
    console.log(this._logcontext+' '+message)
  }
}


