import { Request, Response } from "express";
import { Logger } from "../libs/Logger";
import { ResponseBuilder } from "../libs/ResponseBuilder";
import { StateLogs } from "../repos/StateLogs";
import { Controller } from "./Controller";

export class VehicleState extends Controller {
    constructor(private sateLogs: StateLogs, private logger: Logger) {
        super()
    }

    handle(req: Request, res: Response) {
        this.sateLogs.findVehicleState();
        this.logger.info("aaaaa", { aaaa: "aaaaa" })

        this.respond(res, new ResponseBuilder().noContent())
    }
}
