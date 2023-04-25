'use strict'

class Big_Mac extends Hamburger {
    constructor(size, stuffing, price, calories) {
        this.topping = topping;
        
        super(size, stuffing, price, calories);

        this.getSize();
        this.addTopping();
        this.calculatePrice();
        this.getStuffing();

    }


    addTopping() {
        // Добавить добавку 

        stuffing.forEach(element => {

            if (element == '  мясная котлета') {
                this.price = this.price + 20;
                this.calories = this.calories + 20;
            }

            if (element == ' лук') {
                this.price = this.price + 5;
                this.calories = this.calories + 5;
            }

            if (element == ' помидор') {
                this.price = this.price + 15;
                this.calories = this.calories + 5;
            }

            if (element == ' салат') {
                this.price = this.price + 5;
                this.calories = this.calories + 5;
            }

            if (element == ' соль') {
                this.price = this.price + 1;
                this.calories = this.calories + 5;
            }
        });

    }

    removeTopping() {
        stuffing.forEach(element => {

            if (element !== '  мясная котлета') {
                this.price = this.price - 20;
                this.calories = this.calories - 20;
            }

            if (element !== ' лук') {
                this.price = this.price - 5;
                this.calories = this.calories - 5;
            }

            if (element !== ' помидор') {
                this.price = this.price - 5;
                this.calories = this.calories - 5;
            }

            if (element !== ' салат') {
                this.price = this.price - 5;
                this.calories = this.calories - 5;
            }

            if (element !== ' соль') {
                this.price = this.price - 1;
                this.calories = this.calories - 5;
            }
        });
    }
    addition(topping) {
        // Получить список добавок 
                    if (topping == ' бекон') {
                this.price = this.price + 40;
                this.calories = this.calories + 15;
            }
    }
    getSize() {
        // Узнать размер гамбургера
        if (this.size == 'Двойной Биг Спешил') {
            this.price = 100;
            this.calories = 40;
        }

        if (this.size == 'Биг Спешил') {
            this.price = 19;
            this.calories = 100;
        }

    }
    getStuffing() {
        console.log(`Особенный вкус бургеру придает состав из: ${this.stuffing} `)
        // Узнать начинку гамбургера 
    }
    calculatePrice() {
        // Узнать цену 
        let total_price = this.price
        console.log(`цена ${this.size}: ${total_price} `)

    }
    calculateCalories() {
        // Узнать калорийность 
        let total_calories = this.calories
        console.log(`цена ${this.size}: ${total_calories}`);
    }
}