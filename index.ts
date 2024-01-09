import { initRoutes } from "./server/initRoutes";
import { initSequelize } from "./server/sequelize";

try {
  initSequelize();
  initRoutes();
} catch (e) {
  console.log("Error initializing the app", e);
}
