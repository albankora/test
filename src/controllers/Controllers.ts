import { VehicleState } from "./VehicleState";

export type Controllers = {
    vehicleState: VehicleState
}

export function buildControllers(): Controllers {
    return {
        vehicleState: new VehicleState(),
    };
}