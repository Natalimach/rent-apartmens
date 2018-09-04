function openModalImage() {
  document.getElementById('myModalImage').style.display = "block";
}

function closeModalImage() {
  document.getElementById('myModalImage').style.display = "none";
}

var slideIndex = 1;
showSlidesImage(slideIndex);

function plusSlidesImage(n) {
  showSlidesImage(slideIndex += n);
}

function currentSlide(n) {
  showSlidesImage(slideIndex = n);
}

function showSlidesImage(n) {
  var i;
  var slides = document.getElementsByClassName("mySlidesImage");
  var dots = document.getElementsByClassName("demo-image");
  var captionText = document.getElementById("captionImage");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}


function openModalImage2() {
  document.getElementById('myModalImage2').style.display = "block";
}

function closeModalImage2() {
  document.getElementById('myModalImage2').style.display = "none";
}

var slideIndex2 = 1;
showSlidesImage2(slideIndex2);

function plusSlidesImage2(n) {
  showSlidesImage2(slideIndex2 += n);
}

function currentSlide2(n) {
  showSlidesImage2(slideIndex2 = n);
}

function showSlidesImage2(n) {
  var j;
  var slides2 = document.getElementsByClassName("mySlidesImage2");
  var dots2 = document.getElementsByClassName("demo-image2");
  var captionText2 = document.getElementById("captionImage2");
  if (n > slides2.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = slides2.length}
  for (j = 0; j < slides2.length; j++) {
      slides2[j].style.display = "none";
  }
  for (j = 0; j < dots2.length; j++) {
      dots2[j].className = dots2[j].className.replace(" active", "");
  }
  slides2[slideIndex2-1].style.display = "block";
  dots2[slideIndex2-1].className += " active";
  captionText2.innerHTML = dots2[slideIndex2-1].alt;
}





function openModalImage3() {
  document.getElementById('myModalImage3').style.display = "block";
}

function closeModalImage3() {
  document.getElementById('myModalImage3').style.display = "none";
}

var slideIndex3 = 1;
showSlidesImage3(slideIndex3);

function plusSlidesImage3(n) {
  showSlidesImage3(slideIndex3 += n);
}

function currentSlide3(n) {
  showSlidesImage3(slideIndex3 = n);
}

function showSlidesImage3(n) {
  var x;
  var slides3 = document.getElementsByClassName("mySlidesImage3");
  var dots3 = document.getElementsByClassName("demo-image3");
  var captionText3 = document.getElementById("captionImage3");
  if (n > slides3.length) {slideIndex3 = 1}
  if (n < 1) {slideIndex3 = slides3.length}
  for (x = 0; x < slides3.length; x++) {
      slides3[x].style.display = "none";
  }
  for (x = 0; x < dots3.length; x++) {
      dots3[x].className = dots3[x].className.replace(" active", "");
  }
  slides3[slideIndex3-1].style.display = "block";
  dots3[slideIndex3-1].className += " active";
  captionText3.innerHTML = dots3[slideIndex3-1].alt;
}


function openModalImage4() {
  document.getElementById('myModalImage4').style.display = "block";
}

function closeModalImage4() {
  document.getElementById('myModalImage4').style.display = "none";
}

var slideIndex4 = 1;
showSlidesImage4(slideIndex4);

function plusSlidesImage4(n) {
  showSlidesImage4(slideIndex4 += n);
}

function currentSlide4(n) {
  showSlidesImage4(slideIndex4 = n);
}

function showSlidesImage4(n) {
  var y;
  var slides4 = document.getElementsByClassName("mySlidesImage4");
  var dots4 = document.getElementsByClassName("demo-image4");
  var captionText4 = document.getElementById("captionImage4");
  if (n > slides4.length) {slideIndex4 = 1}
  if (n < 1) {slideIndex4 = slides4.length}
  for (y = 0; y < slides4.length; y++) {
      slides4[y].style.display = "none";
  }
  for (y = 0; y < dots4.length; y++) {
      dots4[y].className = dots4[y].className.replace(" active", "");
  }
  slides4[slideIndex4-1].style.display = "block";
  dots4[slideIndex4-1].className += " active";
  captionText4.innerHTML = dots4[slideIndex4-1].alt;
}


function openModalImage5() {
  document.getElementById('myModalImage5').style.display = "block";
}

function closeModalImage5() {
  document.getElementById('myModalImage5').style.display = "none";
}

var slideIndex5 = 1;
showSlidesImage5(slideIndex5);

