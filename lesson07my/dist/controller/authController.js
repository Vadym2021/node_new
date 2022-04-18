"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const services_1 = require("../services");
const cookie_1 = require("../constants/cookie");
class AuthController {
    async registration(req, res) {
        const data = await services_1.authService.registration(req.body);
        res.cookie('refreshToken', data.refreshToken, { maxAge: 1 * 24 * 60 * 60 * 1000, httpOnly: true });
        return res.json(data);
    }
    async logout(req, res) {
        console.log(req.cookies);
        res.clearCookie(cookie_1.COOKIE.nameRefreshToken);
        await services_1.tokenService.deleteUserTokenPair(2);
        return res.json('Ok');
    }
}
exports.authController = new AuthController();
//# sourceMappingURL=authController.js.map