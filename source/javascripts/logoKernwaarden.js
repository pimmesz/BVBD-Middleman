// if(window.location.pathname.indexOf("projects") < 0){
  var squareText = document.querySelector(".square-text")
  var array = ["ambitie", "budget","techniek"]

  array.forEach(function(element) {
    var waarde = window[element] = document.querySelector(".kernwaarde." + element)
    var waardeLogo = window["logo"+element.capitalize()] = document.querySelector(".square"+array.indexOf(element))

    waardeLogo.addEventListener("mouseover", window["move" + element.capitalize() + "Out"]);
    waardeLogo.addEventListener("mouseout", window["move" + element.capitalize() + "In"]);
  });

  function moveAmbitieOut(){
    logoAmbitie.style.left = "112px";
    logoAmbitie.style.top = "53px";
    logoBudget.style.opacity = 0.3;
    logoTechniek.style.opacity = 0.3;

    transitionText("<h4>Uitstraling</h4><br><p>Een gebouw moet goed te gebruiken zijn en altijd er goed uitzien. Zowel bij oplevering als tijdens gebruik. We dagen u graag uit het maximale uit uw bouwproject te halen.</p>")
  }

  function moveAmbitieIn(){
    logoAmbitie.style.left = "102px";
    logoAmbitie.style.top = "43px";
    logoBudget.style.opacity = 1;
    logoTechniek.style.opacity = 1;

    resetText()
  };

  function moveBudgetOut(){
    logoBudget.style.left = "-10px";
    logoBudget.style.top = "53px";
    logoAmbitie.style.opacity = 0.3;
    logoTechniek.style.opacity = 0.3;

    transitionText("<h4>Professionaliteit</h4><br><p>We laten uw project graag soepel verlopen. We zijn open over alle facetten van het project.</p>")
  }

  function moveBudgetIn(){
    logoBudget.style.left = "0px";
    logoBudget.style.top = "43px";
    logoAmbitie.style.opacity = 1;
    logoTechniek.style.opacity = 1;

    resetText();
  };

  function moveTechniekOut(){
    logoTechniek.style.top = "-42px";
    logoAmbitie.style.opacity = 0.3;
    logoBudget.style.opacity = 0.3;

    transitionText("<h4>Techniek</h4><br><p>We informeren u graag over techniek en de consequenties van de techniek voor de uitstraling of duurzaamheid van uw gebouw.</p>")
  }

  function moveTechniekIn(){
    logoTechniek.style.top = "-32px";
    logoAmbitie.style.opacity = 1;
    logoBudget.style.opacity = 1;

    resetText();
  }

  function resetText(){
    squareText.innerHTML = ""
    var html = ""
    $(html).hide().appendTo(".square-text").fadeIn(800);
  }

  function transitionText(text){
    squareText.innerHTML = ""
    $(text).hide().appendTo(".square-text").fadeIn(800);
  }
// }
