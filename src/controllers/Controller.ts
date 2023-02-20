import { Request, Response as ExpressResponse } from "express";
import { Response } from "src/Libs/ResponseBuilder";

export abstract class Controller {
    respond(res: ExpressResponse, response: Response) {
        res.status(response.code).json(response);
    }

    abstract handle(req: Request, res: ExpressResponse): void;
}
