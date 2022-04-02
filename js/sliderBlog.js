var slidIndex = 1;
showSlides(slidIndex);

function nextSlide() {
  showSlides((slidIndex += 1));
}

function prevSlide() {
  showSlides((slidIndex -= 1));
}

function currentSlide(n) {
  showSlides((slidIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("blog_item");
  var dots = document.getElementsByClassName("blog_dots_item");
  if (n > slides.length) {
    slidIndex = 1;
  }
  if (n < 1) {
    slidIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slidIndex - 1].style.display = "block";
  dots[slidIndex - 1].className += " active";
}
