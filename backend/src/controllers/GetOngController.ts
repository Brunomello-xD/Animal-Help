import { Request, Response } from "express";
import { getRepository } from "typeorm";

import Ongs from "../models/Ongs";

import ongView from '../views/ongView';

class getOngController{
  async show(req: Request, res: Response) {
    const { id } = req.params;

    //const middleware = new getOngMiddleware();

    const repository = getRepository(Ongs);

      /**
       * relations: ['images']
       * Para retornas as imagens cadastradas
       */

    const ong = await repository.findOneOrFail(id, { relations: ['images']});

     if (!ong) {
      return new Error("Ong does not exists!");
    }   

    return res.json(ongView.render(ong));
  }
}

export default new getOngController();