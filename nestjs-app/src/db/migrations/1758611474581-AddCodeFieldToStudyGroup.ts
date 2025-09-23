import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddCodeFieldToStudyGroup1758611474581
  implements MigrationInterface
{
  name = 'AddCodeFieldToStudyGroup1758611474581';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "study_groups" ADD "code" character varying NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "study_groups" DROP COLUMN "code"`);
  }
}
