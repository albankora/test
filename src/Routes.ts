import express from "express";
import { Controllers } from "./controllers/Controllers";

export function buildRoutes(app: express.Express, controllers: Controllers) {
    app.get("/test", controllers.vehicleState.latest);
}