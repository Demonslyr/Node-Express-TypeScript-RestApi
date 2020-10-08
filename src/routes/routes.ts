import { checkJwt } from "../middleware/jwtAuth";
import { v4 as uuid } from 'uuid';
import md5 from "md5";
import { logger } from "../logging/logger";

const addBasicRoutes = (app: any) => {

    // Root hello world with info log
    app.get("/", checkJwt, (req: any, res: any) => {
        logger.info("Hello world called!")
        res.send("Hello World");
    });

    app.get("/guid", (req: any, res: any) => {
        res.send(uuid());
    });

    app.post("/md5", (req: any, res: any) => {
        res.send(md5(uuid()));
    });

    // chain route
    app.route("/account")
        .get(checkJwt, (req: any, res: any) => {
            const accountMock = {
                "username": "testUser",
                "password": "test1234",
                "twitter": "@testUser"
            }
            if(!req.query.username) {
                return res.send({"status": "error", "message": "missing username"});
            } else if(req.query.username !== accountMock.username) {
                return res.send({"status": "error", "message": "wrong username"});
            } else {
                return res.send(accountMock);
            }
        })
        .post(checkJwt, (req: any, res: any) => {
            if(!req.body.username || !req.body.password || !req.body.twitter) {
                return res.send({"status": "error", "message": "missing a parameter"});
            } else {
                return res.send(req.body);
            }
        });
}

export {addBasicRoutes}