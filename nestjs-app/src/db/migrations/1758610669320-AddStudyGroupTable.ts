import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddStudyGroupTable1758610669320 implements MigrationInterface {
  name = 'AddStudyGroupTable1758610669320';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "study_groups" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_d3c236286b727d74553c7a88dc3" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "study_groups"`);
  }
}
