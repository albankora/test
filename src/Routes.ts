import express from "express";
import { ControllerList } from "./controllers/Factory";

export function buildRoutes(app: express.Express, controllerList: ControllerList) {
    app.get("/test", (req, res) => controllerList.vehicleState.handle(req, res));

}