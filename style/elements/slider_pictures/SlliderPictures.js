document.head.insertAdjacentHTML("afterbegin", '<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">');

//получаем объект 
let slider_pictures = document.querySelector('.slider_pictures');

//Создаём иконку загрузки
let loadIcon = document.createElement('i');
loadIcon.classList.add('fas', 'fa-spinner', 'fa-spin');
slider_pictures.insertAdjacentElement ("afterbegin", loadIcon);

//Создаём левую стрелку
let leftArrow = document.createElement('i');
leftArrow.classList.add('fas', 'fa-chevron-circle-left', 'slider-leftArrow');
slider_pictures.insertAdjacentElement ("beforeend", leftArrow);

//Создаём правую стрелку
let rightArrow = document.createElement('i');
rightArrow.classList.add('fas', 'fa-chevron-circle-right', 'slider-rightArrow');
slider_pictures.insertAdjacentElement ("beforeend", rightArrow);

/** функция после загрузки картинок обращается к функции hideLoadIcon */
window.addEventListener('load', function(){
    hideLoadIcon(loadIcon); 

    // иницилизация слайдера
    images.init();

    leftArrow.addEventListener('click', function (){
        images.setNextLeftImage();
    });

    rightArrow.addEventListener('click', function (){
        images.setNextRightImage();
    });
});
/**Функция скрывает иконку после загрузки картинок */
function hideLoadIcon(loadIcon) {
    loadIcon.style.display = "none";
}

// функция задаёт ширину слайдера

function setSizes(slider_pictures) {
    let width = slider_pictures.getAttribute("data-width");
    let height = slider_pictures.getAttribute("data-height");
    if (width !== null && width !== "") {
        slider_pictures.style.width = width;
    }
    if (height !== null && height !== "") {
        slider_pictures.style.height = height;
    }
}
setSizes(slider_pictures);

//Объект слайдера
let images = {
    /** номер текущего изображение */
    currentIdx:0,
    /**slies элементы слайдов */

    init(){
        this.slides = document.querySelectorAll ('.slider_pictures-item');
        this.showImageWithCurrentIdx();
    },

    /** удалить класс */
    showImageWithCurrentIdx() {
        this.slides[this.currentIdx].classList.remove ('hidden-slide');
    },

    /**  скрывает текущей класс     */
    hideVisibleImage() {
        this.slides [this.currentIdx].classList.add("hidden-slide");
    },

    /** переключить на предыдущее изображение */
    setNextLeftImage() {
        this.hideVisibleImage();
        if(this.currentIdx == 0) {
            this.currentIdx = this.slides.length -1;
        } else {
            this.currentIdx--;
        }
        this.showImageWithCurrentIdx();
    },

        /** переключить на следующее изображение */
        setNextRightImage() {
            this.hideVisibleImage();
            if(this.currentIdx == this.slides.length -1) {
                this.currentIdx = 0;
            } else {
                this.currentIdx++;
            }
            this.showImageWithCurrentIdx();
        },
};