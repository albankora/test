import request from "supertest";
import { buildRoutes } from "../src/Routes";

const app = buildRoutes();

describe("Good Home Routes", function () {

    test("test 404 routes", async () => {
        const res = await request(app).get(`/vehicle/3?timestamp=${encodeURIComponent('2022-09-12 10:00:00+00')}`);
        expect(res.body).toEqual({"code":200,"data":{"vehicleId":3,"state":"selling","timestamp":"2022-09-11T23:21:38.000Z"},"meta":{},"error":{}});
    });
});
