import request from "supertest";
import { buildRoutes } from "src/Routes";

const app = buildRoutes();
const server = app.listen(3000);

afterAll(() => {
    server.close()
})


describe("Vehicle state endpoint", function () {
    test("Test correct response", async () => {
        const res = await request(app).get(`/vehicle/3?timestamp=${encodeURIComponent("2022-09-12 10:00:00+00")}`);
        expect(res.body).toEqual({
            code: 200,
            data: { vehicleId: 3, state: "selling", timestamp: "2022-09-11T23:21:38.000Z" },
            meta: {},
            error: {},
        });
    });
});
