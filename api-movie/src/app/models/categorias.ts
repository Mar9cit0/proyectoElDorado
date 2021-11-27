import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('categoria')
class Categoria{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    categoria: string;
    

}

export default Categoria;