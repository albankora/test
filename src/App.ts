import express from "express";
import { buildRoutes } from "./Routes";
import { buildControllers } from "./controllers/Controllers";

const app = express();

const controllers = buildControllers();
buildRoutes(app, controllers);

app.listen(process.env.PORT, () => {
  console.log(`Server is running at ${process.env.PORT}`);
});