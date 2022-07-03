if(window.screen.width>768){
  var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
    slidesPerView : 3,
  });
}else{
  var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
    slidesPerView : 2,
  });
}
window.onresize=()=>{
  if(window.screen.width>768){
    var swiper = new Swiper(".mySwiper", {
      pagination: {
        el: ".swiper-pagination",
      },
      slidesPerView : 3,
    });
  }else{
    var swiper = new Swiper(".mySwiper", {
      pagination: {
        el: ".swiper-pagination",
      },
      slidesPerView : 2,
    });
  }
}
 const $=document.querySelector.bind(document);
 const $$=document.querySelectorAll.bind(document);
 $('.menu').onclick=()=>{
  $('.mblnav').classList.toggle('hidden');
 }