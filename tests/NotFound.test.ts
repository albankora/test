import request from "supertest";
import { buildRoutes } from "../src/Routes";

const app = buildRoutes();
const server = app.listen(3000);

afterAll(() => {
    server.close()
})

describe("Not found routes", function () {
    test("test 404 routes", async () => {
        const res = await request(app).get("/").expect(404);
        expect(res.body).toEqual({ code: 404, data: {}, error: { type: "NotFound" }, meta: {} });
    });
});
