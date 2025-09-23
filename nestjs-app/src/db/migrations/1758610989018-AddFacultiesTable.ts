import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddFacultiesTable1758610989018 implements MigrationInterface {
  name = 'AddFacultiesTable1758610989018';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "faculties" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_fd83e4a09c7182ccf7bdb3770b9" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "faculties"`);
  }
}
