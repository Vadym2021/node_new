"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Token = void 0;
const typeorm_1 = require("typeorm");
const commonfields_1 = require("./commonfields");
const user_1 = require("./user");
let Token = class Token extends commonfields_1.CommonFields {
};
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        width: 255,
        nullable: false,
    }),
    __metadata("design:type", String)
], Token.prototype, "refreshToken", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'int',
    }),
    __metadata("design:type", Number)
], Token.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => user_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'userId' }),
    __metadata("design:type", user_1.User)
], Token.prototype, "user", void 0);
Token = __decorate([
    (0, typeorm_1.Entity)('tokens', { database: 'okten' })
], Token);
exports.Token = Token;
//# sourceMappingURL=token.js.map