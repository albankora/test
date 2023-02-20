import { Request, Response } from "express";
import { Logger } from "../libs/Logger";
import { ResponseBuilder } from "../libs/ResponseBuilder";
import { Controller } from "../controllers/Controller";

export class NotFound extends Controller {
    constructor(private logger: Logger) {
        super();
    }

    handle(req: Request, res: Response) {
        this.logger.warn(`not found route for: ${req.originalUrl}`);
        return this.respond(res, new ResponseBuilder().notFound());
    }
}
