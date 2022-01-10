import { Router } from "express";

import authMiddleware from './middlewares/authMiddleware';

import CreateUserController from "./controllers/CreateUserController";
import AuthController from "./controllers/AuthController";

const routes = Router();

/**
 * // C - CREATE - POST
 * // R - READ - GET
 * // U - UPDATE - PUT
 * // D - DELETE - DELETE
 */

routes.post("/users", CreateUserController.handle);
routes.post("/auth", AuthController.antheticate);

routes.get("/users", authMiddleware, CreateUserController.index);

export { routes };