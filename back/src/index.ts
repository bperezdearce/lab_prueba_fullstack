import "reflect-metadata";
import { PORT } from "./config/envs";
import server from "./server";
import { AppDataSource } from "./config/data-source";

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected");
    server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error: any) => {
    console.error("Error al inicializar la base de datos:", error);
  });