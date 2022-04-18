import { Request, Response } from 'express';
import { authService, tokenService } from '../services';

import { COOKIE } from '../constants/cookie';

class AuthController {
    public async registration(req:Request, res: Response) {
        const data = await authService.registration(req.body);
        res.cookie(
            'refreshToken',
            data.refreshToken,
            { maxAge: 1 * 24 * 60 * 60 * 1000, httpOnly: true },
        );
        return res.json(data);
    }

    public async logout(req: Request, res: Response): Promise<Response<string>> {
        console.log(req.cookies);
        res.clearCookie(COOKIE.nameRefreshToken);
        await tokenService.deleteUserTokenPair(2);

        return res.json('Ok');
    }
}

export const authController = new AuthController();
