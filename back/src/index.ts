import "reflect-metadata";
import { PORT } from "./config/envs";
import server from "./server";
import { AppDataSource } from "./config/data-source";

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected");
    server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => console.error(error));