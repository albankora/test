import express from "express";
import { buildRoutes } from "./Routes";
import { buildServices } from "./Services";

const app = express();

const services = buildServices();
buildRoutes(app, services);

app.listen(process.env.PORT, () => {
  console.log(`Server is running at ${process.env.PORT}`);
});