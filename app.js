document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems);
  
});


var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("carousel-item");
  for (i = 0; i < x.length; i++) {
    x[i].classList.add(`carousel${i}`);
  }

  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  setTimeout(carousel, 500);
}