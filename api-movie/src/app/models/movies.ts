import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate } from 'typeorm';
import bcrypt from 'bcryptjs';

@Entity('movies')
class Movies{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string;

    @Column()
    categoria: string;

    @Column()
    tempo:string

    @Column()
    descripcao:string

    @Column()
    ano:number

    @Column()
    is_active:boolean

    @Column()
    update_at:Date

    @Column()
    posted_by:string

    @Column()
    portada:string

    @Column()
    created_at:Date

}

export default Movies;