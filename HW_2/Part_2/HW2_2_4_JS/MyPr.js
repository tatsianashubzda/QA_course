//4 Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке

checkAge = function (age) {
    let age_1 = Number(age);
    let age_2 = 18;
    let age_3 = 60;

    if ((age_1 < age_2) && (age_1 > 0)) alert("You don’t have access cause your age is " + age_1 + ". It’s less then")
    else {
        if ((age_1 < age_3) && (age_1 > 0)) alert("Welcome!")
        else {
            if (age_1 >= age_3) alert('Keep calm and look Culture channel')
            else alert("Error")
        }
    }
}

let Age = prompt("Please enter your age ", [10]);
checkAge(Age);





