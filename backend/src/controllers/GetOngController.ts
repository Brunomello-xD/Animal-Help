import { Request, Response } from "express";

import { getOngMiddleware } from '../middlewares/getOngMiddleware';

import ongView from '../views/ongView';

class getOngController{
  async show(req: Request, res: Response) {
    const { id } = req.params;

    const middleware = new getOngMiddleware();

    const result = await middleware.execute(id);    

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.json(ongView.render(result));
  }
}

export default new getOngController();