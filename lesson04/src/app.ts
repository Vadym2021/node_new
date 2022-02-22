import express from 'express';

//    "start": "rimraf dist && tsc-watch --onSucess ",

// "start": "rimraf dist && tsc-watch --onSuccess ",
//     "watch:server": "nodemon './src/app.ts' --watch './src'"


const app = express();


app.listen(5500, ()=>{
    console.log('Server has started')
})