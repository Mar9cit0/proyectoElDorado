import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate } from 'typeorm';
import bcrypt from 'bcryptjs';

@Entity('user')
class User{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    email: string;
    
    @Column()
    senha: string;

    @BeforeInsert()
    @BeforeUpdate()
    hashSenha() {
        this.senha = bcrypt.hashSync(this.senha,8);
    }
}

export default User;