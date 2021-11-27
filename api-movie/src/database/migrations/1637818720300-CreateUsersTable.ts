import { type } from "os";
import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsersTable1637818720300 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:"user",
            columns:[
                {
                    name: "id",
                    type: "varchar",
                    isPrimary: true,
                    generationStrategy:'uuid',                   
                },
                {
                    name: "email",
                    type: "varchar",
                    isUnique:true,
                },
                {
                    name:"senha",
                    type:"varchar"
                },
            ],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('user');
    }

}
