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


/**
 * функция отображает полученное сообщение и включает звуковой сигнал
 * @param {*} res добавление в переменную кнопку
 * @param {*} res2 добавление в переменную аудио файла
 * @param {*} res3 добавление в текста сообщения
 */

let res = document.querySelector('.message');
let res2 = new Audio('./tune/notification.mp3');
let res3 = document.querySelector('.but_message');
res3.addEventListener('click', btn)

function btn(event) {

    res2.play()
    res.style.display = "block";

}

