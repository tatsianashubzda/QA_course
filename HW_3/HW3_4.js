/* 4 **.Написать функцию, которая проверяет, является ли слово палиндромом
e.g.function isPalindrom(word) */


function isPalindrom(Word) {
    let word = Word.toLowerCase();
    if (word == word.split('').reverse().join(''))
        console.log('Слово "' + Word + '"  - палиндром')
    else
        console.log('Слово "' + Word + '"  не является палиндромом')
}

isPalindrom('Шалаш');
isPalindrom('топот');
isPalindrom('реппер');
isPalindrom('Level');
isPalindrom('Bite');

