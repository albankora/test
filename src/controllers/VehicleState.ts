import { Request, Response } from "express";

export class VehicleState {
    handle(req: Request, res: Response ){
        res.send("hi");
    }
}