import express from 'express';
import { users } from './users';

//    "start": "rimraf dist && tsc-watch --onSucess ",

// "start": "rimraf dist && tsc-watch --onSuccess ",
//     "watch:server": "nodemon './src/app.ts' --watch './src'"
// "start": "rimraf dist && tsc -watch --onSuccess 'npm run watch:server'",

// https://ifelse.info/questions/24659/error-ts6053-file-ts-not-found
// tsc -p ./ -w

const app = express();

console.log(users);

// app.get('/', (req: Request, res: Response) => {
//     console.log(users);
//     res.end();
// });

// const obj = {
//     x: 22,
//     y: 444,
// };

console.log(11);
console.log(11);
console.log(11);




app.listen(5500, () => {
    console.log('Server has started');
});
