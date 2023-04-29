'use strict'
class ProductList {
  #goods;
  #allProducts;

  constructor(container = '.products_catalog') {
    this.container = container;
    this.#goods = [];
    this.#allProducts = [];

    this.#fetchGoods();
    this.#render();
  }

  #fetchGoods() {
    this.#goods = [
      { id: 1, title: 'Hamburger', price: 20000, img: "style/pictures/catalog/Hamburger.png" },
      { id: 2, title: 'Cheeseburger', price: 1500, img: "style/pictures/catalog/Cheeseburger.png" },
      { id: 3, title: 'Big Mac', price: 5000, img: "style/pictures/catalog/Big Mac.png" },
    ];
  }

  #render() {
    const block = document.querySelector(this.container);

    for (let product of this.#goods) {
      const productObject = new ProductItem(product);

      this.#allProducts.push(productObject);
      block.insertAdjacentHTML('beforeend', productObject.render());
    }
  }
}

class ProductItem {
  constructor(product, img = 'https://via.placeholder.com/200x150') {
    this.title = product.title;
    this.price = product.price;
    this.id = product.id;
    this.img = product.img;
  }

  render() {
    return `<div class="product-item" data-id="${this.id}">
              <img class="img-item" src="${this.img}" alt="Some img">
              <div class="desc">
                  <h3 class="title_product-item">${this.title}</h3>
                  <p>${this.price} \u20bd</p>
                  <button class="buy-btn">Купить</button>
              </div>
          </div>`;
  }
}

const list = new ProductList();