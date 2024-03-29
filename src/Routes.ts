import express from "express";
import { buildControllerList } from "./controllers/Factory";

export function buildRoutes() {
    const app = express();
    app.use(express.json({ limit: "5MB" }));
    const controllerList = buildControllerList();

    app.get("/vehicle/:vehicleId", (req, res) => controllerList.vehicleState.handle(req, res));

    //this has to be the last route
    app.use("*", (req, res) => controllerList.notFound.handle(req, res));

    return app;
}
