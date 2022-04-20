//1* : Преобразовать написанный код в 26 - 33 пунктах в функцию, принимающую на вход возраст.


checkAge = function (age) {
    let age_1 = age;
    let age_2 = 18;
    let age_3 = 60;


    if ((age_1 < age_2)) console.log("You don’t have access cause your age is " + age_1 + ". It’s less then")
    else {
        if (age_1 < age_3) console.log("Welcome!")
        else {
            if (age_1 >= age_3) console.log('Keep calm and look Culture channel')
            else console.log("Technical work")
        }
    }

}

checkAge(17);
checkAge(18);
checkAge(61);
checkAge('twenty');






