import { Knex, knex as knexConnect } from "knex";

const config = {
    client: "pg",
    connection: {
        host: process.env.POSTGRES_HOST,
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
    },
};

export function dbInstance(): Knex {
    return knexConnect(config as Knex.Config);
}
