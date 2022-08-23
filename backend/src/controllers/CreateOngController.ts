import { Request, Response } from "express";
import { getRepository } from 'typeorm';
import * as Yup from 'yup';

import Ongs from "../models/Ongs";

class CreateOngController {
  async create(req: Request, res: Response) {
    try {
      // Recebendo os dados
      const { 
        name,
        latitude,
        longitude,
        about,
        instructions, 
        opening_hours,
        open_on_weekends,
      } = req.body;
      
      const repository = getRepository(Ongs);

      /**
       * Recebendo as imagens
       * Express.Multer.File[] = Passando que é um Array de arquivos do Multer
       */
      const requestImages = req.files as Express.Multer.File[];

      console.log(requestImages);
      
      // Percorrendo o Array caso ouver mais de uma imagem
      const images = requestImages.map(image => {
        return { path: image.filename }
      });

      const data = {
        name,
        latitude,
        longitude,
        about,
        instructions, 
        opening_hours,
        open_on_weekends: open_on_weekends === 'true', 
        images
      };       

      // Regras de validação de dados recebidos com Yup
      const schema = Yup.object().shape({
        name: Yup.string().required(),
        latitude: Yup.number().required(),
        longitude: Yup.number().required(),
        about: Yup.string().required().max(300),
        instructions: Yup.string().required(),
        opening_hours: Yup.string().required(),
        open_on_weekends: Yup.boolean().required(),
        images: Yup.array(
                  Yup.object().shape({
            path: Yup.string().required()
          })
        )
      })

      /**
       * Começando a validar os dados
       * 
       * abortEarly: false = Caso um campo estiver inválido ele não irá parar a verificação
       * Irá continuar e caso ouver mais erros irá retorna todos de uma vez
       */
      await schema.validate(data, {
        abortEarly: false,
      })

      const ong = repository.create(data);    
      
      await repository.save(ong);      
      
      return res.status(201).json(ong);
  } catch (error) {
    console.log(error);
  }
  }
}

export default new CreateOngController();