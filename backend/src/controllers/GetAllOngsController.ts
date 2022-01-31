import { Request, Response } from "express";
import { getRepository } from 'typeorm';

import Ongs from "../models/Ongs";

import ongView from '../views/ongView';

class GetAllOngsController {
  async handle(req: Request, res: Response) {
    const repository = getRepository(Ongs);

    /**
     * relations: ['images']
     * Para retornas as imagens cadastradas
     */
    const ongs = await repository.find({ 
      relations: ['images']
    });    

    return res.json(ongView.renderMany(ongs));
  }
}

export default new GetAllOngsController();