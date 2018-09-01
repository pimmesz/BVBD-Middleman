let slideIndex = 1;
const slides = document.getElementsByClassName("mySlides");
const dots = document.getElementsByClassName("dot");
const back = document.querySelector(".slideshow__arrow-back");
const next = document.querySelector(".slideshow__arrow-next");

showSlides(slideIndex);
next.addEventListener("click", nextSlide);
back.addEventListener("click", previousSlide);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
      // for (i = 0; i < slides.length; i++) {
      //   slides[i].style.display = "none";
      // }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
        slides[i].className = slides[i].className.replace(" active", "");
      }
      // slides[slideIndex-1].style.display = "block";
      slides[slideIndex-1].className += ' active';
      dots[slideIndex-1].className += " active";
    }

    function nextSlide() {
      const currentSlide = document.querySelector(".mySlides.active");
      const currentDot = document.querySelector(".dot.active");
      let nextSlide = currentSlide.nextSibling.nextSibling;

      nextSlide == null ? nextSlide = slides[0] : nextSlide;
      currentSlide.classList.remove("active");
      nextSlide.classList.add("active");

      let nextDot = currentDot.nextSibling.nextSibling;
      nextDot == null ? nextDot = dots[0] : nextDot;
      currentDot.classList.remove("active");
      nextDot.classList.add("active");
    }

    function previousSlide(){
      const currentSlide = document.querySelector(".mySlides.active");
      const currentDot = document.querySelector(".dot.active");

      let previousSlide = currentSlide.previousSibling.previousSibling;

      previousSlide.tagName == undefined ? previousSlide = slides[slides.length-1] : previousSlide;
      currentSlide.classList.remove("active");
      previousSlide.classList.add("active");

      let previousDot = currentDot.previousSibling.previousSibling;
      previousDot == null ? previousDot = dots[dots.length-1] : previousDot;
      currentDot.classList.remove("active");
      previousDot.classList.add("active");
    }
