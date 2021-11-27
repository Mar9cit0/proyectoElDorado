import { createConnection } from "typeorm";
import User from "../app/models/user";
import Categoria from "../app/models/categorias";

createConnection().then( async connection => { 
    console.log('Conectado con éxito con el banco!')
    const users = await connection.manager.find(User);
    const categorias = await connection.manager.find(Categoria);
    console.log('conexion',users);
    if(users.length === 0) {
        console.log('carregando novo usuario...!');
        const user = new User();
        user.email = "test@test.com";
        user.senha = "teste";
        await connection.manager.save(user); 
    }

    if(categorias.length === 0) {
       
        const array_categoria = ["Ação","Aventuras","Baseado em eventos reais","Comédia","Drama","Ficção","Documentário","Fantasía","Musical"]

        for (let index = 0; index < array_categoria.length; index++) {
            const categoria = new Categoria();
            categoria.categoria = array_categoria[index];
            await connection.manager.save(categoria); 
        }

    }


});