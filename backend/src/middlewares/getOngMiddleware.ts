import { getRepository } from "typeorm";

import Ongs from "../models/Ongs";

export class getOngMiddleware{
  async execute (id: string) {
      const repository = getRepository(Ongs);

      /**
       * relations: ['images']
       * Para retornas as imagens cadastradas
       */

      const ong = await repository.findOneOrFail(id, { relations: ['images']});

      if (!ong) {
        return new Error("Ong does not exists!");
      }
      
      return ong;
  }

}