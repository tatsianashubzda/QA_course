/*
Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
e.g. function getWordStructure(word)
В консоли:
Слово (word) состоит из  (число) гласных и (число) согласных букв */


getWordStructure = function (word) {
    const vowel = 'euioaуеыаоэяию';
    let countСonsonant = 0;
    let countVowel = 0;
    let i = 0;

    while (i < word.toLowerCase().length) {
        if (vowel.includes(word.toLowerCase()[i]))
            countVowel++
        else
            if (word.toLowerCase()[i] != '-')
                countСonsonant++
        i++
    }
    console.log('В слове "' + word + '" ' + countVowel + ' гласных и ' + countСonsonant + ' согласных')
}

getWordStructure('обороноспособность');
getWordStructure('fourteen');
getWordStructure('Облако');
getWordStructure('штаб-квартира');


