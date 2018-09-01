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
  resetSlides();
  document.querySelector(".mySlides.active").classList = ("mySlides inactive");
  n -= 1;
  slides[n].classList = 'mySlides active';
  slides[n-1].classList = 'mySlides previous';
  slides[n+1].classList = 'mySlides next';
  document.querySelector(".dot.active").classList = "dot";
  dots[n].className += " active";
  setEventTimeOut();
}

function showSlides(n) {
  let i;
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
        slides[i].className = slides[i].className.replace(" active", "");
      }
      slides[slideIndex-1].classList = 'mySlides active';
      slides[slideIndex].classList = 'mySlides next';
      slides[slides.length-1].classList = 'mySlides previous';
      dots[slideIndex-1].className += " active";
    }

    function resetSlides(){
      if(document.querySelector(".mySlides.previous") && document.querySelector(".mySlides.next")){
        document.querySelector(".mySlides.previous").classList = ("mySlides inactive");
        document.querySelector(".mySlides.next").classList = ("mySlides inactive");
      }
    }

function resetAllSlides(){
  resetSlides();
  document.querySelector(".mySlides.active").classList = ("mySlides inactive");
}

function resetEvent(){
  next.addEventListener("click", nextSlide)
  back.addEventListener("click", previousSlide);
  let index = 0;
  document.querySelectorAll(".dot").forEach(function(element) {
    index += 1;
    element.setAttribute("onclick", `currentSlide(${index})`);
  });
}

function setEventTimeOut(){
  next.removeEventListener("click", nextSlide);
  back.removeEventListener("click", previousSlide);
  document.querySelectorAll(".dot").forEach(function(element) {
    element.setAttribute("onclick", "");
  });
  setTimeout(resetEvent, 2500);
}

function nextSlide() {
  setEventTimeOut();

  const currentSlide = document.querySelector(".mySlides.active");
  const currentDot = document.querySelector(".dot.active");
  let nextSlide = document.querySelector(".mySlides.active").nextSibling.nextSibling;

  if(nextSlide == null){
    resetSlides()
    slides[slides.length-1].classList = ("mySlides previous transition");
    slides[1].classList = ("mySlides next");
    slides[0].classList = ("mySlides active");
  } else if (nextSlide.nextSibling.nextSibling == null) {
    resetSlides()
    slides[slides.length-2].classList = ("mySlides previous transition");
    slides[slides.length-1].classList = ("mySlides active");
    slides[0].classList = ("mySlides next");
  }else {
    resetSlides()
    nextSlide.classList = ("mySlides active");
    currentSlide.classList = ("mySlides previous transition");
    document.querySelector(".mySlides.active").nextSibling.nextSibling.classList = ("mySlides next");
  };

  let nextDot = currentDot.nextSibling.nextSibling;
  nextDot == null ? nextDot = dots[0] : nextDot;
  currentDot.classList.remove("active");
  nextDot.classList.add("active");
}

function previousSlide(){
  setEventTimeOut();

  const currentSlide = document.querySelector(".mySlides.active");
  const currentDot = document.querySelector(".dot.active");
  let previousSlide = document.querySelector(".mySlides.active").previousSibling.previousSibling;

  if(previousSlide.tagName == undefined){
    resetSlides()
    slides[slides.length-1].classList = ("mySlides active");
    slides[slides.length-2].classList = ("mySlides previous");
    slides[0].classList = ("mySlides next transition");
  } else if (previousSlide.previousSibling.previousSibling.tagName == undefined) {
    resetSlides()
    slides[slides.length-1].classList = ("mySlides previous");
    slides[0].classList = ("mySlides active");
    slides[1].classList = ("mySlides next transition");
  } else {
    resetSlides()
    previousSlide.classList = ("mySlides active");
    currentSlide.classList = ("mySlides next transition");
    document.querySelector(".mySlides.active").previousSibling.previousSibling.classList = ("mySlides previous");
  };

  let previousDot = currentDot.previousSibling.previousSibling;
  previousDot == null ? previousDot = dots[dots.length-1] : previousDot;
  currentDot.classList.remove("active");
  previousDot.classList.add("active");
}
