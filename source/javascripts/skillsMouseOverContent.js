var ontwerp = document.querySelector(".divide-banner-skills.ontwerp")
var bouw = document.querySelector(".divide-banner-skills.bouw")
var vastgoed = document.querySelector(".divide-banner-skills.vastgoed")

ontwerp.addEventListener("mouseover", ontwerpHover);
ontwerp.addEventListener("mouseout", ontwerpOut);
bouw.addEventListener("mouseover", bouwHover);
bouw.addEventListener("mouseout", bouwOut);
vastgoed.addEventListener("mouseover", vastgoedHover);
vastgoed.addEventListener("mouseout", vastgoedOut);

function ontwerpHover(){
  bouw.style.width = "10%";
  bouw.children[0].style.opacity = 0;
  vastgoed.style.width = "10%";
  vastgoed.children[0].style.opacity = 0;
}

function ontwerpOut(){
  bouw.style.width = "100%";
  bouw.children[0].style.opacity = 1;
  vastgoed.style.width = "100%";
  vastgoed.children[0].style.opacity = 1;
}

function bouwHover(){
  ontwerp.style.width = "10%";
  ontwerp.children[0].style.opacity = 0;
  vastgoed.style.width = "10%";
  vastgoed.children[0].style.opacity = 0;
}

function bouwOut(){
  ontwerp.style.width = "100%";
  ontwerp.children[0].style.opacity = 1;
  vastgoed.style.width = "100%";
  vastgoed.children[0].style.opacity = 1;
}

function vastgoedHover(){
  ontwerp.style.width = "10%";
  ontwerp.children[0].style.opacity = 0;
  bouw.style.width = "10%";
  bouw.children[0].style.opacity = 0;
}

function vastgoedOut(){
  ontwerp.style.width = "100%";
  ontwerp.children[0].style.opacity = 1;
  bouw.style.width = "100%";
  bouw.children[0].style.opacity = 1;
}
