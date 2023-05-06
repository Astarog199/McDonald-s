"use strict";

/**
 * кнопка взаимодействия с личным кабинетом
 * @param {Text} password производит запрос и присваивает полученное значение
 * @param {*} lengthMore5 проверяет количество символов
 * @param {*} digitsPresented проверяет наличие цифр
 * @param {*} lettersPresented проверяет наличие букв
 */
let clickCabinet = function () {
    const password = prompt('введите пароль длинной  не менее 5 символов и содержащий буквы и цыфры');
    const lengthMore5 = password.length > 5;
    const digitsPresented = /\d+/gm.test(password);
    const lettersPresented = /[a-zA-Z]+/gm.test(password);
    if (lengthMore5 && digitsPresented && lettersPresented) {
        alert('Ваш пароль подходит');
    } else {
        alert('Ваш пароль НЕ подходит');
    }
};

let cabinet_btn = document.querySelector('.cabinet_btn');
cabinet_btn.addEventListener('click', clickCabinet);




