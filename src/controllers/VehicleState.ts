import { Request, Response } from "express";
import { Logger } from "../libs/log/logger";
import { StateLogs } from "../repos/StateLogs";

export class VehicleState {
    constructor(private sateLogs: StateLogs, private logger: Logger) { }

    handle(req: Request, res: Response) {
        this.sateLogs.findVehicleState();
        this.logger.info("aaaaa", {aaaa: "aaaaa"})
        res.send("hi");
    }
}