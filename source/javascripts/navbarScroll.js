if(window.location.pathname == "/" || window.location.pathname == "/BVBD-Middleman/"){
  window.onscroll = function() {myFunction()};

  var banner = document.querySelector(".banner")
  var navbar = document.querySelector(".navbar-wagon")
  var navbarLogo = document.querySelector("#navbar-logo")

  var sticky = banner.offsetHeight - 50;

  function myFunction() {
    if (document.body.scrollTop > sticky || document.documentElement.scrollTop > sticky) {
      navbarLogo.src = navbar.dataset.logoDark
      navbar.classList.remove("navbar-invisible")
      navbar.classList.add("navbar-visible")
    } else {
      // document.querySelector(".navbar-wagon-brand").innerHTML = "<img src='/images/Van Gorsel -logo-light.png' alt='logo'>"
      navbarLogo.src = navbar.dataset.logoLight
      navbar.classList.remove("navbar-visible")
      navbar.classList.add("navbar-invisible")
    }
  }
}
