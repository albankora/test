import { Request, Response as ExpressResponse } from "express";
import { Response } from "../libs/ResponseBuilder";

export abstract class Controller {
    respond(res: ExpressResponse, response: Response) {
        res.status(response.code).send(response)
    }

    paginate(total: number, page: number, perPage: number) {
        return {
            total,
            page,
            perPage,
            lastPage: Math.ceil(total / perPage)
        }
    }

    abstract handle(req: Request, res: ExpressResponse): void;
}