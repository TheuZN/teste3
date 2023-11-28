const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementsByClassName("nav_item");

openMenu.addEventListener("click", function (){
  let menuMobile = document.querySelector('.mobile-nav');
  if (menuMobile.classList.contains('open')) {
      menuMobile.classList.remove('open');
      document.querySelector('.mobileMenu').src = "assets/img/open.svg";
  } else {
      menuMobile.classList.add('open');
      document.querySelector('.mobileMenu').src = "assets/img/close.svg";
  }
});

for (let i = 0; i < closeMenu.length; i++) {
  closeMenu[i].addEventListener("click", function (){
    let menuMobile = document.querySelector('.mobile-nav');
    if (menuMobile.classList.contains('open')) {
      menuMobile.classList.remove('open');
      document.querySelector('.mobileMenu').src = "assets/img/open.svg";
    }
  });
}