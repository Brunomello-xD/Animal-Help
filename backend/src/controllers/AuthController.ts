import { Request, Response } from "express";
import { getRepository } from "typeorm";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

import { Users } from "../models/Users";

dotenv.config();

class AuthController {
  async antheticate(req: Request, res: Response) {
    const repository = getRepository(Users);
    const { email, password } = req.body;

    const user = await repository.findOne({where : { email }});    

    // Verificando se o e-mail foi encontrado
    if(!user) {
      return res.status(404).send('User not found');
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    // Verificando se a senha é valida
    if(!isValidPassword) {
      return res.sendStatus(401);
    }

    // Criando o Token
    const token = jwt.sign({id: user.id}, process.env.JWT_SECRET as string, 
      {
        expiresIn: process.env.JWT_EXPIRES_IN as string
      }
    )

    // Removendo a senha
    delete user.password;

    return res.json({
      user, 
      token
    })

  }
}

export default new AuthController();