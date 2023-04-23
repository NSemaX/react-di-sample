import { injectable } from "inversify";
import { IContext  } from "./IContext";

@injectable()
export class Context implements IContext{

  public getLogContext(context:string):string{
    return context;
  }
}
