if(window.location.pathname == "/" || window.location.pathname == "/Van-Gorsel-Middleman/"){
  window.onscroll = function() {myFunction()};

  var banner = document.querySelector(".banner")
  var navbar = document.querySelector(".navbar-van-gorsel")
  var navbarLogo = document.querySelector("#navbar-logo")
  var navbarTextH5 = document.querySelector(".navbar-logo-text").children[0]
  var navbarTextP = document.querySelector(".navbar-logo-text").children[1]
  var hamburgerMenu = document.querySelector(".navbar-van-gorsel-item.hidden-md.hidden-lg")

  var sticky = banner.offsetHeight - 50;

  function myFunction() {
    if (document.body.scrollTop > sticky || document.documentElement.scrollTop > sticky) {
      navbar.classList.remove("navbar-invisible")
      navbar.classList.add("navbar-visible")
      hamburgerMenu.style.color = "#001021"
      navbarTextH5.style.color = "#001021"
      navbarTextP.style.color = "#001021"
    } else {
      navbar.classList.remove("navbar-visible")
      navbar.classList.add("navbar-invisible")
      hamburgerMenu.style.color = "#ffffff"
      navbarTextH5.style.color = "#ffffff"
      navbarTextP.style.color = "#ffffff"
    }
  }
}
