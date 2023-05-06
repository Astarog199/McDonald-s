'use strict'

// showSum(price, calories){
//     document.querySelector(price).textContent = this._sumPrice();
//     document.querySelector(calories).textContent = this._sumCalories();
// }

class Burger {
    constructor(size, stuffing, topping) {
        this.size = new Hamburger(this._select(size));
        this.stuffing = new Hamburger(this._select(stuffing));
        this.toppings = this._getToppings(topping);
    }

    _select(name) {
        return document.querySelector(`input[name="${name}"]:checked`);
    }

    _getToppings(name) {
        let result = [];
        this._selectAll(name).forEach(el => result.push(new Param(el)));
        return result;
    }

    _selectAll(name) {
        return [...document.querySelectorAll(`input[name="${name}"]:checked`)];
    }
}

class Hamburger {
    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.price = 0;
        this.calories = 0;
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

            <h4>Состав бургера:</h4>

            <input type="checkbox" name="stuffing"  id="cheese" value="Cheese" class="burger_input" checked>
            <label for="cheese">кетчуп</label><br>

            <input type="checkbox" name="stuffing"  id="cheese" value="Cheese" class="burger_input" checked>
            <label for="cheese">горчица</label><br>

            <input type="checkbox" name="stuffing"  id="cheese" value="Cheese" class="burger_input" checked>
            <label for="cheese">мясная котлета</label><br>

            <input type="checkbox" name="stuffing"  id="cheese" value="Cheese" class="burger_input" checked>
            <label for="cheese">сыр</label><br>

            <input type="checkbox" name="stuffing"  id="potato" value="Potato" class="burger_input" checked>
            <label for="potato">лук </label><br>

            <input type="checkbox" name="stuffing"  id="potato" value="Potato" class="burger_input" checked>
            <label for="potato">помидор </label><br>

            <input type="checkbox" name="stuffing"  id="salad" value="Salad" class="burger_input" checked>
            <label for="salad">огурец маринованный</label><br>
            
            <input type="checkbox" name="stuffing" id="potato" value="Potato" class="burger_input" checked>
            <label for="potato">соль </label><br>

        </fieldset>
        </div>
    </div>`;


    };








    static staticMethod2() {
        // let name = element.value;

        // function select(name) {
        //     return document.querySelectorAll(`input[name="${name}"]:checked`);
        // }
        let stuffing = [];
        let input_checked = document.querySelectorAll(`input[name]:checked`);
        input_checked.forEach(element => { stuffing.push(new Hamburger(element)) });


        //  let input_checked = document.querySelectorAll(`input[name="${name}"]:checked`);
        //  input_checked.forEach(element => { stuffing.push(element) });

        // this._selectAll(name).forEach(el => result.push(new Param(el)));
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
    removeTopping() {
        stuffing.forEach(element => {

            if (element !== ' кетчуп') {
                this.price = this.price - 4, 5;
                this.calories = this.calories - 10;
            }

            if (element !== ' горчица') {
                this.price = this.price - 4, 5;
                this.calories = this.calories - 20;
            }

            if (element !== '  мясная котлета') {
                this.price = this.price - 10;
                this.calories = this.calories - 10;
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

        let total_price = this.price;
        console.log(`цена ${this.size} Hamburger: ${total_price}`);

    }
    calculateCalories() {
        // Узнать калорийность 

        let total_calories = this.calories
        console.log(`цена ${this.size} Hamburger: ${total_calories}`);
    }
}