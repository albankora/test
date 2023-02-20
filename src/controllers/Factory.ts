import { dbInstance } from "../Libs/Knex";
import { loggerInstance } from "../Libs/Logger";
import { StateLogs } from "../Repos/StateLogs";
import { NotFound } from "./NotFound";
import { VehicleState } from "./VehicleState";

export type ControllerList = ReturnType<typeof buildControllerList>;

export function buildControllerList() {
    const logger = loggerInstance();
    const db = dbInstance();

    return {
        vehicleState: new VehicleState(new StateLogs(db), logger),
        notFound: new NotFound(logger),
    };
}
