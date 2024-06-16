import NewStore from "./application/usecase/NewStore";
import { ExpressAdapter } from "./infra/http/HttpServer";
import StoreController from "./infra/http/StoreController";
import { StoreDAODatabase } from "./infra/repository/StoreDAO";

const httpServer = new ExpressAdapter();
const newStore = new NewStore(new StoreDAODatabase());
new StoreController(httpServer, newStore); 

httpServer.listen(3000);