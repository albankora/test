import { VehicleState } from "./services/VehicleState";

export type Services = {
    vehicleState: VehicleState
}

export function buildServices(): Services {
    return {
        vehicleState: new VehicleState(),
    };
}