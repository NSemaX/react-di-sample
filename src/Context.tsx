import { injectable } from "inversify";
import { IContext  } from "./IContext";

@injectable()
export class Context implements IContext{
  private  _context:string;

  constructor(context:string) {
    this._context = context;
  } 

  public getLogContext():string{
    return this._context;
  }

  public setLogContext(context:string):void{
    this._context= context;
  }
}
