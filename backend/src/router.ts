import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";

const routes = Router();

/**
 * // C - CREATE - POST
 * // R - READ - GET
 * // U - UPDATE - PUT
 * // D - DELETE - DELETE
 */

routes.post("/users", new CreateUserController().handle)

export { routes };