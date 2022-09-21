import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateOngs1643080723737 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'ongs',
      columns: [
        {
          name: 'id',
          type: 'integer',
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'name',
          type: 'varchar',
        },
        {
          name: 'latitude',
          type: 'decimal',
        },
        {
          name: 'longitude',
          type: 'decimal',
        },
        {
          name: 'about',
          type: 'text',
        },
        {
          name: 'instructions',
          type: 'text',
        },
        {
          name: 'opening_hours',
          type: 'varchar',
        },
        {
          name: 'open_on_weekends',
          type: 'boolean',
          default: false,
        },
        // {
        //   name: 'user_id',
        //   type: 'integer',
        // }
      ],
      // foreignKeys: [
      //   {
      //     name: 'UserOng',
      //     columnNames: ['user_id'],
      //     referencedTableName: 'users',
      //     referencedColumnNames: ['id'],
      //     onUpdate: 'CASCADE',
      //     onDelete: 'CASCADE',
      //   }
      // ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('ongs');
  }

}
