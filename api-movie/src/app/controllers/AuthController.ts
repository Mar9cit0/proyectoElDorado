import { Request, Response } from "express";
import { getRepository } from "typeorm";
import bcrypt from 'bcryptjs';
const jwt = require('jsonwebtoken');

import User from "../models/user";

class AuthController {
  async auth(req: Request, res: Response) {
    const repository = getRepository(User);
    const { email, senha } = req.body;

    const user = await repository.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({
        status: "fail",
        data: {
          title: "Usuário não encontrado."
        }
      })
    }

    const senhaValida = await bcrypt.compare(senha, user.senha);

    if (!senhaValida) {
      console.log('senha invsalida', senha, user.senha);
      return res.status(409).json({
        status: "fail",
        data: {
          title: "senha invalida"
        }
      })
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET_TOKEN, { expiresIn: '1d' });

    return res.json({
      status: 'success',
      email:email,
      senha:senha,
      data: {
        token
      }
    });


  }
}

export default new AuthController();