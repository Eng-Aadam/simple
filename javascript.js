
window.addEventListener("DOMContentLoaded",function(){
const sectionsToAnimate = document.querySelectorAll
("header, .dhamn, .main .logo, .image img ,.icons1,.icons2,.icons3,.icons4, .main6, .main5") ;
const observer = new IntersectionObserver(function (entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
}, {
  threshold: 0.5
});

// Ku socodsii observer-ka dhammaan qaybaha
sectionsToAnimate.forEach(section => {
  observer.observe(section);
});




});