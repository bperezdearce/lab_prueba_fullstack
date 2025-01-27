import express from "express";
import cors from "cors";
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
    apis: ["./src/routes/*.ts"]
}

const swaggerDocument = SwaggerJsDoc(swaggerOptions);

// middlewares
server.use(cors());
server.use(express.json());
server.use("/api-docs", SwaggerUi.serve, SwaggerUi.setup(swaggerDocument));
server.use(indexRouter);

server.get("/", (req, res) => res.send("Hola mundo"));

export default server;