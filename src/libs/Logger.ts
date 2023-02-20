import winston from "winston";

export type Logger = {
    debug: (message: string, args?: unknown) => void;
    info: (message: string, args?: unknown) => void;
    warn: (message: string, args?: unknown) => void;
    error: (message: string, args?: unknown) => void;
};

export function loggerInstance(): Logger {
    const logger = winston.createLogger({
        level: "debug",
        format: winston.format.json(),
        transports: [
            new winston.transports.Console({
                format: winston.format.simple(),
            }),
        ],
    });

    return logger;
}
