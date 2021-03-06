// Require module
import express from "express";
import bodyParser from "body-parser";
import { AddressInfo } from 'net'
import { addBasicRoutes } from "./routes/routes";
import { addAdminRoutes } from "./routes/adminRoutes";
import { addHealthRouts } from "./routes/healthRoute";

// Express Initialize
const app = express();

// Add routes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

addBasicRoutes(app);
addAdminRoutes(app);
addHealthRouts(app);

const server = app.listen(3000, () => {
    const {port} = server.address() as AddressInfo;
    // tslint:disable-next-line:no-console
    console.log("Listening on port %s...", port);
});