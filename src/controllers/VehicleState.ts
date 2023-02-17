import { Request, Response } from "express";

export class VehicleState {
    latest(req: Request, res: Response ){
        res.send("hi");
    }
}