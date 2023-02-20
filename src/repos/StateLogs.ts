import { Knex } from "knex";

type StateLogsRecord = {
    vehicleId: number;
    state: string;
    timestamp: string;
};

const TABLE = "stateLogs";

export class StateLogs {
    constructor(private db: Knex) {}

    async findVehiclesState(id: number, timestamp: string): Promise<StateLogsRecord | undefined> {
        return await this.db<StateLogsRecord>(TABLE)
            .where("vehicleId", "=", id)
            .andWhere("timestamp", "<=", timestamp)
            .orderBy("timestamp", "desc", "first")
            .first();
    }
}
