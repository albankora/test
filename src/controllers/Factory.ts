import { dbInstance } from "src/Libs/Knex";
import { loggerInstance } from "src/Libs/Logger";
import { StateLogs } from "src/Repos/StateLogs";
import { NotFound } from "src/Controllers/NotFound";
import { VehicleState } from "src/Controllers/VehicleState";

export type ControllerList = ReturnType<typeof buildControllerList>;

export function buildControllerList() {
    const logger = loggerInstance();
    const db = dbInstance();

    return {
        vehicleState: new VehicleState(new StateLogs(db), logger),
        notFound: new NotFound(logger),
    };
}
