import { requiresAuth } from 'express-openid-connect';

const addBasicRoutes = (app: any) => {
    app.get('/admin', requiresAuth(), (req: any, res: any) =>
        res.send(`Hello ${req.oidc.user.sub}, this is the admin section.`)
    );
}

export {addBasicRoutes}