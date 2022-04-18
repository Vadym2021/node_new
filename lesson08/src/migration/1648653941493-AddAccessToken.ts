import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddAccessToken1648653941493 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE tokens ADD COLUMN accessToken VARCHAR(255) NOT NULL');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE tokens DROP COLUMN accessToken');
    }
}
