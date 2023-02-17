import express, { Request, Response } from "express";
import { Services } from "./Services";

export function buildRoutes(app: express.Express, services: Services) {
    app.get("/test", (req: Request, res: Response ) => {
        services.vehicleState.latestState()
        res.send("hi");
      });
}