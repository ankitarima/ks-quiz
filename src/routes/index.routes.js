import express from "express";

import main_router from "./main.routes.js";
import admin_router from "./admin.routes.js";

const router = express.Router();

// health check route for v1
router.get("/healthcheck", (_, res) => res.sendStatus(200));

router.use("/main", main_router);

// authentication route
router.use("/admin", admin_router);

export default router;
