import express from "express";
import { ControllerList } from "./controllers/Factory";

export function buildRoutes(app: express.Express, controllerList: ControllerList) {
    app.get("/test", controllerList.vehicleState.handle);
}