import { getRepository } from "typeorm";

import { Ongs } from "../models/Ongs";

export class getOngMiddleware{
  async execute (id: string) {
      const repository = getRepository(Ongs);

      const ong = await repository.findOneOrFail(id);

      if (!ong) {
        return new Error("Ong does not exists!");
      }
      
      return ong;
  }

}