import express from "express";
import { buildRoutes } from "./Routes";
import { build } from "./controllers/Factory";

const app = express();

const controllerList = build();
buildRoutes(app, controllerList);

app.listen(process.env.PORT, () => {
  console.log(`Server is running at ${process.env.PORT}`);
});