import { dbInstance } from "../libs/Knex";
import { loggerInstance } from "../libs/Logger";
import { StateLogs } from "../repos/StateLogs";
import { NotFound } from "../controllers/NotFound";
import { VehicleState } from "../controllers/VehicleState";

export type ControllerList = ReturnType<typeof buildControllerList>;

export function buildControllerList() {
    const logger = loggerInstance();
    const db = dbInstance();

    return {
        vehicleState: new VehicleState(new StateLogs(db), logger),
        notFound: new NotFound(logger),
    };
}
