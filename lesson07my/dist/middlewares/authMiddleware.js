"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const tokenService_1 = require("../services/tokenService");
class AuthMiddleware {
    async checkAccessToken(req, _res, next) {
        const authToken = req.get('Authorization');
        if (!authToken) {
            throw new Error('No token');
        }
        const resp = tokenService_1.tokenService.verifyToken(authToken);
        console.log(resp);
        next();
    }
}
exports.authMiddleware = new AuthMiddleware();
//# sourceMappingURL=authMiddleware.js.map