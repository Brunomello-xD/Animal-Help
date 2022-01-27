import { Request, Response } from "express";
import { getRepository } from 'typeorm';

import { Ongs } from "../models/Ongs";

class GetAllOngsController {
  async handle(req: Request, res: Response) {
    const repository = getRepository(Ongs);

    const ongs = await repository.find();

    return res.json(ongs);
  }
}

export default new GetAllOngsController();