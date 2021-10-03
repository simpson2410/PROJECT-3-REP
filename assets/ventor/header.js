/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

   
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const navLink = document.querySelectorAll(".nav-link");
  
  hamburger.addEventListener("click", mobileMenu);
  navLink.forEach(n => n.addEventListener("click", closeMenu));
  
  function mobileMenu() {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
  }
  
  function closeMenu() {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
  }