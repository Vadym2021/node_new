"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableUsers1645606229446 = void 0;
class CreateTableUsers1645606229446 {
    async up(queryRunner) {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS Users(
                id INT PRIMARY KEY AUTO_INCREMENT,
                firstName VARCHAR(250) NOT NULL,
                lastName VARCHAR(250) NOT NULL,
                age INT CHECK(age>0),
                phone VARCHAR(250) NOT NULL UNIQUE,
                email VARCHAR(250) NOT NULL UNIQUE,
                password VARCHAR(250) NOT NULL,
                createdAt TIMESTAMP DEFAULT (UTC_TIMESTAMP ()) NOT NULL,
                deletedAt TIMESTAMP
            )
        `);
    }
    async down(queryRunner) {
        await queryRunner.query(`
        DROP TABLE IF EXISTS Users
        `);
    }
}
exports.CreateTableUsers1645606229446 = CreateTableUsers1645606229446;
//# sourceMappingURL=1645606229446-CreateTableUsers.js.map