import { ResponseBuilder } from "./ResponseBuilder";

describe("Response builder", function () {
  test('internal server error', () => {
    const res = new ResponseBuilder().internalServiceError()
    expect(res.code).toBe(500);
  });

  test("bad request", () => {
    const res = new ResponseBuilder().badRequest("the request is wrong")
    expect(res.code).toBe(400);
    expect(res.error).toBe("the request is wrong");
  });

  test("no found", () => {
    const res = new ResponseBuilder().notFound()
    expect(res.code).toBe(404);
  });

  test("no content", () => {
    const res = new ResponseBuilder().noContent()
    expect(res.code).toBe(204);
  });
});