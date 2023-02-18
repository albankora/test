export type Response = {
    code: number
    data: Record<string, unknown> | Record<string, unknown>[],
    meta: Record<string, unknown>,
    error: Record<string, unknown>[] | string
}

export class ResponseBuilder {

    ok(data: Record<string, unknown>[], meta: Record<string, unknown>): Response {
        return {
            code: 200,
            data,
            meta,
            error: []
        }
    }

    created(data: Record<string, unknown>[]): Response {
        return {
            code: 201,
            data,
            meta: {},
            error: []
        }
    }

    noContent(): Response {
        return {
            code: 204,
            data: {},
            meta: {},
            error: []
        }
    }

    internalServiceError(): Response {
        return {
            code: 500,
            data: {},
            meta: {},
            error: "Internal Server Error"
        }
    }

    notFound(): Response {
        return {
            code: 404,
            data: {},
            meta: {},
            error: "Not Found"
        }
    }

    badRequest(error: Record<string, unknown>[] | string): Response {
        return {
            code: 400,
            data: {},
            meta: {},
            error
        }
    }
}
