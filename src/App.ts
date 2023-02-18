import { buildControllerList } from "./controllers/Factory";
import { buildRoutes } from "./Routes";

const controllerList = buildControllerList();
const app = buildRoutes(controllerList);

app.listen(process.env.PORT, () => {
  console.log(`Server is running at ${process.env.PORT}`);
});