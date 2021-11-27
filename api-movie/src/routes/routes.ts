import { Router } from "express";

import authMiddleware from "../app/middleware/authMiddleware";

import UserController from "../app/controllers/UserController";
import AuthController from "../app/controllers/AuthController";
import MoviesController from "../app/controllers/MoviesControllers";

const router = Router();



router.post('/auth',AuthController.auth);
// Rotas User
router.post('/users',authMiddleware,UserController.store);
router.post('/users/:id',authMiddleware,UserController.getUser);
router.get('/getUsers',authMiddleware,UserController.getUsers);
router.put('/updateUser',authMiddleware,UserController.updateUser);
router.delete('/DeleteUser',authMiddleware,UserController.DeleteUser);
//Rotas Movies
router.post('/movies',authMiddleware,MoviesController.createMovies);
router.post('/getMovie/:id',authMiddleware,MoviesController.getMovie);
router.get('/getMovies',authMiddleware,MoviesController.getMovies);
router.put('/updateMovies',authMiddleware,MoviesController.updateMovies);
router.delete('/DeleteMovies',authMiddleware,MoviesController.DeleteMovies);


export default router;