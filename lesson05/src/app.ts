import 'reflect-metadata';
import express from 'express';
import { createConnection } from 'typeorm';

//    "start": "rimraf dist && tsc-watch --onSucess ",

// "start": "rimraf dist && tsc-watch --onSuccess ",
//     "watch:server": "nodemon './src/app.ts' --watch './src'"
// "start": "rimraf dist && tsc -watch --onSuccess 'npm run watch:server'",

// https://ifelse.info/questions/24659/error-ts6053-file-ts-not-found
// tsc -p ./ -w

const app = express();

// app.get('/users', async (req: Request, res: Response) => {
//     // await getManager().getRepository()
//     // res.end();
// });

app.listen(5500, async () => {
    console.log('Server has started');
    try {
        const connection = await createConnection();
        if (connection) {
            console.log('Database connected');
        }
    } catch (err) {
        if (err) console.log(err);
    }
});
