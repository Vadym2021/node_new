

// Всі дії виконувати з допомогою модулів (вручну нічого не створюємо)
// Створити основну папку (main), в яку покласти дві інші папки: перша - online, друга - inPerson
// Потім створити в вашому головному файлі (для прикладу app.js)
// два масиви з обєктами user ({. name: "Andrii", age: 22, city: "Lviv" }),
// відповідно перший - onlineUsers, другий - inPersonUsers;
// і створити файли txt в папках (online, inPerson)
// в яких як дату покласти юзерів з ваших масивів, але щоб ваш файл виглядав як NAME:
// ім'я з обєкту і т.д і всі пункти з нового рядка.
//
// Коли ви це виконаєте напишіть функцію яка буде міняти місцями юзерів
// з одного файлу і папки в іншу. (ті, що були в папці inPerson будуть в папці online)

const path = require('path')
const fs = require('fs')
fs.mkdir(path.join(__dirname, 'main'),(err) => {
    if (err) {
        console.log(err);
        throw err;
    }
})

fs.mkdir(path.join(__dirname, 'main','online'),(err) => {
    if (err) {
        console.log(err);
        throw err;
    }
})
fs.mkdir(path.join(__dirname, 'main','inPerson'),(err) => {
    if (err) {
        console.log(err);
        throw err;
    }
})
fs.writeFile(path.join(__dirname, 'main', 'app.js'),
    'onlineUsers = [{name: "Andrii", age: 22, city: "Lviv"}];' +
    '\ninPersonUsers = [{name: "Andrii", age: 22, city: "Lviv"}];'

    , (err)=>{
    if(err){
        console.log(err);
        throw err;
    }
})

fs.writeFile(path.join(__dirname, 'main','online','online.txt'), 'NAME: \nAndrii \nage: \n22 \ncity: \nLviv', (err)=>{
    if(err){
        console.log(err);
        throw err;
    }
})

fs.writeFile(path.join(__dirname, 'main','inPerson','inPerson.txt'), 'NAME: \nAndrii \nage: \n22 \ncity: \nLviv', (err)=>{
    if(err){
        console.log(err);
        throw err;
    }
})

function changeFolder () {
    fs.rename(path.join(__dirname, 'main', 'online', 'online.txt'),
        path.join(__dirname, 'main', 'inPerson', 'online.txt'),
        (err) => {
            if (err) {
                console.log(err);
                throw err;
            }
        })

    fs.rename(path.join(__dirname, 'main', 'inPerson', 'inPerson.txt'),
        path.join(__dirname, 'main', 'online', 'inPerson.txt'),
        (err) => {
            if (err) {
                console.log(err);
                throw err;
            }
        })

}

changeFolder()


















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