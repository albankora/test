import { buildRoutes } from "src/Routes";

const app = buildRoutes();

app.listen(process.env.PORT, () => {
    console.log(`Server is running at ${process.env.PORT}`);
});
