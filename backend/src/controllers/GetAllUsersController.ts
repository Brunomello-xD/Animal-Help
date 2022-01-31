import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import { Users } from '../models/Users';

class GetAllUsersController{
  async handle(req: Request, res: Response) {
    const repository = getRepository(Users);

    const users = await repository.find();

    return res.json(users);
  }
}

export default new GetAllUsersController();