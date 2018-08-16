if(window.location.pathname == "/" || window.location.pathname == "/Van-Gorsel-Middleman/"){
  setInterval(change, 6000);

  function change(){
    var homeActive = document.querySelector("#active");
    var bannerActiveNumber = homeActive.dataset.number;
    var bannerActive = findBackground(bannerActiveNumber);
    if(bannerActiveNumber === "3") {
      bannerNextNumber = 4;
      bannerPrepareNumber = 1;
    } else if(bannerActiveNumber === "4"){
      bannerNextNumber = 1;
      bannerPrepareNumber = 2;
    } else{
      bannerNextNumber = parseInt(bannerActiveNumber) + 1;
      bannerPrepareNumber = parseInt(bannerActiveNumber) + 2;

    var bannerNext = findBackground(parseInt(bannerNextNumber));
    var bannerPrepare = findBackground(parseInt(bannerPrepareNumber));
    bannerActive.id = "inactive";
    bannerNext.id = "active";
    bannerPrepare.id = "next";

  }

  function findBackground(number){
    number = "'" + number + "'";
    return document.querySelector("[data-number=" + number + "]");
  }
}
