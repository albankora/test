import request from 'supertest';
import { buildControllerList } from '../src/controllers/Factory';
import { buildRoutes } from '../src/Routes';

const controllerList = buildControllerList();
const app = buildRoutes(controllerList);

describe('Good Home Routes', function () {

  test('responds to /', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(404);
  });
  
//   test('responds to /hello/:name', async () => {
//     const res = await request(app).get('/hello/jaxnode'); 
//     expect(res.header['content-type']).toBe('text/html; charset=utf-8');
//     expect(res.statusCode).toBe(200);
//     expect(res.text).toEqual('hello jaxnode!');
//   });

});