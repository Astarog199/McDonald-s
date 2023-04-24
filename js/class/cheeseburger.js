'use strict'

class Cheeseburger extends  Hamburger {
    constructor (size, stuffing, price, calories){
        this.addTopping()

    }


    addTopping() { 
    // Добавить добавку 

    stuffing.forEach(element => {
    if(element == 'ketchup'){
        this.price =  this.price+5;
        this.calories = this.calories + 10;
     }

     if(element == 'mayonnaise'){
        this.price =  this.price+5;
        this.calories = this.calories + 10;
     }
    })
}
}