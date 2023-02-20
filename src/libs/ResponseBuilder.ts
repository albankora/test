export type Response = {
    code: number;
    data: unknown;
    meta: Record<string, unknown>;
    error: Record<string, unknown>[] | string | unknown;
};

export class ResponseBuilder {
    ok(data: unknown, meta: Record<string, unknown> = {}): Response {
        return {
            code: 200,
            data,
            meta,
            error: {},
        };
    }

    created(data: Record<string, unknown>[]): Response {
        return {
            code: 201,
            data,
            meta: {},
            error: {},
        };
    }

    noContent(): Response {
        return {
            code: 204,
            data: {},
            meta: {},
            error: {},
        };
    }

    internalServerError(error: unknown): Response {
        return {
            code: 500,
            data: {},
            meta: {},
            error: { type: "InternalServerError", error },
        };
    }

    notFound(): Response {
        return {
            code: 404,
            data: {},
            meta: {},
            error: { type: "NotFound" },
        };
    }

    badRequest(error: unknown): Response {
        return {
            code: 400,
            data: {},
            meta: {},
            error: { type: "BadRequest", error },
        };
    }
}
