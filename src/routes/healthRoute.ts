const addHealthRouts = (app: any) => {
    app.get("/health", (req: any, res: any) => {
        res.send("Healthy");
    });
}

export {addHealthRouts};