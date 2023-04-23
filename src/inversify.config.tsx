import { Container } from "inversify";
import { Logger } from "./Logger";
import { ILogger } from "./ILogger";
import { Context } from "./Context";
import { IContext } from "./IContext";


const container = new Container();
container.bind<ILogger>("LOGGER").to(Logger);
container.bind<IContext>("CONTEXT").to(Context);

export { container }