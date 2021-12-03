import { Router } from "express";

import authMiddleware from "../app/middleware/authMiddleware";

import UserController from "../app/controllers/UserController";
import AuthController from "../app/controllers/AuthController";
import MoviesController from "../app/controllers/MoviesControllers";
import categoriaController from "../app/controllers/categoriasController";

const router = Router();



router.post('/auth',AuthController.auth);
// Rotas User
router.post('/users',authMiddleware,UserController.store);
router.post('/users/:id',authMiddleware,UserController.getUser);
router.get('/getUsers',authMiddleware,UserController.getUsers);
router.put('/updateUser',authMiddleware,UserController.updateUser);
router.delete('/DeleteUser',authMiddleware,UserController.DeleteUser);
//Rotas Movies
router.post('/movies',MoviesController.createMovies);
router.post('/getMovie/:id',MoviesController.getMovie);
router.get('/getMovies',MoviesController.getMovies);
router.put('/updateMovies',MoviesController.updateMovies);
router.delete('/DeleteMovies/:id',MoviesController.DeleteMovies);

router.get('/getCategorias/',categoriaController.getCategoria);


export default router;
