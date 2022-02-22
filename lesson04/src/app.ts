import express from 'express';

//    "start": "rimraf dist && tsc-watch --onSucess ",

// "start": "rimraf dist && tsc-watch --onSuccess ",
//     "watch:server": "nodemon './src/app.ts' --watch './src'"


// https://ifelse.info/questions/24659/error-ts6053-file-ts-not-found
// tsc -p ./ -w

const app = express();


app.listen(5500, ()=>{
    console.log('Server has started')
})