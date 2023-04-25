'use strict'

class Big_Mac extends Hamburger {
    constructor(size, stuffing, price, calories) {
        super(size, stuffing, price, calories);

        this.getSize();
        this.addTopping();
        this.calculatePrice();
        this.getStuffing();

    }


    addTopping() {
        // Добавить добавку 

        stuffing.forEach(element => {

            if (element == ' кетчуп') {
                this.price = this.price + 4,5;
                this.calories = this.calories + 10;
            }

            if (element == ' горчица') {
                this.price = this.price + 4,5;
                this.calories = this.calories + 20;
            }

            if (element == '  мясная котлета') {
                this.price = this.price + 10;
                this.calories = this.calories + 10;
            }

            if (element == ' сыр') {
                this.price = this.price + 10;
                this.calories = this.calories + 5;
            }

            if (element == ' лук') {
                this.price = this.price + 5;
                this.calories = this.calories + 5;
            }

            if (element == ' огурец маринованный') {
                this.price = this.price + 5;
                this.calories = this.calories + 5;
            }

            if (element == ' соль') {
                this.price = this.price + 1;
                this.calories = this.calories + 5;
            }
        });

    }

    removeTopping(topping) {
        stuffing.forEach(element => {

            if (element !== ' кетчуп') {
                this.price = this.price - 4,5;
                this.calories = this.calories - 10;
            }

            if (element !== ' горчица') {
                this.price = this.price - 4,5;
                this.calories = this.calories - 20;
            }

            if (element !== '  мясная котлета') {
                this.price = this.price - 10;
                this.calories = this.calories - 10;
            }

            if (element !== ' сыр') {
                this.price = this.price - 10;
                this.calories = this.calories - 5;
            }

            if (element !== ' лук') {
                this.price = this.price - 5;
                this.calories = this.calories - 5;
            }

            if (element !== ' огурец маринованный') {
                this.price = this.price - 5;
                this.calories = this.calories - 5;
            }

            if (element !== ' соль') {
                this.price = this.price - 1;
                this.calories = this.calories - 5;
            }
        });
    }
    getToppings(topping) {
        // Получить список добавок 
    }
    getSize() {
        // Узнать размер гамбургера
        if (this.size == 'big') {
            this.price = 100;
            this.calories = 40;
        }

        if (this.size == 'small') {
            this.price = 19;
            this.calories = 100;
        }

    }
    getStuffing() {
        console.log(`Рубленый бифштекс из натуральной цельной говядины на карамелизованной булочке, заправленной ${this.stuffing} `)
        // Узнать начинку гамбургера 
    }
    calculatePrice() {
        // Узнать цену 
        let total_price = this.price
        console.log(`цена ${this.size} Cheeseburger: ${total_price} `)

    }
    calculateCalories() {
        // Узнать калорийность 
        let total_calories = this.calories
        console.log(`цена ${this.size} Hamburger: ${total_calories}`);
    }
}