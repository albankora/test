import winston from 'winston'

export type Logger = {
    debug: (message: string, args?: unknown) => void;
    info: (message: string, args?: unknown) => void;
    warn: (message: string, args?: unknown) => void;
    error: (message: string, args?: unknown) => void;
}


export function buildLogger(): Logger {
    const logger = winston.createLogger({
        level: 'debug',
        format: winston.format.json(),
        defaultMeta: { service: 'user-service' },
        transports: [
            new winston.transports.Console({
                format: winston.format.simple(),
            })
        ],
    });

    return logger
}