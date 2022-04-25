/*
Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
e.g. function getWordStructure(word)
В консоли:
Слово (word) состоит из  (число) гласных и (число) согласных букв */


getWordStructure = function (Word) {
    const vowel = 'euioaуеыаоэяию';
    let countСonsonant = 0;
    let countVowel = 0;
    let i = 0;

    while (i < Word.toLowerCase().length) {
        if (vowel.includes(Word.toLowerCase()[i]))
            countVowel++
        else countСonsonant++
        i++
    }
    console.log('В слове "' + Word + '" ' + countVowel + ' гласных и ' + countСonsonant + ' согласных')
}

getWordStructure('обороноспособность');
getWordStructure('fourteen');
getWordStructure('Облако');

