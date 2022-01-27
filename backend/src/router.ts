import { Router } from "express";

import authMiddleware from './middlewares/authMiddleware';

import CreateUserController from "./controllers/CreateUserController";
import AuthController from "./controllers/AuthController";

import CreateOngController from "./controllers/CreateOngController";
import GetAllOngsController from "./controllers/GetAllOngsController";
import GetOngController from "./controllers/GetOngController";

const routes = Router();

/**
 * // C - CREATE - POST
 * // R - READ - GET
 * // U - UPDATE - PUT
 * // D - DELETE - DELETE
 */

/**
 * Query Params: http://localhost:3000/users?search=bruno
 * Route Params: http://localhost:3000/users/1
 * Body: http://localhost:3000/users/1
 */

routes.post("/users", CreateUserController.handle);
routes.post("/auth", AuthController.antheticate);

routes.get("/users", authMiddleware, CreateUserController.index);

routes.post("/ongs", CreateOngController.handle)
routes.get("/ongs", GetAllOngsController.handle)
routes.get("/ongs/:id", GetOngController.show)

export { routes };