import { Request, Response } from "express";
import { getRepository } from "typeorm";


import Categoria from "../models/categorias";

class categoriaController {

  async getCategoria(req:Request, res:Response) {
    const categorias = await getRepository(Categoria).find();
    return res.json(categorias);
  }
}

export default new categoriaController();
