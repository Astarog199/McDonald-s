'use strict'

function addEvent_for_buy_btn (){
    let buy_btn = document.querySelectorAll('.buy-btn');
    buy_btn.forEach(element => element.addEventListener('click', click_buy_btn));
    
}

function open_product_item(event){
    const elem = document.querySelector('.product_item_detailed_block');
    elem.style.display = "block";
}

function get_product(event){
    let product_title =  event.currentTarget.parentNode.querySelector('.title_product-item').innerText;
    console.log(product_title);
    if(product_title == 'Hamburger'){
        let stuffing = [' салатом', ' майонезом'];
        new Hamburger ('small', stuffing);
    }
    if(product_title == 'Cheeseburger'){
        let stuffing = [' салатом', ' майонезом'];
        new Cheeseburger ('small', stuffing);
    }
    if(product_title == 'Big Mac'){
        let stuffing = [' салат', ' помидор'];
        new Big_Mac('small', stuffing);
    }
}

function click_buy_btn (event) {


    open_product_item(event);
    get_product(event);
}




addEvent_for_buy_btn();




