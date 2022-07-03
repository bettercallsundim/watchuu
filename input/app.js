var swiper = new Swiper(".mySwiper", {
   pagination: {
     el: ".swiper-pagination",
   },
   slidesPerView : 3,
 });

 const $=document.querySelector.bind(document);
 const $$=document.querySelectorAll.bind(document);
 $('.menu').onclick=()=>{
  $('.mblnav').classList.toggle('hidden');
 }