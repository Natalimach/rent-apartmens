var slideIndexpl = 1;

showSlidespl(slideIndexpl);

function plusSlidespl(n) {
  showSlidespl(slideIndexpl += n);
}

function currentSlidepl(n) {
  showSlidespl(slideIndexpl = n);
}

function showSlidespl(n) {
  var j;
  var slidespl = document.getElementsByClassName("mySlides");
  var dotspl = document.getElementsByClassName("dot");
  if (n > slidespl.length) {slideIndexpl = 1}
  if (n < 1) {slideIndexpl = slidespl.length}
  for (j = 0; j < slidespl.length; j++) {
      slidespl[j].style.display = "none";
  }
  for (j = 0; j < dotspl.length; j++) {
      dotspl[j].className = dotspl[j].className.replace(" active", "");
  }
  slidespl[slideIndexpl-1].style.display = "block";
  dotspl[slideIndexpl-1].className += " active";
}
