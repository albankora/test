import { Request, Response } from "express";
import { Logger } from "../Libs/Logger";
import { ResponseBuilder } from "../Libs/ResponseBuilder";
import { Controller } from "./Controller";

export class NotFound extends Controller {
    constructor(private logger: Logger) {
        super();
    }

    handle(req: Request, res: Response) {
        this.logger.warn(`not found route for: ${req.originalUrl}`);
        return this.respond(res, new ResponseBuilder().notFound());
    }
}
