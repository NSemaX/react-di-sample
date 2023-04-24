
import {Service} from "./ServiceDecorator";
import {Injector} from "./Injector";
import { ILogger  } from "./ILogger";
import * as IContext from "./IContext";
import { container } from "./inversify.config";
import {Injector1} from "./Injector1";


@Service()
export class Logger implements ILogger {

  private  _logcontext:IContext.IContext;


  constructor(public logcontext: IContext.IContext) {
    let user = Injector1.getRegistered('lcontext');
    console.log(user)

    this._logcontext=logcontext;
    console.log(this._logcontext)
  } 

  log(message:string): void {
    console.log(this._logcontext+' '+message)
  }
}


