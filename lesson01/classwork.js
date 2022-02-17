// 1. Спробуйте створити якийсь файл txt,
// прочитайте з нього дані і одразу,
// дані які ви отримали запишіть їх в інший файл,
// в вас вийде невеликий callback hell, пізніше я вам покажу
// як можна це обійти, але поки зробіть так
//
// 2. Створіть файл ( можете вручну ) заповніть його якимись даними
// Прочитайте його, скопіюйте всі дані з нього і перенесіть їх в нову папку та файл в ній,
// старий файл видаліть після того як все завершиться. Також вийде callback hell
//
// 3. Створіть папку (можете вручну) напишіть скріпт який створить в ній якись дані
// (можуть бути нові папки і файли(в файли запишіть якусь дату) )
// і напишіть функцію яка буде зчитувати папку і перевіряти якщо дані які в ній лежать
// - це файли тоді вам потрібно їх очистити,
// але не видаляти, якщо дані - це папки,
// вам потрібно їх перейменувати і додати до назви префікс _new
//

const path = require('path')
const fs = require('fs')
fs.mkdir(path.join(__dirname, 'classwork'), (err) => {
    if (err) {
        console.log(err);
        throw err;
    }
})

fs.writeFile(path.join(__dirname, 'classwork', 'source.txt'),
    'onlineUsers = [{name: "Andrii", age: 22, city: "Lviv"}];' +
    '\ninPersonUsers = [{name: "Andrii", age: 22, city: "Lviv"}];'

    , (err) => {
        if (err) {
            console.log(err);
            throw err;
        }
    })

fs.writeFile(path.join(__dirname, 'classwork', 'target.txt'), '',
    (err) => {
        if (err) {
            console.log(err);
            throw err;
        }
    })

fs.readFile(path.join(__dirname, 'classwork', 'source.txt'), 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
        throw err;
    }
    // console.log(data)
    // console.log(data.toString())
    fs.writeFile(path.join(__dirname, 'classwork', 'target.txt'),
        (data)
        , (err) => {
            if (err) {
                console.log(err);
                throw err;
            }
        })
})

fs.mkdir(path.join(__dirname, 'classwork', 'newfolder'), (err) => {
    if (err) {
        console.log(err);
        throw err;
    }
})

fs.mkdir(path.join(__dirname, 'classwork', 'newfolder', 'inbox'), (err) => {
    if (err) {
        console.log(err);
        throw err;
    }
})

fs.writeFile(path.join(__dirname, 'classwork', 'newfolder', 'file.txt'),
    'any data'

    , (err) => {
        if (err) {
            console.log(err);
            throw err;
        }

    })

// fs.readFile(path.join(__dirname, 'classwork', 'source.txt'), 'utf-8', (err, data) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
//     // console.log(data)
//     // console.log(data.toString())
//     fs.writeFile(path.join(__dirname, 'classwork', 'newfolder', 'file.txt'),
//         (data)
//         , (err) => {
//             if (err) {
//                 console.log(err);
//                 throw err;
//             }
//         })
// })

fs.unlink(path.join(__dirname, 'classwork', 'source.txt'), (err) => {
    if (err) {
        console.log(err);
        throw err;
    }
})

function folderRefactor() {
    fs.readdir(path.join(__dirname, 'classwork', 'newfolder'), (err, data) => {
        console.log(data)
        data.forEach(dat => {
            // if (path.extname(dat) == ".txt")
            if (err)
                console.log(err);
            else {
                if (path.extname(dat) == ".txt")
                    fs.truncate(path.join(__dirname, 'classwork', 'newfolder', dat), (err) => {
                        // console.log(dat);

                    })
                else {
                    fs.rename(path.join(__dirname, 'classwork', 'newfolder', dat),
                        path.join(__dirname, 'classwork', 'newfolder', '_new' + dat),
                        (err) => {
                            if (err) {
                                console.log(err);
                                throw err;
                            }
                        })
                }
            }




        })

        // fs.rename(path.join(__dirname, (dat)),
        //     path.join(__dirname, '_new'+(dat)),
        //     (err) => {
        //         if (err) {
        //             console.log(err);
        //             throw err;
        //         }
        //     })
    })
}

folderRefactor()

// fs.truncate(path.join(__dirname, 'classwork', 'newfolder', 'file.txt'), (err) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// })