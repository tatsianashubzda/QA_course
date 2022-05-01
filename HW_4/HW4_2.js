//Откройте в VSCode task2.json файл. Скопируйте из него JSONку, вставьте в свой код (присвоив в переменную). Дан массив объектов.Каждый объект является идентификационной карточкой человека.Нам нужно хранить только уникальные значения в этом массиве.Реализуйте функцию, которая будет выполнять эту работу.


const jsonData = require('./task2.json');

const dataOfPeople = function (dataArr) {
    for (let i = 0; i < dataArr.length; i++) {
        for (let j = i + 1; j < dataArr.length; j++) {
            if (dataArr[i].name == dataArr[j].name) {
                dataArr.splice(i, 1);
            }

        }
        console.log('-' + dataArr[i].name)
    }
    console.log(dataArr)
}

dataOfPeople(jsonData)
