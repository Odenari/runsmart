$(document).ready(function(){
  $('.carousel__inner').slick({
    dots: true,
    dotsClass:'slick-dots',
    focusOnSelect: true,
    speed: 800,
    adoptiveHeght: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="../icons/chevronLeft.svg" alt="left"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="../icons/chevronRight.svg" alt="right"></button>',
    responsive: [
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  });
});

// const fitnessBtn = document.querySelector('#fitness'); //сохраняем ссылку на конкретный html элемент

// fitnessBtn.addEventListener('click', function() {
//   fitnessBtn.classList.toggle('active'); //classList - это массив классов конкретнго html элемент
// })

// const runningBtn = document.querySelector('#running');

// runningBtn.addEventListener('click', function() {
//   runningBtn.classList.toggle('active');
// })

// const triathloneBtn = document.querySelector('#triathlone');

// triathloneBtn.addEventListener('click', function() {
//   triathloneBtn.classList.toggle('active');
// })

// forEach - принимает только стрелочную функцию, btn - это параметр функции имя элемента псевдомассива 
// const arrBtn = document.querySelectorAll('.catalog-tabs__item'); //querySelectorAll - возвращает псевдомассив (.length, index и foreach )
// arrBtn.forEach((btn) => { // btn - это сам элемент со страницы!
//   btn.addEventListener('click', function() { //addEventListener - выбираем тип собтия и описываем само событие (изменения элемента .etc)
//     btn.classList.add('active');
//   })
// })
//target-свойство объекта event, обработчик событий всегда принимает два параметра: тип ивента и объект

//Делегирование событий ниже
//Обработчик присваивается родительскому элементу, делегирование исп. для сокращения кода =)

let currentBtn = "fitness";
let currentCatalog = "fitness-models";

const tabBtn = document.querySelector('.catalog-tabs');
const catalogList = document.querySelectorAll('.catalog-content');
const tabList = document.querySelectorAll('.catalog-tabs__item');

tabBtn.addEventListener('click', (event) => {
  const target = event.target;
  
  tabList.forEach(btn => {
    btn.classList.remove('active');
  })
  
  catalogList.forEach(catalog => {
    catalog.classList.remove('active')
  })
  
  if (target.classList.contains('catalog-tabs__item')) {
    target.classList.add('active');
    currentBtn = target.id;
  } else if (target.parentNode.classList.contains('catalog-tabs__item')) {
    target.parentNode.classList.add('active');
    currentBtn = target.parentNode.id;
  } 
  
  currentCatalog = document.querySelector(`#${currentBtn}-models`);
  currentCatalog.classList.add('active');
});

const catalog = document.querySelector('.catalog');

catalog.addEventListener('click', (event) => {
  event.preventDefault();
  const link = event.target;

  if(link.classList.contains('product-card__descr-side')) {
    link.parentNode.classList.remove('active');
    link.parentNode.nextSibling.nextSibling.classList.add('active');
  }

  if(link.classList.contains('product-card__promo-side')) {
    link.parentNode.classList.remove('active');
    link.parentNode.previousSibling.previousSibling.classList.add('active');
  }
});