function plusSlidesImage5(n) {
  showSlidesImage5(slideIndex5 += n);
}

function currentSlide5(n) {
  showSlidesImage5(slideIndex5 = n);
}

function showSlidesImage5(n) {
  var b;
  var slides5 = document.getElementsByClassName("mySlidesImage5");
  var dots5 = document.getElementsByClassName("demo-image5");
  var captionText5 = document.getElementById("captionImage5");
  if (n > slides5.length) {slideIndex5 = 1}
  if (n < 1) {slideIndex5 = slides5.length}
  for (b = 0; b < slides5.length; b++) {
      slides5[b].style.display = "none";
  }
  for (b = 0; b < dots5.length; b++) {
      dots5[b].className = dots5[b].className.replace(" active", "");
  }
  slides5[slideIndex5-1].style.display = "block";
  dots5[slideIndex5-1].className += " active";
  captionText5.innerHTML = dots5[slideIndex5-1].alt;
}


function openModalImage6() {
  document.getElementById('myModalImage6').style.display = "block";
}

function closeModalImage6() {
  document.getElementById('myModalImage6').style.display = "none";
}

var slideIndex6 = 1;
showSlidesImage6(slideIndex6);

function plusSlidesImage6(n) {
  showSlidesImage6(slideIndex6 += n);
}

function currentSlide6(n) {
  showSlidesImage6(slideIndex6 = n);
}

function showSlidesImage6(n) {
  var с;
  var slides6 = document.getElementsByClassName("mySlidesImage6");
  var dots6 = document.getElementsByClassName("demo-image6");
  var captionText6 = document.getElementById("captionImage6");
  if (n > slides6.length) {slideIndex6 = 1}
  if (n < 1) {slideIndex6 = slides6.length}
  for (с = 0; с < slides6.length; с++) {
      slides6[с].style.display = "none";
  }
  for (с = 0; с < dots6.length; с++) {
      dots6[с].className = dots6[с].className.replace(" active", "");
  }
  slides6[slideIndex6-1].style.display = "block";
  dots6[slideIndex6-1].className += " active";
  captionText6.innerHTML = dots6[slideIndex6-1].alt;
}



function openModalImage7() {
  document.getElementById('myModalImage7').style.display = "block";
}

function closeModalImage7() {
  document.getElementById('myModalImage7').style.display = "none";
}

var slideIndex7 = 1;
showSlidesImage7(slideIndex7);

function plusSlidesImage7(n) {
  showSlidesImage7(slideIndex7 += n);
}

function currentSlide7(n) {
  showSlidesImage7(slideIndex7 = n);
}

function showSlidesImage7(n) {
  var d;
  var slides7 = document.getElementsByClassName("mySlidesImage7");
  var dots7 = document.getElementsByClassName("demo-image7");
  var captionText7 = document.getElementById("captionImage7");
  if (n > slides7.length) {slideIndex7 = 1}
  if (n < 1) {slideIndex7 = slides7.length}
  for (d = 0; d < slides7.length; d++) {
      slides7[d].style.display = "none";
  }
  for (d = 0; d < dots7.length; d++) {
      dots7[d].className = dots7[d].className.replace(" active", "");
  }
  slides7[slideIndex7-1].style.display = "block";
  dots7[slideIndex7-1].className += " active";
  captionText7.innerHTML = dots7[slideIndex7-1].alt;
}



function openModalImage8() {
  document.getElementById('myModalImage8').style.display = "block";
}

function closeModalImage8() {
  document.getElementById('myModalImage8').style.display = "none";
}

var slideIndex8 = 1;
showSlidesImage8(slideIndex8);

function plusSlidesImage8(n) {
  showSlidesImage8(slideIndex8 += n);
}

function currentSlide8(n) {
  showSlidesImage8(slideIndex8 = n);
}

function showSlidesImage8(n) {
  var g;
  var slides8 = document.getElementsByClassName("mySlidesImage8");
  var dots8 = document.getElementsByClassName("demo-image8");
  var captionText8 = document.getElementById("captionImage8");
  if (n > slides8.length) {slideIndex8 = 1}
  if (n < 1) {slideIndex8 = slides8.length}
  for (g = 0; g < slides8.length; g++) {
      slides8[g].style.display = "none";
  }
  for (g = 0; g < dots8.length; g++) {
      dots8[g].className = dots8[g].className.replace(" active", "");
  }
  slides8[slideIndex8-1].style.display = "block";
  dots8[slideIndex8-1].className += " active";
  captionText8.innerHTML = dots8[slideIndex8-1].alt;
}
