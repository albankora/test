import { VehicleState } from "./VehicleState";

export type ControllerList = {
    vehicleState: VehicleState
}

export function build(): ControllerList {
    return {
        vehicleState: new VehicleState(),
    };
}