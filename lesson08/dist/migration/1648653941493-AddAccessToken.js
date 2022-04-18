"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddAccessToken1648653941493 = void 0;
class AddAccessToken1648653941493 {
    async up(queryRunner) {
        await queryRunner.query('ALTER TABLE tokens ADD COLUMN accessToken VARCHAR(255) NOT NULL');
    }
    async down(queryRunner) {
        await queryRunner.query('ALTER TABLE tokens DROP COLUMN accessToken');
    }
}
exports.AddAccessToken1648653941493 = AddAccessToken1648653941493;
//# sourceMappingURL=1648653941493-AddAccessToken.js.map