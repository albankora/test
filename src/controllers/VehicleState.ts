import { Request, Response } from "express";
import { z, ZodError } from "zod";
import { Logger } from "src/Libs/Logger";
import { ResponseBuilder } from "src/Libs/ResponseBuilder";
import { StateLogs } from "src/Repos/StateLogs";
import { Controller } from "src/Controllers/Controller";

const dataSchema = z.object({
    params: z.object({
        vehicleId: z.string({
            required_error: "vehicle id is required",
        }),
    }),
    query: z.object({
        timestamp: z.string({
            required_error: "vehicle id is required ex. 2022-09-12 10:00:00+00",
        }),
    }),
});

export class VehicleState extends Controller {
    constructor(private sateLogs: StateLogs, private logger: Logger) {
        super();
    }

    async handle(req: Request, res: Response) {
        try {
            await dataSchema.parseAsync({
                params: req.params,
                query: req.query,
            });
        } catch (error) {
            this.logger.error("validation error", error);
            if (error instanceof ZodError) return this.respond(res, new ResponseBuilder().badRequest(error.message));
        }

        const { vehicleId } = req.params;
        const { timestamp } = req.query;

        try {
            if (typeof timestamp !== "string") {
                this.logger.error("timestamp not in the right format");
                return this.respond(res, new ResponseBuilder().badRequest("not"));
            }

            const state = await this.sateLogs.findVehiclesState(parseInt(vehicleId), timestamp);

            if (state) {
                return this.respond(res, new ResponseBuilder().ok(state));
            }
        } catch (error) {
            this.logger.error("internal error", error);
            return this.respond(res, new ResponseBuilder().internalServerError(error));
        }

        this.logger.warn(`state not found for ${vehicleId}`);
        return this.respond(res, new ResponseBuilder().notFound());
    }
}
