import express from "express";
import { ControllerList } from "./controllers/Factory";

export function buildRoutes(controllerList: ControllerList) {
    const app = express();

    app.get("/test", (req, res) => controllerList.vehicleState.handle(req, res));

    return app;
}