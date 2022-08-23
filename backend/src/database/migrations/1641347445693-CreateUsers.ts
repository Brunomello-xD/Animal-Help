import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsers1641347445693 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')

        await queryRunner.createTable(
            new Table({ 
                name: "users",
                columns: [
                    {
                        // name: "id",
                        // type: "uuid",
                        // generationStrategy: "uuid",
                        // default: "uuid_generate_v4()"
                        name: 'id',
                        type: 'integer',
                        unsigned: true,
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: "email",
                        type: "varchar",
                        isUnique: true,
                    },
                    {
                        name: "password",
                        type: "varchar",
                    }
                ],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users")
        // await queryRunner.query('DROP EXTENSION "uuid-ossp"')
    }
}
