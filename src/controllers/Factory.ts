import { dbInstance } from "src/libs/Knex";
import { loggerInstance } from "src/libs/Logger";
import { StateLogs } from "src/repos/StateLogs";
import { NotFound } from "src/controllers/NotFound";
import { VehicleState } from "src/controllers/VehicleState";

export type ControllerList = ReturnType<typeof buildControllerList>;

export function buildControllerList() {
    const logger = loggerInstance();
    const db = dbInstance();

    return {
        vehicleState: new VehicleState(new StateLogs(db), logger),
        notFound: new NotFound(logger),
    };
}
