import "reflect-metadata";
import { PORT } from "./config/envs";
import { AppDataSource } from "./config/data-source";
import server from "./server";

AppDataSource.initialize()
  .then(() => {
    console.log("Base de Datos conectada");
    server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error: any) => {
    console.error("Error al inicializar la base de datos:", error);
  });