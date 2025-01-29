import express from "express";
import cors from "cors";
import morgan from "morgan";
import indexRouter from "./routes/indexRouter";
import SwaggerUi from "swagger-ui-express";
import { specs } from "./utils/swagger"

const server = express();

server.use(cors({ origin: "*" }));
server.use(morgan("dev"));
server.use(express.json());
server.use("/api-docs", SwaggerUi.serve, SwaggerUi.setup(specs));
server.use(indexRouter);

export default server;