import { Request, Response } from "express";
import { getRepository } from "typeorm";

import User from "../models/user";

class UserController {

    index(req:Request, res:Response){
        return res.send({ userId:req.userId});
    }
    
    async store(req:Request, res:Response) {
        const repository = getRepository(User);
        const { email, senha } = req.body; 
        
        const userExist = await repository.findOne({ where: { email } });
        if (userExist){
            return res.sendStatus(409);
        }
        const user = repository.create({ email, senha });
        await repository.save(user);

        return res.json(user);
    }

    async getUsers(req:Request, res:Response) {
        const users = await getRepository(User).find();
        return res.json(users);
    }

    async getUser(req:Request, res:Response) {
        const userResult = await getRepository(User).findOne(req.params.id);
        return res.json(userResult);
    }

    async updateUser(req:Request, res:Response) {
        const repository = getRepository(User);
        const { email, senha, id } = req.body; 
        
        const user= await repository.findOne({ where: { id } });
        if(user) {
            repository.merge(user, req.body);
            const results = await repository.save(user);
            return res.json(results);
        }
        return res.status(404).json({msg:'Not user found'});
    }

    
    async  DeleteUser(req:Request, res:Response) {
        const userResult = await getRepository(User).delete(req.params.id);
        return res.json(userResult);
    }


}

export default new UserController();