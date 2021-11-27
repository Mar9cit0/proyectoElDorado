import { Request, Response } from "express";
import { getRepository } from "typeorm";

import Movies from "../models/movies";

class MoviesController {

    async createMovies(req:Request, res:Response) {
        const repository = getRepository(Movies);
        const { title } = req.body; 
        
        const titleExist = await repository.findOne({ where: { title } });
        if (titleExist) {
            return res.sendStatus(409);
        }
        const movie = repository.create(req.body);
        await repository.save(movie);

        return res.json(movie);
    }

    async getMovies(req:Request, res:Response){
        const movies = await getRepository(Movies).find();
        return res.json(movies);
    }

    async getMovie(req:Request, res:Response) {
        const moviesResult = await getRepository(Movies).findOne(req.params.id);
        return res.json(moviesResult);
    }

    async updateMovies(req:Request, res:Response) {
        const movie =  await getRepository(Movies).findOne(req.params.id);
        if(movie) {
            getRepository(Movies).merge(movie, req.body);
            const results = await getRepository(Movies).save(movie);
            return res.json(results);
        }
        return res.status(404).json({msg:'Not movie found'});
    }

    async DeleteMovies(req:Request, res:Response) {
        const movieResult = await getRepository(Movies).delete(req.params.id);
        return res.json(movieResult);
    };

}

export default new MoviesController();