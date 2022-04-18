"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableTokens1648391910401 = void 0;
class CreateTableTokens1648391910401 {
    async up(queryRunner) {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS Tokens(
                id INT PRIMARY KEY AUTO_INCREMENT,
            refreshToken VARCHAR(255) NOT NULL,
            userId INT NOT NULL,
            FOREIGN KEY (userId) REFERENCES Users (id)
        )
        `);
    }
    async down(queryRunner) {
        await queryRunner.query(`
        DROP TABLE IF EXISTS Tokens
        `);
    }
}
exports.CreateTableTokens1648391910401 = CreateTableTokens1648391910401;
//# sourceMappingURL=1648391910401-CreateTableTokens.js.map