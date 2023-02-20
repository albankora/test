import { Request, Response } from "express";
import { Logger } from "src/libs/Logger";
import { ResponseBuilder } from "src/libs/ResponseBuilder";
import { Controller } from "src/controllers/Controller";

export class NotFound extends Controller {
    constructor(private logger: Logger) {
        super();
    }

    handle(req: Request, res: Response) {
        this.logger.warn(`not found route for: ${req.originalUrl}`);
        return this.respond(res, new ResponseBuilder().notFound());
    }
}
