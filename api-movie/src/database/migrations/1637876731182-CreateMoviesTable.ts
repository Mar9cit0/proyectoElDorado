import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateMoviesTable1637876731182 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:"movies",
            columns:[
                {
                    name: "id",
                    type: "varchar",
                    isPrimary: true,
                    generationStrategy:'uuid',                   
                },
                {
                    name: "title",
                    type: "varchar",
                    isUnique:true,
                },
                {
                    name:"categoria",
                    type:"varchar"
                },
                {
                    name:"tempo",
                    type:"varchar"
                },
                {
                    name:"descripcao",
                    type:"varchar"
                },
                {
                    name:"ano",
                    type:"int"
                },
                {
                    name:"is_active",
                    type:"boolean"
                },
                {
                    name:"update_at",
                    type:"timestamp"
                },
                {
                    name:"posted_by",
                    type:"varchar"
                },
                {
                    name:"portada",
                    type:"varchar"
                },
                {
                    name:"created_at",
                    type: 'timestamp',
                    default: 'now()'
                },

            ],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('movies');
    }

}
