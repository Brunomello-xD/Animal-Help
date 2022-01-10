import { Request, Response } from "express";
import { getRepository } from "typeorm";

import { Users } from "../models/Users";

class CreateUserController {
  index(req: Request, res: Response) {
    return res.send({ userID: req.userId });
  }

  async handle(req: Request, res: Response) {
    const repository = getRepository(Users);
    const { email, password } = req.body;

    const userExists = await repository.findOne({ where : { email }});

    if (userExists) {
      return res.sendStatus(409);
    }

    const user = repository.create({ email, password });
    await repository.save(user);

    return res.json(user);
  }
}

export default new CreateUserController();