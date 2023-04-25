'use strict'

let buy_btn = document.querySelectorAll('.buy-btn');
buy_btn.forEach(element => element.addeaddEventListener('click', click_buy_btn));




function click_buy_btn (event) {
    const elem = event.currentTarget.parentNode.querySelector('.product_item_detailed_block');
    console.log('elem');

    elem.style.display = "block";
}


let stuffing = [' салатом', ' майонезом'];
const big_Hamburger = new Hamburger('small', stuffing);

const big_Cheeseburger = new Cheeseburger('big', stuffing)