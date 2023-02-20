# Vehicle State

We want an endpoint to deliver the state the vehicle is on based on a vehicle id and a timestamp. 

## Happy Paths
- The endpoint receives an id and a valid timestamp and response with the latest state that is at that given time

## Unhappy Paths
- The endpoint receives an id that does not exist and a valid timestamp, the response with a 404 not found
- The endpoint receives an id that exist and a invalid timestamp, the response with a 400 bad request
- The endpoint receives an id that exist without any timestamp, the response with a 400 bad request
- The endpoint receives an invalid id, the response with a 400 bad request