let oppen = document.querySelector('.location-div');
let hamburger = document.querySelector('.hamburger');
let food = document.querySelector('.food-bar')


hamburger.addEventListener ('click' , function(){
   hamburger.classList.toggle('active');
   oppen.classList.toggle('oppen')
   food.classList.toggle('food')
   
});





var swiper = new Swiper(".slide-content", {
   slidesPerView: 3,
   spaceBetween: 25,
   centerSlide: 'true',
   fade: 'true',
   grabCursor: 'true',
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
     dynamicBullets: true,
   },
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   }
 });