import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

interface TokenPayload {
  id: string;
  iat: number;
  exp: number;
}

export default function authMiddleware(req: Request, res: Response, next: NextFunction) {
  //Recebendo o Token
  const { authorization } = req.headers;

  if(!authorization) {
    return res.status(401).send({error: 'No token provided'});
  }

  const token = authorization.replace('Bearer', '').trim();

  try {
    const data = jwt.verify(token, process.env.JWT_SECRET as string,);
    console.log(data);

    const { id } = data as TokenPayload;

    req.userId = id;

    return next();
    
  } catch(err) {
    console.log(err);
    return res.sendStatus(401);
  }
  
}