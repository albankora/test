import { buildLogger } from "../libs/log/logger";
import { StateLogs } from "../repos/StateLogs";
import { VehicleState } from "./VehicleState";

export type ControllerList = ReturnType<typeof build>;

export function build() {
    const logger = buildLogger()

    return {
        vehicleState: new VehicleState(new StateLogs(), logger),
    };
}