import express from "express";
import { build } from "./controllers/Factory";
import { buildRoutes } from "./Routes";

const app = express();

const controllerList = build();
buildRoutes(app, controllerList);

app.listen(process.env.PORT, () => {
  console.log(`Server is running at ${process.env.PORT}`);
});