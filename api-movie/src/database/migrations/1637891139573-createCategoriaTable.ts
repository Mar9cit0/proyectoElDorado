import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createCategoriaTable1637891139573 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:"categoria",
            columns:[
                {
                    name: "id",
                    type: "varchar",
                    isPrimary: true,
                    generationStrategy:'uuid',                   
                },
                {
                    name: "categoria",
                    type: "varchar",
                    isUnique:true,
                },

            ],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('categoria');
    }

}
