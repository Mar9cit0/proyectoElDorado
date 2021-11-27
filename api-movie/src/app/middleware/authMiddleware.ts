import { Request, Response, NextFunction } from 'express';
const jwt = require('jsonwebtoken');

interface TokePeidLoad {
    id:string;
    iat: number;
    exp: number;
}

export default function authMiddleware( req:Request, res:Response, next:NextFunction ) {
  
    const { authorization } = req.headers;

    if( !authorization ) {
        return res.sendStatus(401);
    }

    const token = authorization.replace('Bearer','').trim();
   
    try{
        const data = jwt.verify(token, process.env.JWT_SECRET_TOKEN);
        const { id } = data as TokePeidLoad;
        console.log(data);
        req.userId = id;
        return next();

    } catch {
        return res.sendStatus(401);
    }
}