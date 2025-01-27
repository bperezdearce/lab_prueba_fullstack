import express from "express";
import cors from "cors";
import morgan from "morgan";
import indexRouter from "./routes/indexRouter";
import SwaggerUi from "swagger-ui-express";
import SwaggerJsDoc from "swagger-jsdoc";

const server = express();

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Pokémon TCG API",
      version: "1.0.0",
      description: "API para gestionar sets y cartas de Pokémon TCG",
    },
    servers: [
      {
        url: "http://localhost:2000",
      },
    ],
  },
  apis: ["./src/routes/*.ts"],
};

const swaggerDocument = SwaggerJsDoc(swaggerOptions);

server.use(cors({ origin: "http://localhost:2000" }));
server.use(morgan("dev"));
server.use(express.json());
server.use("/api-docs", SwaggerUi.serve, SwaggerUi.setup(swaggerDocument));
server.use(indexRouter);

export default server;