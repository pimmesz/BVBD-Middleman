if(window.location.pathname == "/" || window.location.pathname == "/BVBD-Middleman/"){
  var ontwerp = document.querySelector(".divide-banner-skills.ontwerp")
  var ontwerpText = document.querySelector(".divide-banner-skills.ontwerp").querySelector("#text")

  var bouw = document.querySelector(".divide-banner-skills.bouw")
  var bouwText = document.querySelector(".divide-banner-skills.bouw").querySelector("#text")

  var vastgoed = document.querySelector(".divide-banner-skills.vastgoed")
  var vastgoedText = document.querySelector(".divide-banner-skills.vastgoed").querySelector("#text")

  ontwerp.addEventListener("mouseover", ontwerpHover);
  ontwerp.addEventListener("mouseout", ontwerpOut);
  bouw.addEventListener("mouseover", bouwHover);
  bouw.addEventListener("mouseout", bouwOut);
  vastgoed.addEventListener("mouseover", vastgoedHover);
  vastgoed.addEventListener("mouseout", vastgoedOut);

  function ontwerpHover(){
    bouw.style.width = "10%";
    bouwText.style.opacity = 0;
    vastgoed.style.width = "10%";
    vastgoedText.style.opacity = 0;
  }

  function ontwerpOut(){
    bouw.style.width = "100%";
    bouwText.style.opacity = 1;
    vastgoed.style.width = "100%";
    vastgoedText.style.opacity = 1;
  }

  function bouwHover(){
    ontwerp.style.width = "10%";
    ontwerpText.style.opacity = 0;
    vastgoed.style.width = "10%";
    vastgoedText.style.opacity = 0;
  }

  function bouwOut(){
    ontwerp.style.width = "100%";
    ontwerpText.style.opacity = 1;
    vastgoed.style.width = "100%";
    vastgoedText.style.opacity = 1;
  }

  function vastgoedHover(){
    ontwerp.style.width = "10%";
    ontwerpText.style.opacity = 0;
    bouw.style.width = "10%";
    bouwText.style.opacity = 0;
  }

  function vastgoedOut(){
    ontwerp.style.width = "100%";
    ontwerpText.style.opacity = 1;
    bouw.style.width = "100%";
    bouwText.style.opacity = 1;
  }
}
