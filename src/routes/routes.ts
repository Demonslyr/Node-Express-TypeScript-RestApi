const addBasicRoutes = (app: any) => {

    app.get("/", (req: any, res: any) => {
        res.send("Hello World");
    });

    app.get("/account", (req: any, res: any) => {
        const accountMock = {
            "username": "nraboy",
            "password": "1234",
            "twitter": "@nraboy"
        }
        if(!req.query.username) {
            return res.send({"status": "error", "message": "missing username"});
        } else if(req.query.username !== accountMock.username) {
            return res.send({"status": "error", "message": "wrong username"});
        } else {
            return res.send(accountMock);
        }
    });

    app.post("/account", (req: any, res: any) => {
        if(!req.body.username || !req.body.password || !req.body.twitter) {
            return res.send({"status": "error", "message": "missing a parameter"});
        } else {
            return res.send(req.body);
        }
    });

}

export {addBasicRoutes}