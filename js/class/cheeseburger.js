'use strict'

class Cheeseburger extends Hamburger {
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

            if (true) {
                this.price = this.price + 10;
                this.calories = this.calories + 20;
            }

            if (element == ' соусом') {
                this.price = this.price + 5;
                this.calories = this.calories + 10;
            }

            if (element == ' майонезом') {
                this.price = this.price + 5;
                this.calories = this.calories + 10;
            }

            if (element == ' салатом') {
                this.price = this.price + 20;
                this.calories = this.calories + 5;
            }
        });

    }

    removeTopping(topping) {
        // Убрать добавку 
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
            this.price = 50;
            this.calories = 20;
        }

    }
    getStuffing() {
        console.log(`Рубленый бифштекс из натуральной цельной говядины на карамелизованной булочке, заправленной сыром, ${this.stuffing} `)
        // Узнать начинку гамбургера 
    }
    calculatePrice() {
        // Узнать цену 
        let total_price = this.price
        console.log(`цена ${this.size} Cheeseburger: ${total_price} `)

    }
    calculateCalories() {
        // Узнать калорийность 
    }
}