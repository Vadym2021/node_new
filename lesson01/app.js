// 1. Спробуйте створити якийсь файл txt, прочитайте з нього дані і одразу, дані які ви отримали запишіть їх в інший файл, в вас вийде невеликий callback hell, пізніше я вам покажу
// як можна це обійти, але поки зробіть так
//
// 2. Створіть файл ( можете вручну ) заповніть його якимись даними
// Прочитайте його, скопіюйте всі дані з нього і перенесіть їх в нову папку та файл в ній, старий файл видаліть після того як все завершиться. Також вийде callback hell
//
// 3. Створіть папку (можете вручну) напишіть скріпт який створить в ній якись дані (можуть бути нові папки і файли(в файли запишіть якусь дату) )
// і напишіть функцію яка буде зчитувати папку і перевіряти якщо дані які в ній лежать - це файли тоді вам потрібно їх очистити, але не видаляти, якщо дані - це папки, вам потрібно їх перейменувати і додати до назви префікс _new
//


const path = require('path')


// const joinedPath = path.join('test', 'test2', 'files', 'public', 'text.txt')
//
// console.log(joinedPath)
//
// const normalPath = path.normalize('test///files///public//text.txt')
//
// console.log(normalPath)
//
//
// const resPath = path.resolve('test///files///public///files.txt')
//
// console.log(resPath)

// const os = require('os')

// console.log(os.cpus())
// console.log(os.cpus().length)


const fs = require('fs')
//
// fs.writeFileSync(path.join(__dirname, 'file.txt'), 'some data')
//
// fs.writeFile(path.join(__dirname, 'file2.txt'), 'some data2', (err)=>{
//     if(err){
//         console.log(err);
//         throw err;
//     }
// })

// fs.readFile(path.join(__dirname, 'file2.txt'),'utf-8',(err,data) =>{
//     if(err) {
//         console.log(err);
//         throw err;
//     }
//     console.log(data)
//     console.log(data.toString())
// })

// for (let i = 0; i < 1000; i++) {
//     fs.appendFile(path.join(__dirname, 'file.txt'), '\nnew data' + i, {flag:'w'},(err) => {
//         if (err) {
//             console.log(err);
//             throw err;
//         }
//     })
// }

// fs.truncate(path.join(__dirname, 'file.txt'),(err)=>{
//     if (err) {
//             console.log(err);
//             throw err;
//         }
// })

// fs.unlink(path.join(__dirname, 'file.txt'), (err) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// })

// fs.mkdir(path.join(__dirname, 'public','files'),{recursive:true},(err) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// })

// fs.rmdir(path.join(__dirname, 'public'),(err) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// })

fs.readdir(path.join(__dirname, 'test'),(err, data)=>{

    console.log(data)
})

