if(window.location.pathname == "/" || window.location.pathname == "/BVBD-Middleman/"){
  window.onscroll = function() {myFunction()};

  var banner = document.querySelector(".banner")
  var navbar = document.querySelector(".navbar-wagon")

  var sticky = banner.offsetHeight - 50;

  function myFunction() {
    if (document.body.scrollTop > sticky || document.documentElement.scrollTop > sticky) {
      document.querySelector(".navbar-wagon-brand").innerHTML = "<img src='/images/bvbd-logo-dark.png' alt='logo'>"
      navbar.classList.remove("navbar-invisible")
      navbar.classList.add("navbar-visible")
    } else {
      document.querySelector(".navbar-wagon-brand").innerHTML = "<img src='/images/bvbd-logo-light.png' alt='logo'>"
      navbar.classList.remove("navbar-visible")
      navbar.classList.add("navbar-invisible")
    }
  }
}
