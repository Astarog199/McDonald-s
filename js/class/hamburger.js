'use strict'

class Hamburger {
    constructor(size, stuffing) { 
        this.size = size;
        this.stuffing = stuffing;
        this.price = 0;
        this.calories = 0;
    
        this.getSize();
        this.addTopping ();
        this.calculatePrice();
        this.getStuffing();
     }
    addTopping() { 
        // Добавить добавку 
    
        stuffing.forEach(element => {
        if(element == ' сыром'){
            this.price = this.price+10;
            this.calories = this.calories + 20;
         } 
         if(element == ' салатом'){
            this.price = this.price+20;
            this.calories = this.calories + 5;
         } 
         if(element == ' картофелем'){
            this.price =  this.price+15;
            this.calories = this.calories + 10;
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
        if(this.size == 'big'){
            this.price = 100;
            this.calories = 40;
         }
    
         if(this.size == 'small'){
            this.price = 50;
            this.calories = 20;
         }
    
     }
    getStuffing() { 
        console.log (`Рубленый бифштекс из натуральной цельной говядины на карамелизованной булочке, заправленной ${this.stuffing} `)
        // Узнать начинку гамбургера 
    }
    calculatePrice() {
         // Узнать цену 
    
        let total_price = this.price
    
        console.log(`цена ${this.size} Hamburger: ${total_price} ` )
    
        }
    calculateCalories() { 
        // Узнать калорийность 
    }
    }