if(window.location.pathname == "/"){
  window.onscroll = function() {myFunction()};

  var banner = document.querySelector(".banner")
  var navbar = document.querySelector(".navbar-wagon")

  var sticky = banner.offsetHeight;

  function myFunction() {
    if (document.body.scrollTop > sticky || document.documentElement.scrollTop > sticky) {
      navbar.classList.remove("navbar-invisible")
      navbar.classList.add("navbar-visible")
    } else {
      navbar.classList.remove("navbar-visible")
      navbar.classList.add("navbar-invisible")
    }
  }
}
