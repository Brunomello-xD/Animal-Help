import { Request, Response } from "express";
import { getRepository } from 'typeorm';

import { Ongs } from "../models/Ongs";

class CreateOngController {
  async handle(req: Request, res: Response) {
    // Recebendo os dados
    const { 
      name,
      latitude,
      longitude,
      about,
      instructions, 
      opening_hours,
      open_on_weekends
    } = req.body;

    const repository = getRepository(Ongs);

    const ong = repository.create({
      name,
      latitude,
      longitude,
      about,
      instructions, 
      opening_hours,
      open_on_weekends
    })

    await repository.save(ong);

    return res.status(201).json(ong);
    
  }
}

export default new CreateOngController();