import { checkJwt } from "../middleware/jwtAuth";

const addAdminRoutes = (app: any) => {
    app.get('/admin', checkJwt, (req: any, res: any) =>
        res.send(`Hello ${req.oidc.user.sub}, this is the admin section.`)
    );
}

export {addAdminRoutes}