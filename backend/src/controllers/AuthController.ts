import { Request, Response } from "express";
import { getRepository } from "typeorm";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

import { Users } from "../models/Users";

/**
 * Criando o Token para o usuário
 * id do usuário está recendo via params pois a function está fora da classe
 * 
 */ 
function generatedToken(params = {}) {
  return jwt.sign( params, process.env.JWT_SECRET as string, 
    {
      expiresIn: process.env.JWT_EXPIRES_IN as string
    })
}

dotenv.config();

class AuthController {
  async antheticate(req: Request, res: Response) {
    const repository = getRepository(Users);
    const { email, password } = req.body;

    const user = await repository.findOne({where : { email }});    

    // Verificando se o e-mail foi encontrado
    if(!user) {
      return res.status(400).send({ error: 'User not found' });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    // Verificando se a senha é valida
    if(!isValidPassword) {
      return res.status(400).send({error: 'Invalid password'});
    }

    // Criando o Token para o usuário
    /**
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, 
      {
        expiresIn: process.env.JWT_EXPIRES_IN as string
      }
    )
    */

    // Removendo a senha
    delete user.password;

    return res.json({
      user, 
      token: generatedToken({ id: user.id })
    })

  }
}

export default new AuthController();