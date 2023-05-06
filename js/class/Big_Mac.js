'use strict'

class Big_Mac extends Hamburger {

    constructor(size, stuffing, price, calories) {
        super(size, stuffing, price, calories);

        this.getSize();
        this.addTopping();
        this.getStuffing();
        this.calculatePrice();
        this.calculateCalories();
    }

    static staticMethod(product_title) {

        const block = document.querySelector('.burger_param');

        block.innerHTML = `<div class="product-item"}>
        <img class="img-item" src="style/pictures/catalog/${product_title}.png" alt="Big Mac">
        <div class="desc">
            <h3 class="product_title"> ${product_title}</h3>

            <fieldset class="hamburger-fieldset-inside">
                <h4>Выберите размер бургера:</h4>
                <input type="radio" name="size" id="bigburger" value="Big" class="hamburger-input" data-price="100" data-calories="40"
                       checked>
                <label for="bigburger">Большой (100 рублей, 40 калорий)</label><br>
                <input type="radio" name="size" id="smallburger" value="Small" class="hamburger-input" data-price="50" data-calories="20">
                <label for="smallburger">Малый (50 рублей, 20 калорий)</label>
            </fieldset>

            <fieldset class="hamburger-fieldset-inside">

            <h4>Состав бургера:</h4>

                <input type="checkbox" name="add" id="cheese" value="Cheese" class="hamburger-input" checked>
                <label for="cheese">мясная котлета</label><br>

                <input type="checkbox" name="add" id="potato" value="Potato" class="hamburger-input" checked>
                <label for="potato">лук </label><br>

                <input type="checkbox" name="add" id="potato" value="Potato" class="hamburger-input" checked>
                <label for="potato">помидор </label><br>

                <input type="checkbox" name="add" id="salad" value="Salad" class="hamburger-input" checked>
                <label for="salad">салат</label><br>

                <input type="checkbox" name="add" id="potato" value="Potato" class="hamburger-input" checked>
                <label for="potato">соль </label><br>

            </fieldset>

            <fieldset class="hamburger-fieldset-inside">
                <h4>Выберите доп. опцию:</h4>
                <input type="checkbox" checked name="topings" id="seasoning" value="Spices" class="hamburger-input" data-price="15" data-calories="0">
                <label for="seasoning">Посыпать приправой</label><br>
                <input type="checkbox" name="topings" id="mayonnaise" value="Mayo" class="hamburger-input" data-price="20" data-calories="5">
                <label for="mayonnaise">Полить майонезом</label><br>
            </fieldset>
        </div>`;
    };



    addTopping() {
        // Добавить добавку 

        this.stuffing.forEach(element => {

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
        console.log(`Калории ${this.size}: ${total_calories}`);
    }
}