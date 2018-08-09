var squareText = document.querySelector(".square-text")

var ambitie = document.querySelector(".kernwaarde.ambitie")
var logoAmbitie = document.querySelector(".square2")

ambitie.addEventListener("mouseover", moveAmbitieOut);
logoAmbitie.addEventListener("mouseover", moveAmbitieOut);
ambitie.addEventListener("mouseout", moveAmbitieIn);
logoAmbitie.addEventListener("mouseout", moveAmbitieIn);

function moveAmbitieOut(){
  logoAmbitie.style.left = "112px"
  logoAmbitie.style.top = "53px"
  ambitie.classList.add("active")
  squareText.innerHTML = "<p>Procesmatige aanpak van het bouwproject. Het projecct wordt gestuurd op budget. Zodat er optimale verhouding tussen kosten en kwaliteit ontstaat</p>"
}

function moveAmbitieIn(){
  logoAmbitie.style.left = "102px"
  logoAmbitie.style.top = "43px"
  ambitie.classList.remove("active")
  squareText.innerHTML = "<h1>VAN GORSEL</h1>"
};

var budget = document.querySelector(".kernwaarde.budget")
var logoBudget = document.querySelector(".square")

budget.addEventListener("mouseover", moveBudgetOut);
logoBudget.addEventListener("mouseover", moveBudgetOut);
budget.addEventListener("mouseout", moveBudgetIn);
logoBudget.addEventListener("mouseout", moveBudgetIn);

function moveBudgetOut(){
  logoBudget.style.left = "-10px"
  logoBudget.style.top = "53px"
  budget.classList.add("active")
  squareText.innerHTML = "<p>Uitstraling en ambitie. We maken graag mooie dingen. We zetten in op een ambitieus ontwerptraject waarbij wij of een passende ontwerper invulling geeft aan uw wensen en beoogde uitstraling.</p>"
}

function moveBudgetIn(){
  logoBudget.style.left = "0px"
  logoBudget.style.top = "43px"
  budget.classList.remove("active")
  squareText.innerHTML = "<h1>VAN GORSEL</h1>"
};

var techniek = document.querySelector(".kernwaarde.techniek")
var logoTechniek = document.querySelector(".square3")

techniek.addEventListener("mouseover", moveTechniekOut);
logoTechniek.addEventListener("mouseover", moveTechniekOut);
techniek.addEventListener("mouseout", moveTechniekIn);
logoTechniek.addEventListener("mouseout", moveTechniekIn);

function moveTechniekOut(){
  logoTechniek.style.top = "-42px"
  techniek.classList.add("active")
  squareText.innerHTML = "<p>Onze basis is bouwtechniek. We richten ons op een effectieve inzet van middelen We informeren u over techniek als het gaat om uitstraling, klimaat en duurzaamheid.</p>"
}

function moveTechniekIn(){
  logoTechniek.style.top = "-32px"
  techniek.classList.remove("active")
  squareText.innerHTML = "<h1>VAN GORSEL</h1>"
};
