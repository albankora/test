Install requirements:
 - docker (https://docs.docker.com/get-docker/)

To initialize this project, run `docker-compose up` from the root of this project. This will build and seed the database. By default the database runs on port `5432` and is also exposed on `5432`, if you want to change this you can update `docker-compose.yml`.

## Run test
After you have both services build and running

For unit tests
```bash
docker run --rm -i api-dev yarn test
```

For integration tests
```bash
docker run --rm --network host -e PORT=3000 -e POSTGRES_HOST=0.0.0.0 -e POSTGRES_USER=user -e POSTGRES_PASSWORD=password -e POSTGRES_DB=motorway -i api-dev yarn test:integration
```