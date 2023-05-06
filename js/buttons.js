'use strict'


function addEvent_for_buy_btn() {
    let buy_btn = document.querySelectorAll('.buy-btn');
    buy_btn.forEach(element => element.addEventListener('click', click_buy_btn));

}

function addEvent_for_close_product_item() {
    let close_btn = document.getElementById('close_product_item_detailed_block');
    close_btn.addEventListener('click', close_product_item);

}

function open_product_item() {
    const elem = document.querySelector('.product_item_detailed_block');
    elem.style.display = "block";
}

function close_product_item() {
    const elem = document.querySelector('.product_item_detailed_block');
    elem.style.display = "none";
}

function get_product(event) {
    let product_title = event.currentTarget.parentNode.querySelector('.title_product-item').innerText;
    if (product_title == 'Hamburger') {

        Hamburger.staticMethod(product_title);
        //Hamburger.staticMethod2();
        new Burger('small', 'stuffing');

        window.onload = () => {
            document.querySelectorAll('burger_input').addEventListener('change', () => {

                //  burger.showSum('#price', '#calories');
            })
        }
        // new Burger();

    }
    if (product_title == 'Cheeseburger') {
        Cheeseburger.staticMethod(product_title)
        let stuffing = [' салатом', ' майонезом'];
        new Cheeseburger('small', stuffing);
    }
    if (product_title == 'Big Mac') {
        Big_Mac.staticMethod(product_title);
        new Big_Mac('small',);
    }
}

function click_buy_btn(event) {
    open_product_item();
    get_product(event);
}

addEvent_for_buy_btn();
addEvent_for_close_product_item();



