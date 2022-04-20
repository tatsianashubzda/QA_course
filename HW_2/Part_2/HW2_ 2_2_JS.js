//2* Преобразовать задание 1 таким образом, чтобы первым делом в функции проверялся тип данных.И если он не Number - кидалась ошибка.

checkAge = function (age) {
    let age_1 = age;
    let age_2 = 18;
    let age_3 = 60;

    if (typeof (age_1) == 'number') {
        if ((age_1 < age_2) && (age_1 > 0)) console.log("You don’t have access cause your age is " + age_1 + ". It’s less then")
        else {
            if ((age_1 < age_3) && (age_1 > 0)) console.log("Welcome!")
            else {
                if (age_1 >= age_3) console.log('Keep calm and look Culture channel')
                else console.log("Technical work")
            }
        }
    } else console.log("Error")
}



checkAge(17);
checkAge(18);
checkAge(61);
checkAge(-1);
checkAge("gh");
checkAge("22");