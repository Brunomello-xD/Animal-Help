import { Request, Response } from "express";

import { getOngMiddleware } from '../middlewares/getOngMiddleware';

class getOngController{
  async show(req: Request, res: Response) {
    const { id } = req.params;

    const middleware = new getOngMiddleware();

    const result = await middleware.execute(id);    

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.json(result);

  }
}

export default new getOngController();