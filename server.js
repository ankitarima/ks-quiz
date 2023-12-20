import express from "express";
import fileUpload from "express-fileupload";
import cors from "cors";
import * as dotenv from "dotenv";
import router from "./src/routes/index.routes.js";
import { error_handler } from "./src/middlewares/error.middleware.js";

/* configuring .env via dotenv */
dotenv.config();

/* Initialising the express application */
const app = express();

/* Using express middlewares on app */
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "PUT", "FETCH"],
    allowedHeaders: ["Content-Type", "authorization"],
    credentials: true,
  })
);
app.use(express.json({ limit: "50mb" }));
app.use(fileUpload());

/* Registering index router */
app.use("/api/v1/", router);

/* index route for error and index web route */
app.get("/", (req, res) => res.json({}));

app.get("auth/login/failed", (req, res) => {
  res.status(401).json({
    error: true,
    message: "Log in failure",
  });
});

app.get("/auth/logout", (req, res) => {
  req.logOut();
  res.redirect(process.env.CLIENT_URL);
});

/* Error handler middleware */
app.use(error_handler);

/* PORT and listening app */
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server started on port [${port}] - http://localhost:${port}`);
});
