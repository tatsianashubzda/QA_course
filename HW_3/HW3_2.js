/*
2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось:), во второй:):) и так далее
 */

let stroka = ':)';

for (let i = 0; i < 5; i++) {
    console.log(stroka);
    stroka += ':)'
}



/*2 *.Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль(как в условии смайлик), а также количество строк для вывода
e.g.function printSmile(stroka, numberOfRows)*/



const PrintSymb = function (symb, numberOfRows) {
    let b = symb;
    // let j = 1;
    for (let i = 0; i < numberOfRows; i++) {
        console.log(b);
        b += symb
    }
}
PrintSymb(':>', 7)