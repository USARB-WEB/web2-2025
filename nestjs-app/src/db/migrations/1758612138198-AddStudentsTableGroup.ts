import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddStudentsTableGroup1758612138198 implements MigrationInterface {
  name = 'AddStudentsTableGroup1758612138198';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "students" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "birthdate" TIMESTAMP NOT NULL, "phone" character varying NOT NULL, CONSTRAINT "PK_7d7f07271ad4ce999880713f05e" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "students"`);
  }
}
