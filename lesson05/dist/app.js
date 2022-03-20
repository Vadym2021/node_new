"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const typeorm_1 = require("typeorm");
//    "start": "rimraf dist && tsc-watch --onSucess ",
// "start": "rimraf dist && tsc-watch --onSuccess ",
//     "watch:server": "nodemon './src/app.ts' --watch './src'"
// "start": "rimraf dist && tsc -watch --onSuccess 'npm run watch:server'",
// https://ifelse.info/questions/24659/error-ts6053-file-ts-not-found
// tsc -p ./ -w
const app = (0, express_1.default)();
// app.get('/users', async (req: Request, res: Response) => {
//     // await getManager().getRepository()
//     // res.end();
// });
app.listen(5500, async () => {
    console.log('Server has started');
    try {
        const connection = await (0, typeorm_1.createConnection)();
        if (connection) {
            console.log('Database connected');
        }
    }
    catch (err) {
        if (err)
            console.log(err);
    }
});
//# sourceMappingURL=app.js.map