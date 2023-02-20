import { ResponseBuilder } from "src/Libs/ResponseBuilder";

describe("Response builder", function () {
    test("internal server error", () => {
        const res = new ResponseBuilder().internalServerError("something went wrong");
        expect(res.code).toBe(500);
        expect(res.error).toEqual({ error: "something went wrong", type: "InternalServerError" });
    });

    test("bad request", () => {
        const res = new ResponseBuilder().badRequest("the request is wrong");
        expect(res.code).toBe(400);
        expect(res.error).toEqual({ error: "the request is wrong", type: "BadRequest" });
    });

    test("no found", () => {
        const res = new ResponseBuilder().notFound();
        expect(res.code).toBe(404);
        expect(res.error).toEqual({ type: "NotFound" });
    });

    test("no content", () => {
        const res = new ResponseBuilder().noContent();
        expect(res.code).toBe(204);
    });
});
