// if(window.location.pathname == "/" || window.location.pathname == "/Van-Gorsel-Middleman/"){
  var squareText = document.querySelector(".square-text")
  var array = ["ambitie", "budget","techniek"]

  array.forEach(function(element) {
    var waarde = window[element] = document.querySelector(".kernwaarde." + element)
    var waardeLogo = window["logo"+element.capitalize()] = document.querySelector(".square"+array.indexOf(element))

    waarde.addEventListener("mouseover", window["move" + element.capitalize() + "Out"]);
    waardeLogo.addEventListener("mouseover", window["move" + element.capitalize() + "Out"]);
    waarde.addEventListener("mouseout", window["move" + element.capitalize() + "In"]);
    waardeLogo.addEventListener("mouseout", window["move" + element.capitalize() + "In"]);
  });

  function moveAmbitieOut(){
    logoAmbitie.style.left = "112px"
    logoAmbitie.style.top = "53px"
    ambitie.classList.add("active")

    transitionText("<p>Uitstraling en ambitie. We maken graag mooie dingen. We zetten in op een ambitieus ontwerptraject waarbij wij of een passende ontwerper invulling geeft aan uw wensen en beoogde uitstraling.</p>")
  }

  function moveAmbitieIn(){
    logoAmbitie.style.left = "102px"
    logoAmbitie.style.top = "43px"
    ambitie.classList.remove("active")

    resetTitle()
  };

  function moveBudgetOut(){
    logoBudget.style.left = "-10px"
    logoBudget.style.top = "53px"
    budget.classList.add("active")

    transitionText("<p>Procesmatige aanpak van het bouwproject. Het projecct wordt gestuurd op budget. Zodat er optimale verhouding tussen kosten en kwaliteit ontstaat </p>")
  }

  function moveBudgetIn(){
    logoBudget.style.left = "0px"
    logoBudget.style.top = "43px"
    budget.classList.remove("active")
    resetTitle();
  };

  function moveTechniekOut(){
    logoTechniek.style.top = "-42px"
    techniek.classList.add("active")

    transitionText("<p>Onze basis is bouwtechniek. We richten ons op een effectieve inzet van middelen We informeren u over techniek als het gaat om uitstraling, klimaat en duurzaamheid.</p>")
  }

  function moveTechniekIn(){
    logoTechniek.style.top = "-32px"
    techniek.classList.remove("active")
    resetTitle();
  }

  function resetTitle(){
    squareText.innerHTML = ""
    var html = "<h1>VAN GORSEL</h1><p><i>ontwerpˑrealisatie</i></p>"
    $(html).hide().appendTo(".square-text").fadeIn(800);
  }

  function transitionText(text){
    squareText.innerHTML = ""
    $(text).hide().appendTo(".square-text").fadeIn(800);
  }
// }
