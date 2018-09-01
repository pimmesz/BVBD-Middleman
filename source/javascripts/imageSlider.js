var sliderIndex = 1;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
var back = document.querySelector(".slideshow__arrow-back");
var next = document.querySelector(".slideshow__arrow-next");

showSlides(sliderIndex);
next.addEventListener("click", nextSlide);
back.addEventListener("click", previousSlide);

// Next/previous controls
function plusSlides(n) {
  showSlides(sliderIndex += n);
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
  var i;
  if (n > slides.length) {sliderIndex = 1}
    if (n < 1) {sliderIndex = slides.length}
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
        slides[i].className = slides[i].className.replace(" active", "");
      }
      slides[sliderIndex-1].classList = 'mySlides active';
      slides[sliderIndex].classList = 'mySlides next';
      slides[slides.length-1].classList = 'mySlides previous';
      dots[sliderIndex-1].className += " active";
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
  var index = 0;
  document.querySelectorAll(".dot").forEach(function(element) {
    index += 1;
    element.setAttribute("onclick", "currentSlide("+index+")");
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

  var currentSlide = document.querySelector(".mySlides.active");
  var currentDot = document.querySelector(".dot.active");
  var nextSlide = document.querySelector(".mySlides.active").nextSibling.nextSibling;

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

  var nextDot = currentDot.nextSibling.nextSibling;
  nextDot == null ? nextDot = dots[0] : nextDot;
  currentDot.classList.remove("active");
  nextDot.classList.add("active");
}

function previousSlide(){
  setEventTimeOut();

  var currentSlide = document.querySelector(".mySlides.active");
  var currentDot = document.querySelector(".dot.active");
  var previousSlide = document.querySelector(".mySlides.active").previousSibling.previousSibling;

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

  var previousDot = currentDot.previousSibling.previousSibling;
  previousDot == null ? previousDot = dots[dots.length-1] : previousDot;
  currentDot.classList.remove("active");
  previousDot.classList.add("active");
}
