'use strict'

class Cheeseburger extends Hamburger {
    constructor(size, stuffing, price, calories) {
        super(size, stuffing, price, calories);
        this.getSize();
        this.addTopping();
        this.calculatePrice();
        this.getStuffing();

    }

    static staticMethod(product_title) {

        const block = document.querySelector('.burger_param');

        block.innerHTML = `<div class="product-item">
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

            <h4>Выберите начинку бургера:</h4>

            <input type="checkbox" name="add" id="cheese" value="Cheese" class="hamburger-input" checked>
            <label for="cheese">кетчуп</label><br>

            <input type="checkbox" name="add" id="cheese" value="Cheese" class="hamburger-input" checked>
            <label for="cheese">горчица</label><br>

            <input type="checkbox" name="add" id="cheese" value="Cheese" class="hamburger-input" checked>
            <label for="cheese">мясная котлета</label><br>

            <input type="checkbox" name="add" id="cheese" value="Cheese" class="hamburger-input" checked>
            <label for="cheese">сыр</label><br>

            <input type="checkbox" name="add" id="potato" value="Potato" class="hamburger-input" checked>
            <label for="potato">лук </label><br>

            <input type="checkbox" name="add" id="potato" value="Potato" class="hamburger-input" checked>
            <label for="potato">помидор </label><br>

            <input type="checkbox" name="add" id="salad" value="Salad" class="hamburger-input" checked>
            <label for="salad">огурец маринованный</label><br>
            
            <input type="checkbox" name="add" id="potato" value="Potato" class="hamburger-input" checked>
            <label for="potato">соль </label><br>

        </fieldset>

        <fieldset class="hamburger-fieldset-inside">
            <h4>Выберите доп. опцию:</h4>
            <input type="checkbox" checked name="topings" id="seasoning" value="Spices" class="hamburger-input" data-price="15" data-calories="0">
            <label for="seasoning">Посыпать приправой (15 рублей, 0 калорий)</label><br>
            <input type="checkbox" name="topings" id="mayonnaise" value="Mayo" class="hamburger-input" data-price="20" data-calories="5">
            <label for="mayonnaise">Полить майонезом (20 рублей, 5 калорий)</label><br>
        </fieldset>

        </div>
    </div>`;


    };


    addTopping() {
        // Добавить добавку 

        this.stuffing.forEach(element => {

            if (element == ' кетчуп') {
                this.price = this.price + 4, 5;
                this.calories = this.calories + 10;
            }

            if (element == ' горчица') {
                this.price = this.price + 4, 5;
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